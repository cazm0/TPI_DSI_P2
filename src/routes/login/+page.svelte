<script>
  import { goto } from '$app/navigation'; // Para redirigir
  import logo from '$lib/../public/SART.png';
  import { onMount } from 'svelte';
    onMount(() => {
    document.title = 'Iniciar Sesión';
    });
  import { isLoggedIn } from '$lib/stores';
  let email = '';
  let password = '';
  let errorMessage = '';

  // Función para manejar el inicio de sesión
  function handleLogin() {
    if (email && password) {
      // Cuando los campos son completos, actualizamos el store a 'true'
      isLoggedIn.set(true); // Cambia el estado de isLoggedIn

      // Redirige al inicio después de iniciar sesión correctamente
      goto('/'); 
    } else {
      errorMessage = 'Por favor, complete todos los campos.';
    }
  }
</script>

<main class="bg-blue-900 min-h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
    <a href="/" class="flex justify-center mb-6">
      <img src={logo} alt="Logo" class="w-36 h-auto" />
    </a>
    <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Inicio de Sesión</h1>

    <form on:submit|preventDefault={handleLogin} class="space-y-4">
      <div>
        <label for="email" class="block text-gray-600 mb-2">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="Ingrese su correo"
          required
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label for="password" class="block text-gray-600 mb-2">Contraseña:</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="Ingrese su contraseña"
          required
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      {#if errorMessage}
        <p class="text-red-500 text-sm">{errorMessage}</p>
      {/if}
  
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Iniciar Sesión
      </button>
    </form>

    <!-- Enlace de "¿Has olvidado tu contraseña?" -->
    <p class="text-center text-gray-600 mt-4">
      <span class="underline cursor-pointer">¿Has olvidado tu contraseña?</span>
    </p>
  </div>
</main>
  
  <style>
    form {
      display: flex;
      flex-direction: column;
    }
  
    label {
      margin-bottom: 0.5rem;
      text-align: left;
    }
  
    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  </style>
  