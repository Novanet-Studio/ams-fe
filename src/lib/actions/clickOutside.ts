// export default (node, parameters) => {
// 	const { exclude = [], handler } = parameters;
// 	const clickHandler = (event) => {
// 		if (
// 			!node.contains(event.target) &&
// 			!exclude.some((excludedNode) => excludedNode.contains(event.target))
// 		) {
// 			handler();
// 		}
// 	};

// 	const options = {
// 		capture: true,
// 		passive: true
// 	};
// 	document.addEventListener('click', clickHandler, options);

// 	return {
// 		destroy() {
// 			document.removeEventListener('click', clickHandler, options);
// 		}
// 	};
// };

/** Dispatch event on click outside of node */
export function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickoutside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
