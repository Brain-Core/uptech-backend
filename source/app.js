import express from 'express';

const app = express();
// app.use('/api', require('./routes/api'));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`UP-Tech backend listening on ${port}`));