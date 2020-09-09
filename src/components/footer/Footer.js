import React from 'react';
import foot from '../../Assets/footer.jpg'

const divstyl={
    backgroundImage:'url('+foot+')',
    width:"100%",
    height:"150px",
    backgrounSize:"contain",
    backgroundRepeat:"no-repeat",
}

const Footer = () => {
    return (
        <div className=" text-center text-white" style={divstyl}>
            <div>
                <h1 className="my-20  text-xl leading-relaxed">Make The Internet Better</h1>
            </div>
            <div>
                <span className="text-lg">Design by </span><span>&#169;</span><span className="text-sm">fabisch Kamau</span>
            </div>
        </div>
    );
}

export default Footer;
