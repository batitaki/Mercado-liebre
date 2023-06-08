const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.use("/nmb",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))

app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/index.html'));  // Permite enviar un archivo HTML
});
app.get('/ingreso', (req,res) =>{
    res.sendFile((__dirname + '/views/ingresa.html'));  
});
app.get('/registrate', (req,res) =>{
    res.sendFile((__dirname + '/views/registrate.html'));  
});



app.get('*', (req,res) =>{
    res.send("Ruta restringida, hemos localizado la direccion de su computador");  // Permite enviar texto o codigo HTML
});

app.listen(3006, function () {
    console.log("Servidor corriendo");
});
