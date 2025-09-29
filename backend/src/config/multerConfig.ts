import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
) => {
    const allowedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (allowedTypes.includes(file.mimetype)) {
        // to accept the file : true
        cb(null, true);
    } else {
        // to reject the file : false
        cb(null, false);
    }
};

const limits = {
    fileSize: 5 * 1024 * 1024, //= 5MB
    files: 1
}

export const upload = multer({
    storage,
    fileFilter,
    limits
});

