import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// dbConnect()

// app.get('/', (req: Request, res: Response) => {
//   res.send('Working Successfully !')
// })

//Testing
// app.get('/', async (req: Request, res: Response) => {
//   await userService.createUser({
//     id: '999',
//     password: '1234',
//     role: 'student',
//   })
//   res.send('Working succeessfully')
// })
// Application routes
import usersRouter from './app/modules/users/users.route'

// default routes here
app.get('/', async (req: Request, res: Response) => {
  res.send('Working succeessfully')
})
//costum routes here
app.use('/api/v1/users/', usersRouter)
export default app
