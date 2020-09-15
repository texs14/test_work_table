import React from 'react';
import { connect } from 'react-redux';

import { search, changetPage } from '../../actions/';

import './search.scss';

const Search = ({search, changetPage}) => {
    
    let request;
    
    return (
        <form className='search' onSubmit={e => {e.preventDefault(); search(request.value); changetPage(0)}}>
            <input type='text' placeholder='What you are looking for...' ref={ref => request = ref}/>
            <button>Search</button>
        </form>
    )
}

const mapDispatchToProps = {
    search,
    changetPage
}

export default connect(null, mapDispatchToProps)(Search);