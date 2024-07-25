const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello suman");
});

app.get("/about", (req, res) => {
    res.send("about");
});

app.get("/health",(req, res) => {
    res.send("OK");
})
app.listen(PORT, () => {
    console.log(`example app listening on port ${PORT}`);
});