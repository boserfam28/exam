'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoSelector from './RepoSelector';
import RepoTable from './RepoTable';
import RepoDetails from './RepoDetails';

const RepoSection = (props) => {

    let languageOptions = props.languages.map((current,index) => {
        return <option key={index}>{current}</option>
    })

    return (
        <div id='repoList'>
            <h3>{props.username}'s repositories</h3>
            <p>Filter repos by primary language</p>
            <RepoSelector languages={props.languages} />
            <RepoTable repos={props.repos} />
            <RepoDetails repo={{name:'hello_dojo',stars:32,forks:6,language:'JavaScript'}} />
        </div>
    )
}

export default RepoSection;