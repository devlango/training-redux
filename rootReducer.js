var redux = require('redux');

function counter(state, action) {
    return state + 1;
}

function counter(state, action) {
    return state + 1;
}

var rootReducer = redux.combineReducers({
    counter,
});

module.exports = rootReducer;