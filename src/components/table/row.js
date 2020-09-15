import React from 'react';
import { connect } from 'react-redux';

import { openPerson } from '../../actions';

const Row = ({ person, openPerson }) => {

    const { id, firstName, lastName, email, phone} = person;
    
    return (
        <tr className='table__row' onClick={() => openPerson(person)}>
            <td className='table__cell'>
                {id}
            </td>
            <td className='table__cell'>
                {firstName}
            </td>
            <td className='table__cell'>
                {lastName}
            </td>
            <td className='table__cell'>
                {email}
            </td>
            <td className='table__cell'>
                {phone}
            </td>
        </tr>
    )
}

const mapDispathToProps = {
    openPerson
}

export default connect(null, mapDispathToProps)(Row);