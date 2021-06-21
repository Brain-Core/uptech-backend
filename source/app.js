import express from 'express';
import productRoute from './routes/product.route';

const app = express();
app.use('/products', productRoute);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`UP-Tech backend listening on ${port}`));