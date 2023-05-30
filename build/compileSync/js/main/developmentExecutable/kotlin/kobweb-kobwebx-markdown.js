(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobwebx-markdown'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobwebx-markdown'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobwebx-markdown'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobwebx-markdown'.");
    }
    root['kobweb-kobwebx-markdown'] = factory(typeof this['kobweb-kobwebx-markdown'] === 'undefined' ? {} : this['kobweb-kobwebx-markdown'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.y6;
  var classMeta = kotlin_kotlin.$_$.c6;
  var VOID = kotlin_kotlin.$_$.u9;
  var setMetadataFor = kotlin_kotlin.$_$.z6;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MarkdownContext, 'MarkdownContext', classMeta);
  //endregion
  function get_LocalMarkdownContext() {
    _init_properties_MarkdownContext_kt__bijofm();
    return LocalMarkdownContext;
  }
  var LocalMarkdownContext;
  function get_$stableprop() {
    return 8;
  }
  function MarkdownContext(path, frontMatter) {
    this.path_1 = path;
    this.frontMatter_1 = frontMatter;
    this.$stable_1 = 8;
  }
  protoOf(MarkdownContext).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(MarkdownContext).get_frontMatter_iz7ndr_k$ = function () {
    return this.frontMatter_1;
  };
  function LocalMarkdownContext$lambda() {
    _init_properties_MarkdownContext_kt__bijofm();
    return null;
  }
  var properties_initialized_MarkdownContext_kt_igqsds;
  function _init_properties_MarkdownContext_kt__bijofm() {
    if (properties_initialized_MarkdownContext_kt_igqsds) {
    } else {
      properties_initialized_MarkdownContext_kt_igqsds = true;
      LocalMarkdownContext = compositionLocalOf(VOID, LocalMarkdownContext$lambda);
    }
  }
  return _;
}));

//# sourceMappingURL=kobweb-kobwebx-markdown.js.map
