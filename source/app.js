import express from 'express';
import swaggerUi from 'swagger-ui-express';

import productRoute from './routes/product.route';
import partnersRoute from './routes/partner.route';
import teamRoute from './routes/team.route';
import bannerRoute from './routes/banner.route';
import cors from 'cors'
import impactRoute from './routes/impact.route';
import swaggerDoc from '../swagger.json';

const app = express();


app.use(cors());
app.use(express.json())

// products endpoints
app.use('/products', productRoute);

// partners endpoints
app.use('/partners', partnersRoute);


// team members endpoints
app.use('/teams',teamRoute)

//impacts
app.use('/impact', impactRoute)

//banner routes
app.use('/banner', bannerRoute);

// docs 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`UP-Tech backend listening on ${port}`));