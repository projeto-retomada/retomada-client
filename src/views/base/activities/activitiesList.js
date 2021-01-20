import Loader from '../../components/Loader.vue';
import ActivityCard from '../../components/ActivityCard.vue';
import PopupAddActivity from '../../components/PopupAddActivity.vue';

export default {
    components: {
        'loader': Loader,
        'activity-card': ActivityCard,
        'popup-add-activity': PopupAddActivity,
    },
    name: 'ActivitiesList',
    props: {
    },
    created() {
        var vm = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.axios.get('/activity/', {
            params: {
              organization_id: user.organization_id
            }
        })
        .then(function(response) {
            vm.activities = response.data;
            var now = new Date();
            if (vm.activities.length) {
                vm.onGoing = vm.activities.filter( (activity) => {
                    activity.start_date = new Date(activity.start_date);
                    activity.end_date = new Date(activity.end_date);
                    return activity.start_date <= now && activity.end_date > now;
                });
                vm.onGoing.forEach(activity => {
                    activity.type = 'ongoing';
                });
                vm.finished = vm.activities.filter( (activity) => {
                    activity.start_date = new Date(activity.start_date);
                    activity.end_date = new Date(activity.end_date);
                    return activity.end_date < now;
                });
                vm.finished.forEach(activity => {
                    activity.type = 'finished';
                });
                vm.scheduled = vm.activities.filter( (activity) => {
                    activity.start_date = new Date(activity.start_date);
                    activity.end_date = new Date(activity.end_date);
                    return activity.start_date > now;
                });
                vm.scheduled.forEach(activity => {
                    activity.type = 'scheduled';
                });
            }
        })
        .finally(function () {
            vm.activitiesLoading = false;
        });        
    },
    data() {
        return {
            activitiesLoading: true,
            activities: [],
            onGoing: [],
            finished: [],
            scheduled: [],
            modalAddActivity: false,
            user: JSON.parse(localStorage.getItem('user'))
        };
    },
    methods: {
        addActivity() {
            this.$refs.popupAdd.openModal();
        },
    }
}