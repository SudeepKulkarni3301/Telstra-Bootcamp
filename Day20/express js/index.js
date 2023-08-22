
const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

let employee = [

    { id: 1, name: "Sudeep", dept: "HR", salary: 10000 },
    { id: 2, name: "ankit", dept: "ece", salary: 20000 },
    { id: 3, name: "aditya", dept: "vlsi", salary: 30000 },
];


app.get('/', (req, res) => { res.send("Hello world") });

app.post("/employee",(req,res)=>{
    const employees = req.body;
    employees.push(employee)
    res.status(201);
    res.send("Employee added")
})

app.get("/employee",(req,res) =>
{
    res.send(employee)
})

app.listen(port, () => { console.log(`server is running in the port ${port}`) });