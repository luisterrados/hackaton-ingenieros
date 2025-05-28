<script lang="ts">
    let {
        container
    } = $props();


</script>

<div class="card py-2 px-4 rounded-sm shadow-sm hover:bg-primary-100 dark:hover:bg-primary-900 bg-white dark:bg-gray-800">
    <p><strong>Tipo:</strong> {container.type}</p>
    <p><strong>Centro:</strong> {container.center}</p>
    <p><strong>Localización:</strong> {container.location}</p>
    <p><strong>Capacidad:</strong> {container.capacity} L</p>
</div>