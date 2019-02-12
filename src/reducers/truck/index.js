import { ACTION_TYPE } from '../../util/constants';

const initialState = {
  trucks: [{id: 1, title:'One'},{id: 2, title:'Monsters INC'}],

};

export function truckReducer(state = initialState, action){

  switch(action.type){
    case ACTION_TYPE.ADD_ARTICLE:{
      return { ...state, 
          truck: action.payload
        }
    }
    default: {
      return state;
    }

  }
}