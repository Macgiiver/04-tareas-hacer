/* jshint esversion: 8 */
import { leerDB } from '../helpers/guardarArchivo.js';
import Tarea from './tarea.js';
import colors from 'colors';

class Tareas {
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }
    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        let contador = 1;
        Object.values(this._listado).forEach(tarea => {
            const estado = tarea.completadoEn ? colors.green('Completado') : colors.red('Incompleto');
            console.log(`\n${colors.green(contador)}. ${tarea.desc} :: ${estado}`);
            contador++;
        });
    }

    listarPendientesCompletadas(completadas = true) {
        let contador = 1;
        Object.values(this._listado).forEach(tarea => {
            const estadoCompletada = !!tarea.completadoEn;
            if (completadas && estadoCompletada || !completadas && !estadoCompletada) {
                const estado = estadoCompletada ? colors.green('Completado') : colors.red('Incompleto');
                console.log(`\n${colors.green(contador)}. ${tarea.desc}. ${tarea.completadoEn} :: ${estado}`);
                contador++;
            }
        });
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }


}



export default Tareas;