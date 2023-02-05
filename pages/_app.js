import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import theme from '@/config/theme';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Navbar />
			<Component {...pageProps} />
			<ScrollToTop />
		</ChakraProvider>
	);
}

export default App;
