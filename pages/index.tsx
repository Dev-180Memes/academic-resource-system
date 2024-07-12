import React, { useState, useEffect } from 'react'
import { UploadDropzone } from '@uploadthing/react'
import toast from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'

const Home = () => {
  const [filename, setFilename] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [uploadedFile, setUploadedFile] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: filename,
      description,
      url,
    }

    const res = await fetch('/api/resource', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status === 201) {
      toast.success('Resource created successfully')
    } else {
      toast.error('Error creating resource')
    }
  }

  return (
    <div className='w-full min-h-full'>
      <Navbar />
      {/* Hero section for academic resource platform with button linking to add resource and to download resources */}
      {/* with content and its description */}
      <div
        className='flex flex-col items-center justify-center w-full min-h-screen text-black bg-gradient-to-r from-blue-400 to-blue-500 px-2 sm:px-6 lg:px-8'
      >
        <h2
          className='text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl'
        >Get open sourced academic resources, notes and past questions</h2>
        <p
          className='mt-4 text-lg text-center text-white sm:text-xl md:text-2xl lg:text-3xl'
        >Download resources for free</p>
        {/* Buttons with diffrent colors */}
        <Link 
          href='/resources'
          className='px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600'
        >
          Download resources
        </Link>
        <p
          className='mt-4 text-lg text-center text-white sm:text-xl md:text-2xl lg:text-3xl'
        >Upload resources to help others</p>
      </div>

      {/* Form for uploading resources with plain background */}
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'
      >
        <h2 className='text-2xl font-bold text-gray-900'>Upload a resource</h2>
        <div
          className='flex flex-col items-center justify-center w-full max-w-md p-4'
        >
          <label
            className='text-gray-900 font-bold' 
            htmlFor="filename"
          >Filename</label>
          <input
            type="text"
            id="filename"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            className='w-full px-2 py-1 mt-2 border border-gray-300 rounded-md'
          />
        </div>
        <div
          className='flex flex-col items-center justify-center w-full max-w-md p-4 h-1/2'
        >
          <label
            className='text-gray-900 font-bold' 
            htmlFor="description"
          >Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full px-2 py-1 mt-2 border border-gray-300 rounded-md'
          />
        </div>
        <div
          className='flex flex-col items-center justify-center w-full max-w-md p-4'
        >
          <UploadDropzone
            className='w-full px-2 py-1 mt-2 border border-gray-300 rounded-md'
            endpoint="fileUploader"
            onClientUploadComplete={(res : any) => {
              setUrl(res[0].url)
              setUploadedFile(res[0].name)
            }}
            onUploadError={() => {
              toast.error('Error uploading file')
            }}
          />
          {uploadedFile === '' ? (
            <p
              className='mt-2 text-gray-900'
            >No file uploaded</p>
          ) : (
            <p
              className='mt-2 text-gray-900'
            >File uploaded: {uploadedFile}</p>
          )}
        </div>
        <div
          className='flex flex-col items-center justify-center w-full max-w-md p-4'
        >
          <button
            className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600' 
            type="submit"
          >Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Home
