import { connectDB } from "../config/dbConfig";
import Skill from "../models/skill.model";

const syncModels = async () => {
  try {
    await connectDB.sync({ alter: true });
    console.log('Modelos sincronizados correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelos con la base de datos:', error);
  }
};

export { syncModels }