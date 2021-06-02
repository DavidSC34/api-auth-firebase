<template>

  <div class="navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Formularios</router-link>
      <div class="d-flex">
        <router-link to="/" class="btn btn-dark" v-if="usuarioAutenticado" >Tareas</router-link>
        <router-link to="/ingreso" class="btn btn-dark" v-if="!usuarioAutenticado" >Ingresar</router-link>
        <router-link to="/registro" class="btn btn-dark" v-if="!usuarioAutenticado" >Registrar</router-link>
      </div>
      <button class="btn btn-dark" v-if="usuarioAutenticado" @click="cerrarSesion">
        Cerrar sesion
      </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed:{
      ...mapGetters(['usuarioAutenticado'])
    },
    methods: {
      ...mapActions(['cerrarSesion'])
    },
}
</script>

<style>

</style>