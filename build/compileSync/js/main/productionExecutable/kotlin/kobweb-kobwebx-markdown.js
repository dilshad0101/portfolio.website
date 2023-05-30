(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-kobwebx-markdown'] = factory(typeof this['kobweb-kobwebx-markdown'] === 'undefined' ? {} : this['kobweb-kobwebx-markdown']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-kobwebx-markdown.js.map
