'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RepoDetails = (props) => {

    let { stargazers_count, forks_count, language } = props.repo;

    return (
        <div>
            <h3>{props.username}'s details</h3>
            <table className="table" cols={3}>
                <thead>
                    <tr>
                        <th>Stars</th>
                        <th>Forks</th>
                        <th>Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stargazers_count}</td>
                        <td>{forks_count}</td>
                        <td>{language}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

RepoDetails.propTypes = {
    username:PropTypes.string.isRequired
}

export default RepoDetails;