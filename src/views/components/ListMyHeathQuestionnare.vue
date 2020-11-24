<template>
  <div>
    <CCard class="list-activities-card">
        <CCardHeader class="list-activities-card__header u-border-none u-padding-bottom-0">
            <p class="u-semibold">Questionários de Saúde</p>
        </CCardHeader>
        <CCardBody>
            <CAlert show color="success" class="u-font-size-12" v-if="hasAnswered">
                Você já respondeu ao questionário de saúde dessa semana! 
                <a href="">ACESSE</a>
            </CAlert>
            <CAlert show color="info" class="u-font-size-12" v-if="!hasAnswered">
                O questionário de saúde dessa semana já está disponível!
                <a href="">RESPONDER</a>
            </CAlert>
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
            this.healthQuestionnare = {
                id: 1
            };
            this.hasAnswered = this.healthQuestionnare.id;
        },
        data() {
            return {
                healthQuestionnare: {},
                hasAnswered: false
            };
        },
    }
</script>