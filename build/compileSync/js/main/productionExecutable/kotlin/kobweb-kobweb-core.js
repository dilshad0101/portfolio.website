(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './html-html-core.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-kobweb-core'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobweb-core'.");
    }
    root['kobweb-kobweb-core'] = factory(typeof this['kobweb-kobweb-core'] === 'undefined' ? {} : this['kobweb-kobweb-core'], this['androidx-runtime'], this['html-html-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.s1;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var protoOf = kotlin_kotlin.$_$.q5;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var objectMeta = kotlin_kotlin.$_$.p5;
  var VOID = kotlin_kotlin.$_$.u7;
  var setMetadataFor = kotlin_kotlin.$_$.r5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var emptyMap = kotlin_kotlin.$_$.t2;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.j1;
  var substringAfterLast = kotlin_kotlin.$_$.s6;
  var plus = kotlin_kotlin.$_$.n3;
  var equals = kotlin_kotlin.$_$.z4;
  var getStringHashCode = kotlin_kotlin.$_$.d5;
  var hashCode = kotlin_kotlin.$_$.e5;
  var classMeta = kotlin_kotlin.$_$.w4;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r7;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var A$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var Enum = kotlin_kotlin.$_$.y6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var charSequenceLength = kotlin_kotlin.$_$.v4;
  var joinToString = kotlin_kotlin.$_$.c3;
  var objectCreate = kotlin_kotlin.$_$.o5;
  var removePrefix = kotlin_kotlin.$_$.n6;
  var startsWith = kotlin_kotlin.$_$.q6;
  var drop = kotlin_kotlin.$_$.h6;
  var first = kotlin_kotlin.$_$.j6;
  var Char = kotlin_kotlin.$_$.x6;
  var toString = kotlin_kotlin.$_$.s5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var charArrayOf = kotlin_kotlin.$_$.t4;
  var split = kotlin_kotlin.$_$.p6;
  var getOrNull = kotlin_kotlin.$_$.z2;
  var Exception = kotlin_kotlin.$_$.a7;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.v;
  var captureStack = kotlin_kotlin.$_$.s4;
  var ensureNotNull = kotlin_kotlin.$_$.j7;
  var isBlank = kotlin_kotlin.$_$.k6;
  var startsWith_0 = kotlin_kotlin.$_$.r6;
  var endsWith = kotlin_kotlin.$_$.i6;
  var dropLast = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var last = kotlin_kotlin.$_$.g3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.e3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.e7;
  var isObject = kotlin_kotlin.$_$.k5;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var charSequenceGet = kotlin_kotlin.$_$.u4;
  var removeSuffix = kotlin_kotlin.$_$.o6;
  var substringAfter = kotlin_kotlin.$_$.t6;
  var contains = kotlin_kotlin.$_$.e6;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toMutableMap = kotlin_kotlin.$_$.w3;
  var KMutableProperty1 = kotlin_kotlin.$_$.y5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(RootNode, 'RootNode', classMeta, Node);
  setMetadataFor(StaticNode, 'StaticNode', classMeta, Node);
  setMetadataFor(DynamicNode, 'DynamicNode', classMeta, Node);
  setMetadataFor(ResolvedEntry, 'ResolvedEntry', classMeta);
  setMetadataFor(RouteTree, 'RouteTree', classMeta);
  setMetadataFor(PageData, 'PageData', classMeta);
  setMetadataFor(ComposableSingletons$RouteTreeKt, 'ComposableSingletons$RouteTreeKt', objectMeta);
  setMetadataFor(Router, 'Router', classMeta);
  setMetadataFor(RouteInterceptorScope, 'RouteInterceptorScope', classMeta);
  setMetadataFor(UpdateHistoryMode, 'UpdateHistoryMode', classMeta, Enum);
  setMetadataFor(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt', objectMeta);
  //endregion
  function KobwebApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z12(1244630298);
    sourceInformation($composer_0, 'C(KobwebApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.q12(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.q11()) {
      if (isTraceInProgress()) {
        traceEventStart(1244630298, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp$composable (App.kt:44)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp0_Style$composable = DefaultStyleSheet_getInstance();
      var tmp1_Style$composable = $composer_0;
      var $composer_1 = tmp1_Style$composable;
      $composer_1.k11(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, tmp0_Style$composable.p1w(), $composer_1, 0, 1);
      $composer_1.l11();
      content($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.pw();
    }
    var tmp0_safe_receiver = $composer_0.a13();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z16(KobwebApp$composable$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$null) {
    padding($this$null, [get_px(0)]);
    margin($this$null, [get_px(0)]);
    return Unit_getInstance();
  }
  function DefaultStyleSheet$lambda_0($this$null) {
    boxSizing($this$null, 'border-box');
    return Unit_getInstance();
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet.call(this);
    this.u1w('html, body', DefaultStyleSheet$lambda);
    this.u1w('*', DefaultStyleSheet$lambda_0);
    this.w2g_1 = 0;
  }
  protoOf(DefaultStyleSheet).t1w = function (selector, cssRule) {
    return this.s1w(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$composable$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_AppGlobalsLocal() {
    _init_properties_AppGlobals_kt__v0sn2p();
    return AppGlobalsLocal;
  }
  var AppGlobalsLocal;
  function AppGlobalsLocal$lambda() {
    _init_properties_AppGlobals_kt__v0sn2p();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mapOf' call
    tmp$ret$0 = emptyMap();
    return tmp$ret$0;
  }
  var properties_initialized_AppGlobals_kt_dlyhbl;
  function _init_properties_AppGlobals_kt__v0sn2p() {
    if (properties_initialized_AppGlobals_kt_dlyhbl) {
    } else {
      properties_initialized_AppGlobals_kt_dlyhbl = true;
      AppGlobalsLocal = compositionLocalOf(VOID, AppGlobalsLocal$lambda);
    }
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function RouteInfo(route, dynamicParams) {
    this.x2g_1 = route;
    this.y2g_1 = dynamicParams;
    this.z2g_1 = substringAfterLast(this.x2g_1.f2h_1, _Char___init__impl__6a9atx(47));
    this.a2h_1 = this.x2g_1.f2h_1;
    this.b2h_1 = plus(this.y2g_1, this.x2g_1.g2h_1);
    this.c2h_1 = this.x2g_1.h2h_1;
    this.d2h_1 = 0;
  }
  protoOf(RouteInfo).toString = function () {
    return this.x2g_1.toString();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.a2h_1 === this.a2h_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.b2h_1, this.b2h_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.c2h_1 == this.c2h_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.a2h_1);
    result = imul(31, result) + hashCode(this.b2h_1) | 0;
    var tmp = imul(31, result);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.c2h_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    return result;
  };
  protoOf(RouteInfo).j2h = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).k2h = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.x2g_1.f2h_1 : path;
    queryParams = queryParams === VOID ? this.x2g_1.g2h_1 : queryParams;
    fragment = fragment === VOID ? this.x2g_1.h2h_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.y2g_1 : dynamicParams;
    return $super === VOID ? this.j2h(path, queryParams, fragment, dynamicParams) : $super.j2h.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).m2h = function () {
    var tmp = this.l2h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).n2h = function (router) {
    this.l2h_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PageContext(router) {
    Companion_getInstance_0();
    this.o2h_1 = router;
    this.p2h_1 = mutableStateOf(null);
    this.q2h_1 = 8;
  }
  protoOf(PageContext).r2h = function (value) {
    this.p2h_1.kn(value);
  };
  function rememberPageContext$composable($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.k11(1885592798);
    sourceInformation($composer_0, 'C(rememberPageContext$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1885592798, $changed, -1, 'com.varabyte.kobweb.core.rememberPageContext$composable (PageContext.kt:133)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_PageContextLocal();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.x12(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('PageContext is only valid within a @Page composable');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
    return tmp0_0;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (properties_initialized_PageContext_kt_8ruj8w) {
    } else {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
    }
  }
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.s2h_1 = config;
    this.t2h_1 = router;
    this.u2h_1 = 8;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  function MutableKobwebConfig() {
    this.v2h_1 = new MutableOpenLinkStrategies();
    this.w2h_1 = 8;
  }
  protoOf(MutableKobwebConfig).x2h = function () {
    return this.v2h_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).e2f = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.y2h_1 = internal;
    this.z2h_1 = external;
    this.a2i_1 = 8;
  }
  protoOf(MutableOpenLinkStrategies).b2i = function () {
    return this.y2h_1;
  };
  protoOf(MutableOpenLinkStrategies).c2i = function () {
    return this.z2h_1;
  };
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (properties_initialized_KobwebConfig_kt_yaxikm) {
    } else {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
    }
  }
  function Anchor$composable(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z12(1487018297);
    sourceInformation($composer_0, 'C(Anchor$composable)P(3!1,5,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.q12(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iv(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iv(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.r12(autoPrefix_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.q12(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.q11()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1487018297, $dirty, -1, 'com.varabyte.kobweb.navigation.Anchor$composable (Anchor.kt:48)');
      }
      var href_0 = prependIf(Companion_getInstance_3(), autoPrefix_0._v, href);
      var ctx = rememberPageContext$composable($composer_0, 0);
      A$composable(href_0, Anchor$composable$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href_0), content_0._v, $composer_0, 896 & $dirty >> 9, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.pw();
    }
    var tmp0_safe_receiver = $composer_0.a13();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z16(Anchor$composable$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, content_0, $changed, $default));
    }
  }
  function Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_1().e2f().x2h().b2i()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_1().e2f().x2h().c2i()) : tmp1_elvis_lhs;
      $ctx.o2h_1.h2i($href, VOID, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.o1y();
      evt.p1y();
      return Unit_getInstance();
    };
  }
  function Anchor$composable$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.b1s(Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href));
      return Unit_getInstance();
    };
  }
  function Anchor$composable$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor$composable($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_IN_NEW_TAB_BACKGROUND_instance;
  var OpenLinkStrategy_IN_NEW_TAB_FOREGROUND_instance;
  var OpenLinkStrategy_IN_NEW_WINDOW_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_getInstance();
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
    OpenLinkStrategy_IN_NEW_TAB_BACKGROUND_instance = new OpenLinkStrategy('IN_NEW_TAB_BACKGROUND', 2);
    OpenLinkStrategy_IN_NEW_TAB_FOREGROUND_instance = new OpenLinkStrategy('IN_NEW_TAB_FOREGROUND', 3);
    OpenLinkStrategy_IN_NEW_WINDOW_instance = new OpenLinkStrategy('IN_NEW_WINDOW', 4);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    var tmp0_subject = strategy;
    var tmp0 = tmp0_subject.h4_1;
    switch (tmp0) {
      case 0:
        _this__u8e3s4.open(href, '_self');
        ;
        break;
      case 1:
        _this__u8e3s4.open(href, '_blank');
        ;
        break;
      case 2:
        _this__u8e3s4.open(href, '_blank');
        ;
        break;
      case 3:
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = _this__u8e3s4.open(href, '_blank');
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.open.<anonymous>' call
        var tmp0_safe_receiver = tmp0_also;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.focus();
        }
        tmp$ret$0 = tmp0_also;

        ;
        break;
      case 4:
        _this__u8e3s4.open(href);
        ;
        break;
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return (_this__u8e3s4.i1z_1 ? true : _this__u8e3s4.u1z_1) ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    var tmp$ret$11;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$10;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    tmp0_apply.va(path);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !queryParams.h();
    if (tmp$ret$0) {
      tmp0_apply.t4(_Char___init__impl__6a9atx(63));
      var tmp$ret$9;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$8;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(queryParams.f());
      var tmp$ret$1;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$1 = queryParams.o1().c();
      var tmp0_iterator = tmp$ret$1;
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$7;
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$2 = item.n1();
        var key = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$3 = item.q1();
        var value = tmp$ret$3;
        var tmp$ret$6;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'kotlin.apply' call
        var tmp0_apply_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        tmp0_apply_0.va(key);
        var tmp$ret$4;
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp$ret$4 = charSequenceLength(value) > 0;
        if (tmp$ret$4) {
          tmp0_apply_0.t4(_Char___init__impl__6a9atx(61));
          tmp0_apply_0.va(value);
        }
        tmp$ret$5 = tmp0_apply_0;
        tmp$ret$6 = tmp$ret$5.toString();
        tmp$ret$7 = tmp$ret$6;
        tmp0_mapTo.a(tmp$ret$7);
      }
      tmp$ret$8 = tmp0_mapTo;
      tmp$ret$9 = tmp$ret$8;
      tmp0_apply.va(joinToString(tmp$ret$9, '&'));
    }
    if (!(fragment == null)) {
      tmp0_apply.t4(_Char___init__impl__6a9atx(35));
      tmp0_apply.va(fragment);
    }
    tmp$ret$10 = tmp0_apply;
    tmp$ret$11 = tmp$ret$10.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).i2i = function (path) {
    return !(this.j2i(path) == null);
  };
  protoOf(Companion_1).j2i = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_1).k2i = function (url) {
    var tmp0_elvis_lhs = this.j2i(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Route(pathQueryAndFragment) {
    Companion_getInstance_2();
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.e2h_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.e2h_1.pathname;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = drop(this.e2h_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp0_check = equals(new Char(first(this.e2h_1.pathname)), new Char(_Char___init__impl__6a9atx(47)));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$0 = 'Check failed.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_2 = tmp$ret$1;
    }
    tmp_1.f2h_1 = tmp_2;
    var tmp_3 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    var tmp1_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this.e2h_1.search;
      tmp$ret$3 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$3) {
        tmp$ret$4 = Unit_getInstance();
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = split(removePrefix(this.e2h_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)]));
      var tmp0_iterator = tmp1_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.g(0);
        // Inline function 'kotlin.collections.set' call
        var tmp$ret$5;
        // Inline function 'kotlin.collections.elementAtOrNull' call
        tmp$ret$5 = getOrNull(keyValue, 1);
        var tmp0_elvis_lhs = tmp$ret$5;
        var tmp0_set = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        tmp1_apply.x2(key, tmp0_set);
      }
    }
    tmp$ret$6 = tmp1_apply;
    tmp_3.g2h_1 = tmp$ret$6;
    var tmp_4 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.takeIf' call
    var tmp2_takeIf = this.e2h_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    var tmp$ret$7;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    tmp$ret$7 = startsWith(tmp2_takeIf, '#');
    if (tmp$ret$7) {
      tmp_5 = tmp2_takeIf;
    } else {
      tmp_5 = null;
    }
    tmp$ret$8 = tmp_5;
    var tmp0_safe_receiver = tmp$ret$8;
    tmp_4.h2h_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
    this.i2h_1 = 8;
  }
  protoOf(Route).toString = function () {
    return this.f2h_1 + this.e2h_1.search + this.e2h_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
    this.l2i_1 = 0;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_getInstance_3().m2i(path) : path;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).n2i = function (value) {
    Companion_getInstance_4().p2i(new RoutePrefixImpl(value));
  };
  protoOf(Companion_2).q1 = function () {
    return Companion_getInstance_4().m2h().q2i_1;
  };
  protoOf(Companion_2).m2i = function (path) {
    return Companion_getInstance_4().m2h().m2i(path);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.o2i_1 = null;
  }
  protoOf(Companion_3).p2i = function (value) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.o2i_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      tmp$ret$0 = 'Cannot overwrite route prefix once set';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.o2i_1 = value;
  };
  protoOf(Companion_3).r2i = function () {
    if (this.o2i_1 == null) {
      this.o2i_1 = new RoutePrefixImpl('');
    }
    return this.o2i_1;
  };
  protoOf(Companion_3).m2h = function () {
    return ensureNotNull(this.r2i());
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function RoutePrefixImpl(value) {
    Companion_getInstance_4();
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(value);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp$ret$3 = startsWith_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
      tmp$ret$4 = tmp$ret$3;
      tmp_1 = tmp$ret$4;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp$ret$5 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : '' + tmp1_safe_receiver + '/';
      tmp$ret$6 = tmp$ret$5;
      tmp_2 = tmp$ret$6;
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.q2i_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(RoutePrefixImpl).m2i = function (path) {
    if (isBlank(this.q2i_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.q2i_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.q2i_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.q1();
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.q1(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  protoOf(Node).w2i = function (name) {
    return this.s2i_1 === name;
  };
  protoOf(Node).x2i = function (routePart) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.u2i_1;
      var tmp0_iterator = tmp0_firstOrNull.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        tmp$ret$0 = element.w2i(routePart);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function Node(name, method) {
    this.s2i_1 = name;
    this.t2i_1 = method;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.u2i_1 = tmp$ret$0;
    this.v2i_1 = 8;
  }
  protoOf(Node).y2i = function (routePart, method) {
    var tmp;
    if (startsWith_0(routePart, _Char___init__impl__6a9atx(123)) ? endsWith(routePart, _Char___init__impl__6a9atx(125)) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = routePart.length - 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = routePart;
      tmp$ret$1 = tmp$ret$0.substring(1, tmp0_substring);
      tmp = new DynamicNode(tmp$ret$1, method);
    } else {
      tmp = new StaticNode(routePart, method);
    }
    var node = tmp;
    this.u2i_1.a(node);
    return node;
  };
  function RootNode() {
    Node.call(this, '', null);
    this.d2j_1 = 0;
  }
  function StaticNode(name, method) {
    Node.call(this, name, method);
    this.i2j_1 = 0;
  }
  protoOf(DynamicNode).w2i = function (name) {
    return true;
  };
  function DynamicNode(name, method) {
    Node.call(this, name, method);
    this.n2j_1 = 0;
  }
  function ResolvedEntry(node, routePart) {
    this.o2j_1 = node;
    this.p2j_1 = routePart;
  }
  function resolve($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var resolved = tmp$ret$0;
    var currNode = $this.q2j_1;
    // Inline function 'kotlin.require' call
    var tmp0_require = routeParts.g(0) === $this.q2j_1.s2i_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.g(i);
        var tmp1_elvis_lhs = currNode.x2i(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        resolved.a(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last);
    return resolved;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.o11(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.q11()) {
        if (isTraceInProgress()) {
          traceEventStart(-729357476, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:133)');
        }
        this$0.r2j_1(404, $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.pw();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function RouteTree() {
    this.q2j_1 = new RootNode();
    this.r2j_1 = ComposableSingletons$RouteTreeKt_getInstance().s2j_1;
  }
  protoOf(RouteTree).t2j = function (route) {
    var tmp0_safe_receiver = resolve(this, route);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : last(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o2j_1;
    return !((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.t2i_1) == null);
  };
  protoOf(RouteTree).u2j = function (route) {
    var resolvedEntries = resolve(this, route.f2h_1);
    var tmp0_safe_receiver = resolvedEntries;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : last(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o2j_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.t2i_1;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      tmp = ComposableLambda$invoke$ref(composableLambdaInstance(-729357476, true, RouteTree$createPageData$lambda(this)));
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var pageMethod = tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var dynamicParams = tmp$ret$0;
    var tmp4_safe_receiver = resolvedEntries;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp4_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
        var tmp_0 = element.o2j_1;
        if (tmp_0 instanceof DynamicNode) {
          // Inline function 'kotlin.collections.set' call
          var tmp0_set = element.o2j_1.s2i_1;
          var tmp1_set = element.p2j_1;
          dynamicParams.x2(tmp0_set, tmp1_set);
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(route, dynamicParams));
  };
  protoOf(RouteTree).v2j = function (route, method) {
    if (!(resolve(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.q2j_1;
    // Inline function 'kotlin.require' call
    var tmp0_require = routeParts.g(0) === this.q2j_1.s2i_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.g(i);
        var tmp1_elvis_lhs = currNode.x2i(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          var tmp_0 = currNode;
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          var tmp$ret$1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register$composable.<anonymous>' call
          tmp$ret$1 = i === get_lastIndex(routeParts);
          if (tmp$ret$1) {
            tmp_1 = method;
          } else {
            tmp_1 = null;
          }
          tmp$ret$2 = tmp_1;
          tmp = tmp_0.y2i(routePart, tmp$ret$2);
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  function PageData(pageMethod, routeInfo) {
    this.w2j_1 = pageMethod;
    this.x2j_1 = routeInfo;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.u1p(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s12(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.q11()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:84)');
      }
      ErrorPage$composable(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.pw();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.s2j_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage$composable(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z12(24844165);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s12(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.q11()) {
      if (isTraceInProgress()) {
        traceEventStart(24844165, $changed, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable (RouteTree.kt:21)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 542436721, true, ErrorPage$composable$lambda(errorCode));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.k11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.iv(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.m13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().uw_1) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.n13(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.l11();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Div$composable(null, tmp$ret$6, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.pw();
    }
    var tmp0_safe_receiver = $composer_0.a13();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z16(ErrorPage$composable$lambda_0(errorCode, $changed));
    }
  }
  function ErrorPage$composable$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.q11()) {
        if (isTraceInProgress()) {
          traceEventStart(542436721, $changed, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous> (RouteTree.kt:22)');
        }
        Text$composable('Error code: ' + $errorCode, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.pw();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.u1p(p0, p1, p2);
    };
  }
  function ErrorPage$composable$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      ErrorPage$composable($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    illegalDecoyCallException('<set-activePageMethod>');
  }
  function _get_activePageMethod__dw5579($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = activePageMethod$factory();
    tmp$ret$0 = $this.d2i_1.q1();
    return tmp$ret$0;
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.p2h_1.q1();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.p2h_1.kn(tmp0_safe_receiver.k2h(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
        tmp = tmp$ret$0;
      }
      var tmp1_elvis_lhs = tmp;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      } else
        tmp1_elvis_lhs;
    }
    var route = Companion_getInstance_2().j2i(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.e2i_1.u2j(route);
      $set_activePageMethod$$composable_u4dzqq($this, data.w2j_1);
      _this__u8e3s4.r2h(data.x2j_1);
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_2().i2i(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_getInstance_2().k2i(new URL(_this__u8e3s4, window.location.href)).toString();
    var withoutPrefix = remove(Companion_getInstance_3(), hrefResolved);
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.fold' call
    var tmp1_fold = $this.f2i_1;
    var tmp2_fold = (new Route(withoutPrefix)).toString();
    var accumulator = tmp2_fold;
    var tmp0_iterator = tmp1_fold.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var tmp3__anonymous__ufb84q = accumulator;
      var interceptor = new RouteInterceptorScope(tmp3__anonymous__ufb84q);
      element(interceptor);
      tmp$ret$1 = interceptor.d2k();
      accumulator = tmp$ret$1;
    }
    tmp$ret$2 = accumulator;
    return prependIf(tmp, hadPrefix, tmp$ret$2);
  }
  function $set_activePageMethod$$composable_u4dzqq($this, set__$_ezb9bk) {
    var tmp0_setValue = activePageMethod$factory_0();
    return $this.d2i_1.kn(set__$_ezb9bk);
  }
  function Router$lambda(this$0) {
    return function (it) {
      return updatePageContext(Companion_getInstance_0().m2h(), this$0, ensureNotNull(document.location).pathname);
    };
  }
  function Router$renderActivePage$composable$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.q11()) {
        if (isTraceInProgress()) {
          traceEventStart(613218228, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous> (Router.kt:137)');
        }
        $pageMethod($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.pw();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.o11(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda($pageWrapper, $$dirty, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.q11()) {
        if (isTraceInProgress()) {
          traceEventStart(-628364167, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous> (Router.kt:136)');
        }
        var tmp_0 = $pageWrapper._v;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 613218228, true, Router$renderActivePage$composable$lambda$lambda($pageMethod));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.k11(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.iv(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.m13();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().uw_1) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.n13(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.l11();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp_0(tmp$ret$6, $composer_0, 6 | 112 & $$dirty << 3);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.pw();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.o11(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.e2k($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Router() {
    this.d2i_1 = mutableStateOf(null);
    this.e2i_1 = new RouteTree();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.f2i_1 = tmp$ret$0;
    Companion_getInstance_0().n2h(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
    this.g2i_1 = 8;
  }
  protoOf(Router).f2k = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_getInstance_2().i2i(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp0_all = pathQueryAndFragment_0;
        var indexedObject = tmp0_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          tmp$ret$0 = !equals(new Char(element), new Char(_Char___init__impl__6a9atx(35))) ? !equals(new Char(element), new Char(_Char___init__impl__6a9atx(63))) : false;
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      if (tmp$ret$1) {
        var route = pathQueryAndFragment_0;
        if (!this.e2i_1.t2j(route)) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.e2i_1.t2j(withoutSlash))
              pathQueryAndFragment_0 = withoutSlash;
          } else {
            var withSlash = route + '/';
            if (this.e2i_1.t2j(withSlash))
              pathQueryAndFragment_0 = withSlash;
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp;
    if (updatePageContext(Companion_getInstance_0().m2h(), this, pathQueryAndFragment_0)) {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp1_let = window.location.origin + pathQueryAndFragment_0;
      // Inline function 'kotlin.contracts.contract' call
      if (!(window.location.href === tmp1_let)) {
        var newPathname = !(window.location.pathname === Companion_getInstance_2().k2i(new URL(tmp1_let)).f2h_1);
        var tmp0_subject = updateHistoryMode;
        var tmp0 = tmp0_subject.h4_1;
        if (tmp0 === 0) {
          window.history.pushState(window.history.state, '', tmp1_let);
        } else if (tmp0 === 1) {
          window.history.replaceState(window.history.state, '', tmp1_let);
        }
        if (newPathname) {
          var tmp1_safe_receiver = document.documentElement;
          if (tmp1_safe_receiver == null) {
          } else {
            tmp1_safe_receiver.scrollTop = 0.0;
          }
        }
      }
      var tmp_0;
      if (contains(tmp1_let, _Char___init__impl__6a9atx(35))) {
        var tmp2_safe_receiver = document.getElementById(substringAfter(tmp1_let, _Char___init__impl__6a9atx(35)));
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.scrollIntoView({behavior: 'smooth'});
        }
        tmp_0 = Unit_getInstance();
      }
      tmp$ret$2 = tmp_0;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Router).g2k = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.f2k(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).h2i = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.g2k(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.g2k.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  protoOf(Router).e2k = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z12(1838195952);
    sourceInformation($composer_0, 'C(renderActivePage$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().h2k_1;
    }
    if (isTraceInProgress()) {
      traceEventStart(1838195952, $dirty, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable (Router.kt:130)');
    }
    var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Call 'navigateTo' at least once before calling 'renderActivePage'");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pageMethod = tmp;
    var tmp_0 = [get_PageContextLocal().v16(Companion_getInstance_0().m2h())];
    var tmp$ret$6;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -628364167, true, Router$renderActivePage$composable$lambda(pageWrapper_0, $dirty, pageMethod));
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.k11(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.iv(dispatchReceiver);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.m13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_2;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().uw_1) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>' call
      tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
      var value = tmp$ret$0;
      tmp1_cache.n13(value);
      tmp_2 = value;
    } else {
      tmp_2 = tmp0_let;
    }
    tmp$ret$1 = tmp_2;
    tmp$ret$2 = tmp$ret$1;
    var tmp_3 = tmp$ret$2;
    tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.l11();
    tmp$ret$4 = tmp0;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.a13();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z16(Router$renderActivePage$composable$lambda_0(tmp0_rcvr, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).i2k = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    var tmp0_require = Companion_getInstance_2().i2i(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      tmp$ret$0 = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.e2i_1.v2j(prependIf(Companion_getInstance_3(), autoPrefix, route), pageMethod);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      tmp$ret$1 = 'Registration failure. Path is already registered: ' + route;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).j2k = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.i2k(route, autoPrefix, pageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.i2k.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.y2j_1 = new Route(pathQueryAndFragment);
    this.z2j_1 = this.y2j_1.f2h_1;
    this.a2k_1 = toMutableMap(this.y2j_1.g2h_1);
    this.b2k_1 = this.y2j_1.h2h_1;
    this.c2k_1 = 8;
  }
  protoOf(RouteInterceptorScope).d2k = function () {
    return Route_init_$Create$(this.z2j_1, this.a2k_1, this.b2k_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_getInstance();
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.u1p(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.q12(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.q11()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:130)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.pw();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.h2k_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  //region block: post-declaration
  protoOf(DefaultStyleSheet).s1w = style;
  protoOf(DefaultStyleSheet).u1w = style_0;
  protoOf(DefaultStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(DefaultStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(DefaultStyleSheet).v1w = get_hover;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initKobweb;
  _.$_$.b = get_AppGlobalsLocal;
  _.$_$.c = KobwebApp$composable;
  _.$_$.d = Anchor$composable;
  _.$_$.e = Router;
  _.$_$.f = prependIf;
  _.$_$.g = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-kobweb-core.js.map
