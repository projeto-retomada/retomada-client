<template>
  <div>
    <CCard class="places-card" @click="viewPlace(place)">
      <CCardBody>
        <i v-if="role == 'ADM'" class="fas fa-pencil-alt icon_pencil"></i>
        <p class="u-semibold p-color-gray-10">{{ place.name }}</p>
        <p class="u-line-height-8 u-margin-bottom-2 u-font-size-12">
          Lotação máxima: {{ lotacao }}
        </p>
        <p class="u-line-height-8 u-margin-bottom-0 u-font-size-12">
          Visitado pela última vez em {{ lastView }}
        </p>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import * as utils from "../../utils/utils";
export default {
  name: "PlacesCard",
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
  },
};
</script>