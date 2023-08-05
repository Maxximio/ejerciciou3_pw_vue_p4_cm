import axios from "axios";

export const obtenerVehiculosFachada=async()=>{
    return await obtenerVehiculos();
}

export const obtenerVehiculoFachada=async(placa)=>{
    return await obtenerVehiculo(placa);
}

const obtenerVehiculos=async()=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Concesionaria/vehiculos/`).then(r=>r.data);
    return data;
}

const obtenerVehiculo=async(placa)=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Concesionaria/vehiculos/${placa}`).then(r=>r.data);
    return data;
}



