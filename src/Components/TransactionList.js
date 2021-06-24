import React, { useContext } from 'react'
import { Expensecontext } from "../store/GlobalProvider"
import Transaction from "./Transaction"
import classes from "./TransactionList.module.css"

const ShowExpensesHistory = () => {
    const { transactions } = useContext(Expensecontext)
    console.log( "dddd",transactions)
    return (
        <div className={classes["transaction-list"]}>
            <h2>History</h2>
        <ul>
            {transactions.map((transaction) => {
                return <Transaction key={transaction.id} transaction={transaction} />
            })}
            
            
            </ul>
        </div>
    )
}

export default ShowExpensesHistory
