import React, { useState } from 'react'

const inputLastName = () => {
  const [lastName, setLastName] = useState("")
  const changeLastName = (e:any) => {
    setLastName(e.target.value)
  }
  return {lastName, changeLastName}
}

export default inputLastName
