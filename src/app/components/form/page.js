import React from 'react';
import FormGroup from '../formGroup';
import './style.css';

function Page(props) {
    return (
        <form>
            <h3>Personaliza tu telefono MAYO</h3>
            <FormGroup/>
            <FormGroup/>
            <FormGroup/>
            <FormGroup/>
            <FormGroup/>
            <FormGroup/>
            <FormGroup/>
            <button class="btn btn-info float-right" type="submit">Ordenar</button>
        </form>
    );
}

export default Page;