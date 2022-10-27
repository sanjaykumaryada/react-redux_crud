import { CREATE_USER } from "../../constant";
import { DELETE_USER } from "../../constant";
import { UPDATE_USER } from "../../constant";
import { EDIT_USER } from "../../constant";
const initialState = {
    edituser: undefined,
    usersList: [],
}
export const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                usersList: [...state.usersList, action.payload]
            }

        case DELETE_USER:
            const filteredUserList = state.usersList.filter((user) => user.id !== action.id);
            return {
                ...state,
                usersList: filteredUserList
            }

        case EDIT_USER:
            const EditUser = state.usersList.filter(user => user.id === action.id);
            return {
                ...state,
                edituser: EditUser
            };
        case UPDATE_USER:
            let data = action.payload;
            const updatedArray = [];
            state.usersList.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.user = data.user;

                }
                updatedArray.push(item);
            })
            return {
                ...state,
                edituser: undefined,
                usersList: updatedArray
            };
        default: return state;
    }

}