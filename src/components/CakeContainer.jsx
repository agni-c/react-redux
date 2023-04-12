import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = ({ buyCake, numOfCakes }) => {
	return (
		<>
			<h2>Number Of Cakes - {numOfCakes}</h2>
			<button onClick={buyCake}>BuyCake</button>
		</>
	);
};

/**
 * connect(mapStateToPropFn,mapDispatchToPropFn) -> HOC with the props (CakeContainer) ->  cackeContainer with the props and dispatch method
 * mapStateToProps: maps the state to props (eg. numOfCakes)
 * mapDispatchToProps: maps the dispatch method to props (eg. buyCake)
 */

// step1 map state to props declaration
const mapStateToProps = state => {
	return {
		numOfCakes: state.cake.numOfCakes
	};
};
// step2 map dispatch to props declaration
const mapDispatchToProps = dispatch => {
	return {
		buyCake: () => dispatch(buyCake())
	};
};

// step3 connect the component to the store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
