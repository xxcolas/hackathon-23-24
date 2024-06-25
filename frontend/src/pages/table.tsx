import React from "react";
import Table from "@/components/table";
import { users } from "@/mocks";

const TablePage = () => {
  return (
    <div>
      <Table data={users} />
    </div>
  );
};

export default TablePage;
