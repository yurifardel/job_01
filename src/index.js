const express = require('express')
const app = express()

app.use(express.static('./src/page'))
app.use(express.static('./src/styles'))

app.get('/', (req, res) => {
    return res.render('index.html')
})

app.listen(3000, () => console.log('express listening on port 3000'))