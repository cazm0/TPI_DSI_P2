<script>
    import Navbar from "../../components/layout/Navbar.svelte";
    import { onMount } from 'svelte';
    onMount(() => {
    document.title = 'Consultas';
    });
    import { goto } from "$app/navigation"; // Para redirigir
    let consultas = [
      {
        id: 1,
        fecha: "2024-11-29",
        hora: "10:00",
        nombre: "Juan",
        apellido: "Pérez",
      },
      {
        id: 2,
        fecha: "2024-11-30",
        hora: "11:30",
        nombre: "María",
        apellido: "Gómez",
      },
      {
        id: 3,
        fecha: "2024-12-01",
        hora: "09:00",
        nombre: "Carlos",
        apellido: "López",
      },
    ];
  </script>
  
  <Navbar />
  <main class="bg-white text-gray-800 p-4">
    <!-- Título central -->
    <section class="title text-center my-8">
      <h1 class="text-4xl font-semibold text-blue-900">Consultas</h1>
    </section>
  
    <!-- Tabla de consultas -->
    <section class="table-container bg-gray-50 p-6 rounded-lg shadow-lg overflow-x-auto">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="cabecera text-white">
              <th class="py-3 px-4 text-center">Fecha</th>
              <th class="py-3 px-4 text-center">Hora</th>
              <th class="py-3 px-4 text-center">Nombre y apellido</th>
              <th class="py-3 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {#each consultas as consulta (consulta.id)}
              <tr class="hover:bg-gray-100">
                <td class="py-3 px-4 text-center">{consulta.fecha}</td>
                <td class="py-3 px-4 text-center">{consulta.hora}</td>
                <td class="py-3 px-4 text-center">{consulta.nombre} {consulta.apellido}</td>
                <td class="py-3 px-4 text-center">
                  <a href="consultas/{consulta.id}">
                    <button class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-colors">
                      Responder
                    </button>
                  </a>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </section>
  </main>
<style>
  /* Estilos previos de la tabla */
  th:hover {
    background-color: inherit; /* Evita que el color de fondo cambie al pasar el ratón */
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .cabecera {
    background-color: #003366
  }
  th, td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
</style>
