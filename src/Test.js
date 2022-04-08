import React, { useEffect, useState } from 'react';
import './index.css';


function Visual() {
	return (
		<>
			<body class="bg-green-400">
				<div class="min-h-screen flex items-center justify-center">
					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">1</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">2</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">3</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">4</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">5</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">6</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">7</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">8</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">9</div>
						<div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">10</div>
					</div>
				</div>
			</body>
		</>
	)
}


function Test() {
	return (
		<>
			<body className="h-screen bg-red-400" >
				<Visual />
			</body>
		</>
	);
}

export default Test;
