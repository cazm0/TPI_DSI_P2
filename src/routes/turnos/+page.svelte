<script>
    import Navbar from '../../components/layout/Navbar.svelte';
    import { onMount } from 'svelte';
    import { isLoggedIn } from '$lib/stores';
    import { get } from 'svelte/store';
    import taller1 from '$lib/../public/taller1.jpeg';
    import taller2 from '$lib/../public/taller2.jpeg';
    import taller3 from '$lib/../public/taller3.jpeg';
    import taller4 from '$lib/../public/taller4.jpeg';
    // Verifica si el usuario está logueado
    $: loggedIn = get(isLoggedIn); // Obtiene el estado actual de isLoggedIn
    onMount(() => {
    document.title = 'Turnos';
    });
    // Simulación de datos de turnos (puedes reemplazarlos con datos reales de una API)
    let turnos = [
      { id: 1, fecha: '2024-11-29', hora: '10:00', nombre: 'Juan', apellido: 'Pérez', patente: 'ABC123' },
      { id: 2, fecha: '2024-11-30', hora: '11:30', nombre: 'María', apellido: 'Gómez', patente: 'DEF456' },
      { id: 3, fecha: '2024-12-01', hora: '09:00', nombre: 'Carlos', apellido: 'López', patente: 'GHI789' }
    ];
    
    // Variables para el modal
  let showModal = false;
  let turnoToDelete = null;

  // Función para mostrar el modal
  function confirmDelete(turno) {
    showModal = true;
    turnoToDelete = turno;
  }
  

  // Función para eliminar el turno
  function deleteTurno() {
    turnos = turnos.filter(turno => turno.id !== turnoToDelete.id);
    showModal = false; // Cierra el modal
  }

  // Función para cancelar la eliminación
  function cancelDelete() {
    showModal = false; // Solo cierra el modal
  }
  </script>
  
  <Navbar />
  {#if loggedIn}
  <main class="bg-white text-gray-800 p-6">

    <!-- Título central -->
    <section class="title text-center my-8">
      <h1 class="text-4xl font-semibold text-blue-900">Turnos</h1>
    </section>

  
    <!-- Tabla de turnos -->
    <section class="table-container mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
        <table class="turnos-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Patente</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {#each turnos as turno (turno.id)}
                <tr>
                  <td>{turno.fecha}</td>
                  <td>{turno.hora}</td>
                  <td>{turno.nombre}</td>
                  <td>{turno.apellido}</td>
                  <td>{turno.patente}</td>
                  <td>
                    <a href="turnos/{turno.id}" class="edit-btn">Editar</a>
                    <button class="delete-btn" on:click={() => confirmDelete(turno)}>Eliminar</button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
          
          <!-- Modal de Confirmación -->
          {#if showModal}
            <div class="modal-overlay">
              <div class="modal">
                <h2 class="modal-title">¿Estás seguro de eliminar este turno?</h2>
                <div class="modal-actions">
                  <button class="btn-confirm" on:click={deleteTurno}>Sí</button>
                  <button class="btn-cancel" on:click={cancelDelete}>No</button>
                </div>
              </div>
            </div>
          {/if}

          <div class="add-turno-button">
            <a href="/turnos/agregar" class="btn-add">Agregar Turno</a>
          </div>
          
      </section>
    </main>
    {:else}
    <main class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full flex">
        <!-- Sección de Información -->
        <section class="flex-1 pr-6">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">Turnos para Revisión Técnica Obligatoria</h1>
          <p class="text-gray-600 mb-6">
            En nuestro taller, ofrecemos un servicio eficiente y profesional para la revisión técnica obligatoria de tu vehículo. 
            Garantizamos que cumpla con todas las normativas vigentes, asegurando la seguridad y el cuidado del medio ambiente.
          </p>
          <p class="text-gray-600 mb-6">
            Puedes solicitar tu turno en línea de manera rápida y sencilla. Selecciona la fecha y hora que mejor se adapte a tus necesidades 
            y evita largas esperas en nuestras instalaciones.
          </p>
          <!-- Botón para redirigir a la página de solicitud de turnos -->
          <a href="/turnos/solicitar" 
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Solicitar Turno
          </a>
        </section>
    
        <!-- Carrusel de Imágenes -->
        <section class="flex-1 overflow-x-auto">
          <div class="flex space-x-4 snap-x snap-mandatory">
            <img src="{taller1}" alt="Imagen del taller 1" class="w-96 h-auto rounded-lg snap-center" />
            <img src="{taller2}" alt="Imagen del taller 2" class="w-96 h-auto rounded-lg snap-center" />
            <img src="{taller3}" alt="Imagen del taller 3" class="w-96 h-auto rounded-lg snap-center" />
            <img src="{taller4}" alt="Imagen del taller 3" class="w-96 h-auto rounded-lg snap-center" />
          </div>
        </section>
      </div>
    </main>
    {/if}

  
  <style>
    main {
      background-color: #ffffff;
      color: #333333;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 0 auto;
    }
  
    th, td {
      text-align: left;
    }
  
    button {
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .title {
        grid-column: 2;
        color: #003366;
        display: flex; /* Activa Flexbox */
        justify-content: center; /* Centra horizontalmente */
        align-items: center; /* Centra verticalmente */
        height: 100%; /* Asegura que tome toda la altura del contenedor */
    }
    .table-container {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
    }

    .turnos-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    }

    .turnos-table th,
    .turnos-table td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    }

    .turnos-table th {
    background-color: #003366;
    color: white;
    font-size: 1rem;
    }

    .turnos-table td {
    font-size: 0.9rem;
    color: #333;
    }

    .turnos-table tr:hover {
    background-color: #f1f1f1;
    }

    .edit-btn,
    .delete-btn {
    padding: 6px 12px;
    font-size: 0.875rem;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;
    }

    .edit-btn {
    background-color: #ffcc00;
    color: white;
    }

    .edit-btn:hover {
    background-color: #e6b800;
    }

    .delete-btn {
    background-color: #ff4d4d;
    color: white;
    }

    .delete-btn:hover {
    background-color: #e60000;
    }
    .modal-overlay {
    position: fixed;  /* Esto hace que el modal se fije en la pantalla */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Asegura que el modal esté encima de otros elementos */
    }

    .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para dar efecto de profundidad */
    }

    .modal-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    }

    .modal-actions {
    display: flex;
    justify-content: space-around;
    }

    .btn-confirm {
    background-color: #ccc;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    }
    .btn-cancel {
    background-color: #FFA500;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    }

    .btn-confirm:hover {
    background-color: #FF8C00;
    }

    .btn-cancel {
    background-color: #ccc;
    }

    .btn-cancel:hover {
    background-color: #bbb;
    }

    .add-turno-button {
  text-align: center;
  margin-top: 20px;
}

.btn-add {
  background-color: #28a745; /* Color verde */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-add:hover {
  background-color: #218838; /* Color verde más oscuro */
}
    </style>
  