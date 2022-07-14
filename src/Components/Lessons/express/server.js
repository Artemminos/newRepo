const express = require('express')
const cors = require('cors')

const app = express();
// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.use(cors())

const port = 3001
let users = [
    {name: 'art', pass: 123, id: 0}
]
app.get('/users', (req, res) => {
    res.send(JSON.stringify(users))
})

app.post('/users', function (req, res) {
    const {data} = req.body
    users.push(data)
    res.send(JSON.stringify(users));
});

app.patch('/users', function (req, res) {
    const {name, id} = req.body.data
    console.log(req.body)
    users.find(user => user.id === id).name = name
    res.send(JSON.stringify(users));
});
app.delete('/users', function (req, res) {
    const {id} = req.body
    users = users.filter(user => user.id !== id);
    res.send(JSON.stringify(users));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})