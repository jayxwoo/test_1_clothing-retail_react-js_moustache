import "../styles/MiniCartItem.scss";
import { MdClose } from "react-icons/md";
import { MyCartContext } from "../contexts/MyCartContext";
import { useContext } from "react";

const MiniCartItem = ({ item }) => {
    const { deleteItem } = useContext(MyCartContext);

    const handleDelete = (id) => {
        deleteItem(id);
    };

    return (
        <div className="miniCartItem">
            <div className="img-cont">
                <img className="img" src={item.img} alt={item.imgAlt} />
            </div>
            <div className="info">
                <h5 className="title">{item.title}</h5>
                <p className="price"><span className="quantity">{item.q} x </span>${item.price.toFixed(2)}</p>
                <p className="size">Size: {item.size}</p>
            </div>
            <button className="delete-btn"><MdClose className="delete-icon" onClick={(e) => handleDelete(item.id)} /></button>
        </div>
    );
}

export default MiniCartItem;