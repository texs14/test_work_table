import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = ({ isLoaded }) => {
    console.log(isLoaded);
    return (
        <header className='header'>
            {isLoaded ? <div className='header__link'> Big </div> : <Link to='/big-data' className='header__link'> Big </Link>}
            {isLoaded ? <div className='header__link'> Small </div> : <Link to='/small-data' className='header__link'> Small </Link>}
        </header>
    )
}

const mapStateToProps = ({table: { isLoaded }}) => {
    return {
        isLoaded
    }
}

export default connect(mapStateToProps, null)(Header);