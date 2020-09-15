import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import _ from 'lodash';
import { v4 } from 'uuid';

import Row from './row';
import TableHead from './table-head';
import AddRow from './add-row';
import OpenPerson from '../open-person/open-person';
import CircleWord from '../circle-word/circle-word';
import Search from '../search/search';

import { loadedPersons, startTable, changetPage, toggelAddform } from '../../actions';

import './table.scss';

const Table = ({ table, addForm, getData, loadedPersons, toggelAddform, startTable, pageSize, changetPage, }) => {

    useEffect(() => {
        startTable();
        loadedPersons(getData);
        changetPage(0);
    }, []);

    let {isLoaded, isError, persons, sort, search, currentPage} = table;
    const { open } = addForm;

    persons = _.orderBy(persons, [sort.by], [sort.direction]);

    const personsSearh = persons.filter(person => 
        person.firstName.toLowerCase().includes(search.toLowerCase()) ||
        person.lastName.toLowerCase().includes(search.toLowerCase()) ||
        person.email.toLowerCase().includes(search.toLowerCase()) ||
        person.id.toString().includes(search.toLowerCase()) ||
        person.phone.toString().includes(search.toLowerCase())
        );
        
    const showPersons = personsSearh.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    
    if(isLoaded) return <CircleWord text={'loaded... loaded... loaded... '}/>;
    if(isError) return `Oops... error`;

    const handlePageClick = ({selected}) => {
        changetPage(selected);
    }
    
    const pageCount = Math.ceil(personsSearh.length / pageSize);
    
    return (
        <div className='table-wrapper'>
            <button className='button-form-toggle'onClick={() => toggelAddform()}> Add person {open ? <span className='button-form-toggle__indicator'>-</span> : <span className='button-form-toggle__indicator'>+</span>}</button>
            {open && <AddRow />}
            <Search />
            {
                (personsSearh.length > pageSize) &&
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'pagination__page'}
                    activeClassName={'active'}
                    forcePage={currentPage}
                    />
            }
            <table className='table'>
                <TableHead />
                <tbody className='table__body'>
                {personsSearh.length !== 0 ? showPersons.map(person => <Row person={person} key={v4()} />) : 'Oops... Empty'}               
                </tbody>
            </table>
            {
                (personsSearh.length > pageSize) &&
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    pageClassName={'pagination__page'}
                    forcePage={currentPage}
                    />
            }
            {personsSearh.length !== 0 && <OpenPerson />}
        </div>
    )
}

const mapStateToProps = ({table, addForm}) => {
    return {
        table,
        addForm
        
    }
}

const mapDispathToProps = {
    loadedPersons,
    startTable,
    changetPage,
    toggelAddform
}

export default connect(mapStateToProps, mapDispathToProps)(Table);