import propTypes from 'prop-types';

import s from './button.module.css';

const Button = ({ text, outline, type }) => {
    const classBtn = outline ? s.lightBtn : s.darkBtn;
    return <button className={classBtn}>{ text }</button>
}

Button.defaultProps = {
    outline: false,
    type: "button"
}

Button.propTypes = {
    text: propTypes.string.isRequired,
    outline: propTypes.bool,
    type: propTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button;