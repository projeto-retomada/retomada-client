import * as utils from '../../../utils/utils'

export default {
    name: 'QuestionnaireForm',
    props: {
    },
    created() {
        
    },
    data() {
        return {
            week: utils.getWeekSpace(new Date()),
            withoutTime: utils.withoutTime,
            answer: {
                fever: 'yes',
                testedPositive: 'yes',
                exposedVirus: 'yes',
                lossTaste: 'yes',
                chestPressure: 'yes',
                shortnessBreathe: 'yes',
                tiredness: 'yes'
            }
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
            });
        },
    }
}