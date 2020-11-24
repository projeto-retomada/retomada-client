<template>
  <div>
    <CCard class="list-activities-card">
        <CCardHeader class="list-activities-card__header u-border-none u-padding-bottom-0">
            <p class="u-semibold">Últimos Lugares Visitados</p>
        </CCardHeader>
        <CCardBody>
            <div v-if="!isEmpty">
                <span class="u-margin-bottom-2" v-for="place in places" :key="place.id">
                    <p class="p-color-blue-35 u-margin-bottom-0">
                        <font-awesome-icon icon="map-marker" class="u-font-size-20 u-margin-right-1"/>
                        {{ place.name }}
                    </p>
                    <p class="u-margin-left-3 u-font-size-10"> 
                        Visitado em {{ (new Date(place.when)).toLocaleDateString() }} </p>
                </span>
            </div>
            <div v-if="isEmpty" class="p-color-gray-40">
                <font-awesome-icon icon="info-circle" /> Você não visitou nenhum local nos últimos 7 dias
            </div>
        </CCardBody>
    </CCard>      
  </div>
</template>

<script>
    export default {
        name: 'ListMyLastPlaces',
        props: {
            username: { 
                required: true,
            },
        },
        created() { 
            // hardcoded apenas para construir o componente
            this.places = [
                {
                    id: 1,
                    name: 'Sala 2',
                    when: 1606093126577
                },
                {
                    id: 1,
                    name: 'Sala 1',
                    when: 1606186800000
                },
                {
                    id: 1,
                    name: 'Sala 5',
                    when: 1606093126577
                },
                {
                    id: 1,
                    name: 'Sala 7',
                    when: 1606186800000
                }
            ];
        
            this.isEmpty = !(this.places.length > 0);
        },
        data() {
            return {
                places: [],
                isEmpty: true
            };
        },
    }
</script>