var OS = require('./os'),
    Device = require('./device'),
    Carrier = require('./carrier');

module.exports = {
  iphone: {
    ua: /iPhone/,
    os: OS.iOS,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  ipad: {
    ua: /iPad/,
    os: OS.iOS,
    device: Device.Tablet,
    carrier: Carrier.None
  },
  black_berry: {
    ua: /BlackBerry/,
    os: OS.BrackBerry,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  android: {
    ua: /Android/,
    os: OS.Android,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  android_tablet: {
    ua: /((?!Android.+Mobile)Android)|(Android.+SC-01C)/,
    os: OS.Android,
    device: Device.Tablet,
    carrier: Carrier.None
  },
  windows_phone: {
    ua: /Windows Phone/,
    os: OS.WindowsPhone,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  docomo_fp: {
    ua: /^DoCoMo/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Docomo
  },
  au_fp: {
    ua: /^(?:KDDI|UP.Browser\/.+?)-(.+?) /,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Au
  },
  softbank_fp: {
    ua: /^(?:SoftBank|Semulator)/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Softbank
  },
  emobile_fp: {
    ua: /^emobile\/|^Mozilla\/5.0 \(H11T; like Gecko; OpenBrowser\) NetFront\/3.4$|^Mozilla\/4.0 \(compatible; MSIE 6.0; Windows CE; IEMobile 7.7\) S11HT$/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.None
  },
  willcom_fp: {
    ua: /^Mozilla\/3.0\(WILLCOM/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Willcom
  },
  ddipocket_fp: {
    ua: /^Mozilla\/3.0\(DDIPOCKET/,
    os: OS.None,
    device: Device.FeaturePhone,
    carrier: Carrier.Willcom
  },
  webos: {
    ua: /webOS\//,
    os: OS.webOS,
    device: Device.SmartPhone,
    carrier: Carrier.None
  },
  mac: {
    ua: /(Intel|PPC) Mac OS X/,
    os: OS.Mac,
    device: Device.PC,
    carrier: Carrier.None
  },
  windows: {
    ua: /Windows NT/,
    os: OS.Windows,
    device: Device.PC,
    carrier: Carrier.None
  }
};