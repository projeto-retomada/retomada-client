import PlacesCard from '../../components/PlacesCard.vue';
import Loader from '../../components/Loader.vue';
export default {
    components: {
        'places-card': PlacesCard,
        'loader': Loader,
    },
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
            myPlaces: [],
            myWeekPlaces: [],
            myPlacesLoaded: false,
            role: JSON.parse(localStorage.getItem('user')).role
        };
    },
}