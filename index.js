import express from "express";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(5000, () => console.log(`listening on port 5000`));
