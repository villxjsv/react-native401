import { UserRow } from "./UserRow"

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

    </>
  )
}