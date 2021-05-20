import { useContext } from "react";
import { IsMobileContext } from "../contexts/IsMobileContext";
import { MyCartContext } from "../contexts/MyCartContext";
import MiniCartItem from "./MiniCartItem";
import "../styles/MiniCart.scss";

const MiniCart = ({ mouseOver }) => {
    const { isMobile } = useContext(IsMobileContext);
    const { myCartItems } = useContext(MyCartContext);

    return myCartItems.length ? (
        <div className={`miniCart ${mouseOver ? "active" : ""} ${isMobile ? "mobile" : ""}`}>
            <ul className="miniCart-group">
                {myCartItems.map((myCartItem) => {
                    return (
                        <MiniCartItem item={myCartItem} key={myCartItem.id} />
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className={`miniCart empty ${mouseOver ? "active" : ""} ${isMobile ? "mobile" : ""}`}>
            <p className="text">Your cart is empty!</p>
        </div>
    );
};

export default MiniCart;