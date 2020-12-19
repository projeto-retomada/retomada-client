export default {
    name: "Login",
    created () {
      if (this.$cookie.get('token')) {
        var user = JSON.parse(localStorage.getItem('user'))
        this.$router.replace({ name: "Profile", params: {username: user.username}})
      }
    },
    data () {
      return {
        message: '',
        email: '',
        password:''
      }
    },
    methods: {
      login: function (event) {
        if (!this.email || !this.password) {
          this.$floatingAlert.warn({
              title: "Ops!",
              message: "O email e a senha são obrigatórios",
          })
        } else {
          var token = Buffer.from(`${this.email}:${this.password}`, 'utf8').toString('base64');
          this.axios.get('/login', {
            headers: {
              'Authorization': `Basic ${token}`
            }
          })
          .then((res) => {
            this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
            if (!res.data.user.picture) {
              res.data.user.picture = 'img/avatars/user_default.png';
            }
            var expires = new Date();
            var token = {
              token: res.data.token,
              expires: expires.setHours(expires.getHours() + 8)
            }
            localStorage.setItem('token', JSON.stringify(token))
            localStorage.setItem('user', JSON.stringify(res.data.user))
            this.$store.commit("setAuthentication", true);
            this.$router.replace({ name: "Profile", params: {username: res.data.user.username}})
          })
          .catch((error) => {
            console.log(error);
            if (error.response && error.response.status === 401 ) {
              this.$floatingAlert.warn({
                  title: "Ops!",
                  message: "O email ou a senha estão incorretos",
              })
            } else {
              this.$floatingAlert.warn({
                  title: "Ops!",
                  message: "Algo de errado no seu login, tente novamente",
              })
            }
          })
        }
      }
    }
  };