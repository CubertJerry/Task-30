import React, { useState } from 'react';
import { useUser } from './UserContext';

const UserItem = ({ user }) => {
    const { updateUser, deleteUser } = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    const handleChange = e => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        updateUser(editedUser);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input name="name" value={editedUser.name} onChange={handleChange} />
                    <input name="username" value={editedUser.username} onChange={handleChange} />
                    <input name="email" value={editedUser.email} onChange={handleChange} />
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <div>
                    <span>{user.name} ({user.username}) - {user.email}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default UserItem;