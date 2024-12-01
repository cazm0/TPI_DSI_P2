<script>
    import Navbar from '../../../components/layout/Navbar.svelte';
    import { goto } from '$app/navigation'; // Para redirigir
    let turno = {
      nombre: '',
      apellido: '',
      marca: '',
      modelo: '',
      patente: '',
      fecha: '',
      hora: ''
    };
    let showPopup = false; // Controla la visibilidad del popup

    const saveChanges = () => {
      console.log('Cambios guardados:', turno);
      // Simular guardar cambios
      showPopup = true;
    };
    function closePopup(destination) {
      showPopup = false; // Oculta el popup
      goto(destination); // Redirige a la página deseada
    }
  </script>
  
  <Navbar />
  
  <div class="edit-turno-container">
    <h1 class="title">Modificar Turno</h1>
  
    <form on:submit|preventDefault={saveChanges}>
      <!-- Campos del formulario -->
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" bind:value={turno.nombre} required />
  
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" bind:value={turno.apellido} required />
  
      <label for="marca">Marca:</label>
      <input type="text" id="marca" bind:value={turno.marca} required />
  
      <label for="modelo">Modelo:</label>
      <input type="text" id="modelo" bind:value={turno.modelo} required />
  
      <label for="patente">Patente:</label>
      <input type="text" id="patente" bind:value={turno.patente} required />
  
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" bind:value={turno.fecha} required />
  
      <label for="hora">Hora:</label>
      <input type="time" id="hora" bind:value={turno.hora} required />
  
      <!-- Botones -->
      <div class="button-group">
        
        <a href="/turnos" class="btn-cancel">Cancelar</a>
        <button type="submit" class="btn-save">Guardar Cambios</button>
      </div>
    </form>
    {#if showPopup}
  <div class="popup-container">
    <div class="popup-content">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Cambios guardados</h2>
      <div class="popup-buttons">
        <button class="btn" on:click={() => closePopup('/')}>Ir al Inicio</button>
        <button class="btn" on:click={() => closePopup('/turnos')}>Ver Turnos</button>
      </div>
    </div>
  </div>
  {/if}
  </div>
  
  <style>
    .edit-turno-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 1.5rem;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .title {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      color: #003366;
      margin-bottom: 1.5rem;
    }
  
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
  