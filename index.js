const express = require ('express');
require ('dotenv').config();

let PORT = process.env.PORT;
const app = express();

app.get('/', (req, res)=> {
    res.send ('hi');
    //you can also do something like this: res.send (`<h1 style= 'color:yellow'></h1>`);
});

app.get('/search', (req, res)=>{
    console.log(req.query);
})

app.listen(process.env.PORT, ()=> {
    console.log(`listening on ${PORT}`)
});



