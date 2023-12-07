import { writable } from 'svelte/store';

export const isOpen = writable(false);
export const scrollY = writable(0);
export const activeSection = writable({
	home: {
		main: false,
		featured: false,
		brands: false
	}
});
