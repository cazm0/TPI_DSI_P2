<script>
    import { goto } from '$app/navigation'; // Para redirigir
    import logo from '$lib/../public/SART.png';
    import { onMount } from 'svelte';
    let email = '';
    let password = '';
    let errorMessage = '';
  
    // Función para manejar el inicio de sesión
    function handleLogin() {
      if (email && password) {
        goto('/'); // Redirige al inicio si los campos no están vacíos
      } else {
        errorMessage = 'Por favor, complete todos los campos.';
      }
    }
  </script>
  <main class="login-background">
  <div class="login-container">
    <a href="/" class="logo-link">
      <img src={logo} alt="Logo" class="logo" />
    </a>
    <h1 class="title">Inicio de Sesión</h1>
  
    <form on:submit|preventDefault={handleLogin}>
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" bind:value={email} placeholder="Ingrese su correo" required />
  
      <label for="password">Contraseña:</label>
      <input type="password" id="password" bind:value={password} placeholder="Ingrese su contraseña" required />
  
      {#if errorMessage}
        <p class="error-message">{errorMessage}</p>
      {/if}
  
      <button type="submit" class="btn-login">Iniciar Sesión</button>
    </form>
  </div>
</main>
  
  <style>
    .login-background {
    background-color: #003366; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .login-container {
      max-width: 400px;
      margin: 5rem auto;
      padding: 2rem;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  
    .logo {
      width: 150px;
      height: auto;
      margin-bottom: 1rem;
    }
  
    .title {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 2rem;
    }
  
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
  
    .btn-login {
      background-color: #007BFF;
      color: white;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .btn-login:hover {
      background-color: #0056b3;
    }
  
    .error-message {
      color: red;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  </style>
  