import axios from 'axios';

export default {
    components: {},
    name: 'Usergroups',
    created() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.organization_id = user.organization_id;
        this.fetchData();
    },
    data() {
        return {
            organization_id: null,
            usergroups: null,
            cadastrarTurma: false,
            editarTurma: false,
            usergroupId: false,
            name: null,
            classScheduleTime1: null,
            classScheduleTime2: null,
            nameEdit: null,
            classScheduleTime1Edit: null,
            classScheduleTime2Edit: null
        }
    },
    props: {

    },
    methods: {
        fetchData() {
            const api = axios.create({
                baseURL: "http://localhost:3333",
            });
            api.get(`/organizations/${this.organization_id}/usergroups`).then(
                (data) => {
                    const usergroups = data.data;
                    this.usergroups = usergroups;
                }
            );
        },
        salvarTurma() {
            const api = axios.create({
                baseURL: "http://localhost:3333",
            });
            const usuario = {
                name: this.name,
                class_schedule: this.classScheduleTime1 + '-' + this.classScheduleTime2,
            };
            api.post(`/organizations/${this.organization_id}/usergroups`, usuario).then(
                (data) => {
                    this.fetchData();
                    this.resetForm();
                }
            ).catch(error => {
                const response = JSON.parse(error.request.response);
                alert(`${response.message}`);
            });
        },
        editacaoTurma(turma) {
            this.nameEdit = turma.name;
            this.usergroupId = turma.id_usergroup;
            const times = turma.class_schedule.split('-');
            if (times.length == 2) {
                this.classScheduleTime1Edit = times[0].trim();
                this.classScheduleTime2Edit = times[1].trim();
            }
        },
        editarDadosTurma() {
            const api = axios.create({
                baseURL: "http://localhost:3333",
            });
            const usergroup = {
                name: this.nameEdit,
                class_schedule: this.classScheduleTime1Edit + '-' + this.classScheduleTime2Edit,
            };
            api.put(`/organizations/${this.organization_id}/usergroups/${this.usergroupId}`, usergroup).then(
                (data) => {
                    this.fetchData();
                    this.resetForm();
                }
            ).catch(error => {
                const response = JSON.parse(error.request.response);
                alert(`${response.message}`);
            });
        },
        resetForm() {
            this.classScheduleTime1 = '';
            this.classScheduleTime2 = '';
            this.name = '';
            this.classScheduleTime1Edit = '';
            this.classScheduleTime2Edit = '';
            this.nameEdit = '';
        },
    }
}