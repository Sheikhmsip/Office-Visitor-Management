// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo1 from '../../assets/Logo 1.png'

const Banner = () => {
    return (
        <div className='w-[96%] bg-slate-900 opacity-90 mx-auto grid md:grid-cols-2 justify-center justify-items-center rounded-lg'>
            <div className='content-center text-2xl pl-5 font-bold text-[#DBD29A]'>"At<span className='text-5xl text-orange-300 font-bold'> Sky Dream</span>, we specialize in turning your aspirations into reality by providing expert consultancy for European, American, and global work permits, student visas, and visit visas. Trust us to concrete your dream and guide you every step of the way." </div>
            <div><img src={logo1} alt="" className='w-full' /></div>
            
        </div>
    );
};

export default Banner;