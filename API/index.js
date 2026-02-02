
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/mainroutes.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: [
        "https://appowers.in",
        "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

app.options("*", cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running successfully 🚀");
});

const server = app.listen(PORT, () => {
    console.log(`App is running on port number : ${PORT}`);
});

export default server;