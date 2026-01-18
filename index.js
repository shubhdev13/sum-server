const express = require ('express');
const cors = require ('cors');
const app = express();
const port = 3000;
app.use(cors());

const todos = [{
    id : 1,
    title : "todo1",
    description : "this is todo 1",
    completed : false

} ,{
    id : 2,
    title : "todo 2",
    description : "this is todo 2",
    completed : false
}, {
    id : 3,
    title : "todo 2",
    description : "this is todo 3",
    completed : false
}, {
    id : 4,
    title : "todo 3",
    description : "this is todo 3",
    completed : false
}, {
     id : 5,
     title : "todo 4",
     description : "this is todo 5",
     completed : false 


}]
app.get('/todo', (req,res)=> {
    const todo = todos.find (t => t.id == req.query.id);
    res.json({

    });
})
app.get('/todos', (req,res)=> {
    const randomTodos = [];
    for (let i = 0; i<5; i++){
        if (Math.random()>0.5){
            randomTodos.push(todos[i])
        }
    }
    res.json({
        todos: randomTodos

    })
})
app.get ('/sum', (req,res)=> {
   const a = parseInt(req.query.a);
   const b = parseInt (req.query.b);
   const sum = a + b;
   res.send(sum.toString());
})
app.get('/interest', (req,res) => {
    const principal = parseInt (req.query.principal);
    const rate = parseInt (req.query.rate);
    const time = parseInt (req.query.time);
    const interest = (principal * time * rate)/100;
    const total = principal + interest;
    res.send ({
        total : total,
        interest : interest
    })

})
function getRandomNumber (max){
    return Math.floor(Math.random()* max);

}
app.get ('/notification' , (req,res) => {
    res.json({
        network : getRandomNumber(10),
        jobs : getRandomNumber(10),
        messaging : getRandomNumber(10),
        notification : getRandomNumber(10)

    })
})
app.listen(port,()=> {
    console.log(`the server is running on ${port}`);
})
