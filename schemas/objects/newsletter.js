export default {
	title: 'Newsletter',
	name: 'newsletter',
	type: 'object',
	fields: [
		{
			title: 'Typ',
			name: 'type',
			type: 'array',
			of: [ { type: 'string' } ],
			options: {
				list: [ { title: 'Anmelden', value: 'subscribe' }, { title: 'Abmelden', value: 'unsubscribe' } ]
			},
			validation: (Rule) => Rule.required()
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
			subtitle: 'type'
		},
		prepare({ subtitle }) {
			console.log(subtitle);
			return {
				title: 'Newsletter',
				subtitle: subtitle[0] === 'subscribe' ? 'Anmelden' : 'Abmelden'
			};
		}
	}
};
