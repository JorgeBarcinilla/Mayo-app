import React from 'react';
import Option from './option';
import './style.css';

const Page = ({name, options}) => {
    return (
        <select className="form-control" name={name}>
            <option value="">{name}</option>
            {
                options.map( (option, i) => {
                    return(
                        <Option
                            key = {i}
                            name = {option.nombre}
                        />
                    )
                })
            }
        </select>
    );
}

export default Page;