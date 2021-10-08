import mongoose from "mongoose";


mongoose.connect(process.env.uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=> console.log('connect with success'))
.catch(err => console.log(err));


export default mongoose;