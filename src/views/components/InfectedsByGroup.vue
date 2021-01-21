<template>
    <CCard class="card-infecteds-by-group"> 
        <CCardBody>
            <p class="u-semibold u-margin-top-2 p-color-gray-60">Distribuição de alunos infectados por turma</p>
            <CChartPie
                :datasets="defaultDatasets"
                :labels="labels"
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
    created() {
      var vm = this;
      this.axios.get('dash/cases-by-usergroup', {})
      .then(function (result) {
        result.data.forEach(function (groupData) {
          vm.labels.push(groupData.name);
          vm.graphData.push(groupData.casos);
        });
      });
    },
    data () {
      return {
        labels: [],
        graphData: []
      }
    },
    computed: {
      defaultDatasets () {
        var vm = this;
        var colors = [];
        for (var i = 0; i < vm.labels.length; i++) {
          colors.push('#' + Math.floor(Math.random()*16777215).toString(16));
        }
        return [
          {
            backgroundColor: colors,
            data: vm.graphData
          }
        ]
      }
  }
}
</script>