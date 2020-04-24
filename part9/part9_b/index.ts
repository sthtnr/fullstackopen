import express from 'express'
const app = express()

app.get('/hello', (_req, res) => {
  res.send('hello full stack!')
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})
