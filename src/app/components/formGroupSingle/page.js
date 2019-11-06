import React from 'react';
import './style.css';
import Select from '../select';

const Page = ({title, selects}) => {

    
    return (
        <div className="form-group">
             <label>{title}</label>
             {
                selects.map((select, i) => {
                    return(
                        <Select 
                            key = {i}
                            name = {select.name}
                            options = {select.options}
                        />
                    )
                })
             }
        </div>
    );
}

export default Page;