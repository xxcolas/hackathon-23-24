import React from "react";
import Table from "@/components/table";
import { users } from "@/mocks";
import { useAuth } from "@/hooks/auth";

const TablePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div>
      <Table data={users} />
    </div>
  );
};

export default TablePage;
