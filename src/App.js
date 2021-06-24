import React,{useState} from 'react';
import './App.css';
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import { GlobalProvider } from "./store/GlobalProvider"
import AddTransaction from "./Components/AddTransaction"
import TransactionList from "./Components/TransactionList"
import { IncomeExpenses } from './Components/IncomeExpenses';

function App () {
  return (
    <GlobalProvider>
    <div className="App">
      <Header />
      <main>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
      </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
