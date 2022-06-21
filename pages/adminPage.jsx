import { auth } from '/firebaseConfig.js';
import Head from 'next/head';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
const adminPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const signUpSubmit = async (e) => {
		e.preventDefault();
		await createUserWithEmailAndPassword(auth, email, password).catch(
			(error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			}
		);
		await updateProfile(auth.currentUser, {
			displayName: username,
		});
		setEmail('');
		setPassword('');
		setUsername('');
	};
	return (
		<div>
			<Head>
				<title>Bingo!</title>
				<link rel='icon' href='/faviduck.png' />
			</Head>
			<div className='main_body h-screen w-screen flex justify-center m-10'>
				<form id='signUpForm' onSubmit={signUpSubmit}>
					<input
						type='text'
						placeholder='Enter Username'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
					<input
						type='text'
						placeholder='Enter Email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<input
						type='password'
						placeholder='Enter Password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default adminPage;
