import express from "express"
import { router } from "./controlller";

export const app = express()
app.use(express.json())
app.use(router)
const PORT = 3333


app.listen(PORT, () => 
  console.log(`server running localhost:${PORT}`)
)