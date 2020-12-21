<template>
  <div>
      <CCard>
            <CCardBody>
                <CTabs class="questionnaire-tabs">
                    <CTab title="Questionários de Saúde"  class="nav-title" disabled>
                    </CTab>
                    <CTab title="Meus" active>
                        <div v-if="myQuestionnairesLoaded">
                            <div>
                                <p class="u-semibold p-color-gray-10">Questionário da semana atual</p>
                                <questionnaire-card :questionnaire="myActualQuestionnaire" class="actual-questionnaire"></questionnaire-card>
                            </div>
                            <div class="u-margin-top-3">
                                <p class="u-semibold p-color-gray-10">Questionários anterioes</p>
                                <span class="u-display-flex u-flex-wrap" v-if="myQuestionnaires.length">
                                    <questionnaire-card v-for="questionnaire in myQuestionnaires" :key="questionnaire.id_health_quest" :questionnaire="questionnaire"></questionnaire-card>
                                </span>
                                <span v-if="!myQuestionnaires.length" class="p-color-gray-60">
                                    <p> <i class="fas fa-info-circle"></i> Você não respondeu a nenhum questionário nas últimas semanas</p>
                                </span>
                            </div>
                        </div>
                        <div v-if="!myQuestionnairesLoaded">
                            <loader></loader>
                        </div>
                    </CTab>
                    <CTab title="De professores" v-if="role == 'ADMIN'">
                       <div v-if="teachersQuestionnairesLoaded">
                            <div class="u-margin-top-3">
                                <p class="u-semibold p-color-gray-10">Questionários Respondidos por professores</p>
                                <span class="u-display-flex u-flex-wrap" v-if="teachersQuestionnaires.length">
                                    <questionnaire-card v-for="questionnaire in teachersQuestionnaires" :key="questionnaire.id_health_quest" :questionnaire="questionnaire"></questionnaire-card>
                                </span>
                                <span v-if="!teachersQuestionnaires.length" class="p-color-gray-60">
                                    <p> <i class="fas fa-info-circle"></i> Os professores de sua instituição não responderam nenhum questionário nas últimas semanas</p>
                                </span>
                            </div>
                        </div>
                        <div v-if="!teachersQuestionnairesLoaded">
                            <loader></loader>
                        </div>
                    </CTab>
                    <CTab title="De alunos" v-if="role == 'ADMIN'">
                        <div v-if="studentsQuestionnairesLoaded">
                            <div class="u-margin-top-3">
                                <p class="u-semibold p-color-gray-10">Questionários Respondidos por professores</p>
                                <span class="u-display-flex u-flex-wrap" v-if="studentsQuestionnaires.length">
                                    <questionnaire-card v-for="questionnaire in studentsQuestionnaires" :key="questionnaire.id_health_quest" :questionnaire="questionnaire"></questionnaire-card>
                                </span>
                                <span v-if="!studentsQuestionnaires.length" class="p-color-gray-60">
                                    <p> <i class="fas fa-info-circle"></i> Os alunos de sua instituição não responderam nenhum questionário nas últimas semanas</p>
                                </span>
                            </div>
                        </div>
                        <div v-if="!studentsQuestionnairesLoaded">
                            <loader></loader>
                        </div>
                    </CTab>
                </CTabs>
            </CCardBody>
      </CCard>
  </div>
</template>

<script src="./questionnaireList.js"></script>