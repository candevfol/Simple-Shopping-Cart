import express from "express";
import products from "./db.js";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
    return res.send("Hello from the server!");
});


app.get('/api/products', (req, res) => {
    return res.status(200).json(products);
});

app.post('/api/checkout', (req, res) => {
    const { cart } = req.body;
    if (!cart || !Array.isArray(cart)) {
        return res.status(400).json({ success: false, message: "Invalid cart format" });
      }

    cart.forEach(item => {
        console.log(`ProductId: ${item.id}, Quantity: ${item.quantity}`);
    });
    return res.status(200).json({ success: true });
})

app.listen(3000, () => console.log("Server running on port 3000"));