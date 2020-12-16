<template>
  <div>
    <CCard class="list-activities-card">
        <CCardHeader class="list-activities-card__header u-border-none u-padding-bottom-0">
            <p class="u-semibold">Minhas Atividades</p>
        </CCardHeader>
        <CCardBody>
            <div v-if="!isEmpty">
                <p class="p-color-blue-35 u-margin-bottom-0">
                    <i class="far fa-calendar u-font-size-20 u-margin-right-1"></i> Atividades em andamento
                </p>
                <div v-if="!onGoing.length" class="u-margin-top-3 u-margin-bottom-3 u-padding-left-2">
                    <i class="fas fa-info-circle"></i> Não existem atividades em andamento
                </div>
                <div v-if="onGoing.length" class="u-margin-top-2 u-margin-bottom-3 u-padding-left-2">
                    <div v-for="activity in onGoing" :key="activity.id" class="u-margin-bottom-2">
                        <p class="u-semibold u-margin-bottom-0">{{ activity.description }}</p>
                        <p class="u-margin-bottom-0 u-font-size-10">Acontecendo em {{ activity.place.name }}</p>
                        <p class="u-margin-bottom-0 u-font-size-10">Finalizará em {{ (new Date(activity.end_date)).toLocaleDateString() }}</p>
                        <hr class="u-border-dotted-top">
                    </div>
                </div>
            </div>
            <div v-if="!isEmpty">
                <p class="p-color-purple-60 u-margin-bottom-0">
                    <i class="far fa-calendar u-font-size-20 u-margin-right-1"></i> Atividades agendadas
                </p>
                <div v-if="!scheduled.length" class="u-margin-top-3 u-margin-bottom-3 u-padding-left-2">
                    <i class="fas fa-info-circle"></i> Não existem atividades agendadas
                </div>
                <div v-if="scheduled.length" class="u-margin-top-2 u-margin-bottom-3 u-padding-left-2">
                    <div v-for="activity in scheduled" :key="activity.id" class="u-margin-bottom-2">
                        <p class="u-semibold u-margin-bottom-0">{{ activity.description }}</p>
                        <p class="u-margin-bottom-0 u-font-size-10">Acontecerá em {{ activity.place.name }}</p>
                        <p class="u-margin-bottom-0 u-font-size-10">Iniciará em {{ (new Date(activity.end_date)).toLocaleDateString() }}</p>
                        <hr class="u-border-dotted-top">
                    </div>
                </div>
            </div>
            <div v-if="!isEmpty">
                <p class="p-color-gray-40 u-margin-bottom-0">
                    <i class="far fa-calendar u-font-size-20 u-margin-right-1"></i> Atividades finalizadas
                </p>
                <div v-if="!finished.length" class="u-margin-top-3 u-margin-bottom-3 u-padding-left-2">
                    <i class="fas fa-info-circle"></i> Não existem atividades finalizadas
                </div>
                <div v-if="finished.length" class="u-margin-top-2 u-margin-bottom-3 u-padding-left-2">
                    <div v-for="activity in finished" :key="activity.id" class="u-margin-bottom-2">
                        <p class="u-semibold u-margin-bottom-0">{{ activity.description }}</p>
                        <p class="u-margin-bottom-0 u-font-size-10">Acontecerá em {{ activity.place.name }}</p>
                        <p class="u-margin-bottom-0 u-font-size-10">Iniciará em {{ (new Date(activity.end_date)).toLocaleDateString() }}</p>
                        <hr class="u-border-dotted-top">
                    </div>
                </div>
            </div>
            <div v-if="isEmpty" class="p-color-gray-40">
                <i class="fas fa-info-circle"></i> Não existe nenhuma atividade associada a você
            </div>
        </CCardBody>
    </CCard>      
  </div>
</template>

<script>
    export default {
        name: 'ListMyActivities',
        props: {
            username: { 
                required: true,
            },
        },
        created() { 
            var activities = [];
            this.axios.get('/users/'+ this.username +'/activities').then(function (result){
                activities = result.data
            });
            var now = new Date();
            if (activities.length) {
                this.onGoing = activities.filter( (activity) => {
                    return activity.start_date <= now.getTime() && activity.end_date > now.getTime();
                });
                this.finished = activities.filter( (activity) => {
                    return activity.end_date < now.getTime();
                });
                this.scheduled = activities.filter( (activity) => {
                    return activity.start_date > now.getTime();
                });
            }
            this.isEmpty = !(activities.length > 0);
        },
        data() {
            return {
                finished : [],
                scheduled: [],
                onGoing: [],
                isEmpty: true
            };
        },
    }
</script>