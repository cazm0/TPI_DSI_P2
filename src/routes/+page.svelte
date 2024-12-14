<script>
  import Navbar from '../components/layout/Navbar.svelte';
  import { onMount } from 'svelte';
  import '../app.css';
  onMount(() => {
    document.title = 'Taller RTO';
  });
  let today = new Date();
  
  // Función para formatear la fecha
  function formatDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1); // Hacer que el día empiece con mayúscula
  }

  // Función para formatear la hora (solo horas y minutos)
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // Añadir 0 delante si los minutos son menores de 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
  }

  let date = formatDate(today);
  let time = formatTime(today);

  // Actualizar la hora cada minuto
  onMount(() => {
    const interval = setInterval(() => {
      today = new Date(); // Obtener la nueva fecha y hora
      time = formatTime(today); // Actualizar solo la hora
    }, 60000); // 60000 ms = 1 minuto

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se destruya
  });
  
  let title = "Bienvenidos";

  // Funciones para el calendario
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth(); // 0: enero, 11: diciembre
  let currentYear = currentDate.getFullYear();

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  // Función para obtener los días del mes
  const getCalendarDays = (month, year) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = [];

    // Rellenar los días previos del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null); 
    }

    // Rellenar los días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    return daysArray;
  };

  let calendarDays = getCalendarDays(currentMonth, currentYear);
  let month = currentDate.toLocaleString("default", { month: "long" });
  let year = currentYear;

  // Funciones para cambiar de mes
  const showPrevMonth = () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    calendarDays = getCalendarDays(currentMonth, currentYear);
    month = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });
    year = currentYear;
  };

  const showNextMonth = () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    calendarDays = getCalendarDays(currentMonth, currentYear);
    month = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });
    year = currentYear;
  };
</script>

<Navbar />

<main class="bg-gray-50 min-h-screen text-gray-800 p-6 flex flex-col items-center">
  <!-- Título y Fecha/Hora -->
  <section class="text-center mb-8">
    <h1 class="text-4xl font-bold text-blue-900 mb-4">{title}</h1>
    <div>
      <p class="text-lg text-gray-700">{date}</p>
      <p class="text-5xl font-bold text-blue-600">{time}</p>
    </div>
  </section>

  <!-- Calendario -->
  <section class="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
    <div class="flex items-center justify-between mb-4">
      <button class="text-blue-600 font-bold hover:text-blue-800" on:click="{showPrevMonth}">&lt;</button>
      <span class="text-lg font-semibold text-gray-800">{month} {year}</span>
      <button class="text-blue-600 font-bold hover:text-blue-800" on:click="{showNextMonth}">&gt;</button>
    </div>
    <div class="grid grid-cols-7 text-center gap-1">
      {#each daysOfWeek as day}
        <div class="font-medium text-gray-600">{day}</div>
      {/each}
      {#each calendarDays as day}
        <div class="p-2 text-sm rounded-md {day ? 'bg-gray-100 hover:bg-blue-100 cursor-pointer' : ''}">{day}</div>
      {/each}
    </div>
  </section>

  <!-- Información del Taller -->
  <section class="bg-white shadow-md rounded-lg p-6 mt-8 w-full max-w-4xl">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Columna izquierda -->
      <div class="md:col-span-2">
        <h2 class="text-2xl font-semibold text-blue-900 mb-4">¿Qué es un RTO?</h2>
        <p class="text-gray-700 leading-relaxed">
          Un Registro de Talleres de Automóviles (RTO) permite gestionar de manera eficiente los turnos, 
          así como administrar la información de los talleres, asegurando una experiencia optimizada para 
          los usuarios y administradores.
        </p>
      </div>
      <!-- Columna derecha -->
      <div class="flex justify-center items-center">
        <a href="/turnos" 
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Solicitar turno
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  main {
  background-color: #ffffff;
  color: #333333;
}

h1, h2 {
  color: #003366; /* Azul oscuro */
}

.text-gray-800 {
  color: #003366; /* Azul oscuro para los textos principales */
}

.text-gray-600 {
  color: #6B7280; /* Gris claro para fechas y textos secundarios */
}

.bg-gray-100 {
  background-color: #f3f4f6; /* Gris muy claro para el fondo de la sección de información */
}

</style>
