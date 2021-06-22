import express from 'express';
import productRoute from './routes/product.route';
import partnersRoute from './routes/partner.route';
import teamRoute from './routes/team.route';
import path from 'path';
import impactRoute from './routes/impact.route';

const app = express();

// static file
app.use('/upload',express.static(path.join(__dirname,'upload')))

// products endpoints
app.use('/products', productRoute);

// partners endpoints
app.use('/partners', partnersRoute);


// team members endpoints
app.use('/teams',teamRoute)

//impacts
app.use('/impact', impactRoute)

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`UP-Tech backend listening on ${port}`));