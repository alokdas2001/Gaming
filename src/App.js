import React from 'react';
// components and pages
import Home from './pages/Home';
import Nav from './components/Nav';
//Styles
import GlobalStyles from './components/GlobalStyles';
//Routes
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Route path={['/game/:id', '/']}>
				<Nav />
				<Home />
			</Route>
		</div>
	);
}

export default App;
