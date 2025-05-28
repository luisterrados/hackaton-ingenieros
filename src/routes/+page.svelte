<script lang="ts">

    import {onMount} from "svelte";
    import tailwindcss from "@tailwindcss/vite";
    import ContainerCard from "$lib/components/ContainerCard.svelte";
    let contenedores: Array<any> = [];

    // Fetch al cargar el componente
    onMount(async () => {
        const res = await fetch('/data/containers.json');
        contenedores = await res.json();
    });
</script>

<style>
    .contenedor-principal {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }

    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    .contenedor {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }


</style>

<h1>Contenedores</h1>

{#each contenedores as contenedor}
    <ContainerCard container={contenedor}>

    </ContainerCard>
{/each}
