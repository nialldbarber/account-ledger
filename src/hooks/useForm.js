import { useState } from 'react'

const useForm = (initialState) => {
  const [value, setValue] = useState(initialState)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    handleChange
  }
}

export default useForm
