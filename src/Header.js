'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom'

const Header = (props) => {

    const handleClick = () => {
        props.resetHomePage()
    }

    return(
        <div id='header'>
            <h1>Github viewer</h1>
            <Route path="/repos/:id" render={(props) => {
                    return <Link to='/' ><button className='button' onClick={handleClick} >Home</button></Link>
            }}/>
            
            <hr />
        </div>
    )
}

Header.propTypes = {
    resetHomePage:PropTypes.func.isRequired
}

export default Header;


