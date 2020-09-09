import React from 'react';
import pp from '../../Assets/pp.png';

const Aboutme = () => {
	return (
		<div className="my-10 leading-relaxed mx-4 justify-evenly shadow-lg md:flex md:mt-24">
			{/* Rigt hand side */}
			<div className="my-2 -mr-16 shadow-lg">
				<div className="mx-2 ml-6 flex">
					<div>
						<img className=" h-40 w-auto object-contain rounded shadow-lg md:h-auto md:w-auto md:object-contain" src={pp} alt="" />
					</div>
					<div className=" ml-4 space-y-5">
						<div>
							<span>
								<strong className="text-gray-800 text-md font-bold">Name:</strong>
							</span>
							<span className=" text-sm text-gray-700">Fabisch Kamau</span>
						</div>
						<div>
							<span>
								<strong className="text-gray-800 text-md font-bold">Profile:</strong>
							</span>
							<span className=" text-sm text-gray-700">FullStack Developer</span>
						</div>
						<div>
							<span>
								<strong className="text-gray-800 text-md font-bold">Email:</strong>
							</span>
							<span className=" text-sm text-gray-700">kamaufabisch1175@gmail.com</span>
						</div>
						<div>
							<span>
								<strong className="text-gray-800 text-md font-bold">Phone:</strong>
							</span>
							<span className=" text-sm text-gray-700">+254 702417802</span>
						</div>
					</div>
				</div>
				<div className="mt-6 ml-4 text-gray-900">
					<h3>Skills</h3>
					<div className="text-md text-gray-700 mt-4">
						<span>React Js (Redux)</span>
					</div>

					<div className="h-4 max-w-full bg-gray-600">
						<div className="w-3/4 h-4 max-w-full bg-blue-700 " />
					</div>
					<div className="text-md text-gray-700 mt-4">
						<span>GraphQL</span>
					</div>

					<div className="h-4 max-w-full bg-gray-600">
						<div className="w-2/3 h-4 max-w-full bg-blue-700 " />
					</div>
					<div className="text-md text-gray-700 mt-4">
						<span>SQL</span>
					</div>

					<div className="h-4 max-w-full bg-gray-600">
						<div className=" w-2/5 h-4 max-w-full bg-blue-700 " />
					</div>
					<div className="text-md text-gray-700 mt-4">
						<span>Graph Database (NEO4j)</span>
					</div>

					<div className="h-4 max-w-full bg-gray-600">
						<div className="w-2/3 h-4 max-w-full bg-blue-700 " />
					</div>
					<div className="text-md text-gray-700 mt-4">
						<span>Apolo Client</span>
					</div>

					<div className="h-4 max-w-full bg-gray-600">
						<div className="w-1/2 h-4 max-w-full bg-blue-700 " />
					</div>
				</div>
			</div>
			{/* Left hand Side  */}
			<div className="w-full space-x-8 md:space-x-24">
                <div className=" w-1/4 ml-auto mr-auto">
                    <h2 className="text-2xl text-gray-800 border-b-2 border-blue-300 text-center">About Me</h2>
                </div>
				
				<div className="mt-4 space-y-4 text-gray-700 text-sm text-center">
					<p >I am a web developer recently Graduated at Deadan Kimath University of Technology with Bachelor's Degeree in Coputer Science.</p>
                    <p >I'm passionate about programming, web Developent in particaular and always eager and willing to learn new Skills every day. My long term goal and career is to become a well experinced FullStack Developer and continue to dive deep into Data Science and Machine Leraning.</p>
                    <p >I'm also passionate about sports. My hobbies are Swimming, Reading Science Article abd Watching. I like to help people achieve more using the skills at hand.</p>
                    <p > Currently i'm working as a freelancer and if you wish to hire me for your jobs you can find me via the contacts given on the left.</p>
                </div>
			</div>
		</div>
	);
};

export default Aboutme;
