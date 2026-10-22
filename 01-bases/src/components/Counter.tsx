import { useState } from "react"

export const Counter = () => {
  // Hook: Función para gestionar el estado y lógica de un componente sin usar clases.
  const [count, setCount] = useState<number>(10)

  const increaseBy = (value: number) => {
    //setCount(count + value)
    //setCount((current) => current + 1)
    setCount(Math.max(count + value, 0))
  }

  return (
    <>
      <h3 className="text-2xl">Contador: <small className="font-bold">{count}</small></h3>

      <div>
        <button
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
          onClick={() => increaseBy(1)}
        >
          +1
        </button>
        <button
          className="p-2 bg-blue-500 rounded-x2 w-10 mx-2 text-white hover:bg-blue-700"
          onClick={() => increaseBy(-1)}
        >
          -1
        </button>
      </div>
    </>
  )
}