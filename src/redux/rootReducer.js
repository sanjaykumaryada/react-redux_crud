import {combineReducers} from "redux";
import { operationReducer } from "./UserCrud_APP/reducer/operationReducer";


export const rootReducer=combineReducers({
    operationReducer,
})