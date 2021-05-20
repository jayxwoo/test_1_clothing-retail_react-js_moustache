import "../styles/MiniCartItem.scss";

const MiniCartItem = ({ item }) => {
    return (
        <div className="miniCartItem">
            <div className="img-cont">
                <img className="img" src={item.img} alt={item.imgAlt} />
            </div>
            <div className="info">
                <h5 className="title">{item.title}</h5>
                <p className="price">${item.price.toFixed(2)}</p>
                <p className="size">Size: {item.size}</p>
            </div>
        </div>
    );
}

export default MiniCartItem;