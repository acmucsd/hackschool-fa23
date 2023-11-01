import React from 'react';
import './style.css';

const Type = ({ id }) => {
    const defaultEmpty = ['type1'];

    let emptyOption;
    if (defaultEmpty.includes(id)) {
        emptyOption = <option value=""></option>;
    }

    return (
        <select id={id} name={id}>
            {emptyOption}
            <option>Cash</option>
            <option>Credit</option>
            <option>Debit</option>
            <option>Check</option>
            <option>Crypto</option>
        </select>
    );
};

export default Type;