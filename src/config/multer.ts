import multer from "multer";
import { randomBytes } from "crypto";
import { resolve } from "path";

import multerS3 from "multer-s3"
import { S3Client } from '@aws-sdk/client-s3';

const storageTypes = {
  local: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', './temp'),
    filename: (request, file, callback) => {
      const fileHash = randomBytes(16).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`
  
      return callback(null, fileName)
    }
  }),

  s3: multerS3({
    s3: new S3Client({
      region: process.env.AWS_DEFAULT_REGION
    }),
    bucket: 'kvorderupload',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (request, file, callback) => {
      const fileHash = randomBytes(16).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`
  
      return callback(null, fileName)
    }
  })
}



export default{
  dest: resolve(__dirname, '..', '..', './temp'),
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (request, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/webp',
    ];

    if(allowedMimes.includes(file.mimetype)){
      callback(null, true)
    }else{
      callback( new Error('Tipo de Arquivo Invalido'))
    }
  }
}