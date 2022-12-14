const express = require("express");
const app = express();
app.use(express.json());
  
const data = [
   { "id": 0,"name":"Tomas","age": 24},
   { "id": 1,"name":"Jane","age": 32},
   { "id": 2,"name":"Belle","age": 19}
]

  
app.get("/", function (req, res) {
    res.json(data);
});
  
app.listen(3000, function () {
    console.log("Server started on port 3000");
});