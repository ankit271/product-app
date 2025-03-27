import express from 'express';
import path from 'path';
import productRoutes from './routes/productRoutes';

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/products', productRoutes);
app.get('/', (req, res) => res.redirect('/products'));

export default app;