import {ADD_TASK} from "../Constants/action-type";
import { CHANGE_IS_DONE } from "../Constants/action-type";
import {EDIT_TASK} from "../Constants/action-type";

export const addTask =(payload)=>{
    return{
        type:ADD_TASK,
        payload:payload,
    };
};
export const ChangeIsDone =(payload)=>{
    return{
        type: CHANGE_IS_DONE,
        payload:payload,
    };
};
export const editTask =(payload)=>{
    return{
        type:EDIT_TASK,
        payload:payload,
    };
};

