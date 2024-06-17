import React, { createContext } from 'react'

const propertyContext = createContext({
    address: '',
    area: ''
});

let propertyData = {
    address: "Mumbai",
    area: "1000 sqft"
}


const PropertyContext = ({children}) => {
    return (
        <propertyContext.Provider value={propertyData}>
            {children}
        </propertyContext.Provider>
    )
}

export default PropertyContext
export {propertyContext}