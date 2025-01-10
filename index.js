import express from 'express';

//backend app
const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.post('/user/add', (req, res) => {
    
    return res.send('I am from post and hello. hrhr');
});
app.post("/student/add", (req, res) => {
    return res.status(200).send("Student added successfully");
});
app.put("/student/update", (req, res) => {
    return res.status(200).send("Student updated successfully");
});

app.delete("/student/delete", (req, res) => {
    return res.status(200).send("Student deleted successfully");
});

//?create an api to insert course
app.post("/course/add",(req,res)=>{
    return res.status(200).send({messsage:"Course added successfully"});
});

app.delete("/course/delete",(req,res)=>{
    return res.status(200).send({messsage:"Course deleted successfully"});
});

app.put("/course/update",(req,res)=>{
    return res.status(200).send({messsage:"Course update successfully"});
});


app.get("/product/list",(req,res)=>{
    return res.status(200).send({messsage:"product list successfully"});
});
//network port
const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

