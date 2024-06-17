import React, { createContext } from 'react'
import Grandfather from './components/Grandfather'
import './App.css'

// 1. Create a context here...
const moneyContext = createContext({
  img: '',
  price: ''
});
// Provider and Consumer issi context ki help se create hote hai
// Provider: Data ko provide karta hai
// Consumer: Data ko consume karta hai, but consumer toh koi successor hoga
// Consumer create hoga inside the component that is going to use the Data, to 
// us component ko createContext ki need padegi, thus we need to export `moneyContext`

let data = {
  img: "https://pbs.twimg.com/media/FrhhPcCX0AAIgEw.jpg",
  price: "100 Crores"
}

// 2. Creating another context
const propertyContext = createContext({
  address: '',
  area: ''
});

let propertyData = {
  address: "Mumbai",
  area: "1000 sqft"
}

const App = () => {
  return (
    <>
      {/* Provider ke andar jis bhi component ko wrap krenge, uske children
    sabhi components ko access milega context ki value ka */}
      <moneyContext.Provider value={data}>
        <propertyContext.Provider value={propertyData}>
          <Grandfather />
        </propertyContext.Provider>
      </moneyContext.Provider>
    </>
  )
}

export default App
// Export the context so that who so ever wants the data, can use this context
// to get access to the data passed in the value key
export { moneyContext, propertyContext }