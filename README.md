# Desafío - Always Music v2

Pruebas con el avance del desarrollo
del sistema de gestión con base de datos PostgreSQL

## Descripción

La escuela de música Always Music solicitó hacer unas pruebas con el avance del desarrollo del sistema de gestión con base de datos PostgreSQL, se dieron cuenta que no se podían hacer varias consultas de forma simultánea y que al intentar hacer una consulta errónea, no
recibían ningún error, dejando la posibilidad de creer que un estudiante fue registrado y que esto no sea así. En este desafío deberás ocupar la clase Pool definiendo sus diferentes propiedades, capturar los posibles errores en el proceso de conexión con la base de datos y realizar las siguientes consultas usando textos parametrizados.

● Agregar un nuevo estudiante.
● Consultar los estudiantes registrados.
● Consultar estudiante por rut.
● Actualizar la información de un estudiante.
● Eliminar el registro de un estudiante

## Requerimientos

1. Hacer todas las consultas con un JSON como argumento del método query.
   **(2 Puntos)**
2. Hacer las consultas con texto parametrizado.
   **(3 Puntos)**
3. Capturar los posibles errores en todas las consultas e imprimirlos por consola.
   **(3 Puntos)**
4. Obtener el registro de los estudiantes registrados en formato de arreglos.
   **(3 Puntos)**

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

```bash
git git@github.com:Percy-182/desafio_AlwaysMusicv2_M7D2.git
```

### Pre-requisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo (Ubuntu 20.04, Windows 10, MacOS 10.15)
- Navegador (Firefox, Opera, Chrome, Brave, Safari)
