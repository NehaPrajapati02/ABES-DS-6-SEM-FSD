// logo banana h image
// logo banana h image


const express = require('express');
const app = express();
const port = 8000;

app.get("/logo", (req, res) => {
    console.log("logo page is requested");
    res.send("<img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo image' width='500' height='300' />");
}                             );                                                                                        
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);   
})