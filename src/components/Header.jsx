import Logo from '../constants/images/Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <Logo />
                </div>
                <div className='nav-list'>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='SinglePostsPage/'>Single Post</NavLink></li>
                        <li><NavLink to='ContactPage/'>Contact</NavLink></li>
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
