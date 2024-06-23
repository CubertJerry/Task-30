import React from 'react';
import { useUser } from './UserContext';
import UserItem from './UserItem';

const UserList = () => {
    const { state } = useUser();

    return (
        <div>
            <h1>User List</h1>
            {state.users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;