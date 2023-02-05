import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor('white');
				setTextColor('black');
			} else {
				setColor('transparent');
				setTextColor('white');
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className='fixed left-0 top-0 w-full z-10 ease-in-out duration-300'>
			<div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
				<Link href='/'>
					<div
						style={{ color: `${textColor}` }}
						className='font-bold flex flex-col items-start'>
						<h1 className='text-2xl'>Saksham Speech</h1>
						<h2 className='text-xl'>& Hearing</h2>
					</div>
				</Link>
				<ul
					style={{ color: `${textColor}` }}
					className='hidden sm:flex'>
					<li className='p-4'>
						<Link href='/'>Home</Link>
					</li>
					<li className='p-4'>
						<Link href='/#about'>About</Link>
					</li>
					<li className='p-4'>
						<Link href='/#service'>Services</Link>
					</li>
					<li className='p-4'>
						<Link href='/#contact'>Contact</Link>
					</li>
				</ul>

				{/** Mobile button */}
				<div
					className='block sm:hidden z-10'
					onClick={() => setNav((prev) => !prev)}>
					{nav ? (
						<AiOutlineClose size={20} />
					) : (
						<AiOutlineMenu
							style={{ color: `${textColor}` }}
							size={20}
						/>
					)}
				</div>
				{/** Mobile Menu */}
				<div
					className={
						nav
							? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
							: 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
					}>
					<ul>
						<li className='p-4 text-4xl hover:text-gray-500'>
							<Link href='/'>Home</Link>
						</li>
						<li className='p-4 text-4xl hover:text-gray-500'>
							<Link href='/#about'>About</Link>
						</li>
						<li className='p-4 text-4xl hover:text-gray-500'>
							<Link href='/#service'>Services</Link>
						</li>
						<li className='p-4 text-4xl hover:text-gray-500'>
							<Link href='/#contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
