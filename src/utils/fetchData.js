// importamos el modulo xmlhttprequest
const XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHTTPRequest();

    //abrimos una conexion al api
    xhttp.open('GET', url_api, true);
    // escuhamos los cambios de la conexion
    xhttp.onreadystatechange = () => {
      // validamos la conexicon exitosa
      if (xhttp.readyState === 4) {
        // validamos el estado http 200
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error', url_api));
      }
    };
    // enviamos la solicitud
    xhttp.send();
  });
}

module.exports = fetchData;
