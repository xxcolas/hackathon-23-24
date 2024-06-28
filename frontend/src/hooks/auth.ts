import { getLocalStorage } from "@/utils/localStorage"
import { AuthToken } from "@/types/index"
import { useEffect, useState } from "react"

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthToken>(null)
  useEffect(() => {
    const token = getLocalStorage("token") as AuthToken

    if (!token) return

    setAuth(token)
  }, [])

  return { auth: auth, setAuth: setAuth }
}
