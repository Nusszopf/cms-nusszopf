export default {
	title: 'Text-Abschnitt',
	name: 'textSection',
	type: 'object',
	fields: [
		{
			title: 'Absatz',
			name: 'section',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' }
					],
					marks: {
						decorators: [ { title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' } ],
						annotations: [ { type: 'link' }, { type: 'internalLink' } ]
					}
				}
			]
		}
	],
	preview: {
		select: {
			section: 'section'
		},
		prepare({ section }) {
			return {
				title: `${section[0].children[0].text}`,
				subtitle: `${section[1].children[0].text}`
			};
		}
	}
};
