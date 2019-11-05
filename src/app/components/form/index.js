import React, { Component } from 'react';
import Page from './page';
import request from 'superagent';

class Form extends Component {

    constructor(){
        super();
    
        this.state = {
            materiales: [''],
            colores: [''],
            tamaños: [''],
            baterias: [''],
            pantallas: [''],
            camaras: [''],
            sensores: [''],
            rams: [''],
            roms: ['']
        }
    }

    componentDidMount(){
        request
            .get('http://localhost:3000/api/resources')
            .end((err, res) => {
                
                const resources = JSON.parse(res.text);
                this.setState({
                    materiales: resources.materiales,
                    colores: resources.colores,
                    tamaños: resources.tamaños,
                    baterias: resources.baterias,
                    pantallas: resources.pantallas,
                    camaras: resources.camaras,
                    sensores: resources.sensores,
                    rams: resources.rams,
                    roms: resources.roms
                });
            });
    }

    render() {

        var resources = this.state;
        
        return(
            <Page
                resources = {resources}
            />
        ); 
    }
}

export default Form;