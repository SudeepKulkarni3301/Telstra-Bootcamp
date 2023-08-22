const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();

app.use(bodyParser.json());
app.use("/api/auth",require(`./routes/auth`));




const port = 3000;
app.listen(port,() =>
{
    console.log(`Server started at port ${port}`);
});