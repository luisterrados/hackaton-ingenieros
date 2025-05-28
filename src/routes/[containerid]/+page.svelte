

<script>
    import ContainerChart from '$lib/components/ContainerChart.svelte';

    let { data } = $props();
</script>

<div
    class="w-full sm:w-2/3 md:w-1/2 card preset-filled-surface-50-950 my-2 mx-auto shadow-md p-4"
>
<div >
    Contenedor {data.container.id}
</div>

<ContainerChart container={data.container} />

</div>