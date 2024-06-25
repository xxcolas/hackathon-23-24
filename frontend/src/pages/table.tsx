import React from "react";
import Table from "@/components/table";

const TablePage = () => {
  const data = [
    { name: "John", age: 28, city: "New York" },
    { name: "Jane", age: 22, city: "San Francisco" },
    { name: "Mike", age: 32, city: "Chicago" },
  ];
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
