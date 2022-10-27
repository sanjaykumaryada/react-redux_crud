import { CREATE_USER } from "../../constant";
import { DELETE_USER } from "../../constant";
import { UPDATE_USER } from "../../constant";
import { EDIT_USER } from "../../constant";
export const createUser = (payload) => {
    return {
        type: CREATE_USER,
        payload: payload
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id: id,
    }
}
export const editUser = (id) => {
    return {
        type: EDIT_USER,
        id: id,
    }
}
export const updateUser = (payload) => {
    return {
        type: UPDATE_USER,
        payload: payload,
    }
}
