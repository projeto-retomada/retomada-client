<template>
  <div>
      <CCard>
            <CCardBody>
                <CTabs class="questionnaire-tabs">
                    <CTab title="Questionários de Saúde"  class="nav-title" disabled>
                    </CTab>
                    <CTab title="Meus" active>
                        <div>
                            <p class="u-semibold p-color-gray-10">Questionário da semana atual</p>
                            <questionnaire-card></questionnaire-card>
                        </div>
                        <div class="u-margin-top-3">
                            <p class="u-semibold p-color-gray-10">Questionários anterioes</p>
                            <span class="u-display-flex">
                                <questionnaire-card></questionnaire-card>
                                <questionnaire-card></questionnaire-card>
                                <questionnaire-card></questionnaire-card>
                            </span>
                        </div>
                    </CTab>
                    <CTab title="De professores">
                       
                    </CTab>
                    <CTab title="De alunos">
                        
                    </CTab>
                </CTabs>
            </CCardBody>
      </CCard>
  </div>
</template>

<script src="./questionnaireList.js"></script>