import React from 'react';
import teethDoc from '../../../assets/images/TeethDoc.jpg';

const Extrasection = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row bg-slate-400 rounded-lg">
          <img src={teethDoc} className="max-w-sm rounded-lg shadow-2xl h-96" alt=" " />
          <div className='mx-5'>
            <h1 className="text-5xl font-bold">Why Our Service!</h1>
            <p className="py-6">General dentists prevent, evaluate, diagnose, and treat diseases of the oral cavity, as well as maintain the function and appearance of the teeth. Many oral diseases and abnormalities can indicate other diseases. A general dentist may refer patients to their physician or a specialist for further evaluation, or vice versa for treatment.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Extrasection;