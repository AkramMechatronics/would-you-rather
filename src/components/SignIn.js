import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'
import Nav from './Nav'

class SignIn extends Component {
  state = {
    toQuestions: true,
  }
  SignInClicked = () =>{
      let selsectedUser = document.getElementById('users')
      console.log(selsectedUser.value)
      if(selsectedUser.value === "NoUserIsSelected")
      {
        alert("no user is selected")
      }
      else
      {
        /* Set authUser to the selected */
        this.props.dispatch(handleSetAuthedUser(selsectedUser.value))
        this.setState({ toQuestions: false })
        /* route to the main page */
        
      }
    } 
  render() {
          if (this.state.toQuestions === false) {
        return <Redirect to='/home' />
      }
    return (
      <div>
              <Nav />
      <div className= "center">
          <select name="users" id="users" defaultValue = {"NoUserIsSelected"}>
            <option hidden disabled key = {1} value = {"NoUserIsSelected"}> -- select a user -- </option>
            {this.props.userIds.map((id) => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
          <button type="button" onClick={this.SignInClicked} >Sign In</button>
      </div>
</div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(SignIn)