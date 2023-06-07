import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProviders';
import Bannar from '../Bannar/Bannar';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>Language-Camp|Home</title>
            </Helmet>
            <Bannar></Bannar>
            <div className='max-w-5xl mx-auto'>
                <PopularClasses></PopularClasses>
            </div>
            <div className='max-w-5xl mx-auto'>
                <PopularInstructors></PopularInstructors>
            </div>
        </div>
    );
};

export default Home;