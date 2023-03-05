import React, { useEffect, useState } from 'react'

function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  // useEffect(() => {
  //   setText([...text, '추가'])
  // }, [isLoading])

  return (
    <div>
      {isLoading ? null : <>로딩 완료!</>}
      <p>{text}</p>
    </div>
  )
}

export default Loading
