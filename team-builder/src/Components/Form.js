import React, { useState } from 'react';
import './Form.css';

const Form = props => {
    const [members, setMember] = useState({
        name: "",
        role: "",
        email: ""
    })

    const changeHandler = (event) => {
        setMember({
            ...members,
            [event.target.name]: event.target.value
        })
    }
    return (
      <div className="submit-form">
        <form onSubmit={(event) => {
            event.preventDefault();
            props.addMember(members)

            setMember({name: "", role: "", email: ""})
        }}> 
            <label htmlFor="name">Name</label>
            <input className="box" id="name" type="text" name="name" placeholder="Name here:" value={members.name} onChange={changeHandler} />
                <br></br>
            <label htmlFor="role">Position</label>
            <input className="box" type="text" name="role" placeholder="Job position here:" value={members.role} onChange={changeHandler} />
                <br></br>
            <label htmlFor="email">Email</label>
            <input className="box" id="email" type="text" name="email" placeholder="Email here:" value={members.email} onChange={changeHandler}/>
                <br></br>
            <button type="submit">Submit Here!</button>
        </form>
      </div>
    );
};

export default Form