import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full'>
        <nav className=''>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <h2 className='text-2xl font-bold text-gray-900'>Resource Platfrom</h2>
                        </div>
                    </div>

                    <div className='hidden sm:block sm:ml-6'>
                        <div className='flex space-x-4'>
                            <Link href='/' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
                            <Link href='/resource' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Resources</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
