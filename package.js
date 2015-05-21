Package.describe({
  summary: 'Slug behavior for Meteor Astronomy',
  version: '0.1.0',
  name: 'jagi:astronomy-slug-behavior',
  git: 'https://github.com/jagi/meteor-astronomy-slug-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('jagi:astronomy-behaviors@0.5.1');
  api.use('underscore');

  // Behavior.
  api.addFiles('lib/behavior/events.js', ['client', 'server']);
  api.addFiles('lib/behavior/behavior.js', ['client', 'server']);
});
