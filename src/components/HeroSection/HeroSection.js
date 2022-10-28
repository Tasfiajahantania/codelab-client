import React from 'react';
import { Link } from 'react-router-dom';
import homeimg from '../../images/home.svg';

const HeroSection = () => {
    return (
        <div>
            <div className="hero py-8 text-black bg-blue-300 p-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={homeimg} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">CodeLab</h1>
                        <p className="py-6">This website you can learn about React, Vew, Html, Css, JavaScript, Bootstrap, WordPress and ETC.</p>
                        <button className="text-white text-sm px-4 py-2 rounded bg-pink-500"> <Link to="/course" className='text-black no-underline text-bold'>Course</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;