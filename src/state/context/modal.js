import React, { createContext, useReducer } from 'react'
import { modalReducer } from 'state/reducers/modal'
import { OPEN_DEPOSIT, OPEN_WITHDRAW, CLOSE_ALL_MODALS } from 'constants/transaction-types'

const initialState = {
  depositModal: false,
  withdrawModal: false
}

export const ModalContext = createContext(initialState)

export const ModalProvider = (props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  const openDepositModal = () => dispatch({ type: OPEN_DEPOSIT })  
  const openWithdrawModal = () => dispatch({ type: OPEN_WITHDRAW })
  const closeAllModals = () => dispatch({ type: CLOSE_ALL_MODALS })

  return <ModalContext.Provider value={{ 
    depositModal: state.depositModal,
    withdrawModal: state.withdrawModal,
    openDepositModal,
    openWithdrawModal,
    closeAllModals
  }} {...props} />
}
