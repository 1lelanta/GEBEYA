const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { baseUrl } = require('../config/env');
const { buildImageUrl } = require('../services/uploadService');

const uploadPath = path.join(__dirname, '../../upload/images');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      errors: 'No file uploaded',
    });
  }

  res.json({
    success: 1,
    image_url: buildImageUrl({ baseUrl, filename: req.file.filename }),
  });
};

module.exports = {
  upload,
  uploadImage,
};
