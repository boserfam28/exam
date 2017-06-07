'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RepoDetails = (props) => {

    let { name, stars, forks, language } = props.repo;

    return (
        <div>
            <p>{name}'s details</p>
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
                        <td>{stars}</td>
                        <td>{forks}</td>
                        <td>{language}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RepoDetails;