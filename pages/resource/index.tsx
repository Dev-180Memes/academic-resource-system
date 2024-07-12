import React, { useState, useEffect } from 'react';
import { IResource } from '@/model/resource.model';
import toast from 'react-hot-toast';
import { FaBook } from 'react-icons/fa6';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Resources = () => {
  const [resources, setResources] = useState<IResource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      const res = await fetch('/api/resource');

      if (res.status === 200) {
        const data = await res.json();
        setResources(data);
      } else {
        toast.error('Error fetching resources');
      }
    };

    fetchResources();
  }, [])

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='w-full min-h-screen'>
        <h1
          className='text-4xl font-bold text-center text-black mt-4 sm:text-5xl md:text-6xl lg:text-7xl'
        >Resources</h1>
        <ul
          className='flex flex-wrap flex-col md:flex-row px-4 sm:px-8 lg:px-10'
        >
          {resources.map((resource) => (
            <li 
              key={resource._id}
              className='flex flex-col items-center bg-white rounded-md shadow-md w-fit p-6 m-4 w-1/4'
            >
              <div
                className='p-4 text-4xl text-blue-500 bg-blue-100 rounded-full'
              >
                <FaBook 
                  className='text-blue-500'
                />
              </div>
              <div
                className='mt-4 text-center'
              >
                <h2
                  className='text-xl font-bold'
                >{resource.name}</h2>
                <p
                  className='mt-2 text-sm'
                >{resource.description.substring(0, 100)}...</p>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className='mt-2 text-blue-500 hover:underline'
                  download
                >Download</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Resources
