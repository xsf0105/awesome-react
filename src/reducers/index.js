// import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux'

// // import { nav } from './nav';
// // import { search } from './search';
// import { books } from './book';

// //注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
// const rootReducer = combineReducers({
//   routing: routerReducer,
//   books, //书籍相关
// });

// export default rootReducer;

import { combineReducers } from 'redux'
import {
  TOPIC,
  TOPICS
} from '../action'

const postsByReddit = (state={}, action) => {
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

const rootReducer = combineReducers({
  postsByReddit
})

export default rootReducer
