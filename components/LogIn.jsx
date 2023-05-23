'use client'
import React from 'react';
import signIn from '../firebase/auth/signin.js';
import {useState} from 'react';
import { useRouter } from 'next/router.js';

const LogIn = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const router = useRouter();

const handleForm = async (e) => {
e.preventDefault();
const {result, error} = await signIn(email, password);
if (error) {
	return console.log(error);
}
console.log(result);
return router.push('/bingoPage');
}
	return (<div>
		<form onSubmit={handleForm}>
		<input type='text' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
		<input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
		<button onClick={signIn}>Log In</button>
		</form>
	</div>)
}

export default LogIn;
