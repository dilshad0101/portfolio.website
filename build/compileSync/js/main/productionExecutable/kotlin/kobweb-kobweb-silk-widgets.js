(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './html-html-core.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-kobweb-compose.js', './kobweb-compose-html-ext.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./html-html-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-kobweb-compose.js'), require('./kobweb-compose-html-ext.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['kobweb-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'kobweb-kobweb-compose' was not found. Please, check whether 'kobweb-kobweb-compose' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['kobweb-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'kobweb-compose-html-ext' was not found. Please, check whether 'kobweb-compose-html-ext' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    root['kobweb-kobweb-silk-widgets'] = factory(typeof this['kobweb-kobweb-silk-widgets'] === 'undefined' ? {} : this['kobweb-kobweb-silk-widgets'], this['html-html-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-kobweb-compose'], this['kobweb-compose-html-ext'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var protoOf = kotlin_kotlin.$_$.p5;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var objectMeta = kotlin_kotlin.$_$.o5;
  var VOID = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.q5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var equals = kotlin_kotlin.$_$.y4;
  var hashCode = kotlin_kotlin.$_$.d5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var classMeta = kotlin_kotlin.$_$.v4;
  var mapCapacity = kotlin_kotlin.$_$.j3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var borderWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var KProperty0 = kotlin_kotlin.$_$.y5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.b5;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var coerceAtLeast = kotlin_kotlin.$_$.s5;
  var until = kotlin_kotlin.$_$.w5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.m2;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var to = kotlin_kotlin.$_$.q7;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var isObject = kotlin_kotlin.$_$.j5;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var borderStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i1;
  var charArrayOf = kotlin_kotlin.$_$.s4;
  var split = kotlin_kotlin.$_$.o6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var charSequenceLength = kotlin_kotlin.$_$.u4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var first = kotlin_kotlin.$_$.w2;
  var Modifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var isInterface = kotlin_kotlin.$_$.i5;
  var toString = kotlin_kotlin.$_$.r5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var plus = kotlin_kotlin.$_$.n3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var removeSuffix = kotlin_kotlin.$_$.n6;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var getStringHashCode = kotlin_kotlin.$_$.c5;
  var StyleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var listOf = kotlin_kotlin.$_$.i3;
  var copyToArray = kotlin_kotlin.$_$.q2;
  var getValue = kotlin_kotlin.$_$.z2;
  var toList = kotlin_kotlin.$_$.t3;
  var removePrefix = kotlin_kotlin.$_$.m6;
  var joinToString = kotlin_kotlin.$_$.b3;
  var listOf_0 = kotlin_kotlin.$_$.h3;
  var emptyList = kotlin_kotlin.$_$.r2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var Enum = kotlin_kotlin.$_$.w6;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var endsWith = kotlin_kotlin.$_$.h6;
  var startsWith = kotlin_kotlin.$_$.q6;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var trimIndent = kotlin_kotlin.$_$.t6;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.j7;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var lazy = kotlin_kotlin.$_$.i7;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var interfaceMeta = kotlin_kotlin.$_$.f5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(Empty, 'Empty', objectMeta, ComponentVariant);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  function get(colorMode) {
    var tmp0_subject = colorMode;
    var tmp0 = tmp0_subject.f4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = this.h2e();
        break;
      case 1:
        tmp = this.i2e();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(SilkPalettes, 'SilkPalettes', interfaceMeta);
  setMetadataFor(MutableSilkPalettes, 'MutableSilkPalettes', classMeta, VOID, [SilkPalettes]);
  setMetadataFor(Link, 'Link', classMeta);
  setMetadataFor(Button, 'Button', classMeta);
  setMetadataFor(Tooltip, 'Tooltip', classMeta);
  setMetadataFor(MutableSilkPalette, 'MutableSilkPalette', classMeta);
  //endregion
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet.call(this);
    this.i27_1 = 0;
  }
  protoOf(SilkStyleSheet).s1v = function (selector, cssRule) {
    return this.r1v(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function KeyframesBuilder(colorMode) {
    this.j27_1 = colorMode;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.k27_1 = tmp$ret$0;
    this.l27_1 = 8;
  }
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(get_comparableKeyframeStyles(this), get_comparableKeyframeStyles(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(get_comparableKeyframeStyles(this));
  };
  protoOf(KeyframesBuilder).m27 = function (stylesheet, keyframesName) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.k27_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.f());
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp1_map.m1().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = item.l1();
      var keyframe = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = item.o1();
      var create = tmp$ret$2;
      var styles = toStyles(create());
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      tmp0_mapTo.a(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var keyframeRules = tmp$ret$5;
    stylesheet.a1u(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function get_comparableKeyframeStyles(_this__u8e3s4) {
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp2_mapValues = _this__u8e3s4.k27_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp2_mapValues.f()));
    var tmp$ret$4;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp2_mapValues.m1();
    var tmp0_iterator = tmp0_associateByTo.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$0 = element.l1();
      var tmp = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.o1();
      var create = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(create())(tmp0_apply);
      tmp$ret$2 = tmp0_apply;
      tmp$ret$3 = tmp$ret$2;
      tmp1_mapValuesTo.v2(tmp, tmp$ret$3);
    }
    tmp$ret$4 = tmp1_mapValuesTo;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    return tmp$ret$6;
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle$delegate.p27(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    var palette = toSilkPalette($this$ComponentStyle.t27_1);
    var buttonColors = palette.v27();
    $this$ComponentStyle.z27(ButtonStyle$delegate$lambda$lambda(palette, buttonColors));
    var tmp = get_hover_0($this$ComponentStyle).g28(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.k28(ButtonStyle$delegate$lambda$lambda_0(buttonColors));
    var tmp_0 = get_focusVisible($this$ComponentStyle).g28(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.k28(ButtonStyle$delegate$lambda$lambda_1(buttonColors));
    var tmp_1 = get_active($this$ComponentStyle).g28(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.k28(ButtonStyle$delegate$lambda$lambda_2(buttonColors));
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda($palette, $buttonColors) {
    return function () {
      return userSelect(outline(borderWidth(borderRadius(padding(fontSize(lineHeight(backgroundColor(color(Companion_getInstance(), $palette.l28()), $buttonColors.m28()), 1.2), get_px(16)), get_px(8), get_px(16)), get_px(4)), get_px(0)), get_px(0)), Companion_getInstance_0().n23());
    };
  }
  function ButtonStyle$delegate$lambda$lambda_0($buttonColors) {
    return function () {
      return cursor(backgroundColor(Companion_getInstance(), $buttonColors.u1v()), Companion_getInstance_1().a22());
    };
  }
  function ButtonStyle$delegate$lambda$lambda_1($buttonColors) {
    return function () {
      return boxShadow(Companion_getInstance(), VOID, VOID, VOID, get_px(3), $buttonColors.n28());
    };
  }
  function ButtonStyle$delegate$lambda$lambda_2($buttonColors) {
    return function () {
      return backgroundColor(Companion_getInstance(), $buttonColors.o28());
    };
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (properties_initialized_Button_kt_yov184) {
    } else {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle$delegate = ComponentStyle_0(VOID, 'silk-', ButtonStyle$delegate$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle$delegate.p27(null, CanvasStyle$factory());
  }
  var CanvasStyle$delegate;
  function CanvasStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_getInstance();
  }
  function CanvasStyle$factory() {
    return getPropertyCallableRef('CanvasStyle', 0, KProperty0, function () {
      return get_CanvasStyle();
    }, null);
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (properties_initialized_Canvas_kt_i28dei) {
    } else {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle$delegate = ComponentStyle_0(VOID, 'silk-', CanvasStyle$delegate$lambda);
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle$delegate.p27(null, ImageStyle$factory());
  }
  var ImageStyle$delegate;
  var FitWidthImageVariant;
  function ImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_getInstance();
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_getInstance(), get_percent(100)), Companion_getInstance_2().g23());
  }
  function ImageStyle$factory() {
    return getPropertyCallableRef('ImageStyle', 0, KProperty0, function () {
      return get_ImageStyle();
    }, null);
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (properties_initialized_Image_kt_7kjzpx) {
    } else {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle$delegate = ComponentStyle_0(VOID, 'silk-', ImageStyle$delegate$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant = addVariantBase(tmp, 'fit', VOID, FitWidthImageVariant$lambda);
    }
  }
  function get_DividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return DividerStyle$delegate.p27(null, DividerStyle$factory());
  }
  var DividerStyle$delegate;
  function DividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp0__get_Solid__yuxops = Companion_getInstance_3();
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
    return fillMaxWidth(borderTop(tmp, tmp_0, tmp$ret$3, toSilkPalette($this$base.p28_1).r28()), get_percent(90));
  }
  function DividerStyle$factory() {
    return getPropertyCallableRef('DividerStyle', 0, KProperty0, function () {
      return get_DividerStyle();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (properties_initialized_Divider_kt_k1kxcn) {
    } else {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_getInstance_9();
      DividerStyle$delegate = base(tmp, VOID, 'silk-', DividerStyle$delegate$lambda);
    }
  }
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle$delegate.p27(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  var SimpleGridColumnVariants;
  function SimpleGridStyle$delegate$lambda($this$base) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    var tmp0__get_Grid__7tebaj = Companion_getInstance_4();
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
    return display(tmp, tmp$ret$3);
  }
  function SimpleGridColumnVariants$lambda($numColumns) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, 'repeat(' + $numColumns + ', 1fr)');
      return Unit_getInstance();
    };
  }
  function SimpleGridColumnVariants$lambda$lambda($gridModifier) {
    return function () {
      return $gridModifier;
    };
  }
  function SimpleGridColumnVariants$lambda$lambda_0($gridModifier) {
    return function () {
      return $gridModifier;
    };
  }
  function SimpleGridColumnVariants$lambda_0($isBaseVariant, $element, $gridModifier) {
    return function ($this$addVariant) {
      var tmp;
      if ($isBaseVariant) {
        $this$addVariant.z27(SimpleGridColumnVariants$lambda$lambda($gridModifier));
        tmp = Unit_getInstance();
      } else {
        $this$addVariant.s28($element, SimpleGridColumnVariants$lambda$lambda_0($gridModifier));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SimpleGridStyle$factory() {
    return getPropertyCallableRef('SimpleGridStyle', 0, KProperty0, function () {
      return get_SimpleGridStyle();
    }, null);
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (properties_initialized_SimpleGrid_kt_fum19i) {
    } else {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      var tmp = Companion_getInstance_9();
      SimpleGridStyle$delegate = base(tmp, VOID, 'silk-', SimpleGridStyle$delegate$lambda);
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridColumnVariants.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.associateWith' call
      var tmp0_associateWith = values();
      var result = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(tmp0_associateWith.length), 16));
      var tmp$ret$6;
      // Inline function 'kotlin.collections.associateWithTo' call
      var indexedObject = tmp0_associateWith;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$5;
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridColumnVariants.<anonymous>.<anonymous>' call
        var isBaseVariant = element.equals(Breakpoint_ZERO_getInstance());
        var tmp_0;
        if (isBaseVariant) {
          tmp_0 = 'base';
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.lowercase' call
          var tmp0_lowercase = element.toString();
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_lowercase;
          tmp$ret$1 = tmp$ret$0.toLowerCase();
          tmp_0 = tmp$ret$1;
        }
        var name = tmp_0;
        var tmp$ret$4;
        // Inline function 'kotlin.collections.associate' call
        var tmp3_associate = until(0, 5);
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp3_associate, 10)), 16);
        var tmp$ret$3;
        // Inline function 'kotlin.collections.associateTo' call
        var tmp2_associateTo = LinkedHashMap_init_$Create$_0(capacity);
        var inductionVariable_0 = tmp3_associate.p_1;
        var last_0 = tmp3_associate.q_1;
        if (inductionVariable_0 <= last_0)
          do {
            var element_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$2;
            // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridColumnVariants.<anonymous>.<anonymous>.<anonymous>' call
            var numColumns = element_0 + 1 | 0;
            var tmp_1 = Companion_getInstance();
            var gridModifier = styleModifier(tmp_1, SimpleGridColumnVariants$lambda(numColumns));
            var tmp_2 = get_SimpleGridStyle();
            var tmp_3 = name + '-' + numColumns;
            tmp$ret$2 = to(numColumns, tmp_2.a29(tmp_3, VOID, SimpleGridColumnVariants$lambda_0(isBaseVariant, element, gridModifier)));
            var tmp1_plusAssign = tmp$ret$2;
            tmp2_associateTo.v2(tmp1_plusAssign.r2_1, tmp1_plusAssign.s2_1);
          }
           while (!(element_0 === last_0));
        tmp$ret$3 = tmp2_associateTo;
        tmp$ret$4 = tmp$ret$3;
        var variants = tmp$ret$4;
        tmp$ret$5 = variants;
        result.v2(element, tmp$ret$5);
      }
      tmp$ret$6 = result;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      SimpleGridColumnVariants = tmp$ret$9;
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.p27(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  var AnimatedColorSurfaceVariant;
  function Surface$composable(modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-1300234325);
    sourceInformation($composer_0, 'C(Surface$composable)P(1,3,2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.fv(modifier_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.n12(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.n11()) {
      $composer_0.a12();
      if (($changed & 1) === 0 ? true : $composer_0.e12()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = fillMaxSize(Companion_getInstance());
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.mw();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.b12();
      if (isTraceInProgress()) {
        traceEventStart(-1300234325, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable (Surface.kt:51)');
      }
      var tmp = toModifier$composable(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).w25(modifier_0._v);
      var tmp_0 = ref_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1273996840, true, Surface$composable$lambda(content, $dirty));
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
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().rw_1) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
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
      Box$composable(tmp, null, tmp_0, tmp$ret$6, $composer_0, 3072 | 896 & $dirty, 2);
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
      tmp0_safe_receiver.w16(Surface$composable$lambda_0(modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.z27(SurfaceStyle$delegate$lambda$lambda($this$ComponentStyle));
    return Unit_getInstance();
  }
  function SurfaceStyle$delegate$lambda$lambda($this_ComponentStyle) {
    return function () {
      var palette = toSilkPalette($this_ComponentStyle.t27_1);
      return color(backgroundColor(Companion_getInstance(), palette.b29()), palette.l28());
    };
  }
  function AnimatedColorSurfaceVariant$lambda($this$addVariant) {
    _init_properties_Surface_kt__8o7unv();
    var backgroundColorTransition = transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', get_ms(200))]);
    $this$addVariant.z27(AnimatedColorSurfaceVariant$lambda$lambda(backgroundColorTransition));
    $this$addVariant.c29(' div', AnimatedColorSurfaceVariant$lambda$lambda_0(backgroundColorTransition));
    return Unit_getInstance();
  }
  function AnimatedColorSurfaceVariant$lambda$lambda($backgroundColorTransition) {
    return function () {
      return $backgroundColorTransition;
    };
  }
  function AnimatedColorSurfaceVariant$lambda$lambda_0($backgroundColorTransition) {
    return function () {
      return $backgroundColorTransition;
    };
  }
  function Surface$composable$lambda($content, $$dirty) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(1273996840, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous> (Surface.kt:60)');
        }
        $content($composer_0, 14 & $$dirty >> 9);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.mw();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.s1o(p0, p1, p2);
    };
  }
  function Surface$composable$lambda_0($modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable($modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SurfaceStyle$factory() {
    return getPropertyCallableRef('SurfaceStyle', 0, KProperty0, function () {
      return get_SurfaceStyle();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (properties_initialized_Surface_kt_k203pf) {
    } else {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle$delegate = ComponentStyle_0(VOID, 'silk-', SurfaceStyle$delegate$lambda);
      var tmp = get_SurfaceStyle();
      AnimatedColorSurfaceVariant = tmp.a29('animated-color', VOID, AnimatedColorSurfaceVariant$lambda);
    }
  }
  function get_DisplayIfSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfSmStyle$delegate.p27(null, DisplayIfSmStyle$factory());
  }
  var DisplayIfSmStyle$delegate;
  function get_DisplayIfMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfMdStyle$delegate.p27(null, DisplayIfMdStyle$factory());
  }
  var DisplayIfMdStyle$delegate;
  function get_DisplayIfLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfLgStyle$delegate.p27(null, DisplayIfLgStyle$factory());
  }
  var DisplayIfLgStyle$delegate;
  function get_DisplayIfXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfXlStyle$delegate.p27(null, DisplayIfXlStyle$factory());
  }
  var DisplayIfXlStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.p27(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.p27(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.p27(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.p27(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function displayIf(_this__u8e3s4, breakpoint) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = breakpoint.e4_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-if-' + tmp$ret$1]);
  }
  function DisplayIfSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.d29(tmp, DisplayIfSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.d29(tmp, DisplayIfMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.d29(tmp, DisplayIfLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.d29(tmp, DisplayIfXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.s28(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.s28(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.s28(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.s28(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_4();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfSmStyle$factory() {
    return getPropertyCallableRef('DisplayIfSmStyle', 0, KProperty0, function () {
      return get_DisplayIfSmStyle();
    }, null);
  }
  function DisplayIfMdStyle$factory() {
    return getPropertyCallableRef('DisplayIfMdStyle', 0, KProperty0, function () {
      return get_DisplayIfMdStyle();
    }, null);
  }
  function DisplayIfLgStyle$factory() {
    return getPropertyCallableRef('DisplayIfLgStyle', 0, KProperty0, function () {
      return get_DisplayIfLgStyle();
    }, null);
  }
  function DisplayIfXlStyle$factory() {
    return getPropertyCallableRef('DisplayIfXlStyle', 0, KProperty0, function () {
      return get_DisplayIfXlStyle();
    }, null);
  }
  function DisplayUntilSmStyle$factory() {
    return getPropertyCallableRef('DisplayUntilSmStyle', 0, KProperty0, function () {
      return get_DisplayUntilSmStyle();
    }, null);
  }
  function DisplayUntilMdStyle$factory() {
    return getPropertyCallableRef('DisplayUntilMdStyle', 0, KProperty0, function () {
      return get_DisplayUntilMdStyle();
    }, null);
  }
  function DisplayUntilLgStyle$factory() {
    return getPropertyCallableRef('DisplayUntilLgStyle', 0, KProperty0, function () {
      return get_DisplayUntilLgStyle();
    }, null);
  }
  function DisplayUntilXlStyle$factory() {
    return getPropertyCallableRef('DisplayUntilXlStyle', 0, KProperty0, function () {
      return get_DisplayUntilXlStyle();
    }, null);
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (properties_initialized_BreakpointConditions_kt_kx7tgr) {
    } else {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfSmStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayIfSmStyle$delegate$lambda);
      DisplayIfMdStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayIfMdStyle$delegate$lambda);
      DisplayIfLgStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayIfLgStyle$delegate$lambda);
      DisplayIfXlStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayIfXlStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle_0(VOID, 'silk-', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle$delegate.p27(null, LinkStyle$factory());
  }
  var LinkStyle$delegate;
  var UndecoratedLinkVariant;
  var UncoloredLinkVariant;
  function LinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$ComponentStyle.z27(LinkStyle$delegate$lambda$lambda);
    var linkColors = toSilkPalette($this$ComponentStyle.t27_1).e29();
    var tmp = get_link($this$ComponentStyle);
    tmp.k28(LinkStyle$delegate$lambda$lambda_0(linkColors));
    var tmp_0 = get_visited($this$ComponentStyle);
    tmp_0.k28(LinkStyle$delegate$lambda$lambda_1(linkColors));
    var tmp_1 = get_hover_0($this$ComponentStyle);
    tmp_1.k28(LinkStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function LinkStyle$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().n23());
  }
  function LinkStyle$delegate$lambda$lambda_0($linkColors) {
    return function () {
      return color(Companion_getInstance(), $linkColors.m28());
    };
  }
  function LinkStyle$delegate$lambda$lambda_1($linkColors) {
    return function () {
      return color(Companion_getInstance(), $linkColors.f29());
    };
  }
  function LinkStyle$delegate$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().q23());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover_0($this$addVariant);
    tmp.k28(UndecoratedLinkVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_6().n23());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var textColor = toSilkPalette($this$addVariant.t27_1).l28();
    var tmp = get_link($this$addVariant);
    tmp.k28(UncoloredLinkVariant$lambda$lambda(textColor));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.k28(UncoloredLinkVariant$lambda$lambda_0(textColor));
    return Unit_getInstance();
  }
  function UncoloredLinkVariant$lambda$lambda($textColor) {
    return function () {
      return color(Companion_getInstance(), $textColor);
    };
  }
  function UncoloredLinkVariant$lambda$lambda_0($textColor) {
    return function () {
      return color(Companion_getInstance(), $textColor);
    };
  }
  function LinkStyle$factory() {
    return getPropertyCallableRef('LinkStyle', 0, KProperty0, function () {
      return get_LinkStyle();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (properties_initialized_Link_kt_5x6v44) {
    } else {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle$delegate = ComponentStyle_0(VOID, 'silk-', LinkStyle$delegate$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant = tmp.a29('undecorated', VOID, UndecoratedLinkVariant$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant = tmp_0.a29('uncolored', VOID, UncoloredLinkVariant$lambda);
    }
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle$delegate.p27(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_getInstance(), toSilkPalette($this$base.p28_1).g29());
  }
  function OverlayStyle$factory() {
    return getPropertyCallableRef('OverlayStyle', 0, KProperty0, function () {
      return get_OverlayStyle();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (properties_initialized_Overlay_kt_mvmds0) {
    } else {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_getInstance_9();
      OverlayStyle$delegate = base(tmp, VOID, 'silk-', OverlayStyle$delegate$lambda);
    }
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle$delegate.p27(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('opacity', get_ms(150))]);
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (properties_initialized_Popup_kt_wwy6qs) {
    } else {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_getInstance_9();
      PopupStyle$delegate = base(tmp, VOID, 'silk-', PopupStyle$delegate$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle$delegate.p27(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.p27(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  var TopLeftTooltipArrowVariant;
  var TopTooltipArrowVariant;
  var TopRightTooltipArrowVariant;
  var LeftTopTooltipArrowVariant;
  var LeftTooltipArrowVariant;
  var LeftBottomTooltipArrowVariant;
  var RightTopTooltipArrowVariant;
  var RightTooltipArrowVariant;
  var RightBottomTooltipArrowVariant;
  var BottomLeftTooltipArrowVariant;
  var BottomTooltipArrowVariant;
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var palette = toSilkPalette($this$base.p28_1);
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    var tmp0__get_Relative__qfoucb = Companion_getInstance_7();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'relative';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), palette.h29().b29()), palette.h29().l28()), get_px(6));
  }
  function TooltipArrowStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    var tmp0__get_Absolute__7arore = Companion_getInstance_7();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'absolute';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = borderWidth(position(tmp, tmp$ret$3), get_TRIANGLE_WIDTH());
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp1__get_Solid__u091i9 = Companion_getInstance_3();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'solid';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    return borderStyle(tmp_0, tmp$ret$7);
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin(tmp0_$receiver, tmp2_top, tmp1_right), get_px(0)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin(Companion_getInstance(), VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin(Companion_getInstance(), VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), toSilkPalette($this$addVariantBase.p28_1).l28());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding_0(Companion_getInstance(), get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s1u('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_getInstance();
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s1u('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_getInstance();
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s1u('border-color', 'transparent transparent transparent ' + $color);
      return Unit_getInstance();
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s1u('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_getInstance();
    };
  }
  function TooltipStyle$factory() {
    return getPropertyCallableRef('TooltipStyle', 0, KProperty0, function () {
      return get_TooltipStyle();
    }, null);
  }
  function TooltipArrowStyle$factory() {
    return getPropertyCallableRef('TooltipArrowStyle', 0, KProperty0, function () {
      return get_TooltipArrowStyle();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (properties_initialized_Tooltip_kt_68t07n) {
    } else {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_getInstance_9();
      TooltipStyle$delegate = base(tmp, VOID, 'silk-', TooltipStyle$delegate$lambda);
      var tmp_0 = Companion_getInstance_9();
      TooltipArrowStyle$delegate = base(tmp_0, VOID, 'silk-', TooltipArrowStyle$delegate$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, 'top-left', VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, 'top', VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, 'top-right', VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, 'left-top', VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, 'left', VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, 'left-bottom', VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, 'right-top', VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, 'right', VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, 'right-bottom', VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, 'bottom-left', VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, 'bottom', VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, 'bottom-right', VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_getInstance_9();
      TooltipTextContainerStyle = base_0(tmp_13, 'tooltip-text', VOID, TooltipTextContainerStyle$lambda);
    }
  }
  function notifySelectorName($this, selectorName) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = split(selectorName, charArrayOf([_Char___init__impl__6a9atx(46)]));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.notifySelectorName.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$0 = charSequenceLength(element) > 0;
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    var tmp2_forEach = tmp$ret$3;
    var tmp0_iterator_0 = tmp2_forEach.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.notifySelectorName.<anonymous>' call
      Companion_getInstance_9().i29_1.a(element_0);
    }
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.i29_1 = tmp$ret$0;
  }
  var Companion_instance;
  function Companion_getInstance_9() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.t1v(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    var tmp0_subject = group;
    if (tmp0_subject instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.q29_1);
    else {
      if (tmp0_subject instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.o29_1);
      else {
        if (tmp0_subject instanceof ColorAgnostic)
          handler(selectorBaseName, group.m29_1);
        else {
          if (tmp0_subject instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.j29_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.k29_1);
          }
        }
      }
    }
  }
  function addStylesInto$mergeCssModifiers(_this__u8e3s4, init) {
    var tmp$ret$12;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.groupBy' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    tmp$ret$0 = _this__u8e3s4;
    var tmp1_groupBy = tmp$ret$0.x27_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.groupByTo' call
    var tmp0_groupByTo = LinkedHashMap_init_$Create$();
    var tmp0_iterator = tmp1_groupBy.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
      tmp$ret$1 = element.l1();
      var key = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = tmp0_groupByTo.z1(key);
      var tmp;
      if (value == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        tmp$ret$2 = ArrayList_init_$Create$_0();
        var answer = tmp$ret$2;
        tmp0_groupByTo.v2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp$ret$3 = tmp;
      var list = tmp$ret$3;
      list.a(element);
    }
    tmp$ret$4 = tmp0_groupByTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp4_mapValues = tmp$ret$5;
    var tmp$ret$11;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp3_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp4_mapValues.f()));
    var tmp$ret$10;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp2_associateByTo = tmp4_mapValues.m1();
    var tmp0_iterator_0 = tmp2_associateByTo.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$6 = element_0.l1();
      var tmp_0 = tmp$ret$6;
      var tmp$ret$8;
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$7 = element_0.o1();
        var group = tmp$ret$7;
        var first_0 = first(group);
        if (group.f() === 1) {
          tmp$ret$8 = first_0;
          break $l$block;
        }
        var tmp_1 = Companion_getInstance();
        var mergedModifier = isInterface(tmp_1, Modifier) ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = group.c();
        while (tmp0_iterator_1.d()) {
          var element_1 = tmp0_iterator_1.e();
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.check' call
          var tmp0_check = equals(element_1.t29_1, first_0.t29_1) ? element_1.u29_1 == first_0.u29_1 : false;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$9;
            // Inline function 'kotlin.check.<anonymous>' call
            tmp$ret$9 = 'Check failed.';
            var message = tmp$ret$9;
            throw IllegalStateException_init_$Create$(toString(message));
          }
          mergedModifier = mergedModifier.w25(element_1.s29_1);
        }
        tmp$ret$8 = new CssModifier(mergedModifier, first_0.t29_1, first_0.u29_1);
      }
      tmp3_mapValuesTo.v2(tmp_0, tmp$ret$8);
    }
    tmp$ret$10 = tmp3_mapValuesTo;
    tmp$ret$11 = tmp$ret$10;
    tmp$ret$12 = tmp$ret$11;
    return tmp$ret$12;
  }
  function ComponentStyle$addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h11(-2083936979);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2083936979, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addVariant.<anonymous> (ComponentStyle.kt:370)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.i11();
      return tmp0;
    };
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      var tmp0_forEach = $styles.x21_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.m1().c();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.s1u(element.l1(), element.o1());
      }
      var tmp1_forEach = $styles.y21_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$1 = tmp1_forEach.m1().c();
      var tmp0_iterator_0 = tmp$ret$1;
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.v1u(element_0.l1(), element_0.o1());
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda(this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        notifySelectorName(Companion_getInstance_9(), name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        notifySelectorName(Companion_getInstance_9(), name);
        var tmp$ret$0;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_orEmpty = $cssRuleKey.w29_1;
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var cssRule = name + tmp$ret$0;
        var tmp_0;
        if (!($cssRuleKey.v29_1 == null)) {
          var tmp$ret$1;
          // Inline function 'kotlin.apply' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>.<anonymous>' call
          media($styleSheet, $cssRuleKey.v29_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp$ret$1 = $styleSheet;
          tmp_0 = Unit_getInstance();
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  protoOf(ComponentStyle).y29 = function (name, extraModifiers, init) {
    return this.z29(name, ComponentStyle$addVariant$lambda(extraModifiers), init);
  };
  protoOf(ComponentStyle).a29 = function (name, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return $super === VOID ? this.y29(name, extraModifiers, init) : $super.y29.call(this, name, extraModifiers, init);
  };
  protoOf(ComponentStyle).a2a = function (styleSheet, selectorName) {
    notifySelectorName(Companion_getInstance_9(), selectorName);
    var lightModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this.v28_1);
    var darkModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this.v28_1);
    var tmp = Companion_getInstance_10();
    var tmp0_safe_receiver = lightModifiers.z1(Companion_getInstance_11().b2a_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s29_1;
    var tmp1_safe_receiver = darkModifiers.z1(Companion_getInstance_11().b2a_1);
    var tmp2_safe_receiver = tmp.c2a(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s29_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(this, styleSheet));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = plus(lightModifiers.a2(), darkModifiers.a2());
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      tmp$ret$1 = !element.equals(Companion_getInstance_11().b2a_1);
      if (tmp$ret$1) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    var allCssRuleKeys = tmp$ret$3;
    var tmp3_iterator = allCssRuleKeys.c();
    while (tmp3_iterator.d()) {
      var cssRuleKey = tmp3_iterator.e();
      var tmp_1 = Companion_getInstance_10();
      var tmp4_safe_receiver = lightModifiers.z1(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.s29_1;
      var tmp5_safe_receiver = darkModifiers.z1(cssRuleKey);
      var tmp6_safe_receiver = tmp_1.c2a(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.s29_1);
      if (tmp6_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        withFinalSelectorName(this, selectorName, tmp6_safe_receiver, ComponentStyle$addStylesInto$lambda_0(cssRuleKey, styleSheet, this));
        tmp$ret$4 = Unit_getInstance();
      }
    }
  };
  protoOf(ComponentStyle).d2a = function (styleSheet) {
    this.a2a(styleSheet, '.' + this.x28_1);
  };
  protoOf(ComponentStyle).e2a = function () {
    return new ImmutableComponentStyle(this.x28_1, this.t28_1);
  };
  function ComponentStyle(name, extraModifiers, prefix, init) {
    Companion_getInstance_9();
    prefix = prefix === VOID ? null : prefix;
    this.t28_1 = extraModifiers;
    this.u28_1 = prefix;
    this.v28_1 = init;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(name) > 0;
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      tmp$ret$1 = 'ComponentStyle name must not be empty';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.w28_1 = name;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_orEmpty = this.u28_1;
    var tmp0_elvis_lhs = tmp0_orEmpty;
    tmp$ret$2 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    tmp.x28_1 = tmp$ret$2 + name;
    var tmp_0 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$_0();
    tmp_0.y28_1 = tmp$ret$3;
    this.z28_1 = 8;
  }
  protoOf(ComponentStyle).z29 = function (name, extraModifiers, init) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SimpleComponentVariant(new ComponentStyle(this.x28_1 + '-' + name, extraModifiers, null, init), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addVariant$composable.<anonymous>' call
    this.y28_1.a(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(ComponentStyleProvider).l2a = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.h2a_1, this.i2a_1, this.j2a_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.h2a_1 = extraModifiers;
    this.i2a_1 = prefix;
    this.j2a_1 = init;
    this.k2a_1 = 0;
  }
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle$composable(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.t27_1 = colorMode;
    this.u27_1 = 0;
  }
  function Empty() {
    Empty_instance = this;
    ComponentVariant.call(this);
    this.o2a_1 = 0;
  }
  protoOf(Empty).p2a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(1324185618);
    if (isTraceInProgress()) {
      traceEventStart(1324185618, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentVariant.Empty.toModifier$composable (ComponentStyle.kt:581)');
    }
    var tmp0 = Companion_getInstance();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function ComponentVariant() {
    this.q2a_1 = 0;
  }
  protoOf(ComponentVariant).r2a = function (next) {
    return next === Empty_getInstance() ? this : this === Empty_getInstance() ? next : new CompositeComponentVariant(this, next);
  };
  function addVariantBase(_this__u8e3s4, name, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return _this__u8e3s4.y29(name, extraModifiers, addVariantBase$lambda(init));
  }
  function ComponentBaseModifier(colorMode) {
    this.p28_1 = colorMode;
    this.q28_1 = 0;
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base$composable(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function base_0(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return base$composable_0(_this__u8e3s4, className, base$lambda_0(extraModifiers), init);
  }
  function Light(styles) {
    this.q29_1 = styles;
    this.r29_1 = 0;
  }
  function Dark(styles) {
    this.o29_1 = styles;
    this.p29_1 = 0;
  }
  function ColorAgnostic(styles) {
    this.m29_1 = styles;
    this.n29_1 = 0;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.j29_1 = lightStyles;
    this.k29_1 = darkStyles;
    this.l29_1 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).c2a = function (lightModifiers, darkModifiers) {
    var tmp0_safe_receiver = lightModifiers;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(tmp0_safe_receiver)(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var lightStyles = tmp;
    var tmp1_safe_receiver = darkModifiers;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(tmp1_safe_receiver)(tmp0_apply_0);
      tmp$ret$3 = tmp0_apply_0;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp_0 = tmp$ret$5;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    var tmp0_check = !(lightStyles == null) ? !(darkStyles == null) : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$6;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$6 = 'Check failed.';
      var message = tmp$ret$6;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_10() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.b2a_1 = new Key(null, null);
  }
  var Companion_instance_1;
  function Companion_getInstance_11() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Key(mediaQuery, suffix) {
    this.v29_1 = mediaQuery;
    this.w29_1 = suffix;
    this.x29_1 = 0;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.v29_1 + ', suffix=' + this.w29_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.v29_1 == null ? 0 : getStringHashCode(this.v29_1);
    result = imul(result, 31) + (this.w29_1 == null ? 0 : getStringHashCode(this.w29_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.v29_1 == tmp0_other_with_cast.v29_1))
      return false;
    if (!(this.w29_1 == tmp0_other_with_cast.w29_1))
      return false;
    return true;
  };
  function CssModifier$lambda(_anonymous_parameter_0__qggqh8, currModifier) {
    if (!(currModifier instanceof StyleModifier)) {
      throw IllegalArgumentException_init_$Create$('You are attempting to construct a ComponentStyle or ComponentVariant with a non-style Modifier\n(e.g. `id`, `tabIndex`, etc.). Due to technical limitations in html / css, only `StyleModifier`s\nare allowed in this context.\n\nUnfortunately, at the point this exception is getting thrown, information about the offending\nattribute is not known. Please audit your project\'s ComponentStyle and ComponentVariant\nModifiers, perhaps commenting out recently added ones, until this exception goes away.\n\nOnce the offending modifier is identified, to fix this, you can either call attribute modifiers\ndirectly on the Modifier you pass into some widget, or you can extend this Style or Variant with\nextra modifiers by passing them in the `extraModifier` parameter:\n\n```\n// Approach #1: Call Attribute Modifiers later\n\nval ExampleStyle = ComponentStyle("ex") {\n   ...\n}\n\nExampleWidget(ExampleStyle.toModifier().tabIndex(0))\n\n// Approach #2: Use `extraModifiers`:\n\nval ExampleStyle = ComponentStyle("ex", extraModifiers = Modifier.tabIndex(0)) {\n   ...\n}\n\nExampleWidget(ExampleStyle.toModifier())\n```');
    }
    return Unit_getInstance();
  }
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_11();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.s29_1 = modifier;
    this.t29_1 = mediaQuery;
    this.u29_1 = suffix;
    this.s29_1.v25(Unit_getInstance(), CssModifier$lambda);
  }
  protoOf(CssModifier).l1 = function () {
    var tmp0_safe_receiver = this.t29_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.u29_1);
  };
  function ImmutableComponentStyle(name, extraModifiers) {
    this.s2a_1 = name;
    this.t2a_1 = extraModifiers;
    this.u2a_1 = 0;
  }
  protoOf(ImmutableComponentStyle).p2a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(512683125);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(512683125, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable (ComponentStyle.kt:201)');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = listOf([this.s2a_1, suffixedWith(this.s2a_1, getColorMode$composable($composer_0, 0))]);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_filter.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable.<anonymous>' call
      var tmp0_return = Companion_getInstance_9().i29_1.i(element);
      tmp$ret$0 = tmp0_return;
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var classNames_0 = tmp$ret$2;
    var tmp;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !classNames_0.h();
    if (tmp$ret$3) {
      var tmp_0 = Companion_getInstance();
      var tmp$ret$4;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$4 = copyToArray(classNames_0);
      tmp = classNames(tmp_0, tmp$ret$4.slice());
    } else {
      tmp = Companion_getInstance();
    }
    var tmp0 = tmp.w25(this.t2a_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  };
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.w2a_1 = style;
    this.x2a_1 = baseStyle;
    this.y2a_1 = 0;
  }
  protoOf(SimpleComponentVariant).d2a = function (styleSheet) {
    this.w2a_1.a2a(styleSheet, '.' + this.x2a_1.x28_1 + '.' + this.w2a_1.x28_1);
  };
  protoOf(SimpleComponentVariant).e2a = function () {
    return this.w2a_1.e2a();
  };
  protoOf(SimpleComponentVariant).p2a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(-1695500569);
    if (isTraceInProgress()) {
      traceEventStart(-1695500569, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier$composable (ComponentStyle.kt:636)');
    }
    var tmp0 = toModifier$composable(this.w2a_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  };
  function ComponentStyle$composable(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function StyleModifiers() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.w27_1 = tmp$ret$0;
    this.x27_1 = this.w27_1;
    this.y27_1 = 0;
  }
  protoOf(StyleModifiers).z27 = function (createModifier) {
    this.w27_1.a(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).m2a = function (mediaQuery, suffix, createModifier) {
    this.w27_1.a(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).c29 = function (suffix, createModifier) {
    this.w27_1.a(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).d29 = function (mediaQuery, createModifier) {
    this.w27_1.a(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).s28 = function (_this__u8e3s4, createModifier) {
    this.d29(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.a2b_1 = head;
    this.b2b_1 = tail;
  }
  protoOf(CompositeComponentVariant).p2a = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(-690240964);
    if (isTraceInProgress()) {
      traceEventStart(-690240964, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier$composable (ComponentStyle.kt:647)');
    }
    var tmp0 = this.a2b_1.p2a($composer_0, 0).w25(this.b2b_1.p2a($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  };
  function base$composable(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$composable$lambda(init));
  }
  function base$composable_0(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle(className, extraModifiers, VOID, base$composable$lambda_0(init));
  }
  function toModifier$composable(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(-1254167608);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1254167608, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier$composable (ComponentStyle.kt:659)');
    }
    var tmp0 = getValue(get_SilkTheme().g2b_1, _this__u8e3s4.x28_1).p2a($composer_0, 0).w25(combine$composable(toList(variants), $composer_0, 0).p2a($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  }
  function combine$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(1446826835);
    sourceInformation($composer_0, 'C(combine$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1446826835, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine$composable (ComponentStyle.kt:701)');
    }
    var finalVariant = Empty_getInstance();
    var tmp0_iterator = _this__u8e3s4.c();
    while (tmp0_iterator.d()) {
      var variant = tmp0_iterator.e();
      var tmp = finalVariant;
      var tmp1_elvis_lhs = variant;
      finalVariant = tmp.r2a(tmp1_elvis_lhs == null ? Empty_getInstance() : tmp1_elvis_lhs);
    }
    var tmp0 = finalVariant;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  }
  protoOf(ComponentVariantProvider).l2a = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = removeSuffix(removePrefix(withoutSuffix, this.k2b_1.w28_1 + '-'), '-' + this.k2b_1.w28_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(tmp0_takeIf) > 0;
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_elvis_lhs = tmp$ret$2;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.k2b_1.z29(name, this.l2b_1, this.m2b_1);
  };
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.k2b_1 = style;
    this.l2b_1 = extraModifiers;
    this.m2b_1 = init;
    this.n2b_1 = 8;
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return addVariant$composable(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function addVariant$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h11(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:508)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.i11();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_addVariant, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_addVariant.t27_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function addVariantBase$lambda($init) {
    return function ($this$addVariant) {
      $this$addVariant.z27(addVariantBase$lambda$lambda($this$addVariant, $init));
      return Unit_getInstance();
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h11(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:514)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.i11();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h11(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:235)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.i11();
      return tmp0;
    };
  }
  function base$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.t27_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.z27(base$composable$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function base$composable$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.t27_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.z27(base$composable$lambda$lambda_0($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h11(-1248093650);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1248093650, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentStyle.kt:548)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.i11();
      return tmp0;
    };
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).o2b = function (target, psuedoClass, params) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = params;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      tmp$ret$0 = element.p2b();
      var tmp0_safe_receiver = tmp$ret$0;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.a(tmp0_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
    }
    tmp$ret$2 = tmp0_mapNotNullTo;
    tmp$ret$3 = tmp$ret$2;
    return new OfPseudoClass(target, psuedoClass + '(' + joinToString(tmp$ret$3) + ')');
  };
  var Companion_instance_2;
  function Companion_getInstance_12() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
    this.t2b_1 = 0;
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.z2b_1 = attributeSelector;
    this.a2c_1 = 0;
  }
  protoOf(OfAttributeSelector).p2b = function () {
    return this.b2c(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.e28_1 = pseudoClass;
    this.f28_1 = 0;
  }
  protoOf(OfPseudoClass).p2b = function () {
    return this.b2c(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).g28 = function (other) {
    return new CompositeOpen(this.h28_1, null, emptyList(), listOf([this, other]));
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.g2c_1 = mediaQuery;
    this.h2c_1 = attributeSelectors;
    this.i2c_1 = pseudoClasses;
    this.j2c_1 = 0;
  }
  protoOf(CompositeOpen).u2b = function () {
    return this.g2c_1;
  };
  protoOf(CompositeOpen).p2b = function () {
    return this.b2c(this.h2c_1, this.i2c_1, null);
  };
  function CssRule(target) {
    Companion_getInstance_12();
    this.h28_1 = target;
    this.i28_1 = null;
    this.j28_1 = 0;
  }
  protoOf(CssRule).k28 = function (createModifier) {
    this.h28_1.m2a(this.u2b(), this.p2b(), createModifier);
  };
  protoOf(CssRule).u2b = function () {
    return this.i28_1;
  };
  protoOf(CssRule).p2b = function () {
    return null;
  };
  protoOf(CssRule).b2c = function (attributeSelectors, pseudoClasses, pseudoElement) {
    var tmp$ret$4;
    // Inline function 'kotlin.takeIf' call
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      tmp0_apply.va('[' + element.z2b_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      tmp0_apply.va(':' + element_0.e28_1);
    }
    if (!(pseudoElement == null)) {
      tmp0_apply.va('::' + pseudoElement.o2c_1);
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    var tmp1_takeIf = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$3;
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$2 = charSequenceLength(tmp1_takeIf) > 0;
    tmp$ret$3 = tmp$ret$2;
    if (tmp$ret$3) {
      tmp = tmp1_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  };
  function not(_this__u8e3s4, params) {
    return Companion_getInstance_12().o2b(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_getInstance();
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.q2c_1 = sm;
    this.r2c_1 = md;
    this.s2c_1 = lg;
    this.t2c_1 = xl;
    this.u2c_1 = 0;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.q2c_1 + ', md=' + this.r2c_1 + ', lg=' + this.s2c_1 + ', xl=' + this.t2c_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.q2c_1);
    result = imul(result, 31) + hashCode(this.r2c_1) | 0;
    result = imul(result, 31) + hashCode(this.s2c_1) | 0;
    result = imul(result, 31) + hashCode(this.t2c_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.q2c_1, tmp0_other_with_cast.q2c_1))
      return false;
    if (!equals(this.r2c_1, tmp0_other_with_cast.r2c_1))
      return false;
    if (!equals(this.s2c_1, tmp0_other_with_cast.s2c_1))
      return false;
    if (!equals(this.t2c_1, tmp0_other_with_cast.t2c_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    sm = sm === VOID ? get_cssRem(0) : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
    this.x2c_1 = 0;
  }
  function BreakpointUnitValue(width) {
    this.y2c_1 = width;
    this.z2c_1 = 0;
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.p27(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function get_ariaDisabled(_this__u8e3s4) {
    _init_properties_CommonStyles_kt__a7wisz();
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function DisabledStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_getInstance(), 0.5), Companion_getInstance_1().b22());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', get_ms(200))]);
  }
  function SmoothColorStyle$factory() {
    return getPropertyCallableRef('SmoothColorStyle', 0, KProperty0, function () {
      return get_SmoothColorStyle();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (properties_initialized_CommonStyles_kt_zd2b1t) {
    } else {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_getInstance_9();
      var tmp_0 = ariaDisabled(Companion_getInstance());
      DisabledStyle = base_0(tmp, 'silk-disabled', tmp_0, DisabledStyle$lambda);
      var tmp_1 = Companion_getInstance_9();
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk-', SmoothColorStyle$delegate$lambda);
    }
  }
  function get_DivTextStyle() {
    _init_properties_DivText_kt__50pfx0();
    return DivTextStyle$delegate.p27(null, DivTextStyle$factory());
  }
  var DivTextStyle$delegate;
  function DivTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_DivText_kt__50pfx0();
    return Unit_getInstance();
  }
  function DivTextStyle$factory() {
    return getPropertyCallableRef('DivTextStyle', 0, KProperty0, function () {
      return get_DivTextStyle();
    }, null);
  }
  var properties_initialized_DivText_kt_3artse;
  function _init_properties_DivText_kt__50pfx0() {
    if (properties_initialized_DivText_kt_3artse) {
    } else {
      properties_initialized_DivText_kt_3artse = true;
      DivTextStyle$delegate = ComponentStyle_0(VOID, 'silk-', DivTextStyle$delegate$lambda);
    }
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.p27(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  var TextStyle;
  function SpanText$composable(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(1205558567);
    sourceInformation($composer_0, 'C(SpanText$composable)P(2!1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.n11()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1205558567, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable (SpanText.kt:40)');
      }
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp0_thenIf = toModifier$composable(get_SpanTextStyle(), [variant_0._v], $composer_0, 0).w25(modifier_0._v);
      var tmp1_thenIf = startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith(text, _Char___init__impl__6a9atx(32));
      var tmp;
      if (tmp1_thenIf) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
        var tmp0_return = whiteSpace(Companion_getInstance(), Companion_getInstance_8().v23());
        tmp$ret$0 = tmp0_return;
        tmp = tmp$ret$0;
      } else {
        tmp = Companion_getInstance();
      }
      tmp$ret$1 = tmp0_thenIf.w25(tmp);
      var finalModifier = tmp$ret$1;
      var tmp_0 = toAttrs(finalModifier);
      var tmp$ret$8;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -539273278, true, SpanText$composable$lambda(ref_0, $dirty, text));
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.h11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.fv(dispatchReceiver);
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().rw_1) {
        var tmp$ret$2;
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>.<anonymous>' call
        tmp$ret$2 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        var value = tmp$ret$2;
        tmp1_cache.k13(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$3 = tmp_2;
      tmp$ret$4 = tmp$ret$3;
      var tmp_3 = tmp$ret$4;
      tmp$ret$5 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0 = tmp$ret$5;
      $composer_1.i11();
      tmp$ret$6 = tmp0;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      Span$composable(tmp_0, tmp$ret$8, $composer_0, 48, 0);
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
      tmp0_safe_receiver.w16(SpanText$composable$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_getInstance();
  }
  function SpanText$composable$lambda($ref, $$dirty, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Span) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(-539273278, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous> (SpanText.kt:53)');
        }
        registerRefScope$composable($this$Span, $ref._v, $composer_0, 14 & $dirty | 112 & $$dirty >> 6);
        Text$composable($text, $composer_0, 14 & $$dirty);
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
  function SpanText$composable$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText$composable($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SpanTextStyle$factory() {
    return getPropertyCallableRef('SpanTextStyle', 0, KProperty0, function () {
      return get_SpanTextStyle();
    }, null);
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (properties_initialized_SpanText_kt_kccny1) {
    } else {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle$delegate = ComponentStyle_0(VOID, 'silk-', SpanTextStyle$delegate$lambda);
      TextStyle = get_SpanTextStyle();
    }
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.n27_1 = tmp$ret$0;
    this.o27_1 = 8;
  }
  protoOf(CacheByPropertyNameDelegate).p27 = function (thisRef, property) {
    var name = property.callableName;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.n27_1;
    var value = tmp0_getOrPut.z1(name);
    var tmp;
    if (value == null) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      tmp$ret$0 = this.l2a(name);
      var answer = tmp$ret$0;
      tmp0_getOrPut.v2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$composable$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.d2d($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState() {
    this.a2d_1 = -1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.b2d_1 = tmp$ret$0;
    this.c2d_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).d2d = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(2016651302);
    sourceInformation($composer_0, 'C(forEach$composable)');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(2016651302, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.c2d_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.x12();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w16(DeferredComposablesState$forEach$composable$lambda(tmp0_rcvr, render, $changed));
    }
  };
  function renderWithDeferred$composable(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(2081108668);
    sourceInformation($composer_0, 'C(renderWithDeferred$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n11()) {
      if (isTraceInProgress()) {
        traceEventStart(2081108668, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = [get_LocalDeferred().s16(state)];
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$composable$lambda(content, $dirty, state));
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
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().rw_1) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      CompositionLocalProvider$composable(tmp, tmp$ret$6, $composer_0, 48);
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
      tmp0_safe_receiver.w16(renderWithDeferred$composable$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.s1o(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:79)');
    }
    var tmp0_safe_receiver = entry.e2d_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred$composable(tmp0_safe_receiver, $composer_0, 0);
      tmp$ret$0 = Unit_getInstance();
      tmp = Unit_getInstance();
    }
    var tmp0_group = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.g2d_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    throw IllegalStateException_init_$Create$('Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.');
  }
  function renderWithDeferred$composable$lambda($content, $$dirty, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous> (Deferred.kt:77)');
        }
        $content($composer_0, 14 & $$dirty);
        $state.d2d(ComposableSingletons$DeferredKt_getInstance().g2d_1, $composer_0, 70);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.mw();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.l11(p0, p1);
    };
  }
  function renderWithDeferred$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (properties_initialized_Deferred_kt_1ab2bj) {
    } else {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function InitSilkContext(config, stylesheet, theme) {
    this.h2d_1 = config;
    this.i2d_1 = stylesheet;
    this.j2d_1 = theme;
    this.k2d_1 = 8;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    var mutableTheme = new MutableSilkTheme();
    mutableTheme.s2d(get_ButtonStyle());
    mutableTheme.s2d(get_CanvasStyle());
    mutableTheme.s2d(get_DisabledStyle());
    mutableTheme.s2d(get_DividerStyle());
    mutableTheme.s2d(get_DivTextStyle());
    mutableTheme.s2d(get_ImageStyle());
    mutableTheme.s2d(get_LinkStyle());
    mutableTheme.s2d(get_OverlayStyle());
    mutableTheme.s2d(get_PopupStyle());
    mutableTheme.s2d(get_SimpleGridStyle());
    mutableTheme.s2d(get_SmoothColorStyle());
    mutableTheme.s2d(get_SurfaceStyle());
    mutableTheme.s2d(get_SpanTextStyle());
    mutableTheme.s2d(get_TooltipArrowStyle());
    mutableTheme.s2d(get_TooltipStyle());
    mutableTheme.s2d(get_TooltipTextContainerStyle());
    mutableTheme.s2d(get_DisplayIfSmStyle());
    mutableTheme.s2d(get_DisplayIfMdStyle());
    mutableTheme.s2d(get_DisplayIfLgStyle());
    mutableTheme.s2d(get_DisplayIfXlStyle());
    mutableTheme.s2d(get_DisplayUntilSmStyle());
    mutableTheme.s2d(get_DisplayUntilMdStyle());
    mutableTheme.s2d(get_DisplayUntilLgStyle());
    mutableTheme.s2d(get_DisplayUntilXlStyle());
    var config = new MutableSilkConfig();
    additionalInit(new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme));
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().v2d(SilkStyleSheet_getInstance());
    get_SilkTheme().w2d(SilkStyleSheet_getInstance());
  }
  function initSilk$lambda(it) {
    return Unit_getInstance();
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.x2d_1 = ColorMode_LIGHT_getInstance();
    this.y2d_1 = 8;
  }
  protoOf(MutableSilkConfig).z2d = function () {
    return this.x2d_1;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).a2e = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_13() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (properties_initialized_SilkConfig_kt_bfwaef) {
    } else {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function registerBaseStyle(_this__u8e3s4, cssSelector, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    registerBaseStyle$composable(_this__u8e3s4, cssSelector, registerBaseStyle$lambda(extraModifiers), init);
  }
  function registerBaseStyle$composable(_this__u8e3s4, cssSelector, extraModifiers, init) {
    _this__u8e3s4.b2e(cssSelector, extraModifiers, registerBaseStyle$composable$lambda(init));
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.t2d_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.u2d_1 = tmp$ret$1;
  }
  protoOf(SilkStylesheetInstance).v2d = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.t2d_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.a2a(siteStyleSheet, element.x28_1);
    }
    var tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var tmp2_map = this.u2d_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp1_mapTo = ArrayList_init_$Create$(tmp2_map.f());
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp2_map.m1().c();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.d()) {
      var item = tmp0_iterator_0.e();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = item.l1();
      var name = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = item.o1();
      var build = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(tmp0_apply);
      tmp$ret$3 = tmp0_apply;
      var lightBuilder = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(tmp1_apply);
      tmp$ret$4 = tmp1_apply;
      var darkBuilder = tmp$ret$4;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.m27(siteStyleSheet, name);
      } else {
        lightBuilder.m27(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.m27(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      tmp1_mapTo.a(Unit_getInstance());
    }
    tmp$ret$5 = tmp1_mapTo;
    tmp$ret$6 = tmp$ret$5;
  };
  protoOf(SilkStylesheetInstance).b2e = function (cssSelector, extraModifiers, init) {
    this.t2d_1.a(new ComponentStyle(cssSelector, extraModifiers, null, init));
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerBaseStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h11(-192522019);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-192522019, $changed, -1, 'com.varabyte.kobweb.silk.init.registerBaseStyle.<anonymous> (SilkStylesheet.kt:132)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.i11();
      return tmp0;
    };
  }
  function registerBaseStyle$composable$lambda$lambda($init) {
    return function () {
      return $init();
    };
  }
  function registerBaseStyle$composable$lambda($init) {
    return function ($this$registerStyle) {
      $this$registerStyle.z27(registerBaseStyle$composable$lambda$lambda($init));
      return Unit_getInstance();
    };
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function toSilkPalette(_this__u8e3s4) {
    return get_SilkTheme().d2b_1.c2e(_this__u8e3s4);
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.c2b_1 = mutableSilkTheme;
    this.d2b_1 = this.c2b_1.p2d_1;
    this.e2b_1 = this.c2b_1.q2d_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.f2b_1 = tmp$ret$0;
    this.g2b_1 = this.f2b_1;
    this.h2b_1 = 8;
  }
  protoOf(ImmutableSilkTheme).w2d = function (componentStyleSheet) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !(_SilkTheme == null);
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
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.c2b_1.l2d_1.g7();
    var tmp0_iterator = tmp1_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      element.d2a(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.f2b_1;
      var tmp1_set = element.x28_1;
      var tmp2_set = element.e2a();
      tmp0_set.v2(tmp1_set, tmp2_set);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp3_filterIsInstance = this.c2b_1.n2d_1.g7();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp2_filterIsInstanceTo = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp3_filterIsInstance.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      if (element_0 instanceof SimpleComponentVariant) {
        tmp2_filterIsInstanceTo.a(element_0);
      }
    }
    tmp$ret$1 = tmp2_filterIsInstanceTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp4_forEach = tmp$ret$2;
    var tmp0_iterator_1 = tmp4_forEach.c();
    while (tmp0_iterator_1.d()) {
      var element_1 = tmp0_iterator_1.e();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      element_1.d2a(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set_0 = this.f2b_1;
      var tmp1_set_0 = element_1.w2a_1.x28_1;
      var tmp2_set_0 = element_1.e2a();
      tmp0_set_0.v2(tmp1_set_0, tmp2_set_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("You can't access SilkTheme before first calling SilkApp");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function MutableSilkTheme() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.l2d_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0.m2d_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.n2d_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$3 = LinkedHashSet_init_$Create$();
    tmp_2.o2d_1 = tmp$ret$3;
    this.p2d_1 = new MutableSilkPalettes();
    this.q2d_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
    this.r2d_1 = 8;
  }
  protoOf(MutableSilkTheme).s2d = function (style) {
    // Inline function 'kotlin.check' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.l2d_1.z1(style.x28_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    tmp$ret$0 = tmp0_let == null ? true : tmp0_let === style;
    tmp$ret$1 = tmp$ret$0;
    var tmp1_check = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      tmp$ret$2 = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.x28_1 + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.l2d_1;
    var tmp3_set = style.x28_1;
    tmp2_set.v2(tmp3_set, style);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp4_toTypedArray = style.y28_1;
    tmp$ret$3 = copyToArray(tmp4_toTypedArray);
    this.d2e(tmp$ret$3.slice());
  };
  protoOf(MutableSilkTheme).d2e = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$_0();
    var indexedObject = variants;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        tmp0_filterIsInstanceTo.a(element);
      }
    }
    tmp$ret$0 = tmp0_filterIsInstanceTo;
    tmp$ret$1 = tmp$ret$0;
    var tmp1_forEach = tmp$ret$1;
    var tmp0_iterator = tmp1_forEach.c();
    while (tmp0_iterator.d()) {
      var element_0 = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.n2d_1.z1(element_0.w2a_1.x28_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      tmp$ret$2 = tmp0_let == null ? true : tmp0_let === element_0;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_check = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$4;
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        tmp$ret$4 = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.w2a_1.x28_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        var message = tmp$ret$4;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var tmp2_set = this.n2d_1;
      var tmp3_set = element_0.w2a_1.x28_1;
      tmp2_set.v2(tmp3_set, element_0);
    }
  };
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y2c_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.f4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().e2b_1.q2c_1;
        break;
      case 2:
        tmp = get_SilkTheme().e2b_1.r2c_1;
        break;
      case 3:
        tmp = get_SilkTheme().e2b_1.s2c_1;
        break;
      case 4:
        tmp = get_SilkTheme().e2b_1.t2c_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_colorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = colorModeState$factory();
    tmp$ret$0 = colorModeState$delegate.o1();
    return tmp$ret$0;
  }
  var colorModeState$delegate;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_getInstance();
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = colorMode.e4_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    return _this__u8e3s4 + '_' + tmp$ret$1;
  }
  function getColorMode$composable($composer, $changed) {
    _init_properties_ColorMode_kt__lz79sc();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1734567091, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.getColorMode$composable (ColorMode.kt:61)');
    }
    var tmp0 = get_colorModeState().o1();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function colorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_getInstance_13().a2e().z2d());
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function colorModeState$factory() {
    return getPropertyCallableRef('colorModeState', 0, KProperty0, function () {
      return get_colorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (properties_initialized_ColorMode_kt_kbhp7u) {
    } else {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      colorModeState$delegate = lazy(colorModeState$delegate$lambda);
    }
  }
  function MutableSilkPalettes(light, dark) {
    var tmp;
    if (light === VOID) {
      var tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'com.varabyte.kobweb.silk.theme.colors.MutableSilkPalettes.<init>.<anonymous>' call
      var buttonBase = Colors_getInstance().d27().q26(0.2);
      tmp$ret$0 = new MutableSilkPalette(Colors_getInstance().d27(), Colors_getInstance().s22(), new Link(Colors_getInstance().x26(), Colors_getInstance().b27()), new Button(buttonBase, buttonBase.q26(0.2), Colors_getInstance().y26(), buttonBase.q26(0.4)));
      tmp$ret$0_0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$1_0 = Unit_getInstance();
      tmp = tmp$ret$1;
    } else {
      tmp = light;
    }
    light = tmp;
    var tmp_0;
    if (dark === VOID) {
      var tmp$ret$1_1;
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0_1;
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.colors.MutableSilkPalettes.<init>.<anonymous>' call
      var buttonBase_0 = lightened(Colors_getInstance().s22(), 0.2);
      tmp$ret$0_1 = new MutableSilkPalette(Colors_getInstance().s22(), Colors_getInstance().d27(), new Link(Colors_getInstance().z26(), Colors_getInstance().c27()), new Button(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_getInstance().a27(), lightened(buttonBase_0, 0.4)));
      tmp$ret$2 = Unit_getInstance();
      tmp$ret$1_1 = tmp$ret$0_1;
      tmp$ret$3 = Unit_getInstance();
      tmp_0 = tmp$ret$1_1;
    } else {
      tmp_0 = dark;
    }
    dark = tmp_0;
    this.e2e_1 = light;
    this.f2e_1 = dark;
    this.g2e_1 = 8;
  }
  protoOf(MutableSilkPalettes).h2e = function () {
    return this.e2e_1;
  };
  protoOf(MutableSilkPalettes).i2e = function () {
    return this.f2e_1;
  };
  function SilkPalettes() {
  }
  function Link(default_0, visited) {
    this.j2e_1 = default_0;
    this.k2e_1 = visited;
    this.l2e_1 = 8;
  }
  protoOf(Link).m28 = function () {
    return this.j2e_1;
  };
  protoOf(Link).f29 = function () {
    return this.k2e_1;
  };
  function Button(default_0, hover, focus, pressed) {
    this.m2e_1 = default_0;
    this.n2e_1 = hover;
    this.o2e_1 = focus;
    this.p2e_1 = pressed;
    this.q2e_1 = 8;
  }
  protoOf(Button).m28 = function () {
    return this.m2e_1;
  };
  protoOf(Button).u1v = function () {
    return this.n2e_1;
  };
  protoOf(Button).n28 = function () {
    return this.o2e_1;
  };
  protoOf(Button).o28 = function () {
    return this.p2e_1;
  };
  function Tooltip(background, color) {
    this.r2e_1 = background;
    this.s2e_1 = color;
    this.t2e_1 = 8;
  }
  protoOf(Tooltip).b29 = function () {
    return this.r2e_1;
  };
  protoOf(Tooltip).l28 = function () {
    return this.s2e_1;
  };
  function MutableSilkPalette(background, color, link, button, border, overlay, tooltip) {
    border = border === VOID ? color : border;
    overlay = overlay === VOID ? color.u26().t26(VOID, VOID, VOID, 0.5) : overlay;
    tooltip = tooltip === VOID ? new Tooltip(color, background) : tooltip;
    this.u2e_1 = background;
    this.v2e_1 = color;
    this.w2e_1 = link;
    this.x2e_1 = button;
    this.y2e_1 = border;
    this.z2e_1 = overlay;
    this.a2f_1 = tooltip;
    this.b2f_1 = 8;
  }
  protoOf(MutableSilkPalette).b29 = function () {
    return this.u2e_1;
  };
  protoOf(MutableSilkPalette).l28 = function () {
    return this.v2e_1;
  };
  protoOf(MutableSilkPalette).e29 = function () {
    return this.w2e_1;
  };
  protoOf(MutableSilkPalette).v27 = function () {
    return this.x2e_1;
  };
  protoOf(MutableSilkPalette).r28 = function () {
    return this.y2e_1;
  };
  protoOf(MutableSilkPalette).g29 = function () {
    return this.z2e_1;
  };
  protoOf(MutableSilkPalette).h29 = function () {
    return this.a2f_1;
  };
  //region block: post-declaration
  protoOf(SilkStyleSheet).r1v = style;
  protoOf(SilkStyleSheet).t1v = style_0;
  protoOf(SilkStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(SilkStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(SilkStyleSheet).u1v = get_hover;
  protoOf(MutableSilkPalettes).c2e = get;
  //endregion
  //region block: init
  _SilkTheme = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = get_ImageStyle;
  _.$_$.c = displayIf;
  _.$_$.d = Surface$composable;
  _.$_$.e = get_LinkStyle;
  _.$_$.f = get_SmoothColorStyle;
  _.$_$.g = ComponentStyle_0;
  _.$_$.h = addVariant;
  _.$_$.i = base$composable;
  _.$_$.j = base;
  _.$_$.k = get_link;
  _.$_$.l = toModifier$composable;
  _.$_$.m = get_visited;
  _.$_$.n = SpanText$composable;
  _.$_$.o = renderWithDeferred$composable;
  _.$_$.p = initSilk;
  _.$_$.q = registerBaseStyle;
  _.$_$.r = getColorMode$composable;
  _.$_$.s = get_SilkTheme;
  _.$_$.t = toSilkPalette;
  _.$_$.u = Breakpoint_MD_getInstance;
  _.$_$.v = ColorMode_DARK_getInstance;
  _.$_$.w = Companion_getInstance_9;
  _.$_$.x = SilkStyleSheet_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-kobweb-silk-widgets.js.map
