import React from 'react';
import Footer from './footer/Footer';
import Work from './body/Work';
import Services from './body/Services';
import Aboutme from './body/Aboutme';
import Header from './Header/Header';

const Home = () => {
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

export default Home;
