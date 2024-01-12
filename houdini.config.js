/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'http://localhost:1337/graphql'
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
