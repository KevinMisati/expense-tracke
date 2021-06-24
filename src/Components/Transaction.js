import React,{useContext} from 'react'
import classes from "./Transaction.module.css"
import { Expensecontext} from "../store/GlobalProvider"

const Transaction = ({ transaction }) => {
    const { removeTransaction } = useContext(Expensecontext)
    return (
        <>
           
        <li className={classes["list-item"]}>
            <span>{transaction.text}</span>
                <span>{transaction.amount}</span>
                <button onClick={() => {removeTransaction(transaction.id)}}>X</button>
            </li>
        </>
    )
}

export default Transaction
