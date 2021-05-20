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

    const handleMouseEnter = () => {
        setMouseOver(true);
    };

    const handleMouseLeave = () => {
        setMouseOver(false);
    };

    return (
        <header className="header">
            <div className="header-cont">
                <div className={mouseOver ? "header__btnCart-cont active" : "header__btnCart-cont"}>
                    <button className="btn-myCart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{isMobile ? (<FaShoppingCart className="header__icon-myCart icon-myCart" />) : "My Cart "}( {myCartItems.length} )</button>
                    <MiniCart mouseOver={mouseOver} />
                </div>
            </div>
        </header>
    );
}

export default Header;