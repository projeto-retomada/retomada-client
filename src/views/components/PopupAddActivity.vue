<template>
  <CModal title="Criar Atividade" :show.sync="showModal">
    <form>
      <div class="form-group">
        <label for="activityName">Nome da atividade</label>
        <input required type="text" class="form-control" id="activityName" v-model="model.name" />
      </div>
      <div class="form-group">
        <label for="activityDesc">Descrição da atividade</label>
        <textarea
          required
          class="form-control"
          id="activityDesc"
          aria-describedby="emailHelp"
          rows="3"
          v-model="model.description"
        ></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="activityDateStart">Data de início</label>
          <input type="date" class="form-control" id="activityDateStart"  v-model="model.startDate"/>
        </div>
        <div class="form-group col-md-6">
          <label for="activityTimeStart">Horário de início</label>
          <input type="time" class="form-control" id="activityTimeStart" v-model="model.startTime"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="activityDateEnd">Data de finalização</label>
          <input type="date" class="form-control" id="activityDateEnd" v-model="model.endDate"/>
        </div>
        <div class="form-group col-md-6">
          <label for="activityTimeEnd">Horário de finalização</label>
          <input type="time" class="form-control" id="activityTimeEnd" v-model="model.endTime"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Local</label>
          <select class="form-control" v-model="model.place">
            <option :value="place.id_place" v-for="place in places" :key="place.id">{{ place.name }}</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label>Turma</label>
          <select class="form-control" v-model="model.group">
            <option :value="usergroup.id_usergroup" v-for="usergroup in usergroups" :key="usergroup.id">{{ usergroup.name }}</option>
          </select>
        </div>
      </div>
    </form>
    <template #footer>
      <button class="btn btn-secondary" @click="showModal=false">Cancelar</button>
      <button class="btn btn-primary" @click="saveActivity">Salvar</button>
    </template>
  </CModal>
</template>
<script>
export default {
  name: "PopupAddActivity",
  props: {
      
  },
  created() {
    var vm = this;
    var user = JSON.parse(localStorage.getItem('user'));
    this.axios.get('/organizations/'+ user.organization_id +'/places')
    .then(function(response) {
        vm.places = response.data;
    });
    this.axios.get('/organizations/'+ user.organization_id +'/usergroups')
    .then(function(response) {
        vm.usergroups = response.data;
    });
  },
  data() {
    return {
      places: [],
      usergroups: [],
      showModal: false,
      model: {}
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.model = {
        name: 'Nova Atividade',        
      } 
    },
    saveActivity() {
      var vm = this;
      console.log(this.model);
      var user = JSON.parse(localStorage.getItem('user'));            
      this.axios.post('/activity/', {
        name: vm.model.name,
        description: vm.model.description,
        start_date: new Date(vm.model.startDate + ' ' + vm.model.startTime),
        end_date: new Date(vm.model.endDate + ' ' + vm.model.endTime),
        organization_id: user.organization_id,
        place_id: parseInt(vm.model.place),
        usergroup_id: parseInt(vm.model.group),
      })
      .then(function () {
        vm.$floatingAlert.success({
          title: "Sucesso!",
          message: "Os dados de sua atividade foram salvos corretamente!",
        })
      })
      .finally(function () {
        vm.showModal = false;
      });
    }

  },
};
</script>