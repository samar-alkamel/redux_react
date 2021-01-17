import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import "./Task.css"
import {ChangeIsDone} from "../../Redux/Actions"

import EditTask from  "../EditTask/EditTask";


function Task({item,index}) {
    const dispatch =useDispatch()
    return (
        <div className="task">
            <h4 style={{textDecoration : !item.isDone? "none":"line-through"}}><span className="Task_Number"> Task{index+1}-</span> {item.description}</h4>
            <div className ="taskBtns">
                <Button variant={! item.isDone ?"Success":"outline-danger"} className="done-btn" onClick={()=>dispatch(ChangeIsDone({id: item.id}))}>{! item.isDone ? "Done" : "Undo"}</Button>
                <EditTask  id={item.id} />
                </div>
        </div>
    );
}

export default Task;