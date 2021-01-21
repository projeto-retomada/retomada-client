import Loader from '../../components/Loader.vue';
import { freeSet } from '@coreui/icons';
import { dateFormat } from '../../../utils/utils';

export default {
    arrowLeft: freeSet.cilArrowLeft,
    components: {
        'loader': Loader,
    },
    icons: { freeSet },
    name: 'ActivitiesView',
    props: ['activitie'],
    created() {
        console.log(this.activitie)
        let vm = this

        if (this.activitie.id_activity) {
            vm.selectedActivitie = vm.activitie
            vm.selectedActivitie.startDate = dateFormat(new Date(vm.selectedActivitie.start_date))
            vm.selectedActivitie.endDate = dateFormat(new Date(vm.selectedActivitie.end_date))
            this.loadUsers()
        } else {
            this.backToList()
        }
    },
    data() {
        return {
            selectedActivitie: undefined,
            myActivitieLoaded: true,
            user: JSON.parse(localStorage.getItem('user')),
            btn_disabled: false
        };
    },
    watch: {
        "selectedActivitie.usuarios"() {
            // handler: function (val, oldVal) {
            this.disabledBtn()
            // },
            // deep: true
        }
    },
    methods: {
        backToList() {
            this.$router.replace({
                name: "Activities",
            })
        },
        confirmParticipation() {
            var vm = this;
            var user = JSON.parse(localStorage.getItem('user'));
            this.axios.post('/interaction/', {
                user_id: parseInt(user.id_user),
                activity_id: parseInt(vm.selectedActivitie.id_activity)
            }).then(function () {
                vm.$floatingAlert.success({
                    title: "Sucesso!",
                    message: "Você foi cadastrado na atividade!",
                })
                vm.alreadyAnswered = true;
                vm.loadUsers()
            }).catch(err => console.log(err));
        },
        loadUsers() {
            let vm = this;
            this.axios.get("/interaction/" + vm.selectedActivitie.id_activity).then(function (response) {
                vm.selectedActivitie.usuarios = response.data
                console.log(vm.selectedActivitie)
            }).finally(function () {
                vm.myActivitieLoaded = true
                vm.$forceUpdate();
                vm.disabledBtn()

            });
        },
        disabledBtn() {
            let vm = this

            let responnse = this.selectedActivitie.usuarios.find((usr) => {
                return usr.user_id == vm.user.id_user
            })

            if (responnse) {
                vm.btn_disabled = true
            } else {
                vm.btn_disabled = false
            }
        }
    }
}