let x = require("express")
let app = x()

//app.use(x.urlencoded({extended : true}))
app.use(x.urlencoded({extended : true}))
app.post("/log",(req,res)=>{
    
    const {usr , pass} = req.body
    if (usr == "mawrde" && pass == "19711971") {
        res.sendFile(__dirname + "/imp.html")
    }else {
        res.sendFile(__dirname + "/no.html")
    }
})




app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/mysiteweb.html")
})

app.get("/all",(req,res)=>{
    res.sendFile(__dirname + "/all.html")
})
app.get("/index",(req,res)=>{
    res.sendFile(__dirname + "/INDEX.html")
})
app.get("/my",(req,res)=>{
    res.sendFile(__dirname + "/main.html")
})
app.get("/vimp",(req,res)=>{
    res.sendFile(__dirname + "/imp.json")
})
app.get("/hol",(req,res)=>{
    res.sendFile(__dirname + "/hol.html")
})
app.listen(3000,() =>{
    console.log("I am listen")
})
