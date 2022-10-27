import { CREATE_USER } from "../../constant";
const initialState = [
    {
        id: 1,
        user: {
            name: "sanjay",
            email: "heowi",
            address: "dnwjlk",
        }
    }
]
export const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER: return [...state, action.payload];
        default: return state;
    }

}