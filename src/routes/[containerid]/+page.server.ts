const url = 'https://hackaton-campus-sostenible-api.mmartinez-d6a.workers.dev/containers/measurements';
const token = 'Bearer campus-sostenible-2025';

export async function load({params}){
    type ContainerHistory = {
        timestamp: string;
        levelPercent: number;
    }
    type Container = {
        id: string
        history: ContainerHistory[]
    }

const response = await fetch(url, {
  method: 'GET', 
  headers: {
    'Authorization': token,
    'Content-Type': 'application/json' 
  }
})
const data = await response.json();
const containers: Container[] = data as Container[];
const containerResult = containers.filter(container => container.id)[0];
console.log(containerResult);

return {
    container: containerResult
}
}
