import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CheckOut = () => {
    const { paymentItem } = useContext(AuthContext)
    console.log(paymentItem)
    const [axiosInstance] = useAxiosSecure()
    const user = useContext(AuthContext)
    const [process,setProcess] = useState(false)
    const [transactionId,setTransactioId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState('')
    const elements = useElements()

    const price = paymentItem.price
    // console.log(price)



    useEffect(() => {
        axiosInstance.post('/payment-intent', { price })
            .then(response => {
                setClientSecret(response.data.clientSecret)
                console.log(clientSecret)
            })
    }, [price,axiosInstance])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(error);
            setError(error)
        } else {
            setError('')
            console.log('PaymentMethod', paymentMethod);
        }

        setProcess(true)
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email
                    },
                },



            },
        );
        if(confirmError){
            console.log(confirmError)
            setError(confirmError)
          }
          setProcess(false)
          if(paymentIntent.status === 'succeeded'){
            
            const transactionId = paymentIntent.id;
            setTransactioId(transactionIdg)
            if(transactionId){
                setSuccess('Done,', transactionId)
            }

          }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary' type="submit" >
                    Pay
                </button>
            </form>
            <p>{error ? <><p className='text-red-500'>{error.message}</p></> : <></>}</p>
            <p>{success ? <><p className='text-green-700'>{success}</p></> : <></>}</p>
        </div>
    );
};

export default CheckOut;