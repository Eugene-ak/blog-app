import React from 'react'
import Logo from '../constants/images/Logo';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='summary'>
                <div className='footer-about'>
                    <h3>About</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <p>
                        <strong>Email : </strong>amedioreugene@gmail.com<br />
                        <strong>Phone : </strong>0542917431
                    </p>
                </div>
                <div className='footer-quick-links'>
                    <h3>Quick Link</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Archived</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='footer-category'>
                    <h3>Category</h3>
                    <ul>
                        <li>Lifestyle</li>
                        <li>Technology</li>
                        <li>Travel</li>
                        <li>Business</li>
                        <li>Economy</li>
                        <li>Sports</li>
                    </ul>
                </div>
                <div className='footer-newsletter'>
                    <h3>Weekly Newsletter</h3>
                    <p>
                        Get blog articles and offers via email
                    </p>
                    <form>
                        <input type='email' name='email' placeholder='Input your email'/>
                        <input type='submit' name='submit' value={"Submit"} />
                    </form>
                </div>
            </div>
            <div className='copywrite'>
                <div className='first-section'>
                    <Logo />
                    <p>&copy; Copyright 2023</p>
                </div>
                <div className='second-section'>
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
