import React,{useState} from 'react';
import {Form,Button} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import "./AddTask.css"
import {addTask} from "../../Redux/Actions";

function AddTask() {

    const [toAddTask,setToAddTask] =useState("")

    const handleChange=(e) =>{
    setToAddTask(e.target.value)
    }

    const dispatch = useDispatch()

    const handleSubmit = () =>{
        if(toAddTask){
        dispatch(addTask({ toAddTask: toAddTask}))
        setToAddTask("")
    }
    else
      alert("empty Task")
}
    return (
        <div className="AddTask">
            <h1>Todo App:</h1>
            <div className="addFied">
                <Form.Control id='addTaskInput' size="lg" type="text"placeholder="Add task.."onChange={handleChange} value= {toAddTask}/>
                <Button variant="outline-primary"style={{border:"2px white solid",color:"white"}} onClick={handleSubmit} > Add</Button>
                 </div>
        </div>
    )
}

export default AddTask;