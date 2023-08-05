<template>
  <div class="resto">
    <!-- /*<ul>
      <li v-for="dataItem in data" :key="dataItem.id">
        <strong>ID:</strong> {{ dataItem.id }}<br>
        <strong>Nombre:</strong> {{ dataItem.placa }}<br>
        <strong>Descripción:</strong> {{ dataItem.marca }}<br>
      </li>
    </ul>*/ -->

    <label for="">Id</label>
    <input v-model="id" type="text" />
    <label for="">Placa</label>
    <input v-model="placa" type="text" />
    <label for="">Marca</label>
    <input v-model="marca" type="text" />
    <label for="">Anio</label>
    <input v-model="anio" type="text" />
    <label for="">propietario</label>
    <input v-model="propietario" type="text" />

    
    <button>Visualizar</button>
  </div>
  
</template>

<script>

import { obtenerVehiculosFachada } from '../helpers/VehiculoCliente';
import { obtenerVehiculoFachada } from '../helpers/VehiculoCliente';

export default {
  data() {
    return {
      data:[],
      placa:null,
      id:null,
      marca:null,
      propietario:null,
      anio:null
      
    };
  },
  mounted() {
    const data = this.obtenerVehiculosFachada();
    this.placa=data.placa
  },
  methods: {
    async consultaVehiculo() {
      const data = await obtenerVehiculoFachada(this.placa);
      this.data=data
    },
  },
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