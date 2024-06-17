var JavaKilg = Object.create(null);
JavaKilg.constructor = Object;
JavaKilg.toString = function() {
  return "[JavaKilg In Development]";
}
JavaKilg.empty = Object.create(null);
JavaKilg.empty.constructor = JavaKilg;
JavaKilg.empty.toString = function() {
  return "empty";
};
JavaKilg.empty.toTraditionalType = function() {
  return undefined;
};

JavaKilg.js = function(func, param) {
  switch (String(func) + (param === undefined ? "" : ("." + String(param))).toLowerCase()) {
    case "dom.get":
      return JavaKilg.native(function(func, param) {
        switch (func) {
          case "id":
            return JavaKilg.ValueObject(document.getElementById(param));
            break;
        }
      })
      break;
  }
};
JavaKilg.js.constructor = JavaKilg;
JavaKilg.js.toString = function() {
  return "[JavaKilg Native Function]";
};
JavaKilg.native = function(func, type) {
  func.constructor = JavaKilg.js;
  func.toString = function() {
    return "[JavaKilg Native "+type+"]";
  };
};
