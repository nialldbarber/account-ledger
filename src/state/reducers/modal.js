import { OPEN_DEPOSIT, OPEN_WITHDRAW, CLOSE_ALL_MODALS } from 'constants/transaction-types'

export const modalReducer = (state, action) => {
  switch (action.type) {
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
      case CLOSE_ALL_MODALS:
        return {
          ...state,
          withdrawModal: false,
          depositModal: false
        }
    default:
      return state  
  }
}
