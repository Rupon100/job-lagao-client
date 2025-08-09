import React from 'react';
import Header from '../Components/Common/Header';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import welcomeAnimate from '../../public/Welcome.json';


const Home = () => {
    return (
        <div className='bg-slate-100 flex justify-center gap-2 items-center p-6' >
            <div className='basis-3/6 space-y-2 text-center md:text-left' >
                <h2 className='text-xl sm:text-2xl md:text-3xl ' >Find a Job With You2 Interest and Abilities</h2>
                <p className='text-sm text-gray-800' >Find.Job is a user-friendly job portal designed to connect job seekers with the right opportunities and employers with top talent. Whether you're looking to kickstart your career or hire skilled professionals, Find.Job simplifies the process.</p>
                <Link to={'/signup'} ><button className=' px-4 py-2 border border-slate-400 rounded shadow cursor-pointer' >Register</button></Link>
            </div>
            <div className='hidden md:block' >
                <Lottie animationData={welcomeAnimate} ></Lottie>
            </div>
            {/* others information here */}
        </div>
    );
};

export default Home;