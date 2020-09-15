import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import Table from '../table/table';
import Header from '../header/header';

import { loadedPersons } from '../../actions/';

import * as service from '../../service';


const App = () => {

    
    return (
        <>
            <Header/>
            <Route path='/big-data/' render={ () => { 
                return <Table pageSize={50} getData={() => service.getDataPersonsBig()}/> 
                }}/>
            <Route path='/small-data/' render={ () => {
                return <Table pageSize={50} getData={() => service.getDataPersonsSmall()}/> 
                }}/> 
        </>
    )
}

const mapDispathToProps = {
    loadedPersons
}


export default connect(null, mapDispathToProps)(App);