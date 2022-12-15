import React, {useState} from 'react';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import ToscaLogo from '../../../assets/images/Tosca logo.jfif';

const Navbar = (props) => {
    const [navbarBackground, setNavbarBackground] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 200) {
            setNavbarBackground(true);
        } else {
            setNavbarBackground(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <header className={navbarBackground ? 'Navbar active' : 'Navbar'}>
            <nav className="Navbar__navigation">
                <div className="Hamburger__icon">
                        <MenuIcon  onClick={props.drawerClickHandler}/>
                </div>
                <div className="Navbar__logo">
                    <a href="/"><img  src={ToscaLogo} alt="Tosca Logo"/></a>
                </div>
                <div className="Spacer"/>
                <div className="Navbar__navigation-items">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/despre">HAPPY HOUR</a></li>
                        <li><a href="https://drive.google.com/file/d/1vxh6fyfZyCzeHBTYQVhFADcG6Z5gLYGk/view" 
                            rel='noopener noreferrer'
                            target="_blank">MENU</a>
                        </li>
                        <li><a href="/galerie">GALERIE</a></li>
                        <li><a href="/evenimente">EVENIMENTE</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;