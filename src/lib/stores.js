import { writable } from 'svelte/store';

// Creamos un store 'isLoggedIn' para manejar el estado de inicio de sesión
export const isLoggedIn = writable(false);