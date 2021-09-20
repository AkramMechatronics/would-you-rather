import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function recieveAnswer ({ authedUser, qid, answer }) {
  return {
    type: RECEIVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion ({optionOneText , optionTwoText , author}) {
  return (dispatch) => {
    
    return saveQuestion({optionOneText , optionTwoText , author})
.then((question) => dispatch(addQuestion(question)))
  }
}

export function handleRecieveAnswer (info) {
  return (dispatch) => {
    dispatch(recieveAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in saveQuestionAnswer: ', e)
        dispatch(recieveAnswer(info))
        alert('The was an error saving the answer. Try again.')
      })
  }
}