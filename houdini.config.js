/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://avilamultisport-be-a6e286d55805.herokuapp.com/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		JSON: {
			type: 'Object',
			unmarshal: (value) => {
				// const res = value ? JSON.parse(value) : null;
				console.log(value);
				return value;
			},
			marshal: (value) => value && JSON.stringify(value)
		}
	}
};

export default config;
