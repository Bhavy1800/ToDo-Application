const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());
app.post("/todo", function (req, res) {
 const createPayload = req.body;
 const parsePayload = createTodo.safeParse(createPayload)
 if(!parsePayload.success){
    res.status(411).json({
        msg:"you sent the wrong inputs",
    })
    return
 }
 //put it in mongodb
});
app.get("/todos", function (req, res) {
});
app.put("/completes", function (req, res) {
const updatePayload = req.body;
const parsePayload = updatePayload.safeParse(completepayload);
if(!parsePayload.success){
    res.statusCode(411).json({
      msg: "you sent the wrong inputs",
    });
    return
}
});
// with express.json() middkewares
// write basic express boilerplate code
