import React from 'react';
import react from '../../Assets/react-logo.jpeg';
import tail from '../../Assets/tail.png';
import neo4j from '../../Assets/neo4j_logo.png';
import graphql from '../../Assets/graphqllogo.png';

const Services = () => {
	return (
		<div className="my-10 mx-4 leading-relaxed shadow-lg space-y-5">
			<div className="text-center text-2xl text-gray-800 border-b-2 border-blue-500 ml-auto mr-auto w-1/4">
				<h3>Services</h3>
			</div>
			<div className="text-gray-700 text-center text-lg">
				<h3>Some of the tools i use to offer my Services With.</h3>
			</div>
			{/*cards go heree.... */}
			<div className="space-10 md:grid md:grid-cols-3 md:gap-4">
				<div className="relative h-auto max-w-sm border-2 border-gray-300 ml-4 rounded-lg space-y-10">
					<div>
						<div>
							<img className="rounded-lg w-full object-contain max-w-full" src={react} alt="" />
						</div>
						<div className="text-sm text-gray-600 text-center">
							<p>
								React is an Open source Javascript library thar is used for building uder interfaces
								specifically for single page applications. It's used for handling the view layer for the
								web and mobile apps.
							</p>
							<p>
								I peronally like and adore react as it helps in building reusable components, it is easy
								to debug and easy to build UI with. This site is build with React.
							</p>
						</div>
						<div className=" text-center ">
							<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
								<button className="absolute left-0 bottom-0 bg-blue-600 max-w-full text-white rounded w-full hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">
									Read More
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className=" relative  h-auto max-w-sm border-2 border-gray-300 ml-4 rounded-lg space-y-10">
					<div>
						<div>
							<img className="rounded-lg object-contain max-w-full w-full" src={graphql} alt="" />
						</div>
						<div className="text-sm mt-4 text-gray-600 text-center">
							<p>
								Graphql provides a complete and understandable description of the data in your Api's,
								gives clients the power to ask for exactly what they need and nothing more. It makes it
								easier to evolve Api's over tine and enables powerful developer tool.
							</p>
						</div>
						<div className="mt-10 text-center ">
							<a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
								<button className="absolute left-0 bottom-0 bg-blue-600 max-w-full text-white rounded w-full hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">
									Read More
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className=" relative h-auto max-w-sm border-2 border-gray-300 ml-4 rounded-lg space-y-10">
					<div>
						<div>
							<img className="rounded-lg object-contain max-w-full w-full" src={tail} alt="" />
						</div>
						<div className="text-sm text-gray-600 text-center">
							<p>
								TailwindCSS is a highly customizable low level CSS framework that gives you the building
								blcoks you need to build bespoke designs without any annoying opinionated styles you
								have to fight to override{' '}
							</p>
							<p>
								TailwindCSS is cool helps building easy and fast wit own custom styles. Very efficient.
								This entire site is build with TailwindCSS and is fully responsive even on Mobile
								Devices
							</p>
						</div>
						<div className="mt-10 text-center ">
							<a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
								<button className="absolute left-0 bottom-0 bg-blue-600 max-w-full text-white rounded w-full hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">
									Read More
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className=" relative h-auto max-w-sm border-2 border-gray-300 ml-4 rounded-lg space-y-10">
					<div>
						<div>
							<img className="rounded-lg object-contain max-w-full w-full" src={neo4j} alt="" />
						</div>
						<div className="text-sm text-gray-600 text-center">
							<p>
								Neo4j is a native graph database built from the ground up to leverage and not onluy data
								but as it's stored enabling queries never before imagined at speeds never thought
								possible.
							</p>
							<p>
								Neo4j gives the upperhand over the other database as it aslo comes with Real-time
								Recommendation engines, Natural Language Processing and many more...
							</p>
						</div>
						<div className="mt-10 text-center ">
							<a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">
								
								<button className="absolute left-0 bottom-0 bg-blue-600 max-w-full text-white rounded w-full hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">
									Read More
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
