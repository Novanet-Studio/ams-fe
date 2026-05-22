import { load_ProductsBySubcategory } from '$houdini';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	return await load_ProductsBySubcategory({
		event,
		variables: { subcategoryName: event.params.product }
	});
};
