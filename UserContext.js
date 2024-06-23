import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { users: [] });

    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({ type: 'SET_USERS', payload: response.data });
    };

    const addUser = async (user) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
        dispatch({ type: 'ADD_USER', payload: response.data });
    };

    const updateUser = async (user) => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
        dispatch({ type: 'UPDATE_USER', payload: response.data });
    };

    const deleteUser = async (id) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_USER', payload: id });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ state, addUser, updateUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);