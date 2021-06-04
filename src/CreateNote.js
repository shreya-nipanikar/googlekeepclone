import React, { useState } from 'react';
import './CreateNote.css';


const CreateNote = (props) => {

 
    const [item, setItem] = useState({
        title: "",
        content: ""
    })

    const InputEvent = (event) => {
        const {name,value} = event.target;
       
        setItem((previousValue) => {
            return {
                ...previousValue,
                [name]: value,
            }
        })
    }


   const addText = (e) => {
        e.preventDefault();
        
        if(item.title && item.content) {
        props.passNote(item);
        setItem({
            title: "",
            content: ""
        })
    } else {
        alert("You cannot submit an empty note.");
    }
   }

    return (
       <>
       <div className="container-fluid">
       <div className="row">
           <div className="col-md-4 col-7 mx-auto my-4 border justify-content-center shadow p-3 ">
               <form className="d-flex flex-column" onSubmit={addText}>
                   
                   <input type="text" 
                   name="title"
                   value={item.title}
                   placeholder="Title" 
                   onChange={InputEvent}
                   autoComplete="off" 
                   className="py-2 myinput"></input>
                   
                   <textarea row="" column="" 
                   name="content"
                   value={item.content}
                   onChange={InputEvent}
                   placeholder="Write a note..." 
                   className="py-4 mytextarea"></textarea>
                   <button className="col-md-2 p-2  mt-2 mybutton" type="submit">+</button>
               </form>
           </div>
           </div>
       </div>
       </> 
    )
}


export default CreateNote;