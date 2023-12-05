import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const { user, setUser } = useContext(UserContext);
  
  const navigate = useNavigate();

const logout = () => {
    setUser(null);
    navigate('/login');
};

  if (!user) return <div>Please log in</div>;

  return (
    <div>
      Welcome, {user.username}!
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomeComponent;
