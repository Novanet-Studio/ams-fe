import { capitalizeFirstLetter } from '$lib/utils';
import type { SubcategoryProductsVariables } from './$houdini';

export const ssr = false;
export const prerender = true;

export const _SubcategoryProductsVariables: SubcategoryProductsVariables = ({ params }) => ({
	name: capitalizeFirstLetter(params.product)
});
