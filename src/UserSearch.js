'use strict'

import React, { Component } from 'react';
import { func } from 'prop-types';

const UserSearch = (props) => {



    return (
        <div id='userSearch'>
            <hr />
            <p className="notification-box alert">Invalid username</p>
            <p>Search repositories by username</p>
            <form>
                <input type='text' />
                <input type='submit' className='button expand' value='Search' />
            </form>
            <hr />
        </div>
    )
}

export default UserSearch;