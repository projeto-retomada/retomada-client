import PlacesCard from '../../components/PlacesCard.vue';
import Loader from '../../components/Loader.vue';
import PopupAddLocal from '../../components/PopupAddLocal.vue';
import { freeSet } from '@coreui/icons';

export default {
    arrowLeft: freeSet.cilArrowLeft,
    components: {
        'places-card': PlacesCard,
        'loader': Loader,
        'popup-add-local': PopupAddLocal
    },
    icons: { freeSet },
    name: 'PlacesList',
    props: {
    },
    mounted() {
        this.reloadData()
        window.EventBus.$on("PlaceReloadData", this.reloadData)
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
        },
        addLocal() {
            this.$refs.popupAddLocal.openModal();
        },
        reloadData() {
            console.log("RELOAD DATA")
            var user = JSON.parse(localStorage.getItem('user'));
            var vm = this;
            this.axios.get('/organizations/' + user.organization_id + "/places").then(function (res) {
                vm.myPlaces = res.data;
            }).finally(function () {
                vm.myPlacesLoaded = true;
            });
        }
    }
}