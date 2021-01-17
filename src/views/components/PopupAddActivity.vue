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
            <option value="">A</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label>Turma</label>
          <select class="form-control" v-model="model.group">
            <option value="">A</option>
          </select>
        </div>
      </div>
    </form>
    <template #footer>
      <button class="btn btn-secondary" @click="showModal=false">Cancelar</button>
      <button class="btn btn-primary">Salvar</button>
    </template>
  </CModal>
</template>
<script>
export default {
  name: "PopupAddActivity",
  props: {
      
  },
  data() {
    return {
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
    }
  },
};
</script>