import {applyMiddleware, compose, legacy_createStore} from 'redux'
import { reducer } from './todo.reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const customMiddleware = ({dispatch}) => (next) => (action) => {
    
    if(typeof action === 'function')
    {
        return action(dispatch)
    }
    else if(typeof action == 'object')
    {
        return next(action);
    }
    
}

export const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(customMiddleware)))