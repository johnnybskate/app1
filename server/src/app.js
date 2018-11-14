console.log(20)
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const app = express();
app.use(morgan('combined'))
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get('/status', (req,res)=> {
    res.send({
        message: 'helloworld'
    })
})

app.post('/register', (req,res)=> {
    res.send({
        message: `Hello ${req.body.email}! User registered!`

    })
})

app.listen(process.env.PORT || 8081)
// APP ID: 432637970601508