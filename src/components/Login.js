// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTokenContext } from '../context/TokenContext'; 
import { loginUser } from '../API/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const { login } = useTokenContext();

  const handleLogin = async () => {
   
    try {
      const credentials = { username, password };
      const token = await loginUser(credentials);
      login(token);
      history('/products');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-6 rounded shadow-md sm:w-96 w-full">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-2 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
