import { createContext, useEffect, useState } from "react";

export const IsMobileContext = createContext();

const IsMobileContextProvider = (props) => {
    const [isMobile, setIsMobile] = useState(null);

    const checkIsMobile = () => {
        if (window.innerWidth <= 750) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        };
    };

    useEffect(() => {
        checkIsMobile();   
    }, []);

    window.addEventListener('resize', () => {
        checkIsMobile();
    });

    return (
        <IsMobileContext.Provider value={{isMobile}}>
            {props.children}
        </IsMobileContext.Provider>
    );
}
 
export default IsMobileContextProvider;