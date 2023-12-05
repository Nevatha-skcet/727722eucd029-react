import React, { useState, useEffect } from 'react';
import { fetchUsers } from './Exercise19Axios';

const UsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUsers = async () => {
            try {
                setLoading(true);
                const data = await fetchUsers();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UsersComponent;
