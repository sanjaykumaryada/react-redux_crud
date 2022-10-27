import {CREATE_USER} from "../../constant";
import {DELETE_USER} from "../../constant";
export const createUser=(payload)=>{
    return{
        type:CREATE_USER,
         payload:payload
    }
}

export const deleteUser=(id)=>{
    return{
        type:DELETE_USER,
        id:id,
    }
}