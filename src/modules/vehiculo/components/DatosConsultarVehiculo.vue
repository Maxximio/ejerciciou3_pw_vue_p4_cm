<template>
  <div class="resto">

    <div v-for="(vehiculo, index) in data" :key="index">

      <p>ID: {{ vehiculo.id }}</p>
      <p>Placa: {{ vehiculo.placa }}</p>
      <p>Marca: {{ vehiculo.marca }}</p>
      <p>Año: {{ vehiculo.anio }}</p>
      <p>Propietario: {{ vehiculo.propietario }}</p>
    </div>
    
    <div v-if="visualizar">
      <p>ID: {{ data[0].id }}</p>
      <p>Placa: {{ data[0].placa }}</p>
      <p>Marca: {{ data[0].marca }}</p>
      <p>Año: {{ data[0].anio }}</p>
      <p>Propietario: {{ data[0].propietario }}</p>
    </div>

    <button>Visualizar</button>
  </div>
  
</template>

<script>

import { obtenerVehiculosFachada } from '../helpers/VehiculoCliente';
import { obtenerVehiculoFachada } from '../helpers/VehiculoCliente';

export default {
  data() {
    return {
      visualizar:false,
      data: [],
      placa: null,
      id: null,
      marca: null,
      propietario: null,
      anio: null
    };
  },
  async mounted() {
    this.data = await obtenerVehiculosFachada();
  },
  methods:{
    async consultaUnVehiculo() {
      const data = await obtenerVehiculoFachada(this.placa);
      this.placa = data.placa;
      this.marca = data.marca;
      this.propietario = data.propietario;
      this.anio = data.anio;
      this.id = data.id;
    },
  }
};
</script>

<style scoped>

  .resto{
background-color: antiquewhite;
border-radius: 20px;
border-color: brown;

}
  input{
    margin-left: 5px;
    margin-right: 5px;
  }

  button{
    font-size: large;
  }
</style>
../helpers/VehiculoCliente.js