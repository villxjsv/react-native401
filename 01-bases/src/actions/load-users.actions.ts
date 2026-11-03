import axios from "axios";
import type {
  User,
  UserListResponse,
} from "../interfaces/reqres.response";
import { fallbackUsers } from "../data/fallback-users";

export const USERS_PER_PAGE = 6;

export const loadUsersAction = async (
  page: number
): Promise<User[]> => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users?page=${page}`
    );

    return data.data;
  } catch (error) {
    console.warn(
      "No se pudo consultar ReqRes (probablemente se agotó el límite diario). " +
      "Se usarán los usuarios locales.",
      error
    );

    const start = (page - 1) * USERS_PER_PAGE;
    return fallbackUsers.slice(start, start + USERS_PER_PAGE);
  }
};
