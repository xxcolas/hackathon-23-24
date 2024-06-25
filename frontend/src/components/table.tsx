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
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => {
              console.log(header);

              return (
                <td key={header}>
                  {header === "priority" ? (
                    <div
                      style={{ backgroundColor: colorMapping[item[header]] }}
                      className="size-4 rounded-full"
                    />
                  ) : (
                    item[header]
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
