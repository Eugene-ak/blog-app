import React from 'react'
import Logo from '../constants/images/Logo';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <Logo />
                </div>
                <div className='nav-list'>
                    <ul>
                        <li><a href='./pages/HomePage'>Home</a></li>
                        <li><a href='./pages/BlogPage'>Blog</a></li>
                        <li><a href='./pages/SinglePostsPage'>Single Post</a></li>
                        <li><a href='./pages/PostsPage'>Posts</a></li>
                        <li><a href='./pages/contactPage'>Contact</a></li>
                    </ul>
                </div>
                <div className='nav-search'>
                    <input className='search-bar' type='text' name='search' placeholder='Search' />
                    <button className='color-mode-btn'><button></button></button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
