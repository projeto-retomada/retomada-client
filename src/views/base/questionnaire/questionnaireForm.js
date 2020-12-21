import * as utils from '../../../utils/utils'

export default {
    name: 'QuestionnaireForm',
    props: {
        idQuestionnaire: {
            required: false
        }
    },
    created() {
        var vm = this;
        if (this.idQuestionnaire) {
            this.axios.get('/questionnaire/', {
                params: {
                    filters: JSON.stringify({
                        id: parseInt(this.idQuestionnaire)
                    })
                }
            }).then(function (res) {
                var questionnaire = res.data[0];
                vm.answer = JSON.parse(questionnaire.answer);
            })
        } else {
            this.answer = {
                fever: 'yes',
                testedPositive: 'yes',
                exposedVirus: 'yes',
                lossTaste: 'yes',
                chestPressure: 'yes',
                shortnessBreathe: 'yes',
                tiredness: 'yes'
            }
        }
    },
    data() {
        return {
            week: utils.getWeekSpace(new Date()),
            withoutTime: utils.withoutTime,
            answer: {},
            alreadyAnswered: false
        };
    },
    methods: {
        saveAnswer() {
            var vm = this;
            var user = JSON.parse(localStorage.getItem('user'));            
            this.axios.post('/questionnaire/', {
                answer: JSON.stringify(vm.answer),
                user_id: parseInt(user.id_user)
            }).then(function () {
                vm.$floatingAlert.success({
                    title: "Sucesso!",
                    message: "As respostas do seu questionário semanal foram armazenadas corretamente!",
                })
                vm.alreadyAnswered = true;
            });
        },
    }
}