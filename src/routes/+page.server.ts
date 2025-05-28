import { readFileSync } from 'fs';
import path from 'path';
import type { PageServerLoad } from "./$types";

const url = 'https://hackaton-campus-sostenible-api.mmartinez-d6a.workers.dev/containers/measurements';
const token = 'Bearer campus-sostenible-2025'; // O solo el token, según la API

export const load: PageServerLoad = async () => {
    try {
        const filePath = path.resolve('static/data/containers.json');
        const jsonContent = readFileSync(filePath, 'utf-8');
        const datos = JSON.parse(jsonContent);
        return {
            containers: datos
        };
    } catch (err) {
        console.error('Error al leer JSON:', err);
        return {
            containers: [],
            error: String(err)
        };
    }
/*    
fetch(url, {
  method: 'GET', // o 'POST', 'PUT', etc.
  headers: {
    'Authorization': token,
    'Content-Type': 'application/json' // solo si estás enviando o esperando JSON
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos recibidos:', data);
  })
  .catch(error => {
    console.error('Error al hacer fetch:', error);
  });
*/
};