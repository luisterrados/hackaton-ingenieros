<script lang="ts">

    import {onMount} from "svelte"
    import ContainerCard from "$lib/components/ContainerCard.svelte";
    let contenedores: Array<any> = [];

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
<ul>
    {#each contenedores as contenedor}
        <li>
            <a href="/{contenedor.id}">
                <ContainerCard container={contenedor}/>

<<<<<<< HEAD
{#each data.containers as contenedor}
    <ContainerCard container={contenedor}>
        
    </ContainerCard>
{/each}
=======
            </a>
        </li>
    {/each}
</ul>

>>>>>>> refs/remotes/origin/main
