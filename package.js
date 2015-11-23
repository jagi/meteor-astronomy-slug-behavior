Package.describe({
  summary: 'Slug behavior for Meteor Astronomy',
  version: '1.2.1',
  name: 'zvictor:astronomy-slug-behavior',
  git: 'https://github.com/zvictor/meteor-astronomy-slug-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('zvictor:astronomy@1.2.3');
  api.use('underscore');

  // Behavior.
  api.addFiles('lib/behavior/events.js', ['client', 'server']);
  api.addFiles('lib/behavior/methods.js', ['client', 'server']);
  api.addFiles('lib/behavior/behavior.js', ['client', 'server']);
});
