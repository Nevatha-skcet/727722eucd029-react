import React, { useState } from 'react';
import { register } from './Exercise20Auth';

const RegisterComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const newUser = await register({ username, password });
            console.log('Registered as:', newUser.username);
            // Optionally, redirect to login or handle registration success
        } catch (error) {
            setError('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default RegisterComponent;
