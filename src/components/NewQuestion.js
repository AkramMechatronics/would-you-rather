import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
    text1: '',
    text2: '',
  }
  handleChange1 = (e) => {
    const text1 = e.target.value
    this.setState(() => ({
      text1
    }))
  }
  handleChange2 = (e) => {
    const text2 = e.target.value
    this.setState(() => ({
      text2
    }))
  }
  handleSubmit = (e) => {
    console.log(this.state.text1)
    console.log(this.state.text2)
    if((this.state.text1 !== "")&&(this.state.text2 !== ""))
    {
      this.props.dispatch(handleAddQuestion({
        optionOneText: this.state.text1, 
        optionTwoText: this.state.text2, 
        author: this.props.askeduser
      }))
      this.setState(() => ({
      text1: '',
      text2: '',
      }))
    }
    else{
      alert("you need to enter the options first")
    }
  }
    render() {
    return (
                  <div>
              <Nav />
      <div className='center'>
        <h3 className='center'>ask new question</h3>
        <textarea
            placeholder="OptionOne"
            value={this.state.text1}
            onChange={this.handleChange1}
            maxLength={150}
        /><br/>
        <textarea
            placeholder="OptionTwo"
            value={this.state.text2}
            onChange={this.handleChange2}
            maxLength={150}
        /><br/>
          <button
            type='button'
            onClick = {this.handleSubmit}>
              Submit
          </button>
      </div>
  </div>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }) {
  return {
    askeduser: authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion)