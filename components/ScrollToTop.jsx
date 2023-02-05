import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setVisible(false);
			} else {
				setVisible(true);
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		<div className='fixed right-0 bottom-0 w-full z-10 ease-in-out duration-300'>
			<div className='flex justify-end items-end p-4'>
				<FaArrowCircleUp
					className={!visible ? 'cursor-pointer text-yellow-400' : 'hidden'}
					size={40}
					onClick={scrollToTop}
				/>
			</div>
		</div>
	);
};

export default ScrollToTop;
