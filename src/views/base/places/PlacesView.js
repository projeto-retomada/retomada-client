import Loader from '../../components/Loader.vue';
import { freeSet } from '@coreui/icons';
import { dateFormat } from '../../../utils/utils';

export default {
    arrowLeft: freeSet.cilArrowLeft,
    components: {
        'loader': Loader,
    },
    icons: { freeSet },
    name: 'PlacesView',
    props: ['place'],
    created() {
        console.log(this.place.creation)
        if (this.place.id_place) {
            this.selectedPlace = this.place
            this.selectedPlace.creation = dateFormat(new Date(this.selectedPlace.creation))
            this.selectedPlace.last_update = dateFormat(new Date(this.selectedPlace.last_update))
            this.myPlaceLoaded = true
        } else {
            this.backToList()
        }
    },
    data() {
        return {
            selectedPlace: undefined,
            myPlaceLoaded: true,
            role: JSON.parse(localStorage.getItem('user')).role
        };
    },
    methods: {
        backToList() {
            console.log("AA")
            this.$router.replace({
                name: "Places",
            })
        }
    }
}