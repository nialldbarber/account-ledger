import { DEPOSIT, WITHDRAW } from 'constants/transaction-types'

export const balanceReducer = (state, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.amount
      }
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.amount
      }
    default:
      return state  
  }
}
