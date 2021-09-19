Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-dynamic-template',
  summary: 'Fork of iron:dynamic-template for Firestorm',
  version: '1.0.5',
  git: 'https://github.com/meteorhubdotnet/iron-dynamic-template'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.3.6');

  api.use('blaze@2.4.0');
  api.use('underscore');
  api.use('ui@1.0.13');
  api.use('jquery@3.0.0');
  api.use('tracker');
  api.use('reactive-var');
  api.use('templating@1.4.0');
  api.use('random');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.5');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.5');

  // api.addFiles('version_conflict_error.js');
  api.addFiles('dynamic_template.html');
  api.addFiles('dynamic_template.js');
  api.addFiles('blaze_overrides.js');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@2.3.6');

  api.use('meteorhubdotnet:firestorm-iron-dynamic-template');
  api.use('templating');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('blaze');
  api.use('deps');

  api.addFiles('dynamic_template_test.html', 'client');
  api.addFiles('dynamic_template_test.js', 'client');
});
