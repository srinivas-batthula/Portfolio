'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/styles/Home.module.css';
import { SOCIALS } from '@/data';

// Extend the 'Window' interface to include `Razorpay`
declare global {
    interface Window {
        Razorpay: any;
    }
}

const Footer: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);

    // Load Razorpay script once
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => setRazorpayLoaded(true);
        document.body.appendChild(script);
        console.log('Razorpay Loaded!');
    }, []);

    const handlePayment = async () => {
        if (!razorpayLoaded) {
            alert('Razorpay SDK failed to load. Please Do Refresh!');
            return;
        }

        setLoading(true);
        try {
            // 1. Create Order
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_HOME}/api/razorpay/order`,
                {
                    amount: 150, // Amount in INR
                }
            );

            // 2. Open Razorpay Checkout-UI
            const options = {
                key: process.env.NEXT_PUBLIC_Razorpay_Key, // Razorpay Test Key
                amount: data.amount,
                currency: 'INR',
                name: 'Srinivas BSP',
                description: 'Test Transaction for Payment...',
                order_id: data.id,

                method: {
                    upi: true,
                    netbanking: true,
                    wallet: true,
                    paylater: true,
                },

                upi: {
                    vpa: 'success@razorpay',
                },
                netbanking: {
                    bank: 'ICIC',
                },
                wallet: {
                    phonepe: true,
                    paytm: true,
                },
                paylater: {
                    simpl: true,
                    lazyPay: true,
                    zestmoney: true,
                },

                // 3. Verify the Payment with HMAC-signature
                handler: async function (response: any) {
                    const verifyRes = await axios.post(
                        `${process.env.NEXT_PUBLIC_HOME}/api/razorpay/verify`,
                        response
                    );
                    if (verifyRes.data.success) {
                        window.alert('Payment Successful, Thank you dev!');
                    } else {
                        window.alert('Payment Verification Failed!');
                    }
                },
                prefill: {
                    name: 'Abhi',
                    email: 'srinivasb.temp@gmail.com',
                    contact: '9876543210',
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
            console.log('Payment Successful!');
        } catch (error) {
            console.error('Payment error:', error);
            window.alert('Something went wrong, Please try again!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={handlePayment}
                className={styles.buyBtn}
                style={{ textAlign: 'center', cursor: 'pointer' }}
            >
                {loading ? 'Loading...' : 'Buy me a Coffee'}
            </button>

            <div className={styles.footer}>
                <div className={styles.footerChild1}>
                    Designed and Developed by{' '}
                    <span
                        style={{
                            color: 'rgb(251, 53, 251)',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}
                    >
                        Srinivas Batthula
                    </span>
                </div>

                {/* Visitor Counter Block */}
                <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
                    <p style={{ color: 'violet', fontWeight: 'bold' }}>Visitors : </p>
                    <img
                        src="https://hitwebcounter.com/counter/counter.php?page=21189306&style=0001&nbdigits=6&type=page&initCount=152"
                        title="Counter Widget"
                        alt="Visit counter For Websites"
                    />
                </a>

                <div className={styles.footerChild2}>
                    Copyright © {new Date().getFullYear()} BSP
                </div>

                <div className={styles.footerChild3}>
                    <a
                        href={SOCIALS[0].href}
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '1.5rem', color: 'skyblue', marginRight: '1rem' }}
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href={SOCIALS[1].href}
                        title="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '1.5rem', color: 'white', marginRight: '1rem' }}
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;
