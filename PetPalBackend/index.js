require('dotenv').config();
require('module-alias/register')
const express = require('express');
const { default: mongoose } = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const corsConfig = require('./App/Config/corsConfig');
const fileUpload = require('express-fileupload');
const http = require('http');
const { readdirSync } = require('fs');
const { resSender } = require('./App/Helpers');
const app = express();
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cors(corsConfig))
app.use(morgan('dev'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));

// Routes
app.get('/',(req, res) => {
    res.send('Welcom to PetPal Api');
})

readdirSync('./App/Routes').map((r) => 
    app.use('/api/', require(`./App/Routes/${r}`))
);

// Handle unknown routes
app.use((req, res, next) => {
    resSender(res, 404, 'Route not found', 'error');
})

// Database Connection
mongoose.connect(process.env.DATABASE_URI).then(()=> {
    console.log('Connected to DB');
    server.listen(PORT,() => {
        console.log(`Server Listening on Port: ${PORT}`);
    });
}).catch((error)=> {
    console.log('DB Connection Error: ', error);
})
