import React, { useEffect, useState } from "react";
import Table from "@/components/table";
import { getAllClient } from "@/hooks/client.js";

const TablePage = () => {
  const [client, setClient] = useState([]);


    const fetchClients = async() => {
    const clientData = await getAllClient();
    const res = await clientData.json()
    console.log(res);
    
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
