<template>
    <CCard class="card-user-statistic"> 
        <CCardBody>
            <p class="u-semibold u-margin-top-2 p-color-gray-60">Últimos casos registrados</p>
            <p class="u-bottom-top-gray u-padding-bottom-1" v-for="user in usersList" :key="user.id_user">
                <a href><img class="profile-pic u-margin-right-1" :src="user.picture">{{ user.name }}</a>
            </p>
            <p v-if="!usersList.length" class="p-color-gray-50">
                <i class="fas fa-grin-hearts p-color-green-45"></i> Não foram registradas pessoas infectadas nessa categoria
            </p>
        </CCardBody>
    </CCard>
</template>
<script>
export default {
    name: 'LastInfecteds',
    props: {
        usersList: {
            required:true
        }
    },
    data() {
        return {

        }
    },

}
</script>