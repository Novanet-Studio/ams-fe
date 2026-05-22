import { load_Events } from '$houdini';
import type { PageLoad } from './$types';

export const ssr = false;
export const prerender = true;

export const load: PageLoad = async (event) => {
	return await load_Events({ event });
};
