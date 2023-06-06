import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteModel from './DeleteModel';
const api = axios.create({
  baseURL: 'http://localhost:5000/api/crud'
});

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [deleteid,setDeletId] = useState(null);
  useEffect(() => {
    api.get('/')
      .then(response => {
        setItems(response.data);
      }).catch(error => {
        console.error(error);
      });
  }, []);
  const closeModal = () => setModal(false);
  const HandleDelete = async (itemId,closeModal) => {
    try {
      await api.delete(`/delete/${itemId}`);
      setItems(items => items.filter(item => item._id !== itemId));
      closeModal();
    } catch (error) {
      console.error(error);
    }
  }
  const openModal = (itemId) =>{
    setDeletId(itemId);
    setModal(true);
  }
  return (
    <section className=" p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl h px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg aria-hidden="true" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                  </div>
                  <input type="text" id="simple-search" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900" placeholder="Search" />
                </div>
              </form>
            </div>
            <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Link to="/create">
                <button type="button" className="flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-200 focus:outline-none">Add New</button>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3">Name</th>
                  <th scope="col" className="px-4 py-3">Field</th>
                  <th scope="col" className="px-4 py-3">City</th>
                  <th scope="col" className="px-4 py-3">Email Id</th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item._id} className="border-b hover:bg-slate-200 cursor-pointer">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">{item.name}</th>
                    <td className="px-4 py-3">{item.field}</td>
                    <td className="px-4 py-3">{item.city}</td>
                    <td className="px-4 py-3">{item.emailid}</td>
                    <td className="px-4 py-3">
                      <Link to={`/update/${item._id}`}>
                        <button className='bg-amber-400  px-3 py-1 rounded-xl text-sm font-medium text-black hover:bg-amber-500 focus:outline-none'>Edit</button>
                      </Link>
                    </td>
                    <td className='px-4 py-3 hover:bg-transparent'>
                      <button onClick={() => openModal(item._id)} className='bg-red-500 px-3 py-1 rounded-xl text-sm font-medium text-black hover:bg-red-600 focus:outline-none'>Delete</button>
                      {modal && deleteid == item._id && <DeleteModel itemId={deleteid} HandleDelete={HandleDelete} closeModal={closeModal}/>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </section>
  );
}
