// server/config/multerConfig.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true }); // Create uploads directory if it doesn't exist
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, 'uploads/'); // Upload directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
});

// Export multer setup
const upload = multer({ storage: storage });

module.exports = upload;
