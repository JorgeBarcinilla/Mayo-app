import React from 'react';
import './style.css';
import Select from '../select';

const Page = ({id, title, selects}) => {

    return (
        <div className="form-group" id={id+'s'}>
            <div className="row justify-content-around align-items-center">
                <label>{title}</label>
                <button className="float-right btn-add btn btn-light" id={'add-'+id} type="button">Agregar más</button>
            </div>
            <div className="row justify-content-around align-items-center container-camera template" id="template-camera">
                <div className="col-5">
                    <select className="form-control" name="Marca">
                        <option value="">Marca</option>
                    </select>
                </div>
                <div className="col-5">
                    <select className="form-control" name="MP">
                        <option value="">MP</option>
                    </select>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger btn-sm btn-delete btn-delete-camera" type="button">X</button>
                </div>
            </div>
            <div className="row justify-content-around align-items-center container-sensor template" id="template-sensor">
                <div className="col-10">
                    <select className="form-control">
                        <option value="">Tipo</option>
                    </select>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger btn-sm btn-delete btn-delete-sensor" type="button">X</button>
                </div>
            </div>
            
            <div className={"row justify-content-around align-items-center container-"+id} id={id+'-1'}>
                {
                    selects.map((select, i) => {
                        return(
                            <div className={'col-'+(10/selects.length)} key = {i}>
                                <Select 
                                    name = {select.name}
                                    options = {select.options}
                                />
                            </div>
                        )
                    })
                }
                <div className="col-2">
                    <button className={"btn btn-danger btn-sm btn-delete btn-delete-"+id} type="button" disabled>X</button>
                </div>
            </div>
        </div>
    );
}

export default Page;