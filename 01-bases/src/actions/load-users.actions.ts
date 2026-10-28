import axios from "axios";
import type {
  User,
  UserListResponse,
} from "../interfaces/reqres.response";

export const loadUsersAction = async (
  page: number
): Promise<User[]> => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users?page=${page}`
    );

    return data.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};