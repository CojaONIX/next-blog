
'use client'

import {useState} from "react";

export default function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        if(!username || !password){
            alert('Username and password are required');
            return;
        }

        const response = await fetch('/api/auth_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if(response.status !== 200){
            alert('Authentication failed');
            return ;
        }

        const data = await response.json();

        localStorage.setItem('token', data.token);
    }

    return <>
        <p>emilys - emilyspass</p>
        <p>sophiab - sophiabpass</p>

        <form>
            <input type="text" placeholder="User Name" onChange={e => setUsername(e.currentTarget.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.currentTarget.value)}/>
            <button type="button" onClick={loginUser}>Login</button>
        </form>
    </>
}