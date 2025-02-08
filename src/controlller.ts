import { Request, Response, Router } from "express";
import { connection } from "../conexao"

export const router = Router()



// INDEX
router.get("/", (request: Request, response: Response) => {
    connection.query("SELECT * FROM users", (error, result) => {
    if (error) return response.status(500).json("Erro Query")
      if(result) return response.status(200).json(
        { 
          message: "Consulta realizada com sucesso",
          data: result 
        })
  })
})



// SHOW
router.get("/show", (request: Request, response: Response) => {
  connection.query(
    `
    SELECT users.name as user, users.email, users.role, teams.name as equipe, teams.description 
    FROM users 
    INNER JOIN team_members ON users.id = team_members.user_id 
    INNER JOIN teams ON team_members.team_id = teams.id
    WHERE users.name LIKE "%${request.query.name}%"
    `
    , (error, result) => {
    if (error) return response.status(500).json("Erro Query!")
      const [ query ]: any = result
      if(!query) return response.status(401).json("Nenhum cadastro encontrado!")
        if(result) return response.status(200).json(
          { 
            message: "Consulta realizada com sucesso!",
            data: result
          })
  })
})


// CREATE
router.post("/create", (request: Request, response: Response) => {
  connection.query(
    `
    INSERT INTO users (id, name, email, password, created_at, updated_at) 
    VALUES ('0896fb1f-8a8e-4ec2-a5fd-0eb0a1c5f6', 'João','joao@email.com', 'M@nagerTi#!', '2025-02-04 14:29:46.524', '2025-02-04 16:47:09.142')
    `, (error, result) => {
  if (error) return response.status(500).json("Erro Query")
    if(result) return response.status(200).json(
      { 
        message: "Consulta realizada com sucesso",
        data: result 
      })
})
})


//UPDATE
router.patch("/update", (request: Request, response: Response) => {
  connection.query(
    `
    UPDATE users SET role = "admin" WHERE id = '0896fb1f-8a8e-4ec2-a5fd-0eb0a1c5f6'
    `, (error, result) => {
  if (error) return response.status(500).json("Erro Query")
    if(result) return response.status(200).json(
      { 
        message: "Consulta realizada com sucesso",
        data: result 
      })
})
})


// DELETE
router.delete("/delete", (request: Request, response: Response) => {
  connection.query(
    `
    DELETE FROM users WHERE id = '0896fb1f-8a8e-4ec2-a5fd-0eb0a1c5f6'
    `, (error, result) => {
  if (error) return response.status(500).json("Erro Query")
    if(result) return response.status(200).json(
      { 
        message: "Consulta realizada com sucesso",
        data: result 
      })
})
})