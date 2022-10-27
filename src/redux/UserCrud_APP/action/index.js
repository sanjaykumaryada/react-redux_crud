import {CREATE_USER} from "../../constant";
export const createUser=(payload)=>{
    return{
        type:CREATE_USER,
         payload:payload
    }
}