
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/formRoutes.js';

dotenv.config();
const app = express();

// app.use(cors({
//     origin: [
//         "https://appowers.in",
//         "http://localhost:5173",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//     credentials: true
// }));

app.use(cors({
    origin: "https://appowers.in", 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// Pre-flight request handle karne ke liye (Sabse zaroori)
app.options('(.*)', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is running successfully 🚀");
});

app.use("/form", routes);

const server = app.listen(PORT,'0.0.0.0', () => {
    console.log(`App is running on port number : ${PORT}`);
});

export default server;
