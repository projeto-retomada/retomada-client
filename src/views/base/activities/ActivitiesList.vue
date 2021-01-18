<template>
  <div>
      <CCard>
            <CCardBody>
                <CTabs class="places-tabs">
                    <CTab title="Atividades da Instituição" active>
                        <div class="activities-filters-container">
                            <CButton class="btn_novo m-2" @click="addActivity">Criar nova</CButton>
                        </div>
                        <div class="activities-content-container" v-if="!activitiesLoading">
                            <div>
                                <p class="activities-content-container__title">Atividades em Andamento</p>
                                <div class="u-display-flex u-flex-wrap">
                                    <activity-card class="activity-ongoing" :activity="activity" v-for="activity in onGoing" :key="activity.id"></activity-card>
                                    <p v-if="!onGoing.length"><i class="fas fa-info-circle"></i> Nenhuma atividade está em andamento em sua instituição</p>
                                </div>
                            </div>
                            <div>
                                <p class="activities-content-container__title">Atividades Agendadas</p>
                                <div class="u-display-flex u-flex-wrap">
                                    <activity-card class="activity-scheduled" :activity="activity" v-for="activity in scheduled" :key="activity.id"></activity-card>
                                    <p v-if="!scheduled.length"><i class="fas fa-info-circle"></i> Nenhuma atividade está agendada em sua instituição</p>
                                </div>
                            </div>
                            <div>
                                <p class="activities-content-container__title">Atividades Finalizadas</p>
                                <div class="u-display-flex u-flex-wrap">
                                    <activity-card :activity="activity" v-for="activity in finished" :key="activity.id"></activity-card>
                                    <p v-if="!finished.length"><i class="fas fa-info-circle"></i> Nenhuma atividade foi finalizada em sua instituição</p>
                                </div>
                            </div>
                        </div>
                        <loader v-if="activitiesLoading"></loader>
                    </CTab>
                </CTabs>
            </CCardBody>
      </CCard>
      <popup-add-activity ref="popupAdd"></popup-add-activity>
  </div>
</template>

<script src="./activitiesList.js"></script>