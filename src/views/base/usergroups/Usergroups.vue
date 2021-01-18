<template>
    <div>
    <CCard>
       <section id="table-filters">
        <div>
          <CButton size="sm" style="background-color: #1d8896; color: white" @click="cadastrarTurma = true">
            <i class="fa fa-plus"></i>
          </CButton>
        </div>
      </section>
       <section class="table-content">
        <table>
          <thead>
            <tr>
              <th width="10%"></th>
              <th width="20%">Name <i class="fas fa-sort"></i></th>
              <th width="25%">Class Schedule <i class="fas fa-sort"></i></th>
              <th width="5%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) of usergroups" :key="item.id_user">
              <td><i class="fa fa-graduation-cap fa-2x"></i></td>
              <td>{{ item.name }}</td>
              <td>{{ item.class_schedule }}</td>
              <td>
                 <CButton
                  size="sm"
                  style="background-color: #1d8896; color: white"
                  @click="editarTurma = true; editacaoTurma(item)"
                >
                  <i class="fas fa-pencil-alt"></i>
                </CButton>
              </td>
            </tr>
          </tbody>
        </table>
       </section>
    </CCard>
    <CModal
      title="Nova Turma"
      size="xl"
      :show.sync="cadastrarTurma">
      <form class="row">
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="username">Name *</label>
          <input type="text" name="name" v-model="name" class="form-control">
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="name">Start time *</label>
          <input type="time" name="time1" v-model="classScheduleTime1" class="form-control">
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="name">Final time *</label>
          <input type="time" name="time2" v-model="classScheduleTime2" class="form-control">
        </div>
      </form>
      <template #footer>
        <CButton @click="cadastrarTurma = false" color="danger">Cancelar</CButton>
        <CButton @click="cadastrarTurma = false; salvarTurma()" color="success">Salvar</CButton>
      </template>
    </CModal>
    <CModal
      title="Editar Turma"
      size="xl"
      :show.sync="editarTurma">
      <form class="row">
         <div class="col-lg-6 col-sm-12 mt-1">
          <label for="username">Name *</label>
          <input type="text" name="nameEdit" v-model="nameEdit" class="form-control">
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="name">Start time *</label>
          <input type="time" name="time1Edit" v-model="classScheduleTime1Edit" class="form-control">
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="name">Final time *</label>
          <input type="time" name="time2Edit" v-model="classScheduleTime2Edit" class="form-control">
        </div>
      </form>
      <template #footer>
        <CButton @click="editarTurma = false" color="danger">Cancelar</CButton>
        <CButton @click="editarTurma = false; editarDadosTurma()" color="success">Editar</CButton>
      </template>
    </CModal>
    </div>
</template>
<script src="./usergroups.js"></script>