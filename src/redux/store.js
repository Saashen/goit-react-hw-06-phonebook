import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import phonebookReducer from './phonebookReducers';

const store = createStore(phonebookReducer, devToolsEnhancer());

export default store;
