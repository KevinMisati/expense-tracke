import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"


const addItemHandler = () => {}
const removeItemHandler = () => {}

const initialState = {
   transactions:[]
}



export const Expensecontext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_ITEM",
            payload:transaction
        })
    }
    const removeTransaction = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }

    return (
        <Expensecontext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            removeTransaction
        }}>
            {children}
        </Expensecontext.Provider>
    )
}


