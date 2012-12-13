var Enum = require('./enum');

module.exports = new Enum([
  'SmartPhone',
  'FeaturePhone',
  'Tablet',
  'PC'
], {
  'Phone': ['SmartPhone', 'FeaturePhone'],
  'Mobile': ['SmartPhone', 'FeaturePhone', 'Tablet']
});