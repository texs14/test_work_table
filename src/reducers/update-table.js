import {LOADED_PERSONS_SMALL, START_TABLE, CHANGE_PAGE, SORT, OPEN_PERSON, ADD_PERSON, SEARCH } from '../constants';

const updateTable = (state, action) => {

    if(state === undefined) {
        return {
            isLoaded: false,
            isError: false,
            persons: [],
            openPerson: {
                open: false,
                person: {}
            },
            currentPage: 0,
            sort: {
                by: 'none',
                direction: 'asc'
            },
            search: '',
        }
    }
    switch (action.type) {
        case LOADED_PERSONS_SMALL: 
        return {
            ...state.table,
            isError: action.payload.isError,
            persons: action.payload.newArr,
            isLoaded: false,
        }

        case START_TABLE: 
            return {
                isLoaded: true,
                isError: false,
                persons: [],
                openPerson: {
                    open: false,
                    person: {}
                },
                currentPage: 0,
                sort: {
                    by: 'none',
                    direction: 'asc'
                },
                search: '',
            }

        case CHANGE_PAGE:
            return {
                ...state.table,
                currentPage: action.payload
            }

        case SORT:
            const direction = ( state.table.sort.by === action.payload && state.table.sort.direction === 'asc') ? 'desc' : 'asc';
            
            return {
                ...state.table,
                sort: {
                    by: action.payload,
                    direction: direction
                }
            }

        case OPEN_PERSON: 
            return {
                ...state.table,
                openPerson: {
                    open: true,
                    person: action.payload
                }
            }


        case ADD_PERSON:
            return {
                ...state.table,
                persons: [action.payload, ...state.table.persons],
            };

        case SEARCH:
            return {
                ...state.table,
                search: action.payload
            }
        
        default: 
            return state.table;
    }
}

export default updateTable;