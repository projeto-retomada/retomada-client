<template>
    <div>
        <div>
            <button class="btn btn-secondary" @click="$router.replace({ name: 'Questionnaire'})">Voltar</button>
        </div>
        <div class="questionnaire-form">
        <CCard class="p-color-gray-10 u-padding-3">
                <CCardHeader class="u-border-none">
                    <p>
                        <span class="u-semibold u-font-size-18">Questionário de Saúde </span>
                        <i class="fas fa-question-circle u-margin-left-1 p-color-green-45" 
                        v-c-tooltip.hover.click="'Lembre-se de sempre responder aos questionários de saúde'"></i>
                    </p>
                </CCardHeader>
                <CCardBody>
                    <p class="u-semibold">Entre {{withoutTime(week.sunday)}} e {{withoutTime(week.saturday)}} você:</p>
                    <form>
                        <div class="u-display-flex u-justify-content-between">
                            <div>
                                <p>Sentiu Febre?</p>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" checked type="radio" name="fever" id="feverYes" value="yes">
                                    <label class="form-check-label" for="feverYes">Sim</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="fever" id="feverNo" value="no">
                                    <label class="form-check-label" for="feverNo">Não</label>
                                </div>
                            </div>
                            <div>
                                <p>Sentiu Cansaço?</p>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" checked type="radio" name="tiredness" id="tirednessYes" value="yes">
                                    <label class="form-check-label" for="tirednessYes">Sim</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="tiredness" id="tirednessNo" value="no">
                                    <label class="form-check-label" for="tirednessNo">Não</label>
                                </div>
                            </div>
                        </div>
                        <div class="u-margin-top-3">
                            <p>Sentiu dificuldade para respirar ou falta de ar?</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" checked type="radio" name="shortnessBreathe" id="shortnessBreatheYes" value="yes">
                                <label class="form-check-label" for="shortnessBreatheYes">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="shortnessBreathe" id="shortnessBreatheNo" value="no">
                                <label class="form-check-label" for="shortnessBreatheNo">Não</label>
                            </div>
                        </div>
                        <div class="u-margin-top-3">
                            <p>Sentiu dor ou pressão no peito?</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" checked type="radio" name="chestPressure" id="chestPressureYes" value="yes">
                                <label class="form-check-label" for="shortnessBreatheYes">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="chestPressure" id="chestPressureNo" value="no">
                                <label class="form-check-label" for="chestPressureNo">Não</label>
                            </div>
                        </div>
                        <div class="u-margin-top-3">
                            <p>Sentiu perda de paladar ou olfato?</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" checked type="radio" name="lossTaste" id="lossTasteYes" value="yes">
                                <label class="form-check-label" for="lossTasteYes">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="lossTaste" id="lossTasteNo" value="no">
                                <label class="form-check-label" for="lossTasteNo">Não</label>
                            </div>
                        </div>
                        <div class="u-margin-top-3">
                            <p>Teve contato com alguém que testou positivo para o COVID-19?</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" checked type="radio" name="exposedVirus" id="exposedVirusYes" value="yes">
                                <label class="form-check-label" for="exposedVirusYes">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="exposedVirus" id="exposedVirusNo" value="no">
                                <label class="form-check-label" for="exposedVirusNo">Não</label>
                            </div>
                        </div>
                        <div class="u-margin-top-3">
                            <p>Testou positivo para o COVID-19?</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" checked type="radio" name="testedPositive" id="testedPositiveYes" value="yes">
                                <label class="form-check-label" for="testedPositiveYes">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="testedPositive" id="testedPositiveNo" value="no">
                                <label class="form-check-label" for="testedPositiveNo">Não</label>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary btn-block u-margin-top-2">Salvar Respostas</button>
                    </form>
                </CCardBody>
        </CCard>
    </div>
    </div>
</template>

<script src="./questionnaireForm.js"></script>