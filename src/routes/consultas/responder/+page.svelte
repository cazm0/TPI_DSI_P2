<script>
    import Navbar from '../../../components/layout/Navbar.svelte';

    let consulta = {
        nombre: 'Juan',
        Apellido: 'Perez'
    };

    let mensajes = [
        ['cliente', 'Holaa, quiero hacer una consulta'],
        ['cliente', 'La verdad que no entiendo el sistema'],
        ['usuario', 'Sí, dime qué quieres hacer'],
        ['cliente', "Esto esto y esto"]
    ];

    let nuevomensaje = '';

    // Función para enviar mensaje
    function enviarMensaje() {
        if (nuevomensaje.trim()) {
            mensajes = [...mensajes, ['usuario', nuevomensaje]]; // Agregar mensaje del usuario
            nuevomensaje = ''; // Limpiar input
        }
    }
</script>

<Navbar />

<main>
    <section>
        <h2>Chat de {consulta.nombre} {consulta.Apellido}</h2>
        <div class="chat-container">
            {#each mensajes as mensaje}
            <!-- Se asignan clases según si es cliente o usuario -->
 
                <p class="chatbox {mensaje[0]}">{mensaje[1]}</p> 
            {/each}
        </div>
        <div class="input-container">
            <input
                bind:value={nuevomensaje}
                placeholder="Respondele al cliente"
                on:keydown="{(e) => e.key === 'Enter' && enviarMensaje()}"
            />
            <button on:click={enviarMensaje}>Enviar</button>
        </div>
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
