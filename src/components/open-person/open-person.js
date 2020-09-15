import React from 'react';
import { connect } from 'react-redux';


const OpenPerson = ({ table }) => {

    let {openPerson: {person, open} } = table;

    if(open) {
        const { firstName, lastName, description = 'none', address: { streetAddress = 'Kolotyshkins Pushkins', city = 'Moscow', state = 'Moscow', zip = '123456'} = {} } = person;
        return (
            <div className='table-wrapper'>
                <p>Выбран пользователь <b>{`${firstName} ${lastName}`}</b></p>
                <p>Описание:</p>
                <p>
                {description}
                </p>
                <p>Адрес проживания: <b>{streetAddress}</b></p>
                <p>Город: <b>{city}</b></p>
                <p>Провинция/штат: <b>{state}</b></p>
                <p>Индекс: <b>{zip}</b></p>
            </div>
            )
    
        } else return (<h4>click on person</h4>)
    
    
    
}

const mapStateToProps = ({table}) => {
    return {
        table
    }
}



export default connect(mapStateToProps, null)(OpenPerson);