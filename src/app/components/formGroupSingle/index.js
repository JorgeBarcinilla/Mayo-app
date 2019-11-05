import React, { Component } from 'react';
import Page from './page';

class FormGroupSingle extends Component {

    constructor(props){
    super(props);
        this.title = props.title;
        this.selects = props.selects;
    }

    componentDidMount(){
    }
    
    render() {
        return(
            <Page 
                title = {this.title}
                selects = {this.selects}
            />
        ); 
    }
}

export default FormGroupSingle;