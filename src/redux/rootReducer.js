import { createStore, combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

export const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
});
