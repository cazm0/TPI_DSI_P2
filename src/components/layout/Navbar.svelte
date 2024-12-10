<script>
  import { goto } from '$app/navigation';
  import logo from '$lib/../public/SART.png';
  import { isLoggedIn } from '$lib/stores'; // Importamos el store
  let loggedIn = false;

// Suscribimos el store y reaccionamos al cambio
isLoggedIn.subscribe(value => {
  loggedIn = value; // Actualizamos la variable local cuando cambia el store
});

// Función para manejar el cierre de sesión
function handleLogout() {
  isLoggedIn.set(false); // Cambia el estado del store
  goto('/'); // Redirige al inicio
}
</script>

<style>

  /* Estilos para el navbar */
  nav {
    background-color: #003366; /* Azul oscuro */
    color: white;
    padding: 1rem 2rem; /* Añadimos padding para separar los contenidos */
    display: flex;
    justify-content: space-between; /* Distribuye los elementos */
    align-items: center; /* Alinea verticalmente */
    width: 100%; /* Asegura que ocupe todo el ancho */
    height: 100%;
    box-sizing: border-box; /* Asegura que padding no afecte al tamaño */
  }

  .logo img {
    width: 4rem; /* Tamaño del logo */
    height: auto;
  }

  .links {
    display: flex;
    gap: 1.5rem;
    flex-grow: 1; /* Permite que ocupe el espacio entre el logo y el login */
    justify-content: center; /* Centra los enlaces */
  }

  nav a {
    color: white; /* Blanco para los enlaces */
    text-decoration: none;
    padding: 0.5rem;
    font-size: 1rem;
  }

  nav a:hover {
    color: #FFA500; /* Resalta los enlaces con un color naranja */
  }
</style>

<nav class="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
  <!-- Logo alineado a la izquierda -->
  <div class="logo flex items-center">
    <img src={logo} alt="Logo" class="w-16 h-auto" />
  </div>

  <!-- Links centrados -->
  <div class="links flex space-x-6">
    <a href="/" class="text-white hover:text-orange-400 transition-colors duration-300">Inicio</a>
    <a href="/consultas" class="text-white hover:text-orange-400 transition-colors duration-300">Consultas</a>
    <a href="/tarifas" class="text-white hover:text-orange-400 transition-colors duration-300">Tarifas</a>
    <a href="/turnos" class="text-white hover:text-orange-400 transition-colors duration-300">Turnos</a>
  </div>

  <!-- Login alineado a la derecha -->
  {#if loggedIn}
  <button 
    on:click={handleLogout} 
    class="text-white px-4 py-2 rounded-md font-bold duration-300">
    Cerrar sesión
  </button>
{:else}
  <a href="/login" 
    class="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-600 transition-colors duration-300">
    Iniciar sesión
  </a>
{/if}
</nav>