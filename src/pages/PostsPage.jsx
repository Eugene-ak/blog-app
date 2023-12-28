import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../stylesheets/blog_post.styles.css'
import Main from '../components/Main';

const PostsPage = () => {
  return (
    <body>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </body>
  )
}

export default PostsPage;
