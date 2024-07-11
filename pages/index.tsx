import React, { useState, useEffect } from 'react'
import { UploadDropzone } from '@uploadthing/react'
import toast from 'react-hot-toast'

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="filename">Filename</label>
          <input
            type="text"
            id="filename"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <UploadDropzone
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
            <p>No file uploaded</p>
          ) : (
            <p>File uploaded: {uploadedFile}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Home
