import React from 'react';
import Service1 from 'public/assets/service1.jpg';
import Service2 from 'public/assets/service2.jpg';
import Service3 from 'public/assets/service3.jpg';
import Service4 from 'public/assets/service4.jpg';
import Service5 from 'public/assets/service5.jpg';
import Service6 from 'public/assets/service6.jpg';
import Service7 from 'public/assets/service7.jpg';
import Service8 from 'public/assets/service8.jpg';
import Img from './Img';

const Services = () => {
	return (
		<div
			id='service'
			className='max-w-[1240px] mx-auto py-24 text-center overflow-hidden'>
			<h1 className='text-5xl font-bold py-10 uppercase'>Services</h1>
			<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 '>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service1}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service2}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service3}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service4}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service5}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service6}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service7}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-10 ease-in duration-200 hover:scale-[1.05]'>
					<div className='rounded-3xl p-8 lg:p-4 shadow-lg'>
						<Img
							socialImg={Service8}
							title='Name'
							desc='Lorem ipsum dolor sit amet.'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
