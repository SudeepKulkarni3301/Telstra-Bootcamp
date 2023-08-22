const express = require(`express`);
const jwt = require(`jsonwebtoken`);
const router = express.Router();

//Dummy user 
const users = [
    {id:1,name:"Sudeep",password:"pass1"},
    {id:2,name:"Ramesh",password:"pass2"},
    {id:3,name:"Sankalp",password:"pass3"},
];

//User login and it will authenticate

router.post('/login',(req,res)=>
{
 const {username,password} = req.body;

//checking valid user
const userref = users.find(
     (u) =>u.name === username && u.password === password);
if(!userref)
{
    return res.sendStatus(401).json({message : "Invalid username or password"});
}
const token = jwt.sign({sub:userref.id} ,"mysecretkey");
res.json({token});
});

module.exports = router;