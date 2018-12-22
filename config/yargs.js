
// const argv ...Array.
// comando crear 'Crear elemento por hacer'
//         --descripcion -d

// comando actualizar 'Actualiza el estado completado de una tarea'
//         --descripcion -d
//         --completado  -c default true 
//         --help


const completado = {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }

const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'borra la tarea'
    };


const argv = require('yargs')
                            .command('crear', 'Crea un elemento por hacer', {descripcion})
                            .command('actualizar','Actualiza el estado completado de una tarea', {descripcion,completado})
                            .command('borrar','borrando la tarea',{descripcion})
                            .help()
                            .argv;


module.exports = {
    argv
}