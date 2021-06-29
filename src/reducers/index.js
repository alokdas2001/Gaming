import { combineReducers } from 'redux';
import gameReducer from './gamesReducer';

const rootReducer = combineReducers({
	games: gameReducer,
});

export default rootReducer;
