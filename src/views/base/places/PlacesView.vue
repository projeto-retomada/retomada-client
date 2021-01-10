<template>
  <div>
    <CCard>
      <CCardHeader class="py-3">
        <a @click="backToList" style="cursor: pointer">
          <CIcon :content="$options.arrowLeft" class="customIcon"></CIcon>
          <span class="places_info_title"> {{ selectedPlace.name }} </span>
        </a>
      </CCardHeader>
      <CCardBody>
        <div v-if="myPlaceLoaded">
          <div class="places_container">
            <div>
              <p class="u-semibold p-color-gray-10">Sobre o local</p>
              <CRow class="local_info">
                <CCol md="6" class="py-3">
                  <span class="places_text_info">
                    Criado em: {{ selectedPlace.creation }}
                  </span>
                </CCol>
                <CCol md="6" class="py-3 u-align-itens-center">
                  <span class="places_text_info">
                    Lotação máxima: {{ selectedPlace.maximum_capacity }} pessoas
                  </span>
                </CCol>
                <CCol md="6" class="py-3 u-align-itens-center">
                  <span class="places_text_info">
                    Editado pela ultima vez: {{ selectedPlace.last_update }}
                  </span>
                </CCol>
                <CCol md="6" class="py-3 u-align-itens-center">
                  <span
                    class="places_text_info"
                    v-if="selectedPlace.open_area == 'S'"
                  >
                    Tipo de local: Área aberta
                  </span>
                  <span class="places_text_info" v-else>
                    Tipo de local: Área fechada
                  </span>
                </CCol>
              </CRow>
            </div>
            <div class="u-margin-top-3">
              <p class="u-semibold p-color-gray-10">
                Atividades em andamento nesse local
              </p>
              <span class="u-display-flex u-flex-wrap">
                <div>
                  <CCard class="list-activities-card">
                    <CCardBody>
                      <p class="u-semibold activity-title">Sarau Biblioteca</p>
                      <p
                        class="u-line-height-8 u-margin-bottom-2 u-font-size-12"
                      >
                        20 pessoas participando nesse momento
                      </p>
                      <p
                        class="u-line-height-8 u-margin-bottom-0 u-font-size-12"
                      >
                        Finalizará em 2019-05-02
                      </p>
                    </CCardBody>
                  </CCard>
                </div>
              </span>
              <span v-if="!place" class="p-color-gray-60">
                <p>
                  <i class="fas fa-info-circle"></i> Nenhum local cadastrado
                </p>
              </span>
            </div>
          </div>
        </div>
        <div v-if="!myPlaceLoaded">
          <loader></loader>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script src="./PlacesView.js"></script>