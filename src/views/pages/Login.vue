<template>
  <div id="Loginfull" class="c-app flex-row align-items-center">
    <!-- Formulário de login -->
    <form id="Flogin">
     <center> <img src="img/logo_r.png" size="custom-size" height="50px" 
     class="c-sidebar-brand-full"></center>
      <p class="h4 text-center mb-4">Bem-Vindo</p>
      <label for="defaultFormLoginEmailEx" class="grey-text">Usuário</label>
      <input
        placeholder="Digite seu nome de usuário ou email"
        type="email"
        id="defaultFormLoginEmailEx"
        class="form-control"
      />
      
      <label for="defaultFormLoginPasswordEx" class="grey-text u-margin-top-2">Senha</label>
      <input
        placeholder="Digite sua senha"
        type="password"
        id="defaultFormLoginPasswordEx"
        class="form-control"
      />
      <div id="Lbtn" class="text-center mt-4">
        <button class="btn btn-indigo" type="submit">Entrar</button>
      </div>
      <hr />
      <a class="font-small blue-text d-flex justify-content-end pb-2" href="#"
        >Esqueci minha senha</a
      >
    </form>
    <!-- Formulário de login -->
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
