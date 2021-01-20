<template>
    <CCard class="card-infecteds-by-group"> 
        <CCardBody>
            <p class="u-semibold u-margin-top-2 p-color-gray-60">Distribuição de alunos infectados por turma</p>
            <CChartPie
                :datasets="defaultDatasets"
                :labels="['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']"
                class="u-margin-bottom-2"
            />
        </CCardBody>
    </CCard>
</template>
<script>
import { CChartPie } from '@coreui/vue-chartjs'
export default {
    name: 'InfectedsByGroup',
    components: { CChartPie },
    computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }
  }
}
</script>