import React, { useState } from 'react'

const inputFirstName = () => {
  const [firstName, setFirstName] = useState("")
  const changeFirstName = (e:any) => {
    setFirstName(e.target.value)
  }
  return {firstName, changeFirstName}
}

export default inputFirstName
