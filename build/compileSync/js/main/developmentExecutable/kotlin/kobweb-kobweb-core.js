(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobweb-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'kobweb-kobweb-core'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-kobweb-core'.");
    }
    root['kobweb-kobweb-core'] = factory(typeof this['kobweb-kobweb-core'] === 'undefined' ? {} : this['kobweb-kobweb-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-runtime'], this['html-html-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var VOID = kotlin_kotlin.$_$.u9;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Exception = kotlin_kotlin.$_$.v8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var decodeToString = kotlin_kotlin.$_$.t7;
  var THROW_CCE = kotlin_kotlin.$_$.b9;
  var isCharSequence = kotlin_kotlin.$_$.o6;
  var trim = kotlin_kotlin.$_$.o8;
  var toString = kotlin_kotlin.$_$.b7;
  var isBlank = kotlin_kotlin.$_$.y7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n1;
  var split = kotlin_kotlin.$_$.f8;
  var compareTo = kotlin_kotlin.$_$.d6;
  var repeat = kotlin_kotlin.$_$.d8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.y5;
  var protoOf = kotlin_kotlin.$_$.y6;
  var classMeta = kotlin_kotlin.$_$.c6;
  var setMetadataFor = kotlin_kotlin.$_$.z6;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Companion_getInstance = kotlin_kotlin.$_$.v1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o1;
  var CoroutineImpl = kotlin_kotlin.$_$.q5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.p6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a5;
  var intercepted = kotlin_kotlin.$_$.d5;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.r;
  var returnIfSuspended = kotlin_kotlin.$_$.d;
  var SuspendFunction1 = kotlin_kotlin.$_$.r5;
  var Annotation = kotlin_kotlin.$_$.q8;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.v8;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.e8;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.b8;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.w7;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.a7;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.s6;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.r6;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var style_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var selector = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var combine = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var plus = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var plus_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var get_universal = kotlin_org_jetbrains_compose_html_html_core.$_$.d6;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var className = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var attr = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var attr$default = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var attrEquals = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var attrEquals$default = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var attrListContains = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var attrListContains$default = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var attrHyphened = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var attrHyphened$default = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var attrPrefixed = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var attrPrefixed$default = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var attrSuffixed = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var attrSuffixed$default = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var attrContains = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var attrContains$default = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var group = kotlin_org_jetbrains_compose_html_html_core.$_$.m4;
  var descendant = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var desc = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var desc_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var desc_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var desc_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var child = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var sibling = kotlin_org_jetbrains_compose_html_html_core.$_$.y5;
  var adjacent = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.r4;
  var hover = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.p4;
  var get_anyLink = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var get_link = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var get_visited = kotlin_org_jetbrains_compose_html_html_core.$_$.h6;
  var get_localLink = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var get_target = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var get_targetWithin = kotlin_org_jetbrains_compose_html_html_core.$_$.b6;
  var get_scope = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var get_active = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var get_focus = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var get_focusVisible = kotlin_org_jetbrains_compose_html_html_core.$_$.l4;
  var get_playing = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var get_paused = kotlin_org_jetbrains_compose_html_html_core.$_$.l5;
  var get_autofill = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var get_enabled = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var get_disabled = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var get_readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var get_readWrite = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var get_placeholderShown = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var get_default = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var get_checked = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var get_indeterminate = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var get_blank = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var get_valid = kotlin_org_jetbrains_compose_html_html_core.$_$.g6;
  var get_invalid = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var get_inRange = kotlin_org_jetbrains_compose_html_html_core.$_$.t4;
  var get_outOfRange = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var get_required = kotlin_org_jetbrains_compose_html_html_core.$_$.s5;
  var get_optional = kotlin_org_jetbrains_compose_html_html_core.$_$.j5;
  var get_userInvalid = kotlin_org_jetbrains_compose_html_html_core.$_$.f6;
  var get_root = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var get_empty = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var get_first = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var get_firstChild = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var get_lastChild = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var get_onlyChild = kotlin_org_jetbrains_compose_html_html_core.$_$.h5;
  var get_firstOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.j4;
  var get_lastOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var get_onlyOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var get_host = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var host = kotlin_org_jetbrains_compose_html_html_core.$_$.o4;
  var get_defined = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var get_left = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var get_right = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var nthChild = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var nthLastChild = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var nthOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var nthLastOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var not = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var get_after = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var get_before = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var get_cue = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var get_cueRegion = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var get_firstLetter = kotlin_org_jetbrains_compose_html_html_core.$_$.h4;
  var get_firstLine = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var get_fileSelectorButton = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var get_selection = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var slotted = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var objectMeta = kotlin_kotlin.$_$.x6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var emptyMap = kotlin_kotlin.$_$.k3;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var getStringHashCode = kotlin_kotlin.$_$.j6;
  var substringAfterLast = kotlin_kotlin.$_$.i8;
  var plus_1 = kotlin_kotlin.$_$.h4;
  var equals = kotlin_kotlin.$_$.f6;
  var hashCode = kotlin_kotlin.$_$.k6;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.q9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var interfaceMeta = kotlin_kotlin.$_$.m6;
  var A$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.n8;
  var THROW_ISE = kotlin_kotlin.$_$.c9;
  var Enum = kotlin_kotlin.$_$.t8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var charSequenceLength = kotlin_kotlin.$_$.b6;
  var joinToString = kotlin_kotlin.$_$.u3;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var removePrefix = kotlin_kotlin.$_$.b8;
  var startsWith = kotlin_kotlin.$_$.g8;
  var drop = kotlin_kotlin.$_$.v7;
  var first = kotlin_kotlin.$_$.x7;
  var Char = kotlin_kotlin.$_$.r8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var charArrayOf = kotlin_kotlin.$_$.z5;
  var split_0 = kotlin_kotlin.$_$.e8;
  var getOrNull = kotlin_kotlin.$_$.r3;
  var ensureNotNull = kotlin_kotlin.$_$.j9;
  var startsWith_0 = kotlin_kotlin.$_$.h8;
  var endsWith = kotlin_kotlin.$_$.w7;
  var dropLast = kotlin_kotlin.$_$.u7;
  var SequenceScope = kotlin_kotlin.$_$.o7;
  var mutableListOf = kotlin_kotlin.$_$.f4;
  var removeFirst = kotlin_kotlin.$_$.m4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sequence = kotlin_kotlin.$_$.p7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var last = kotlin_kotlin.$_$.y3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.w3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var isObject = kotlin_kotlin.$_$.q6;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.p8;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.w8;
  var charSequenceGet = kotlin_kotlin.$_$.a6;
  var removeSuffix = kotlin_kotlin.$_$.c8;
  var substringAfter = kotlin_kotlin.$_$.j8;
  var contains = kotlin_kotlin.$_$.r7;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toMutableMap = kotlin_kotlin.$_$.x4;
  var KMutableProperty1 = kotlin_kotlin.$_$.l7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ResponseException, 'ResponseException', classMeta, Exception);
  setMetadataFor(ApiFetcher$getBodyBytesAsync$slambda, 'ApiFetcher$getBodyBytesAsync$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($getBodyBytesCOROUTINE$0, '$getBodyBytesCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($tryFetchCOROUTINE$1, '$tryFetchCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ApiFetcher, 'ApiFetcher', classMeta, VOID, VOID, VOID, VOID, [0, 5, 3, 4]);
  setMetadataFor(AbortController_0, 'AbortController', classMeta);
  setMetadataFor(App, 'App', classMeta, VOID, [Annotation]);
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(Page, 'Page', classMeta, VOID, [Annotation]);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(KobwebConfig, 'KobwebConfig', interfaceMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta, VOID, [KobwebConfig]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(OpenLinkStrategies, 'OpenLinkStrategies', interfaceMeta);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta, VOID, [OpenLinkStrategies]);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(RoutePrefix, 'RoutePrefix', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta, VOID, [RoutePrefix]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta, VOID, [RoutePrefix]);
  setMetadataFor(RouteTree$Node$_get_nodes_$slambda_9kqj3, 'RouteTree$Node$<get-nodes>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
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
  function get_apiFetcherInstance() {
    _init_properties_ApiFetcher_kt__epxlpv();
    return apiFetcherInstance;
  }
  var apiFetcherInstance;
  function get_$stableprop() {
    return 0;
  }
  function getBodyBytes(_this__u8e3s4, $this, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getBodyBytesAsync(_this__u8e3s4, $this, result) {
    var tmp = CoroutineScope(asCoroutineDispatcher(window));
    launch(tmp, VOID, VOID, ApiFetcher$getBodyBytesAsync$slambda_0(result, $this, _this__u8e3s4, null));
  }
  function ResponseException(response, bodyBytes) {
    var tmp$ret$15;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$14;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.browser.ResponseException.<init>.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
    var tmp0_safe_receiver = bodyBytes;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim((!(tmp1_safe_receiver == null) ? isCharSequence(tmp1_safe_receiver) : false) ? tmp1_safe_receiver : THROW_CCE()));
      tmp = tmp$ret$0;
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.browser.ResponseException.<init>.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.text.isNotBlank' call
      tmp$ret$1 = !isBlank(tmp2_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      if (tmp$ret$2) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp$ret$3 = tmp_1;
      tmp_0 = tmp$ret$3;
    }
    var bodyString = tmp_0;
    if (!(bodyString == null)) {
      var tmp$ret$4;
      // Inline function 'kotlin.text.appendLine' call
      tmp$ret$4 = tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      var lines = split(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        var tmp$ret$6;
        // Inline function 'com.varabyte.kobweb.browser.ResponseException.<init>.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = iterator.next_20eer_k$();
        tmp$ret$6 = tmp0__anonymous__q1qw7t.length;
        var maxValue = tmp$ret$6;
        while (iterator.hasNext_bitz1p_k$()) {
          var tmp$ret$7;
          // Inline function 'com.varabyte.kobweb.browser.ResponseException.<init>.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = iterator.next_20eer_k$();
          tmp$ret$7 = tmp1__anonymous__uwfjfc.length;
          var v = tmp$ret$7;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp$ret$5 = maxValue;
      }
      var tmp3_elvis_lhs = tmp$ret$5;
      var longestLineLength = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var indent = '  ';
      var boundary = indent + repeat('-', longestLineLength);
      var tmp$ret$9;
      // Inline function 'kotlin.text.appendLine' call
      var tmp$ret$8;
      // Inline function 'kotlin.text.appendLine' call
      var tmp2_appendLine = tmp0_apply.append_ssq29y_k$(boundary);
      tmp$ret$8 = tmp2_appendLine.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      tmp$ret$9 = tmp$ret$8;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.browser.ResponseException.<init>.<anonymous>.<anonymous>' call
        var tmp$ret$11;
        // Inline function 'kotlin.text.appendLine' call
        var tmp1_appendLine = indent + element;
        var tmp$ret$10;
        // Inline function 'kotlin.text.appendLine' call
        var tmp0_appendLine = tmp0_apply.append_ssq29y_k$(tmp1_appendLine);
        tmp$ret$10 = tmp0_appendLine.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        tmp$ret$11 = tmp$ret$10;
      }
      var tmp$ret$13;
      // Inline function 'kotlin.text.appendLine' call
      var tmp$ret$12;
      // Inline function 'kotlin.text.appendLine' call
      var tmp3_appendLine = tmp0_apply.append_ssq29y_k$(boundary);
      tmp$ret$12 = tmp3_appendLine.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      tmp$ret$13 = tmp$ret$12;
    }
    tmp$ret$14 = tmp0_apply;
    tmp$ret$15 = tmp$ret$14.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.response_1 = response;
    this.bodyBytes_1 = bodyBytes;
    this.$stable_1 = 0;
  }
  protoOf(ResponseException).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(ResponseException).get_bodyBytes_ssopc0_k$ = function () {
    return this.bodyBytes_1;
  };
  function fetch($this, method, apiPath, autoPrefix, body, abortController, $completion) {
    var responseBytesDeferred = CompletableDeferred();
    var tmp$ret$0;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var tmp;
    if (!(body == null)) {
      var headers = {};
      headers['Content-Length'] = body.length;
      headers['Content-Type'] = 'application/octet-stream';
      tmp = Unit_getInstance();
    } else {
      tmp = undefined;
    }
    var tmp0_RequestInit = tmp;
    var tmp0_elvis_lhs = body;
    var tmp1_RequestInit = tmp0_elvis_lhs == null ? undefined : tmp0_elvis_lhs;
    var tmp2_RequestInit = undefined;
    var tmp3_RequestInit = undefined;
    var tmp4_RequestInit = undefined;
    var tmp5_RequestInit = undefined;
    var tmp6_RequestInit = undefined;
    var tmp7_RequestInit = undefined;
    var tmp8_RequestInit = undefined;
    var tmp9_RequestInit = undefined;
    var tmp10_RequestInit = undefined;
    var o = {};
    o['method'] = method;
    o['headers'] = tmp0_RequestInit;
    o['body'] = tmp1_RequestInit;
    o['referrer'] = tmp2_RequestInit;
    o['referrerPolicy'] = tmp3_RequestInit;
    o['mode'] = tmp4_RequestInit;
    o['credentials'] = tmp5_RequestInit;
    o['cache'] = tmp6_RequestInit;
    o['redirect'] = tmp7_RequestInit;
    o['integrity'] = tmp8_RequestInit;
    o['keepalive'] = tmp9_RequestInit;
    o['window'] = tmp10_RequestInit;
    tmp$ret$0 = o;
    var requestInit = tmp$ret$0;
    if (!(abortController == null)) {
      var requestInitDynamic = requestInit;
      requestInitDynamic['signal'] = abortController.signal_1;
    }
    var tmp_0 = window.fetch(prependIf(Companion_getInstance_4(), autoPrefix, '/api/' + apiPath), requestInit);
    var tmp_1 = ApiFetcher$fetch$lambda($this, responseBytesDeferred);
    tmp_0.then(tmp_1, ApiFetcher$fetch$lambda_0(responseBytesDeferred));
    var tmp0 = responseBytesDeferred.await_xhs9og_k$($completion);
    return tmp0;
  }
  function fetch$default($this, method, apiPath, autoPrefix, body, abortController, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return fetch($this, method, apiPath, autoPrefix, body, abortController, $completion);
  }
  function tryFetch($this, method, apiPath, autoPrefix, body, abortController, $completion) {
    var tmp = new $tryFetchCOROUTINE$1($this, method, apiPath, autoPrefix, body, abortController, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function tryFetch$default($this, method, apiPath, autoPrefix, body, abortController, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return tryFetch($this, method, apiPath, autoPrefix, body, abortController, $completion);
  }
  function get_$stableprop_0() {
    return 8;
  }
  function ApiFetcher$getBodyBytes$lambda($safe) {
    return function (responseBuffer) {
      var int8Array = new Int8Array(responseBuffer);
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp = 0;
      var tmp_0 = int8Array.length;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$2;
        // Inline function 'com.varabyte.kobweb.browser.ApiFetcher.getBodyBytes.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'org.khronos.webgl.get' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = int8Array;
        tmp$ret$1 = tmp$ret$0[tmp_2];
        tmp$ret$2 = tmp$ret$1;
        tmp_1[tmp_2] = tmp$ret$2;
        tmp = tmp + 1 | 0;
      }
      var tmp1_resume = tmp_1;
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp1_resume);
      $safe.resumeWith_s3a3yh_k$(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function ApiFetcher$getBodyBytes$lambda_0($safe) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = new Int8Array(0);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_resume);
      $safe.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function ApiFetcher$getBodyBytesAsync$slambda($result, this$0, $this_getBodyBytesAsync, resultContinuation) {
    this.$result_1 = $result;
    this.this$0__1 = this$0;
    this.$this_getBodyBytesAsync_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ApiFetcher$getBodyBytesAsync$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ApiFetcher$getBodyBytesAsync$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ApiFetcher$getBodyBytesAsync$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = getBodyBytes(this.$this_getBodyBytesAsync_1, this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$result_1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(ApiFetcher$getBodyBytesAsync$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new ApiFetcher$getBodyBytesAsync$slambda(this.$result_1, this.this$0__1, this.$this_getBodyBytesAsync_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ApiFetcher$getBodyBytesAsync$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function ApiFetcher$getBodyBytesAsync$slambda_0($result, this$0, $this_getBodyBytesAsync, resultContinuation) {
    var i = new ApiFetcher$getBodyBytesAsync$slambda($result, this$0, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ApiFetcher$fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.complete_8y7ynm_k$(bodyBytes);
      return Unit_getInstance();
    };
  }
  function ApiFetcher$fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.completeExceptionally_7s0ccc_k$(new ResponseException($res, bodyBytes));
      return Unit_getInstance();
    };
  }
  function ApiFetcher$fetch$lambda(this$0, $responseBytesDeferred) {
    return function (res) {
      var tmp;
      if (res.ok) {
        getBodyBytesAsync(res, this$0, ApiFetcher$fetch$lambda$lambda($responseBytesDeferred));
        tmp = Unit_getInstance();
      } else {
        getBodyBytesAsync(res, this$0, ApiFetcher$fetch$lambda$lambda_0($responseBytesDeferred, res));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ApiFetcher$fetch$lambda_0($responseBytesDeferred) {
    return function (t) {
      return $responseBytesDeferred.completeExceptionally_7s0ccc_k$(t);
    };
  }
  function $getBodyBytesCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($getBodyBytesCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0__anonymous__q1qw7t = this;
            var safe = SafeContinuation_init_$Create$(intercepted(tmp0__anonymous__q1qw7t));
            var tmp_0 = this._this__u8e3s4__2.arrayBuffer();
            var tmp_1 = tmp_0.then(ApiFetcher$getBodyBytes$lambda(safe));
            tmp_1.catch(ApiFetcher$getBodyBytes$lambda_0(safe));
            ;
            suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $tryFetchCOROUTINE$1(_this__u8e3s4, method, apiPath, autoPrefix, body, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.method_1 = method;
    this.apiPath_1 = apiPath;
    this.autoPrefix_1 = autoPrefix;
    this.body_1 = body;
    this.abortController_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = fetch(this._this__u8e3s4__1, this.method_1, this.apiPath_1, this.autoPrefix_1, this.body_1, this.abortController_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              if (this._this__u8e3s4__1.logOnError_1) {
                console.log('Error fetching API endpoint "' + this.apiPath_1 + '"\n\n' + t);
              }
              tmp_1.TRY_RESULT0__1 = null;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ApiFetcher() {
    this.logOnError_1 = false;
    this.$stable_1 = 8;
  }
  protoOf(ApiFetcher).set_logOnError_rg5mft_k$ = function (_set____db54di) {
    this.logOnError_1 = _set____db54di;
  };
  protoOf(ApiFetcher).get_logOnError_4wpkhe_k$ = function () {
    return this.logOnError_1;
  };
  protoOf(ApiFetcher).delete_sajteh_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = fetch$default(this, 'DELETE', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).delete$default_2jvmk4_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.delete_sajteh_k$(apiPath, abortController, autoPrefix, $completion) : $super.delete_sajteh_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryDelete_ef5b01_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = tryFetch$default(this, 'DELETE', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).tryDelete$default_i2ldnw_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryDelete_ef5b01_k$(apiPath, abortController, autoPrefix, $completion) : $super.tryDelete_ef5b01_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).get_isyhng_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = fetch$default(this, 'GET', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).get$default_edrcx5_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.get_isyhng_k$(apiPath, abortController, autoPrefix, $completion) : $super.get_isyhng_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryGet_8shneu_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = tryFetch$default(this, 'GET', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).tryGet$default_5fkpoh_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryGet_8shneu_k$(apiPath, abortController, autoPrefix, $completion) : $super.tryGet_8shneu_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).head_nhz0mm_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = fetch$default(this, 'HEAD', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).head$default_2scnq9_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.head_nhz0mm_k$(apiPath, abortController, autoPrefix, $completion) : $super.head_nhz0mm_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryHead_c3qova_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = tryFetch$default(this, 'HEAD', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).tryHead$default_y8loin_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryHead_c3qova_k$(apiPath, abortController, autoPrefix, $completion) : $super.tryHead_c3qova_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).options_nhukx8_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = fetch$default(this, 'OPTIONS', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).options$default_ok3dup_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.options_nhukx8_k$(apiPath, abortController, autoPrefix, $completion) : $super.options_nhukx8_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryOptions_cegj1u_k$ = function (apiPath, abortController, autoPrefix, $completion) {
    var tmp0 = tryFetch$default(this, 'OPTIONS', apiPath, autoPrefix, VOID, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).tryOptions$default_1hxc5l_k$ = function (apiPath, abortController, autoPrefix, $completion, $super) {
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryOptions_cegj1u_k$(apiPath, abortController, autoPrefix, $completion) : $super.tryOptions_cegj1u_k$.call(this, apiPath, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).patch_q6sy6_k$ = function (apiPath, body, abortController, autoPrefix, $completion) {
    var tmp0 = fetch(this, 'PATCH', apiPath, autoPrefix, body, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).patch$default_6tvjp8_k$ = function (apiPath, body, abortController, autoPrefix, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.patch_q6sy6_k$(apiPath, body, abortController, autoPrefix, $completion) : $super.patch_q6sy6_k$.call(this, apiPath, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPatch_3jkw2c_k$ = function (apiPath, body, abortController, autoPrefix, $completion) {
    var tmp0 = tryFetch(this, 'PATCH', apiPath, autoPrefix, body, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).tryPatch$default_bng9uk_k$ = function (apiPath, body, abortController, autoPrefix, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPatch_3jkw2c_k$(apiPath, body, abortController, autoPrefix, $completion) : $super.tryPatch_3jkw2c_k$.call(this, apiPath, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).post_to6tva_k$ = function (apiPath, body, abortController, autoPrefix, $completion) {
    var tmp0 = fetch(this, 'POST', apiPath, autoPrefix, body, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).post$default_rdoa8k_k$ = function (apiPath, body, abortController, autoPrefix, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.post_to6tva_k$(apiPath, body, abortController, autoPrefix, $completion) : $super.post_to6tva_k$.call(this, apiPath, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPost_fn3dz2_k$ = function (apiPath, body, abortController, autoPrefix, $completion) {
    var tmp0 = tryFetch(this, 'POST', apiPath, autoPrefix, body, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).tryPost$default_gtimgm_k$ = function (apiPath, body, abortController, autoPrefix, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPost_fn3dz2_k$(apiPath, body, abortController, autoPrefix, $completion) : $super.tryPost_fn3dz2_k$.call(this, apiPath, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).put_cljr6h_k$ = function (apiPath, body, abortController, autoPrefix, $completion) {
    var tmp0 = fetch(this, 'PUT', apiPath, autoPrefix, body, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).put$default_r3duil_k$ = function (apiPath, body, abortController, autoPrefix, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.put_cljr6h_k$(apiPath, body, abortController, autoPrefix, $completion) : $super.put_cljr6h_k$.call(this, apiPath, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPut_al3o4l_k$ = function (apiPath, body, abortController, autoPrefix, $completion) {
    var tmp0 = tryFetch(this, 'PUT', apiPath, autoPrefix, body, abortController, $completion);
    return tmp0;
  };
  protoOf(ApiFetcher).tryPut$default_53905f_k$ = function (apiPath, body, abortController, autoPrefix, $completion, $super) {
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPut_al3o4l_k$(apiPath, body, abortController, autoPrefix, $completion) : $super.tryPut_al3o4l_k$.call(this, apiPath, body, abortController, autoPrefix, $completion);
  };
  function _get_controller__bh9bov($this) {
    return $this.controller_1;
  }
  function get_$stableprop_1() {
    return 8;
  }
  function AbortController_0() {
    this.controller_1 = new AbortController();
    this.signal_1 = this.controller_1.signal;
    this.$stable_1 = 8;
  }
  protoOf(AbortController_0).get_signal_jhh4tt_k$ = function () {
    return this.signal_1;
  };
  protoOf(AbortController_0).abort_l9xn1b_k$ = function () {
    this.controller_1.abort();
  };
  var properties_initialized_ApiFetcher_kt_nwc4x;
  function _init_properties_ApiFetcher_kt__epxlpv() {
    if (properties_initialized_ApiFetcher_kt_nwc4x) {
    } else {
      properties_initialized_ApiFetcher_kt_nwc4x = true;
      apiFetcherInstance = new ApiFetcher();
    }
  }
  function App() {
  }
  protoOf(App).equals = function (other) {
    if (!(other instanceof App))
      return false;
    var tmp0_other_with_cast = other instanceof App ? other : THROW_CCE();
    return true;
  };
  protoOf(App).hashCode = function () {
    return 0;
  };
  protoOf(App).toString = function () {
    return '@com.varabyte.kobweb.core.App()';
  };
  function KobwebApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1244630298);
    sourceInformation($composer_0, 'C(KobwebApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1244630298, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp$composable (App.kt:44)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp0_Style$composable = DefaultStyleSheet_getInstance();
      var tmp1_Style$composable = $composer_0;
      var $composer_1 = tmp1_Style$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, tmp0_Style$composable.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceableGroup_er37p7_k$();
      content($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(KobwebApp$composable$lambda(content, $changed));
    }
  }
  function get_$stableprop_2() {
    return 0;
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
    this.style_68ppe6_k$('html, body', DefaultStyleSheet$lambda);
    this.style_68ppe6_k$('*', DefaultStyleSheet$lambda_0);
    this.$stable_2 = 0;
  }
  protoOf(DefaultStyleSheet).style_n9akw7_k$ = function (selector, cssRule) {
    return this.style_4edtvi_k$(selector, cssRule);
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
  function Page(routeOverride) {
    routeOverride = routeOverride === VOID ? '' : routeOverride;
    this.routeOverride_1 = routeOverride;
  }
  protoOf(Page).get_routeOverride_6ld14k_k$ = function () {
    return this.routeOverride_1;
  };
  protoOf(Page).equals = function (other) {
    if (!(other instanceof Page))
      return false;
    var tmp0_other_with_cast = other instanceof Page ? other : THROW_CCE();
    if (!(this.routeOverride_1 === tmp0_other_with_cast.routeOverride_1))
      return false;
    return true;
  };
  protoOf(Page).hashCode = function () {
    return imul(getStringHashCode('routeOverride'), 127) ^ getStringHashCode(this.routeOverride_1);
  };
  protoOf(Page).toString = function () {
    return '@com.varabyte.kobweb.core.Page(routeOverride=' + this.routeOverride_1 + ')';
  };
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function _get_route__bsf68o($this) {
    return $this.route_1;
  }
  function _get_dynamicParams__m1vbg($this) {
    return $this.dynamicParams_1;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function RouteInfo(route, dynamicParams) {
    this.route_1 = route;
    this.dynamicParams_1 = dynamicParams;
    this.slug_1 = substringAfterLast(this.route_1.get_path_wos8ry_k$(), _Char___init__impl__6a9atx(47));
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.params_1 = plus_1(this.dynamicParams_1, this.route_1.get_queryParams_8o6v3v_k$());
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
    this.$stable_1 = 0;
  }
  protoOf(RouteInfo).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(RouteInfo).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInfo).get_params_hy4oen_k$ = function () {
    return this.params_1;
  };
  protoOf(RouteInfo).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInfo).toString = function () {
    return this.route_1.toString();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.path_1 === this.path_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.params_1, this.params_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.fragment_1 == this.fragment_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.path_1);
    result = imul(31, result) + hashCode(this.params_1) | 0;
    var tmp = imul(31, result);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.fragment_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    return result;
  };
  protoOf(RouteInfo).copy_to64l0_k$ = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).copy$default_avxx0u_k$ = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.route_1.get_path_wos8ry_k$() : path;
    queryParams = queryParams === VOID ? this.route_1.get_queryParams_8o6v3v_k$() : queryParams;
    fragment = fragment === VOID ? this.route_1.get_fragment_bxnb4p_k$() : fragment;
    dynamicParams = dynamicParams === VOID ? this.dynamicParams_1 : dynamicParams;
    return $super === VOID ? this.copy_to64l0_k$(path, queryParams, fragment, dynamicParams) : $super.copy_to64l0_k$.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).set_instance_s11lvq_k$ = function (_set____db54di) {
    this.instance_1 = _set____db54di;
  };
  protoOf(Companion).get_instance_mmff6q_k$ = function () {
    var tmp = this.instance_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).init_cgxeh6_k$ = function (router) {
    this.instance_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop_4() {
    return 8;
  }
  function PageContext(router) {
    Companion_getInstance_1();
    this.router_1 = router;
    this.routeState_1 = mutableStateOf(null);
    this.$stable_1 = 8;
  }
  protoOf(PageContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  protoOf(PageContext).get_routeState_59fhkf_k$ = function () {
    return this.routeState_1;
  };
  protoOf(PageContext).set_route_1qq4bh_k$ = function (value) {
    this.routeState_1.set_value_rnwamw_k$(value);
  };
  protoOf(PageContext).get_route_iy3cio_k$ = function () {
    var tmp0_elvis_lhs = this.routeState_1.get_value_j01efc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('PageContext route info is only valid within a @Page composable');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PageContext).get_slug_woudx0_k$ = function () {
    return this.get_route_iy3cio_k$().slug_1;
  };
  protoOf(PageContext).get_params_hy4oen_k$ = function () {
    return this.get_route_iy3cio_k$().params_1;
  };
  protoOf(PageContext).get_fragment_bxnb4p_k$ = function () {
    return this.get_route_iy3cio_k$().fragment_1;
  };
  function rememberPageContext$composable($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1885592798);
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
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
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
    $composer_0.endReplaceableGroup_er37p7_k$();
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
  function get_$stableprop_5() {
    return 8;
  }
  function InitKobwebContext(config, router) {
    this.config_1 = config;
    this.router_1 = router;
    this.$stable_1 = 8;
  }
  protoOf(InitKobwebContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(InitKobwebContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  function get_$stableprop_6() {
    return 8;
  }
  function MutableKobwebConfig() {
    this.openLinkStrategies_1 = new MutableOpenLinkStrategies();
    this.$stable_1 = 8;
  }
  protoOf(MutableKobwebConfig).get_openLinkStrategies_sr8wv2_k$ = function () {
    return this.openLinkStrategies_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Instance_ljxvgi_k$ = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KobwebConfig() {
  }
  function get_$stableprop_7() {
    return 8;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.internal_1 = internal;
    this.external_1 = external;
    this.$stable_1 = 8;
  }
  protoOf(MutableOpenLinkStrategies).set_internal_nq0c6a_k$ = function (_set____db54di) {
    this.internal_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_internal_mdbuyi_k$ = function () {
    return this.internal_1;
  };
  protoOf(MutableOpenLinkStrategies).set_external_c7vhdc_k$ = function (_set____db54di) {
    this.external_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_external_945310_k$ = function () {
    return this.external_1;
  };
  function OpenLinkStrategies() {
  }
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1487018297);
    sourceInformation($composer_0, 'C(Anchor$composable)P(3!1,5,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(autoPrefix_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      var href_0 = prependIf(Companion_getInstance_4(), autoPrefix_0._v, href);
      var ctx = rememberPageContext$composable($composer_0, 0);
      A$composable(href_0, Anchor$composable$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href_0), content_0._v, $composer_0, 896 & $dirty >> 9, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Anchor$composable$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, content_0, $changed, $default));
    }
  }
  function Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_2().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_internal_mdbuyi_k$()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_2().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_external_945310_k$()) : tmp1_elvis_lhs;
      $ctx.get_router_j3zccy_k$().navigateTo$default_mld8fs_k$($href, VOID, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.preventDefault_xrmx2w_k$();
      evt.stopPropagation_5pvg9l_k$();
      return Unit_getInstance();
    };
  }
  function Anchor$composable$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.onClick_3adsri_k$(Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href));
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
  function values() {
    return [OpenLinkStrategy_IN_PLACE_getInstance(), OpenLinkStrategy_IN_NEW_TAB_getInstance(), OpenLinkStrategy_IN_NEW_TAB_BACKGROUND_getInstance(), OpenLinkStrategy_IN_NEW_TAB_FOREGROUND_getInstance(), OpenLinkStrategy_IN_NEW_WINDOW_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'IN_PLACE':
        return OpenLinkStrategy_IN_PLACE_getInstance();
      case 'IN_NEW_TAB':
        return OpenLinkStrategy_IN_NEW_TAB_getInstance();
      case 'IN_NEW_TAB_BACKGROUND':
        return OpenLinkStrategy_IN_NEW_TAB_BACKGROUND_getInstance();
      case 'IN_NEW_TAB_FOREGROUND':
        return OpenLinkStrategy_IN_NEW_TAB_FOREGROUND_getInstance();
      case 'IN_NEW_WINDOW':
        return OpenLinkStrategy_IN_NEW_WINDOW_getInstance();
      default:
        OpenLinkStrategy_initEntries();
        THROW_ISE();
        break;
    }
  }
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
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
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
    return (_this__u8e3s4.get_ctrlKey_jfc6q3_k$() ? true : _this__u8e3s4.get_shiftKey_ujdkqu_k$()) ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_BACKGROUND_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_BACKGROUND_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_FOREGROUND_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_FOREGROUND_instance;
  }
  function OpenLinkStrategy_IN_NEW_WINDOW_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_WINDOW_instance;
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
    tmp0_apply.append_ssq29y_k$(path);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !queryParams.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(63));
      var tmp$ret$9;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$8;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(queryParams.get_size_woubt6_k$());
      var tmp$ret$1;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$1 = queryParams.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$1;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$7;
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$2 = item.get_key_18j28a_k$();
        var key = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$3 = item.get_value_j01efc_k$();
        var value = tmp$ret$3;
        var tmp$ret$6;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'kotlin.apply' call
        var tmp0_apply_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        tmp0_apply_0.append_ssq29y_k$(key);
        var tmp$ret$4;
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp$ret$4 = charSequenceLength(value) > 0;
        if (tmp$ret$4) {
          tmp0_apply_0.append_t8oh9e_k$(_Char___init__impl__6a9atx(61));
          tmp0_apply_0.append_ssq29y_k$(value);
        }
        tmp$ret$5 = tmp0_apply_0;
        tmp$ret$6 = tmp$ret$5.toString();
        tmp$ret$7 = tmp$ret$6;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$7);
      }
      tmp$ret$8 = tmp0_mapTo;
      tmp$ret$9 = tmp$ret$8;
      tmp0_apply.append_ssq29y_k$(joinToString(tmp$ret$9, '&'));
    }
    if (!(fragment == null)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(35));
      tmp0_apply.append_ssq29y_k$(fragment);
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
  protoOf(Companion_1).isRoute_h0e7uq_k$ = function (path) {
    return !(this.tryCreate_q5jk7q_k$(path) == null);
  };
  protoOf(Companion_1).tryCreate_q5jk7q_k$ = function (path) {
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
  protoOf(Companion_1).fromUrl_k64k9_k$ = function (url) {
    var tmp0_elvis_lhs = this.tryCreate_q5jk7q_k$(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function get_$stableprop_8() {
    return 8;
  }
  function Route(pathQueryAndFragment) {
    Companion_getInstance_3();
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
    this.url_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.url_1.pathname;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = drop(this.url_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp0_check = equals(new Char(first(this.url_1.pathname)), new Char(_Char___init__impl__6a9atx(47)));
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
    tmp_1.path_1 = tmp_2;
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
      var tmp0_isEmpty = this.url_1.search;
      tmp$ret$3 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$3) {
        tmp$ret$4 = Unit_getInstance();
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = split_0(removePrefix(this.url_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)]));
      var tmp0_iterator = tmp1_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split_0(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.get_fkrdnv_k$(0);
        // Inline function 'kotlin.collections.set' call
        var tmp$ret$5;
        // Inline function 'kotlin.collections.elementAtOrNull' call
        tmp$ret$5 = getOrNull(keyValue, 1);
        var tmp0_elvis_lhs = tmp$ret$5;
        var tmp0_set = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        tmp1_apply.put_3mhbri_k$(key, tmp0_set);
      }
    }
    tmp$ret$6 = tmp1_apply;
    tmp_3.queryParams_1 = tmp$ret$6;
    var tmp_4 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.takeIf' call
    var tmp2_takeIf = this.url_1.hash;
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
    tmp_4.fragment_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
    this.$stable_1 = 8;
  }
  protoOf(Route).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Route).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(Route).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(Route).toString = function () {
    return this.path_1 + this.url_1.search + this.url_1.hash;
  };
  function get_$stableprop_9() {
    return 0;
  }
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
    this.$stable_1 = 0;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_getInstance_4().prepend_vr2beb_k$(path) : path;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).set_svddio_k$ = function (value) {
    Companion_getInstance_5().set__instance_7fiqi4_k$(new RoutePrefixImpl(value));
  };
  protoOf(Companion_2).get_value_j01efc_k$ = function () {
    return Companion_getInstance_5().get_instance_mmff6q_k$().value_1;
  };
  protoOf(Companion_2).prepend_vr2beb_k$ = function (path) {
    return Companion_getInstance_5().get_instance_mmff6q_k$().prepend_vr2beb_k$(path);
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoutePrefix() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this._instance_1 = null;
  }
  protoOf(Companion_3).set__instance_7fiqi4_k$ = function (value) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this._instance_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      tmp$ret$0 = 'Cannot overwrite route prefix once set';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._instance_1 = value;
  };
  protoOf(Companion_3).get__instance_j6x8p7_k$ = function () {
    if (this._instance_1 == null) {
      this._instance_1 = new RoutePrefixImpl('');
    }
    return this._instance_1;
  };
  protoOf(Companion_3).get_instance_mmff6q_k$ = function () {
    return ensureNotNull(this.get__instance_j6x8p7_k$());
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function RoutePrefixImpl(value) {
    Companion_getInstance_5();
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
    tmp.value_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(RoutePrefixImpl).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(RoutePrefixImpl).prepend_vr2beb_k$ = function (path) {
    if (isBlank(this.value_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.value_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.value_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.get_value_j01efc_k$();
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.get_value_j01efc_k$(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function _get_children__my42wc($this) {
    return $this.children_1;
  }
  function get_$stableprop_10() {
    return 8;
  }
  function RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_17viq5_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_kgs44w_k$($this$sequence, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_17viq5_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.parents0__1 = LinkedHashMap_init_$Create$();
            this.nodeQueue1__1 = mutableListOf([this.this$0__1]);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!!this.nodeQueue1__1.isEmpty_y1axqb_k$()) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.node2__1 = removeFirst(this.nodeQueue1__1);
            var tmp_1 = this;
            tmp_1.nodePath3__1 = ArrayList_init_$Create$_0();
            this.nodePath3__1.add_1j60pz_k$(this.node2__1);
            ;
            this.parent4__1 = this.parents0__1.get_1mhr4y_k$(this.node2__1);
            while (!(this.parent4__1 == null)) {
              this.nodePath3__1.add_ydlf05_k$(0, this.parent4__1);
              this.parent4__1 = this.parents0__1.get_1mhr4y_k$(this.parent4__1);
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.nodePath3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_forEach = this.node2__1.children_1;
            var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              this.parents0__1.put_3mhbri_k$(element, this.node2__1);
            }

            this.nodeQueue1__1.addAll_oxxjjk_k$(this.node2__1.children_1);
            ;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_kgs44w_k$ = function ($this$sequence, completion) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_xubfvz_k$ = function (value, completion) {
    return this.create_kgs44w_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this$0, resultContinuation) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_17viq5_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function Node(name, method) {
    illegalDecoyCallException('<init>');
  }
  protoOf(Node).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Node).set_method_qpjfln_k$ = function (_set____db54di) {
    illegalDecoyCallException('<set-method>');
  };
  protoOf(Node).get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  protoOf(Node).matches_qg459u_k$ = function (name) {
    return this.name_1 === name;
  };
  protoOf(Node).createChild_gbsmsr_k$ = function (routePart, method) {
    illegalDecoyCallException('createChild');
  };
  protoOf(Node).findChild_uy5y8u_k$ = function (routePart) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.children_1;
      var tmp0_iterator = tmp0_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        tmp$ret$0 = element.matches_qg459u_k$(routePart);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).get_nodes_ivvt6w_k$ = function () {
    return sequence(RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this, null));
  };
  function Node(name, method) {
    this.name_1 = name;
    this.method_1 = method;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.children_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(Node).$set_method$$composable_3flv5x_k$ = function (set__$_ezb9bk) {
    this.method_1 = set__$_ezb9bk;
  };
  protoOf(Node).createChild$composable_3wormf_k$ = function (routePart, method) {
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
    this.children_1.add_1j60pz_k$(node);
    return node;
  };
  function RootNode() {
    Node.call(this, '', null);
    this.$stable_2 = 0;
  }
  function StaticNode(name, method) {
    illegalDecoyCallException('<init>');
  }
  function StaticNode(name, method) {
    Node.call(this, name, method);
    this.$stable_2 = 0;
  }
  function DynamicNode(name, method) {
    illegalDecoyCallException('<init>');
  }
  protoOf(DynamicNode).matches_qg459u_k$ = function (name) {
    return true;
  };
  function DynamicNode(name, method) {
    Node.call(this, name, method);
    this.$stable_2 = 0;
  }
  function ResolvedEntry(node, routePart) {
    this.node_1 = node;
    this.routePart_1 = routePart;
  }
  protoOf(ResolvedEntry).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(ResolvedEntry).get_routePart_ba9gz7_k$ = function () {
    return this.routePart_1;
  };
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function resolve($this, route) {
    var routeParts = split_0(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var resolved = tmp$ret$0;
    var currNode = $this.root_1;
    // Inline function 'kotlin.require' call
    var tmp0_require = routeParts.get_fkrdnv_k$(0) === $this.root_1.name_1;
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
    var last = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_fkrdnv_k$(i);
        var tmp1_elvis_lhs = currNode.findChild_uy5y8u_k$(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        resolved.add_1j60pz_k$(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last);
    return resolved;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-729357476, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:133)');
        }
        this$0.errorHandler_1(404, $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function RouteTree() {
    this.root_1 = new RootNode();
    this.errorHandler_1 = ComposableSingletons$RouteTreeKt_getInstance().lambda_1_r8sbbp_1;
  }
  protoOf(RouteTree).set_errorHandler_dvnd1y_k$ = function (_set____db54di) {
    illegalDecoyCallException('<set-errorHandler>');
  };
  protoOf(RouteTree).get_errorHandler_k3vn8r_k$ = function () {
    return this.errorHandler_1;
  };
  protoOf(RouteTree).isRegistered_9yxo23_k$ = function (route) {
    var tmp0_safe_receiver = resolve(this, route);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : last(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.node_1;
    return !((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.method_1) == null);
  };
  protoOf(RouteTree).register_pbf8pr_k$ = function (route, method) {
    illegalDecoyCallException('register');
  };
  protoOf(RouteTree).createPageData_4kqery_k$ = function (route) {
    var resolvedEntries = resolve(this, route.get_path_wos8ry_k$());
    var tmp0_safe_receiver = resolvedEntries;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : last(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.node_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.method_1;
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
      var tmp0_iterator = tmp4_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
        var tmp_0 = element.node_1;
        if (tmp_0 instanceof DynamicNode) {
          // Inline function 'kotlin.collections.set' call
          var tmp0_set = element.node_1.name_1;
          var tmp1_set = element.routePart_1;
          dynamicParams.put_3mhbri_k$(tmp0_set, tmp1_set);
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(route, dynamicParams));
  };
  protoOf(RouteTree).get_nodes_ivvt6w_k$ = function () {
    return this.root_1.get_nodes_ivvt6w_k$();
  };
  protoOf(RouteTree).$set_errorHandler$$composable_8v2i3w_k$ = function (set__$_ezb9bk) {
    this.errorHandler_1 = set__$_ezb9bk;
  };
  protoOf(RouteTree).register$composable_vzmwjp_k$ = function (route, method) {
    if (!(resolve(this, route) == null))
      return false;
    var routeParts = split_0(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.root_1;
    // Inline function 'kotlin.require' call
    var tmp0_require = routeParts.get_fkrdnv_k$(0) === this.root_1.name_1;
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
    var last = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_fkrdnv_k$(i);
        var tmp1_elvis_lhs = currNode.findChild_uy5y8u_k$(routePart);
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
          tmp = tmp_0.createChild$composable_3wormf_k$(routePart, tmp$ret$2);
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  function PageData(pageMethod, routeInfo) {
    illegalDecoyCallException('<init>');
  }
  protoOf(PageData).get_pageMethod_1yegx3_k$ = function () {
    return this.pageMethod_1;
  };
  protoOf(PageData).get_routeInfo_ba59f2_k$ = function () {
    return this.routeInfo_1;
  };
  function PageData(pageMethod, routeInfo) {
    this.pageMethod_1 = pageMethod;
    this.routeInfo_1 = routeInfo;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:84)');
      }
      ErrorPage$composable(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  protoOf(ComposableSingletons$RouteTreeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage$composable(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(24844165);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Div$composable(null, tmp$ret$6, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(ErrorPage$composable$lambda_0(errorCode, $changed));
    }
  }
  function ErrorPage$composable$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
    tmp$ret$0 = $this.activePageMethod$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get_routeTree__6p9yza($this) {
    return $this.routeTree_1;
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.get_routeState_59fhkf_k$().get_value_j01efc_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.get_routeState_59fhkf_k$().set_value_rnwamw_k$(tmp0_safe_receiver.copy$default_avxx0u_k$(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
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
    var route = Companion_getInstance_3().tryCreate_q5jk7q_k$(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.routeTree_1.createPageData_4kqery_k$(route);
      $set_activePageMethod$$composable_u4dzqq($this, data.get_pageMethod_1yegx3_k$());
      _this__u8e3s4.set_route_1qq4bh_k$(data.get_routeInfo_ba59f2_k$());
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_3().isRoute_h0e7uq_k$(_this__u8e3s4);
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
    var hrefResolved = Companion_getInstance_3().fromUrl_k64k9_k$(new URL(_this__u8e3s4, window.location.href)).toString();
    var withoutPrefix = remove(Companion_getInstance_4(), hrefResolved);
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.fold' call
    var tmp1_fold = $this.interceptors_1;
    var tmp2_fold = (new Route(withoutPrefix)).toString();
    var accumulator = tmp2_fold;
    var tmp0_iterator = tmp1_fold.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var tmp3__anonymous__ufb84q = accumulator;
      var interceptor = new RouteInterceptorScope(tmp3__anonymous__ufb84q);
      element(interceptor);
      tmp$ret$1 = interceptor.get_pathQueryAndFragment_8mv2zx_k$();
      accumulator = tmp$ret$1;
    }
    tmp$ret$2 = accumulator;
    return prependIf(tmp, hadPrefix, tmp$ret$2);
  }
  function get_$stableprop_14() {
    return 8;
  }
  function $set_activePageMethod$$composable_u4dzqq($this, set__$_ezb9bk) {
    var tmp0_setValue = activePageMethod$factory_0();
    return $this.activePageMethod$delegate_1.set_value_rnwamw_k$(set__$_ezb9bk);
  }
  function Router$lambda(this$0) {
    return function (it) {
      return updatePageContext(Companion_getInstance_1().get_instance_mmff6q_k$(), this$0, ensureNotNull(document.location).pathname);
    };
  }
  function Router$renderActivePage$composable$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda($pageWrapper, $$dirty, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.renderActivePage$composable_ebhbpl_k$($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Router() {
    this.activePageMethod$delegate_1 = mutableStateOf(null);
    this.routeTree_1 = new RouteTree();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.interceptors_1 = tmp$ret$0;
    Companion_getInstance_1().init_cgxeh6_k$(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
    this.$stable_1 = 8;
  }
  protoOf(Router).renderActivePage_vzl1ie_k$ = function (pageWrapper) {
    illegalDecoyCallException('renderActivePage');
  };
  protoOf(Router).register_7zpsee_k$ = function (route, autoPrefix, pageMethod) {
    illegalDecoyCallException('register');
  };
  protoOf(Router).setErrorHandler_6rttwx_k$ = function (errorHandler) {
    illegalDecoyCallException('setErrorHandler');
  };
  protoOf(Router).addRouteInterceptor_v74gir_k$ = function (interceptor) {
    this.interceptors_1.add_1j60pz_k$(interceptor);
  };
  protoOf(Router).routeTo_ky5wji_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    return this.tryRoutingTo_vmzaio_k$(pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).routeTo$default_572i75_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.routeTo_ky5wji_k$(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.routeTo_ky5wji_k$.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).tryRoutingTo_vmzaio_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_getInstance_3().isRoute_h0e7uq_k$(pathQueryAndFragment_0)) {
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
        if (!this.routeTree_1.isRegistered_9yxo23_k$(route)) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.routeTree_1.isRegistered_9yxo23_k$(withoutSlash))
              pathQueryAndFragment_0 = withoutSlash;
          } else {
            var withSlash = route + '/';
            if (this.routeTree_1.isRegistered_9yxo23_k$(withSlash))
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
    if (updatePageContext(Companion_getInstance_1().get_instance_mmff6q_k$(), this, pathQueryAndFragment_0)) {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp1_let = window.location.origin + pathQueryAndFragment_0;
      // Inline function 'kotlin.contracts.contract' call
      if (!(window.location.href === tmp1_let)) {
        var newPathname = !(window.location.pathname === Companion_getInstance_3().fromUrl_k64k9_k$(new URL(tmp1_let)).get_path_wos8ry_k$());
        var tmp0_subject = updateHistoryMode;
        var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
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
  protoOf(Router).tryRoutingTo$default_f8hjfh_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.tryRoutingTo_vmzaio_k$(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.tryRoutingTo_vmzaio_k$.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).navigateTo_2qauf2_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.tryRoutingTo_vmzaio_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).navigateTo$default_mld8fs_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.navigateTo_2qauf2_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigateTo_2qauf2_k$.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  protoOf(Router).renderActivePage$composable_ebhbpl_k$ = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1838195952);
    sourceInformation($composer_0, 'C(renderActivePage$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().lambda_1_r8sbbp_1;
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
    var tmp_0 = [get_PageContextLocal().provides_3e53yf_k$(Companion_getInstance_1().get_instance_mmff6q_k$())];
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
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_2;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>' call
      tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp_2 = value;
    } else {
      tmp_2 = tmp0_let;
    }
    tmp$ret$1 = tmp_2;
    tmp$ret$2 = tmp$ret$1;
    var tmp_3 = tmp$ret$2;
    tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Router$renderActivePage$composable$lambda_0(tmp0_rcvr, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).register$composable_i4dkxg_k$ = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    var tmp0_require = Companion_getInstance_3().isRoute_h0e7uq_k$(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      tmp$ret$0 = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.routeTree_1.register$composable_vzmwjp_k$(prependIf(Companion_getInstance_4(), autoPrefix, route), pageMethod);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      tmp$ret$1 = 'Registration failure. Path is already registered: ' + route;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).register$composable$default_hbww1s_k$ = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.register$composable_i4dkxg_k$(route, autoPrefix, pageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.register$composable_i4dkxg_k$.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).setErrorHandler$composable_u48mv7_k$ = function (errorHandler) {
    this.routeTree_1.$set_errorHandler$$composable_8v2i3w_k$(errorHandler);
  };
  function _get_route__bsf68o_0($this) {
    return $this.route_1;
  }
  function get_$stableprop_15() {
    return 8;
  }
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.route_1 = new Route(pathQueryAndFragment);
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.queryParams_1 = toMutableMap(this.route_1.get_queryParams_8o6v3v_k$());
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
    this.$stable_1 = 8;
  }
  protoOf(RouteInterceptorScope).set_path_e5hf00_k$ = function (value) {
    this.path_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInterceptorScope).set_queryParams_7divyj_k$ = function (_set____db54di) {
    this.queryParams_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(RouteInterceptorScope).set_fragment_66mpsu_k$ = function (_set____db54di) {
    this.fragment_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInterceptorScope).get_pathQueryAndFragment_8mv2zx_k$ = function () {
    return Route_init_$Create$(this.path_1, this.queryParams_1, this.fragment_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  function values_0() {
    return [UpdateHistoryMode_PUSH_getInstance(), UpdateHistoryMode_REPLACE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'PUSH':
        return UpdateHistoryMode_PUSH_getInstance();
      case 'REPLACE':
        return UpdateHistoryMode_REPLACE_getInstance();
      default:
        UpdateHistoryMode_initEntries();
        THROW_ISE();
        break;
    }
  }
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
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:130)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  protoOf(ComposableSingletons$RouterKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
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
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
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
  protoOf(DefaultStyleSheet).style_4edtvi_k$ = style;
  protoOf(DefaultStyleSheet).style_5otx79_k$ = style_0;
  protoOf(DefaultStyleSheet).style_68ppe6_k$ = style_1;
  protoOf(DefaultStyleSheet).invoke_qvgdhg_k$ = invoke;
  protoOf(DefaultStyleSheet).invoke_wa7zhx_k$ = invoke_0;
  protoOf(DefaultStyleSheet).selector_vsua3m_k$ = selector;
  protoOf(DefaultStyleSheet).combine_75bnet_k$ = combine;
  protoOf(DefaultStyleSheet).plus_nlz2mk_k$ = plus;
  protoOf(DefaultStyleSheet).plus_85zybx_k$ = plus_0;
  protoOf(DefaultStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(DefaultStyleSheet).get_universal_1qp21u_k$ = get_universal;
  protoOf(DefaultStyleSheet).type_gwc96h_k$ = type;
  protoOf(DefaultStyleSheet).className_ykinvi_k$ = className;
  protoOf(DefaultStyleSheet).id_xxyy5i_k$ = id;
  protoOf(DefaultStyleSheet).attr_8c4xcm_k$ = attr;
  protoOf(DefaultStyleSheet).attr$default_c3gqj1_k$ = attr$default;
  protoOf(DefaultStyleSheet).attrEquals_ekinah_k$ = attrEquals;
  protoOf(DefaultStyleSheet).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(DefaultStyleSheet).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(DefaultStyleSheet).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(DefaultStyleSheet).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(DefaultStyleSheet).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(DefaultStyleSheet).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(DefaultStyleSheet).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(DefaultStyleSheet).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(DefaultStyleSheet).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(DefaultStyleSheet).attrContains_2muovr_k$ = attrContains;
  protoOf(DefaultStyleSheet).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(DefaultStyleSheet).group_po2tbv_k$ = group;
  protoOf(DefaultStyleSheet).descendant_x63x3d_k$ = descendant;
  protoOf(DefaultStyleSheet).desc_ej3sir_k$ = desc;
  protoOf(DefaultStyleSheet).desc_8daddi_k$ = desc_0;
  protoOf(DefaultStyleSheet).desc_npizau_k$ = desc_1;
  protoOf(DefaultStyleSheet).desc_w7b77z_k$ = desc_2;
  protoOf(DefaultStyleSheet).child_4w4v4o_k$ = child;
  protoOf(DefaultStyleSheet).sibling_tzh2by_k$ = sibling;
  protoOf(DefaultStyleSheet).adjacent_gxbr7y_k$ = adjacent;
  protoOf(DefaultStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(DefaultStyleSheet).hover_gby0bi_k$ = hover;
  protoOf(DefaultStyleSheet).get_hover_islez7_k$ = get_hover;
  protoOf(DefaultStyleSheet).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(DefaultStyleSheet).get_link_wopumb_k$ = get_link;
  protoOf(DefaultStyleSheet).get_visited_8zg8qp_k$ = get_visited;
  protoOf(DefaultStyleSheet).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(DefaultStyleSheet).get_target_juba8q_k$ = get_target;
  protoOf(DefaultStyleSheet).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(DefaultStyleSheet).get_scope_iyfcq3_k$ = get_scope;
  protoOf(DefaultStyleSheet).get_active_avldsf_k$ = get_active;
  protoOf(DefaultStyleSheet).get_focus_irhg33_k$ = get_focus;
  protoOf(DefaultStyleSheet).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(DefaultStyleSheet).get_playing_6wau9n_k$ = get_playing;
  protoOf(DefaultStyleSheet).get_paused_hy6yif_k$ = get_paused;
  protoOf(DefaultStyleSheet).get_autofill_801dad_k$ = get_autofill;
  protoOf(DefaultStyleSheet).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(DefaultStyleSheet).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(DefaultStyleSheet).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(DefaultStyleSheet).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(DefaultStyleSheet).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(DefaultStyleSheet).get_default_qtagd4_k$ = get_default;
  protoOf(DefaultStyleSheet).get_checked_djib3y_k$ = get_checked;
  protoOf(DefaultStyleSheet).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(DefaultStyleSheet).get_blank_ip8b3f_k$ = get_blank;
  protoOf(DefaultStyleSheet).get_valid_j01e4z_k$ = get_valid;
  protoOf(DefaultStyleSheet).get_invalid_xocxse_k$ = get_invalid;
  protoOf(DefaultStyleSheet).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(DefaultStyleSheet).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(DefaultStyleSheet).get_required_wq3z3c_k$ = get_required;
  protoOf(DefaultStyleSheet).get_optional_x3zcnr_k$ = get_optional;
  protoOf(DefaultStyleSheet).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(DefaultStyleSheet).get_root_wott0r_k$ = get_root;
  protoOf(DefaultStyleSheet).get_empty_iqwn50_k$ = get_empty;
  protoOf(DefaultStyleSheet).get_first_irdx8n_k$ = get_first;
  protoOf(DefaultStyleSheet).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(DefaultStyleSheet).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(DefaultStyleSheet).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(DefaultStyleSheet).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(DefaultStyleSheet).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(DefaultStyleSheet).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(DefaultStyleSheet).get_host_wonf8x_k$ = get_host;
  protoOf(DefaultStyleSheet).host_93x8z6_k$ = host;
  protoOf(DefaultStyleSheet).get_defined_qtfew0_k$ = get_defined;
  protoOf(DefaultStyleSheet).get_left_woprgw_k$ = get_left;
  protoOf(DefaultStyleSheet).get_right_ixz7xv_k$ = get_right;
  protoOf(DefaultStyleSheet).lang_xkki7h_k$ = lang;
  protoOf(DefaultStyleSheet).nthChild_tigwrk_k$ = nthChild;
  protoOf(DefaultStyleSheet).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(DefaultStyleSheet).nthOfType_n46p53_k$ = nthOfType;
  protoOf(DefaultStyleSheet).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(DefaultStyleSheet).not_di0wzr_k$ = not;
  protoOf(DefaultStyleSheet).get_after_iol2gj_k$ = get_after;
  protoOf(DefaultStyleSheet).get_before_bdhrwo_k$ = get_before;
  protoOf(DefaultStyleSheet).get_cue_18j7sm_k$ = get_cue;
  protoOf(DefaultStyleSheet).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(DefaultStyleSheet).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(DefaultStyleSheet).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(DefaultStyleSheet).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(DefaultStyleSheet).get_selection_jv4aal_k$ = get_selection;
  protoOf(DefaultStyleSheet).slotted_iujblx_k$ = slotted;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initKobweb;
  _.$_$.b = get_AppGlobalsLocal;
  _.$_$.c = KobwebApp$composable;
  _.$_$.d = Anchor$composable;
  _.$_$.e = Router;
  _.$_$.f = prependIf;
  _.$_$.g = Companion_getInstance_4;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-kobweb-core.js.map
