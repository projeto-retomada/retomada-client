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
        
    },
    data() {
        return {
            modalAddActivity: false
        };
    },
    methods: {
        addActivity() {
            this.$refs.popupAdd.openModal();
        },
    }
}