import React from 'react';

const QuoteAuthor = ({ message, quotesAuthor }) => {
	return (
		<>
			<div>
				<h2>{message}</h2>
				{quotesAuthor.map((t, i) => (
					<div>
						<p className='quote' key={i}>
							{t}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default QuoteAuthor;
