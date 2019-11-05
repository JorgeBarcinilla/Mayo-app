import React from 'react';
import './style.css';
import Select from '../select';

const Page = ({title, selects}) => {

    return (
        <div className="form-group">
             <label>{title}</label>
             <div className="row">
             {
                selects.map((select, i) => {
                    return(
                        <div className="col-sm-6" key = {i}>
                            <Select 
                                name = {select.name}
                                options = {select.options}
                            />
                        </div>
                    )
                })
             }
             </div>
             
        </div>
    );
}

export default Page;