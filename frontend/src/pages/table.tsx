import React, { useEffect, useState } from "react";
import Table from "@/components/table";
import { getAllClient } from "@/hooks/client.js";

const TablePage = () => {
  const [client, setClient] = useState([]);

  async function fetchClients() {
    const clientData = await getAllClient();
    setClient(clientData);
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <Table data={client} />
    </div>
  );
};

export default TablePage;
