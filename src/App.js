'use strict'

import Header from './Header'
import UserSearch from './UserSearch'
import RepoSection from './RepoSection'
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'

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
                    <UserSearch getRepoList={this.getRepoList} />
                    {this.state.isLoading? <span className="loading-indicator medium"></span>:null}
                    {this.state.username == ''?null:<RepoSection username={this.state.username} repos={this.state.repos}/>}
                </div>
            </Router>
        );
    }
}
                   //{this.state.username === ''?null:}

export default App;
