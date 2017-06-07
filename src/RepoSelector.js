'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RepoSelector = (props) => {

    const uniqueLanguages = (arr) => {
        let unique = {};
        arr.forEach((current) => {
            let {language} = current;
            unique[language] = true;
        })
        return Object.keys(unique);
    }

    const handleSelect = (event) => {
        props.updateRepoFilter(event.target.value);
    }

    let languages = uniqueLanguages(props.repos);
    console.log(languages)

    let languageOptions = languages.map((current,index) => {
        return <option key={index}>{current}</option>
    })

    return (
        <select onChange={handleSelect}>
            <option key={-1}>All</option>
            {languageOptions}
        </select>
    )
}

RepoSelector.propTypes = {
    repos:PropTypes.array.isRequired,
    updateRepoFilter:PropTypes.func.isRequired
}

export default RepoSelector;