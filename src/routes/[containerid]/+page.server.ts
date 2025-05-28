import type { Container } from "$lib/types/Container";

const url = 'https://hackaton-campus-sostenible-api.mmartinez-d6a.workers.dev/containers/measurements';
const token = 'Bearer campus-sostenible-2025';

export async function load({params}){

  const containerId = params.containerid

const response = await fetch(url, {
  method: 'GET', 
  headers: {
    'Authorization': token,
    'Content-Type': 'application/json' 
  }
})
const data = await response.json();
const containers: Container[] = data as Container[];
const containerResult = containers.filter(container => container.id == containerId)[0];
return {
    container: containerResult
}
}
