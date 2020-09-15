import {LOADED_PERSONS_SMALL, START_TABLE, CHANGE_PAGE, SORT, OPEN_PERSON, ADD_PERSON, SEARCH,
        TOGGEL_FORM, CHANGE_VALUE_ID, CHANGE_VALUE_FIRSTNAME, CHANGE_VALUE_LASTNAME, CHANGE_VALUE_EMAIL, CHANGE_VALUE_PHONE, RESET_FORM
} from '../constants';


const loadedPersons = (getData) => async (next) => {
    let newArr;

    let isError = false;

    await getData()
    .then(res => {
        newArr = res;
    })
    .catch(err => {
        isError = true;
    });

    return next ({
        type: LOADED_PERSONS_SMALL,
        payload: {
            newArr,
            isError
        }
    });
};

const startTable = () => {
    return {
        type: START_TABLE
    };
};

const changetPage = (page) => {
    return {
        type: CHANGE_PAGE,
        payload: page
    };
};

const sortPersons = (nameColumn) => {
    return {
        type: SORT,
        payload: nameColumn
    };
};

const openPerson = (person) => {
    return {
        type: OPEN_PERSON,
        payload: person
    };
};

const toggelAddform = () => {
    return {
        type: TOGGEL_FORM
    };
};

const addPerson = (newPerson = {}) => {
    return {
        type: ADD_PERSON,
        payload: newPerson
    };
};

const changeValueId = (value) => {
    return {
        type: CHANGE_VALUE_ID,
        payload: value
    };
};

const changeValueFirstName = (value) => {
    return {
        type: CHANGE_VALUE_FIRSTNAME,
        payload: value
    };
};

const changeValueLastName = (value) => {
    return {
        type: CHANGE_VALUE_LASTNAME,
        payload: value
    };
};

const changeValueEmail = (value) => {
    return {
        type: CHANGE_VALUE_EMAIL,
        payload: value
    };
};

const changeValuePhone = (value) => {
    return {
        type: CHANGE_VALUE_PHONE,
        payload: value
    };
};

const search = (request) => {
    return {
        type: SEARCH,
        payload: request
    }
}

const resetForm = () => {
    return {
        type: RESET_FORM
    }
}

export {
    loadedPersons,
    startTable,
    changetPage,
    sortPersons,
    openPerson,
    toggelAddform,
    addPerson,
    changeValueId,
    changeValueFirstName,
    changeValueLastName,
    changeValueEmail,
    changeValuePhone,
    search,
    resetForm
};