import "../styles/Item.scss";
import Button from "../components/Button"

const Item = ({ data }) => {
    return (
        <div className="item">
            <div className="item-cont">
                <div className="item__img-cont">
                    <img className="item__img" src={data.img} alt={data.imgAlt} />
                </div>
                <div className="item__info">
                    <h3 className="item__info-title title">Classic Tee</h3>
                    <p className="item__info-price price">${data.price.toFixed(2)}</p>
                    <p className="item__info-desc desc">{data.desc}</p>
                    <div className="item__info-size-cont size-cont">
                        <p className="item__info-size-label size-label">SIZE<span className="item__info-size-label-required size-label-required">*</span></p>
                        {data.sizes.map((size) => {
                            return (
                                <button className="item__info-size-btn size-btn" key={size.id}>{size.size}</button>
                            )
                        })}
                    </div>
                    <Button btnStyle="btn--outline" btnSize="btn--medium" className="item__info-btn-addToCart btn-addToCart">ADD TO CART</Button>
                </div>
            </div>
        </div>
    );
}

export default Item;