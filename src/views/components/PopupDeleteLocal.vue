<template>
  <CModal title="Deletar Local" :show.sync="showModalDelete">
    <p>Desejar excluir permanentemente o local {{ model.name }}?</p>
    <template #footer>
      <button class="btn btn-secondary" @click="showModal = false">
        Cancelar
      </button>
      <button class="btn btn-primary" @click="deleteModal">Confirmar</button>
    </template>
  </CModal>
</template>
<script>
export default {
  name: "PopupDeleteLocal",
  created() {
    // console.log(this);
  },
  data() {
    return {
      showModalDelete: false,
      model: {},
    };
  },
  methods: {
    openModal(local) {
      this.showModalDelete = true;
      this.model = local;
      // console.log(this.model);
    },
    deleteModal() {
      let vm = this;
      let id_organization = this.model.organization_id;
      let place_id = this.model.id_place;

      this.axios
        .delete("/organizations/" + id_organization + "/places/" + place_id)
        .then(function () {
          vm.$floatingAlert.success({
            title: "Sucesso!",
            message: "Os dados referentes ao local foram deletados!",
          });
        })
        .finally(function () {
          vm.showModalDelete = false;
        });
      setTimeout(function () {
        window.EventBus.$emit("PlaceReloadData");
      }, 300);
    },
  },
};
</script>