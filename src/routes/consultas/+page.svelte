<script>
    import Navbar from "../../components/layout/Navbar.svelte";
    import { onMount } from "svelte";
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
<main class="bg-white text-gray-800 p-2">
    <!-- Título central -->
    <section class="title">
        <h1 class="text-5xl font-bold text-blue-900" style="font-size:2rem">
            Consultas
        </h1>
    </section>

    <section class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Nombre y apellido</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#each consultas as consulta (consulta.id)}
                    <tr>
                        <td>{consulta.fecha}</td>
                        <td>{consulta.hora}</td>
                        <td>{consulta.nombre} {consulta.apellido}</td>
                        <td>
                            <a href="consultas/responder">
                                <button class="answer-btn"> Responder </button>
                            </a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>
</main>

<style>
    main {
        background-color: #ffffff;
        color: #333333;
    }

    .title {
        grid-column: 2;
        color: #003366;
        display: flex; /* Activa Flexbox */
        justify-content: center; /* Centra horizontalmente */
        align-items: center; /* Centra verticalmente */
        height: 100%; /* Asegura que tome toda la altura del contenedor */
    }
    th {
        background-color: #003366;
        color: white;
        font-size: 1rem;
    }
    td {
        font-size: 0.9rem;
        color: #333;
    }
    th,
    td {
        padding: 12px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }
    tr:hover {
        background-color: #f1f1f1;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }
    .table-container {
        margin-top: 2rem;
        padding-inline: 4rem;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow-x: auto;
    }
    .answer-btn {
        background-color: #2b97b3;
        color: white;
    }
    .answer-btn {
        padding: 6px 12px;
        font-size: 0.875rem;
        border-radius: 4px;
        cursor: pointer;
        border: none;
        transition: background-color 0.3s;
    }
</style>
