import multer from 'multer';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, './static/images'));
    },
    filename: function(req, file, cb){
        cb(null, `image${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
});

export default storage;