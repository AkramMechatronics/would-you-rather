import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleRecieveAnswer } from '../actions/questions'
import { handleRecieveAnswerUser } from '../actions/users'

class Question extends Component {
    state = {
    qinfo : this.props.sourceQues,
  }
  pollClicked = (e) =>{
  console.log(this.props.askeduser.name)}
  
    handleOptionOne = (e) =>{
  console.log("handleOptionOne")
    document.getElementById("optionTwo"+this.props.question.id).checked= false}
  
    handleOptionTwo = (e) =>{
  console.log("handleOptionTwo")
    document.getElementById("optionOne"+this.props.question.id).checked= false}
  answerSubmited = () =>{
    const getSelected1 = document.getElementById("optionOne"+this.props.question.id).checked
    const getSelected2 = document.getElementById("optionTwo"+this.props.question.id).checked
    if(getSelected1) { console.log("option1 is selected")
                    this.props.dispatch(handleRecieveAnswer({ 
                    authedUser: this.props.authedUser1,
                    qid: this.props.question.id,
                    answer: "optionOne",
                    })) 
                    this.props.dispatch(handleRecieveAnswerUser({ 
                    authedUser: this.props.authedUser1,
                    qid: this.props.question.id,
                    answer: "optionOne",
                    }))                      
                     this.setState({ qinfo: "Answered" })} 
    else if(getSelected2) {console.log("option2 is selected")
                    this.props.dispatch(handleRecieveAnswer({ 
                    authedUser: this.props.authedUser1,
                    qid: this.props.question.id,
                    answer: "optionTwo",
                    })) 
                    this.props.dispatch(handleRecieveAnswerUser({ 
                    authedUser: this.props.authedUser1,
                    qid: this.props.question.id,
                    answer: "optionTwo",
                    }))                           
                    this.setState({ qinfo: "Answered" })} 
    else{alert("please choose an answer")}
    
  }
    render() {
      console.log(this.props)
    return (
      <div className= "center">
      {this.props.typeReq === "QuestionList" ? (
      <div>
        <div className= "center">{this.props.askeduser.name} asks..</div>
        <img src={this.props.askeduser.avatarURL} alt="" width="50" height="60"/>
        <h3 className= "center">Would you Rather ..</h3>
        <p>..{this.props.question.optionOne.text.substr(this.props.question.optionOne.text.length/2, this.props.question.optionOne.text.length/3)}..</p>
        <Link to={`/question/${this.props.question.id}`} >
        <button type="button"  onClick={this.pollClicked} >View Poll</button></Link>
</div>
):(
  <div>
  </div>
  )} 

      {(this.props.typeReq === "PollView") ? ((this.state.qinfo==="unAnswered")?(
      <div>
        <div className= "center">{this.props.askeduser.name} asks</div>
        <img src={this.props.askeduser.avatarURL} alt="" width="50" height="60"/>
        <h3 className= "center">Would you Rather ..</h3>
        <label>
          <input type="radio" id={"optionOne"+this.props.question.id} value="optionOne" onChange = {this.handleOptionOne}/>{this.props.question.optionOne.text}
        </label>
        <label>
          <input type="radio" id={"optionTwo"+this.props.question.id} value="optionTwo" onChange = {this.handleOptionTwo}/>{this.props.question.optionTwo.text}
        </label>
        <button onClick = {this.answerSubmited} id = "submitButn" >submit</button>
</div>):(
  <div>
        <div className= "center">asked by {this.props.askeduser.name}</div>
        <img src={this.props.askeduser.avatarURL} alt="" width="50" height="60"/>
        <h3 className= "center">Results:-</h3>
        <p>you choosed {this.props.askeduser.answers[this.props.id]}</p>
        <p>Option one: {this.props.question.optionOne.text}</p>
        <p>Option one results: {this.props.question.optionOne.votes.length} out of {this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length} voted for this</p>
        <p>Option two:{this.props.question.optionTwo.text}</p>
        <p>Option two results:{this.props.question.optionTwo.votes.length} out of {this.props.question.optionOne.votes.length+this.props.question.optionTwo.votes.length} voted for this</p>
  </div>
)
 
):(
       <div>
  </div>
  )} 
      </div>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }, { id }) {
  return {
    question: questions[id],
    askeduser : users[questions[id].author],
    authedUser1: authedUser
  }
}

export default connect(mapStateToProps)(Question)