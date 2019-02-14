import { createStore } from "redux"; 
import {rootReducer} from "../reducers/rootReducer"; 

const store = createStore(
  rootReducer,
  //Redux plugin chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
