const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database'); 

var queries =[
    'SELECT nombre FROM material WHERE cantidad > 0',
    'SELECT nombre FROM color WHERE cantidad > 0',
    'SELECT nombre FROM tamaño WHERE cantidad > 0',
    'SELECT nombre FROM duracion WHERE cantidad > 0',
    'SELECT nombre FROM tipo_pantalla WHERE cantidad > 0',
    'SELECT marca.nombre as marca, megapixeles.nombre as megapixeles FROM megapixeles JOIN marca_megapixeles ON marca_megapixeles.id_megapixeles = megapixeles.id JOIN marca ON marca.id = marca_megapixeles.id_marca WHERE cantidad > 0',
    'SELECT nombre FROM tipo_sensor WHERE cantidad > 0',
    'SELECT nombre FROM memoria_ram WHERE cantidad > 0',
    'SELECT nombre FROM memoria_rom WHERE cantidad > 0'
];

router.get('/', async (req, res) => {
    mysqlConnection.query(queries.join(";"), (err, resources, fields) => {
        if (!err) {
            resources = {
                materiales: resources[0],
                colores: resources[1],
                tamaños: resources[2],
                baterias: resources[3],
                pantallas: resources[4],
                camaras: resources[5],
                sensores: resources[6],
                rams: resources[7],
                roms: resources[8]
            };

            resources.camaras = normalizeJSON(resources.camaras);

            res.json(resources);
        } else {
            console.log(err);
        }
    });

    function normalizeJSON(json){
        var cameras = new Array();
        json.forEach(par => {
            var flag = false;
            for (let index = 0; index < cameras.length; index++) {
                const element = cameras[index];
                if (par.marca == element.marca) {
                    element.megapixeles.push(par.megapixeles);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                par.megapixeles = [par.megapixeles];
                cameras.push(par);
            }
        });
        return cameras;
    }

});

module.exports = router;