import express from 'express';
// import Home from "./src/Pages/Home"

const app = express();

// app.get("/", (re, res) => {
//     res.send("<Home />")
// });

app.listen(3000, () => {
    console.log("server is runnig on port 3000");
}); 