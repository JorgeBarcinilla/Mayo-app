import React, {Component} from 'react';
import { render } from 'react-dom';
import Card from './components/card'
import $ from 'jquery';
window.$ = $;
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render(){
        return(
            <div className="container">
                <Card/>
            </div>
        )
    }

}
    
render(<App/>, document.getElementById('app'));

