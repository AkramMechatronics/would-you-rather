import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


class QuestionsList extends Component {
    render() {
      console.log(this.props)
    return (
      <div>
      <div className= "center">
      
       {this.props.unAnswered === "true"?(
          <div className= "center">
            <ul className='dashboard-list'>
              {this.props.allQuestions.filter((id) => (Object.keys(this.props.testanswers.answers).indexOf(id)=== -1)).map((id) => (
                <li key={id} className={"border"}>
                  <Question id = {id} typeReq = "QuestionList" sourceQues = "unAnswered"/>
                </li>
              ))}
            </ul>
          </div>
        ):(
          <div className= "center">
            <ul className='dashboard-list'>
              {Object.keys(this.props.testanswers.answers).map((id) => (   
                <li key={id} className={"border"}>
                  <Question id = {id} typeReq = "QuestionList" sourceQues = "Answered"/>
                </li>
              ))}
            </ul>
          </div>
        )} 
      </div>
</div>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }) {
  return {
    testanswers: users[authedUser],
    allQuestions: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(QuestionsList)