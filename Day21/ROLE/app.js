const express = require(`express`);
const bodyparser = require(`body-parser`);
const bcrypt = require(`jsonwebtoken`);
const jwt = require(`jsonwebtoken`);


const app = express();

const users = [
    { id: 1, name: "Sudeep", password: "pass1", role: "admin" },
    { id: 2, name: "Ramesh", password: "pass2", role: "user" },

];


//jwt authentication

function roleBasedAuth(role) {
    return (req, res) => {
        const token = req.header("authorization");

        if (!token) {
            return res.status(401).json({ message: "Unauthorized, token is not present" });
        }
        try {
            const decode = jwt.verify(token,'mysecretkey');
            if(decode.role !==role)
            {
                return res.status(403).json({message : "Access denied"})
            }
            req.user = decode;
            next();
        }

        catch(err){
            res.status(400).json({message : "Error"})
        }
    };
};






app.post("/register",(req,res)=>
{
    const {username,password,role} = req.body;

    const userarraylength = users.length;

    const id = userarraylength+1;  //dummy id

    bcrypt.hash(password,10,(error,hashedPasswor),()=>
    {
        if(err) 
        {
            return res.status(500).json({message :"Internal server error while hashing"})
        }

        users.push({id,username,password:hashedPassword,role});
        
        res.status(201).json({message : 'user added'})
    }
    );
}
);

//login user 

app.post(`/login`,(res,req) =>
{
    const {username,password}=req.body;
    const  user = users.find(u => u.username ===username)

    if (!user) {
        return res.status(401).json({ message: "Invalid user, authentication is failed" });
    }
    bcrypt.compare(password,user.password),(err,result)=>
    {
        if(err || !result)
        {
            
             return res.status(401).json({ message: "Authentication failed" });
            
        }

        const token = jwt.sign({id:user.id, role:user.role})
        res.json({token});
    }

})






app.get("/user", roleBasedAuth("user"), (req, res) => {
    res.json({ msg: "This is User access" })
})

app.get("/admin", roleBasedAuth("admin"), (req, res) => {
    res.json({ msg: "This is Admin access" })
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});