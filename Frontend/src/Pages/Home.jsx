import React, { useEffect, useState } from 'react';
import LatestPost from '../Components/LatestPost';
import { get } from '../services/Endpoint';

export default function Home() {

const [res, setres] = useState(0)
  useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const request = await get('/blog/GetPosts');
           setres(1)
           
        } catch (error) {
            console.log(error);
        }
    };
    fetchBlogs();
}, []);

  return (
    <>
      <div className="container-fluid bg-dark hero-section text-center">
        <h1 className="fs-1 fw-bold text-light">WELCOME TO MY BLOG</h1>
        <p className="text-light fs-5 mt-3">
          Dive into a world of creativity, insights, and inspiration. Discover the extraordinary in the ordinary.
        </p>
      </div>

<div className='container-fluid bg-dark  p-5'>

<LatestPost />

  {/* {(res==1)?():
  (<div class="text-white d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>)
  }
     */}
  
</div>
    </>
  );
}
