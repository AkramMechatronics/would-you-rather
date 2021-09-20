import { RECEIVE_USERS, RECEIVE_ANSWER_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
      case RECEIVE_ANSWER_USER :
              let allAnswers = state[action.authedUser].answers
              let addSection = {[action.qid]: action.answer}
              const finalObj = {...allAnswers,
                          ...addSection}
      return {
        ...state,
        [action.authedUser]:{
            ...state[action.authedUser],
            answers: finalObj
          }
      }
    default :
      return state
  }
}