const upload = require('../../multer')

const uploadfile = (req, res) => {
    console.log('Uploaded File Details:', req.file);
    console.log(req.file);  // File information
    console.log(req.body);  // Additional form data
    
    // Respond to the client after upload
    res.status(200).json({
        message: 'File uploaded successfully!',
        file: req.file
    });
};

module.exports =  uploadfile 
