import React, { useState, useRef } from 'react';

const formDefault = { name: "" , role: "", email: ""};

export default function Form(props) {
    const { setTeamMembers } = props;
    const [formValues, setFormValues] = useState(formDefault);
    const nameInput = useRef();
    const emailInput = useRef();
    const roleInput = useRef();

    const addMember = (newMember) => {
        setTeamMembers(prevMembers => 
            [...prevMembers, newMember]
        )
    }
    const submit = evt => {
        evt.preventDefault();
        const newMember = {
            name: formValues.name.trim(),
            role: formValues.role.trim(),
            email: formValues.email.trim(),
        }
        addMember(newMember);
        setFormValues(formDefault);
        nameInput.current.value = "";
        emailInput.current.value = "";
        roleInput.current.value = "";
    }
    const change = evt => {
        const { value, name } = evt.target;
        setFormValues(prevValues => {
            return {...prevValues, [name]: value }
        })
    }
    return (
        <form onSubmit={submit}>
            <label for="name">
                Name: 
                <input ref={nameInput}
                    type="text"
                    name="name"
                    id="name" 
                    onChange={change}
                />
            </label>
            <label for="email">
                Email: 
                <input ref={emailInput}
                    type="email"
                    name="email"
                    id="email" 
                    onChange={change}
                />
            </label>
            <label for="role">
                Roles:
                <select 
                    ref={roleInput}
                    name="role"
                    id="role" 
                    onChange={change}
                >
                    <option value="Front-end">Front-End</option>
                    <option value="Backend-end">Back-End</option>
                    <option value="Healer">Healer</option>
                    <option value="Gamer">Gamer</option>
                    <option value="Chef">Chef</option>
                    <option value="Dancer">Dancer</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}