<script lang="ts">

    import {onMount} from "svelte"
    import ContainerCard from "$lib/components/ContainerCard.svelte";
    let contenedores: Array<any> = [];

    // Fetch al cargar el componente
    onMount(async () => {
        const res = await fetch('/data/containers.json');
        contenedores = await res.json();
    });
</script>

<style>
    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
</style>

<h1>Contenedores</h1>

{#each contenedores as contenedor}
    <ContainerCard container={contenedor}>

    </ContainerCard>
{/each}
