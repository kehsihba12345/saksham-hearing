import Image from 'next/image';
import React from 'react';

const Img = ({ socialImg, title, desc }) => {
	return (
		<div className='relative'>
			<Image
				className='w-full h-full rounded-3xl'
				src={socialImg}
				alt='/'
				quality={50}
			/>
			<h3 className={title ? 'pt-2 font-bold text-2xl' : 'hidden'}>{title}</h3>
			<p className={desc ? 'font-semibold text-lg' : 'hidden'}>{desc}</p>
		</div>
	);
};

export default Img;
