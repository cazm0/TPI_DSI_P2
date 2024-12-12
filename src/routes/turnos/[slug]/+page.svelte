<script>
  import { page } from '$app/stores'; // Para obtener parámetros de la URL
  import Navbar from '../../../components/layout/Navbar.svelte';
  import { onMount } from 'svelte';
  import { isLoggedIn } from '$lib/stores';
  import { get } from 'svelte/store';

    // Verifica si el usuario está logueado
  $: loggedIn = get(isLoggedIn); // Obtiene el estado actual de isLoggedIn
  
  // Datos simulados de turnos
  let turnos = [
    { id: 1, fecha: '2024-11-29', hora: '10:00', nombre: 'Juan', apellido: 'Pérez', patente: 'ABC123' },
    { id: 2, fecha: '2024-11-30', hora: '11:30', nombre: 'María', apellido: 'Gómez', patente: 'DEF456' },
    { id: 3, fecha: '2024-12-01', hora: '09:00', nombre: 'Carlos', apellido: 'López', patente: 'GHI789' }
  ];

  let { slug } = $page.params; // Obtener el parámetro dinámico (slug) desde la URL
  let turno; // Turno seleccionado

  // Encontrar el turno correspondiente
  $: turno = turnos.find(t => t.id == slug);

  let showPopup = false; // Estado del popup
  onMount(() => {
    document.title = turno ? `Turno - ${turno.id}` : 'Turno no encontrado';
  });
const saveChanges = () => {
  // Simular guardado de datos
  console.log('Turno modificado:', turno);
  showPopup = true;
};

const closePopup = (route) => {
  showPopup = false;
  window.location.href = route;
};
</script>

<Navbar />

{#if turno}
  {#if loggedIn}
<div class="edit-turno-container max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-center text-blue-800 mb-6">Modificar Turno</h1>

  <form on:submit|preventDefault={saveChanges} class="space-y-4">
    <!-- Fecha y Hora juntos -->
    <div class="flex space-x-4">
      <div class="w-1/2">
        <label for="fecha" class="block text-sm font-medium text-gray-700">Fecha:</label>
        <input
          type="date"
          id="fecha"
          bind:value={turno.fecha}
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="w-1/2">
        <label for="hora" class="block text-sm font-medium text-gray-700">Hora:</label>
        <input
          type="time"
          id="hora"
          bind:value={turno.hora}
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre:</label>
      <input
        type="text"
        id="nombre"
        bind:value={turno.nombre}
        required
        class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div>
      <label for="apellido" class="block text-sm font-medium text-gray-700">Apellido:</label>
      <input
        type="text"
        id="apellido"
        bind:value={turno.apellido}
        required
        class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div>
      <label for="patente" class="block text-sm font-medium text-gray-700">Patente:</label>
      <input
        type="text"
        id="patente"
        bind:value={turno.patente}
        required
        class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <!-- Botones -->
    <div class="flex justify-between">
      <a
        href="/turnos"
        class="px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow-sm hover:bg-red-600"
      >
        Cancelar
      </a>
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600"
      >
        Guardar Cambios
      </button>
    </div>
  </form></div>
  {:else}
  <div class="min-h-screen bg-white flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
      <section>
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Acceso Denegado</h1>
        <p class="text-gray-600 mb-6">Por favor, inicia sesión para acceder a toda la información.</p>
        <!-- Contenido público -->
        <a href="/" 
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Volver al inicio
        </a>
      </section>
    </div>
  </div>
  {/if}

<!-- Popup -->
{#if showPopup}
  <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">
        Turno modificado exitosamente
      </h2>
      <div class="flex justify-center space-x-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors"
          on:click={() => closePopup('/')}
        >
          Ir al Inicio
        </button>
        <button
          class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition-colors"
          on:click={() => closePopup('/turnos')}
        >
          Ver Turnos
        </button>
      </div>
    </div>
  </div>
{/if}
{:else}
<p class="text-center text-gray-500">Cargando turno...</p>
{/if}

  
  <style>
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    label {
      margin: 0.5rem 0;
      font-weight: bold;
      color: #333;
    }
  
    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  </style>
  