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
                    <menu-icon />
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
            <CTabs :active-tab="1">
                <CTab title="Dados Pessoais">
                    
                </CTab>
                <CTab title="Resumo">
                    <CRow>
                        <CCol md="6" sm="12">
                            <list-my-activities :username="username"></list-my-activities>
                        </CCol>
                    </CRow>
                </CTab>
            </CTabs>
        </CCardBody>
      </CCard>
  </div>
</template>

<script>
    import ListMyActivities from '../components/ListMyActivities.vue'
    export default {
        components: {
            'list-my-activities': ListMyActivities
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