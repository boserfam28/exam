'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText:'',
            disabled:true,
            errorText:''
        }
    }

    handleChange = (event) => {
        let validText = this.validateText(event.target.value);
        this.setState({
            searchText:event.target.value,
            disabled:validText
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.getRepoList(this.state.searchText, this.errorCallback)
            .then(() => {
                this.setState({
                    searchText:'',
                    disabled:true,
                    errorText:''
                })
            })
            .catch(() => {
                console.log('user search error catch encountered');
                this.setState({
                    searchText:'',
                    disabled:true,
                    errorText:'Invalid username'
                })
            })
    }

    errorCallback = (errorText) => {
        console.log('got to error callback')
        this.setState({
            errorText:errorText
        })
    }

    validateText = (text) => {
        return text.lengh > 0;
    }

    render(){
        return (
            <div id='userSearch'>
                <hr />
                {this.state.errorText.length === 0?null:<p className="notification-box alert">{this.state.errorText}</p>}
                <p>Search repositories by username</p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange}/>
                    <input type='submit' className='button expand' value='Search' disabled={this.state.disabled}/>
                </form>
                <hr />
            </div>
        )
    }
}

UserSearch.propTypes = {
    getRepoList:PropTypes.func.isRequired
}

export default UserSearch;