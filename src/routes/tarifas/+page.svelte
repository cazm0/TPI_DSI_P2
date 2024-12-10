<script>
    import { onMount } from 'svelte';
    onMount(() => {
    document.title = 'Tarifas';
    });
    import Navbar from "../../components/layout/Navbar.svelte";
    const volverAlMenu = () => {
    window.location.href = ''; // La raíz del sitio
    };
</script>
<Navbar/>
<section
  class="info-tarifas"
  style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; height: 50vh;"
>
  <!-- Título principal -->
  <div
    style="text-align: center; flex-grow: 1; display: flex; justify-content: center; align-items: center;"
  >
    <h1 style="font-size: 2rem; margin: 0;">Información sobre tarifas</h1>
  </div>
  <a href="/"
    style="background: #50c9c3; color: white; border: none; padding: 10px 20px; border-radius: 5px; font-size: 1rem; cursor: pointer; margin-bottom: 20px;">
    Volver al menú principal</a>
</section>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }
</style>