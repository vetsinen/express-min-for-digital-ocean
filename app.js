const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const port = 3000
const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', cors(), (req, res) => {
    res.send('Hello World!')
})

app.get('/products', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})