import type { ProductsBySubcategoryVariables } from './$houdini';

export const _ProductsBySubcategoryVariables: ProductsBySubcategoryVariables = ({ params }) => {
	return {
		subcategoryName: params.product
	};
};
