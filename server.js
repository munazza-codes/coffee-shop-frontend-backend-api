const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Coffee Shop Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/api/menu", (req, res) => {
    res.json([
        {
            name: "Cappuccino",
            price: 450
        },
        {
            name: "Latte",
            price: 500
        },
        {
            name: "Espresso",
            price: 350
        }
    ]);
});