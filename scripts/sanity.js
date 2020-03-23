/**
 * Generate sanity.json file
 */

const fs = require('fs')

const config = {
	"root": true,
	"project": {
		"name": "nusszopf"
	},
	"api": {
		"projectId": process.env.PROJECT_ID,
		"dataset": "production"
	},
	"plugins": [
		"@sanity/base",
		"@sanity/components",
		"@sanity/default-layout",
		"@sanity/default-login",
		"@sanity/desk-tool"
	],
	"parts": [
		{
			"name": "part:@sanity/base/schema",
			"path": "./schemas/schema.js"
		}
	]
}

fs.writeFile("sanity.json", JSON.stringify(config), err => {
	if(err) {console.log('error', err)};
});
