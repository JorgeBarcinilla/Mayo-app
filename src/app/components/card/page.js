import React from 'react';
import './style.css';
import Form from '../form'

function Page(props) {
    return (
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7 col-sm-9 col-11 shadow" id="card">
                <div class="row mt-2 mb-2" id="content-form">
                    <Form/>
                </div>
            </div>
        </div>
    );
}

export default Page;