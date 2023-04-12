// step 1: install redux
const redux = require('redux');
const reduxLogger = require('redux-logger');
const thunk = require('redux-thunk');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// step 2: create initial states
const initialIceCreamState = {
	numOfIceCreams: 20
};
const initialCakeState = {
	numOfCakes: 10
};

// step 3: create action type
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// step 4 : ACTION CREATORs (shares the type and payload data to the reducer)
function buyCake() {
	return {
		type: BUY_CAKE,
		info: 'First redux action'
	};
}
function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: 'Second redux action'
	};
}

// step 5: create a REDUCER
// remember: reducer(previousState, action) => newState

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1
			};

		default:
			return state;
	}
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1
			};
		default:
			return state;
	}
};

// step 6: combine reducers
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
});
//  step 7: create a store
//  give reducer to store to update the state
const store = createStore(rootReducer, applyMiddleware(logger, thunk.default));

// Driver Code
//using get state
console.log('Initial state', store.getState());
// using subscribe (returns a function to unsubscribe)
// the callback function will be called whenever the state is updated (like a logger)
const unsubscribe = store.subscribe(() => console.log('state Updated', store.getState()));
// dispatching action
store.dispatch(buyCake());
store.dispatch(buyIceCream());
// calling unsubscribe
unsubscribe();

// Output print the out put
