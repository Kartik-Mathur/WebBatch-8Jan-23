import React, { useContext } from 'react'
import { moneyContext} from '../context/MoneyContext';
import { propertyContext } from '../context/PropertyContext';
// import { moneyContext, propertyContext } from '../App';


const Child = () => {
    const data = useContext(moneyContext);
    const val = useContext(propertyContext);

    return (
        <div>
            <h2>I am just a Baby!</h2>
            <div>{data.price}</div>
            <img src={data.img} />

            <h3>Property Details</h3>

            <div>{val.address}</div>
            <div>{val.area}</div>
        </div>
    )
}
// const Child = () => {
//     return (
//         <div>
//             <h2>I am just a Baby!</h2>
//             <moneyContext.Consumer>
//                 {(data) => <>
//                     <div>{data.price}</div>
//                     <img src={data.img} />
//                     <h3>Property Details</h3>
//                     <propertyContext.Consumer>
//                         {(val)=>{
//                             return <>
//                                 <div>{val.address}</div>
//                                 <div>{val.area}</div>
//                             </>
//                         }}
//                     </propertyContext.Consumer>
//                 </>
//                 }
//             </moneyContext.Consumer>
//         </div>
//     )
// }

export default Child