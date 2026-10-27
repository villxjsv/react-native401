// import { BasicTypes } from './typescript/BasicTypes'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicFunctions } from './typescript/BasicFunctions'
// import { Counter } from "./components/Counter"
// import { CounterV2 } from "./components/CounterV2"

import { UsersPage } from './components/UsersPage'

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-svh bg-gray-700">
      <h1 className="text-3xl font-bold underline text-black-500">React + TS</h1>

      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      {/* <CounterV2   /> */}
      {/* <CounterV2 /> */}
      <UsersPage />
    </div>
  )
}

export default App