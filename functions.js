//essentially just a place for me to keep functions so I can IMPORT them in other files 
const { MessageMentions: { USERS_PATTERN } } = require('discord.js');

function getUserFromMention(mention) {
	// The id is the first and only match found by the RegEx.
	const matches = mention.match(USERS_PATTERN);

	// If supplied variable was not a mention, matches will be null instead of an array.
	if (!matches) return;

	// The first element in the matches array will be the entire mention, not just the ID,
	// so use index 1.
	const id = matches[1];

	return client.users.cache.get(id);
}
    
