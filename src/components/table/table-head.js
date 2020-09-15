import React from 'react';
import { connect } from 'react-redux';

import { sortPersons } from '../../actions';


const TableHead = ({sortPersons, table: {sort}}) => {
    
    const mnemId = sort.by === 'id' && sort.direction === `asc` ? `&#9660;` : `&#9650;`;
    const mnemFirstName = sort.by === 'firstName' && sort.direction === `asc` ? `&#9660;` : `&#9650;`;
    const mnemLastName = sort.by === 'lastName' && sort.direction === `asc` ? `&#9660;` : `&#9650;`;
    const mnemEmail = sort.by === 'email' && sort.direction === `asc` ? `&#9660;` : `&#9650;`;
    const mnemPhone = sort.by === 'phone' && sort.direction === `asc` ? `&#9660;` : `&#9650;`;

    return (
        <thead className='table__head'>
            <tr className='table__row'>
                <td className='table__cell' dangerouslySetInnerHTML={{__html: `id ${sort.by === 'id' ? mnemId : ''}`}} onClick={() => {sortPersons('id')}}></td>
                <td className='table__cell' dangerouslySetInnerHTML={{__html: `firstName ${sort.by === 'firstName' ? mnemFirstName : ''}`}} onClick={() => {sortPersons('firstName')}}></td>
                <td className='table__cell' dangerouslySetInnerHTML={{__html: `lastName ${sort.by === 'lastName' ? mnemLastName : ''}`}} onClick={() => {sortPersons('lastName')}}></td>
                <td className='table__cell' dangerouslySetInnerHTML={{__html: `email ${sort.by === 'email' ? mnemEmail : ''}`}} onClick={() => {sortPersons('email')}}></td>
                <td className='table__cell' dangerouslySetInnerHTML={{__html: `phone ${sort.by === 'phone' ? mnemPhone : ''}`}} onClick={() => {sortPersons('phone')}}></td>
            </tr>
        </thead>
    )
}

const mapStateToProps = ({table}) => {
    return {
        table
    }
}

const mapDispathToProps = {
    sortPersons
}


export default connect(mapStateToProps, mapDispathToProps)(TableHead);