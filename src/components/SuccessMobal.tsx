import React from "react";

const SuccessMobal: React.FC = () => {
	const handle = (url: string) => {
		// window.location.reload();
		window.open(url, "_blank", "noreferrer");
	};
	return (
		<div className=' fixed top-0 left-0 bottom-0 z-10 flex justify-center items-center  w-full bg-green-900 bg-opacity-50'>
			<div className=' bg-white overflow-hidden rounded-2xl max-w-sm min-h-[60px] bg-prime w-11/12'>
				<div className='p-6 flex-col gap-4 flex items-center'>
					<svg
						width='48'
						height='48'
						viewBox='0 0 1224 1024'
						fill='none'
						transform='rotate(180) scale(-1,1)'
						xmlns='http://www.w3.org/2000/svg'
						className='text-green-500'>
						<path
							d='M981.333 448c0 259.206-210.129 469.333-469.333 469.333-259.206 0-469.333-210.128-469.333-469.333 0-259.204 210.128-469.333 469.333-469.333s469.333 210.129 469.333 469.333zM1024 448c0-282.769-229.231-512-512-512s-512 229.231-512 512c0 282.77 229.23 512 512 512s512-229.23 512-512zM307.197 447.996l-39.822-39.821 159.289-159.287 341.332 341.332-39.821 39.822-301.511-301.513-119.467 119.467z'
							fill='currentColor'></path>
					</svg>
					<p className='text-xl text-center font-medium'>Thank You</p>
					<p className='text-base text-center'>
						Click this link to contact us now and an agent will get to you
						within the hour
					</p>
				</div>
				<div
					onClick={() => handle("https://t.me/aqar_dxb")}
					className=' cursor-pointer p-4 text-center -primary font-medium border-faint-alt border-t hover:bg-cyan-200 hover:bg-opacity-50'>
					<p className='text-blue-400'>HERE</p>
				</div>
			</div>
		</div>
	);
};

export default SuccessMobal;
