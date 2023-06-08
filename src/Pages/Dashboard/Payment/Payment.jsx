import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_stripe_published_key);
    const { paymentItem } = useContext(AuthContext)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;