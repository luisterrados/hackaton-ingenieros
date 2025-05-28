<script lang="ts">
    let {
        container
    } = $props();


</script>

<div class="card py-2 px-4 rounded-sm hover:preset-tonal-primary preset-filled-surface-50-950 shadow-sm">
    <p><strong>Tipo:</strong> {container.type}</p>
    <p><strong>Centro:</strong> {container.center}</p>
    <p><strong>Localización:</strong> {container.location}</p>
    <p><strong>Capacidad:</strong> {container.capacity} L</p>
</div>