'use strict';
const { resolve, extname, parse } = require('path');
const multer = require('multer');
const { configuration } = require('../../configs/configuration.js');
const { createPublicFolder } = require('../utils/helpers');
const { BadRequestException } = require('../exceptions');

const pathToImages = resolve(configuration.staticPath, 'images');
void createPublicFolder(pathToImages);

const multerOptions = {
    limits: {
        files: configuration.maxFilesAmount,
        fileSize: configuration.maxFileSize,
        fieldNameSize: configuration.fieldNameSize,
    },
    fileFilter: (req, file, cb) => {
        const currentFileSize = parseInt(req.headers['content-length']);
        const arrayOfAllowedFiles = ['png', 'jpeg', 'jpg', 'gif'];
        const arrOfMimeTypes = [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/gif',
        ];
        const fileExtension = file.originalname.slice(
            ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2,
        );
        if (
            !arrayOfAllowedFiles.includes(fileExtension) ||
            !arrOfMimeTypes.includes(file.mimetype)
        ) {
            cb(
                new BadRequestException(
                    `Unsupported file type ${extname(
                        file.originalname,
                    )}. Only .png, .jpg, jpeg, .gif extensions allowed!`,
                ),
                false,
            );
        } else {
            cb(null, true);
        }
        if (currentFileSize > configuration.maxFileSize) {
            cb(
                new BadRequestException('File size can`t be more than 10 mb'),
                false,
            );
        }
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, pathToImages);
        },
        filename: async (req, file, cb) => {
            const filename = `${parse(file.originalname).name}_${Date.now()}`;
            const extension = parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        },
    }),
};
const uploadImages = multer(multerOptions).array('images');

module.exports = { uploadImages };
