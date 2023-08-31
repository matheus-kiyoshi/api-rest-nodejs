import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json()) // indica que deve ser feita a leitura do body com json

app.use(routes)

export default app
