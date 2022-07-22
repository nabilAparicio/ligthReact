import React from 'react'
import { useState } from 'react'
import LigthOn from './ligthOn'
import LigthOff from './ligthOff'

export const Bulb = () => {
  const [toggle, setToggle] = useState(true)
  const handleToggle = () => setToggle(!toggle)
  return (
    <div>
      {toggle ? <LigthOn /> : <LigthOff />}
      <button onClick={handleToggle}>
        {toggle ? 'on' : 'off'}
      </button>
    </div>
  )
}
