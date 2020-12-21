<template>
  <div>
      <CCard class="questionnare-card">
            <CCardBody>
                <p class="u-semibold">
                    Semana {{weekNumber}} <span class="u-font-size-10 p-color-gray-60">/ 52</span>
                </p>
                <p class="u-line-height-8 u-margin-bottom-0 u-font-size-12">Período de correspodência: </p>
                <p class="u-font-size-12">de {{withoutTime(week.sunday)}} a {{withoutTime(week.saturday)}}</p>
            </CCardBody>
            <CCardFooter @click="action">
                <span>{{actionText}}</span>
                <i class="fas fa-arrow-right"></i>
            </CCardFooter>
      </CCard>
  </div>
</template>

<script>
    import * as utils from '../../utils/utils';
    export default {
        name: 'QuestionnaireCard',
        props: {
            questionnaire: {
                required: true
            }
        },
        created() {
            if (this.questionnaire) {
                this.week = utils.getWeekSpace(new Date(this.questionnaire.creation))
                this.action = this.viewQuestionnaire
                this.actionText = 'Visualizar Respostas'
                this.weekNumber = utils.getWeekNumber(new Date(this.questionnaire.creation))
            } else {
                this.week = utils.getWeekSpace(new Date())
                this.action = this.answerQuestionnaire
                this.weekNumber = utils.getWeekNumber(new Date())
            }
        },
        data() {
            return {
                week: '',
                weekNumber: '',
                withoutTime: utils.withoutTime,
                action: '',
                actionText: 'Responder'
            };
        },
        methods: {
            answerQuestionnaire() {
                this.$router.replace({ name: 'QuestionnaireForm'})
            },
            viewQuestionnaire() {
                console.log(this.questionnaire.id_health_quest)
                this.$router.replace({ name: 'QuestionnaireFormRead', params: {idQuestionnaire: this.questionnaire.id_health_quest}})
            }
        }
    }
</script>