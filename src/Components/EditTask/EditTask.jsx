import React ,{useState} from "react"
import {Modal,Button,Form} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import {editTask} from "../../Redux/Actions";

function EditTask({ id}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskItem =useSelector(state => state.todos.find(item => item.id === props.id) )
     const [newDescription ,setNewDescription ]= useState(taskItem.description)

     const dispatch =useDispatch()

    const handleSubmit =() =>{
    dispatchEvent(editTask({id:taskItem.id,description: newDescription }))
   handleChange()         
}
   const handleChange =(e) =>{
       setNewDescription(e.target.value)
   }
    return (
      <>
        <Button variant="outline-dark" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Control type ="text"  defaValue={taskItem.description} onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close 
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditTask 