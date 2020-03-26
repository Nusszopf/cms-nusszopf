export default {
	title: 'Portable Text',
	name: 'portableText',
	type: 'array',
	of: [
		{
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' }
			],
			marks: {
				decorators: [ { title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' } ],
				annotations: [ { type: 'link' }, { type: 'internalLink' } ]
			}
		}
	]
};