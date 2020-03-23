export default {
	title: 'Newsletter',
	name: 'newsletter',
	type: 'object',
	fields: [
		{
			title: 'Titel',
			name: 'titel',
			type: 'string'
		},
		{
			title: 'Beschreibung',
			name: 'description',
			type: 'text',
			rows: 2
		},
		{
			title: 'Bestätigung',
			name: 'confirmation',
			type: 'text',
			rows: 2
		}
	]
};
