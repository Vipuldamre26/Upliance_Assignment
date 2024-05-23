import { NavLink } from 'react-router-dom';
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {

    const [mobile, setMobile] = useState(false);

    const mobileMode = () => {
        setMobile(true);
    }


    return (
        <div className="navbar">
            <div className="logo">
                Upliance
            </div>
            <div className="navitems">
                <ul>
                    <li><NavLink className='navlink' to='/counter'>Counter</NavLink></li>
                    <li><NavLink className='navlink' to='/form'>Form</NavLink></li>
                    <li><NavLink className='navlink' to='/uniqueid'>UserData</NavLink></li>
                    <li><NavLink className='navlink' to='editor'>Editor</NavLink></li>
                </ul>
            </div>
            <div className='right'>
                <div className="login">
                    <button>Login</button>
                </div>
                <div className="burger">
                    <GiHamburgerMenu onClick={mobileMode} className='burgericon ham' />
                </div>
            </div>

        
                <div className="mobile" style={ mobile ? { display: 'block' } : { display: 'none' } }>
                    <RxCross2 className='burgericon cross' onClick={() => setMobile(false)} />
                    <div className="mobile-navitems">
                        <ul>
                            <li><NavLink className='navlink' to='/counter'>Homepage</NavLink></li>
                            <li><NavLink className='navlink' to='/form'>Form</NavLink></li>
                            <li><NavLink className='navlink' to='/uniqueid'>UserData</NavLink></li>
                            <li><NavLink className='navlink' to='editor'>Editor</NavLink></li>
                        </ul>
                    </div>
                </div>

            
        </div>
    )
}


export default Navbar;