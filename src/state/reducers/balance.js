import { DEPOSIT, WITHDRAW, SHOW_DIFFERENCE } from 'constants/transaction-types'

export const balanceReducer = (state, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.amount.amount,
        transactions: [
          ...state.transactions, {
            id: action.amount.id,
            date: action.amount.date,
            item: action.amount.item,
            amount: action.amount.amount,
            type: action.amount.type
          }
        ]
      }
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.amount.amount,
        transactions: [
          ...state.transactions, {
            id: action.amount.id,
            date: action.amount.date,
            item: action.amount.item,
            amount: action.amount.amount,
            type: action.amount.type
          }
        ]        
      }
    case SHOW_DIFFERENCE:
      return {
        ...state, 
        difference: action.difference
      }  
    default:
      return state  
  }
}
