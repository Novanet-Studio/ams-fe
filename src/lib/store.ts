import { writable } from 'svelte/store';

export const isOpen = writable(false);
export const elementColor = writable<'light' | 'dark'>('light');
export const scrollY = writable(0);
