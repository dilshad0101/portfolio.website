(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kobweb-kobweb-silk-widgets.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-kobweb-core.js', './kobweb-kobweb-compose.js', './html-html-core.js', './kobweb-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kobweb-kobweb-silk-widgets.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-kobweb-core.js'), require('./kobweb-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-compose-html-ext.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kobweb-kobweb-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kobweb-kobweb-silk-widgets' was not found. Please, check whether 'kobweb-kobweb-silk-widgets' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kobweb-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kobweb-kobweb-core' was not found. Please, check whether 'kobweb-kobweb-core' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kobweb-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kobweb-kobweb-compose' was not found. Please, check whether 'kobweb-kobweb-compose' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kobweb-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kobweb-compose-html-ext' was not found. Please, check whether 'kobweb-compose-html-ext' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    root['kobweb-kobweb-silk'] = factory(typeof this['kobweb-kobweb-silk'] === 'undefined' ? {} : this['kobweb-kobweb-silk'], this['androidx-runtime'], this['kobweb-kobweb-silk-widgets'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-kobweb-core'], this['kobweb-kobweb-compose'], this['html-html-core'], this['kobweb-compose-html-ext']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_silk_widgets, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var initSilk = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.o;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.b9;
  var isObject = kotlin_kotlin.$_$.q6;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var KobwebApp$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x8;
  var SilkStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.y;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var prependIf = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var get_ImageStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.b;
  var toModifier$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.k;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Img$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.t8;
  var get_LinkStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.d;
  var Anchor$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.y8;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var protoOf = kotlin_kotlin.$_$.y6;
  var Annotation = kotlin_kotlin.$_$.q8;
  var classMeta = kotlin_kotlin.$_$.c6;
  var VOID = kotlin_kotlin.$_$.v9;
  var setMetadataFor = kotlin_kotlin.$_$.z6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(InitSilk, 'InitSilk', classMeta, VOID, [Annotation]);
  //endregion
  function SilkApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(766681329);
    sourceInformation($composer_0, 'C(SilkApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(766681329, $dirty, -1, 'com.varabyte.kobweb.silk.SilkApp$composable (SilkApp.kt:10)');
      }
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        initSilk(SilkApp$composable$lambda);
        var value = Unit_getInstance();
        tmp1_cache.updateRememberedValue_l1colo_k$(Unit_getInstance());
        tmp = Unit_getInstance();
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      var tmp_0 = tmp$ret$1;
      tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$2;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$3 = tmp0;
      var tmp$ret$10;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1100068428, true, SilkApp$composable$lambda_0(content, $dirty));
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_2 = tmp3_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$4;
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>' call
        tmp$ret$4 = ComposableLambda$invoke$ref(dispatchReceiver);
        var value_0 = tmp$ret$4;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$5 = tmp_2;
      tmp$ret$6 = tmp$ret$5;
      var tmp_3 = tmp$ret$6;
      tmp$ret$7 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$7;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$8 = tmp0_0;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      KobwebApp$composable(tmp$ret$10, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(SilkApp$composable$lambda_1(content, $changed));
    }
  }
  function SilkApp$composable$lambda(ctx) {
    get_initSilkHook()(ctx);
    return Unit_getInstance();
  }
  function SilkApp$composable$lambda_0($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1100068428, $changed, -1, 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous> (SilkApp.kt:16)');
        }
        // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
        var tmp0_Style$composable = KobwebComposeStyleSheet_getInstance();
        var tmp1_Style$composable = $composer_0;
        var $composer_1 = tmp1_Style$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-168645675);
        sourceInformation($composer_1, 'CC(Style$composable)');
        Style$composable(null, tmp0_Style$composable.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
        $composer_1.endReplaceableGroup_er37p7_k$();
        // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
        var tmp2_Style$composable = SilkStyleSheet_getInstance();
        var tmp3_Style$composable = $composer_0;
        var $composer_2 = tmp3_Style$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(-168645675);
        sourceInformation($composer_2, 'CC(Style$composable)');
        Style$composable(null, tmp2_Style$composable.get_cssRules_jdoznh_k$(), $composer_2, 0, 1);
        $composer_2.endReplaceableGroup_er37p7_k$();
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function SilkApp$composable$lambda_1($content, $$changed) {
    return function ($composer, $force) {
      SilkApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Image$composable(src, desc, modifier, autoPrefix, variant, $composer, $changed, $default) {
    var desc_0 = {_v: desc};
    var modifier_0 = {_v: modifier};
    var autoPrefix_0 = {_v: autoPrefix};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(34210657);
    sourceInformation($composer_0, 'C(Image$composable)P(3,1,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(desc_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(autoPrefix_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        desc_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 8) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 16) === 0)) {
        variant_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(34210657, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image$composable (Image.kt:24)');
      }
      Img$composable(prependIf(Companion_getInstance_1(), autoPrefix_0._v, src), desc_0._v, toAttrs(toModifier$composable(get_ImageStyle(), [variant_0._v], $composer_0, 0).then_6jcr1i_k$(modifier_0._v)), $composer_0, 112 & $dirty, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Image$composable$lambda(src, desc_0, modifier_0, autoPrefix_0, variant_0, $changed, $default));
    }
  }
  function Image$composable$lambda($src, $desc, $modifier, $autoPrefix, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      Image$composable($src, $desc._v, $modifier._v, $autoPrefix._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Link$composable(path, text, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, ref, $composer, $changed, $default) {
    var text_0 = {_v: text};
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1950033137);
    sourceInformation($composer_0, 'C(Link$composable)P(4,6,1,7,3,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openInternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openExternalLinksStrategy_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        text_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1950033137, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable (Link.kt:33)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = variant_0._v;
      var tmp_1 = openInternalLinksStrategy_0._v;
      var tmp_2 = openExternalLinksStrategy_0._v;
      var tmp_3 = autoPrefix_0._v;
      var tmp_4 = ref_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 1642222480, true, Link$composable$lambda(text_0, path));
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
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = tmp0_let;
      }
      tmp$ret$1 = tmp_6;
      tmp$ret$2 = tmp$ret$1;
      var tmp_7 = tmp$ret$2;
      tmp$ret$3 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Link$composable_0(path, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$6, $composer_0, 12582912 | 14 & $dirty | 112 & $dirty >> 3 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Link$composable$lambda_0(path, text_0, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function Link$composable_0(path, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(231966754);
    sourceInformation($composer_0, 'C(Link$composable)P(5,2,7,4,3!1,6)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openInternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openExternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(autoPrefix_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(231966754, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable (Link.kt:54)');
      }
      var tmp = toAttrs(toModifier$composable(get_LinkStyle(), [variant_0._v], $composer_0, 0).then_6jcr1i_k$(modifier_0._v));
      var tmp_0 = openInternalLinksStrategy_0._v;
      var tmp_1 = openExternalLinksStrategy_0._v;
      var tmp_2 = autoPrefix_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 2134514244, true, Link$composable$lambda_1(ref_0, $dirty, content));
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
      var tmp_4;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = tmp0_let;
      }
      tmp$ret$1 = tmp_4;
      tmp$ret$2 = tmp$ret$1;
      var tmp_5 = tmp$ret$2;
      tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Anchor$composable(path, tmp, tmp_0, tmp_1, tmp_2, tmp$ret$6, $composer_0, 196608 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Link$composable$lambda_2(path, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, ref_0, content, $changed, $default));
    }
  }
  function Link$composable$lambda($text, $path) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1642222480, $changed, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous> (Link.kt:43)');
        }
        var tmp0_elvis_lhs = $text._v;
        Text$composable(tmp0_elvis_lhs == null ? $path : tmp0_elvis_lhs, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Link$composable$lambda_0($path, $text, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Link$composable($path, $text._v, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Link$composable$lambda_1($ref, $$dirty, $content) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Anchor) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2134514244, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous> (Link.kt:70)');
        }
        registerRefScope$composable($this$Anchor, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 15);
        $content($composer_0, 14 & $$dirty >> 21);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Link$composable$lambda_2($path, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Link$composable_0($path, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function set_initSilkHook(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    initSilkHook = _set____db54di;
  }
  function get_initSilkHook() {
    _init_properties_InitSilk_kt__vukue3();
    return initSilkHook;
  }
  var initSilkHook;
  function InitSilk() {
  }
  protoOf(InitSilk).equals = function (other) {
    if (!(other instanceof InitSilk))
      return false;
    var tmp0_other_with_cast = other instanceof InitSilk ? other : THROW_CCE();
    return true;
  };
  protoOf(InitSilk).hashCode = function () {
    return 0;
  };
  protoOf(InitSilk).toString = function () {
    return '@com.varabyte.kobweb.silk.init.InitSilk()';
  };
  function initSilkHook$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (properties_initialized_InitSilk_kt_8x89gn) {
    } else {
      properties_initialized_InitSilk_kt_8x89gn = true;
      initSilkHook = initSilkHook$lambda;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image$composable;
  _.$_$.b = Link$composable;
  _.$_$.c = set_initSilkHook;
  _.$_$.d = SilkApp$composable;
  //endregion
  return _;
}));
