import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';

// Object types
import textSection from './objects/textSection';
import newsletter from './objects/newsletter';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		/* Your types here! */
		page,
		textSection,
		newsletter
	])
});
