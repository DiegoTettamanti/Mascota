import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js';  
import productsRoutes from './routes/productsRoutes.js';

//Crear la App
const app = express();


//Habilitar Handlebars
app.set('view engine', 'pug');
app.set('views', './views');


//Routing
app.use('/auth', usuarioRoutes)
app.get('/:pid', )



//Definir un puerto y arrancar el proyecto
const port = 8080;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto' ${port}`);
});