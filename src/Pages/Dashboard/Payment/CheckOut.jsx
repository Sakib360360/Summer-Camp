import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';

import { useState } from 'react';
import { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import useManageClasses from '../../../Hooks/useManageClasses';

const CheckOut = () => {
    const stripe = useStripe()
    const { paymentItem } = useContext(AuthContext)
    const [process, setProcess] = useState(false)
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactioId] = useState('')
    const [error, setError] = useState(null)
    const elements = useElements('')
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState("");
    const [axiosInstance] = useAxiosSecure()
    const [availableSeats, setAvailableSeats] = useState(paymentItem.seats)
    const updatedSeats = availableSeats - 1;
    const price = paymentItem.price

    const date = new Date()
    const enrolledItem = { ...paymentItem, transactionId, date };


    // console.log(enrolledItem)

    useEffect(() => {
        axiosInstance.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [price, axiosInstance])

    const [allClasses] = useManageClasses()
    // console.log(allClasses)
    const enrolledStudents = allClasses.map(item => item.enrolledStudent);
    // console.log(enrolledStudents)




    const handleSubmit = async (events) => {
        events.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }
        // console.log(card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setError(error)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
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
        if (confirmError) {
            console.log(confirmError)
            setError(confirmError)
        }
        setProcess(false)
        if (paymentIntent.status === 'succeeded') {

            const transactionId = paymentIntent.id;

            if (transactionId) {
                setTransactioId(transactionId)
                Swal.fire('you got id')
                setSuccess('Done,', transactionId)
                const payment = {
                    payer: user?.email,
                    transactionId,
                    price,

                }








                // update availble seats

                axiosInstance.patch(`/updateAvailableSeats/${paymentItem.selectedClassId}`, { updatedSeats })
                    .then(response => {
                        if (response.data.modifiedCount) {
                            setAvailableSeats(availableSeats - 1)
                            Swal.fire('You perchaced a Seat')
                        }
                        // console.log(response.data)
                    })
                    .catch(error => console.log(error))

                // from selected classes updating seats


                axiosInstance.patch(`/updateSelectedClasses/${paymentItem._id}`, { updatedSeats })
                    .then(response => {

                        console.log(response.data)
                    })
                    .catch(error => console.log(error))


                // from selected classes remove item
                axiosInstance.delete(`/deleteSelectedClass/${paymentItem._id}`)
                    .then(response => {
                        // console.log(response.data)
                    })
                    .catch(error => console.log(error))

                // add this to enrolled classes

                axiosInstance.post('/enrolledClasses', { enrolledItem })
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(error => console.log(error))




                // update instructors object in enrolledStudents property
                // axiosInstance.patch(`/updateInstructorEnrolledStudents/${paymentItem.classInstructor}`, [...enrolledStudents,transactionId])
                //     .then(response => {
                //         if (response.data.modifiedCount) {
                //             Swal.fire('Instructors prof updated')
                //         }
                //     })
                //     .catch(error => console.log(error))







                console.log(transactionId)
                Swal.fire('Payment Complete')
            }

        }
    };

    return (
        <div>
            <Helmet>
                <title>Language-Camp|Payment</title>
            </Helmet>
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
                <button disabled={!stripe || !clientSecret || process} type="submit" className='btn btn-sm mt-4' >
                    Pay
                </button>
            </form>
            <div>{error ? <><p className='text-red-500'>{error.message}</p></> : <></>}</div>
            <div>{success ? <><p className='text-green-700'>{success}</p></> : <></>}</div>
        </div>
    );
};

export default CheckOut;