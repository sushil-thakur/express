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

//network port
const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

