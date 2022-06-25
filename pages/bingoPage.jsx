import BingoFrame from '../components/BingoFrame';
import Head from 'next/head';
import { useCollection } from 'react-firebase-hooks/firestore';
import shuffleArray from '../utils/RandomSelector';
import { db } from '../firebaseConfig';
import { collection } from 'firebase/firestore';
import { useState } from 'react';
const bingoPage = () => {
	const [snapshot, loading, error] = useCollection(
		collection(db, 'masterList')
	);
	const masterList = snapshot?.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	const [bingoCard, setBingoCard] = useState([]);
	const GenerateNewBingo = async () => {
		let newGeneratedArray = [];
		let commonArray = [];
		let uncommonArray = [];
		let rareArray = [];
		await masterList?.map((listEntry) => {
			if (listEntry.rarity === 'Common') {
				commonArray.push(listEntry);
			} else if (listEntry.rarity === 'Uncommon') {
				uncommonArray.push(listEntry);
			} else if (listEntry.rarity === 'Rare') {
				rareArray.push(listEntry);
			}
		});
		while (newGeneratedArray.length < 13) {
			let randomNumber = Math.floor(Math.random() * commonArray.length);
			if (newGeneratedArray.includes(commonArray[randomNumber])) {
				console.log('commonArray includes');
			} else {
				newGeneratedArray.push(commonArray[randomNumber]);
			}
		}
		while (newGeneratedArray.length < 23) {
			let randomNumber = Math.floor(Math.random() * uncommonArray.length);
			if (newGeneratedArray.includes(uncommonArray[randomNumber])) {
				console.log('commonArray includes');
			} else {
				newGeneratedArray.push(uncommonArray[randomNumber]);
			}
		}
		while (newGeneratedArray.length < 25) {
			let randomNumber = Math.floor(Math.random() * rareArray.length);
			if (newGeneratedArray.includes(rareArray[randomNumber])) {
				console.log('Whoopsie! includes');
			} else {
				newGeneratedArray.push(rareArray[randomNumber]);
			}
		}

		await shuffleArray(newGeneratedArray);
		setBingoCard(newGeneratedArray);
	};

	return (
		<div>
			<Head>
				<title>Bingo!</title>
				<link rel='icon' href='/faviduck.png' />
			</Head>
			<div className='main_body h-screen w-screen flex justify-center flex-col items-center sm:mt-16'>
				<div className=''>
					<button
						onClick={GenerateNewBingo}
						className='text-center text-white h-14 bg-sky-500/100 flex items-center justify-center w-44 rounded-lg shadow-lg '
					>
						Generate New Bingo
					</button>
				</div>
				<div className='mt-10 w-screen h-4/5 sm:w-5/6 '>
					{bingoCard.length > 0 && <BingoFrame card={bingoCard} />}
				</div>
			</div>
		</div>
	);
};

export default bingoPage;
