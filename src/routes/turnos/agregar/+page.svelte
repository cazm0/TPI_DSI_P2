<script>
    import Navbar from '../../../components/layout/Navbar.svelte';
    import { goto } from '$app/navigation'; // Para redirigir
    import { onMount } from 'svelte';
    import { isLoggedIn } from '$lib/stores';
    import { get } from 'svelte/store';

    // Verifica si el usuario está logueado
    $: loggedIn = get(isLoggedIn); // Obtiene el estado actual de isLoggedIn
    onMount(() => {
    document.title = 'Agregar Turno';
    });
    let turno = {
      fecha: '',
      hora: '',
      nombre: '',
      apellido: '',
      dni: '',
      marca: '',
      modelo: '',
      patente: '',
      tipoVehiculo: ''
    };
  
    let showPopup = false; // Controla la visibilidad del popup
  
    function saveTurno() {
      // Aquí podrías agregar la lógica para guardar el turno en una base de datos
      console.log(turno);
      showPopup = true; // Mostrar el popup
    }
  
    function closePopup(destination) {
      showPopup = false; // Oculta el popup
      goto(destination); // Redirige a la página deseada
    }
  </script>
  
  <Navbar />



    {#if loggedIn}
  <div class="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">    
  <h1 class="text-2xl font-bold text-blue-900 text-center mb-6">Agregar Turno</h1>
    <form on:submit|preventDefault={saveTurno} class="space-y-4">
      <!-- Fecha y Hora alineadas horizontalmente -->
      <div class="flex space-x-4">
        <div class="flex-1">
          <label for="fecha" class="block text-gray-700 font-medium mb-2">Fecha:</label>
          <input
            type="date"
            id="fecha"
            bind:value={turno.fecha}
            required
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div class="flex-1">
          <label for="hora" class="block text-gray-700 font-medium mb-2">Hora:</label>
          <input
            type="time"
            id="hora"
            bind:value={turno.hora}
            required
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
      </div>
  
      <!-- Campos de texto -->
      <div>
        <label for="nombre" class="block text-gray-700 font-medium mb-2">Nombre:</label>
        <input
          type="text"
          id="nombre"
          bind:value={turno.nombre}
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label for="apellido" class="block text-gray-700 font-medium mb-2">Apellido:</label>
        <input
          type="text"
          id="apellido"
          bind:value={turno.apellido}
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label for="dni" class="block text-gray-700 font-medium mb-2">DNI:</label>
        <input
          type="text"
          id="dni"
          bind:value={turno.dni}
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label for="marca" class="block text-gray-700 font-medium mb-2">Marca:</label>
        <input
          type="text"
          id="marca"
          bind:value={turno.marca}
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label for="modelo" class="block text-gray-700 font-medium mb-2">Modelo:</label>
        <input
          type="text"
          id="modelo"
          bind:value={turno.modelo}
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label for="patente" class="block text-gray-700 font-medium mb-2">Patente:</label>
        <input
          type="text"
          id="patente"
          bind:value={turno.patente}
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label for="tipoVehiculo" class="block text-gray-700 font-medium mb-2">Tipo de Vehículo:</label>
        <select
          id="tipoVehiculo"
          bind:value={turno.tipoVehiculo}
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        >
          <option value="" disabled selected>Selecciona un tipo</option>
          <option value="Automóvil">Automóvil</option>
          <option value="Camioneta">Camioneta</option>
          <option value="Camión">Camión</option>
          <option value="Moto">Moto</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
  
      <!-- Botones -->
      <div class="flex justify-between mt-6">
        <a
          href="/turnos"
          class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition-colors"
        >
          Cancelar
        </a>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors"
        >
          Guardar Turno
        </button>
      </div>
    </form>
  </div>
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
          Turno guardado exitosamente
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
  
  <style>
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    label {
      margin: 0.5rem 0;
    }
  
    input, select {
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  </style>
  