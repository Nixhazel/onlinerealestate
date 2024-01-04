import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form: React.FC<any> = ({ setSuccess }) => {
	const [state, handleSubmit] = useForm("mayrylea");
	// if (state.succeeded) {
		// console.log("State", state);
		// setSuccess(()=> true)

		// return <Form />;
	// }
	useEffect(() => {
		if (state.succeeded) {
			setSuccess(true);
		}
	}, [state.succeeded, setSuccess]);
	return (
		<form onSubmit={handleSubmit} className=' flex flex-col items-center'>
			<div className='flex flex-col items-center w-full pb-3'>
				<div className='flex flex-col w-11/12 justify-center items-center rounded-lg border-solid border-2 border-[#F9DEB3] sm:w-3/4 md:w-2/3'>
					<input
						id='name'
						type='text'
						name='name'
						placeholder='Your Name'
						className='outline-none bg-inherit border-none w-full p-3 placeholder-[#88A198] placeholder-opacity-50 text-white'
						required
					/>
					<ValidationError prefix='Name' field='name' errors={state.errors} />
				</div>
			</div>
			<div className='flex flex-col items-center w-full pb-3'>
				<div className='flex flex-col w-11/12 justify-center items-center rounded-lg border-solid border-2 border-[#F9DEB3] sm:w-3/4 md:w-2/3'>
					<input
						id='phone'
						type='text'
						name='phone'
						placeholder='Your Phone Number'
						className='outline-none bg-inherit border-none w-full p-3 placeholder-[#88A198] placeholder-opacity-50 text-white'
						required
					/>
					<ValidationError prefix='Phone' field='phone' errors={state.errors} />
				</div>
			</div>
			<div className='flex flex-col items-center w-full pb-3'>
				<div className='flex flex-col w-11/12 justify-center items-center rounded-lg border-solid border-2 border-[#F9DEB3] sm:w-3/4 md:w-2/3'>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='Your Email Address'
						className='outline-none bg-inherit border-none w-full p-3 placeholder-[#88A198] placeholder-opacity-50 text-white'
						required
					/>
					<ValidationError prefix='Email' field='email' errors={state.errors} />
				</div>
			</div>
			<div className='flex flex-col items-center w-full pb-3'>
				<div className='flex flex-col w-11/12 justify-center items-center rounded-lg border-solid border-2 border-[#F9DEB3] sm:w-3/4 md:w-2/3'>
					<input
						id='country'
						type='text'
						name='country'
						placeholder='Your Country'
						className='outline-none bg-inherit border-none w-full p-3 placeholder-[#88A198] placeholder-opacity-50 text-white'
						required
					/>
					<ValidationError prefix='Country' field='country' errors={state.errors} />
				</div>
			</div>
			<div className='flex flex-col items-center w-full pb-3'>
				<div className='flex flex-col w-11/12 justify-center items-center rounded-lg border-solid border-2 border-[#F9DEB3] sm:w-3/4 md:w-2/3'>
					<input
						id='amount'
						type='text'
						name='amount'
						placeholder='Your budget'
						className='outline-none bg-inherit border-none w-full p-3 placeholder-[#88A198] placeholder-opacity-50 text-white'
						required
					/>
					<ValidationError prefix='Amount' field='amount' errors={state.errors} />
				</div>
			</div>

			<button
				type='submit'
				disabled={state.submitting}
				className='p-3 bg-[#F9DEB3] w-11/12 sm:w-3/4 md:w-2/3 rounded-lg'>
				Submit
			</button>
		</form>
	);
};

export default Form;
