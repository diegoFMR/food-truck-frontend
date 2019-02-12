import { ACTION_TYPE } from '../../util/constants';

export function addTruck(payload){
  return { type: ACTION_TYPE.ADD_TRUCK, payload}
}
