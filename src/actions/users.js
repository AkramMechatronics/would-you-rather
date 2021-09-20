export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_ANSWER_USER = 'RECEIVE_ANSWER_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function recieveAnswerUser ({ authedUser, qid, answer }) {
  return {
    type: RECEIVE_ANSWER_USER,
    authedUser,
    qid,
    answer
  }
}
export function handleRecieveAnswerUser (info) {
  return (dispatch) => {
    dispatch(recieveAnswerUser(info))
  }
}