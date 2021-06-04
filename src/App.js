import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [newnote, setNewnote] = useState([]);
  
  const addNote = (item) => {
    //alert("I'm clicked!")
    
    setNewnote((predata) => {
        return [...predata,item];
    })
   console.log(item);
  }

  const deleteItem = (id) => {
    
    setNewnote((olddata) => {
      return olddata.filter((currarray, index) => {
        return index !== id ;
      }) 
    }) 
  
  }



  return (
    <div>
    
    <Header />
    
    <CreateNote passNote={addNote} />
  
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 col-12 mx-auto my-4">
        <div className="row">
        <div className="col-md-11 mx-auto">
        <div className="row row-cols-2 row-cols-md-4">
    {

      newnote.map((result,index) => {
        return <Note key={index} id={index} title={result.title} content={result.content} deleteEventt={deleteItem} />
     })
    }
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
