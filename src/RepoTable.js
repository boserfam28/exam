'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RepoTable = (props) => {

    let repoList = props.repos.map((current,index) => {
        return (
            <tr key={index}>
                <td>{current}</td>
            </tr>
        )
    })    

    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {repoList}
            </tbody>
        </table>
    )
}

export default RepoTable;