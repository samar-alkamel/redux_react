import { ADD_TASK, CHANGE_IS_DONE, EDIT_TASK } from "../Constants/action-type";


const initialState ={
    todos:[
    {
        id:Math.random(),
        description:"playing sports",
        isDone:false,
    },
    {
        id:Math.random(),
    description:
    "send a meassage to mr Haroun",
        isDone:false,
    },
    {
    id:Math.random(),
    description:"Go to work",
       isDone:false,
},
{
    id:Math.random(),
    description:"read a book",
    isDone:false,
},
],
};

function rootReducer(state=initialState,action) {
    const{type,payload}=action;
    switch(type){
        case ADD_TASK:
        // default:
            return  {
                todos : state.todos.concat({
                    id:Math.random(),
                    description:payload.toAddTask,
                    isDone:false,
                }),
            };
            case CHANGE_IS_DONE:
                return {
                    // todos:(state. todos.find((item)=>item.id == payload.id). isDone=true),
                    todos:state.todos.map((item)=>
                    item.id === payload.id ? {...item, isDone : !item.isDone}: item
                    )
                };
                case EDIT_TASK:
                    return{
                        todos:state.todos.map((item) =>
                        item.id === payload.id ? {... item ,description: payload.description} : item
                        ),
                    };
            default:
                return state;
    }
}
export default rootReducer;