import { createContext, useState } from "react";

const CountContext = createContext()

const CountProvider = ({children}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevData => prevData + 1)
    }

    return(
        <CountContext.Provider value={{count, increment}}>
            {children}
        </CountContext.Provider>
    )
}

export { CountContext, CountProvider };