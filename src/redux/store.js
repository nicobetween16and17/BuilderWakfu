import allReducers from './reducers'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
export const Store = createStore(
    allReducers,
    applyMiddleware(thunkMiddleware)
)