import React from 'react';
import Member from './Member';

const About = () => {
	return (
		<div
			id='about'
			className='py-24 max-w-[1240px] mx-auto'>
			<div className='text-center'>
				<h1 className='text-5xl font-bold py-10 uppercase'>About Us</h1>
				<p className='text-xl font-semibold p-4 uppercase'>Saksham Speech & Hearing Care is a premier Delhi based hearing aid & speech therapy service provider.</p>
				<Member />
			</div>
		</div>
	);
};

export default About;
