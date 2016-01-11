//var keyMirror = require('react/lib/keyMirror'); // old, deprecated
/*
var keyMirror = require('fbjs/lib/keyMirror');
var FluxCountConstants = keyMirror({
	COUNTER_ADD: null,
	CART_ADD: null,       // Adds item to cart
	CART_REMOVE: null,    // Remove item from cart
	CART_VISIBLE: null,   // Shows or hides the cart
	SET_SELECTED: null,   // Selects a product option
	RECEIVE_DATA: null    // Loads our mock data
});
*/

// Seems, we do not need 'keyMirror' library
var FluxCountConstants = {
	COUNTER_ADD: null,
	CART_ADD: null,       // Adds item to cart
	CART_REMOVE: null,    // Remove item from cart
	CART_VISIBLE: null,   // Shows or hides the cart
	SET_SELECTED: null,   // Selects a product option
	RECEIVE_DATA: null    // Loads our mock data
};
module.exports = FluxCountConstants;