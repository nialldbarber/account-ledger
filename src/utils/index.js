import { SAVING_REACHED, IN_OVERDRAFT } from 'constants/transaction-types'

/**
 * Get class name based on account balance
 * 
 * @param {*} balance string
 */
export const getAccountClassName = (balance) => {
  let accountClass

  if (balance >= SAVING_REACHED) {
    accountClass = SAVING_REACHED
  } else if (balance <= IN_OVERDRAFT) {
    accountClass = IN_OVERDRAFT
  } else {
    accountClass = ''
  }

  return accountClass
}

 /**
  * Returns current date in GMT
  */
export const getDayAndMonthFromDate = () => {
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1

  if (day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`

  return `${day}/${month}`
}

/**
 * Formats number to add commas where necessary
 * Function taken from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 *  
 * @param {*} number number
 */
export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
