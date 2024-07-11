import React, { useState, useEffect } from 'react';
import { IResource } from '@/model/resource.model';
import toast from 'react-hot-toast';
import { FaBook } from 'react-icons/fa6';

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
    <div>
      <h1>Resources</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource._id}>
            <div>
              <FaBook />
            </div>
            <div>
              <h2>{resource.name}</h2>
              <p>{resource.description}</p>
              <a href={resource.url} target="_blank" rel="noreferrer">Download</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Resources
