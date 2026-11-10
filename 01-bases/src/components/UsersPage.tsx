import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
  const { users, nextPage, previousPage } = useUsers();
  console.log(users);

  return (
    <>
      <h3>Usuarios</h3>

      <table className="w-[500px] rounded-xl bg-violet-500 text-black">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className="mt-2 flex w-[500px] justify-around">
        <button
          className="rounded-[5px] bg-violet  -500 p-2 text-green-500"
          onClick={previousPage}
        >
          Anteriores
        </button>
        <button
          className="rounded-[5px] bg-violet-500 p-2 text-green-500"
          onClick={nextPage}
        >
          Siguientes
        </button>
      </div>
    </>
  );
};