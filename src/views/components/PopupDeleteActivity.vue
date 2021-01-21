<template>
  <CModal title="Deletar Atividade" :show.sync="showModalDelete">
    <p>Desejar excluir permanentemente a atividade {{ model.name }}?</p>
    <template #footer>
      <button class="btn btn-secondary" @click="showModal = false">
        Cancelar
      </button>
      <button class="btn btn-primary" @click="deleteActivity">Confirmar</button>
    </template>
  </CModal>
</template>
<script>
export default {
  name: "PopupDeleteActivity",
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
    openModal(activity) {
      this.showModalDelete = true;
      this.model = activity;
    },
    deleteActivity() {
      var vm = this;
      console.log(this.model);
      var user = JSON.parse(localStorage.getItem("user"));
      this.axios
        .delete("/activity/" + vm.model.id_activity)
        .then(function () {
          vm.$floatingAlert.success({
            title: "Sucesso!",
            message: "Os dados de sua atividade foram deletados!",
          });
        })
        .finally(function () {
          vm.showModalDelete = false;
        });
    },
  },
};
</script>