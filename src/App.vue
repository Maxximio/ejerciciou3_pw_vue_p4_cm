<template>
  <ConsultaVehiculo/>
</template>

<script>
import ConsultaVehiculo from './modules/vehiculo/pages/ConsultaVehiculo.vue';

export default {
  name: 'App',
  components: {
    ConsultaVehiculo
}
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
