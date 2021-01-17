import axios from 'axios';
import RoleBadge from './../../components/RoleBadge.vue';
import bcrypt from 'bcryptjs';

export default {
    components: {
        'role-badge': RoleBadge,
    },
    name: 'Users',
    props: {

    },
    created() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.organization_id = user.organization_id;
        this.fetchData();
        this.getUsergroups();
    },
    data() {
        return {
            organization_id: null,
            usuario_id: null,
            largeModal: false,
            editModal: false,
            itens: null,
            usergroups: null,
            username: null,
            name: null,
            role: null,
            email: null,
            password: null,
            group_risk: null,
            classAdd: null,
            usernameEdit: null,
            nameEdit: null,
            roleEdit: null,
            emailEdit: null,
            passwordEdit: null,
            passwordEditConfim: null,
            group_riskEdit: null,
            classAddEdit: null,
            lastPassword: null
        }
    },
    methods: {
        fetchData() {
            const api = axios.create({
                baseURL: "http://localhost:3333",
            });
            api.get('/users').then(
                (data) => {
                    const users = data.data;
                    this.itens = users;
                }
            );
        },
        getUsergroups() {
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
        salvarUsuario() {
            console.log(this.classAdd);
            const api = axios.create({
                baseURL: "http://localhost:3333",
            });
            const usuario = {
                username: this.username,
                name: this.name,
                role: this.role,
                email: this.email,
                picture: '',
                group_risk: this.group_risk,
                password: this.password,
                metadata: '',
                organization_id: this.organization_id,
                class: this.classAdd
            };
            api.post('/users', usuario).then(
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
            this.username = '';
            this.role = '';
            this.name = '';
            this.email = '';
            this.group_risk = '';
            this.usernameEdit = '';
            this.roleEdit = '';
            this.nameEdit = '';
            this.emailEdit = '';
            this.group_riskEdit = '';
            this.usuario_id = '';
            this.passwordEdit = '';
            this.passwordEditConfim = '';
            this.password = '';
            this.classAdd = '';
            this.classAddEdit = '';
            this.lastPassword = '';
        },
        editarUsuario(usuario) {
            this.usernameEdit = usuario.username;
            this.roleEdit = usuario.role;
            this.nameEdit = usuario.name;
            this.emailEdit = usuario.email;
            this.group_riskEdit = usuario.group_risk;
            this.usuario_id = usuario.id_user;
            this.classAddEdit = usuario.class;
            this.lastPassword = usuario.password;
        },
        putUsuario() {
            const api = axios.create({
                baseURL: "http://localhost:3333",
            });
            if (this.passwordEdit && this.passwordEditConfim) {
                bcrypt.compare(this.passwordEditConfim, this.lastPassword).then(
                    (resp) => {
                        if (resp) {
                            const usuario = {
                                username: this.usernameEdit,
                                name: this.nameEdit,
                                role: this.roleEdit,
                                email: this.emailEdit,
                                picture: '',
                                group_risk: this.group_riskEdit,
                                password: this.passwordEdit,
                                metadata: '',
                                organization_id: this.organization_id,
                                class: this.classAddEdit
                            };
                            api.put('/users/' + this.usuario_id, usuario).then(
                                (data) => {
                                    this.fetchData();
                                    this.resetForm();
                                }
                            ).catch(error => {
                                const response = JSON.parse(error.request.response);
                                alert(`${response.message}`);
                            });
                        } else {
                            alert("Senha inválida!");
                        }
                    }
                );
            } else {
                const usuario = {
                    username: this.usernameEdit,
                    name: this.nameEdit,
                    role: this.roleEdit,
                    email: this.emailEdit,
                    picture: '',
                    group_risk: this.group_riskEdit,
                    password: this.lastPassword,
                    metadata: '',
                    organization_id: this.organization_id,
                    class: this.classAddEdit
                };
                api.put('/users/' + this.usuario_id, usuario).then(
                    (data) => {
                        this.fetchData();
                        this.resetForm();
                    }
                ).catch(error => {
                    const response = JSON.parse(error.request.response);
                    alert(`${response.message}`);
                });
            }
        }
    }
}