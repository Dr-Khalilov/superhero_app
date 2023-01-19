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
        fileSize: configuration.maxFileSize,
        fieldNameSize: configuration.fieldNameSize,
    },
    fileFilter: (req, file, cb) => {
        const mimeTypes = [
            'image/png',
            'image/svg',
            'image/jpeg',
            'image/jpg',
            'image/gif',
        ];
        if (mimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(
                new BadRequestException(
                    `Unsupported file type ${extname(file.originalname)}`,
                ),
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
            cb(null, `${filename}.${extension}`);
        },
    }),
};
const uploadImages = multer(multerOptions).array('images', 10);

module.exports = { uploadImages };
