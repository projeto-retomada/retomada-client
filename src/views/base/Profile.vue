<template>
  <div>
      <CCard class="profile-main-card">
        <CCardHeader class="profile-main-card__header">
            <img src="img/avatars/user_default.png" alt="" class="profile-pic">
            <h5 class="profile-name">{{ user.name }}</h5>
        </CCardHeader>
        <CCardBody class="profile-main-card__body">
            <CRow>
                <CCol md="6" sm="12">
                    <CCard class="u-border-none u-box-shadow">
                        <CCardHeader class="u-border-none">
                            <p class="title"> <CIcon name="cil-file"/> Questionários de Saúde</p>
                        </CCardHeader>
                        <CCardBody>
                            <p class="p-color-gray-30">Semana Atual</p>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol md="6" sm="12">
                    <CCard>
                        Ver o que por aqui
                    </CCard>
                </CCol>
            </CRow>
        </CCardBody>
      </CCard>
  </div>
</template>

<script>
    export default {
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