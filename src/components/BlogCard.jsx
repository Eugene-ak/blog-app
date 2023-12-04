import React from 'react';
import BlogImage from '../constants/images/BlogImage';
import BlogPlates from '../constants/Texts/BlogPlates';

const BlogCard = () => {
    return (
        <>
            <div className='blog-card'>
                <BlogImage />
                <BlogPlates />
            </div>
        </>
    )
}

export default BlogCard;
