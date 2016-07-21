Package.describe({
  name: 'jagi:astronomy-slug-behavior',
  version: '2.0.1',
  summary: 'Slug behavior for Meteor Astronomy',
  git: 'https://github.com/jagi/meteor-astronomy-slug-behavior.git'
});

Npm.depends({
  lodash: '4.13.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'es5-shim',
    'jagi:astronomy@2.0.0'
  ], ['client', 'server']);

  api.mainModule('lib/main.js', ['client', 'server']);
});
