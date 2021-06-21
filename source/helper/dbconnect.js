import mongoose from "mongoose";
import config from 'config';

const db = mongoose.connect(config.get('uri'),{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(()=> console.log('connect with success'))
.catch(err => console.log(err));


export default db;