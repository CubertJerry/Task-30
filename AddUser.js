import React, { useState } from 'react';
import { useUser } from './UserContext';

const AddUser = () => {
    const { addUser } = useUser();
    const [user, setUser] = useState({ name: '', username: '', email: '' });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addUser(user);
        setUser({ name: '', username: '', email: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
            <input name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
            <input name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;