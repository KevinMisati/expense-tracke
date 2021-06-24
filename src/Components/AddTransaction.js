import React, { useRef, useContext,useState } from 'react'
import { Expensecontext} from "../store/GlobalProvider"
import classes from "./AddTransaction.module.css"

const AddTransaction = () => {
    const { addTransaction } = useContext(Expensecontext)
    const [text,setText] = useState("")
    const [amount,setAmount] = useState(0)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random() * 1000000),
            text:text,
            amount:+amount
        }
        addTransaction(newTransaction)
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new transaction</h2>
            <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <input
                value={text}
                id="text"
                type="text"
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className={classes.control}>
            <label htmlFor="amount">Amount </label>
            <input
                value={amount}
                id="amount" type="number"
                onChange={(e) => setAmount(e.target.value)}
            />
            </div>
            <button className={classes.btn}>Add transaction</button>
        </form>
    )
}

export default AddTransaction
