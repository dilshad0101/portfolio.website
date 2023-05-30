(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-kobweb-core.js', './kobweb-kobweb-silk.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './html-internal-html-core-runtime.js', './kobweb-kobweb-silk-widgets.js', './kobweb-kobweb-compose.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './html-html-core.js', './kobweb-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-kobweb-core.js'), require('./kobweb-kobweb-silk.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-kobweb-silk-widgets.js'), require('./kobweb-kobweb-compose.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./html-html-core.js'), require('./kobweb-compose-html-ext.js'));
  else {
    if (typeof this['kobweb-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'kobweb-kobweb-core' was not found. Please, check whether 'kobweb-kobweb-core' is loaded prior to 'composeweb'.");
    }
    if (typeof this['kobweb-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'kobweb-kobweb-silk' was not found. Please, check whether 'kobweb-kobweb-silk' is loaded prior to 'composeweb'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'composeweb'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'composeweb'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'composeweb'.");
    }
    if (typeof this['kobweb-kobweb-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'kobweb-kobweb-silk-widgets' was not found. Please, check whether 'kobweb-kobweb-silk-widgets' is loaded prior to 'composeweb'.");
    }
    if (typeof this['kobweb-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'kobweb-kobweb-compose' was not found. Please, check whether 'kobweb-kobweb-compose' is loaded prior to 'composeweb'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'composeweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'composeweb'.");
    }
    if (typeof this['kobweb-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'composeweb'. Its dependency 'kobweb-compose-html-ext' was not found. Please, check whether 'kobweb-compose-html-ext' is loaded prior to 'composeweb'.");
    }
    root.composeweb = factory(typeof composeweb === 'undefined' ? {} : composeweb, this['kobweb-kobweb-core'], this['kobweb-kobweb-silk'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['html-internal-html-core-runtime'], this['kobweb-kobweb-silk-widgets'], this['kobweb-kobweb-compose'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['html-html-core'], this['kobweb-compose-html-ext']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var set_initSilkHook = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.b8;
  var ensureNotNull = kotlin_kotlin.$_$.j9;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.b9;
  var isObject = kotlin_kotlin.$_$.q6;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.o;
  var protoOf = kotlin_kotlin.$_$.y6;
  var objectMeta = kotlin_kotlin.$_$.x6;
  var VOID = kotlin_kotlin.$_$.u9;
  var setMetadataFor = kotlin_kotlin.$_$.z6;
  var get_AppGlobalsLocal = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var to = kotlin_kotlin.$_$.s9;
  var mapOf = kotlin_kotlin.$_$.d4;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.v;
  var registerBaseStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.q;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.d;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var CoroutineImpl = kotlin_kotlin.$_$.q5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.p6;
  var classMeta = kotlin_kotlin.$_$.c6;
  var getColorMode$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.r;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.f;
  var toModifier$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.l;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.k8;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Surface$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.d;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.f8;
  var SuspendFunction1 = kotlin_kotlin.$_$.r5;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.e8;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var Link$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.b;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.d7;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var get_SilkTheme = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.s;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var alignSelf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var KProperty0 = kotlin_kotlin.$_$.m7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i6;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.w;
  var base = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.j;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.w8;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.u;
  var displayIf = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.c;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.u8;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var CSSBackground = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var backdropFilter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var toSilkPalette = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.t;
  var get_link = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.k;
  var get_visited = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.m;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.c8;
  var get_dppx = kotlin_org_jetbrains_compose_html_html_core.$_$.f7;
  var base$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.i;
  var ComponentStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.g;
  var addVariant = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.h;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.a;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Image$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var flexShrink = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var flexBasis = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var SpanText$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.n;
  var fontSize_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var flexWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Li$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.s8;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var borderStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o8;
  var Anchor$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var H1$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.q8;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var P$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.t8;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Start_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var gridRowStart = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var gridRowEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(MyApp$composable$lambda$slambda, 'MyApp$composable$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt', objectMeta);
  setMetadataFor(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(HomePage$composable$slambda, 'HomePage$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  //endregion
  function main() {
    Companion_getInstance().set_svddio_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    set_initSilkHook(main$lambda_0);
    router.navigateTo$default_mld8fs_k$(removePrefix(window.location.href, window.location.origin));
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable$composable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_1(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:14)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1049063675, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:41)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1157688605, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it, $dirty));
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
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
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
      renderWithDeferred$composable(tmp$ret$6, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1157688605, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:41)');
        }
        $it($composer_0, 14 & $$dirty);
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
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1049063675, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function main$lambda_0(ctx) {
    ctx.get_theme_iz24rk_k$().registerComponentStyle_35os1s_k$(get_FooterStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_35os1s_k$(get_NavHeaderStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_35os1s_k$(get_NavItemStyle());
    ctx.get_theme_iz24rk_k$().registerComponentVariants_h9g5mj_k$([get_NavButtonVariant()]);
    ctx.get_theme_iz24rk_k$().registerComponentVariants_h9g5mj_k$([get_TextButton()]);
    initSilk(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1432601359, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (main.kt:40)');
        }
        $router.renderActivePage$composable_ebhbpl_k$(ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1953125703, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:40)');
        }
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1432601359, true, main$lambda$lambda$lambda($router));
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
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        MyApp$composable(tmp$ret$6, $composer_0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda_1($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:37)');
        }
        var tmp_0 = [get_AppGlobalsLocal().provides_3e53yf_k$(mapOf(to('title', 'Dilshad')))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1953125703, true, main$lambda$lambda($router));
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
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
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
  function get_BlackColor() {
    _init_properties_MyApp_kt__8kzqxp();
    return BlackColor;
  }
  var BlackColor;
  function get_YellowColor() {
    _init_properties_MyApp_kt__8kzqxp();
    return YellowColor;
  }
  var YellowColor;
  function get_GrayColor() {
    _init_properties_MyApp_kt__8kzqxp();
    return GrayColor;
  }
  var GrayColor;
  function get_WhiteColor() {
    _init_properties_MyApp_kt__8kzqxp();
    return WhiteColor;
  }
  var WhiteColor;
  function get_COLOR_MODE_KEY() {
    return COLOR_MODE_KEY;
  }
  var COLOR_MODE_KEY;
  function initSilk(ctx) {
    _init_properties_MyApp_kt__8kzqxp();
    ctx.get_config_c0698r_k$().set_initialColorMode_n118as_k$(ColorMode_DARK_getInstance());
    var tmp = ctx.get_stylesheet_hk204p_k$();
    registerBaseStyle(tmp, 'body', VOID, initSilk$lambda);
  }
  function MyApp(content) {
    _init_properties_MyApp_kt__8kzqxp();
    illegalDecoyCallException('MyApp');
  }
  function MyApp$composable(content, $composer, $changed) {
    _init_properties_MyApp_kt__8kzqxp();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(512653256);
    sourceInformation($composer_0, 'C(MyApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(512653256, $dirty, -1, 'com.app.composeweb.MyApp$composable (MyApp.kt:35)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.app.composeweb.MyApp$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -615481957, true, MyApp$composable$lambda(content, $dirty));
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
        // Inline function 'com.app.composeweb.MyApp$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
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
      SilkApp$composable(tmp$ret$6, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MyApp$composable$lambda_0(content, $changed));
    }
  }
  function initSilk$lambda() {
    _init_properties_MyApp_kt__8kzqxp();
    return fontFamily(Companion_getInstance_1(), ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']);
  }
  function MyApp$composable$lambda$slambda($colorMode, resultContinuation) {
    this.$colorMode_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MyApp$composable$lambda$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MyApp$composable$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MyApp$composable$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          localStorage.setItem('composeweb:colorMode', this.$colorMode_1.get_name_woqyms_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MyApp$composable$lambda$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new MyApp$composable$lambda$slambda(this.$colorMode_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(MyApp$composable$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MyApp$composable$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new MyApp$composable$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MyApp$composable$lambda$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-527240612, $changed, -1, 'com.app.composeweb.MyApp$composable.<anonymous>.<anonymous> (MyApp.kt:42)');
        }
        $content($composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MyApp$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-615481957, $changed, -1, 'com.app.composeweb.MyApp$composable.<anonymous> (MyApp.kt:36)');
        }
        var colorMode = getColorMode$composable($composer_0, 0);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(colorMode);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.app.composeweb.MyApp$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = MyApp$composable$lambda$slambda_0(colorMode, null);
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
        LaunchedEffect$composable(colorMode, tmp$ret$4, $composer_0, 0);
        var tmp_2 = minHeight(toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100));
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'com.app.composeweb.MyApp$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -527240612, true, MyApp$composable$lambda$lambda($content, $$dirty));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_0;
        var $composer_2 = tmp3_remember$composable_0;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'com.app.composeweb.MyApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_5(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        Surface$composable(tmp_2, null, null, tmp$ret$11, $composer_0, 3072, 6);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MyApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_MyApp_kt_4xnol;
  function _init_properties_MyApp_kt__8kzqxp() {
    if (properties_initialized_MyApp_kt_4xnol) {
    } else {
      properties_initialized_MyApp_kt_4xnol = true;
      BlackColor = rgba(31, 31, 31, 1);
      YellowColor = rgba(224, 207, 52, 1);
      GrayColor = rgba(184, 184, 184, 1);
      WhiteColor = rgba(228, 228, 228, 1);
    }
  }
  function get_FooterStyle() {
    _init_properties_Footer_kt__fc6p2z();
    return FooterStyle$delegate.getValue_1h979_k$(null, FooterStyle$factory());
  }
  var FooterStyle$delegate;
  function footer(modifier) {
    _init_properties_Footer_kt__fc6p2z();
    illegalDecoyCallException('footer');
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_1$lambda_a73781($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1581401590, $changed, -1, 'com.app.composeweb.components.sections.ComposableSingletons$FooterKt.lambda-1.<anonymous> (Footer.kt:25)');
      }
      var tmp = margin(Companion_getInstance_1(), VOID, get_px(5));
      Link$composable('https://github.com/dilshad0101', 'Github', tmp, null, null, null, false, null, $composer_0, 54, 248);
      var tmp_0 = margin(Companion_getInstance_1(), VOID, get_px(5));
      Link$composable('https://mail.google.com/mail/?view=cm&to=dilshadmuhammed0101@gmail.com&su=&body=', 'Mail', tmp_0, null, null, null, false, null, $composer_0, 54, 248);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1581401590, false, ComposableSingletons$FooterKt$lambda_1$lambda_a73781));
  }
  protoOf(ComposableSingletons$FooterKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function footer$composable(modifier, $composer, $changed, $default) {
    _init_properties_Footer_kt__fc6p2z();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1672203354);
    sourceInformation($composer_0, 'C(footer$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(1672203354, $changed, -1, 'com.app.composeweb.components.sections.footer$composable (Footer.kt:24)');
      }
      var tmp = toModifier$composable(get_FooterStyle(), [], $composer_0, 64).then_6jcr1i_k$(modifier_0._v);
      Row$composable(tmp, null, null, null, ComposableSingletons$FooterKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(footer$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function FooterStyle$delegate$lambda($this$base) {
    _init_properties_Footer_kt__fc6p2z();
    var tmp = margin_0(Companion_getInstance_1(), get_cssRem(2));
    var tmp_0 = get_px(1);
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp0__get_Solid__yuxops = Companion_getInstance_2();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'solid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return alignSelf(fontSize(padding(borderTop(tmp, tmp_0, tmp$ret$3, get_SilkTheme().get_palettes_f7ft27_k$().get_9eueec_k$($this$base.get_colorMode_trbg8z_k$()).get_border_bj7585_k$()), get_cssRem(1), get_cssRem(4)), Companion_getInstance_3().get_Smaller_5wbdat_k$()), Companion_getInstance_4().get_Center_3arb0i_k$());
  }
  function footer$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      footer$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FooterStyle$factory() {
    return getPropertyCallableRef('FooterStyle', 0, KProperty0, function () {
      return get_FooterStyle();
    }, null);
  }
  var properties_initialized_Footer_kt_pg7k03;
  function _init_properties_Footer_kt__fc6p2z() {
    if (properties_initialized_Footer_kt_pg7k03) {
    } else {
      properties_initialized_Footer_kt_pg7k03 = true;
      var tmp = Companion_getInstance_5();
      FooterStyle$delegate = base(tmp, VOID, VOID, FooterStyle$delegate$lambda);
    }
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavHeaderStyle$delegate.getValue_1h979_k$(null, NavHeaderStyle$factory());
  }
  var NavHeaderStyle$delegate;
  function get_NavItemStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavItemStyle$delegate.getValue_1h979_k$(null, NavItemStyle$factory());
  }
  var NavItemStyle$delegate;
  function get_NavButtonVariant() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavButtonVariant$delegate.getValue_1h979_k$(null, NavButtonVariant$factory());
  }
  var NavButtonVariant$delegate;
  function get_TextButton() {
    _init_properties_NavHeader_kt__vdotjy();
    return TextButton$delegate.getValue_1h979_k$(null, TextButton$factory());
  }
  var TextButton$delegate;
  function navLink(path, text) {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('navLink');
  }
  function navHeader() {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('navHeader');
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1028855451, $changed, -1, 'com.app.composeweb.components.sections.ComposableSingletons$NavHeaderKt.lambda-1.<anonymous> (NavHeader.kt:92)');
      }
      Text$composable('Dilshad', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-532467424, $changed, -1, 'com.app.composeweb.components.sections.ComposableSingletons$NavHeaderKt.lambda-2.<anonymous> (NavHeader.kt:103)');
      }
      navLink$composable('/', 'Home', $composer_0, 54);
      navLink$composable('#about', 'About', $composer_0, 54);
      navLink$composable('#skill', 'Skills', $composer_0, 54);
      navLink$composable('#project', 'Projects', $composer_0, 54);
      navLink$composable('https://mail.google.com/mail/?view=cm&to=dilshadmuhammed0101@gmail.com&su=&body=', 'Contact', $composer_0, 54);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Row) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1411361795, $changed, -1, 'com.app.composeweb.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous> (NavHeader.kt:84)');
      }
      var tmp = Companion_getInstance_1();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.app.composeweb.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh;
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
      Span$composable(toAttrs(margin_1(fontSize(displayIf(color(fontWeight(onClick(tmp, tmp$ret$4), Companion_getInstance_6().get_Black_i7mvue_k$()), get_WhiteColor()), Breakpoint_MD_getInstance()), Companion_getInstance_3().get_Larger_wiegw_k$()), VOID, VOID, VOID, get_px(60))), ComposableSingletons$NavHeaderKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      var tmp0_horizontalArrangement = SpaceBetween_getInstance();
      var tmp1_modifier = $this$Row.align_oawnis_k$(maxWidth(paddingInline(Companion_getInstance_1(), get_px(10), get_px(20)), Companion_getInstance_7().get_MaxContext_n323zg_k$()), CenterVertically_getInstance());
      Row$composable(tmp1_modifier, tmp0_horizontalArrangement, null, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24624, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh(it) {
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-1028855451, false, ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-532467424, false, ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(1411361795, false, ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms));
  }
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function navLink$composable(path, text, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-483042217);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-483042217, $dirty, -1, 'com.app.composeweb.components.sections.navLink$composable (NavHeader.kt:62)');
      }
      var tmp0_variant = get_TextButton();
      var tmp1_modifier = backdropFilter(borderRadius(margin(color(background(textDecorationLine(fontWeight(color(Companion_getInstance_1(), get_YellowColor()), Companion_getInstance_6().get_Black_i7mvue_k$()), Companion_getInstance_8().get_None_wo6tgh_k$()), [new CSSBackground(VOID, get_BlackColor(), VOID, VOID, Companion_getInstance_9().of_7jtbf1_k$(get_px(0)))]), get_YellowColor()), VOID, get_px(20)), get_px(0)), Companion_getInstance_10().get_None_wo6tgh_k$());
      Link$composable(path, text, tmp1_modifier, tmp0_variant, null, null, false, null, $composer_0, 14 & $dirty | 112 & $dirty, 240);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(navLink$composable$lambda(path, text, $changed));
    }
  }
  function navHeader$composable($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(871111254);
    sourceInformation($composer_0, 'C(navHeader$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(871111254, $changed, -1, 'com.app.composeweb.components.sections.navHeader$composable (NavHeader.kt:76)');
      }
      var tmp0_modifier = backgroundColor(height(fillMaxWidth(fillMaxSize(Companion_getInstance_1())), get_px(50)), get_BlackColor());
      var tmp1_verticalAlignment = CenterVertically_getInstance();
      var tmp2_horizontalArrangement = SpaceBetween_getInstance();
      Row$composable(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(navHeader$composable$lambda($changed));
    }
  }
  function NavHeaderStyle$delegate$lambda($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1733946991);
    if (isTraceInProgress()) {
      traceEventStart(-1733946991, $changed, -1, 'com.app.composeweb.components.sections.NavHeaderStyle$delegate.<anonymous> (NavHeader.kt:22)');
    }
    var tmp0 = toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function NavHeaderStyle$delegate$lambda_0($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    return backgroundColor(height(fillMaxWidth(Companion_getInstance_1()), get_px(50)), get_BlackColor());
  }
  function NavItemStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_NavHeader_kt__vdotjy();
    var linkColor = toSilkPalette($this$ComponentStyle.get_colorMode_trbg8z_k$()).get_background_stpfw7_k$();
    $this$ComponentStyle.base_li7hyk_k$(NavItemStyle$delegate$lambda$lambda);
    var tmp = get_link($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(NavItemStyle$delegate$lambda$lambda_0(linkColor));
    var tmp_0 = get_visited($this$ComponentStyle);
    tmp_0.invoke_ifmuo5_k$(NavItemStyle$delegate$lambda$lambda_1(linkColor));
    return Unit_getInstance();
  }
  function NavItemStyle$delegate$lambda$lambda() {
    _init_properties_NavHeader_kt__vdotjy();
    return margin(Companion_getInstance_1(), VOID, get_px(15));
  }
  function NavItemStyle$delegate$lambda$lambda_0($linkColor) {
    return function () {
      return color(Companion_getInstance_1(), $linkColor);
    };
  }
  function NavItemStyle$delegate$lambda$lambda_1($linkColor) {
    return function () {
      return color(Companion_getInstance_1(), $linkColor);
    };
  }
  function NavButtonVariant$delegate$lambda($this$addVariant) {
    _init_properties_NavHeader_kt__vdotjy();
    $this$addVariant.base_li7hyk_k$(NavButtonVariant$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function NavButtonVariant$delegate$lambda$lambda() {
    _init_properties_NavHeader_kt__vdotjy();
    return borderRadius(padding_0(Companion_getInstance_1(), get_px(0)), get_percent(50));
  }
  function TextButton$delegate$lambda($this$addVariant) {
    _init_properties_NavHeader_kt__vdotjy();
    var tmp = get_link($this$addVariant);
    tmp.invoke_ifmuo5_k$(TextButton$delegate$lambda$lambda);
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.invoke_ifmuo5_k$(TextButton$delegate$lambda$lambda_0);
    $this$addVariant.base_li7hyk_k$(TextButton$delegate$lambda$lambda_1);
    return Unit_getInstance();
  }
  function TextButton$delegate$lambda$lambda() {
    _init_properties_NavHeader_kt__vdotjy();
    return color(Companion_getInstance_1(), get_YellowColor());
  }
  function TextButton$delegate$lambda$lambda_0() {
    _init_properties_NavHeader_kt__vdotjy();
    return color(Companion_getInstance_1(), get_YellowColor());
  }
  function TextButton$delegate$lambda$lambda_1() {
    _init_properties_NavHeader_kt__vdotjy();
    return backdropFilter(borderRadius(padding_0(color(background(textDecorationLine(fontWeight(Companion_getInstance_1(), Companion_getInstance_6().get_Black_i7mvue_k$()), Companion_getInstance_8().get_None_wo6tgh_k$()), [new CSSBackground(VOID, get_BlackColor(), VOID, VOID, Companion_getInstance_9().of_7jtbf1_k$(get_px(0)))]), get_YellowColor()), get_dppx(0)), get_px(0)), Companion_getInstance_10().get_None_wo6tgh_k$());
  }
  function navLink$composable$lambda($path, $text, $$changed) {
    return function ($composer, $force) {
      navLink$composable($path, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function navHeader$composable$lambda($$changed) {
    return function ($composer, $force) {
      navHeader$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavHeaderStyle$factory() {
    return getPropertyCallableRef('NavHeaderStyle', 0, KProperty0, function () {
      return get_NavHeaderStyle();
    }, null);
  }
  function NavItemStyle$factory() {
    return getPropertyCallableRef('NavItemStyle', 0, KProperty0, function () {
      return get_NavItemStyle();
    }, null);
  }
  function NavButtonVariant$factory() {
    return getPropertyCallableRef('NavButtonVariant', 0, KProperty0, function () {
      return get_NavButtonVariant();
    }, null);
  }
  function TextButton$factory() {
    return getPropertyCallableRef('TextButton', 0, KProperty0, function () {
      return get_TextButton();
    }, null);
  }
  var properties_initialized_NavHeader_kt_f5zrgg;
  function _init_properties_NavHeader_kt__vdotjy() {
    if (properties_initialized_NavHeader_kt_f5zrgg) {
    } else {
      properties_initialized_NavHeader_kt_f5zrgg = true;
      var tmp = Companion_getInstance_5();
      var tmp_0 = NavHeaderStyle$delegate$lambda;
      NavHeaderStyle$delegate = base$composable(tmp, tmp_0, VOID, NavHeaderStyle$delegate$lambda_0);
      NavItemStyle$delegate = ComponentStyle(VOID, VOID, NavItemStyle$delegate$lambda);
      var tmp_1 = get_NavItemStyle();
      NavButtonVariant$delegate = addVariant(tmp_1, VOID, NavButtonVariant$delegate$lambda);
      var tmp_2 = get_ButtonStyle();
      TextButton$delegate = addVariant(tmp_2, VOID, TextButton$delegate$lambda);
    }
  }
  function project(imageHeight, imageWidth, imgPath, title, Description) {
    illegalDecoyCallException('project');
  }
  function project$composable(imageHeight, imageWidth, imgPath, title, Description, $composer, $changed, $default) {
    var imageHeight_0 = {_v: imageHeight};
    var imageWidth_0 = {_v: imageWidth};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(938092134);
    sourceInformation($composer_0, 'C(project$composable)P(1,2,3,4)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_ga7h3f_k$(imageHeight_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(imageWidth_0._v) : false) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(imgPath) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(Description) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          imageHeight_0._v = get_px(196);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          imageWidth_0._v = get_px(326);
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(938092134, $dirty, -1, 'com.app.composeweb.components.sections.project$composable (Projects.kt:18)');
      }
      var tmp = padding_1(Companion_getInstance_1(), get_px(40), VOID, get_px(65));
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.app.composeweb.components.sections.project$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -832964573, true, project$composable$lambda(title, $dirty, imgPath, imageWidth_0, imageHeight_0, Description));
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
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.app.composeweb.components.sections.project$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Column$composable(tmp, null, null, null, tmp$ret$6, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(project$composable$lambda_0(imageHeight_0, imageWidth_0, imgPath, title, Description, $changed, $default));
    }
  }
  function project$composable$lambda$lambda($imgPath, $title, $imageWidth, $imageHeight, $$dirty, $Description) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1930180198, $changed, -1, 'com.app.composeweb.components.sections.project$composable.<anonymous>.<anonymous> (Projects.kt:33)');
        }
        var tmp_0 = $title + ' images';
        var tmp_1 = margin_1(borderRadius(height(width(Companion_getInstance_1(), $imageWidth._v), $imageHeight._v), get_px(10)), VOID, get_px(25), get_px(30));
        Image$composable($imgPath, tmp_0, tmp_1, false, null, $composer_0, 14 & $$dirty >> 6, 24);
        var tmp_2 = flexBasis(flexShrink(flexGrow(color(textAlign(Companion_getInstance_1(), Companion_getInstance_11().get_Start_ih4i6x_k$()), get_GrayColor()), 1), 1), get_px(100));
        SpanText$composable($Description, tmp_2, null, null, $composer_0, 14 & $$dirty >> 12, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function project$composable$lambda($title, $$dirty, $imgPath, $imageWidth, $imageHeight, $Description) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-832964573, $changed, -1, 'com.app.composeweb.components.sections.project$composable.<anonymous> (Projects.kt:25)');
        }
        var tmp_0 = padding_1(fontWeight(fontSize_0(Companion_getInstance_1(), get_px(20)), Companion_getInstance_6().get_Bold_wnz5ke_k$()), VOID, VOID, get_px(20));
        SpanText$composable($title, tmp_0, null, null, $composer_0, 14 & $$dirty >> 9, 12);
        var tmp_1 = Companion_getInstance_1();
        var tmp$ret$3;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
        var tmp0__get_Flex__7sqmag = Companion_getInstance_12();
        var tmp$ret$2;
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'flex';
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        var tmp_2 = display(tmp_1, tmp$ret$3);
        var tmp$ret$7;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
        var tmp1__get_Wrap__a71k06 = Companion_getInstance_13();
        var tmp$ret$6;
        // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = 'wrap';
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_3 = flexWrap(tmp_2, tmp$ret$7);
        var tmp$ret$14;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'com.app.composeweb.components.sections.project$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, 1930180198, true, project$composable$lambda$lambda($imgPath, $title, $imageWidth, $imageHeight, $$dirty, $Description));
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$10;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$8;
          // Inline function 'com.app.composeweb.components.sections.project$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$8 = ComposableLambda$invoke$ref_11(dispatchReceiver);
          var value = tmp$ret$8;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_5 = value;
        } else {
          tmp_5 = tmp0_let;
        }
        tmp$ret$9 = tmp_5;
        tmp$ret$10 = tmp$ret$9;
        var tmp_6 = tmp$ret$10;
        tmp$ret$11 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0 = tmp$ret$11;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$12 = tmp0;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        Row$composable(tmp_3, null, null, null, tmp$ret$14, $composer_0, 24576, 14);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function project$composable$lambda_0($imageHeight, $imageWidth, $imgPath, $title, $Description, $$changed, $$default) {
    return function ($composer, $force) {
      project$composable($imageHeight._v, $imageWidth._v, $imgPath, $title, $Description, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function skillSet(Title, Description) {
    illegalDecoyCallException('skillSet');
  }
  function skillSet$composable(Title, Description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(504175711);
    sourceInformation($composer_0, 'C(skillSet$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(Title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(Description) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(504175711, $dirty, -1, 'com.app.composeweb.components.sections.skillSet$composable (Skills.kt:18)');
      }
      var tmp = Start_getInstance();
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.app.composeweb.components.sections.skillSet$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 11132572, true, skillSet$composable$lambda(Title, Description, $dirty));
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
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.app.composeweb.components.sections.skillSet$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Row$composable(null, tmp, null, null, tmp$ret$6, $composer_0, 24624, 13);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(skillSet$composable$lambda_0(Title, Description, $changed));
    }
  }
  function skillSet$composable$lambda$lambda($Title, $Description, $$dirty) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1529966726, $changed, -1, 'com.app.composeweb.components.sections.skillSet$composable.<anonymous>.<anonymous> (Skills.kt:26)');
        }
        var tmp_0 = $Title + ': ';
        var tmp_1 = fontWeight(id(fontSize_0(Companion_getInstance_1(), get_px(15)), 'ID'), Companion_getInstance_6().get_SemiBold_aid1c4_k$());
        SpanText$composable(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
        var tmp_2 = color(Companion_getInstance_1(), get_GrayColor());
        SpanText$composable($Description, tmp_2, null, null, $composer_0, 14 & $$dirty >> 3, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function skillSet$composable$lambda($Title, $Description, $$dirty) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(11132572, $changed, -1, 'com.app.composeweb.components.sections.skillSet$composable.<anonymous> (Skills.kt:20)');
        }
        var tmp_0 = toAttrs(textAlign(paddingInline(textAlign(Companion_getInstance_1(), Companion_getInstance_11().get_Start_ih4i6x_k$()), get_px(0)), Companion_getInstance_11().get_Left_wo5bw0_k$()));
        Li$composable(tmp_0, null, $composer_0, 0, 2);
        var tmp_1 = toAttrs(textAlign(Companion_getInstance_1(), Companion_getInstance_11().get_Start_ih4i6x_k$()));
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.app.composeweb.components.sections.skillSet$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1529966726, true, skillSet$composable$lambda$lambda($Title, $Description, $$dirty));
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
        var tmp_3;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.app.composeweb.components.sections.skillSet$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_13(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Span$composable(tmp_1, tmp$ret$6, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function skillSet$composable$lambda_0($Title, $Description, $$changed) {
    return function ($composer, $force) {
      skillSet$composable($Title, $Description, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage() {
    illegalDecoyCallException('HomePage');
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(647225899, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:62)');
      }
      Text$composable("I'm ", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-412646067, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-2.<anonymous> (Index.kt:55)');
      }
      Span$composable(toAttrs(color(margin_2(paddingInline(lineHeight(fontSize_0(Companion_getInstance_1(), get_px(50)), get_px(0)), get_px(0)), get_px(0)), get_WhiteColor())), ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      Text$composable('Dilshad', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1401075786, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous> (Index.kt:68)');
      }
      Text$composable('Muhammed', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-916438955, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-4.<anonymous> (Index.kt:74)');
      }
      Text$composable('Native Android Developer', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda_ktf1p8($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2045091972, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-5.<anonymous> (Index.kt:91)');
      }
      Text$composable('HIRE ME', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_6$lambda_807fcz($this$Anchor, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1541705218, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-6.<anonymous> (Index.kt:78)');
      }
      var tmp = fontWeight(fontSize(width(margin_0(height(cursor(Companion_getInstance_1(), Companion_getInstance_14().get_Pointer_m64vg4_k$()), get_px(32)), get_px(10)), get_px(60)), Companion_getInstance_3().get_XXSmall_dp2rr6_k$()), Companion_getInstance_6().get_Bold_wnz5ke_k$());
      var tmp$ret$3;
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      var tmp0__get_None__7x727t = Companion_getInstance_2();
      var tmp$ret$2;
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'none';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      Button$composable(toAttrs(background(borderRadius_0(borderStyle(tmp, tmp$ret$3), get_px(50), get_px(50)), [new CSSBackground(VOID, get_YellowColor())])), ComposableSingletons$IndexKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_7$lambda_y7a5jy($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-109479573, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-7.<anonymous> (Index.kt:52)');
      }
      Span$composable(toAttrs(fontSize_0(color(Companion_getInstance_1(), get_YellowColor()), get_px(50))), ComposableSingletons$IndexKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
      Span$composable(toAttrs(margin_2(padding_0(fontSize_0(color(Companion_getInstance_1(), get_YellowColor()), get_px(50)), get_px(0)), get_px(0))), ComposableSingletons$IndexKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 0);
      Span$composable(toAttrs(fontWeight(fontSize_0(color(Companion_getInstance_1(), get_WhiteColor()), get_px(18)), Companion_getInstance_6().get_Medium_1fiba6_k$())), ComposableSingletons$IndexKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 0);
      Anchor$composable('https://mail.google.com/mail/?view=cm&to=dilshadmuhammed0101@gmail.com&su=&body=', null, null, null, false, ComposableSingletons$IndexKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 196614, 30);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_8$lambda_5dnohr($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(942603266, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-8.<anonymous> (Index.kt:50)');
      }
      Column$composable(null, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 24576, 15);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_9$lambda_nfyskg($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2036948865, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-9.<anonymous> (Index.kt:100)');
      }
      var tmp = color(Companion_getInstance_1(), get_YellowColor());
      SpanText$composable('About', tmp, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_10$lambda_o4kwki($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(446991902, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-10.<anonymous> (Index.kt:111)');
      }
      Text$composable('I am Dilshad Muhammed, a seasoned software developer specializing in Native Android Development. With a proven track record of excellence, I bring a wealth of expertise and experience to the table. As a dedicated freelancer, I have had the privilege of working on a diverse range of projects, allowing me to refine my skills and deliver exceptional results. My proficiency in Native Android Development empowers me to create bespoke applications that seamlessly blend cutting-edge technology with elegant design. I pride myself on developing robust and scalable solutions that not only meet but exceed client expectations. From ideation to execution, I am committed to delivering flawless, user-centric experiences that drive business growth. By staying at the forefront of industry advancements, I ensure that my applications are equipped with the latest features and functionalities. I relentlessly pursue professional development opportunities, continuously expanding my technical knowledge to remain ahead of the curve. This commitment to innovation enables me to deliver solutions that are not only visually appealing but also optimized for performance and efficiency.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_11$lambda_4p1khp($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1597092544, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-11.<anonymous> (Index.kt:108)');
      }
      Span$composable(toAttrs(textAlign(Companion_getInstance_1(), Companion_getInstance_11().get_Left_wo5bw0_k$())), ComposableSingletons$IndexKt_getInstance().lambda_10_7sywo5__1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_12$lambda_xio1jw($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1747165858, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-12.<anonymous> (Index.kt:99)');
      }
      H1$composable(null, ComposableSingletons$IndexKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 48, 1);
      P$composable(toAttrs(padding_2(textAlign(Companion_getInstance_1(), Companion_getInstance_11().get_Start_ih4i6x_k$()), VOID, get_px(60))), ComposableSingletons$IndexKt_getInstance().lambda_11_7sywo6__1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_13$lambda_8otjd1($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-526647445, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-13.<anonymous> (Index.kt:98)');
      }
      var tmp = id(Companion_getInstance_1(), 'about');
      Column$composable(tmp, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_12_7sywo7__1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_14$lambda_k4sxp6($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1282517642, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-14.<anonymous> (Index.kt:122)');
      }
      var tmp = color(Companion_getInstance_1(), get_YellowColor());
      SpanText$composable('My Skills', tmp, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_15$lambda_m2on7r($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1709398745, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-15.<anonymous> (Index.kt:121)');
      }
      H1$composable(null, ComposableSingletons$IndexKt_getInstance().lambda_14_7sywo9__1, $composer_0, 48, 1);
      skillSet$composable('Seamless Native App Development', 'By utilizing Java or Kotlin for Android and Swift or Objective-C for iOS, I ensure that your app runs seamlessly on the respective platforms, delivering a native user experience that engages and delights your target audience.', $composer_0, 54);
      skillSet$composable('Cross-Platform Proficiency', 'As a versatile developer, I possess expertise in cross-platform frameworks such as Kotlin Multiplatform, Compose Web. This allows me to leverage a single codebase to build apps that work flawlessly on multiple platforms, saving time and resources without compromising on quality or performance.', $composer_0, 54);
      skillSet$composable('Striking UI/UX Design', 'By carefully crafting intuitive interfaces and aesthetically pleasing designs, I create apps that not only look stunning but also ensure smooth navigation and effortless interaction. By integrating cutting-edge design tools like Figma, I deliver visually impactful and user-friendly apps that leave a lasting impression.', $composer_0, 54);
      skillSet$composable('Seamless API Integration', "I can enhance your app's functionality by seamlessly integrating features like social media integration, payment gateways, geolocation services, and much more. By effectively utilizing APIs, I ensure your app remains connected to the latest technologies and services", $composer_0, 54);
      skillSet$composable('Reliable Project Management', 'I understand the importance of clear communication, meeting deadlines, and ensuring client satisfaction. With a detail-oriented approach, I meticulously plan and execute each project, keeping you informed every step of the way.', $composer_0, 54);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_16$lambda_6qxtug($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1581799070, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-16.<anonymous> (Index.kt:120)');
      }
      Column$composable(null, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_15_7sywoa_1, $composer_0, 24576, 15);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_17$lambda_zgjr2h($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-580583049, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-17.<anonymous> (Index.kt:137)');
      }
      var tmp = color(Companion_getInstance_1(), get_YellowColor());
      SpanText$composable('My Projects', tmp, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_18$lambda_6mxa0a($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1600633553, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-18.<anonymous> (Index.kt:144)');
      }
      project$composable(null, null, '/img0.jpg', 'Quick Notes', 'with our aesthetically designed note app. Say goodbye to cluttered and uninspiring notes as our app provides a visually pleasing interface that sparks creativity and enhances focus. Capture your ideas, make to-do lists, and organize your thoughts effortlessly, all while enjoying the seamless and intuitive user experience. Simplify your life and elevate your productivity with our stunning note app.', $composer_0, 28032, 3);
      var tmp0_imageWidth = get_px(250);
      var tmp1_imageHeight = get_px(320);
      project$composable(tmp1_imageHeight, tmp0_imageWidth, '/img1.jpg', 'Prayer Time Reminder', "PrayerTime Reminder is a powerful and intuitive mobile app designed to help you stay connected to your faith through timely and accurate prayer times. With precise calculations based on your location, customizable Adhan notifications, and a built-in Qibla compass, you'll never miss a prayer again. Seamlessly adjust prayer times to match your local conventions and track your prayer history for personal reflection. Stay informed about Islamic events with the integrated calendar and explore Quranic resources for spiritual guidance. With a user-friendly interface and multilingual support, PrayerTime Reminder is your ultimate prayer companion, ensuring you never lose touch with your daily prayers. Download PrayerTime Reminder now and experience a more fulfilling and organized prayer journey.", $composer_0, 28032, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_19$lambda_m6p71x($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1883633958, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-19.<anonymous> (Index.kt:136)');
      }
      H1$composable(toAttrs(id(Companion_getInstance_1(), 'project')), ComposableSingletons$IndexKt_getInstance().lambda_17_7sywoc_1, $composer_0, 48, 0);
      var tmp = padding_2(textAlign(Companion_getInstance_1(), Companion_getInstance_11().get_Start_ih4i6x_k$()), VOID, get_px(60));
      Column$composable(tmp, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_18_7sywod_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_20$lambda_h0f4m7($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-879864477, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-20.<anonymous> (Index.kt:135)');
      }
      Column$composable(null, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_19_7sywoe_1, $composer_0, 24576, 15);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_21$lambda_p72gaq($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(321982181, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-21.<anonymous> (Index.kt:44)');
      }
      navHeader$composable($composer_0, 0);
      var tmp0_$receiver = margin_2(Companion_getInstance_1(), get_px(0));
      var tmp1_top = get_px(80);
      var tmp2_left = get_px(120);
      var tmp3_bottom = get_px(100);
      H1$composable(toAttrs(color(padding_2(tmp0_$receiver, tmp1_top, VOID, tmp3_bottom, tmp2_left), get_YellowColor())), ComposableSingletons$IndexKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 48, 0);
      var tmp4_$receiver = Companion_getInstance_1();
      var tmp5_left = get_px(45);
      var tmp6_top = get_px(50);
      var tmp7_right = get_px(50);
      var tmp = padding_2(tmp4_$receiver, tmp6_top, tmp7_right, VOID, tmp5_left);
      Box$composable(tmp, null, null, ComposableSingletons$IndexKt_getInstance().lambda_13_7sywo8__1, $composer_0, 3072, 6);
      var tmp8_$receiver = Companion_getInstance_1();
      var tmp9_left = get_px(45);
      var tmp10_top = get_px(50);
      var tmp11_right = get_px(50);
      var tmp_0 = id(padding_2(tmp8_$receiver, tmp10_top, tmp11_right, VOID, tmp9_left), 'skill');
      Box$composable(tmp_0, null, null, ComposableSingletons$IndexKt_getInstance().lambda_16_7sywob_1, $composer_0, 3072, 6);
      var tmp12_$receiver = Companion_getInstance_1();
      var tmp13_left = get_px(45);
      var tmp14_top = get_px(50);
      var tmp15_right = get_px(50);
      var tmp_1 = padding_2(tmp12_$receiver, tmp14_top, tmp15_right, VOID, tmp13_left);
      Box$composable(tmp_1, null, null, ComposableSingletons$IndexKt_getInstance().lambda_20_7sywp0__1, $composer_0, 3072, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_22$lambda_3mk0rh($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1142896110, $changed, -1, 'com.app.composeweb.pages.ComposableSingletons$IndexKt.lambda-22.<anonymous> (Index.kt:40)');
      }
      var tmp = textAlign(color(fillMaxSize(Companion_getInstance_1()), get_WhiteColor()), Companion_getInstance_11().get_Center_3arb0i_k$());
      var tmp_0 = Start_getInstance_0();
      Column$composable(tmp, null, tmp_0, null, ComposableSingletons$IndexKt_getInstance().lambda_21_7sywp1__1, $composer_0, 24960, 10);
      footer$composable(gridRowEnd(gridRowStart($this$Box.align_8yhdm5_k$(Companion_getInstance_1(), Center_getInstance()), 2), 3), $composer_0, 0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(647225899, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-412646067, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-1401075786, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-916438955, false, ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(2045091972, false, ComposableSingletons$IndexKt$lambda_5$lambda_ktf1p8));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-1541705218, false, ComposableSingletons$IndexKt$lambda_6$lambda_807fcz));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-109479573, false, ComposableSingletons$IndexKt$lambda_7$lambda_y7a5jy));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(942603266, false, ComposableSingletons$IndexKt$lambda_8$lambda_5dnohr));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-2036948865, false, ComposableSingletons$IndexKt$lambda_9$lambda_nfyskg));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(446991902, false, ComposableSingletons$IndexKt$lambda_10$lambda_o4kwki));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(1597092544, false, ComposableSingletons$IndexKt$lambda_11$lambda_4p1khp));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1747165858, false, ComposableSingletons$IndexKt$lambda_12$lambda_xio1jw));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-526647445, false, ComposableSingletons$IndexKt$lambda_13$lambda_8otjd1));
    var tmp_12 = this;
    tmp_12.lambda_14_7sywo9__1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-1282517642, false, ComposableSingletons$IndexKt$lambda_14$lambda_k4sxp6));
    var tmp_13 = this;
    tmp_13.lambda_15_7sywoa_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1709398745, false, ComposableSingletons$IndexKt$lambda_15$lambda_m2on7r));
    var tmp_14 = this;
    tmp_14.lambda_16_7sywob_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-1581799070, false, ComposableSingletons$IndexKt$lambda_16$lambda_6qxtug));
    var tmp_15 = this;
    tmp_15.lambda_17_7sywoc_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-580583049, false, ComposableSingletons$IndexKt$lambda_17$lambda_zgjr2h));
    var tmp_16 = this;
    tmp_16.lambda_18_7sywod_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(1600633553, false, ComposableSingletons$IndexKt$lambda_18$lambda_6mxa0a));
    var tmp_17 = this;
    tmp_17.lambda_19_7sywoe_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-1883633958, false, ComposableSingletons$IndexKt$lambda_19$lambda_m6p71x));
    var tmp_18 = this;
    tmp_18.lambda_20_7sywp0__1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-879864477, false, ComposableSingletons$IndexKt$lambda_20$lambda_h0f4m7));
    var tmp_19 = this;
    tmp_19.lambda_21_7sywp1__1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(321982181, false, ComposableSingletons$IndexKt$lambda_21$lambda_p72gaq));
    var tmp_20 = this;
    tmp_20.lambda_22_7sywp2__1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(1142896110, false, ComposableSingletons$IndexKt$lambda_22$lambda_3mk0rh));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_7_bzdzzu_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_8_bzdzzv_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_9_bzdzzw_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_10_gbhpvg_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_11_gbhpvh_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_12_gbhpvi_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_13_gbhpvj_k$ = function () {
    return this.lambda_13_7sywo8__1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_14_gbhpvk_k$ = function () {
    return this.lambda_14_7sywo9__1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_15_gbhpvl_k$ = function () {
    return this.lambda_15_7sywoa_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_16_gbhpvm_k$ = function () {
    return this.lambda_16_7sywob_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_17_gbhpvn_k$ = function () {
    return this.lambda_17_7sywoc_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_18_gbhpvo_k$ = function () {
    return this.lambda_18_7sywod_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_19_gbhpvp_k$ = function () {
    return this.lambda_19_7sywoe_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_20_gbhpwb_k$ = function () {
    return this.lambda_20_7sywp0__1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_21_gbhpwc_k$ = function () {
    return this.lambda_21_7sywp1__1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_22_gbhpwd_k$ = function () {
    return this.lambda_22_7sywp2__1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-664113558);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-664113558, $changed, -1, 'com.app.composeweb.pages.HomePage$composable (Index.kt:28)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.app.composeweb.pages.HomePage$composable.<anonymous>' call
        tmp$ret$0 = HomePage$composable$slambda_0(null);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      LaunchedEffect$composable('Dilshad', tmp$ret$4, $composer_0, 6);
      var tmp_1 = gridTemplateRows(minHeight(background(fillMaxWidth(Companion_getInstance_1()), [new CSSBackground(VOID, get_BlackColor())]), get_percent(100)), 'minmax(0, 1fr) min-content');
      Box$composable(tmp_1, null, null, ComposableSingletons$IndexKt_getInstance().lambda_22_7sywp2__1, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HomePage$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          document.title = 'Dilshad';
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HomePage$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$composable$slambda(completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(HomePage$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HomePage$composable$slambda_0(resultContinuation) {
    var i = new HomePage$composable$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: init
  COLOR_MODE_KEY = 'composeweb:colorMode';
  //endregion
  main();
  return _;
}));
