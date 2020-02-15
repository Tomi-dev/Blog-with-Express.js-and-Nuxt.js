// User validation file
const userValidator = require('./userValidator');

// User validation function
const validateFields = userValidator.validateGivenFields;

exports.typeValidation = (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if(!allowedTypes.includes(file.mimetype)){
        return cb('Incorrect filetype', false);
    }

    // User credentials validation, it needs to be in the fileFilter method of Multer to prevent file uploading on wrong user inputs
    const validationResults = validateFields(req.body.username, req.body.password);
    if(typeof validationResults === 'object'){
        return cb(validationResults, false);
    }

    cb(null, true);
};

exports.fileNaming = (req, file, cb) => {
    const fileNameWithExtension = file.originalname.split('.');
    const fileExtension = fileNameWithExtension[1];
    const fileNameWithoutExtension = fileNameWithExtension[0];

    cb(null, `${fileNameWithoutExtension}-${Date.now()}.${fileExtension}`);
};

exports.fileDestination = (req, file, cb) => {
    cb(null, 'profiles');
}