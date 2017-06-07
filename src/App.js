'use strict'

import Header from './Header'
import UserSearch from './UserSearch'
import RepoSection from './RepoSection'
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <UserSearch />
                <span className="loading-indicator medium"></span>
                <RepoSection languages={this.props.languages} repos={this.props.repos}/>
            </div>
        );
    }
}

export default App;
