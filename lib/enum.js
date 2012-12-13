function EnumItem (name, id, parent) {
  this.name = name;
  this.id = id;
  Object.defineProperty(this, 'parent', { value: parent });
}

EnumItem.prototype.toString = function () {
  return this.name;
};

EnumItem.prototype.valueOf = function () {
  return this.id;
};

EnumItem.prototype.hasFlag = function (item) {
  if (item instanceof EnumItem) {
    if (item.parent === this.parent) {
      return (this.id & item.id) === item.id;
    }
  }
  return false;
};

EnumItem.prototype.isA = function (item) {
  if (item instanceof EnumItem) {
    if (item.parent === this.parent) {
      return (this.id & item.id) === this.id;
    }
  }
  return false;
};

EnumItem.prototype.isEqual = function (item) {
  return (item instanceof EnumItem) && (this.id === item.id);
};

function Enum (list, abstracts) {
  var i = 0,
      name = '',
      abstractNames = [],
      id = 1;

  this.None = new EnumItem('None', 0, this);  
  for (i = 0; i < list.length; ++ i) {
    name = list[i];
    this[name] = new EnumItem(name, id, this);
    id = id << 1;
  }

  if (typeof abstracts === 'object' && abstracts !== null) {
    abstractNames = Object.keys(abstracts);
    for (i = 0; i < abstractNames.length; ++ i) {
      name = abstractNames[i];
      this[name] = this[name] || new EnumItem(name, abstracts[name].map(function (name) {return this[name].id;}.bind(this)).reduce(function (a, b) {return a + b;}), this);
    }
  }
}

module.exports = Enum;

if (!module.parent) {
  var Device = new Enum(['SmartPhone', 'FeaturePhone', 'Tablet', 'PC'], {'Mobile': ['SmartPhone', 'FeaturePhone']});
  console.log(Device.SmartPhone);
  console.log(Device.FeaturePhone);
  console.log(Device.Tablet);
  console.log(Device.PC);
  console.log(Device.Mobile);
  console.log(Device.Mobile.hasFlag(Device.SmartPhone));
  console.log(Device.Mobile.hasFlag(Device.Tablet));  
  console.log(Device.Mobile.isEqual(Device.Mobile));
}