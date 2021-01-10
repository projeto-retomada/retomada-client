import PlacesCard from '../../components/PlacesCard.vue';
import Loader from '../../components/Loader.vue';
import { freeSet } from '@coreui/icons';

export default {
    arrowLeft: freeSet.cilArrowLeft,
    components: {
        'places-card': PlacesCard,
        'loader': Loader,
    },
    icons: { freeSet },
    name: 'PlacesList',
    props: {
    },
    created() {
        var user = JSON.parse(localStorage.getItem('user'));
        var vm = this;
        console.log(JSON.parse(localStorage.getItem('user')).role)
        this.axios.get('/organizations/' + user.organization_id + "/places").then(function (res) {
            vm.myPlaces = res.data;
        }).finally(function () {
            vm.myPlacesLoaded = true;
        });
    },
    data() {
        return {
            selectedPlace: undefined,
            myPlaces: [],
            myWeekPlaces: [],
            myPlacesLoaded: false,
            role: JSON.parse(localStorage.getItem('user')).role
        };
    },
    methods: {
        viewPlace(place) {
            this.selectedPlace = place
        }
    }
}