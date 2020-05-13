import React from 'react';
import './Form.css';

const Members = props => {
    return (
        <div className="member-list">
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <a href="#">{member.email}</a>
                </div>
            ))}
        </div>
    )
}

export default Members