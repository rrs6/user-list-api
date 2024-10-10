import express, { RequestHandler } from "express";
import { dataSource } from '../db/connection';
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";
import errorHandler from "./errorMiddleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/api',routes);
app.use(errorHandler as any);
const port = 3000;

dataSource.initialize().then(() => {
    console.log("Connection has been succeded.");
    app.listen(port, () => {
        console.log("Server is running on port "+ port);
    })
}).catch((err) => {
    console.log(err);
})

export default app;
