import React, { useEffect, useState } from 'react'

function Timer({ s }) {
  const [seconds, setSeconds] = useState(s)
  const [alive, setAlive] = useState(false)

  useEffect(() => {
    const countDown = setTimeout(() => {
      if (alive && seconds > 0) {
        setSeconds(seconds - 1)
      } else if (seconds === 0) {
        clearTimeout(countDown)
      }
    }, 1000)
    // component가 사라진다면
    return () => clearTimeout(countDown)
  }, [seconds, alive])

  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={() => setAlive(!alive)}>{alive ? '중지' : '시작'}</button>
    </div>
  )
}

export default Timer
