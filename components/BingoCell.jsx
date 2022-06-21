import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

const BingoCell = ({ alphabet }) => {
	const [stamp, setStamp] = useState(false);
	return (
		<div
			key={alphabet}
			className={`h-44 w-44  border-2 border-black items-center flex justify-center relative `}
			onClick={() => setStamp(!stamp)}
		>
			<p>{alphabet}</p>
			<Image
				src='/LikeABoss.png'
				layout='fill'
				className={`${stamp ? 'opacity-20' : 'opacity-0'}`}
			/>
		</div>
	);
};

export default BingoCell;
