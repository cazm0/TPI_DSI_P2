<script>
  import { page } from '$app/stores'; // Para acceder a los parámetros de la URL
  import Navbar from '../../../components/layout/Navbar.svelte';
  import { onMount } from 'svelte';
  // Datos simulados
  let consultas = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', mensajes: [
      ['cliente', 'Hola, quiero saber algo.'],
      ['cliente', '¿Cómo puedo saber el estado de mi pedido?'],
      ['usuario', '¡Hola! Soy del servicio de atención al cliente. Te ayudaré con tu consulta.'],
      ['cliente', 'Gracias, ¿puedes decirme si ya está en camino?']
    ] },
    { id: 2, nombre: 'María', apellido: 'Gómez', mensajes: [['cliente', '¿Cómo puedo mejorar mi cuenta?']] },
    { id: 3, nombre: 'Carlos', apellido: 'López', mensajes: [
      ['cliente', 'Quiero saber algo sobre mi pedido.'],
      ['usuario', '¡Hola! Soy del servicio de atención al cliente. ¿Cuál es tu consulta?'],
      ['cliente', '¿Dónde puedo realizar el seguimiento del envío?']
    ] },
  ];

  // Obtener el id de la consulta desde la URL
  let { slug } = $page.params;
  
  // Buscar la consulta correspondiente
  let consulta = consultas.find(c => c.id == slug);
  
  let nuevomensaje = '';
  onMount(() => {
    document.title = consulta ? `Consulta - ${consulta.id}` : 'Consulta no encontrada';
  });
  // Función para enviar mensaje
  function enviarMensaje() {
    if (nuevomensaje.trim()) {
      // Agregar el nuevo mensaje y forzar reactividad
      consulta.mensajes = [...consulta.mensajes, ['usuario', nuevomensaje]];
      nuevomensaje = ''; // Limpiar el input

      // Desplazar el chat hacia abajo
      scrollToBottom();
    }
  }
  function scrollToBottom() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
</script>

<Navbar />

<main class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
  <section>
    {#if consulta}
      <h2 class="text-2xl font-semibold text-blue-900 mb-4">Chat de {consulta.nombre} {consulta.apellido}</h2>
      
      <div class="chat-container space-y-4 max-h-80 overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-inner">
        {#each consulta.mensajes as mensaje}
          <p class="chatbox {mensaje[0]}">{mensaje[1]}</p>
        {/each}
      </div>

      <div class="input-container mt-4 flex items-center space-x-2">
        <input
          type="text"
          bind:value={nuevomensaje}
          placeholder="Responder al cliente"
          class="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          on:keydown="{(e) => e.key === 'Enter' && enviarMensaje()}"
        />
        <button
          on:click={enviarMensaje}
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Enviar
        </button>
      </div>
    {:else}
      <p>Consulta no encontrada</p>
    {/if}
  </section>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 1rem;  
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 1rem;
  }

  .chat-container {
    display: flex;
    flex-direction: column; 
    margin-bottom: 1rem;
    max-height: 300px;
    overflow-y: auto;
    padding: 0.25rem;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #ddd;
  }

  .chat-row {
    display: flex;
    align-items: center;
  }

  .chatbox {
    padding: 0.5rem ;
    border-radius: 12px;
    max-width: 75%;
    word-wrap: break-word;
    font-size: 0.9rem;
    margin-top:2px;
    margin-bottom:8px;
  }

  .cliente {
    justify-content: flex-start;
    background-color: #7a8582;
    color: #fff;
    align-self: flex-start;
  }

  .usuario {
    justify-content: flex-end;
    background-color: #2b97b3;
    color: #fff;
    align-self: flex-end;
  }

  .input-container {
    display: flex; 
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #2b97b3;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  button:hover {
    background-color: #257b91;
  }
</style>
