import express from 'express';
import routes from './routes';

const app = express();

app.get("/", (req, res)=>{
  res.send("<h1>São Pio Tech !!!</h1>");
});

app.use(express.json());
app.use(routes);

export default app;
