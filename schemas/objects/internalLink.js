import React from 'react';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
	title: 'Interner Link',
	name: 'internalLink',
	type: 'reference',
	description: 'Verlinkung zu einem anderen Dokument',
	to: [ { type: 'page' } ],
	blockEditor: {
		icon: () => '🔗',
		render: InternalLinkRender
	}
};
