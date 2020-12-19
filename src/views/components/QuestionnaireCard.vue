<template>
  <div>
      <CCard class="questionnare-card">
            <CCardBody>
                <p class="u-semibold">
                    Semana 12 <span class="u-font-size-10 p-color-gray-60">/ 52</span>
                </p>
                <p class="u-line-height-8 u-margin-bottom-0 u-font-size-12">Período de correspodência: </p>
                <p class="u-font-size-12">de 22/11 a 22/12</p>
                <p class="u-font-size-10 p-color-gray-60">(Não respondido)</p>
            </CCardBody>
            <CCardFooter>
                <span>Responder</span>
                <i class="fas fa-arrow-right"></i>
            </CCardFooter>
      </CCard>
  </div>
</template>

<script>
    export default {
        name: 'QuestionnaireCard',
        props: {
        },
        created() {
            
        },
        data() {
            return {
            };
        },
    }
</script>