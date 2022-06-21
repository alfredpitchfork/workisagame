import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const Home = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const loginSubmit = async (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const user = auth.currentUser;
	onAuthStateChanged(auth, (user) => {
		if (user) {
			user.providerData.forEach((profile) => {
				console.log('Sign-in provider: ' + profile.providerId);
				console.log('  Provider-specific UID: ' + profile.uid);
				console.log('  Name: ' + profile.displayName);
				console.log('  Email: ' + profile.email);
				console.log('  Photo URL: ' + profile.photoURL);
			});
			const uid = user.uid;
			console.log('users uid i think' + uid);
		} else {
			// User is signed out
			// ...
		}
	});
	if (user !== null) {
	}
	return (
		<div>
			<Head>
				<title>No Ducks To Give</title>
				<link rel='icon' href='/faviduck.png' />
			</Head>

			<div className=' bg-gradient-to-r from-zinc-300 to-green-900 h-screen w-screen'>
				<div>No Ducks To Give</div>
				<Image src='/faviduck.png' width={100} height={100} />
			</div>

			<form onSubmit={loginSubmit}>
				<input
					type='text'
					placeholder='Email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Home;
