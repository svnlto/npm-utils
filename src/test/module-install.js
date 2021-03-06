gt.module('module install');
var install = require('../module-install');
var path = require('path');

gt.async('install into tmp folder', function () {
  gt.func(install, 'install is a function');
  var options = {
    name: 'lodash',
    prefix: '/tmp/lodash-prefix/',
    registry: 'http://registry.npmjs.org/'
  };
  install(options).then(function () {
    return path.join(options.prefix, '/lib/node_modules/' + options.name);
  })
  .finally(gt.start)
  .done();
});

gt.async('passes command line flags', function () {
  var options = {
    name: 'lodash',
    prefix: '/tmp/lodash-prefix/',
    registry: 'http://registry.npmjs.org/',
    flags: ['--verbose']
  };
  install(options).then(function () {
    return path.join(options.prefix, '/lib/node_modules/' + options.name);
  })
  .finally(gt.start)
  .done();
});
