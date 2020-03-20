import React from 'react';

const TeamMembers = props => {
    console.log(props)
    return (
      <div className="note-list">
        {props.people.map(ppl => (
          <div className="ppl" key={ppl.id}>
            <h2>{ppl.name}</h2>
            <p>{ppl.email}</p>
            <p>{ppl.role}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TeamMembers;
  