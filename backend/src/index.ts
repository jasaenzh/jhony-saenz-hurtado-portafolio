import { app } from "./app";
import { connectDB } from "./config/dbConfig";
import { syncModels } from "./utils/syncModel";

const PORT_SERVER: number = parseInt(process.env.PORT_SERVER || "")
const PORT_SECUNDARY: number = 4000

const PORT: number = PORT_SERVER || PORT_SECUNDARY

// async function main() {
//   await connectDB.authenticate()
//   console.log("Conexion exitosa con la base de datos");
//   await syncModels();
//   app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
// }

connectDB.authenticate().then(() => {
  console.log("Conexion exitosa con la base de datos");
  syncModels();
  app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
}).catch((error: any) => {
  console.error('No se pudo conectar a la base de datos:', error);
})

//main();