import multer from 'multer'
export const fileFilter = (req, file, cb) => {
    if (file.originalname.match(/\.(png|jpg)$/)) {
        cb(null, true);
    } else {
        cb(new Error('invalid file type'));
    }
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
export const myImage = multer({ 
    storage,
    limits: {
        fileSize: 100 * 100 * 2 
    },
    fileFilter: fileFilter
});