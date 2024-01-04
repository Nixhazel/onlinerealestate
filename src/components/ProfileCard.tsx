import React from 'react'
import profileimg from '../assets/logo-removebg.png'

const ProfileCard: React.FC = () => {
	return (
		<header className='flex flex-col items-center border-2 border-[#F9DEB3] rounded-3xl  p-5 mb-3'>
			<div className=' h-36 w-36  rounded-full mb-3 overflow-hidden flex-shrink-0   bg-gradient-to-r from-[#020F0B] to-[#0F4331]'>
				<img src={profileimg} alt='' className=' object-contain  ' />
			</div>
			<h1 className=' leading-snug text-center text-2xl font-semibold text-[#F9DEB3]'>
				Buy a Property in Dubai
			</h1>
			<h2 className='leading-snug text-center text-base text-white'>
				From any country.
			</h2>
		</header>
	);
};

export default ProfileCard