import InfectedCard from '../../components/InfectedCard';
import InfectedsByGroup from '../../components/InfectedsByGroup'
import LastActivitiesInfecteds from '../../components/LastActivitiesInfecteds'
import LastInfecteds from '../../components/LastInfecteds'
import {CChartLine}  from '@coreui/vue-chartjs'

export default {
    name: 'Dashboard',
    components: {
        CChartLine,
        'infected-card': InfectedCard,
        'infecteds-by-groups': InfectedsByGroup,
        'last-activities-infecteds': LastActivitiesInfecteds,
        'last-infecteds': LastInfecteds
    },
    data () {
      return {
        totalStudents: 0,
        infectedStudents: 0,
        totalTeachers: 0,
        infectedTeachers: 0,
        totalAdmins: 0,
        infectedAdmins: 0,
        labels: [],
        dataset: [],
        infectedStudentsList: [],
        infectedTeachersList: [],
        activitiesTeachers: [],
        activitiesStudents: []
      }
    },
    created() {
      var vm = this;
      this.axios.get('dash/positive-students', {})
      .then(function (result) {
        vm.totalStudents = result.data.total_students;
        vm.infectedStudents = result.data.positive_students;
      });
      this.axios.get('dash/positive-teachers', {})
      .then(function (result) {
        vm.totalTeachers = result.data.total_teachers;
        vm.infectedTeachers = result.data.positive_teachers;
      });
      this.axios.get('dash/positive-admins', {})
      .then(function (result) {
        vm.totalAdmins = result.data.total_admins;
        vm.infectedAdmins = result.data.positive_admins;
      });
      this.axios.get('dash/covid-timeseries', {})
      .then(function (result) {
        var serialCases = result.data;
        serialCases.forEach(dateCases => {
          vm.dataset.push(dateCases.count);
          vm.labels.push(dateCases.creation.split('-')[2] + '/' + dateCases.creation.split('-')[1] + '/' + dateCases.creation.split('-')[0]);
        });
      });
      this.axios.get('dash/last-students-cases', {})
      .then(function (result) {
        vm.infectedStudentsList = result.data.slice(0,4);
        vm.infectedStudentsList.forEach(function(user) {
            if (!user.picture) {
              user.picture = 'img/avatars/user_default.png';
            }
        });
      });
      this.axios.get('dash/last-teachers-cases', {})
      .then(function (result) {
        vm.infectedTeachersList = result.data.slice(0,4);
        vm.infectedTeachersList.forEach(function(user) {
            if (!user.picture) {
              user.picture = 'img/avatars/user_default.png';
            }
        });
      });
      this.axios.get('dash/activities-student', {})
      .then(function (result) {
        vm.activitiesStudents = result.data.slice(0,4);
      });
      this.axios.get('dash/activities-teacher', {})
      .then(function (result) {
        vm.infectedTeachersList = result.data.slice(0,4);
      });
    },
    methods: {
    },
    computed: {
        defaultDatasets () {
          var vm = this;
            return [
              {
                label: 'Número de infectados',
                backgroundColor: 'rgb(34,165,168,0.65)',
                data: vm.dataset
              }
            ]
        }
      }
}