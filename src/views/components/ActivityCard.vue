<template>
  <div>
      <CCard class="activity-card">
            <CCardBody>
                <p class="activity-title">
                    {{ activity.name }} 
                    <i @click="editActivity" v-if="role!='STUDENT'" class="fas fa-pen p-color-green-45 u-margin-left-1"></i>
                    <i @click="deleteActivity" v-if="role!='STUDENT'" class="fas fa-trash p-color-red-55 u-margin-left-1"></i>
                </p>
                <p v-if="activity.type!='scheduled'">Iniciou {{ new Date(activity.start_date).toLocaleString()}}</p>
                
                <p v-if="activity.type=='finished'">Finalizou {{ new Date(activity.end_date).toLocaleString()}}</p>
            
                <p v-if="activity.type=='scheduled'">Iniciará em {{ new Date(activity.start_date).toLocaleString()}}</p>
                <p v-if="activity.type!='finished'">Finalizará em {{ new Date(activity.end_date).toLocaleString()}}</p>
                <p>Local: {{ activity.place }}</p>
            </CCardBody>
      </CCard>
      <popup-edit-activity ref="popupEdit"></popup-edit-activity>
      <popup-delete-activity ref="popupDelete"></popup-delete-activity>
  </div>
</template>

<script>
    import PopupEditActivity from './PopupEditActivity.vue';
    import PopupDeleteActivity from './PopupDeleteActivity.vue';
    export default {
        name: 'ActivityCard',
        components: {
            'popup-edit-activity': PopupEditActivity,
            'popup-delete-activity': PopupDeleteActivity,
        },
        props: {
            activity: {
                required:true
            }
        },
        data() {
            return {
               role: JSON.parse(localStorage.getItem('user')).role
            };
        },
        methods: {
           editActivity() {
                this.$refs.popupEdit.openModal(this.activity);
            },
            deleteActivity() {
                this.$refs.popupDelete.openModal(this.activity);
            }
        }
    }
</script>