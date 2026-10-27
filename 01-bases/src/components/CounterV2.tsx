import { useCounter } from "../hooks/useCounter"

export const CounterV2 = () => {


  const { count, increaseBy, reset } = useCounter()

  return (
    <>
      <h3 className="text-2xl">Contador: <small className="font-bold">{count}</small></h3>

      <div>
        <button
          className="p-2 bg-white-500 rounded-xl w-10 mx-2 text-black hover:bg-red-700"
          onClick={() => increaseBy(1)}

        >
          +1
        </button>
        <button
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-black  hover:bg-red-700"
          onClick={() => increaseBy(-1)}

        >
          -1
        </button>

        <button
          className="p-2 bg-blue-500 rounded-xl w-15 mx-2 text-black hover:bg-red-700"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  )
}