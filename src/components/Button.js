import "../styles/Button.scss";

const Button = ({ children, btnStyle, btnSize, className, onClick, type }) => {
    const STYLES = ['btn--fill', 'btn--outline'];
    const SIZES = ['btn--medium', 'btn--large'];

    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    return (
        <button className={`btn ${checkBtnStyle} ${checkBtnSize} ${className}`} onClick={onClick} type={type}>{children}</button>
    );
}

export default Button;