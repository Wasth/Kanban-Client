import { boardsReducer } from './boards'
import { userReducer } from './user'
import { listsReducer } from './lists'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
	boards: boardsReducer,
	user: userReducer,
	lists: listsReducer,
});