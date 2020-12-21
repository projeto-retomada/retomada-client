import * as utils from '../../../utils/utils'
import QuestionnaireCard from '../../components/QuestionnaireCard.vue';
import Loader from '../../components/Loader.vue';
export default {
    components: {
        'questionnaire-card': QuestionnaireCard,
        'loader': Loader,
    },
    name: 'QuestionnaireList',
    props: {
    },
    created() {
        var user = JSON.parse(localStorage.getItem('user')); 
        var vm = this; 
        this.axios.get('/questionnaire/', {
            params: {
                filters: JSON.stringify({
                    user_id: parseInt(user.id_user)
                })
            }
        }).then(function (res) {
            vm.myQuestionnaires = res.data;
            vm.myQuestionnaires.forEach(q => {
                q.answer = JSON.parse(q.answer);
            });
            vm.myActualQuestionnaire = vm.myQuestionnaires.find(q => {
                var week = utils.getWeekSpace(new Date());
                return new Date(q.creation) >= week.sunday.setHours(0,0,0,0) && new Date(q.creation) <= week.saturday.setHours(23,59,59,0);
            });
            var index = vm.myQuestionnaires.indexOf(vm.myActualQuestionnaire);
            if (index >= 0) {
                vm.myQuestionnaires.splice(index, 1);
            }
        }).finally(function () {
            vm.myQuestionnairesLoaded = true;
        });

        // LOADING TEACHERS QUESTIONNAIRES
        this.axios.get('/questionnaire/teacher/' + user.organization_id, {}).then(function (res) {
            vm.teachersQuestionnaires = res.data;
            vm.teachersQuestionnaires.forEach(q => {
                q.answer = JSON.parse(q.answer);
            });
        }).finally(function () {
            vm.teachersQuestionnairesLoaded = true;
        });

        // LOADING STUDENTS QUESTIONNAIRES
        this.axios.get('/questionnaire/student/' + user.organization_id, {}).then(function (res) {
            vm.studentsQuestionnaires = res.data;
            vm.studentsQuestionnaires.forEach(q => {
                q.answer = JSON.parse(q.answer);
            });
        }).finally(function () {
            vm.studentsQuestionnairesLoaded = true;
        });
    },
    data() {
        return {
            myQuestionnaires: [],
            myActualQuestionnaire: {},
            teachersQuestionnaires: [],
            studentsQuestionnaires: [],
            myQuestionnairesLoaded: false,
            teachersQuestionnairesLoaded: false,
            studentsQuestionnairesLoaded: false,
            role: JSON.parse(localStorage.getItem('user')).role
        };
    },
}