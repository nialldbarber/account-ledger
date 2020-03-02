import { SAVING_REACHED, OVERDRAFT } from 'constants/transaction-types'

export const getAccountClassName = (balance) => {
  let accountClass

  if (balance >= SAVING_REACHED) {
    accountClass = SAVING_REACHED
  } else if (balance <= OVERDRAFT) {
    accountClass = OVERDRAFT
  } else {
    accountClass = ''
  }

  return accountClass
}
