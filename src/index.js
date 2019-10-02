const express = require('express')

const app = express()

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.use(router)

app.listen(80)
