<template>
  <div>
      <CCard>
            <CCardBody>
                <CTabs class="places-tabs">
                    <CTab title="Locais da instituição" active>
                        <div v-if="myPlacesLoaded">
                            <div class="places-filter-div">
                                <CButton class="btn_novo m-2" v-if="role=='ADM'"> Criar novo </CButton>
                            </div>
                            <div class="places_container">
                                <div>
                                    <p class="u-semibold p-color-gray-10">Visitados na última semana</p>
                                    <places-card v-for="place in myWeekPlaces" :key="place.id_place" class="actual-places"></places-card>
                                    <span v-if="!myWeekPlaces.length || myWeekPlaces.length <=0" class="p-color-gray-60">
                                        <p> <i class="fas fa-info-circle"></i> Nenhum local visitado na última semana. </p>
                                    </span>
                                </div>
                                <div class="u-margin-top-3">
                                    <p class="u-semibold p-color-gray-10">Todos os locais</p>
                                    <span class="u-display-flex u-flex-wrap" v-if="myPlaces.length">
                                        <places-card v-for="place in myPlaces" :key="place.id_place" :place="place"></places-card>
                                    </span>
                                    <span v-if="!myPlaces.length || myPlaces.length <=0" class="p-color-gray-60">
                                        <p> <i class="fas fa-info-circle"></i> Nenhum local cadastrado </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-if="!myPlacesLoaded">
                            <loader></loader>
                        </div>
                    </CTab>
                </CTabs>
            </CCardBody>
      </CCard>
  </div>
</template>

<script src="./PlacesList.js"></script>