import React, {useState} from "react";

const Form = props => {






const [card, setcard] =useState({

 
    name:'',
    email:'',
    role:''

});
console.log(card)
const changeHandler = event => {
    setcard({
      ...card,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event =>{
      event.preventDefault();
        props.addcard({
            ...card,
            id: Date.now()
        })

  }

return(
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        name="name"
        value={card.name}
        onChange={changeHandler}
        placeholder="This is the title of the note."
        autoComplete='none'
      />
    <input
        type="email"
        name="email"
        onChange={changeHandler}
        value={card.email}
        autoComplete='none'
        />
        
    <input
        type="text"
        name="role"
        onChange={changeHandler}
        value={card.role}
        autoComplete='none'
        
        />
        <button type="submit">Create persons!</button>

        </form>

)
}

export default Form;


