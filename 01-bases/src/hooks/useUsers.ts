import { useEffect, useRef, useState, type SetStateAction } from "react"
import type { User } from "../interfaces/reqres.response"
import { loadUsersAction } from "../actions/load-users.actions"
export const useUsers = () => {

  const [users, setUsers] = useState<User[]>([])

  const currentPageRef = useRef(1)

  useEffect(() => {
    loadUsersAction(1)
      .then((users: SetStateAction<User[]>) => setUsers(users))
  }, [])

  const nextPage = async () => {
    currentPageRef.current++

    const users = await loadUsersAction(currentPageRef.current)

    if (users.length > 0) {
      setUsers(users)
    } else {
      currentPageRef.current--
    }
  }

  const previousPage = async () => {
    if (currentPageRef.current > 1) {
      currentPageRef.current--
      const users = await loadUsersAction(currentPageRef.current)
      setUsers(users)
    }
  }

  return { users, setUsers, nextPage, previousPage }
}