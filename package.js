Package.describe({
  name: "tvojtech:spiderable",
  summary: "Docker + Port friendly Spiderable package",
  version: "1.0.7",
  git: "https://github.com/ongoworks/spiderable"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('webapp', 'server');
  api.use(['templating'], 'client');
  api.use(['underscore'], ['client', 'server']);

  api.export('Spiderable');

  api.add_files('spiderable.html', 'client');
  api.add_files('spiderable.js', ['client', 'server']);
  api.add_files('spiderable_server.js', 'server');
  api.add_files('spiderable_client.js', 'client');

  api.add_files('phantom_script.js', 'server', { isAsset: true });
});

Package.on_test(function (api) {
  api.use(['spiderable', 'tinytest']);
  api.add_files('spiderable_tests.js', 'server');
});
