<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart, registerables } from 'chart.js';
    import type { Container } from '$lib/types/Container';
  Chart.register(...registerables);

  export let container: Container;

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d')!;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: container.history.map(d => d.timestamp),
        datasets: [{
          label: 'Values',
          data: container.history.map(d => d.levelPercent),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Timestamp'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  });
</script>

<canvas bind:this={canvas}></canvas>
