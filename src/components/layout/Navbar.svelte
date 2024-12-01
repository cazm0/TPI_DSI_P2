<script>
  import logo from '$lib/../public/SART.png';
  let isLoggedIn = false;
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

  .login-button {
    background-color: #FFA500;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  .login-button:hover {
    background-color: #FF8C00;
  }
</style>

<nav>
  <!-- Logo alineado a la izquierda -->
  <div class="logo">
    <img src={logo} alt="Logo" />
  </div>
  
  <!-- Links centrados -->
  <div class="links">
    <a href="/">Inicio</a>
    <a href="/consultas">Consultas</a>
    <a href="/tarifas">Tarifas</a>
    <a href="/turnos">Turnos</a>
  </div>

  <!-- Login alineado a la derecha -->
  {#if !isLoggedIn}
    <a href="/login" class="login-button">Iniciar sesión</a>
  {/if}
</nav>