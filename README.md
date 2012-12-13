# Agent-Line

## install

```
npm install agent-install
```

## code

```
var asset = require('assert'),
		agent = require('agent-line'),
		Device = agent.Device,
		OS = agent.OS,
		Carrier = agent.Carrier;

var iPhone = agent.lookup('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25');

assert.ok(iPhone.os.isEqual(OS.iOS));
assert.ok(iPhone.device.isEqual(Device.SmartPhone));
assert.ok(iPhone.device.isA(Device.Phone)); // Phone = SmartPhone | FeaturePhone
assert.ok(iPhone.device.isA(Device.Mobile)); // Mobile = Tablet | Phone

var iPad = agent.lookup('Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25');

assert.ok(iPad.os.isEqual(OS.iOS));
assert.ok(iPad.device.isEqual(Device.Tablet));
assert.ok(iPad.device.isA(Device.Mobile)); // Mobile = Tablet | Phone

var SH06A3 = agent.lookup('DoCoMo/2.0 SH06A3(c500;TC;W30H18)');

assert.ok(SH06A3.device.isEqual(Device.FeaturePhone));
assert.ok(SH06A3.device.isA(Device.Phone));
assert.ok(SH06A3.device.isA(Device.Mobile));
assert.ok(SH06A3.carrier.isA(Carrier.Docomo)); // a feature phone has carrier info
```