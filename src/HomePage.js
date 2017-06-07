'use strict'

import UserSearch from './UserSearch'
import RepoSection from './RepoSection'
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const HomePage = (props) => {

    return (
        <div>
            <UserSearch getRepoList={props.getRepoList} />
            {props.isLoading? <span className="loading-indicator medium"></span>:null}
            {props.username == ''?null:<RepoSection username={props.username} repos={props.repos}/>}
        </div>
    )
}

HomePage.propTypes = {
    getRepoList:PropTypes.func.isRequired,
    isLoading:PropTypes.bool.isRequired,
    username:PropTypes.string.isRequired,
    repos:PropTypes.array.isRequired
}


export default HomePage;