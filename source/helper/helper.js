import  multer from 'multer';
import path from 'path';

// storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, path.join(__dirname, '../upload/'));
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        return cb(null, Date.now() + ext);
    }
});

// filter
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        return cb(null, true);
    }else{
        return cb(null, false);
    }
}

// upload
const upload = multer({
    storage,
    fileFilter
});


export  { upload };