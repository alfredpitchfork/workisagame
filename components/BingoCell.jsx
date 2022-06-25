import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

const BingoCell = ({ alphabet }) => {
	const [stamp, setStamp] = useState(false);
	return (
		<div
			key={alphabet}
			className={`sm:h-44 sm:w-44  border-2 border-black items-center flex justify-center relative h-[100px] w-[75px]`}
			onClick={() => setStamp(!stamp)}
		>
			<p className='text-xs text-center'>{alphabet}</p>
			<Image
				src='/LikeABoss.png'
				layout='fill'
				className={`${stamp ? 'opacity-20' : 'opacity-0'}`}
			/>
		</div>
	);
};

export default BingoCell;
