import { Clients } from "@/types/index";
import React, { useState } from "react";
import Message from "./Message";

export const colorMapping = {
  low: "#00FF00",
  medium: "#FFFF00",
  high: "#ff0000",
  undefined: "#aaa",
};

type Props<T> = { data: T[] };

const Table = ({ data }: Props<Clients>) => {
  const [id, setId] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const headerClassnames =
    "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider";

  const openMessage = (id) => {
    setId(id);
    setShowMessage(!showMessage);
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
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
                    <td>
                      <div onClick={() => openMessage(item._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showMessage && (
        <Message data={data} id={id} closeMessage={closeMessage} />
      )}
    </>
  );
};

export default Table;
