require('dotenv').config();
import express from express
import cors from cors
import bodyParser from "body-parser";
import mongoose from "./db";
import routes from './routes'

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes());

const PORT = process.env.SERVER_PORT || 80;
app.listen(PORT, () => {console.log(`SERVER RUNNING ON PORT ${PORT}`)})
