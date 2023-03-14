const express = require('express');
var cors = require('cors')
const app = express();
const corsOptions = {
    origin : '*'
}
const port = 3000;

const account = require("./routes/account.route");


app.use(express.json())
app.use(cors(corsOptions));
app.listen(port,()=>{
    console.log("Listening on port " + port)
});

app.use("/account", account);
app.get('/',(req,res)=>{
    res.send('<div style="width: 100%; height:100vh; display:flex; flex-direction:column;gap:1rem ; justify-content:center; place-items:center;"> <div style="width:100px; height:100px; background-color: green; border-radius:50%"></div><h1 style="font-family:sans-serif;padding:0;margin:0;"> Server is running</h1> <p style="padding:0;margin:0;font-family:sans-serif;">Ready to take your requests</p></div>');
})

