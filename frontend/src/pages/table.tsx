import React, { useEffect, useState } from "react"
import Table from "@/components/table"
import { getAllClient } from "@/hooks/client"

const TablePage = () => {
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
