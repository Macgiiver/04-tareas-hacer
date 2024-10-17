/* jshint esversion: 8 */
// models/tarea.js

// Importa uuid usando la sintaxis de ES Modules
import { v4 as uuidv4 } from 'uuid';

class Tarea {
    constructor(desc) {
        // Genera un id único con uuidv4
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}

// Exporta la clase Tarea usando export default
export default Tarea;