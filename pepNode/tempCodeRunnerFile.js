import express from 'express';
const app = express();

const PORT = proces.argv[2] ; // it is like array working port 8080, 8081, 8082 , it is helping in load balancer

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/",(req, res)=>{
    res.send(`This server is running on port ${PORT}`);
})