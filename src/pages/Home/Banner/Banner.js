import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg-sky-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt=""/>
                <div>
                    <h1 className="text-5xl font-bold">Welcome To Doctor<br/> Portal Website!</h1>
                    <p className="py-6">Here we are to serve you 24hrs.We will ensure our client to get their supreme Service.Hope you will enjoy Our Service.</p>
                    <PrimaryButton>Book Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;