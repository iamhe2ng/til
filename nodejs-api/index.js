const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    var api_response = { "data": "0" }
    res.send(api_response)
})


app.get('/cat', (req, res) => {
    //   res.send('Hello World!')
    var api_response = { 'sounds': '야옹' }
    res.json(api_response)
})



app.get('/dog', (req, res) => {
    //   res.send('Hello World!')
    var api_response = { "sounds": "멍멍" }
    res.json(api_response)
})



app.get('/user/:id', (req, res) => {
    //   res.send('Hello World!')
    const p = req.params
    console.log(p.id)


    res.json(p)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// setTimeout(() => {
//     console.log("5초 지남")
// }, 5000)
