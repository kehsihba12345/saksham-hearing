import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Saksham Speech & Hearing</title>
				<meta
					name='description'
					content='Saksham Speech & Hearing'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Hero
				heading='Enhancing Communication, Improving Lives'
				message='Empowering communication through speech and voice therapy.'
			/>
			<About />
			<Services />
			<Contact />
		</>
	);
}
