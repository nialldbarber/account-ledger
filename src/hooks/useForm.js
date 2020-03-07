import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setValue] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue({ ...values, [name]: value })
  }

  const resetValues = () => setValue(initialState)

  return {
    values,
    handleChange,
    resetValues
  }
}

export default useForm
