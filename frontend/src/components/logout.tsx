import { useAuth } from "@/hooks/auth"
import { logout } from "@/utils/functions"
import React from "react"

const Logout = () => {
  const { auth } = useAuth()

  if (!auth) return null
  return (
    <button
      onClick={logout}
      className="absolute bottom-5 right-5 px-2 py-1 rounded bg-orange-500 text-white font-semibold"
    >
      Logout
    </button>
  )
}

export default Logout
