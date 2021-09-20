import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import SignIn from './SignIn'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import QuestionsContainer from './QuestionsContainer'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      <div className='container'>
        <div>
        {this.props.loading === true
              ? null
              : <div>
         <Route path='/' exact component={SignIn} />
         <Route path='/home' exact component={QuestionsContainer} />
         <Route path='/question/:id' component={QuestionPage} />
         <Route path='/new' component={NewQuestion} />
         <Route path='/lead' component={LeaderBoard} />
                </div>}
        </div>
      </div>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser
  }
}

export default connect(mapStateToProps)(App)