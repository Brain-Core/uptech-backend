import express from 'express';
import swaggerUi from 'swagger-ui-express';
import 'dotenv/config';
import productRoute from './routes/product.route';
import partnersRoute from './routes/partner.route';
import teamRoute from './routes/team.route';
import bannerRoute from './routes/banner.route';
import cors from 'cors'
import impactRoute from './routes/impact.route';
import swaggerDoc from '../swagger.json'
import path from 'path';

const app = express();


app.use(cors());
app.use(express.json())


//
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
} else {
    app.get('/', (req,res)=>{
        res.send('Api running');
    })
}


// products endpoints
app.use('/products', productRoute);

// partners endpoints
app.use('/partners', partnersRoute);


// team members endpoints
app.use('/teams',teamRoute)

//impacts
app.use('/impacts', impactRoute)

//banner routes
app.use('/banner', bannerRoute);

// docs 
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`UP-Tech backend listening on ${port}`));