<template>
  <div>
      <CCard class="profile-main-card">
        <CCardHeader class="profile-main-card__header">
            <CDropdown
                color="link"
                size="lg"
                :caret="false"
                class="u-text-right u-color-white">
                <template #toggler-content>
                    <font-awesome-icon icon="ellipsis-h" />
                </template>
                <CDropdownItem>Editar Perfil</CDropdownItem>
                <CDropdownItem>Excluir Perfil</CDropdownItem>
            </CDropdown>
            <img src="img/avatars/user_default.png" alt="" class="profile-pic">
            <h5 class="profile-name">{{ user.name }}</h5>
            <span class="tooltip-role" v-bind:class="{'student': user.role == 'STUDENT','teacher': user.role == 'TEACHER', 'admin': user.role == 'ADMIN'}">
                {{ user.role }}
            </span>
        </CCardHeader>
        <CCardBody class="profile-main-card__body">
            <div class="u-display-flex u-justify-content-center resume-cards">
                <div class="u-width-100 u-display-flex u-justify-content-center u-direction-row u-flex-wrap">
                    <list-my-activities :username="username" class="resume-cards__card"></list-my-activities>
                </div>
                <div class="u-width-100 u-display-flex u-justify-content-center u-direction-row u-flex-wrap">
                    <list-my-health-questionnare :username="username" class="resume-cards__card"></list-my-health-questionnare>
                    <list-my-last-places :username="username" class="resume-cards__card"></list-my-last-places>
                </div>
            </div>
        </CCardBody>
      </CCard>
  </div>
</template>

<script>
    import ListMyActivities from '../components/ListMyActivities.vue';
    import ListMyLastPlaces from '../components/ListMyLastPlaces.vue';
    import ListMyHeathQuestionnare from '../components/ListMyHeathQuestionnare.vue';
    export default {
        components: {
            'list-my-activities': ListMyActivities,
            'list-my-last-places': ListMyLastPlaces,
            'list-my-health-questionnare': ListMyHeathQuestionnare
        },
        name: 'Profile',
        props: {
            username: { 
                required: true,
            },
        },
        created() {
            this.username = this.$route.params.username; 
            this.user = {
                name: 'Miriéle dos Santos Silvério',
                role: 'STUDENT',
                picture: '',
                email: 'mirielesilverio@hotmail.com',
                group_risk: 'S',
                metadata: {},
                organization_id: 1,
            }
        },
        data() {
            return {
                user : {}
            };
        },
    }
</script>