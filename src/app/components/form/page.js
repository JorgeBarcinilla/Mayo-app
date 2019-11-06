import React from 'react';
import FormGroupSingle from '../formGroupSingle';
import FormGroupDouble from '../formGroupDouble';
import FormGroupDoublePlus from '../formGroupDoublePlus';
import './style.css';

const Page = ({resources}) => {
    console.log(resources)
    return (
        <form>
            <h3>Personaliza tu telefono MAYO</h3>
            <FormGroupSingle
                title = 'Carcasa'
                selects = {[{name:'Material', options:resources.materiales},{name:'Color', options:resources.colores},{name:'Tamaño', options:resources.tamaños}]}
            />
            <FormGroupSingle
                title='Bateria'
                selects = {[{name:'Duracion', options:resources.baterias}]}
            />
            <FormGroupSingle
                title='Pantalla'
                selects = {[{name:'Tipo', options:resources.pantallas}]}
            />
            <FormGroupDouble
                title='Camara frontal'
                selects = {[{name:'Marca', options:resources.pantallas}, {name:'MP', options:resources.pantallas}]}
            />
            <FormGroupDoublePlus
                id='camera'
                title='Camara Trasera'
                selects = {[{name:'Marca', options:resources.pantallas}, {name:'MP', options:resources.pantallas}]}
            />
            <FormGroupDoublePlus
                id='sensor'
                title='Sensores'
                selects = {[{name:'Tipo', options:resources.sensores}]}
            />
            <FormGroupSingle
                title='Memoria RAM'
                selects = {[{name:'Capacidad', options:resources.rams}]}
            />
            <FormGroupSingle
                title='Memoria ROM'
                selects = {[{name:'Capacidad', options:resources.roms}]}
            />
            <button className="btn btn-info float-right" type="submit">Ordenar</button>
        </form>
    );
}

export default Page;