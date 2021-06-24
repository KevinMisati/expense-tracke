import React,{useContext} from 'react'
import ExpenseForm from "./AddTransaction"
import { Expensecontext } from "../store/GlobalProvider"
import classes from "./Balance.module.css"


function moneyFormatter (num) {
    let p = num.toFixed(2).split('.');
    return (
        '$ ' +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}
const Balance = () => {

    

    const { transactions } = useContext(Expensecontext)
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div className={classes.balance}>
            <h4>YOUR BALANCE</h4>
            <h1>{moneyFormatter(total)}</h1>
            
        </div>
    )
}

export default Balance
