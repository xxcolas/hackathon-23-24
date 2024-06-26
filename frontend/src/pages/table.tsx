import React from "react";
import Table from "@/components/table";
// @ts-ignore
import { users } from "@/mocks";
import { useAuth } from "@/hooks/auth";

const TablePage = () => {
  return <Table data={users} />;
};

export default TablePage;
