import React from 'react';
import './style.css';

const Page = ({name}) => {
    return (
        <option value={name}>{name}</option>
    );
}

export default Page;