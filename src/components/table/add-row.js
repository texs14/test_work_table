import React from 'react';
import { connect } from 'react-redux';
import {IMaskInput} from 'react-imask';

import { addPerson, changeValueId, changeValueFirstName, changeValueLastName, changeValueEmail, changeValuePhone, resetForm } from '../../actions/index';

const AddRow = ({addPerson, resetForm, addForm, changeValueId, changeValueFirstName, changeValueLastName, changeValueEmail, changeValuePhone}) => {

    let email, lastName, firstName, id;

    let disabled = false;

    if(addForm.id !== '' && addForm.lastName !== '' && addForm.firstName !== '' && addForm.email !== '' && addForm.phone.length === 13) disabled = true;

    let newPerson = {
        id: addForm.id,
        firstName: addForm.firstName,
        lastName: addForm.lastName,
        email: addForm.email,
        phone: addForm.phone,
    }

    return (
        <form className='add-form' onSubmit={(e) => {e.preventDefault(); addPerson(newPerson); resetForm();}}>
            <span className='add-form__input-wrapper'>
                <label className='add-form__lable'>id</label>
                <input type='number' className='add-form__input' value={addForm.id} onChange={() => changeValueId(id.value)} ref={ref => id = ref}/>
            </span>
            <span className='add-form__input-wrapper'>
                <label className='add-form__lable'>firstName</label>
                <input type='text' className='add-form__input' value={addForm.firstName} onChange={() => changeValueFirstName(firstName.value)} ref={ref => firstName = ref}/>
            </span>
            <span className='add-form__input-wrapper'>
                <label className='add-form__lable'>lastName</label>
                <input type='text' className='add-form__input' value={addForm.lastName} onChange={() => changeValueLastName(lastName.value)} ref={ref => lastName = ref}/>
            </span>
            <span className='add-form__input-wrapper'>
                <label className='add-form__lable'>email</label>
                <input type='email' placeholder='example@gmail.com' className='add-form__input' value={addForm.email} onChange={() => changeValueEmail(email.value)} ref={ref => email = ref}/>
            </span>
            <span className='add-form__input-wrapper'>
                <label className='add-form__lable'>phone</label>
                <IMaskInput
                    mask={`(000)000-0000`}
                    value={addForm.phone}
                    unmask={false}
                    onAccept={value => changeValuePhone(value)}
                    placeholder='(000)000-0000'
                    />
            </span>
            <button type='submit' disabled={disabled ? '' : 'disabled'}> Add </button>
        </form>
    )
}

const mapStateToProps = ({ addForm }) => {
    return {
        addForm
    }
}

const mapDispatchToProps = {
    addPerson,
    changeValueId,
    changeValueFirstName,
    changeValueLastName,
    changeValueEmail,
    changeValuePhone,
    resetForm
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRow);