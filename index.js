var redux = require('redux');
var rootReducer = require('./rootReducer');
var logger = require('./customLogger');
var logger2 = require('./customLogger2');

var initialState = {
    counter: 0
};

var store = redux.createStore(rootReducer, initialState, redux.applyMiddleware(logger, logger2));

getState();

store.dispatch({type:'test'});

getState();

function getState() {
    console.log(store.getState());
}