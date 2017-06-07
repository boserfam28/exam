'use strict'

import Header from './Header'
import UserSearch from './UserSearch'
import RepoSection from './RepoSection'
import HomePage from './HomePage'
import RepoDetails from './RepoDetails'
import React, { Component } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            repos:[],
            isLoading:false
        }
    }

    getRepoList = (user) => {
        console.log('getting repo list for ' + user);

        this.setState({
            repos:[],
            isLoading:true
        })

        return axios.get(`https://api.github.com/users/${user}/repos`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    username:user,
                    repos:response.data,
                    isLoading:false
                })
                console.log('done with then');
            })
            .catch((err) => {
                console.log('error encountered');
                console.log('repos',this.state.repos);
                this.setState({
                    username:'',
                    repos:[],
                    isLoading:false
                })
                throw new Error('Invalid username');
            })
    }

    render() {
        return (
            <Router>
                <div id="app">
                    <Header />
                    <Route exact path='/' render={(props) => {
                        return <HomePage 
                            { ... props} 
                            getRepoList={this.getRepoList}
                            isLoading={this.state.isLoading}
                            repos={this.state.repos}
                            username={this.state.username}
                        />
                    }}/>
                    <Route path='/repos/:id' render={(props) => {
                        return <RepoDetails 
                            { ... props} 
                            repos={this.state.repos}
                            username={this.state.username}
                        />
                    }}/>

                </div>
            </Router>
        );
    }
}

export default App;
