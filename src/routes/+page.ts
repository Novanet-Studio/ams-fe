import { load_HomeCategories } from '$houdini';
import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = async (event) => {
	const houdiniData = await load_HomeCategories({ event });

	const res = await event.fetch('/api/info?key=home');

	let contentData = [];
	if (res.ok) {
		contentData = await res.json();
	}

	return {
		...houdiniData,
		content: contentData
	};
};
