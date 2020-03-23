export default {
	title: 'Abschnitt',
	name: 'textSection',
	type: 'object',
	fields: [
		{
			title: 'Absatz',
			name: 'section',
			type: 'array',
			of: [ { type: 'block' } ]
		}
	],
	preview: {
		select: {
			section: 'section'
		},
		prepare({ section }) {
			console.log(section);
			return {
				title: `${section[0].children[0].text}`,
				subtitle: `${section[1].children[0].text}`
			};
		}
	}
};
