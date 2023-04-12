import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const iceCreamContainer = ({ buyIceCream, numOfIceCreams }) => {
	return (
		<>
			<h2>Number Of Icecreams - {numOfIceCreams}</h2>
			{console.log(numOfIceCreams, 'hello')}
			<button onClick={buyIceCream}>buyIceCream</button>
		</>
	);
};

/**
 * connect(mapStateToPropFn,mapDispatchToPropFn) -> HOC with the props (CakeContainer) ->  cackeContainer with the props and dispatch method
 * mapStateToProps: maps the state to props (eg. numOfIceCreams)
 * mapDispatchToProps: maps the dispatch method to props (eg. buyIceCream)
 */

// step1 map state to props declaration
const mapStateToProps = state => {
	return {
		numOfIceCreams: state.iceCream.numOfIceCreams
	};
};
// step2 map dispatch to props declaration
const mapDispatchToProps = dispatch => {
	return {
		buyIceCream: () => dispatch(buyIceCream())
	};
};

// step3 connect the component to the store
export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
