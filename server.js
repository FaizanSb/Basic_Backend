const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Access Public folders
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about',(req,res) =>{
   // res.send("This is about page");
    res.sendFile(path.join(__dirname, 'public', 'about.html'));

})

app.get('/contact',(req,res) =>{
    res.send("This is contact page");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
