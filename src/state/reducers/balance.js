import { DEPOSIT, WITHDRAW, OPEN_DEPOSIT, OPEN_WITHDRAW } from 'constants/transaction-types'

export const balanceReducer = (state, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + parseInt(action.amount)
      }
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - parseInt(action.amount)
      }
      case OPEN_DEPOSIT:
        return {
          ...state,
          depositModal: true,
          withdrawModal: false
        }
      case OPEN_WITHDRAW:
        return {
          ...state,
          withdrawModal: true,
          depositModal: false
        }
    default:
      return state  
  }
}
