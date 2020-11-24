<template>
  <div>
    <CCard class="list-activities-card">
        <CCardHeader class="list-activities-card__header u-border-none u-padding-bottom-0">
            <p class="u-semibold">Minhas Atividades</p>
        </CCardHeader>
        <CCardBody>
            <div v-if="!isEmpty">
                <p class="p-color-blue-35 u-margin-bottom-0">
                    <font-awesome-icon icon="calendar-check" class="u-font-size-20 u-margin-right-1"/>Atividades em andamento
                </p>
                <div v-if="!onGoing.length" class="u-margin-top-3 u-margin-bottom-3 u-padding-left-2">
                    <font-awesome-icon icon="info-circle"/> Não existem atividades em andamento
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
                    <font-awesome-icon icon="calendar-check" class="u-font-size-20 u-margin-right-1"/>Atividades agendadas
                </p>
                <div v-if="!scheduled.length" class="u-margin-top-3 u-margin-bottom-3 u-padding-left-2">
                    <font-awesome-icon icon="info-circle" /> Não existem atividades agendadas
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
                    <font-awesome-icon icon="calendar-check" class="u-font-size-20 u-margin-right-1"/> Atividades finalizadas
                </p>
                <div v-if="!finished.length" class="u-margin-top-3 u-margin-bottom-3 u-padding-left-2">
                    <font-awesome-icon icon="info-circle" /> Não existem atividades finalizadas
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
                <font-awesome-icon icon="info-circle" /> Não existe nenhuma atividade associada a você
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
            // hardcoded apenas para construir o componente
            var activities = [
                {
                    id: 1,
                    id_usergroup: 1,
                    place: {
                        id: 1,
                        name: 'Sala 1'
                    },
                    description: 'Aula de história',
                    start_date: 1606093126577,
                    end_date: 1606186800000,
                    has_interaction: true
                },
                {
                    id: 2,
                    id_usergroup: 1,
                    place: {
                        id: 2,
                        name: 'Sala 2'
                    },
                    description: 'Aula de Geografia',
                    start_date: 1606093126577,
                    end_date: 1606186800000,
                    has_interaction: true
                },
                {
                    id: 3,
                    id_usergroup: 1,
                    place: {
                        id: 2,
                        name: 'Sala 2'
                    },
                    description: 'Aula de Arte',
                    start_date: 1606186800000,
                    end_date: 1606273200000,
                    has_interaction: true
                }
            ];
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
            console.log(this.onGoing);
            console.log(this.finished);
            console.log(this.scheduled);
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