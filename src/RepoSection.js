'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoSelector from './RepoSelector';
import RepoTable from './RepoTable';
import RepoDetails from './RepoDetails';
import { Route } from 'react-router-dom'

class RepoSection extends Component {

    constructor(props){
        super(props);
        this.state = {
            repoFilter:'All'
        }
    }

    updateRepoFilter = (text) => {
        this.setState({
            repoFilter:text
        })
    }

    render(){
        console.log('building repo section');
        return (
            <div id='repoList'>
                <h3>{this.props.username}'s repositories</h3>
                <p>Filter repos by primary language</p>
                <RepoSelector repos={this.props.repos} updateRepoFilter={this.updateRepoFilter} />
                <RepoTable repos={this.props.repos} repoFilter={this.state.repoFilter} />
            </div>
        )
    }
}



//
  //              
    //            <Route path="/repos/:username" render={(props) => {
      //              <RepoDetails props={...props} username={this.props.username} repo>
        //        }} />


RepoSection.propTypes = {
    username:PropTypes.string.isRequired,
    repos:PropTypes.array.isRequired
}

export default RepoSection;