import React from 'react';

import { CustomerLoad, CustomerProvider } from './dataContexts/CustomerContext'

import CalendarApp from './components/calendarApp'
import CurrentOrderInfo from './components/currentOrderInfo'
import CurrentOrderList from './components/currentOrderList'
import OrderCommandLine from './components/orderCommandLine'
import OrderEntryButtons from './components/orderEntryButtons'
import RecentOrderList from './components/recentOrderList';


import './App.css';





function App() {

  return (
    
    <CustomerProvider>

    <CustomerLoad />
    <div className = "mainContainer">
      <div className = "calendarContainer">
        <CalendarApp />
      </div>
      <div className = "centralContainer">
        <OrderCommandLine />
        <CurrentOrderInfo />  
        <CurrentOrderList />  
        <OrderEntryButtons />
      </div> 
      <div className = "rightContainer">
        <RecentOrderList />
      </div> 
    </div>
    </CustomerProvider>       
  );
}

export default App;