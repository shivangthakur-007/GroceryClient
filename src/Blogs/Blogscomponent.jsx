import React from 'react'
import './blogs.css'
import Blogstempalte from './Blogstemplate/Blogs.template';

function Blogscomponent() {
  return (
    <div>
      <div>
        <a href="/" className="homeafter">
          Home
        </a>
        <span className="text-[#FFB41B]">Blogs</span>
      </div>
      <>
        <Blogstempalte />
      </>
    </div>
  );
}

export default Blogscomponent
