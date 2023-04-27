Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-dynamic-template',
  summary: 'Fork of iron:dynamic-template for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/iron-dynamic-template'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');

  api.use('underscore');
  api.use('blaze@2.6.2');
  api.use('jquery@3.0.0');
  api.use('tracker');
  api.use('reactive-var');
  api.use('templating@1.4.2');
  api.use('random');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.15');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.15');

  // api.addFiles('version_conflict_error.js');
  api.addFiles('dynamic_template.html');
  api.addFiles('dynamic_template.js');
  api.addFiles('blaze_overrides.js');
});
