import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <p className='text-white'>© 2021 Resource Platform</p>
                </div>
                <div className='flex items-center'>
                    <Link href='#' className='text-white hover:text-gray-300 px-3 py-2'>Home</Link>
                    <Link href='#' className='text-white hover:text-gray-300 px-3 py-2'>Resources</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
