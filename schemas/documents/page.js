export default {
	name: 'page',
	type: 'document',
	title: 'Page',
	fieldsets: [
		{
			title: 'SEO & Metainformationen',
			name: 'metadata',
			description:
				'Nutze https://realfavicongenerator.net/social/ und übertrage dein Ergebnis auf die folgenden Felder.'
		}
	],
	fields: [
		{
			title: 'Seite',
			name: 'page',
			type: 'string'
		},
		{
			title: 'Titel',
			name: 'title',
			type: 'string',
			description:
				'Der Titel wird ebenfalls für die Metainformationen verwendet (z.B. <og:title>) und sollte deshalb maximal 60 Zeichen beinhalten.',
			validation: (Rule) => Rule.required().max(60)
		},
		{
			title: 'Untertitel',
			name: 'subtitle',
			type: 'string'
		},
		{
			title: 'Inhalt',
			name: 'content',
			type: 'array',
			of: [ { type: 'textSection' }, { type: 'newsletter' } ]
		},
		{
			title: 'Beschreibung',
			name: 'description',
			type: 'text',
			rows: 2,
			description: 'Eine gute Beschreibung sollte 150 Zeichen beinhalten. HTML-Code <og:description>.',
			validation: (Rule) => Rule.min(100).max(150),
			fieldset: 'metadata'
		},
		{
			title: 'OpenGraph-Image',
			name: 'ogImage',
			type: 'image',
			description: 'Erstelle das OpenGraph-Image in Auflösung 1200 x 630 oder 1200 x 1200.',
			fieldset: 'metadata'
		},
		{
			title: 'Breite',
			name: 'ogImageWidth',
			type: 'number',
			description: 'HTML-Code <og:image:width>.',
			fieldset: 'metadata'
		},
		{
			title: 'Höhe',
			name: 'ogImageHeight',
			type: 'number',
			description: 'HTML-Code <og:image:height>.',
			fieldset: 'metadata'
		}
	],

	preview: {
		select: {
			title: 'page',
			media: 'ogImage'
		}
	}
};
