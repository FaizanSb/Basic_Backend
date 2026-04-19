const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Access Public folders
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about',(req,res) =>{
   // res.send("This is about page");
    res.sendFile(path.join(__dirname, 'public', 'about.html'));

})

app.get('/contact',(req,res) =>{
    // res.send("This is contact page");
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})

app.get('/user',(req,res) =>{
    // res.send("This is user page");
    res.sendFile(path.join(__dirname, 'public', 'user.html'));
})

//
app.get("/api/users",(req,res) =>{
    res.json({
        name: "Muhammad Faizan",
        age: 30,
        email: "muhammadfaizan4154@gmail.com"
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
