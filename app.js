let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened: true}))
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
 

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);

require('./route.js')(app)

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;}
let port = 8081

app.listen(port, function () {
    console.log('server running on ' + port)
})