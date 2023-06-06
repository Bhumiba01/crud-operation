import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const api = axios.create({
    baseURL: 'http://localhost:5000/api/crud'
});
const Create = () => {
    const [formData, setFormData] = useState({
        name: '',
        field: '',
        city: '',
        emailid: '',
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('/create', formData).
            then(response => {
                console.log(response.data);
                navigate(`/`);
            }).catch(error => {
                console.error(error);
            });
    }
    return (
        <div className='bg-gray-50'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                            Register Form
                        </h1>
                        <form action="#" className='space-y-4 md:space-y-6'>
                            <div>
                                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900'>Name</label>
                                <input type="text" name='name' value={formData.name} onChange={handleInputChange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 ' placeholder='Enter your name' required="" />
                            </div>
                            <div>
                                <label htmlFor='Field' className='block mb-2 text-sm font-medium text-gray-900'>Field</label>
                                <input type="text" name='field' value={formData.field} onChange={handleInputChange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 ' placeholder='Enter your Field' required="" />
                            </div>
                            <div>
                                <label htmlFor='City' className='block mb-2 text-sm font-medium text-gray-900'>City</label>
                                <input type="text" value={formData.city} onChange={handleInputChange} name='city' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 ' placeholder='Enter your City' required="" />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>EmailId</label>
                                <input type="email" value={formData.emailid} onChange={handleInputChange} name='emailid' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 ' placeholder='Enter your Email' required="" />
                            </div>
                            <button type='submit' onClick={handleSubmit} className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;