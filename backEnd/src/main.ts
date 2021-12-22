import express from 'express'
import routes  from './routes'
import cors    from 'cors'

import './database/connection'


const app  = express()
const PORT = 8000 || process.env.PORT

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use(routes)

app.listen(PORT, () => console.log(`[server] runing in PORT ${PORT}`))
