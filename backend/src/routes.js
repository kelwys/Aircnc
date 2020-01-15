const express = require('express');
const multer = require('multer');
const UploadConfig = require('./config/upload');

const SessionControler = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(UploadConfig);

routes.post('/session', SessionControler.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;