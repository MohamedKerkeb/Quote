import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import './App.css';

const App = () => {
	const [quote, setQuote] = useState([]);
	const [quotesAuthor, setQuotesAuthor] = useState([]);
	const [message, setMessage] = useState('');
	const [vue, setVue] = useState('false');

	const fetchData = async () => {
		const getQuote = await Axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random');
		setQuote([
			{
				text: getQuote.data.quote.quoteText,
				author: getQuote.data.quote.quoteAuthor,
				genre: getQuote.data.quote.quoteGenre,
				id: getQuote.data.quote._id,
			},
		]);
		setVue(true);
	};

	const fetchAuthor = async (author) => {
		const getAuthorQuotes = await Axios.get(
			`https://quote-garden.herokuapp.com/api/v2/authors/${author}?page=1&limit=10`
		);
		const quoteText = getAuthorQuotes.data.quotes.map((q) => q.quoteText);
		const message = getAuthorQuotes.data.message;

		setQuotesAuthor(quoteText);
		setMessage(message);
		setVue(false);
	};

	// console.log(quotesAuthor);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className='main'>
				<header>
					<button onClick={() => fetchData()}>
						<FontAwesomeIcon icon={faRedoAlt} /> Ramdom
					</button>
				</header>
				<section className='wrapperQuote'>
					{vue ? (
						quote.map((q) => (
							<div key={q.id}>
								<p className='quote'>{q.text}</p>
								<div className='wrapperAuthor'>
									<h4 className='author' onClick={() => fetchAuthor(q.author)}>
										{q.author}
									</h4>
									<span className='genre'>{q.genre}</span>
								</div>
							</div>
						))
					) : (
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
					)}
				</section>
				<footer>
					<p>Mohamed@devchallanges.io</p>
				</footer>
			</div>
		</>
	);
};

export default App;
