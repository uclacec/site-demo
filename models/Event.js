var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Model
 * ===========
 */

var Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Event.add({
    // event title
	title: { 
        type: String, 
        required: true 
    },
    // time & date of the event
    date_time: {
        type: Types.Datetime, 
        required: true, 
        initial: true, 
        label: 'Event Time'
    }, 
    // state of the event model
    // published when all details are complete (event tile displayed)
    // archived after a certain date (event tile hidden by default)
    state: { 
        type: Types.Select, 
        options: 'published, archived', 
        default: 'published', 
        index: true, 
        initial: true 
    },
    // the type of the event
    // can be "concerts", "speakers", "films", or "festivals"
	event_type: { 
        type: Types.Select, 
        options: 'concerts, speakers, films, festivals', 
        index: true, 
        initial: true, 
        label: 'Event Type' 
    },
    // image file associated with the event
    // hosted using our AWS S3 bucket
    // TODO ... handle multiple image uploads
	image: { 
        type: Types.S3File
    },
    // brief description blurb of the event
    description: { 
        type: Types.Html, 
        wysiwyg: true, 
        height: 150, 
        required: true, 
        initial: true 
    },
    // on-campus location of the event
    location: { 
        type: String, 
        required: true, 
        initial: true 
    },
    // link to the CEC Facebook event page
    fb_link : { 
        type: Types.Url, 
        required: true, 
        initial: true, 
        label: 'Facebook Link' 
    },
    // link to the Eventbrite reservation page
    res_link: { 
        type: Types.Url, 
        required: false, 
        label: 'Reservation Link' 
    },
    // (optional) link to a blog post associated with the event
    blog_link: { 
        type: Types.Url, 
        required: false, 
        label: 'Blog Link' 
    },
    // tags for the event
    // connected to the TagCategory model
	tags: { 
        type: Types.Relationship, 
        ref: 'TagCategory',
        many: true, 
        initial: true 
    },
});

Event.defaultColumns = 'title, event_type|20%, date_time|20%, state|20%';
Event.register();
