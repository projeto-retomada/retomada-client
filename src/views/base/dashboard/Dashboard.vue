<template>
  <div>
      <CCard>
          <CCardBody>
              <CTabs class="places-tabs">
                  <CTab title="Painel de acompanhamento de saúde" active>
                        <div>
                            <p class="u-semibold u-margin-top-2">Dados de toda a instituição</p>
                            <div class="u-display-flex u-flex-wrap u-justify-content-between">
                                <infected-card 
                                :message="'Alunos que testaram positivo em relação ao total'" :total="totalStudents" :infected="infectedStudents"></infected-card>
                                <infected-card 
                                :message="'Professores que testaram positivo em relação ao total'" :total="totalTeachers" :infected="infectedTeachers"></infected-card>
                                <infected-card 
                                :message="'Admnistradores que testaram positivo em relação ao total'" :total="totalAdmins" :infected="infectedAdmins"></infected-card>
                            </div>
                        </div>
                        <div>
                            <p class="u-semibold u-margin-top-2">Evolução dos casos de COVID ao longo do tempo</p>
                            <span class="u-padding-right-2 u-padding-left-2">
                                <CChartLine
                                    :datasets="defaultDatasets"
                                    :labels="labels"
                                />
                            </span>
                        </div>
                        <div>
                            <p class="u-semibold u-margin-top-2">Análise dos casos de alunos</p>
                            <div class="u-display-flex u-flex-wrap u-justify-content-between">
                                <infecteds-by-groups></infecteds-by-groups>
                                <last-activities-infecteds></last-activities-infecteds>
                                <last-infecteds></last-infecteds>
                            </div>
                        </div>
                  </CTab>
              </CTabs>
          </CCardBody>
      </CCard>
  </div>
</template>

<script src="./dashboard.js"></script>
