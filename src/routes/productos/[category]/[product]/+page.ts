import type { ProductsBySubcategoryVariables } from './$houdini';

export const _ProductsBySubcategoryVariables: ProductsBySubcategoryVariables = ({ params }) => {
	console.log('ProductsBySubcategoryVariables params:', params);

	return {
		subcategoryName: params.product
	};
};
