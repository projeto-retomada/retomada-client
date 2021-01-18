<template>
  <div>
    <CCard class="places-card">
      <i
        v-if="role == 'ADM'"
        style="padding: 10px"
        class="fas fa-pencil-alt icon_pencil"
        @click="editLocal"
      ></i>
      <i
        style="padding: 10px; float: right"
        class="fas fa-trash p-color-red-55 u-margin-left-1"
        @click="deleteLocal"
      ></i>
      <CCardBody @click="viewPlace(place)">
        <p class="u-semibold p-color-gray-10">{{ place.name }}</p>
        <p class="u-line-height-8 u-margin-bottom-2 u-font-size-12">
          Lotação máxima: {{ lotacao }}
        </p>
        <p class="u-line-height-8 u-margin-bottom-0 u-font-size-12">
          Visitado pela última vez em {{ lastView }}
        </p>
      </CCardBody>
    </CCard>
    <popup-delete-local ref="popupDeleteLocal"></popup-delete-local>
    <popup-edit-local ref="popupEditLocal"></popup-edit-local>
  </div>
</template>

<script>
import * as utils from "../../utils/utils";
import PopupDeleteLocal from "./PopupDeleteLocal.vue";
import PopupEditLocal from "./PopupEditLocal.vue";

export default {
  name: "PlacesCard",
  components: {
    "popup-delete-local": PopupDeleteLocal,
    "popup-edit-local": PopupEditLocal,
  },
  props: {
    place: {
      required: true,
    },
    role: {
      required: true,
    },
  },
  created() {
    if (this.place) {
      this.lotacao = this.place.maximum_capacity + " pessoas.";
      let data = new Date(this.place.last_update);
      data =
        data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
      this.lastView = data;
    } else {
      this.lotacao = "Indefinido";
      this.lastView = "Nunca visitado por você";
    }
  },
  data() {
    return {
      lotacao: "",
      lastView: "",
    };
  },
  methods: {
    viewPlace(selectedPlace) {
      this.$router.replace({
        name: "PlacesView",
        params: { place: selectedPlace },
      });
    },
    // editActivity() {
    //   this.$refs.popupEdit.openModal(this.activity);
    // },
    deleteLocal() {
      this.$refs.popupDeleteLocal.openModal(this.place);
    },
    editLocal() {
      this.$refs.popupEditLocal.openModal(this.place);
    },
  },
};
</script>