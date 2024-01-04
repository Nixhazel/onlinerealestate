import React from 'react'
import Form from './Form';

const Body: React.FC<any> = ({ setSuccess }) => {
	return (
		<>
			<div className='pb-4'>
				<p className='text-base text-white text-center'>
					1. Fill in your details.
				</p>
				<p className='text-base text-white text-center'>2. Receive an offer.</p>
				<p className='text-base text-white text-center'>
					3. Receive a payment link and pay.
				</p>
			</div>
			<Form setSuccess={setSuccess} />
			<p className='mt-2 mb-4 text-[#bababa] text-center text-[10px]'>
				By clicking "Submit" I agree to use my data.
			</p>
			<div className='flex flex-col items-start w-full'>
				<h3 className=' leading-snug text-center text-[20px] font-semibold text-[#F9DEB3] mb-3'>
					How it works ?
				</h3>
				<p className=' text-sm text-white text-left mb-3'>
					- fill in your details;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- the expert will send you a sales offer for the project that is the
					most potentially profitable within the range of your budget;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- once you confirm that you are ready to go ahead you will receive a
					payment link;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- all you need to pay is only 5% from the property price;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- the payment you make goes directly to the developer towards the
					chosen property and does not include any charges for Daria or the
					expert;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- send a screenshot of successful payment to confirm your purchase;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- congratulations! You are a successful Real Estate investor;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- the expert will stay in touch with you to help you to continue the
					payments and to receive the ownership documents;
				</p>
				<p className=' text-sm text-white text-left mb-3'>
					- along these steps feel free to ask any question or advice from the
					expert at any moment.
				</p>
			</div>
		</>
	);
};
export default Body