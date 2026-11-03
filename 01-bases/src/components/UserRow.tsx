import type { User } from "../interfaces/reqres.response";

interface UserRowProps {
    user: User;
}

export const UserRow = ({ user }: UserRowProps) => {
    return (
        <tr>
            <td>
                <img
                    src={user.avatar}
                    alt={`Avatar de ${user.first_name} ${user.last_name}`}
                    className="h-[50px] w-[50px] rounded-full w-14 p-2"
                />
            </td>
            <td>
                {user.first_name} {user.last_name}
            </td>
            <td>{user.email}</td>
        </tr>
    );
};