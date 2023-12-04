import React from 'react';
import BlogCard from './BlogCard';

const Main = () => {
  return (
    <section>
      <h2>Latest Post</h2>
      <div className='blog-posts'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  )
}

export default Main;
