// import express from 'express'
import { Router } from 'express'

import { createUser, getAllUser } from './users.controller'
// const router = express.Router()
const router: Router = Router()

router.post('/createuser', createUser)
router.get('/getall', getAllUser)

export default router
