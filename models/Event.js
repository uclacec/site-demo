var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Model
 * ==========
 */

var Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Event.add({
	title: { type: String, required: true },
    date_time: {type: Types.Datetime, required: true, initial: true, label: 'Event Time'}, 
    state: { type: Types.Select, options: 'published, archived', default: 'published', index: true, initial: true },
	event_type: { type: Types.Select, options: 'concerts, speakers, films, festivals', index: true, initial: true, label: 'Event Type' },
	image: { type: Types.S3File},
    description: { type: Types.Html, wysiwyg: true, height: 150, required: true, initial: true },
    location: { type: String, required: true, initial: true },
    fb_link : { type: Types.Url, required: true, initial: true, label: 'Facebook Link' },
    res_link: { type: Types.Url, required: false, label: 'Reservation Link' },
    blog_link: { type: Types.Url, required: false, label: 'Blog Link' },
	categories: { type: Types.Relationship, ref: 'TagCategory', many: true, initial: true }
});

Event.defaultColumns = 'title, event_type|20%, date_time|20%, state|20%';
Event.register();
