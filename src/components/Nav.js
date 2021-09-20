import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  state = {
    toHome: true,
  }
  LogOutClicked = () =>{
    this.props.dispatch(handleSetAuthedUser('1'))
    this.setState({ toHome: false })
  }
  alertHandle= () =>{
    alert("you need to sighn first")
  }
  render() {
        if (this.state.toHome === false) {
        return <Redirect to='/' />
      }
    return (
      <div>
          {(this.props.askeduser1 === '1') | (this.props.askeduser1 === null)? (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to = "/" exact activeClassName='active' onClick = {this.alertHandle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to = "/" activeClassName='active' onClick = {this.alertHandle}>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to = "/" activeClassName='active' onClick = {this.alertHandle}>
            LeaderBoard
          </NavLink>
        </li>
      </ul>
    </nav>    
    ):(
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/home' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/lead' activeClassName='active'>
            LeaderBoard
          </NavLink>
        </li>
      </ul>

      <div>
      <img src={this.props.userInfo.avatarURL} alt="" width="50" height="60"/>
      Hello, {this.props.userInfo.name}
      <button type="button" onClick={this.LogOutClicked}>Log Out</button>
      </div>

    </nav>
              )}
    </div>
  )
 }
}
function mapStateToProps ({ users, questions, authedUser }) {
  return {
    askeduser1: authedUser,
    userInfo: users[authedUser],
  }
}

export default connect(mapStateToProps)(Nav)