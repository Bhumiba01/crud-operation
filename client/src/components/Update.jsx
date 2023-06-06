import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const api = axios.create({
  baseURL: 'http://localhost:5000/api/crud'
});
const Update = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id : id,
    name: '',
    field: '',
    city: '',
    emailid: '',
  });
//api.get(`/getdata/${id}`);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/getdata/${id}`);
        console.log(response.data.getdata.name);
        if(response.data !== undefined){
          setFormData({...formData,
            name : response.data.getdata.name,
            field : response.data.getdata.field,
            city : response.data.getdata.city,
            emailid : response.data.getdata.emailid
          })
        }
      } catch (error) {
        
      }
    };
    fetchData();
}, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  console.log(formData.name);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/updatedata/${id}`,formData);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='bg-gray-50 '>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                            Update Form
                          </h1>
                          <form action="#" className='space-y-4 md:space-y-6'>
                                <div>
                                    
                                    <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900'>Name</label>
                                    <input type="text"  placeholder='Enter your name'
                                     name='name' value={formData.name} onChange={handleInputChange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 '/>
                                </div>
                                <div>
                                    <label htmlFor='Field' className='block mb-2 text-sm font-medium text-gray-900'>Field</label>
                                    <input type="text" value={formData.field} onChange={handleInputChange}
                                    name='field' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 ' placeholder="Enter your field" required=""/>
                                </div>
                                <div>
                                    <label htmlFor='City' className='block mb-2 text-sm font-medium text-gray-900'>City</label>
                                    <input type="text"  onChange={handleInputChange} value={formData.city}
                                    name='city' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 ' placeholder="Enter your city" required=""/>
                                </div>
                                <div>
                                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>EmailId</label>
                                    <input type="email" value={formData.emailid} onChange={handleInputChange}
                                    name='emailid' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                     rounded-lg focus:to-blue-600 focus:border-blue-600 block w-full p-2.5 ' placeholder='Enter your emailid' required=""/>
                                </div>
                                <button type='submit' onClick={handleSubmit} className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Update</button>
                          </form>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default Update;