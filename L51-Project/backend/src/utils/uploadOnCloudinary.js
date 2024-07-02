import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET
});

const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return null;

        const response = await cloudinary.uploader.upload(
            filePath)

        console.log("File is uploaded on cloudinary", response.url);
        fs.unlinkSync(filePath);
        return response;
    }
    catch (error) {
        fs.unlinkSync(filePath);
        console.error("Error uploading file on cloudinary", err);
        return error;
    }

}

export default uploadOnCloudinary