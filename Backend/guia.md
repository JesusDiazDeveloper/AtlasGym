al abrir el proyecto : 
    
    npm install (instala las dependencias del proyecto, crea una carpeta node_modules)
    
    copiar lo que esta en la carpeta db, y correr los scripts en sus PCs (eso crea y puebla la Base de datos)

    modificar las credenciales (si es necesario) en el archivo db.js 
                        const connection = mysql.createConnection({
                        host: 'localhost',
                        user: 'root',
                        password: '',
                        database: 'atlas_gym',
                    });

    npm run para levantar el proyecto

    
