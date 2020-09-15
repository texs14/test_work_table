import React from 'react';
import { connect } from 'react-redux';

import { search } from '../../actions/';

import './search.scss';

const Search = ({search}) => {
    
    let request;
    
    return (
        <form className='search' onSubmit={e => {e.preventDefault(); search(request.value)}}>
            <input type='text' placeholder='What you are looking for...' ref={ref => request = ref}/>
            <button>Search</button>
        </form>
    )
}

const mapDispatchToProps = {
    search
}

export default connect(null, mapDispatchToProps)(Search);