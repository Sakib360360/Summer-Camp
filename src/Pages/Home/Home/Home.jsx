import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProviders';
import Bannar from '../Bannar/Bannar';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import SectionTitle from '../../../Components/SectionTitle';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../../Components/ParallaxSection';
import Testimonials from '../../../Components/Testimonials';
import NewsLetter from '../../../Components/NewsLetter';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>Language-Camp|Home</title>
            </Helmet>
            <div className=''>
                <Bannar></Bannar>
            </div>
            <SectionTitle head={'Popular Classes'} subHead={'The most enrolled classes'}></SectionTitle>
            <div className='max-w-5xl mx-auto'>
                <PopularClasses></PopularClasses>
                <div className='flex justify-center my-8'>
                    <Link to='/classes'><button className='btn btn-outline rounded-xl'>Show All</button></Link>
                </div>
            </div>
            <SectionTitle head={'Popular Instructors'} subHead={'The most Popular Instructors'}></SectionTitle>
            <div className='max-w-5xl mx-auto'>
                <PopularInstructors></PopularInstructors>
                <div className='flex justify-center my-8'>
                    <Link to='/instructors'><button className='btn btn-outline rounded-xl'>Show All</button></Link>
                </div>
            </div>
            <div>
                <ParallaxSection></ParallaxSection>
            </div>
            <SectionTitle head={'Reviews'} subHead={'What Learner Say'}></SectionTitle>
            <div>
                <Testimonials></Testimonials>
            </div>
            <SectionTitle head={'Stay Connected'} subHead={'24/7 Services'}></SectionTitle>
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;