var OS = require('./os'),
    Device = require('./device'),
    Carrier = require('./carrier');

var agents = [
  {
    name: 'iPhone',
    ua: /iPhone/,
    os: OS.iOS,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  {
    name: 'iPad',
    ua: /iPad/,
    os: OS.iOS,
    device: Device.Tablet,
    carrier: Carrier.None
  },
  {
    name: 'BlackBerry',
    ua: /BlackBerry/,
    os: OS.BrackBerry,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  {
    name: 'Android(Phone)',
    ua: /Android/,
    os: OS.Android,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  {
    name: 'Android(Tablet)',
    ua: /((?!Android.+Mobile)Android)|(Android.+SC-01C)/,
    os: OS.Android,
    device: Device.Tablet,
    carrier: Carrier.None
  },
  {
    name: 'Windows Phone',
    ua: /Windows Phone/,
    os: OS.WindowsPhone,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  {
    name: 'NTT docomo Feature Phone',
    ua: /^DoCoMo/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Docomo
  },
  {
    name: 'AU Feature Phone',
    ua: /^(?:KDDI|UP.Browser\/.+?)-(.+?) /,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Au
  },
  {
    name: 'SoftBank Feature Phone',
    ua: /^(?:SoftBank|Semulator)/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Softbank
  },
  {
    name: 'EMOBILE Feature Phone',
    ua: /^emobile\/|^Mozilla\/5.0 \(H11T; like Gecko; OpenBrowser\) NetFront\/3.4$|^Mozilla\/4.0 \(compatible; MSIE 6.0; Windows CE; IEMobile 7.7\) S11HT$/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.None
  },
  {
    name: 'Willcom Feature Phone',
    ua: /^Mozilla\/3.0\(WILLCOM/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Willcom
  },
  {
    name: 'DDIPOCKET',
    ua: /^Mozilla\/3.0\(DDIPOCKET/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Willcom
  },
  {
    name: 'webOS',
    ua: /webOS\//,
    os: OS.webOS,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  {
    name: 'Mac',
    ua: /(Intel|PPC) Mac OS X/,
    os: OS.Mac,
    device: Device.PC,
    carrier: Carrier.None
  },
  {
    name: 'Windows',
    ua: /Windows NT/,
    os: OS.Windows,
    device: Device.PC,
    carrier: Carrier.None
  },
  {
    name: 'Unknown',
    ua: /.*/,
    os: OS.None,
    device: Device.None,
    carrier: Carrier.None
  }
];

module.exports = agents;