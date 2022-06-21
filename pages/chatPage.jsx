import BingoFrame from '../components/BingoFrame';
import Head from 'next/head';
const chatPage = () => {
	return (
		<div>
			<Head>
				<title>Bingo!</title>
				<link rel='icon' href='/faviduck.png' />
			</Head>
			<div className='main_body h-screen w-screen flex justify-center m-10'>
				<div className='Headers h-[6vh] bg-sky-500/100 flex items-center justify-items-center flex- w-1/12'>
					<p className='text-zinc-50'>Buenos Nochas</p>
				</div>
				<div className=' w-[55rem] h-[55rem]'>
					<BingoFrame />
				</div>
			</div>
		</div>
	);
};

export default chatPage;
