import fs from "fs"

export const getBase64FileFromPath = (path) => {
  if (!path) {
    return null
  }

  try {
    const file = fs.readFileSync(path)
    const fileBase64 = file.toString('base64')
  
    return fileBase64
  } catch {
    return "".toString('base64')
  }
}