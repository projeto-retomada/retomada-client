import ListMyActivities from '../../components/ListMyActivities.vue';
import ListMyLastPlaces from '../../components/ListMyLastPlaces.vue';
import ListMyHeathQuestionnare from '../../components/ListMyHeathQuestionnare.vue';
import RoleBadge from '../../components/RoleBadge.vue';

export default {
    components: {
        'list-my-activities': ListMyActivities,
        'list-my-last-places': ListMyLastPlaces,
        'list-my-health-questionnare': ListMyHeathQuestionnare,
        'role-badge': RoleBadge
    },
    name: 'Profile',
    props: {
        username: {
            required: true,
        },
    },
    created() {
        
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user'))
        };
    },
}