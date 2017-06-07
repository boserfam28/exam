'use strict'

import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const Header = (props) => {

    const handleClick = (event) => {
        this.history.push('/');
    }

    return(
        <div id='header'>
            <h1>Github viewer</h1>
            <Route path="/repos/:id" render={(props) => {
                    return <button className='button' onClick={this.handleClick}>Home</button>
                }} 
            />
            
            <hr />
        </div>
    )
}

export default Header;


