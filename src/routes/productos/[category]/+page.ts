import type { SubcategoriesVariables } from './$houdini';

export const ssr = false;

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const _SubcategoriesVariables: SubcategoriesVariables = ({ params }) => ({
	name: capitalizeFirstLetter(params.category)
});
