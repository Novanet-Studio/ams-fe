import type { PageLoad } from './$types';

export const ssr = false;
export const prerender = true;

export const load: PageLoad = async ({ fetch }: any) => {
	const res = await fetch('/api/info?key=training');

	if (res.ok) {
		const content = await res.json();
		return {
			content
		};
	}

	return {
		content: {}
	};
};
