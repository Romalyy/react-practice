import propTypes from 'prop-types';

import s from './nav-bar-menu.module.css';


const NavBarMenu = ({ items }) => {
    const listEls = items.map(({ id, text, link }) => (
        <li className={s.item} key={id}>
            <a  className={s.link} href={link}>{text}</a>
        </li>
    ));
    return <ul className={s.list}>
                {listEls}
           </ul>

}
export default NavBarMenu;

NavBarMenu.defaultProps = {
    items: []
};

NavBarMenu.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            text: propTypes.string.isRequired,
            link: propTypes.string.isRequired,
        })
    )
};

