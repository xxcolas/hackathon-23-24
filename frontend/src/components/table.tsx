import { User } from "@/types/index"
import React from "react"
import Message from "./Message"
import { useSearchParams } from "react-router-dom"
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline"

export const colorMapping = {
  low: "#00ff6a",
  medium: "#f5d507",
  high: "#f54e25",
  undefined: "#aaa",
}
const PatientState = ({ state }: { state: string }) => {
  switch (state) {
    case "anxious":
      return (
        <div className="bg-purple-100 text-purple-400 border border-purple-300 px-2 text-sm rounded-2xl flex justify-center items-center">
          Anxieux
        </div>
      )
    case "stable":
      return (
        <div className="bg-green-100 text-green-400 border border-green-300 px-2 text-sm rounded-2xl flex justify-center items-center">
          Stable
        </div>
      )
    case "angry":
      return (
        <div className="bg-red-100 text-red-400 border border-red-300 px-2 text-sm rounded-2xl flex justify-center items-center">
          En colère
        </div>
      )
    case "sad":
      return (
        <div className="bg-blue-100 text-blue-400 border border-blue-300 px-2 text-sm rounded-2xl flex justify-center items-center">
          Triste
        </div>
      )

    default:
      return (
        <div className="bg-gray-100 text-gray-400 border border-gray-300 px-2 text-sm rounded-2xl flex justify-center items-center">
          Non défini
        </div>
      )
  }
}

type Props<T> = { data: T[] }

const Table = ({ data }: Props<User>) => {
  let [searchParams, setSearchParams] = useSearchParams()

  const headerClassnames = "px-6 py-3 text-left w-fit"

  const showMessage = searchParams.get("id") !== null

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8 ">
        <table className="rounded-lg  shadow-md mx-auto table-auto divide-y divide-gray-200 bg-white">
          <thead className="bg-blue-600 text-white uppercase font-medium text-xs">
            <tr>
              <th className={headerClassnames}>Priorité</th>
              <th className={headerClassnames}>Etat</th>
              <th className={headerClassnames}>Prénom</th>
              <th className={headerClassnames}>Email</th>
              <th className={headerClassnames}>Téléphone</th>
              <th className={headerClassnames}>Message</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-blue-100 text-gray-800">
                <td className="flex justify-center items-center">
                  <div
                    style={{
                      backgroundColor: colorMapping[item.priority],
                    }}
                    className="h-4 w-4 rounded-full"
                  />
                </td>
                <td>
                  <PatientState state={item.psychological_state} />
                </td>
                <td className={headerClassnames}>{item.firstname}</td>
                <td className={headerClassnames}>{item.email}</td>
                <td className={headerClassnames}>{item.tel}</td>
                <td className="flex justify-center items-center">
                  <div
                    className="hover:bg-gray-100 rounded p-1 mt-2 hover:cursor-pointer"
                    onClick={() => setSearchParams({ id: item._id })}
                  >
                    <ChatBubbleLeftIcon className="size-4" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showMessage && <Message data={data} />}
    </>
  )
}

export default Table
