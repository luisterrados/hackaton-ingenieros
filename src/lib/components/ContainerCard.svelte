<script lang="ts">
    let {
        container
    } = $props();


</script>

<div class="p-4 border rounded mb-2">
    <p><strong>Tipo:</strong> {container.tipo}</p>
    <p><strong>Centro:</strong> {container.centro}</p>
    <p><strong>Localización:</strong> {container.localizacion}</p>
    <p><strong>Capacidad:</strong> {container.capacidad} litros</p>
</div>