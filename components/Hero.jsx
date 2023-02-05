import Link from 'next/link';
import React from 'react';

const Hero = ({ heading, message }) => {
	return (
		<div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
			{/** Overlay */}
			<div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] max-h-screen' />
			<div className='p-4 flex flex-col items-center text-center text-white z-[2] mt-[-10rem]'>
				<h2 className='text-5xl font-bold'>{heading}</h2>
				<p className='py-4 text-xl'>{message}</p>

				<button className='mt-10 px-8 py-2 border'>
					<Link href='/#contact'>Book Appointment</Link>
				</button>
			</div>
		</div>
	);
};

export default Hero;
