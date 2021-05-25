import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const MyCartContext = createContext();

const MyCartContextProvider = (props) => {
    const [myCartItems, setMyCartItems] = useState([]);
    const [totalNum, setTotalNum] = useState(0);

    const addItem = (title, price, size, img, imgAlt) => {
        let sameSizeItem = myCartItems.find((item) => {
            return item.size === size;
        });

        if (sameSizeItem) {
            sameSizeItem.q += 1;
            setTotalNum(totalNum + 1);
        } else {
            setMyCartItems([...myCartItems, { title, price, size, img, imgAlt, q: 1, id: uuid() }]);
            setTotalNum(totalNum + 1);
        };
        
        sameSizeItem = null;
    };

    const deleteItem = (id) => {
        let item = myCartItems.find((item) => {
            return item.id === id;
        });

        if (item.q > 1) {
            item.q -= 1;
            setTotalNum(totalNum - 1);
        } else {
            const update = myCartItems.filter((item) => {
                return item.id !== id;
            });
            setMyCartItems(update);
            setTotalNum(totalNum - 1);
        };

        item = null;
    };

    return (
        <MyCartContext.Provider value={{ myCartItems, totalNum, addItem, deleteItem }}>
            {props.children}
        </MyCartContext.Provider>
    );
}

export default MyCartContextProvider;