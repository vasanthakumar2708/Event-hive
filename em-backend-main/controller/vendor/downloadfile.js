const path = require('path');

const downloadfile = (req,res) => {
    const filename = req.params.filename;
     const fileLocation = path.join(__dirname, '../../uploads', filename); 

    console.log('Filename:', fileLocation);  
    
    res.download(fileLocation, filename, (err) => {
        if (err) {
            console.error('Error during file download:', err);
            return res.status(404).send('File not found.');
        }
    });

}

module.exports = downloadfile