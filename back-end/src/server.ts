'use strict';

import express from 'express';
import routes from "./routes";
import path from "path";
// Constants
const PORT = 8080;
const HOST = '127.0.0.1';


// App
const app = express();
app.use(express.json())

app.use(routes)
app.use("/assets",express.static(path.resolve(__dirname, ".." ,"assets")));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} ...`); 