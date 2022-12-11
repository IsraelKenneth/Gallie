import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import "./HeaderStyles.css"
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import Logo from "../assets/Gallie_logo.png"


const Header = () => {


    const [isToggled, setIsToggled] = useState(false);



    const HandleClick = React.useCallback(
        () => setIsToggled(!isToggled)
    );



    const scrollToTop = () => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        });
    }




    return (

        <nav className="NavbarItems">
            <LinkContainer to="/">
                <Navbar.Brand ><img className='navbar-logo' src={Logo} alt='Gallie logo'></img></Navbar.Brand>
            </LinkContainer>
            <div className='menu-icons' onClick={HandleClick}>

                <i className={isToggled === false ? "fas fa-times" : 'fas fa-bars'}></i>
            </div>
            <ul onClick={HandleClick} className={isToggled === false ? "nav-menu active" : "nav-menu"} >
                {MenuItems.map((items, index) => {
                    return (


                        <li key={index}>
                            <Link onClick={scrollToTop} className={items.cName} to={items.url}><i className={items.icon}></i>{items.title}</Link>
                        </li>
                    )
                })}
                <button>Signup</button>
            </ul>
        </nav>
    )
}

export default Header
