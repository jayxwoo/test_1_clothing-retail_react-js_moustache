import "../styles/Item.scss";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { MyCartContext } from "../contexts/MyCartContext";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Item = ({ data }) => {
    const { addItem } = useContext(MyCartContext);
    const [smallClicked, setSmallClicked] = useState(null);
    const [mediumClicked, setMediumClicked] = useState(null);
    const [largeClicked, setLargeClicked] = useState(null);
    const [sizeSelected, setSizeSelected] = useState('');
    const [sizeAlert, setSizeAlert] = useState(false);

    const handleSizeBtn = (e) => {
        switch (e.target.innerText.toLowerCase()) {
            case 's':
                setSmallClicked(true);
                setMediumClicked(false);
                setLargeClicked(false);
                setSizeSelected('S');
                break;
            case 'm':
                setSmallClicked(false);
                setMediumClicked(true);
                setLargeClicked(false);
                setSizeSelected('M');
                break;
            case 'l':
                setSmallClicked(false);
                setMediumClicked(false);
                setLargeClicked(true);
                setSizeSelected('L');
                break;
            default:
                setSmallClicked(false);
                setMediumClicked(false);
                setLargeClicked(false);
                setSizeSelected('');
        };
    };
    const handleAddBtn = () => {
        if (!sizeSelected) {
            // alert("Please select size!");
            setSizeAlert(true);
            setTimeout(() => {
                setSizeAlert(false);
            }, 2000);
        } else {
            addItem(data.title, data.price, sizeSelected, data.img, data.imgAlt);
            setSizeSelected('');
            setSmallClicked(false);
            setMediumClicked(false);
            setLargeClicked(false);
            // alert("Added to cart");
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="item">
            <div className="item-cont">
                <div className="item__img-cont">
                    <img className="item__img" src={data.img} alt={data.imgAlt} />
                </div>
                <div className="item__info">
                    <h3 className="title">{data.title}</h3>
                    <p className="price">${data.price.toFixed(2)}</p>
                    <p className="desc">{data.desc}</p>

                    <div className="size-cont">
                        <p className="size-label">SIZE<span className="size-label-required">*</span></p>
                        <button className={smallClicked ? "size-btn s--active" : "size-btn"} onClick={handleSizeBtn}>S</button>
                        <button className={mediumClicked ? "size-btn m--active" : "size-btn"} onClick={handleSizeBtn}>M</button>
                        <button className={largeClicked ? "size-btn l--active" : "size-btn"} onClick={handleSizeBtn}>L</button>
                        <p className={sizeAlert ? "sizeAlert active" : "sizeAlert"}><FaLongArrowAltLeft className="arrowL" />Choose your size!</p>
                    </div>
                    <Button btnStyle="btn--outline" btnSize="btn--medium" className="btn-addToCart" onClick={handleAddBtn}>ADD TO CART</Button>
                </div>
            </div>
        </div>
    );
}

export default Item;