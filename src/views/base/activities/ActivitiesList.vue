<template>
  <div>
      <CCard>
            <CCardBody>
                <CTabs class="places-tabs">
                    <CTab title="Atividades da Instituição" active>
                        <div class="activities-filters-container">
                            <CButton class="btn_novo m-2" @click="addActivity">Criar nova</CButton>
                        </div>
                        <div class="activities-content-container">
                            <div>
                                <p class="activities-content-container__title">Atividades em Andamento</p>
                                <div class="u-display-flex u-flex-wrap">
                                    <activity-card class="activity-ongoing"></activity-card>
                                </div>
                            </div>
                            <div>
                                <p class="activities-content-container__title">Atividades Agendadas</p>
                                <div class="u-display-flex u-flex-wrap">
                                    <activity-card class="activity-scheduled"></activity-card>
                                </div>
                            </div>
                            <div>
                                <p class="activities-content-container__title">Atividades Finalizadas</p>
                                <div class="u-display-flex u-flex-wrap">
                                    <activity-card></activity-card>
                                </div>
                            </div>
                        </div>
                    </CTab>
                </CTabs>
            </CCardBody>
      </CCard>
      <popup-add-activity ref="popupAdd"></popup-add-activity>
  </div>
</template>

<script src="./activitiesList.js"></script>