<template>
    <CCard class="card-user-statistic"> 
        <CCardBody>
            <p class="u-semibold u-margin-top-2 p-color-gray-60">Top atividades feitas por alunos infectados</p>
            <p class="u-bottom-top-gray u-padding-bottom-1" v-for="activity in activitiesList" :key="activity.activity_id">
                <a href>{{ activity.name }}</a>
            </p>
            <p v-if="!activitiesList.length" class="p-color-gray-50">
                <i class="fas fa-grin-hearts p-color-green-45"></i> Não foram registradas atividades nessa categoria
            </p>
        </CCardBody>
    </CCard>
</template>
<script>
export default {
    name: 'LastActivitiesInfecteds',
    props: {
        activitiesList: {
            required:true
        }
    },
    data() {
        return {

        }
    }
}
</script>