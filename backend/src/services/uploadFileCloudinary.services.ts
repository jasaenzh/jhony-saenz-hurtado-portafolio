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

export { uploadFileCloudinary }