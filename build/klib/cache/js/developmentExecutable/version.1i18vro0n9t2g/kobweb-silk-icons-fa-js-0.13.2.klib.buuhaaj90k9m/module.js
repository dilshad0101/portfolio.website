(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-kobweb-silk-icons-fa'] = factory(typeof this['kobweb-kobweb-silk-icons-fa'] === 'undefined' ? {} : this['kobweb-kobweb-silk-icons-fa']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
