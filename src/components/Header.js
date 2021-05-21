import "../styles/Header.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { IsMobileContext } from "../contexts/IsMobileContext";
import { MyCartContext } from "../contexts/MyCartContext";
import MiniCart from "./MiniCart.js";

const Header = () => {
    const { isMobile } = useContext(IsMobileContext);
    const { totalNum } = useContext(MyCartContext);
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
    
    window.addEventListener('resize', () => {
        if (!isMobile) {
            setCartBtn(false);
        };
    });

    return (
        <header className="header">
            <div className="header-cont">
                <div className={mouseOver ? "btnCart-cont active" : "btnCart-cont"}>
                    {isMobile ? (
                        <button className="btn-myCart" onClick={handleClick}>{isMobile ? (<FaShoppingCart className="icon-myCart" />) : "My Cart "}( {totalNum} )</button>
                    ) : (
                        <button className="btn-myCart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{isMobile ? (<FaShoppingCart className="icon-myCart" />) : "My Cart "}( {totalNum} )</button>
                    )}
                    <MiniCart mouseOver={isMobile ? cartBtn : mouseOver} />
                </div>
            </div>
        </header>
    );
}

export default Header;