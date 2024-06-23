import React from 'react';
import { UserProvider } from './UserContext';
import UserList from './UserList';
import AddUser from './AddUser';

const App = () => {
    return (
        <UserProvider>
            <div>
                <h1>User Management</h1>
                <AddUser />
                <UserList />
            </div>
        </UserProvider>
    );
};

export default App;