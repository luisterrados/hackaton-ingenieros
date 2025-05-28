<script lang="ts">
    import ContainerCard from "$lib/components/ContainerCard.svelte";
    // Fetch al cargar el componente
    let { data } = $props();
</script>

<style>
    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
</style>

<h1>Contenedores</h1>


<ul class="p-2 w-full sm:w-2/3 md:w-1/2 p-4 flex flex-col items-center items-stretch gap-2 mx-auto">
    {#each data.containers as contenedor}
        <li>
            <a href="/{contenedor.id}">
                <ContainerCard container={contenedor}/> 
            </a>
        </li>
    {/each}
</ul>

