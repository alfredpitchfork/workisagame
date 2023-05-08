import { auth } from '/firebaseConfig.js';
import Head from 'next/head';
import { useState } from 'react';
import { createUserWithEmailAndPassword	} from 'firebase/auth';
import {  doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
const signUp = () => {
	const [username, setUsername] = useState('');
	const signUpSubmit = async (e) => {
		e.preventDefault();
		let email = `${username}@noduckstogive.com`;
		let betterPassword = `EvanIsMyBestFriend`;
		
		createUserWithEmailAndPassword(auth, email, betterPassword)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				const uid = user.uid;
				setDoc(doc(db, 'users', uid), {
					username: username,
					password: betterPassword,
					role: 'CRA',
					team: 'AK',
					privilege: 'Basic',
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});

		
		setUsername('');
	};

	return (
		<div>
			<Head>
				<title>Bingo!</title>
				<link rel='icon' href='/faviduck.png' />
			</Head>
			<div className='main_body h-screen w-screen flex justify-center m-10'>
				{auth.currentUser ? (
					<div>{auth.currentUser.email + ' ' + auth.currentUser.uid}</div>
				) : (
					<div>You are not logged in</div>
				)}
				<form id='signUpForm' onSubmit={signUpSubmit}>
					<input
						type='text'
						placeholder='Enter Username'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default signUp;
