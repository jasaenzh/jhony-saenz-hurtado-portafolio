import { connectDB } from "../config/dbConfig";
import User from "../models/user.model";

const syncModel = async () => {
  try {
    await connectDB.sync({ alter: true });
    console.log('Modelos sincronizados correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelos con la base de datos:', error);
  }
};

export { syncModel }