const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileValidator = require('../functions/fileValidator');

// Separate module file
const fileFilter = fileValidator.typeValidation;
const filename = fileValidator.fileNaming;
const destination = fileValidator.fileDestination;

const storage = multer.diskStorage({
    destination,
    filename
});

const upload = multer({
    storage: storage,
    fileFilter
}).single('file');

router.post('/register', (req, res, next) => {
    upload(req, res, (err) => {
        if(err) {
            return res.status(200).json(err);
        }
        const { username, password } = req.body;
        if(username.trim() === ''){
            return res.status(200).json('wtf?');
        }
    });
});

module.exports = router;