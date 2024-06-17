var JavaKilg = Object.create(null);
JavaKilg.constructor = JavaKilg;
JavaKilg.toString = function() {
  return "[JavaKilg Native Function]";
}
JavaKilg.js = function(func, param) {
  switch (String(func) + (param === undefined ? "" : ("." + String(param))).toLowerCase()) {
    case "dom.get":
      return JavaKilg.native(function(func, param) {
        switch (String(func).toLowerCase()) {
          case "id":
            return JavaKilg.ValueObject(document.getElementById(param));
            break;
        }
      })
      break;
  }
}
JavaKilg.native = function(func) {
  func.constructor = JavaKilg;
  func.
}
