import React, { useState, useEffect } from 'react';
import axios from 'axios';
import birthIcon from '../assets/BirthIcon.svg';
import femaleIcon from '../assets/FemaleIcon.svg';
import phoneIcon from '../assets/PhoneIcon.svg';
import insuranceIcon from '../assets/InsuranceIcon.svg';
import LabResults from './LabResults';

const Profile = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = import.meta.env.VITE_APP_USERNAME;
    const password = import.meta.env.VITE_APP_PASSWORD;

    // A base64 encoded string of the username and password
    const auth = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
                    headers: {
                        'Authorization': `Basic ${auth}`
                    }
                });
                const jessicaTaylorData = response.data.filter(person => person.name === "Jessica Taylor");
                if (jessicaTaylorData.length > 0) {
                    setData(jessicaTaylorData[0]);
                } else {
                    setError('No data found for Jessica Taylor');
                }
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [auth]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <div className='w-[310px] bg-[#fff] rounded-xl py-12 mt-3 flex flex-col items-center gap-4 mb-5'>
                <img src={data.profile_picture} alt="Profile" className='size-[200px]'/>
                <h2 className='text-[24px] font-bold'>{data.name}</h2>
                <div className='*:py-[11px]'>
                    <div className='flex gap-3'>
                        <img src={birthIcon} alt="" />
                        <p>Date of Birth <br /><strong> {data.date_of_birth}</strong></p>
                    </div>
                    <div className='flex gap-3'>
                        <img src={femaleIcon} alt="" />
                        <p>Gender<br /><strong> {data.gender}</strong></p>
                    </div>
                    <div className='flex gap-3'>
                        <img src={phoneIcon} alt="" />
                        <p>Contact info.<br /><strong>{data.phone_number}</strong></p>
                    </div>
                    <div className='flex gap-3'>
                        <img src={phoneIcon} alt="" />
                        <p>Emergency Contacts<br /><strong>{data.emergency_contact}</strong></p>
                    </div>
                    <div className='flex gap-3'>
                        <img src={insuranceIcon} alt="" />
                        <p>Insurance Provider<br /><strong>{data.insurance_type}</strong></p>
                    </div>
                </div>
                <div className='bg-[#01F0D0] py-2 rounded-full w-[220px] font-bold flex justify-center items-center hover:bg-[#D8FCF7] cursor-pointer'>
                    <p>Show All Information</p>
                </div>
            </div>
            <LabResults/>
        </div>
    );
};

export default Profile;
