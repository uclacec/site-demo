var keystone = require('keystone');

/**
 * TagCategory Model
 * ==================
 */

var TagCategory = new keystone.List('TagCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

TagCategory.add({
	name: { type: String, required: true },
});

TagCategory.relationship({ ref: 'Post', path: 'categories' });

TagCategory.register();
