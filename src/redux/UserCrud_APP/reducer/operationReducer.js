import { CREATE_USER } from "../../constant";
import { DELETE_USER } from "../../constant";
import { UPDATE_USER } from "../../constant";
import { EDIT_USER } from "../../constant";
export const operationReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_USER:
            return [...state, action.payload];
        case DELETE_USER:
            const filteredUserList = state.filter((user) => user.id !== action.id);
            return filteredUserList;

        case EDIT_USER:
            const editUser = state.filter(user => user.id === action.id);
            
        return state;
        case UPDATE_USER:
            const {id, user}=action.payload;
       const newlist= state.filter(user => user.id=== id ? (user.user=user ): (null));
         console.log(newlist)
            return  newlist ;
        default: return state;
    }

}