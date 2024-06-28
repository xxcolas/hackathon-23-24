import React, { useEffect, useState } from "react"
import Table from "@/components/table"
import { getAllClient } from "@/hooks/client"
import { useAuth } from "@/hooks/auth"

const TablePage = () => {
  const { auth } = useAuth()
  useEffect(() => {
    if (!auth) return
    const type = auth.type
    if (type === "PATIENT") window.location.replace(`/client?uid=${auth.id}`)
  }, [auth])

  if (!auth)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="font-bold text-4xl">Not authorized</p>
      </div>
    )
  if (auth.type === "PRACTITIONER") return <TablePageContent />
}
const TablePageContent = () => {
  const [client, setClient] = useState([])
  const fetchClients = async () => {
    const clientData = await getAllClient()
    clientData.map((client) => {
      if (!client.priority) client.priority = "undefined"
    })
    setClient(clientData)
  }

  useEffect(() => {
    fetchClients()
  }, [])

  return <Table data={client} />
}

export default TablePage
