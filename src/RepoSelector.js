'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RepoSelector = (props) => {

    let languageOptions = props.languages.map((current,index) => {
        return <option key={index}>{current}</option>
    })

    return (
        <select>
            <option key={-1}>All</option>
            {languageOptions}
        </select>
    )
}

export default RepoSelector;