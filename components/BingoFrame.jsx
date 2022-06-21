import React from 'react';
import example from '../offlineResources/example.json';
import bingo from '../offlineResources/winCondition.js';
import BingoCell from './BingoCell';

const BingoFrame = () => {
	let randomArray = ['a', 'b', 'c', 'd', 'e'];

	let bingoResult = bingo.map((line) =>
		line.list.every((i) => randomArray.includes(i))
	);
	let bingoOrNot = bingoResult.some((i) => i === true);
	let bingoLine = bingoResult.indexOf(true);
	console.log(bingoOrNot ? `Bingo at ${bingo[bingoLine].name}` : 'No Bingo');

	return (
		<div>
			<div className='grid grid-rows-5 grid-cols-5 gap-0'>
				{example.list.map((alphabet) => (
					<BingoCell key={alphabet} alphabet={alphabet} />
				))}
			</div>
		</div>
	);
};

export default BingoFrame;
