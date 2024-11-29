<script>
  import Navbar from '../components/layout/Navbar.svelte';
  import { onMount } from 'svelte';
  
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

<main class="bg-white text-gray-800 p-2">
  <section class="items-center justify-center text-center">
    <!-- Título y Fecha/Hora -->
    <section class="welcome-section">
      <h1 class="text-5xl font-bold text-gray-800 mb-4" style="font-size:2rem;">{title}</h1>
      <div class="text-gray-600">
        <p class="text-lg">{date}</p> <!-- Fecha -->
        <p class="text-gray-800" style="font-size: 4rem; font-weight: bold; margin: -4px">{time}</p> <!-- Hora -->
      </div>
    </section>

    <!-- Calendario -->
    <section class="bg-gray-100 p-6 rounded-lg shadow-md mt-8 w-full max-w-[360px] mx-auto">
      <div class="calendar-container">
        <div class="calendar-header">
          <button class="prev-month" on:click="{showPrevMonth}">&lt;</button>
          <span class="month-year">{month} {year}</span>
          <button class="next-month" on:click="{showNextMonth}">&gt;</button>
        </div>
        <div class="calendar-grid">
          {#each daysOfWeek as day}
            <div class="calendar-day-header">{day}</div>
          {/each}
          {#each calendarDays as day}
            <div class="calendar-day">
              {day}
            </div>
          {/each}
        </div>
      </div>
    </section>
  </section>

  <!-- Información del Taller -->
  <div class="container bg-white p-6 rounded-lg shadow-md mt-8">
    <!-- Columna izquierda: Información sobre el RTO -->
    <div class="left-column">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">¿Qué es un RTO?</h2>
      <p class="text-gray-700 leading-relaxed">
        Un Registro de Talleres de Automóviles (RTO) permite gestionar de manera eficiente los turnos, 
        así como administrar la información de los talleres, asegurando una experiencia optimizada para 
        los usuarios y administradores.
      </p>
    </div>
  
    <!-- Columna derecha: Botón amarillo -->
    <div class="right-column flex justify-center items-center">
      <a href="/turnos" 
         class="adm-button">
        Administración de Turnos
      </a>
    </div>
  </div>
  
</main>

<style>
  main {
  background-color: #ffffff;
  color: #333333;
}
.welcome-section {
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
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


.calendar-container {
  border: 2px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.month-year {
  font-size: 1.25rem;
  font-weight: bold;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.calendar-day-header {
  font-weight: bold;
  text-align: center;
}

.calendar-day {
  padding: 8px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.calendar-day:hover {
  background-color: #e0e0e0;
  cursor: pointer;
}

.prev-month,
.next-month {
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2:1 column ratio */
  gap: 10px;
}

.left-column {
  grid-column: 1;
}

.right-column {
  grid-column: 2;
  display: flex; /* Activa Flexbox */
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 100%; /* Asegura que tome toda la altura del contenedor */
}
.adm-button {
    background-color: #FFA500;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  .adm-button:hover {
    background-color: #FF8C00;
  }

</style>
