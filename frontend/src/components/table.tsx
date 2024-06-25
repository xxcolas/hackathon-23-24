import React from "react";

export const colorMapping = {
  low: "#00FF00",
  medium: "#FFFF00",
  high: "#ff0000",
};
type Props<T> = { data: T[] };

const Table = ({ data }: Props<any>) => {
  const headers = Object.keys(data[0]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="overflow-x-auto p-4 w-full max-w-6xl">
        <div className="rounded-lg overflow-hidden shadow-md">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-orange-500">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  {headers.map((header) => (
                    <td key={header} className="px-6 py-4 whitespace-nowrap">
                      {header === "priority" ? (
                        <div
                          style={{
                            backgroundColor: colorMapping[item[header]],
                          }}
                          className="h-4 w-4 rounded-full"
                        />
                      ) : (
                        item[header]
                      )}
                    </td>
                  ))}
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
