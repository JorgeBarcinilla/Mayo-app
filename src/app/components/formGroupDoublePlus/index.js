import React, { Component } from 'react';
import Page from './page';

class FormGroupDoublePlus extends Component {

    constructor(props){
    super(props);
        this.title = props.title;
        this.selects = props.selects;
        this.id = props.id;
    }

    componentDidMount(){
    }
    
    render() {
        return(
            <Page
                id = {this.id} 
                title = {this.title}
                selects = {this.selects}
            />
        ); 
    }
}

export default FormGroupDoublePlus;