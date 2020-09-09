import React from 'react';
import Header from './components/Header/Header'
import Aboutme from './components/body/Aboutme';
import Services from './components/body/Services';
import Footer from './components/footer/Footer';
import Work from './components/body/Work';

const App = () => {
	return (
		<div>
			<Header />
			<Aboutme />
			<Services />
			<Work />
			<Footer />
		</div>
	);
};

export default App;
