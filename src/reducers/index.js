import updateTable from './update-table';
import updateAddForm from './update-add-form';

const reducer = (state, action) => {

    return {
        table: updateTable(state, action),
        addForm: updateAddForm(state, action),
    }
}

export default reducer;