<script>
    import Navbar from '../../../components/layout/Navbar.svelte';
    import { goto } from '$app/navigation';
    let turno = {
      fecha: '',
      hora: '',
      nombre: '',
      apellido: '',
      dni: '',
      correo:'',
      marca: '',
      modelo: '',
      patente: '',
      tipoVehiculo: ''
    };
  
    let showPopup = false;
  
    function saveTurno() {
      // Lógica para guardar el turno (puede ser una API o base de datos)
      console.log(turno);
      showPopup = true; // Mostrar el popup
    }
  
    function closePopup(destination) {
      showPopup = false; // Ocultar el popup
      goto(destination); // Redirigir a la página deseada
    }
  </script>
  <Navbar/>
  <main class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-blue-900 text-center mb-6">Solicitar Turno para Revisión Técnica Obligatoria</h1>
  
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
  
        <!-- Información del Usuario -->
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
            <label for="correo" class="block text-gray-700 font-medium mb-2">Correo:</label>
            <input
              type="text"
              id="correo"
              bind:value={turno.correo}
              required
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
            />
        </div>
  
        <!-- Información del Vehículo -->
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
            Solicitar Turno
          </button>
        </div>
      </form>
    </div>
  
    {#if showPopup}
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 class="text-xl font-bold text-center mb-4">¡Tu turno ha sido solicitado con éxito!</h2>
          <p class="text-center mb-4">Recibirás un correo con los detalles del turno.</p>
          <div class="flex justify-center">
            <button
              on:click={() => goto('/')}
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    {/if}
  </main>