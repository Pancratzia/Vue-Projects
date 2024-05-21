<template>
  <div class="container col-12 col-md-6 col-lg-4 my-5">
    <form>
      <div class="form-group">
        <label for="username">Nombre de usuario</label>
        <input type="text" class="form-control" id="username" placeholder="Ingresa tu nombre de usuario">
      </div>
      <div class="form-group">
        <label for="email">Correo</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
          placeholder="Ingresa tu correo">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña">
      </div>
      <button type="submit" class="btn btn-primary mt-2">Sign Up</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
</script>