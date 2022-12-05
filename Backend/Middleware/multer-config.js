const multer = require('multer');

//definition of the different image file extensions
const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png'
}

// constant needed to configure multer so it knows where to save the files
const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, 'images');
    },
    filename : (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension); 
    }
});

module.exports = multer({ storage : storage }).single('image')