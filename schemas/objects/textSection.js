export default {
	title: 'Text-Abschnitt',
	name: 'textSection',
	type: 'object',
	fields: [
		{
			name: 'text',
			type: 'portableText',
			title: 'Text'
		}
	],
	preview: {
		select: {
			section: 'text'
		},
		prepare({ section }) {
			return {
				title: `${section[0].children[0].text}`,
				subtitle: `${section[1].children[0].text}`
			};
		}
	}
};
