
export default (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {...state,transactions:[action.payload,...state.transactions]}
    
        case "REMOVE_ITEM":
            return { ...state, transactions: state.transactions.filter(transaction => { return transaction.id !== action.payload }) }
        
        default:
            return state;
    };
}
