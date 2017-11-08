var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	// blog post title
	title: { 
		type: String, 
		required: true 
	},
	// state of post
	// draft: still being worked on (progress can be saved w/o publishing)
	// published: completed blog post (will be displayed on site)
	// archived: completed but no longer displayed
	state: { 
		type: Types.Select, 
		options: 'draft, published, archived', 
		default: 'draft', 
		index: true 
	},
	// author of the blog post
	// connected to the author's User model
	author: { 
		type: Types.Relationship, 
		ref: 'User', 
		index: true 
	},
	// date on which the blog was published
	publishedDate: { 
		type: Types.Date, 
		index: true, 
		dependsOn: { state: 'published' } 
	},
	// an image associated with the blog post
	// TODO ... option to have multiple images
	image: { 
		type: Types.S3File 
	},
	// actual blog content
	content: {
		// the head of the blog post
		// portion displayed on the main blog page
		brief: { 
			type: Types.Html, 
			wysiwyg: true, 
			height: 150 
		},
		// full blog content
		// displayed on the individual blog's page
		extended: { 
			type: Types.Html, 
			wysiwyg: true, 
			height: 400 
		},
	},
	// tags for the blog post
	// connected to the TagCategory model
	tags: { 
		type: Types.Relationship, 
		ref: 'TagCategory', 
		many: true 
	},
});

// add a "content.full" field to the model
// will not be stored in the mongo database
Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
