import { TOGGEL_FORM, CHANGE_VALUE_ID, CHANGE_VALUE_FIRSTNAME, CHANGE_VALUE_LASTNAME, CHANGE_VALUE_EMAIL, CHANGE_VALUE_PHONE, RESET_FORM } from '../constants';

const updateAddForm = (state, action) => {
    
    if(state === undefined) return {
        open: false,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    switch (action.type) {
        case TOGGEL_FORM:
            return {
                ...state.addForm,
                open: !state.addForm.open
            }

        case CHANGE_VALUE_ID:
            return {
                ...state.addForm,
                id: action.payload
            }
    
            case CHANGE_VALUE_FIRSTNAME:
            return {
                ...state.addForm,
                firstName: action.payload
            }
    
            case CHANGE_VALUE_LASTNAME:
            return {
                ...state.addForm,
                lastName: action.payload
            }
    
            case CHANGE_VALUE_EMAIL:
            return {
                ...state.addForm,
                email: action.payload
            }
    
            case CHANGE_VALUE_PHONE:
            return {
                ...state.addForm,
                phone: action.payload
            }

            case RESET_FORM:
                return  {
                    ...state.addForm,
                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                }
        default:
            return state.addForm;
    }
}

export default updateAddForm;