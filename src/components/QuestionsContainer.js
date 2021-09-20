import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionsList from './QuestionsList'
import Nav from './Nav'

class QuestionsContainer extends Component {
  state = {
    toAnswered: false,
  }
  UnansweredHandle = () =>{
    let buttonget1 = document.getElementById("button1")
    buttonget1.style.color = "white"
    buttonget1.style.backgroundColor = "#4CAF50"
    let buttonget2 = document.getElementById("button2")
    buttonget2.style.color = "black"
    buttonget2.style.backgroundColor = "white"
    this.setState({ toAnswered: false })
  }
  AnsweredHandle = () =>{
    let buttonget1 = document.getElementById("button1")
    buttonget1.style.color = "black"
    buttonget1.style.backgroundColor = "white"
    let buttonget2 = document.getElementById("button2")
    buttonget2.style.color = "white"
    buttonget2.style.backgroundColor = "#008CBA"
    this.setState({ toAnswered: true })
  }
  render() {
    if (this.state.signedInUser === "1") {
        return <Redirect to='/' />
      }
    return (
            <div>
              <Nav />
      <div className= "center">
        <button id="button1" className="button button1" onClick = {this.UnansweredHandle} >Unanswered Questions</button>
        <button id="button2" className="button button2" onClick = {this.AnsweredHandle}>Answered Questions</button> 
        {this.state.toAnswered? (
           <QuestionsList unAnswered="false"/>
         ):(
           <QuestionsList unAnswered="true"/>
         )}
       
      </div>
     </div>
    )
  }
}

function mapStateToProps ({  authedUser }) {
  return {
    signedInUser: authedUser
  }
}

export default connect(mapStateToProps)(QuestionsContainer)