import React, { useEffect, useContext, useState } from 'react';

//import swal from '@sweetalert/with-react';

//import { OrdersContext } from '../../../dataContexts/OrdersContext';
//import { StandingContext } from '../../../dataContexts/StandingContext';
//import { CurrentDataContext } from '../../../dataContexts/CurrentDataContext';

//import { convertDatetoBPBDate, convertDatetoStandingDate } from '../../../helpers/dateTimeHelpers';

//const clonedeep = require('lodash.clonedeep')

const CartEntryItem = () => {
    /*
    const{ chosen, delivDate, ponote, route, orderTypeWhole } = useContext(CurrentDataContext)
    const { orders, setOrders } = useContext(OrdersContext)
    const { standing } = useContext(StandingContext)
    
    const [ presentedList, setPresentedList ] = useState()

   
    useEffect(() => {
    
        // Build Orders List based on delivDate and Chosen
        let BPBDate = convertDatetoBPBDate(delivDate)
        let filteredOrders = clonedeep(orders)
        let cartList = filteredOrders ? filteredOrders.filter(order => order[7] === BPBDate && order[2] === chosen) : [];
        
        // Build Standing LIst based on delivDate and Chosen
        let standingDate = convertDatetoStandingDate(delivDate);  
        let filteredStanding = clonedeep(standing)
        let standingList = filteredStanding ? filteredStanding.filter(standing => standing[0] === standingDate && standing[8] === chosen) : [];
        let convertedOrderList = standingList.map(order => [    order[2],
                                                                order[7],
                                                                order[8],
                                                                'na',
                                                                order[6],
                                                                order[2], 
                                                                order[3] !== "9999" ? true : false,
                                                                standingDate])
        
        // Compare Order List to Stand List and give Order List precedence in final list                                                        
        let orderList = cartList.concat(convertedOrderList)
        for (let i=0; i<orderList.length; ++i ){
            for (let j=i+1; j<orderList.length; ++j){
                if (orderList[i][1] === orderList[j][1]){
                    orderList.splice(j,1);
                }
            }
        }

        setPresentedList(orderList)
    }, [ chosen, delivDate, standing, orders ]);

    
    const handleQtyModify = e => {
        if(isNaN(e.target.value)){
            e.target.value = ''
            swal ({
                text: "Only Numbers Please",
                icon: "warning",
                buttons: false,
                timer: 2000
              })
        }

        let newQty = e.target.value
        let indexToFind = e.target.name
        let foundPresentedIndex = presentedList.findIndex(line => line[1] === indexToFind)
        let presentedListToModify = [...presentedList]
        presentedListToModify[foundPresentedIndex][0] = newQty

        // create deepcopy of orders
        let updatedOrders = clonedeep(orders)
        // find index of prduct, date, chosen in deep copy
        let foundOrdersIndex = updatedOrders.findIndex(line => line[1] === indexToFind && 
            line[2] === chosen && line[7] === convertDatetoBPBDate(delivDate))
        // change qty to newQty
        if(foundOrdersIndex>=0){
            updatedOrders[foundOrdersIndex][0] = newQty
            setOrders(updatedOrders)
        } else {
            // FIND PREVIOUS STANDING ORDER
            // build so list
            let standingDate = convertDatetoStandingDate(delivDate);  
            let filteredStanding = clonedeep(standing)
            let standingList = filteredStanding ? filteredStanding.filter(standing => standing[0] === standingDate && standing[8] === chosen) : [];
            let convertedOrderList = standingList.map(order => [    order[2],
                                                                order[7],
                                                                order[8],
                                                                'na',
                                                                order[6],
                                                                order[2], 
                                                                order[3] !== "9999" ? true : false,
                                                                standingDate])
            
            // find index of name
            let soSearch = convertedOrderList.findIndex(line => line[1] === indexToFind)

            // set so to so[5]
        
            let so = convertedOrderList[soSearch][0]


            let newEntry = [newQty, indexToFind, chosen, ponote, route, so, orderTypeWhole, convertDatetoBPBDate(delivDate)]
            updatedOrders.push(newEntry)
            setOrders(updatedOrders)
        }
        // set orders(updatedOrders)
        setPresentedList(presentedListToModify)  
    }
    


    const handleRemove = e => {
        let newQty = "0"
        let indexToFind = e.target.name
        let foundPresentedIndex = presentedList.findIndex(line => line[1] === indexToFind)
        let presentedListToModify = [...presentedList]
        presentedListToModify[foundPresentedIndex][0] = newQty

        // create deepcopy of orders
        let updatedOrders = clonedeep(orders)
        // find index of prduct, date, chosen in deep copy
        let foundOrdersIndex = updatedOrders.findIndex(line => line[1] === indexToFind && 
            line[2] === chosen && line[7] === convertDatetoBPBDate(delivDate))
        // change qty to newQty
        if(foundOrdersIndex>=0){
            updatedOrders[foundOrdersIndex][0] = newQty
            setOrders(updatedOrders)
        }
        // set orders(updatedOrders)
        setPresentedList(presentedListToModify)  
    }
    
    */

    return (
        <React.Fragment> 
            <label>PRODUCT</label>
            <label>QTY</label>
            <label>PREV</label>
            <label></label>
            {/*
            {presentedList ? presentedList.map(order => 

                order[0] === convertDatetoBPBDate(delivDate) && order[0] === "0" && order[5] === "0" ? 

                <React.Fragment key={order[1]+"a"}></React.Fragment> :

                <React.Fragment key={order[1]+"b"}>
                    <label key={order[1]}>{order[1]}</label>   
                    <input  type="text" 
                            size="4"
                            maxLength="5"
                            key={order[1]+"c"} 
                            id={order[1]+"item"} 
                            name={order[1]} 
                            placeholder={order[0]} 
                            onKeyUp={e => {handleQtyModify(e)}}
                            onBlur={(e) => {
                                
                                e.target.value = ''
                                
                            }}
                            >
                    </input>
                    <label key={order[1]+"d"} className="previous">{order[5] === order[0] ? '' : order[5]}</label>
                    <button onClick={e => {handleRemove(e)}} 
                            key={order[1]+"e"} 
                            name={order[1]}
                            id={order[1]}>
                                
                                REMOVE
                                
                    </button>
                </React.Fragment> 
                        ) : ''}  */}
        </React.Fragment>
        
    )
};

export default CartEntryItem