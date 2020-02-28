import { combineReducers } from 'redux';
import { contactReducer, filterReducer } from './phonebook/phonebookReducers';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
