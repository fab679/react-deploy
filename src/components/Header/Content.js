import React from 'react';

const Content = () => {
	return (
		<div className="block mt-2 text-white  space-y-12 md:space-y-20 md:mt-12 md:space-y-20">
			<div className=" font-bold text-lg ml-auto mr-auto w-2/3 md:ml-auto md:mr-auto md:text-2xl md:w-64 md:font-bold">
				<span>I am Fabisch Kamau</span>
			</div>
			<div className="ml-auto mr-auto w-3/4 text-sm md:w-1/2 md:text-xl md:mr-auto md:ml-auto">
				<span>FullStack Developer, Graphics Designer, Data Scientist</span>
			</div>
            <div className="ml-auto mr-auto w-1/2 md:w-1/6">
                <button className="border-2 px-6 border-blue-500  rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 scale-110">Learn More</button>
            </div>
            
		</div>
	);
};

export default Content;
