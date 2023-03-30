const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.mongoDb);
  } catch (error) {
    throw new Error("Error en inicio de la base de datos");
  }
};

module.exports = {
  dbConnection,
};
