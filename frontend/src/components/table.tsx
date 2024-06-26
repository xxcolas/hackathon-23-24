import { Clients } from "@/types/index";
import React from "react";

export const colorMapping = {
  low: "#00FF00",
  medium: "#FFFF00",
  high: "#ff0000",
  undefined: "#aaa",
};
type Props<T> = { data: T[] };

const Table = ({ data }: Props<Clients>) => {
  console.log(data.map((i) => i));

  const headerClassnames =
    "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider";
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="overflow-x-auto p-4 w-full max-w-6xl">
        <div className="rounded-lg overflow-hidden shadow-md">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-blue-600">
              <tr>
                <th className={headerClassnames}>priority</th>
                <th className={headerClassnames}>email</th>
                <th className={headerClassnames}>Téléphone</th>
                <th className={headerClassnames}>Message</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-blue-100">
                  <td>
                    <div
                      style={{
                        backgroundColor: colorMapping[item.priority],
                      }}
                      className="h-4 w-4 rounded-full"
                    />
                  </td>
                  <td>{item.email}</td>
                  <td>{item.tel}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
