import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Nav from './Nav'

class QuestionPage extends Component {
    render() {
      console.log(this.props.id)
    return (
            <div>
              <Nav />
      <div>
      {this.props.isAnswered ? (
       <Question  id = {this.props.id} typeReq = "PollView" sourceQues = "Answered"/>
       ) : (
      <Question  id = {this.props.id} typeReq = "PollView" sourceQues = "unAnswered"/>
    )}
      </div>
 </div>
    )
  }
}


function mapStateToProps ({ users, questions, authedUser }, props) {
  const { id } = props.match.params
  const signedInUser = authedUser
  const questionsAnswered1 = questions[id].optionOne.votes
  const questionsAnswered2 = questions[id].optionTwo.votes
  const isAnswered1 = questionsAnswered1.includes(signedInUser)
  const isAnswered2 = questionsAnswered2.includes(signedInUser)
  const isAnswered = isAnswered1|isAnswered2
  return {
    id,
    isAnswered,
  }
}

export default connect(mapStateToProps)(QuestionPage)