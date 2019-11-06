import React, { Component } from 'react';
import Page from './page';

class FormGroupSingle extends Component {

    constructor(props){
    super(props);
    }

    componentDidMount(){
    }
    
    render() {
        return(
            <Page 
                title = {this.props.title}
                selects = {this.props.selects}
            />
        ); 
    }
}

export default FormGroupSingle;