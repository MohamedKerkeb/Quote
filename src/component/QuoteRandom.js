import React from 'react';

const QuoteRandom = ({ quote, fetchAuthor }) => {
	return (
		<>
			{quote.map((q) => (
				<div key={q.id}>
					<p className='quote'>{q.text}</p>
					<div className='wrapperAuthor'>
						<h4 className='author' onClick={() => fetchAuthor(q.author)}>
							{q.author}
						</h4>
						<span className='genre'>{q.genre}</span>
					</div>
				</div>
			))}
		</>
	);
};

export default QuoteRandom;
