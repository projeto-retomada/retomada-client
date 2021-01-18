<template>
  <CModal title="Criar Local" :show.sync="showModal">
    <form>
      <div class="form-group">
        <label for="placeName">Nome do Local</label>
        <input
          required
          type="text"
          class="form-control"
          id="placeName"
          v-model="model.name"
        />
      </div>
      <div class="form-group">
        <label>Organização</label>
        <select class="form-control" v-model="model.organization_id">
          <option
            :value="org.id_organization"
            v-for="org in organizations"
            :key="org.id_organization"
          >
            {{ org.name }}
          </option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Área aberta</label>
          <select class="form-control" v-model="model.openArea">
            <option value="S">Sim</option>
            <option value="N">Não</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="maximum_capacity">Capacidade máxima</label>
          <input
            required
            type="number"
            class="form-control"
            id="maximum_capacity"
            v-model="model.maximum_capacity"
          />
        </div>
      </div>
    </form>
    <template #footer>
      <button class="btn btn-secondary" @click="showModal = false">
        Cancelar
      </button>
      <button class="btn btn-primary" @click="saveLocal">Salvar</button>
    </template>
  </CModal>
</template>
<script>
export default {
  name: "PopupAddActivity",
  props: {},
  created() {
    var vm = this;
    var user = JSON.parse(localStorage.getItem("user"));
    this.axios.get("/organizations/").then(function (response) {
      vm.organizations = response.data;
    });
  },
  data() {
    return {
      places: [],
      organizations: [],
      showModal: false,
      model: {},
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.model = {
        name: "Novo Local",
      };
    },
    saveLocal() {
      var vm = this;
      console.log(this.model);
      var user = JSON.parse(localStorage.getItem("user"));
      this.axios
        .post("/organizations/" + vm.model.organization_id + "/places/", {
          name: vm.model.name,
          maximum_capacity: JSON.parse(vm.model.maximum_capacity),
          open_area: vm.model.openArea,
          organization_id: vm.model.organization_id,
        })
        .then(function () {
          vm.$floatingAlert.success({
            title: "Sucesso!",
            message: "Os dados de sua atividade foram salvos corretamente!",
          });
        })
        .finally(function () {
          vm.showModal = false;
        });
      window.EventBus.$emit("PlaceReloadData");
    },
  },
};
</script>