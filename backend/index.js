const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
// mongodb://localhost:27017/?directConnection=true
connectToMongo();
const app = express()
const port = 5000


app.use(express.json())
app.use(cors());
// here available Routes

// app.get('/', (req, res) => {
//     res.send('Hello Riaz!')
// })
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
