import React from 'react'
import Grandfather from './components/Grandfather'
import MoneyContext from './context/MoneyContext'
import PropertyContext from './context/PropertyContext'

const Main = () => {
    return (
        <div>
            <MoneyContext>
                <PropertyContext>
                    <Grandfather />
                </PropertyContext>
            </MoneyContext>
        </div>
    )
}

export default Main