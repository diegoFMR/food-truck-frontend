import { truckReducer } from './truck';
import { companyReducer } from './company';

//Libraries
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  truckReducer, companyReducer,
  //Libraries
  form: formReducer
});