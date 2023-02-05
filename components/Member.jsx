import React from 'react';
import Member1 from 'public/assets/t1.svg';
import Member2 from 'public/assets/t2.svg';
import Member3 from 'public/assets/t3.svg';
import Img from './Img';

const Member = () => {
	return (
		<div className='max-w-[1240px] mx-auto py-24 overflow-hidden'>
			<h1 className='text-5xl font-bold py-10 uppercase'>Members</h1>
			<div className='grid grid-cols-1 lg:grid-cols-3 '>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 shadow-lg'>
						<Img socialImg={Member1} />
						<h3 className='pt-2 font-bold text-2xl'>Name</h3>
						<p className='font-semibold text-lg'>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 shadow-lg'>
						<Img socialImg={Member2} />
						<h3 className='pt-2 font-bold text-2xl'>Name</h3>
						<p className='font-semibold text-lg'>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 shadow-lg'>
						<Img socialImg={Member3} />
						<h3 className='pt-2 font-bold text-2xl'>Name</h3>
						<p className='font-semibold text-lg'>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Member;
