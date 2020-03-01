// importamos el modulo xmlhttprequest
const XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
  const xhttp = new XMLHTTPRequest();

  //abrimos una conexion al api
  xhttp.open('GET', url_api, true);
  // escuhamos los cambios de la conexion
  xhttp.onreadystatechange = function(event) {
    // validamos la conexicon exitosa
    if (xhttp.readyState === 4) {
      // validamos el estado http 200
      if (xhttp.status === 200) {
        // convertimos la respuesta a json e iniciamos el callback que hara uso de la info
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // Enviamos el error que en caso de haber problemas
        const error = new Error('Error' + url_api);
        return callback(error, null);
      }
    }
  };
  // enviamos la solicitud
  xhttp.send();
}
