import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
  
export default function Login() {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();  
  
  async function handleLogin(e) {  
    e.preventDefault();  
    try {  
      const response = await fetch('/api/login', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ username, password }),  
      });  
      const data = await response.json();  
      if (response.ok) {  
        // 存储token和用户信息，然后重定向到受保护的页面  
        localStorage.setItem('token', data.token);  
        navigate('/');  
      } else {  
        alert(data.error);  
      }  
    } catch (error) {  
      console.error('Login failed:', error);  
    }  
  }  
  
  return (  
    <form onSubmit={handleLogin}>  
      <input  
        type="text"  
        placeholder="Username"  
        value={username}  
        onChange={(e) => setUsername(e.target.value)}  
      />  
      <input  
        type="password"  
        placeholder="Password"  
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
      />  
      <button type="submit">Login</button>  
    </form>  
  );  
}
