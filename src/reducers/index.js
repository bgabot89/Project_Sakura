import { combineReducers } from 'redux';
import CommentsReducer from './reducer_comments';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  comments: CommentsReducer,
  form: formReducer
});

export default rootReducer;
