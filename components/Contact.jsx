import { sendContactForm } from '@/lib/api';
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const initValues = { name: '', email: '', subject: '', message: '' };
const initState = { isLoading: false, error: '', values: initValues };
const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

const Contact = () => {
	const toast = useToast();
	const [state, setState] = useState(initState);
	const [touched, setTouched] = useState({});

	const { values, isLoading, error } = state;

	const handleErrorStateForFormValidation = (itemValue, itemType) => {
		if (!itemValue) {
			return true;
		}
		if (itemType === 'email') {
			console.log(validEmail.test(itemValue));
			if (!validEmail.test(itemValue)) {
				return true;
			}
		}
		return false;
	};

	const handleChange = ({ target }) => {
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}));
	};

	const onBlur = ({ target }) =>
		setTouched((prev) => ({
			...prev,
			[target.name]: true,
		}));

	const onSubmit = async () => {
		setState((prev) => ({
			...prev,
			isLoading: true,
		}));

		try {
			await sendContactForm(values);
			setTouched({});
			setState(initState);
			toast({
				title: 'Message sent.',
				status: 'success',
				duration: 2000,
				isClosable: true,
				position: 'top',
			});
		} catch (error) {
			setState((prev) => ({
				...prev,
				isLoading: false,
				error: error.message,
			}));
		}
	};

	return (
		<Container maxW={450}>
			<div
				id='contact'
				className='max-w-[1240px] mx-auto py-24 mb-20 text-center overflow-hidden'>
				<h1 className='text-5xl font-bold p-5 uppercase'>Contact Us</h1>
				{error && (
					<Text
						color='red.300'
						my={4}
						fontSize='xl'>
						{error}
					</Text>
				)}

				{/** Contact us form */}
				<FormControl
					isRequired
					isInvalid={touched.name && handleErrorStateForFormValidation(values.name, 'name')}
					errorBorderColor='red.300'
					mb={5}>
					<FormLabel>Name</FormLabel>
					<Input
						type='text'
						name='name'
						value={values.name}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Required</FormErrorMessage>
				</FormControl>

				<FormControl
					isRequired
					mb={5}
					isInvalid={touched.email && handleErrorStateForFormValidation(values.email, 'email')}
					errorBorderColor='red.300'>
					<FormLabel>Email</FormLabel>
					<Input
						type='email'
						name='email'
						value={values.email}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Invalid Email</FormErrorMessage>
				</FormControl>

				<FormControl
					isRequired
					mb={5}
					isInvalid={touched.subject && handleErrorStateForFormValidation(values.subject, 'subject')}
					errorBorderColor='red.300'>
					<FormLabel>Subject</FormLabel>
					<Input
						type='text'
						name='subject'
						value={values.subject}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Required</FormErrorMessage>
				</FormControl>

				<FormControl
					isRequired
					mb={5}
					isInvalid={touched.message && handleErrorStateForFormValidation(values.message, 'message')}
					errorBorderColor='red.300'>
					<FormLabel>Message</FormLabel>
					<Textarea
						type='text'
						name='message'
						rows={4}
						value={values.message}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Required</FormErrorMessage>
				</FormControl>

				<Button
					variant='outline'
					colorScheme='blue'
					isLoading={isLoading}
					isDisabled={!values.name || !values.email || !values.subject || !values.message}
					onClick={onSubmit}>
					Submit
				</Button>
			</div>
		</Container>
	);
};

export default Contact;
