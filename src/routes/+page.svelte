<script lang="ts">
    import ContainerCard from "$lib/components/ContainerCard.svelte";

    // `data` viene de `+page.server.ts`
    let { data } = $props();

    // Aquí vamos a agrupar los contenedores por 'center'
    let groupedContainers: Record<string, any[]> = {};

    if (data && data.containers) {
        data.containers.forEach((contenedor: any) => {
            if (!groupedContainers[contenedor.center]) {
                groupedContainers[contenedor.center] = [];
            }
            groupedContainers[contenedor.center].push(contenedor);
        });
    }
</script>

<style>
    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-top: 3rem; /* Espacio antes de cada nueva sección de centro */
        margin-bottom: 1.5rem;
        color: #333;
        border-bottom: 2px solid #eee; /* Opcional: una línea para separar las secciones */
        padding-bottom: 0.5rem;
        text-indent: 0.9rem;
    }

    ul {
        list-style: none; /* Elimina los puntos predeterminados de la lista */
        padding: 2;
    }

    li {
        margin-bottom: 1rem; /* Espacio entre cada ContainerCard */
    }

    /* Estilos para el enlace, si es necesario */
    a {
        text-decoration: none; /* Quita el subrayado predeterminado */
        color: inherit; /* Hereda el color del texto para no ser azul */
    }
</style>

<h1>Contenedores por Centro</h1>

{#each Object.entries(groupedContainers) as [centerName, containersInCenter]}
    <h2>Contenedores de {centerName}</h2>
    <ul>
        {#each containersInCenter as contenedor}
        <li>
            <a href="/{contenedor.id}">
                <ContainerCard container={contenedor}/> 
            </a>
        </li>
    {/each}
</ul>
{/each}