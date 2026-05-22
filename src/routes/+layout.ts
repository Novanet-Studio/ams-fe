// src/routes/+layout.ts
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }: { url: URL }) => {
	return {
		pathname: url.pathname
	};
};
