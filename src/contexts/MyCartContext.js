import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const MyCartContext = createContext();

const MyCartContextProvider = (props) => {
    const [myCartItems, setMyCartItems] = useState([]);

    const addItem = (title, price, size, img, imgAlt) => {
        setMyCartItems([...myCartItems, { title, price, size, img, imgAlt, id: uuid() }]);
    };

    return (
        <MyCartContext.Provider value={{ myCartItems, addItem }}>
            {props.children}
        </MyCartContext.Provider>
    );
}

export default MyCartContextProvider;