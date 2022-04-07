import React, { useEffect, useState } from 'react';
import './App.css';

function Visual() {

	const [copied, setCopied] = useState(false);
	const [quote, setQuote] = useState("o");
	const [author, setAuthor] = useState(null);

	async function GetQuotes() {
			fetch(
				"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
			)
				.then((res) => res.json())
				.then((data) => {
					let dataQ = data.quotes;
					let ranNum = Math.floor(Math.random() * dataQ.length);
					let ranQ = dataQ[ranNum];
					setQuote(ranQ.quote);
					setAuthor(ranQ.author);
					console.log(quote.length)
				});
			return ({
				"quote": quote,
				"author": author
			})
	}

	useEffect(() => {
		GetQuotes();
	}, []);

	return (
		<>
			<div className="grid place-items-center h-screen">
				<div className="relative box content h-2/6 w-4/6 p-4 border-4 content-start rounded-xl">

					<img src={"./black-quote.png"} className="h-2 w-2 object-cover lg:h-12 lg:w-12 md:h-8 md:w-8 sm:h-4 sm:w-4" alt="" />
					<h2 className="text-sm sm:text-lg md:text-xl lg:text-3xl">{quote}</h2>

					<img src={"./white-twitter.png"} onClick={() =>
						window.open("https://twitter.com/intent/tweet?text=Hello%20world", "_blank")
					}
						className="absolute h-10 w-11 p-1 left-5 bottom-5 transition-colors duration-500 ease-in-out transform 
						hover:scale-110 cursor-pointer" alt="Twitter" />

					{copied ?
						<button onClick={() =>
							(navigator.clipboard.writeText(quote))
						}
							className="hidden md:block absolute p-1 left-20 bottom-6">Copied!</button>
						:
						<img src={"./white-copy.png"} onClick={() =>
							(navigator.clipboard.writeText(quote))
								(setCopied(true))
						}
							className="absolute h-10 w-10 p-1 left-20 bottom-5 transition-colors duration-500 ease-in-out transform 
							hover:scale-110 cursor-pointer" alt="Copy" />
					}
					<img src={"./white-refresh.png"} onClick={() =>
						GetQuotes()
					}
						className="absolute h-11 w-11 p-1 right-5 bottom-5 transition-colors duration-500 ease-in-out transform 
						hover:scale-110 cursor-pointer"/>
				</div>
			</div>
			<div className="absolute left-6 bottom-6">
				<img src={"./white-github.png"} onClick={() =>
					window.open("https://github.com/matopop", "_blank")
				} className="h-10 w-10  transition-colors duration-500 ease-in-out transform 
					hover:scale-110 cursor-pointer" alt="Github" />
			</div>

		</>
	)
}

function App() {
	return (
		<>
			<body className="h-screen bg-red-300" >
				<Visual />
			</body>
		</>
	);
}

export default App;
