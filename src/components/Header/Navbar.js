import React, {useState} from 'react';
import pp from '../../Assets/pp.png';
import {Link} from 'react-router-dom'

const Navbar = () => {
	const [ state, setstate ] = useState(false);
	return (
		<div>
			<header>
				<nav className=" items-center py-3 px-2  text-white md:flex md:justify-between">
					<div className="flex justify-between items-center">
						<div className="flex space-x-2 items-center">
							<div>
								<img className="h-8 w-8 rounded-full" src={pp} alt=""/>
							</div>
							<div className="font-bold text-xl text-white">
								<span>Fabisch Kamau</span>
							</div>
						</div>
						<div>
							<svg
								className="h-8 w-8 md:hidden"
								onClick={() => setstate(!state)}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
					<div className={!state ? ' ' : 'flex justify-center'}>
						<ul className={state ? 'md:flex md:space-x-3' : ' hidden py-1 md:flex md:space-x-3'}>
							<li>
								<Link className="hover:no-underline  hover:text-red-600">Home</Link>
							</li>
							<li>
								<Link className="hover:no-underline  hover:text-red-600">About</Link>
							</li>
							<li>
								<Link className="hover:no-underline  hover:text-red-600">Services</Link>
							</li>
							<li>
								<Link className="hover:no-underline  hover:text-red-600">Work</Link>
							</li>
							<li>
								<Link className="hover:no-underline  hover:text-red-600">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
