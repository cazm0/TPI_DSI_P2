<script>
    import Navbar from '../../../components/layout/Navbar.svelte';
  
    let turno = {
      nombre: '',
      apellido: '',
      marca: '',
      modelo: '',
      patente: '',
      fecha: '',
      hora: ''
    };
  
    function saveChanges() {
      // Aquí puedes agregar la lógica para guardar los cambios
      alert('Turno modificado exitosamente');
    }
  </script>
  
  <Navbar />
  
  <div class="edit-turno-container">
    <h1 class="title">Modificar Turno</h1>
  
    <form on:submit|preventDefault={saveChanges}>
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
  
      <button type="submit" class="btn-save">Guardar Cambios</button>
    </form>
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
  </style>
  