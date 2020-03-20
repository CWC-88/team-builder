import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/Team';
import Form from './components/Form';

function App() {
const [formState,setFormState]=useState([
{
  id: 1,
  name:'charlie',
  email:'c@mail.com',
  role:'wanderer'
}
]);
const addNoteHandler = data => {
  console.log("adding note", data);

  setFormState([...formState,data]);
}


  return (
    <div className="App">
   <TeamMembers people={formState}/>
   <Form addcard={addNoteHandler}/>
    </div>
  );
}

export default App;



