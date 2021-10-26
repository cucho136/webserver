

const http = require('http');


http.createServer( (req, resp) =>{

    //resp.writeHead(200, { 'Content-Type': 'application/json'})

/*     resp.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    resp.writeHead(200, { 'Content-Type': 'application/csv'}); */


    resp.write('hola mundo');


/*     resp.write('id, nombre\n');
    resp.write('1, Jesus\n');
    resp.write('2, Miguel\n');
    resp.write('3, Jose\n');
    resp.write('4, pedro\n');
 */

    resp.end();



}).listen( 8080 );


console.log('escuchando el puerto 8080');