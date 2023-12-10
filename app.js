const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminroutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const error404controller=require('./controllers/error.js')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminroutes);
app.use(shopRoutes);

app.use(error404controller.error404page);

app.listen(3000);
