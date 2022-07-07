import s from './nav-bar.module.css';

import NavBarMenu from './NavBarMenu/NavBarMenu';
import Button from '../shared/components/Button/Button';
import Logo from '../shared/components/Logo/Logo';

import menu from '../db/menu.json'


const NavBar = () => {
    return (
        <>
            <nav className={s.nav}>
                <div className={`container ${s.row}`}>
                    <NavBarMenu items={menu} />
                     <Logo />
                    <Button text="Buy"/>
                   
                </div>
                 
            </nav>
           
        </>
)
}

export default NavBar;