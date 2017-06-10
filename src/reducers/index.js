import { combineReducers } from 'redux'
import { TOPIC, TOPICS } from '../action'

const postsByReddit = (state={}, action) => {
  // console.log(action,8)
  switch (action.type) {
    case TOPICS:
      return {
        ['results']: {
          type: action.type,
          topics: action.results,
        }
      }
    case TOPIC:
      return {
        ['results']: {
          type: action.type,
          topic: action.results.topic,
          replies: action.results.replies
        }
      }
    default:
      return state
  }
}

const addText = (state='', action) => {
    // console.log(action, 99)
  switch(action.type) {
    case 'TEST_ACTION':
      return action.text;
    case 'TEST_ACTION2':
      return action.text
  }
  return state;
}

// 注册reducer，每个自定义的reducer都要来这里注册！！！
const rootReducer = combineReducers({
  postsByReddit,
  addText
})

export default rootReducer
