import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, age, email }) => {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    email: PropTypes.string.isRequired
};

export default UserProfile;
