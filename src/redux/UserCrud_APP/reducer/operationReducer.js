import { CREATE_USER } from "../../constant";
import { DELETE_USER } from "../../constant";
export const operationReducer = (state =[], action) => {
    switch (action.type) {
        case CREATE_USER:
             return [...state, action.payload];
        case DELETE_USER: 
                  const filteredUserList=state.filter((user)=>user.id!==action.id);
                  return filteredUserList;
        default: return state;
    }

}