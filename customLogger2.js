function logger(store) {
    return function(next) {
        return function(action) {
            console.log('2222', action);
            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action);
            console.log('222222', store.getState());
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue;
        }
    }
  }

  module.exports = logger;