
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/mainroutes.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: "https://appowers.in",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

const server = app.listen(process.env.port, () => {
    console.log(`App is running on port number : ${process.env.port}`)
});

export default server;