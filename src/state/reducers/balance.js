import { DEPOSIT, WITHDRAW } from 'constants/transaction-types'

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
    default:
      return state  
  }
}
