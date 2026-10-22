import { useState } from "react"

export const useCounter = () => {

  const [count, setCount] = useState<number>(10)

  const increaseBy = (value: number) => {
    //setCount(count + value)
    //setCount((current) => current + 1)
    setCount(Math.max(count + value, 0))
  }

  const reset = () => {
    setCount(10)

  }





  return {

    //Propieties
    count,


    //Actions
    increaseBy,
    reset


  }
}
