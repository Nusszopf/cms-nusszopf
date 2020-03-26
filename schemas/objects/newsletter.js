export default {
	title: 'Newsletter',
	name: 'newsletter',
	type: 'object',
	fields: [
		{
			title: 'Titel',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Beschreibung',
			description: 'Dieser Text wird vor dem Absenden der E-Mail-Adresse angezeigt',
			name: 'description',
			type: 'text',
			rows: 2
		},
		{
			title: 'Bestätigung',
			description: 'Dieser Text wird nach dem Absenden der E-Mail-Adresse angezeigt',
			name: 'confirmation',
			type: 'text',
			rows: 2
		}
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'description'
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle
			};
		}
	}
};
