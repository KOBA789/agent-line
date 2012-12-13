var agentsDef = require('./agent');

var agent = module.exports;

agent.lookup = function (ua) {
  var agent;
  for (var i = 0; i < agentsDef.length; ++ i) {
    agent = agentsDef[i];
    if (agent.ua.test(ua)) {
      return agent;
    }
  }
  return agentsDef[agentsDef.length - 1];
};

agent.Device = require('./device');
agent.OS = require('./os');
agent.Carrier = require('./carrier');

if (!module.parent) {
  var assert = require('assert'),
      OS = require('./os'),
      Device = require('./device'),
      Carrier = require('./carrier');

  var iPhone = agent.lookup('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25');
  assert.ok(iPhone.device.isEqual(Device.SmartPhone));
  assert.ok(iPhone.os.isEqual(OS.iOS));
  assert.ok(iPhone.carrier.isEqual(Carrier.None));
}