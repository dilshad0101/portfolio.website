(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './html-html-core.js', './kobweb-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./html-html-core.js'), require('./kobweb-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobweb-compose'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-compose'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobweb-compose'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-kobweb-compose'.");
    }
    if (typeof this['kobweb-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-compose'. Its dependency 'kobweb-compose-html-ext' was not found. Please, check whether 'kobweb-compose-html-ext' is loaded prior to 'kobweb-kobweb-compose'.");
    }
    root['kobweb-kobweb-compose'] = factory(typeof this['kobweb-kobweb-compose'] === 'undefined' ? {} : this['kobweb-kobweb-compose'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['html-html-core'], this['kobweb-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.f5;
  var VOID = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.q5;
  var protoOf = kotlin_kotlin.$_$.p5;
  var objectMeta = kotlin_kotlin.$_$.o5;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var classMeta = kotlin_kotlin.$_$.v4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var isObject = kotlin_kotlin.$_$.j5;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.j7;
  var equals = kotlin_kotlin.$_$.y4;
  var isInterface = kotlin_kotlin.$_$.i5;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var hashCode = kotlin_kotlin.$_$.d5;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var toString = kotlin_kotlin.$_$.r5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var coerceIn = kotlin_kotlin.$_$.u5;
  var numberToInt = kotlin_kotlin.$_$.m5;
  var alignSelf_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var background = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var borderWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var borderRadius_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var backdropFilter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var flexWrap = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var flexBasis = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var flexShrink = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var gridRowEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var gridRowStart = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var maxWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var lineHeight_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var fontSize_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta);
  setMetadataFor(End, 'End', objectMeta);
  setMetadataFor(Start, 'Start', objectMeta);
  setMetadataFor(Top, 'Top', objectMeta);
  setMetadataFor(Bottom, 'Bottom', objectMeta);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(BoxScope, 'BoxScope', classMeta);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(ColumnScope, 'ColumnScope', classMeta);
  setMetadataFor(RowScope, 'RowScope', classMeta);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(TopStart, 'TopStart', objectMeta);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta);
  setMetadataFor(Center_0, 'Center', objectMeta);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta);
  setMetadataFor(Top_0, 'Top', objectMeta);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta);
  setMetadataFor(Start_0, 'Start', objectMeta);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta);
  setMetadataFor(End_0, 'End', objectMeta);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta);
  function then(other) {
    return other === Companion_getInstance_7() ? this : new ChainedModifier(this, other);
  }
  setMetadataFor(Modifier, 'Modifier', interfaceMeta);
  function fold(initial, operation) {
    return operation(initial, this);
  }
  setMetadataFor(Element, 'Element', interfaceMeta, VOID, [Modifier]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Modifier]);
  setMetadataFor(ChainedModifier, 'ChainedModifier', classMeta, VOID, [Modifier]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [Element]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [Element]);
  setMetadataFor(Rgb, 'Rgb', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  //endregion
  function HorizontalOrVertical() {
  }
  function End() {
    End_instance = this;
    this.l24_1 = 0;
  }
  var End_instance;
  function End_getInstance() {
    if (End_instance == null)
      new End();
    return End_instance;
  }
  function Start() {
    Start_instance = this;
    this.m24_1 = 0;
  }
  var Start_instance;
  function Start_getInstance() {
    if (Start_instance == null)
      new Start();
    return Start_instance;
  }
  function Top() {
    Top_instance = this;
    this.n24_1 = 0;
  }
  var Top_instance;
  function Top_getInstance() {
    if (Top_instance == null)
      new Top();
    return Top_instance;
  }
  function Bottom() {
    Bottom_instance = this;
    this.o24_1 = 0;
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    if (Bottom_instance == null)
      new Bottom();
    return Bottom_instance;
  }
  function Center() {
    Center_instance = this;
    this.p24_1 = 0;
  }
  var Center_instance;
  function Center_getInstance() {
    if (Center_instance == null)
      new Center();
    return Center_instance;
  }
  function SpaceEvenly() {
    SpaceEvenly_instance = this;
    this.q24_1 = 0;
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    if (SpaceEvenly_instance == null)
      new SpaceEvenly();
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
    SpaceBetween_instance = this;
    this.r24_1 = 0;
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    if (SpaceBetween_instance == null)
      new SpaceBetween();
    return SpaceBetween_instance;
  }
  function SpaceAround() {
    SpaceAround_instance = this;
    this.s24_1 = 0;
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    if (SpaceAround_instance == null)
      new SpaceAround();
    return SpaceAround_instance;
  }
  function FromStyle() {
    FromStyle_instance = this;
    this.t24_1 = 0;
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    if (FromStyle_instance == null)
      new FromStyle();
    return FromStyle_instance;
  }
  function BoxScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.w1q([toClassName_1($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function BoxScope() {
    this.u24_1 = 0;
  }
  protoOf(BoxScope).v24 = function (_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, BoxScope$align$lambda(alignment));
  };
  function Box$composable(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(921036704);
    sourceInformation($composer_0, 'C(Box$composable)P(2,1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_7();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_getInstance();
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().w24_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(921036704, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable (Box.kt:20)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = toAttrs(tmp, Box$composable$lambda(contentAlignment_0));
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 721727587, true, Box$composable$lambda_0(ref_0, $dirty, content_0));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.h11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.fv(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$1 = tmp_2;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Div$composable(tmp_0, tmp$ret$6, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mw();
    }
    var tmp0_safe_receiver = $composer_0.x12();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.w16(Box$composable$lambda_1(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.s1o(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.n11()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:24)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mw();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.w24_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function Box$composable$lambda($contentAlignment) {
    return function ($this$toAttrs) {
      $this$toAttrs.w1q(['kobweb-box', toClassName_1($contentAlignment._v)]);
      return Unit_getInstance();
    };
  }
  function Box$composable$lambda_0($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(721727587, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous> (Box.kt:28)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 3);
        $content._v(new BoxScope(), $composer_0, 112 & $$dirty >> 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.mw();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.s1o(p0, p1, p2);
    };
  }
  function Box$composable$lambda_1($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box$composable($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Column$composable(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-1435219930);
    sourceInformation($composer_0, 'C(Column$composable)P(2,4,1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(verticalArrangement_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(horizontalAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n12(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_7();
      }
      if (!(($default & 2) === 0)) {
        verticalArrangement_0._v = Top_getInstance();
      }
      if (!(($default & 4) === 0)) {
        horizontalAlignment_0._v = Start_getInstance_0();
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1435219930, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable (Column.kt:20)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = toAttrs(tmp, Column$composable$lambda(verticalArrangement_0, horizontalAlignment_0));
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1861113368, true, Column$composable$lambda_0(ref_0, $dirty, content));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.h11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.fv(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$1 = tmp_2;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Div$composable(tmp_0, tmp$ret$6, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mw();
    }
    var tmp0_safe_receiver = $composer_0.x12();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.w16(Column$composable$lambda_1(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnScope() {
    this.x24_1 = 0;
  }
  function Column$composable$lambda($verticalArrangement, $horizontalAlignment) {
    return function ($this$toAttrs) {
      $this$toAttrs.w1q(['kobweb-col', toClassName_3($verticalArrangement._v), toClassName_0($horizontalAlignment._v)]);
      return Unit_getInstance();
    };
  }
  function Column$composable$lambda_0($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(1861113368, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous> (Column.kt:29)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 6);
        $content(new ColumnScope(), $composer_0, 112 & $$dirty >> 9);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.mw();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.s1o(p0, p1, p2);
    };
  }
  function Column$composable$lambda_1($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column$composable($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function RowScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.w1q([toClassName($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function RowScope() {
    this.y24_1 = 0;
  }
  protoOf(RowScope).z24 = function (_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, RowScope$align$lambda(alignment));
  };
  function Row$composable(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(2022945866);
    sourceInformation($composer_0, 'C(Row$composable)P(2,1,4,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(horizontalArrangement_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(verticalAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.n12(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_7();
      }
      if (!(($default & 2) === 0)) {
        horizontalArrangement_0._v = Start_getInstance();
      }
      if (!(($default & 4) === 0)) {
        verticalAlignment_0._v = Top_getInstance_0();
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(2022945866, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row$composable (Row.kt:20)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = toAttrs(tmp, Row$composable$lambda(horizontalArrangement_0, verticalAlignment_0));
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1725920680, true, Row$composable$lambda_0(ref_0, $dirty, content));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.h11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.fv(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$1 = tmp_2;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Div$composable(tmp_0, tmp$ret$6, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mw();
    }
    var tmp0_safe_receiver = $composer_0.x12();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.w16(Row$composable$lambda_1(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Row$composable$lambda($horizontalArrangement, $verticalAlignment) {
    return function ($this$toAttrs) {
      $this$toAttrs.w1q(['kobweb-row', toClassName_2($horizontalArrangement._v), toClassName($verticalAlignment._v)]);
      return Unit_getInstance();
    };
  }
  function Row$composable$lambda_0($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(1725920680, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous> (Row.kt:29)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 6);
        $content(new RowScope(), $composer_0, 112 & $$dirty >> 9);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.mw();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.s1o(p0, p1, p2);
    };
  }
  function Row$composable$lambda_1($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row$composable($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(tmp0_subject, Top_getInstance_0())) {
      tmp = 'kobweb-align-top';
    } else if (equals(tmp0_subject, CenterVertically_getInstance())) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(tmp0_subject, Bottom_getInstance_0())) {
      tmp = 'kobweb-align-bottom';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(tmp0_subject, Start_getInstance_0())) {
      tmp = 'kobweb-align-start';
    } else if (equals(tmp0_subject, CenterHorizontally_getInstance())) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(tmp0_subject, End_getInstance_0())) {
      tmp = 'kobweb-align-end';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(tmp0_subject, TopStart_getInstance())) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(tmp0_subject, TopCenter_getInstance())) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(tmp0_subject, TopEnd_getInstance())) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(tmp0_subject, CenterStart_getInstance())) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(tmp0_subject, Center_getInstance_0())) {
      tmp = 'kobweb-align-center';
    } else if (equals(tmp0_subject, CenterEnd_getInstance())) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(tmp0_subject, BottomStart_getInstance())) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(tmp0_subject, BottomCenter_getInstance())) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(tmp0_subject, BottomEnd_getInstance())) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(tmp0_subject, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_2(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(tmp0_subject, End_getInstance())) {
      tmp = 'kobweb-arrange-end';
    } else {
      if (equals(tmp0_subject, Start_getInstance())) {
        tmp = 'kobweb-arrange-start';
      } else {
        if (isInterface(tmp0_subject, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_3(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(tmp0_subject, Top_getInstance())) {
      tmp = 'kobweb-arrange-top';
    } else {
      if (equals(tmp0_subject, Bottom_getInstance())) {
        tmp = 'kobweb-arrange-bottom';
      } else {
        if (isInterface(tmp0_subject, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_4(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (equals(tmp0_subject, Center_getInstance())) {
      tmp = 'kobweb-arrange-center';
    } else if (equals(tmp0_subject, SpaceAround_getInstance())) {
      tmp = 'kobweb-arrange-space-around';
    } else if (equals(tmp0_subject, SpaceBetween_getInstance())) {
      tmp = 'kobweb-arrange-space-between';
    } else if (equals(tmp0_subject, SpaceEvenly_getInstance())) {
      tmp = 'kobweb-arrange-space-evenly';
    } else if (equals(tmp0_subject, FromStyle_getInstance())) {
      tmp = 'kobweb-arrange-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function initBox($this) {
    $this.c1w('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.c1w('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.c1w('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.c1w('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.c1w('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.c1w('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.c1w('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.c1w('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.c1w('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.c1w('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.c1w('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.c1w('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.c1w('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.c1w('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.c1w('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.c1w('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.c1w('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.c1w('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.c1w('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.c1w('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.c1w('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    $this.c1w('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    $this.c1w('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    $this.c1w('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    $this.c1w('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    $this.c1w('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    $this.c1w('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    $this.c1w('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.c1w('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.c1w('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.c1w('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.c1w('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.c1w('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.c1w('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    $this.c1w('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    $this.c1w('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    $this.c1w('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    $this.c1w('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    $this.c1w('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    $this.c1w('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    $this.c1w('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.c1w('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.c1w('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.c1w('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.c1w('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.c1w('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.c1w('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    var tmp0__get_Grid__7tebaj = Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'grid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$invoke, tmp$ret$3);
    gridTemplateColumns($this$invoke, 'minmax(0, 1fr)');
    gridTemplateRows($this$invoke, 'minmax(0, 1fr)');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    var tmp0__get_Start__yxhtvt = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().u1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    var tmp0__get_Start__yxhtvt = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().k1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    var tmp0__get_Start__yxhtvt = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().v1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().u1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().k1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().v1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    var tmp0__get_End__2jiyy8 = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().u1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    var tmp0__get_End__2jiyy8 = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().k1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    var tmp0__get_End__2jiyy8 = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    justifyItems($this$invoke, Companion_getInstance_2().v1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    var tmp0__get_Start__yxhtvt = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    justifySelf($this$invoke, Companion_getInstance_4().u1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    var tmp0__get_Start__yxhtvt = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    justifySelf($this$invoke, Companion_getInstance_4().k1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    var tmp0__get_Start__yxhtvt = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    justifySelf($this$invoke, Companion_getInstance_4().v1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    justifySelf($this$invoke, Companion_getInstance_4().u1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    justifySelf($this$invoke, Companion_getInstance_4().k1z());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_4().v1z());
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_4().u1z());
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    var tmp0__get_End__2jiyy8 = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_4().k1z());
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    var tmp0__get_End__2jiyy8 = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_4().v1z());
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    var tmp0__get_End__2jiyy8 = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance_0();
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
    display($this$invoke, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_5();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$invoke, tmp$ret$7);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    var tmp0__get_FlexStart__h0vpge = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    var tmp0__get_FlexEnd__mf4z93 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    var tmp0__get_SpaceEvenly__9r8n26 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'space-evenly';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    var tmp0__get_SpaceBetween__qaore9 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'space-between';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    var tmp0__get_SpaceAround__kc7ie0 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'space-around';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    var tmp0__get_FlexStart__h0vpge = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    var tmp0__get_FlexEnd__mf4z93 = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    var tmp0__get_FlexStart__h0vpge = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    var tmp0__get_FlexEnd__mf4z93 = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance_0();
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
    display($this$invoke, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_5();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$invoke, tmp$ret$7);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    var tmp0__get_FlexStart__h0vpge = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    var tmp0__get_FlexEnd__mf4z93 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    var tmp0__get_SpaceEvenly__9r8n26 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'space-evenly';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    var tmp0__get_SpaceBetween__qaore9 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'space-between';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    var tmp0__get_SpaceAround__kc7ie0 = Companion_getInstance_6();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'space-around';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    var tmp0__get_FlexStart__h0vpge = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    var tmp0__get_FlexEnd__mf4z93 = Companion_getInstance_1();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    var tmp0__get_FlexStart__h0vpge = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-start';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    var tmp0__get_Center__b9ugxw = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    var tmp0__get_FlexEnd__mf4z93 = Companion_getInstance_3();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex-end';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet.call(this);
    initBox(this);
    initCol(this);
    initRow(this);
    initSpacer(this);
    this.e25_1 = 0;
  }
  protoOf(KobwebComposeStyleSheet).s1v = function (selector, cssRule) {
    return this.r1v(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  function TopStart() {
    TopStart_instance = this;
    this.f25_1 = 0;
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    if (TopStart_instance == null)
      new TopStart();
    return TopStart_instance;
  }
  function TopCenter() {
    TopCenter_instance = this;
    this.g25_1 = 0;
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    if (TopCenter_instance == null)
      new TopCenter();
    return TopCenter_instance;
  }
  function TopEnd() {
    TopEnd_instance = this;
    this.h25_1 = 0;
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    if (TopEnd_instance == null)
      new TopEnd();
    return TopEnd_instance;
  }
  function CenterStart() {
    CenterStart_instance = this;
    this.i25_1 = 0;
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    if (CenterStart_instance == null)
      new CenterStart();
    return CenterStart_instance;
  }
  function Center_0() {
    Center_instance_0 = this;
    this.j25_1 = 0;
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    if (Center_instance_0 == null)
      new Center_0();
    return Center_instance_0;
  }
  function CenterEnd() {
    CenterEnd_instance = this;
    this.k25_1 = 0;
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    if (CenterEnd_instance == null)
      new CenterEnd();
    return CenterEnd_instance;
  }
  function BottomStart() {
    BottomStart_instance = this;
    this.l25_1 = 0;
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    if (BottomStart_instance == null)
      new BottomStart();
    return BottomStart_instance;
  }
  function BottomCenter() {
    BottomCenter_instance = this;
    this.m25_1 = 0;
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    if (BottomCenter_instance == null)
      new BottomCenter();
    return BottomCenter_instance;
  }
  function BottomEnd() {
    BottomEnd_instance = this;
    this.n25_1 = 0;
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    if (BottomEnd_instance == null)
      new BottomEnd();
    return BottomEnd_instance;
  }
  function Top_0() {
    Top_instance_0 = this;
    this.o25_1 = 0;
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    if (Top_instance_0 == null)
      new Top_0();
    return Top_instance_0;
  }
  function CenterVertically() {
    CenterVertically_instance = this;
    this.p25_1 = 0;
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    if (CenterVertically_instance == null)
      new CenterVertically();
    return CenterVertically_instance;
  }
  function Bottom_0() {
    Bottom_instance_0 = this;
    this.q25_1 = 0;
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    if (Bottom_instance_0 == null)
      new Bottom_0();
    return Bottom_instance_0;
  }
  function Start_0() {
    Start_instance_0 = this;
    this.r25_1 = 0;
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    if (Start_instance_0 == null)
      new Start_0();
    return Start_instance_0;
  }
  function CenterHorizontally() {
    CenterHorizontally_instance = this;
    this.s25_1 = 0;
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    if (CenterHorizontally_instance == null)
      new CenterHorizontally();
    return CenterHorizontally_instance;
  }
  function End_0() {
    End_instance_0 = this;
    this.t25_1 = 0;
  }
  var End_instance_0;
  function End_getInstance_0() {
    if (End_instance_0 == null)
      new End_0();
    return End_instance_0;
  }
  function FromStyle_0() {
    FromStyle_instance_0 = this;
    this.u25_1 = 0;
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    if (FromStyle_instance_0 == null)
      new FromStyle_0();
    return FromStyle_instance_0;
  }
  function Element() {
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).v25 = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).w25 = function (other) {
    return other;
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Modifier() {
  }
  function ChainedModifier(current, next) {
    this.x25_1 = current;
    this.y25_1 = next;
  }
  protoOf(ChainedModifier).v25 = function (initial, operation) {
    return this.y25_1.v25(this.x25_1.v25(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.x25_1, other.x25_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.y25_1, other.y25_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.x25_1) + imul(31, hashCode(this.y25_1)) | 0;
  };
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.w25(new StyleModifier(styles));
  }
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function StyleModifier(styles) {
    this.z25_1 = styles;
    this.a26_1 = 0;
  }
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.z25_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.z25_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.z25_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.w25(new AttrsModifier(attrs));
  }
  function AttrsModifier(attrs) {
    this.b26_1 = attrs;
    this.c26_1 = 0;
  }
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.b26_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.b26_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.b26_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.z25_1($this_null);
      }
      return Unit_getInstance();
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.v25(Unit_getInstance(), toStyles$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda$lambda($element) {
    return function ($this$style) {
      $element.z25_1($this$style);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.b26_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.u1q(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.v25(Unit_getInstance(), toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_getInstance();
    };
  }
  function Rgb(value) {
    this.d26_1 = value;
    this.e26_1 = 0;
  }
  protoOf(Rgb).f26 = function () {
    return this.d26_1 >> 16 & 255;
  };
  protoOf(Rgb).g26 = function () {
    return this.d26_1 >> 8 & 255;
  };
  protoOf(Rgb).h26 = function () {
    return this.d26_1 >> 0 & 255;
  };
  protoOf(Rgb).i26 = function () {
    return this.d26_1 >> 24 & 255;
  };
  protoOf(Rgb).j26 = function () {
    return toColorFloat(this.f26());
  };
  protoOf(Rgb).k26 = function () {
    return toColorFloat(this.g26());
  };
  protoOf(Rgb).l26 = function () {
    return toColorFloat(this.h26());
  };
  protoOf(Rgb).m26 = function () {
    return toColorFloat(this.i26());
  };
  protoOf(Rgb).n26 = function () {
    return Companion_getInstance_8().p26(255 - this.f26() | 0, 255 - this.g26() | 0, 255 - this.h26() | 0, this.i26());
  };
  protoOf(Rgb).q26 = function (byPercent) {
    // Inline function 'kotlin.require' call
    var tmp0_require = 0.0 <= byPercent ? byPercent <= 1.0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Rgb.darkened.<anonymous>' call
      tmp$ret$0 = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_getInstance_8().r26(this.j26() * darkeningMultiplier, this.k26() * darkeningMultiplier, this.l26() * darkeningMultiplier, this.m26());
  };
  protoOf(Rgb).s26 = function (red, green, blue, alpha) {
    return Companion_getInstance_8().r26(red, green, blue, alpha);
  };
  protoOf(Rgb).t26 = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.j26() : red;
    green = green === VOID ? this.k26() : green;
    blue = blue === VOID ? this.l26() : blue;
    alpha = alpha === VOID ? this.m26() : alpha;
    return $super === VOID ? this.s26(red, green, blue, alpha) : $super.s26.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).u26 = function () {
    return this;
  };
  protoOf(Rgb).toString = function () {
    return this.i26() === 255 ? 'rgb(' + this.f26() + ', ' + this.g26() + ', ' + this.h26() + ')' : 'rgba(' + this.f26() + ', ' + this.g26() + ', ' + this.h26() + ', ' + this.m26() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.f26() === other.f26();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.g26() === other.g26();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.h26() === other.h26();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.i26() === other.i26();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.f26();
    result = imul(31, result) + this.g26() | 0;
    result = imul(31, result) + this.h26() | 0;
    result = imul(31, result) + this.i26() | 0;
    return result;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.o26_1 = 0.3;
  }
  protoOf(Companion_0).v26 = function (r, g, b) {
    return this.p26(r, g, b, 255);
  };
  protoOf(Companion_0).p26 = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).r26 = function (r, g, b, a) {
    return this.p26(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Colors() {
    Colors_instance = this;
    this.w26_1 = 0;
  }
  protoOf(Colors).s22 = function () {
    return Companion_getInstance_8().v26(0, 0, 0);
  };
  protoOf(Colors).x26 = function () {
    return Companion_getInstance_8().v26(0, 0, 255);
  };
  protoOf(Colors).y26 = function () {
    return Companion_getInstance_8().v26(100, 149, 237);
  };
  protoOf(Colors).z26 = function () {
    return Companion_getInstance_8().v26(0, 255, 255);
  };
  protoOf(Colors).a27 = function () {
    return Companion_getInstance_8().v26(135, 206, 250);
  };
  protoOf(Colors).b27 = function () {
    return Companion_getInstance_8().v26(128, 0, 128);
  };
  protoOf(Colors).c27 = function () {
    return Companion_getInstance_8().v26(238, 130, 238);
  };
  protoOf(Colors).d27 = function () {
    return Companion_getInstance_8().v26(255, 255, 255);
  };
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function lightened(_this__u8e3s4, byPercent) {
    var tmp;
    if (byPercent === VOID) {
      Companion_getInstance_8();
      tmp = 0.3;
    } else {
      tmp = byPercent;
    }
    byPercent = tmp;
    return _this__u8e3s4.n26().q26(byPercent).n26();
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.j1q('aria-disabled', $value.toString());
      return Unit_getInstance();
    };
  }
  function alignSelf_1(_this__u8e3s4, alignSelf) {
    return styleModifier(_this__u8e3s4, alignSelf$lambda(alignSelf));
  }
  function alignSelf$lambda($alignSelf) {
    return function ($this$styleModifier) {
      alignSelf_0($this$styleModifier, $alignSelf);
      return Unit_getInstance();
    };
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function background_0(_this__u8e3s4, backgrounds) {
    return styleModifier(_this__u8e3s4, background$lambda(backgrounds));
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_getInstance();
    };
  }
  function background$lambda($backgrounds) {
    return function ($this$styleModifier) {
      background($this$styleModifier, $backgrounds.slice());
      return Unit_getInstance();
    };
  }
  function borderWidth_0(_this__u8e3s4, width) {
    return styleModifier(_this__u8e3s4, borderWidth$lambda(width));
  }
  function borderRadius_1(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function borderTop_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderStyle_0(_this__u8e3s4, lineStyle) {
    return styleModifier(_this__u8e3s4, borderStyle$lambda(lineStyle));
  }
  function borderRadius_2(_this__u8e3s4, topLeftAndBottomRight, topRightAndBottomLeft) {
    topLeftAndBottomRight = topLeftAndBottomRight === VOID ? get_px(0) : topLeftAndBottomRight;
    topRightAndBottomLeft = topRightAndBottomLeft === VOID ? get_px(0) : topRightAndBottomLeft;
    return styleModifier(_this__u8e3s4, borderRadius$lambda_0(topLeftAndBottomRight, topRightAndBottomLeft));
  }
  function borderWidth$lambda($width) {
    return function ($this$styleModifier) {
      borderWidth($this$styleModifier, $width);
      return Unit_getInstance();
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function borderStyle$lambda($lineStyle) {
    return function ($this$styleModifier) {
      borderStyle($this$styleModifier, $lineStyle);
      return Unit_getInstance();
    };
  }
  function borderRadius$lambda_0($topLeftAndBottomRight, $topRightAndBottomLeft) {
    return function ($this$styleModifier) {
      borderRadius_0($this$styleModifier, $topLeftAndBottomRight, $topRightAndBottomLeft);
      return Unit_getInstance();
    };
  }
  function boxShadow_0(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return styleModifier(_this__u8e3s4, boxShadow$lambda(offsetX, offsetY, blurRadius, spreadRadius, color, inset));
  }
  function boxShadow$lambda($offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, $offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset);
      return Unit_getInstance();
    };
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_getInstance();
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function backdropFilter_0(_this__u8e3s4, backdropFilter) {
    return styleModifier(_this__u8e3s4, backdropFilter$lambda(backdropFilter));
  }
  function backdropFilter$lambda($backdropFilter) {
    return function ($this$styleModifier) {
      backdropFilter($this$styleModifier, $backdropFilter);
      return Unit_getInstance();
    };
  }
  function classNames(_this__u8e3s4, classes) {
    return attrsModifier(_this__u8e3s4, classNames$lambda(classes));
  }
  function id(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, id$lambda(value));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.w1q($classes.slice());
      return Unit_getInstance();
    };
  }
  function id$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.x1q($value);
      return Unit_getInstance();
    };
  }
  function flexWrap_0(_this__u8e3s4, flexWrap) {
    return styleModifier(_this__u8e3s4, flexWrap$lambda(flexWrap));
  }
  function flexBasis_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexBasis$lambda(value));
  }
  function flexShrink_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexShrink$lambda(value));
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function flexWrap$lambda($flexWrap) {
    return function ($this$styleModifier) {
      flexWrap($this$styleModifier, $flexWrap);
      return Unit_getInstance();
    };
  }
  function flexBasis$lambda($value) {
    return function ($this$styleModifier) {
      flexBasis($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function flexShrink$lambda($value) {
    return function ($this$styleModifier) {
      flexShrink($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function gridRowEnd_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gridRowEnd$lambda(value));
  }
  function gridRowStart_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gridRowStart$lambda(value));
  }
  function gridTemplateRows_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gridTemplateRows$lambda(value));
  }
  function gridRowEnd$lambda($value) {
    return function ($this$styleModifier) {
      gridRowEnd($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function gridRowStart$lambda($value) {
    return function ($this$styleModifier) {
      gridRowStart($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function gridTemplateRows$lambda($value) {
    return function ($this$styleModifier) {
      gridTemplateRows($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function userSelect_0(_this__u8e3s4, userSelect) {
    return styleModifier(_this__u8e3s4, userSelect$lambda(userSelect));
  }
  function cursor_0(_this__u8e3s4, cursor) {
    return styleModifier(_this__u8e3s4, cursor$lambda(cursor));
  }
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_getInstance();
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_getInstance();
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.z1q($listener);
      return Unit_getInstance();
    };
  }
  function padding_0(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda(topBottom, leftRight));
  }
  function lineHeight_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function margin_0(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda(top, right, bottom, left));
  }
  function padding_1(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda_0(all));
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function margin_1(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda_0(top, leftRight, bottom));
  }
  function margin_2(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, margin$lambda_1(topBottom, leftRight));
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function maxWidth_0(_this__u8e3s4, maxWidth) {
    return styleModifier(_this__u8e3s4, maxWidth$lambda(maxWidth));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function padding_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, padding$lambda_1(top, leftRight, bottom));
  }
  function margin_3(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_2(all));
  }
  function lineHeight_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda_0(value));
  }
  function padding_3(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, padding$lambda_2(top, right, bottom, left));
  }
  function padding$lambda($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString($value));
      return Unit_getInstance();
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function margin$lambda($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function margin$lambda_0($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_1($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function maxWidth$lambda($maxWidth) {
    return function ($this$styleModifier) {
      maxWidth($this$styleModifier, $maxWidth);
      return Unit_getInstance();
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, [$start, $end]);
      return Unit_getInstance();
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_2($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function lineHeight$lambda_0($value) {
    return function ($this$styleModifier) {
      lineHeight_0($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_getInstance();
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_getInstance();
    };
  }
  function outline_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      outline($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function position_0(_this__u8e3s4, position) {
    return styleModifier(_this__u8e3s4, position$lambda(position));
  }
  function top_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, top$lambda(value));
  }
  function left_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, left$lambda(value));
  }
  function right_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, right$lambda(value));
  }
  function bottom_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, bottom$lambda(value));
  }
  function position$lambda($position) {
    return function ($this$styleModifier) {
      position($this$styleModifier, $position);
      return Unit_getInstance();
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      top($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      left($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      right($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      bottom($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function fontSize_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function textDecorationLine_0(_this__u8e3s4, textDecorationLine) {
    return styleModifier(_this__u8e3s4, textDecorationLine$lambda(textDecorationLine));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function fontSize_2(_this__u8e3s4, fontSize) {
    return styleModifier(_this__u8e3s4, fontSize$lambda_0(fontSize));
  }
  function fontWeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function textAlign_0(_this__u8e3s4, textAlign) {
    return styleModifier(_this__u8e3s4, textAlign$lambda(textAlign));
  }
  function whiteSpace_0(_this__u8e3s4, whiteSpace) {
    return styleModifier(_this__u8e3s4, whiteSpace$lambda(whiteSpace));
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_getInstance();
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_getInstance();
    };
  }
  function fontSize$lambda_0($fontSize) {
    return function ($this$styleModifier) {
      fontSize_0($this$styleModifier, $fontSize);
      return Unit_getInstance();
    };
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_getInstance();
    };
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_getInstance();
    };
  }
  function transition_0(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda(transitions));
  }
  function transition$lambda($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(KobwebComposeStyleSheet).r1v = style;
  protoOf(KobwebComposeStyleSheet).t1v = style_0;
  protoOf(KobwebComposeStyleSheet).c1w = invoke;
  protoOf(KobwebComposeStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(KobwebComposeStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(KobwebComposeStyleSheet).u1v = get_hover;
  protoOf(ChainedModifier).w25 = then;
  protoOf(StyleModifier).v25 = fold;
  protoOf(StyleModifier).w25 = then;
  protoOf(AttrsModifier).v25 = fold;
  protoOf(AttrsModifier).w25 = then;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = Column$composable;
  _.$_$.c = Row$composable;
  _.$_$.d = lightened;
  _.$_$.e = alignSelf_1;
  _.$_$.f = ariaDisabled;
  _.$_$.g = backdropFilter_0;
  _.$_$.h = backgroundColor_0;
  _.$_$.i = background_0;
  _.$_$.j = borderRadius_2;
  _.$_$.k = borderRadius_1;
  _.$_$.l = borderStyle_0;
  _.$_$.m = borderTop_0;
  _.$_$.n = borderWidth_0;
  _.$_$.o = bottom_0;
  _.$_$.p = boxShadow_0;
  _.$_$.q = classNames;
  _.$_$.r = color_0;
  _.$_$.s = cursor_0;
  _.$_$.t = display_0;
  _.$_$.u = fillMaxSize;
  _.$_$.v = fillMaxWidth;
  _.$_$.w = flexBasis_0;
  _.$_$.x = flexGrow_0;
  _.$_$.y = flexShrink_0;
  _.$_$.z = flexWrap_0;
  _.$_$.a1 = fontFamily_0;
  _.$_$.b1 = fontSize_2;
  _.$_$.c1 = fontSize_1;
  _.$_$.d1 = fontWeight_0;
  _.$_$.e1 = gridRowEnd_0;
  _.$_$.f1 = gridRowStart_0;
  _.$_$.g1 = gridTemplateRows_0;
  _.$_$.h1 = height_0;
  _.$_$.i1 = id;
  _.$_$.j1 = left_0;
  _.$_$.k1 = lineHeight_1;
  _.$_$.l1 = lineHeight_2;
  _.$_$.m1 = margin_0;
  _.$_$.n1 = margin_2;
  _.$_$.o1 = margin_3;
  _.$_$.p1 = margin_1;
  _.$_$.q1 = maxWidth_0;
  _.$_$.r1 = minHeight_0;
  _.$_$.s1 = objectFit_0;
  _.$_$.t1 = onClick;
  _.$_$.u1 = opacity_0;
  _.$_$.v1 = outline_0;
  _.$_$.w1 = paddingInline_0;
  _.$_$.x1 = padding_1;
  _.$_$.y1 = padding_3;
  _.$_$.z1 = padding_2;
  _.$_$.a2 = padding_0;
  _.$_$.b2 = position_0;
  _.$_$.c2 = right_0;
  _.$_$.d2 = textAlign_0;
  _.$_$.e2 = textDecorationLine_0;
  _.$_$.f2 = top_0;
  _.$_$.g2 = transition_0;
  _.$_$.h2 = userSelect_0;
  _.$_$.i2 = whiteSpace_0;
  _.$_$.j2 = width_0;
  _.$_$.k2 = Modifier;
  _.$_$.l2 = StyleModifier;
  _.$_$.m2 = styleModifier;
  _.$_$.n2 = toAttrs;
  _.$_$.o2 = toStyles;
  _.$_$.p2 = SpaceBetween_getInstance;
  _.$_$.q2 = Start_getInstance;
  _.$_$.r2 = KobwebComposeStyleSheet_getInstance;
  _.$_$.s2 = Colors_getInstance;
  _.$_$.t2 = CenterVertically_getInstance;
  _.$_$.u2 = Center_getInstance_0;
  _.$_$.v2 = Start_getInstance_0;
  _.$_$.w2 = Companion_getInstance_7;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-kobweb-compose.js.map
