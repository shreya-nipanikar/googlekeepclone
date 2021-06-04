import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './CreateNote.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const Note = (props) => {
  
    const deleteEvent = () => {
        props.deleteEventt(props.id);
    }
    
    return (
           <div className="col p-3">
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <hr className="bg-dark border-2 border-top border-black"></hr>
        <p className="card-text">{props.content}</p>
        <button className="mybutton p-2" onClick={deleteEvent}>
               <MdDeleteForever className="iconss" />
               </button>
      </div>
           </div> 
        </div>
    )
}

export default Note;