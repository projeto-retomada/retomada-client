<template>
  <div>
      <CCard class="questionnare-card">
            <CCardBody>
                <p class="u-semibold">
                    Semana 12 <span class="u-font-size-10 p-color-gray-60">/ 52</span>
                </p>
                <p class="u-line-height-8 u-margin-bottom-0 u-font-size-12">Período de correspodência: </p>
                <p class="u-font-size-12">de {{withoutTime(week.sunday)}} a {{withoutTime(week.saturday)}}</p>
                <p class="u-font-size-10 p-color-gray-60">(Não respondido)</p>
            </CCardBody>
            <CCardFooter @click="$router.replace({ name: 'QuestionnaireForm'})">
                <span>Responder</span>
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
        },
        created() {
            
        },
        data() {
            return {
                week: utils.getWeekSpace(new Date()),
                withoutTime: utils.withoutTime,
            };
        },
    }
</script>