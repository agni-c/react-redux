import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
	// no mapStateToProps needed
	// useSelector gives you access to the state without  pain :)
	const numOfCakes = useSelector(state => state.cake.numOfCakes);
	//  no mapDispatchToProps needed
	// useDispatch gives you access to the dispatch method without pain :)
	const dispatch = useDispatch();

	return (
		<>
			<h2>Number Of Cakes - {numOfCakes}</h2>
			<button onClick={() => dispatch(buyCake())}>BuyCake</button>
		</>
	);
};

export default HooksCakeContainer;
