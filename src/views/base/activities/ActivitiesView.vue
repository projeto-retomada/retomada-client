<template>
  <div>
    <CCard>
      <CCardHeader class="py-3">
        <a @click="backToList" style="cursor: pointer">
          <CIcon :content="$options.arrowLeft" class="customIcon"></CIcon>
          <span class="places_info_title"> {{ selectedActivitie.name }} </span>
        </a>
        <CButton
          style="
            background-color: #1e909b;
            color: white;
            width: 200px;
            float: right;
            margin-top: -5px;
          "
          :disabled="btn_disabled"
          @click="confirmParticipation"
          >Confirmar Participação</CButton
        >
      </CCardHeader>
      <CCardBody>
        <div v-if="myActivitieLoaded">
          <div class="places_container">
            <div>
              <p class="u-semibold p-color-gray-10">Sobre a atividade</p>
              <CRow class="local_info">
                <CCol md="6" class="py-3">
                  <span class="places_text_info">
                    Inicio : {{ selectedActivitie.startDate }}
                  </span>
                </CCol>
                <CCol md="6" class="py-3 u-align-itens-center">
                  <span class="places_text_info">
                    Local:
                    {{ selectedActivitie.place }}
                  </span>
                </CCol>
                <CCol md="6" class="py-3 u-align-itens-center">
                  <span class="places_text_info">
                    Fim: {{ selectedActivitie.endDate }}
                  </span>
                </CCol>
                <CCol md="6" class="py-3 u-align-itens-center">
                  <span class="places_text_info">
                    Turma: {{ selectedActivitie.usergroup }}
                  </span>
                </CCol>
              </CRow>
            </div>
            <div class="u-margin-top-3">
              <p class="u-semibold p-color-gray-10">Participantes</p>
              <span class="u-display-flex u-flex-wrap">
                <div
                  v-for="user of selectedActivitie.usuarios"
                  :key="user.id"
                  style="margin-right: 20px"
                >
                  <CCard class="list-activities-card">
                    <CCardBody>
                      <div class="row">
                        <div class="col-3" style="text-align: center">
                          <img
                            src="img/avatars/user_default.png"
                            class="profile-pic u-margin-right-1"
                          />
                        </div>
                        <div
                          class="col-9"
                          style="padding-left: 0px; margin-top: 6px"
                        >
                          <p class="u-semibold activity-title">
                            {{ user.user }}
                          </p>
                        </div>
                      </div>
                    </CCardBody>
                  </CCard>
                </div>
              </span>
              <span v-if="!activitie" class="p-color-gray-60">
                <p>
                  <i class="fas fa-info-circle"></i> Nenhum local cadastrado
                </p>
              </span>
            </div>
          </div>
        </div>
        <div v-if="!myActivitieLoaded">
          <loader></loader>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script src="./ActivitiesView.js"></script>