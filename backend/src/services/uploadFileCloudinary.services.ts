import { Request } from "express";
import { uploadImage } from "../config/cloudinary.config";
import { ClientError } from "../utils/errorsResponse";
import fs from "fs-extra";

const uploadFileCloudinary = async (pathCloudinary: string) => {

  if (pathCloudinary) {
    const urlCloudinary = await uploadImage(pathCloudinary)
    await fs.unlink(pathCloudinary)
    return urlCloudinary.url
  } else {
    throw new ClientError("Error al subir la imagen a Cloudinary", 500)
  }

}

const uploadFilesCloudinary = async (req: Request) => {
  const files = req.files;

  if (!Array.isArray(files)) {
    throw new ClientError("Error al subir la imagen a Cloudinary", 500);
  }

  // Utiliza map para devolver un array de promesas
  const uploadPromises = files.map(async (file: any) => {
    return await uploadFileCloudinary(file.path);
  });

  // Utiliza Promise.all para esperar que todas las promesas se resuelvan
  const uploadResults = await Promise.all(uploadPromises);

  return uploadResults;
}

export { uploadFileCloudinary, uploadFilesCloudinary }