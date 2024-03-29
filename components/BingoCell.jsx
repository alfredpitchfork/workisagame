'use client'

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

const BingoCell = ({ alphabet }) => {
	const [stamp, setStamp] = useState(false);
	return (
		<div
			key={alphabet}
			className={`sm:h-56  border-2 border-black items-center flex justify-center relative h-[100px] `}
			onClick={() => setStamp(!stamp)}
		>
			<p className='text-xs text-center sm:text-base'>{alphabet}</p>
			<Image
				src='/LikeABoss.png'
				layout='fill'
				className={`${stamp ? 'opacity-20' : 'opacity-0'}`}
				alt='Like A Boss Stamp'
			/>
		</div>
	);
};

export default BingoCell;
