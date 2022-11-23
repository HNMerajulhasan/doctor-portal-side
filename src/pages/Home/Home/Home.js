import React from 'react';
import Banner from '../Banner/Banner';
import Extrasection from '../ExtraSection\'/Extrasection';
import HomeContact from '../HomeContact/HomeContact';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Extrasection></Extrasection>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <HomeContact></HomeContact>
        </div>
    );
};

export default Home;