import img_01 from "../assets/images/classic-tee.jpeg";
import { v4 as uuid } from "uuid";

export const stock = {
    item_01: {
        title: 'Classic Tee',
        price: 75,
        desc: 'Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus',
        sizes: [
            {
                size: 'S',
                id: uuid(),
            },
            {
                size: 'M',
                id: uuid(),
            },
            {
                size: 'L',
                id: uuid(),
            }
        ],
        img: img_01,
        imgAlt: 'Classic Tee',
        id: 1,
    },
};