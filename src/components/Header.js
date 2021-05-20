import "../styles/Header.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { IsMobileContext } from "../contexts/IsMobileContext";
import { MyCartContext } from "../contexts/MyCartContext";
import MiniCart from "./MiniCart.js";

const Header = () => {
    const { isMobile } = useContext(IsMobileContext);
    const { myCartItems } = useContext(MyCartContext);
    const [mouseOver, setMouseOver] = useState(false);
    const [cartBtn, setCartBtn] = useState(false);

    const handleMouseEnter = () => {
        setMouseOver(true);
    };

    const handleMouseLeave = () => {
        setMouseOver(false);
    };

    const handleClick = () => {
        setCartBtn(!cartBtn);
    };

    return (
        <header className="header">
            <div className="header-cont">
                <div className={mouseOver ? "header__btnCart-cont active" : "header__btnCart-cont"}>
                    {isMobile ? (
                        <button className="btn-myCart" onClick={handleClick}>{isMobile ? (<FaShoppingCart className="header__icon-myCart icon-myCart" />) : "My Cart "}( {myCartItems.length} )</button>
                    ) : (
                        <button className="btn-myCart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{isMobile ? (<FaShoppingCart className="header__icon-myCart icon-myCart" />) : "My Cart "}( {myCartItems.length} )</button>
                    )}
                    <MiniCart mouseOver={isMobile ? cartBtn : mouseOver} />
                </div>
            </div>
        </header>
    );
}

export default Header;