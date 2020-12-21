import axios from 'axios';
import RoleBadge from './../../components/RoleBadge.vue'
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
    },
    data() {
        return {
            organization_id: null,
            largeModal: false,
            itens: null,
            username: null,
            name: null,
            role: null,
            email: null,
            password: null,
            group_risk: null
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
        salvarUsuario() {
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
                organization_id: this.organization_id
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
        }
    }
}