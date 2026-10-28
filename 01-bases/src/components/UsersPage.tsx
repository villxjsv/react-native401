import { UserRow } from "./UserRow"

// curl \
//   "https://reqres.in/api/users?page=2"
export const UsersPage = () => {


  return (

    <>
      <h3>Usuarios</h3>

      <table className="w-[500px] bg-blue-400 rounded-xl text-black">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
          <UserRow />
          <UserRow />
        </tbody>

      </table>

      <div className="flex justify-around w-[500px] mt-2">
        <button className="p-2 bg-amber-500 text-black rounded-[5px]">Anteriores</button>
        <button className="p-2 bg-amber-500 text-black rounded-[5px]">Siguientes</button>
      </div>

    </>
  )
}