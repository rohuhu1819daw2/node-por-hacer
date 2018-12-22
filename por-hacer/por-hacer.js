
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    
    let archivo = 'db/data.json'; 
    fs.writeFile(archivo,data,(err) =>{
        if (err) throw new Error ('No se pudo grabar');
    });
}

const cargarDB = ()=>{

    try {

        listadoPorHacer = require('../db/data.json');
    
    } catch (error) {
        
        listadoPorHacer = [];
        
    }

    
}

const crear = (descripcion) =>{
    
    cargarDB();
    
    let porHacer = {
        descripcion, //descripcion: descripcion
        completado: false,
    }; 

    listadoPorHacer.push(porHacer);

    guardarDB(); // lo escribo justo despues porque si lo pongo antes estara vacio el array con el json
    return porHacer;

}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion,completado = true)=>{

    cargarDB();
    
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if(index >=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    } 

}

const borrar =  (descripcion) =>{
    cargarDB();
    let nuevoListado =  listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    // retorna un array con todo lo que sea diferente a descripcion;

    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}