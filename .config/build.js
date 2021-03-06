const fs = require("fs"),
  packages = [
    'core',
    'http',
    'http-client',
    'router'
  ];

// update `VERSION` in package.json for all sub-packages
const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
packages.map(package => {
  const packagePath = `build/${package}/package.json`;
  package = fs.readFileSync(packagePath, 'utf8');
  fs.writeFileSync(packagePath, package.replace(/VERSION/g, version));
});
