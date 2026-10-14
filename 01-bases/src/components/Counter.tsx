import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(10)
  return (
    <>
      <h3>Contador: <small>{count}</small></h3>

      <div>
        <button>+1</button>
      </div>
    </>
  )
}