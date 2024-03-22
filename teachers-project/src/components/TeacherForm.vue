<template>
  <section>
    <h3>Añadir Profesor</h3>

    <div>
      <label for="name">Nombre</label>
      <input id="name" type="text" placeholder="Nombre" />
    </div>

    <div>
      <label for="apellidos">Apellidos</label>
      <input id="apellidos" type="text" placeholder="Apellidos" />
    </div>

    <div>
      <label for="dninif">DNI/NIF</label>
      <input id="dninif" type="text" placeholder="DNI/NIF" />
    </div>

    <div>
      <label for="materias">Materias</label>
      <input id="materias" type="text" placeholder="Materias" />

      <button>Anadir</button>
    </div>

    <div>
        <input type="checkbox" name="documentacionEntregada" id="documentacionEntregada" />
        <label for="documentacionEntregada">Documentación entregada</label>
    </div>

    <button>Guardar</button>
  </section>

  <section>
    <h3>Listado de Profesores</h3>
  </section>

</template>
  
<script lang="ts" setup>
</script>
  
<style scoped>
</style>