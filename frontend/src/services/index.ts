import { url } from "@/constants"
import { User } from "@/types"

export const uploadAudioFileWithTranscript = async (
  userId: string,
  file: Blob,
  transcript: string
): Promise<User> => {
  const formData = new FormData()

  formData.append("file", file)
  formData.append("transcript", transcript)

  const options = {
    method: "PATCH",
    body: formData,
  }

  const response = await fetch(`${url}/users/${userId}`, options)
  const data = await response.json()

  return data
}
