const client = require("./dbConfig");

// Función para ejecutar una consulta SQL
async function consultaSQL() {
  // Obtenemos una conexión de la client
  const connection = await client.connect();

  try {
    const sqlArray = {
      rowMode: "array",
      text: "SELECT * FROM alwaysMusic",
    };
    // Ejecutamos la consulta SQL
    const result = await client.query(sqlArray);

    // Mostramos los resultados
    console.log(result.rows);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  } finally {
    // Liberamos la conexión
    connection.release();
  }
}

// Función para insertar un usuario
const insertUser = async (nombre, rut, curso, nivel) => {
  const text =
    "INSERT INTO alwaysMusic(nombre, rut, curso, nivel) VALUES($1, $2, $3, $4)";
  const values = [nombre, rut, curso, nivel];
  try {
    const response = await client.query(text, values);
    console.log(
      `Datos de Usuario: Nombre: ${nombre}, Rut: ${rut}, Curso: ${curso}, Nivel: ${nivel}, insertados exitosamente`,
      response.rows
    );
  } catch (error) {
    console.error("Error al insertar la fila:", error);
  }
};

// Función para eliminar un usuario
const deleteUser = async (nombre) => {
  const text = "DELETE FROM alwaysMusic WHERE nombre = $1";
  const values = [nombre];

  try {
    const response = await client.query(text, values);
    console.log(`Usuario ${nombre} eliminado correctamente`, response.rows);
  } catch (error) {
    console.error("Error al eliminar la fila:", error);
  }
};

// Función para actualizar un usuario
const updateUser = async (nuevoNombre, nombre) => {
  const text = "UPDATE alwaysMusic SET nombre = $1 WHERE nombre = $2";
  const values = [nuevoNombre, nombre];

  try {
    const response = await client.query(text, values);
    console.log(
      `Actualización de ${nombre} a ${nuevoNombre} exitosa`,
      response.rows
    );
  } catch (error) {
    console.error(`Error al actualizar el usuario: ${nombre}`, error);
  }
};

// Función para consultar una fila completa por un valor de una columna específica
const queryUser = async (nombre) => {
  // Define la sentencia SQL para la consulta
  const text = "SELECT * FROM alwaysMusic WHERE nombre = $1";

  // Define el valor del nombre que quieres consultar
  const nameToQuery = nombre;

  try {
    // Ejecuta la consulta con el nombre como valor
    const response = await client.query(text, [nameToQuery]);
    console.log(
      `Consulta exitosa a Usuario por Nombre: ${nombre}.`,
      response.rows
    );
  } catch (error) {
    console.error("Error al consultar la fila:", error);
  }
};

module.exports = { consultaSQL, insertUser, deleteUser, updateUser, queryUser };
