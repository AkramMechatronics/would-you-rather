import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class LeaderBoard extends Component {
  render() {
    console.log(this.props)
    return (
                  <div>
              <Nav />
      <div className= "center">
      <div className={"border"}>
        <p>First Place</p>
        <img src={this.props.allUsersBuffer[this.props.UsersOrder[0].User].avatarURL} alt="" width="50" height="60"/>
        <p>{this.props.allUsersBuffer[this.props.UsersOrder[0].User].name}</p>
        <p>Total score : {this.props.UsersOrder[0].Answers}</p><br/>
      </div>

      <div className={"border"}>
        <p>Second Place</p>
        <img src={this.props.allUsersBuffer[this.props.UsersOrder[1].User].avatarURL} alt="" width="50" height="60"/>
        <p>{this.props.allUsersBuffer[this.props.UsersOrder[1].User].name}</p>
        <p>Total score : {this.props.UsersOrder[1].Answers}</p><br/>
      </div>
      <div className={"border"}>
        <p>Third Place</p>
        <img src={this.props.allUsersBuffer[this.props.UsersOrder[2].User].avatarURL} alt="" width="50" height="60"/>
        <p>{this.props.allUsersBuffer[this.props.UsersOrder[2].User].name}</p>
        <p>Total score : {this.props.UsersOrder[2].Answers}</p><br/>
      </div>
      </div>
</div>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }) {
  let allUsers = Object.keys(users).map((user) => ({User: users[user].id, Answers: Object.keys(users[user].answers).length+ users[user].questions.length}))
  allUsers.sort(function (a, b) {
  return b.Answers - a.Answers;
});

  return {
    UsersOrder: allUsers,
    allUsersBuffer : users,
  }
}

export default connect(mapStateToProps)(LeaderBoard)