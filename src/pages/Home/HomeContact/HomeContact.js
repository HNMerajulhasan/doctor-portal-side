import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const HomeContact = () => {
    return (
       <section className='p-8'
         style={{
            background: `url(${appointment})`
         }}
       >
            <h2 className='flex justify-center text-3xl font-bold text-lime-500'>Contact Us</h2>
            <h2 className='flex justify-center text-2xl mt-2 text-cyan-400 font-bold'>Stay Connected With Us</h2>
            <form className='flex justify-center mt-3'>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 lg:w-1/3 '>
                    <input name="email" type="text" placeholder="Email Address.." className="input input-ghost input-bordered  bg-slate-50" />
                    <input name="subject" type="text" placeholder="Subject.." className="input input-ghost input-bordered  bg-slate-50" />
                    <textarea name="description" type="text" placeholder="Your message.." className="input input-ghost w-full h-32 input-bordered  bg-slate-50" />
                    <button className='btn mb-4 mt-2 w-1/2 mx-24 bg-pink-500' type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default HomeContact;