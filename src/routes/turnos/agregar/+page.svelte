<script>
    import Navbar from '../../../components/layout/Navbar.svelte';
    import { goto } from '$app/navigation'; // Para redirigir
  
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
  
  <div class="add-turno-container">
    <h1 class="text-center text-2xl font-bold text-blue-900">Agregar Turno</h1>
  
    <form on:submit|preventDefault={saveTurno}>
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" bind:value={turno.fecha} required />
  
      <label for="hora">Hora:</label>
      <input type="time" id="hora" bind:value={turno.hora} required />
  
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" bind:value={turno.nombre} required />
  
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" bind:value={turno.apellido} required />
  
      <label for="dni">DNI:</label>
      <input type="text" id="dni" bind:value={turno.dni} required />
  
      <label for="marca">Marca:</label>
      <input type="text" id="marca" bind:value={turno.marca} required />
  
      <label for="modelo">Modelo:</label>
      <input type="text" id="modelo" bind:value={turno.modelo} required />
  
      <label for="patente">Patente:</label>
      <input type="text" id="patente" bind:value={turno.patente} required />
  
      <label for="tipoVehiculo">Tipo de Vehículo:</label>
      <select id="tipoVehiculo" bind:value={turno.tipoVehiculo} required>
        <option value="" disabled selected>Selecciona un tipo</option>
        <option value="Automóvil">Automóvil</option>
        <option value="Camioneta">Camioneta</option>
        <option value="Camión">Camión</option>
        <option value="Moto">Moto</option>
        <option value="Otros">Otros</option>
      </select>
      <div class="button-group">
        
        <a href="/turnos" class="btn-cancel">Cancelar</a>
        <button type="submit" class="btn-save">Guardar Turno</button>
      </div>
    </form>
  </div>
  
  {#if showPopup}
  <div class="popup-container">
    <div class="popup-content">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Turno guardado exitosamente</h2>
      <div class="popup-buttons">
        <button class="btn" on:click={() => closePopup('/')}>Ir al Inicio</button>
        <button class="btn" on:click={() => closePopup('/turnos')}>Ver Turnos</button>
      </div>
    </div>
  </div>
  {/if}
  
  <style>
    .add-turno-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
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
  
    .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    }
    .btn-save {
      background-color: #007BFF;
      color: white;
      padding: 0.7rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .btn-save:hover {
      background-color: #0056b3;
    }
    .btn-cancel {
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

    .btn-cancel:hover {
    background-color: #e53935;
    }
  
    /* Estilo del popup */
    .popup-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .popup-content {
      background-color: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
  
    .popup-buttons {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  
    .btn {
      background-color: #ccc;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .btn:hover {
      background-color: #ccc;
    }
  </style>
  