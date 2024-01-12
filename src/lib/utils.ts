export const isDev = import.meta.env.DEV;

export const getImage = (name: string) => name.replace('.png', '');

export const getImageUrl = (path: string | undefined) =>
	isDev ? `http://localhost:1337${path}` : path;
