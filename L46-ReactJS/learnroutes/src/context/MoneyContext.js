import { createContext } from "react";

const moneyContext = createContext({
    img: '',
    price: ''
});

let data = {
    img: "https://pbs.twimg.com/media/FrhhPcCX0AAIgEw.jpg",
    price: "100 Crores"
}

const MoneyContext = ({ children }) => {
    // children [ <Grandfather /> ]
    return (
        <moneyContext.Provider value={data}>
            {children}
        </moneyContext.Provider>
    );
}

export default MoneyContext
export {moneyContext}