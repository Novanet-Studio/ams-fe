import { load_Categories } from '$houdini';
import type { PageLoad } from './$types';

export const ssr = false;
export const prerender = false;

export const load: PageLoad = async (event) => {
	return await load_Categories({ event });
};
