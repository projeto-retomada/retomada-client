<template>
  <div>
    <CCard>
      <section id="table-filters">
        <div>
          <CButton size="sm" style="background-color: #1d8896; color: white" @click="largeModal = true">
            <i class="fa fa-plus"></i>
          </CButton>
        </div>
      </section>
      <section class="table-content">
        <table>
          <thead>
            <tr>
              <th width="10%"></th>
              <th width="20%">Username <i class="fas fa-sort"></i></th>
              <th width="25%">Email <i class="fas fa-sort"></i></th>
              <th width="10%">Group Risk <i class="fas fa-sort"></i></th>
              <th width="30%">Tipo de usuário <i class="fas fa-sort"></i></th>
              <th width="5%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) of itens" :key="item.id_user">
              <td><i class="fa fa-user-circle fa-2x"></i></td>
              <td>{{ item.username }}</td>
              <td>{{ item.email }}</td>
              <td v-if="item.group_risk === 'S'">Sim</td>
               <td v-if="item.group_risk === 'N'">Não</td>
              <td>
                <role-badge v-bind:role="item.role"></role-badge>
              </td>
              <td>
                <CButton
                  size="sm"
                  style="background-color: #1d8896; color: white"
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
      title="Novo Usuário"
      size="xl"
      :show.sync="largeModal">
      <form class="row">
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="username">Username *</label>
          <input type="text" name="username" v-model="username" class="form-control">
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="name">Name *</label>
          <input type="text" name="name" v-model="name"  class="form-control">
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="role">Role</label>
          <select name="role" v-model="role" class="form-control">
            <option value="ADMIN">Administrador</option>
            <option value="STUDENT">Aluno</option>
            <option value="TEACHER">Professor</option>
          </select>
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="email">Email *</label>
          <input type="email" name="email" v-model="email" class="form-control">
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <p>Grupo de Risco</p>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="group_risk" value="S" v-model="group_risk">
            <label class="form-check-label">Sim</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="group_risk" value="N" v-model="group_risk">
            <label class="form-check-label">Não</label>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 mt-1">
          <label for="password">Senha *</label>
          <input type="password" name="password" v-model="password"  class="form-control">
        </div>
      </form>
      <template #footer>
        <CButton @click="largeModal = false" color="danger">Cancelar</CButton>
        <CButton @click="largeModal = false; salvarUsuario()" color="success">Salvar</CButton>
      </template>
    </CModal>
  </div>
</template>
<script src="./users.js"></script>