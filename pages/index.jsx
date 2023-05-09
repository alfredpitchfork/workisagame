import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Wave from '../components/Wave.jsx'

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
				console.log('  Sign-in provider: ' + profile.providerId);
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
	
			<div className=' bg-[#0f0f0ff6] h-screen w-screen'>
			<Wave className="h-screen w-screen z-0 fixed opacity-60 aspect-ratio:auto"/>
				<div className="flex-auto flex justify-center items-center h-screen">
					<div className="flex flex-col justify-center items-center h-[40vh] w-[15vw] opacity-70 bg-white">
						
			<form onSubmit={loginSubmit} className="flex flex-col items-center h-[100%] w-[100%] justify-center gap-4">
				<input
					type='text'
					placeholder='Email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 bg-white font-nunito border-sky-900 border-solid border-2 w-[80%] h-[20%]"
				/>
				<input
					type='text'
					placeholder='Password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="p-2 bg-white font-nunito border-sky-900 border-solid border-2 w-[80%] h-[20%] "
				/>
				<button type='submit' className="bg-neutral-600 h-[20%] w-[80%] text-white font-nunito text-lg">Login</button>
			</form>
			</div>
			</div>
			</div>
		</div>
	);
};

export default Home;
