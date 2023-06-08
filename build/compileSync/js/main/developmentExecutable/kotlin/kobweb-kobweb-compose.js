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
  var protoOf = kotlin_kotlin.$_$.y6;
  var interfaceMeta = kotlin_kotlin.$_$.m6;
  var VOID = kotlin_kotlin.$_$.v9;
  var setMetadataFor = kotlin_kotlin.$_$.z6;
  var objectMeta = kotlin_kotlin.$_$.x6;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.b9;
  var isObject = kotlin_kotlin.$_$.q6;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.p8;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var classMeta = kotlin_kotlin.$_$.c6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l9;
  var equals = kotlin_kotlin.$_$.f6;
  var isInterface = kotlin_kotlin.$_$.p6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.e7;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.p7;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.q7;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.m7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.t6;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.u6;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.g7;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.s7;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.h7;
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
  var hashCode = kotlin_kotlin.$_$.k6;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var toString = kotlin_kotlin.$_$.b7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var numberToInt = kotlin_kotlin.$_$.v6;
  var roundToInt = kotlin_kotlin.$_$.d7;
  var getNumberHashCode = kotlin_kotlin.$_$.h6;
  var Long = kotlin_kotlin.$_$.x8;
  var toString_0 = kotlin_kotlin.$_$.m8;
  var coerceIn = kotlin_kotlin.$_$.h7;
  var get_PI = kotlin_kotlin.$_$.c7;
  var alignSelf_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var background = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.v6;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.e8;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.x6;
  var borderWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.y6;
  var borderRadius_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w6;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.c7;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.a8;
  var backdropFilter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var flexShrink = kotlin_org_jetbrains_compose_html_html_core.$_$.i7;
  var flexWrap = kotlin_org_jetbrains_compose_html_html_core.$_$.j7;
  var flexBasis = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var gridRowEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.n7;
  var gridRowStart = kotlin_org_jetbrains_compose_html_html_core.$_$.o7;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.c8;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.w7;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.l8;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.b8;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.v7;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.r7;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.y7;
  var lineHeight_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.u7;
  var maxWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.d8;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.i8;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.t7;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.g8;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.z6;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.l7;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.k7;
  var fontSize_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(End, 'End', objectMeta, VOID, [Horizontal]);
  setMetadataFor(Start, 'Start', objectMeta, VOID, [Horizontal]);
  setMetadataFor(Top, 'Top', objectMeta, VOID, [Vertical]);
  setMetadataFor(Bottom, 'Bottom', objectMeta, VOID, [Vertical]);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(BoxScope, 'BoxScope', classMeta);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(ColumnScope, 'ColumnScope', classMeta);
  setMetadataFor(RowScope, 'RowScope', classMeta);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(Vertical_0, 'Vertical', interfaceMeta);
  setMetadataFor(Horizontal_0, 'Horizontal', interfaceMeta);
  setMetadataFor(Alignment, 'Alignment', interfaceMeta);
  setMetadataFor(TopStart, 'TopStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta, VOID, [Alignment]);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(Center_0, 'Center', objectMeta, VOID, [Alignment]);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(Top_0, 'Top', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(Start_0, 'Start', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(End_0, 'End', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta, VOID, [Alignment]);
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
  setMetadataFor(WebModifier, 'WebModifier', interfaceMeta, VOID, [Element]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [WebModifier]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [WebModifier]);
  setMetadataFor(Colors, 'Colors', objectMeta);
  function darkened$default(byPercent, $super) {
    var tmp;
    if (byPercent === VOID) {
      Companion_getInstance_8();
      tmp = 0.3;
    } else {
      tmp = byPercent;
    }
    byPercent = tmp;
    return $super === VOID ? this.darkened_3k65o0_k$(byPercent) : $super.darkened_3k65o0_k$.call(this, byPercent);
  }
  setMetadataFor(Color, 'Color', interfaceMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, VOID, [Color]);
  setMetadataFor(Hsl, 'Hsl', classMeta, VOID, [Color]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function End() {
    End_instance = this;
    this.$stable_1 = 0;
  }
  var End_instance;
  function End_getInstance() {
    if (End_instance == null)
      new End();
    return End_instance;
  }
  function Start() {
    Start_instance = this;
    this.$stable_1 = 0;
  }
  var Start_instance;
  function Start_getInstance() {
    if (Start_instance == null)
      new Start();
    return Start_instance;
  }
  function Top() {
    Top_instance = this;
    this.$stable_1 = 0;
  }
  var Top_instance;
  function Top_getInstance() {
    if (Top_instance == null)
      new Top();
    return Top_instance;
  }
  function Bottom() {
    Bottom_instance = this;
    this.$stable_1 = 0;
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    if (Bottom_instance == null)
      new Bottom();
    return Bottom_instance;
  }
  function Center() {
    Center_instance = this;
    this.$stable_1 = 0;
  }
  var Center_instance;
  function Center_getInstance() {
    if (Center_instance == null)
      new Center();
    return Center_instance;
  }
  function SpaceEvenly() {
    SpaceEvenly_instance = this;
    this.$stable_1 = 0;
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    if (SpaceEvenly_instance == null)
      new SpaceEvenly();
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
    SpaceBetween_instance = this;
    this.$stable_1 = 0;
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    if (SpaceBetween_instance == null)
      new SpaceBetween();
    return SpaceBetween_instance;
  }
  function SpaceAround() {
    SpaceAround_instance = this;
    this.$stable_1 = 0;
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    if (SpaceAround_instance == null)
      new SpaceAround();
    return SpaceAround_instance;
  }
  function FromStyle() {
    FromStyle_instance = this;
    this.$stable_1 = 0;
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    if (FromStyle_instance == null)
      new FromStyle();
    return FromStyle_instance;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function Arrangement() {
    Arrangement_instance = this;
    this.$stable_1 = 0;
  }
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function Box$composable(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(921036704);
    sourceInformation($composer_0, 'C(Box$composable)P(2,1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        content_0._v = ComposableSingletons$BoxKt_getInstance().lambda_1_r8sbbp_1;
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
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
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
      Div$composable(tmp_0, tmp$ret$6, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Box$composable$lambda_1(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function get_$stableprop_9() {
    return 0;
  }
  function BoxScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$([toClassName_1($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function BoxScope() {
    this.$stable_1 = 0;
  }
  protoOf(BoxScope).align_8yhdm5_k$ = function (_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, BoxScope$align$lambda(alignment));
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:24)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  protoOf(ComposableSingletons$BoxKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function Box$composable$lambda($contentAlignment) {
    return function ($this$toAttrs) {
      $this$toAttrs.classes_mog12g_k$(['kobweb-box', toClassName_1($contentAlignment._v)]);
      return Unit_getInstance();
    };
  }
  function Box$composable$lambda_0($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Box$composable$lambda_1($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box$composable($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_10() {
    return 0;
  }
  function ColumnScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$([toClassName_0($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function ColumnScope() {
    this.$stable_1 = 0;
  }
  protoOf(ColumnScope).align_xk6b6i_k$ = function (_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, ColumnScope$align$lambda(alignment));
  };
  function Column$composable(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1435219930);
    sourceInformation($composer_0, 'C(Column$composable)P(2,4,1,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(verticalArrangement_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(horizontalAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
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
      Div$composable(tmp_0, tmp$ret$6, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Column$composable$lambda_1(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Column$composable$lambda($verticalArrangement, $horizontalAlignment) {
    return function ($this$toAttrs) {
      $this$toAttrs.classes_mog12g_k$(['kobweb-col', toClassName_3($verticalArrangement._v), toClassName_0($horizontalAlignment._v)]);
      return Unit_getInstance();
    };
  }
  function Column$composable$lambda_0($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
  function Column$composable$lambda_1($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column$composable($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_11() {
    return 0;
  }
  function RowScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$([toClassName($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function RowScope() {
    this.$stable_1 = 0;
  }
  protoOf(RowScope).align_oawnis_k$ = function (_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, RowScope$align$lambda(alignment));
  };
  function Row$composable(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2022945866);
    sourceInformation($composer_0, 'C(Row$composable)P(2,1,4,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(horizontalArrangement_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(verticalAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous>.<anonymous>' call
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
      Div$composable(tmp_0, tmp$ret$6, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Row$composable$lambda_1(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Row$composable$lambda($horizontalArrangement, $verticalAlignment) {
    return function ($this$toAttrs) {
      $this$toAttrs.classes_mog12g_k$(['kobweb-row', toClassName_2($horizontalArrangement._v), toClassName($verticalAlignment._v)]);
      return Unit_getInstance();
    };
  }
  function Row$composable$lambda_0($ref, $$dirty, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
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
    $this.invoke_wa7zhx_k$('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.invoke_wa7zhx_k$('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.invoke_wa7zhx_k$('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.invoke_wa7zhx_k$('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.invoke_wa7zhx_k$('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.invoke_wa7zhx_k$('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.invoke_wa7zhx_k$('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.invoke_wa7zhx_k$('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.invoke_wa7zhx_k$('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.invoke_wa7zhx_k$('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.invoke_wa7zhx_k$('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.invoke_wa7zhx_k$('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.invoke_wa7zhx_k$('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.invoke_wa7zhx_k$('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.invoke_wa7zhx_k$('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function get_$stableprop_12() {
    return 0;
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
    justifyItems($this$invoke, Companion_getInstance_2().get_Start_ih4i6x_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_Center_3arb0i_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_End_18ju7i_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_Start_ih4i6x_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_Center_3arb0i_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_End_18ju7i_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_Start_ih4i6x_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_Center_3arb0i_k$());
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
    justifyItems($this$invoke, Companion_getInstance_2().get_End_18ju7i_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_Start_ih4i6x_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_Center_3arb0i_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_End_18ju7i_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_Start_ih4i6x_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_4().get_End_18ju7i_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_Start_ih4i6x_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_Center_3arb0i_k$());
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
    justifySelf($this$invoke, Companion_getInstance_4().get_End_18ju7i_k$());
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
    this.$stable_2 = 0;
  }
  protoOf(KobwebComposeStyleSheet).style_n9akw7_k$ = function (selector, cssRule) {
    return this.style_4edtvi_k$(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function get_$stableprop_21() {
    return 0;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function get_$stableprop_23() {
    return 0;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function get_$stableprop_26() {
    return 0;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function Vertical_0() {
  }
  function Horizontal_0() {
  }
  function TopStart() {
    TopStart_instance = this;
    this.$stable_1 = 0;
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    if (TopStart_instance == null)
      new TopStart();
    return TopStart_instance;
  }
  function TopCenter() {
    TopCenter_instance = this;
    this.$stable_1 = 0;
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    if (TopCenter_instance == null)
      new TopCenter();
    return TopCenter_instance;
  }
  function TopEnd() {
    TopEnd_instance = this;
    this.$stable_1 = 0;
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    if (TopEnd_instance == null)
      new TopEnd();
    return TopEnd_instance;
  }
  function CenterStart() {
    CenterStart_instance = this;
    this.$stable_1 = 0;
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    if (CenterStart_instance == null)
      new CenterStart();
    return CenterStart_instance;
  }
  function Center_0() {
    Center_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    if (Center_instance_0 == null)
      new Center_0();
    return Center_instance_0;
  }
  function CenterEnd() {
    CenterEnd_instance = this;
    this.$stable_1 = 0;
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    if (CenterEnd_instance == null)
      new CenterEnd();
    return CenterEnd_instance;
  }
  function BottomStart() {
    BottomStart_instance = this;
    this.$stable_1 = 0;
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    if (BottomStart_instance == null)
      new BottomStart();
    return BottomStart_instance;
  }
  function BottomCenter() {
    BottomCenter_instance = this;
    this.$stable_1 = 0;
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    if (BottomCenter_instance == null)
      new BottomCenter();
    return BottomCenter_instance;
  }
  function BottomEnd() {
    BottomEnd_instance = this;
    this.$stable_1 = 0;
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    if (BottomEnd_instance == null)
      new BottomEnd();
    return BottomEnd_instance;
  }
  function Top_0() {
    Top_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    if (Top_instance_0 == null)
      new Top_0();
    return Top_instance_0;
  }
  function CenterVertically() {
    CenterVertically_instance = this;
    this.$stable_1 = 0;
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    if (CenterVertically_instance == null)
      new CenterVertically();
    return CenterVertically_instance;
  }
  function Bottom_0() {
    Bottom_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    if (Bottom_instance_0 == null)
      new Bottom_0();
    return Bottom_instance_0;
  }
  function Start_0() {
    Start_instance_0 = this;
    this.$stable_1 = 0;
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    if (Start_instance_0 == null)
      new Start_0();
    return Start_instance_0;
  }
  function CenterHorizontally() {
    CenterHorizontally_instance = this;
    this.$stable_1 = 0;
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    if (CenterHorizontally_instance == null)
      new CenterHorizontally();
    return CenterHorizontally_instance;
  }
  function End_0() {
    End_instance_0 = this;
    this.$stable_1 = 0;
  }
  var End_instance_0;
  function End_getInstance_0() {
    if (End_instance_0 == null)
      new End_0();
    return End_instance_0;
  }
  function FromStyle_0() {
    FromStyle_instance_0 = this;
    this.$stable_1 = 0;
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    if (FromStyle_instance_0 == null)
      new FromStyle_0();
    return FromStyle_instance_0;
  }
  function Alignment() {
  }
  function thenIf(_this__u8e3s4, condition, lazyProduce) {
    return _this__u8e3s4.then_6jcr1i_k$(condition ? lazyProduce() : Companion_getInstance_7());
  }
  function Element() {
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fold_s9dnuv_k$ = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).then_6jcr1i_k$ = function (other) {
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
  function thenIf_0(_this__u8e3s4, condition, other) {
    var tmp$ret$1;
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf.<anonymous>' call
      tmp$ret$0 = other;
      tmp = tmp$ret$0;
    } else {
      tmp = Companion_getInstance_7();
    }
    tmp$ret$1 = _this__u8e3s4.then_6jcr1i_k$(tmp);
    return tmp$ret$1;
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function _get_next__daux88($this) {
    return $this.next_1;
  }
  function ChainedModifier(current, next) {
    this.current_1 = current;
    this.next_1 = next;
  }
  protoOf(ChainedModifier).fold_s9dnuv_k$ = function (initial, operation) {
    return this.next_1.fold_s9dnuv_k$(this.current_1.fold_s9dnuv_k$(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.current_1, other.current_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.next_1, other.next_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.current_1) + imul(31, hashCode(this.next_1)) | 0;
  };
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.then_6jcr1i_k$(new StyleModifier(styles));
  }
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function get_$stableprop_29() {
    return 0;
  }
  function StyleModifier(styles) {
    this.styles_1 = styles;
    this.$stable_1 = 0;
  }
  protoOf(StyleModifier).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.styles_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.then_6jcr1i_k$(new AttrsModifier(attrs));
  }
  function WebModifier() {
  }
  function get_$stableprop_30() {
    return 0;
  }
  function AttrsModifier(attrs) {
    this.attrs_1 = attrs;
    this.$stable_1 = 0;
  }
  protoOf(AttrsModifier).get_attrs_iou0l5_k$ = function () {
    return this.attrs_1;
  };
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.attrs_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.styles_1($this_null);
      }
      return Unit_getInstance();
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.fold_s9dnuv_k$(Unit_getInstance(), toStyles$lambda$lambda($this$null));
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
      $element.styles_1($this$style);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.attrs_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.style_sa2yps_k$(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.fold_s9dnuv_k$(Unit_getInstance(), toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_31() {
    return 0;
  }
  function Colors() {
    Colors_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(Colors).get_Transparent_cxh4g9_k$ = function () {
    return Companion_getInstance_8().rgba_2wpmgk_k$(0, 0, 0, 0);
  };
  protoOf(Colors).get_AliceBlue_26ti33_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 248, 255);
  };
  protoOf(Colors).get_AntiqueWhite_ftryr7_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 235, 215);
  };
  protoOf(Colors).get_Aqua_wnyk9x_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 255);
  };
  protoOf(Colors).get_Aquamarine_wf4kkn_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(127, 255, 212);
  };
  protoOf(Colors).get_Azure_i7cg92_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 255, 255);
  };
  protoOf(Colors).get_Beige_i7ikyj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 245, 220);
  };
  protoOf(Colors).get_Bisque_3pilya_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 228, 196);
  };
  protoOf(Colors).get_Black_i7mvue_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 0);
  };
  protoOf(Colors).get_BlanchedAlmond_1qzwzr_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 235, 205);
  };
  protoOf(Colors).get_Blue_wnz3k3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 255);
  };
  protoOf(Colors).get_BlueViolet_dh8vfm_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(138, 43, 226);
  };
  protoOf(Colors).get_Brown_i7r0ml_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(165, 42, 42);
  };
  protoOf(Colors).get_BurlyWood_8ugz0w_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(222, 184, 135);
  };
  protoOf(Colors).get_CadetBlue_p1vowq_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(95, 158, 160);
  };
  protoOf(Colors).get_Chartreuse_sf60ap_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(127, 255, 0);
  };
  protoOf(Colors).get_Chocolate_hzt5e5_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(210, 105, 30);
  };
  protoOf(Colors).get_Coral_i88xyg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 127, 80);
  };
  protoOf(Colors).get_CornflowerBlue_r6uqqi_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(100, 149, 237);
  };
  protoOf(Colors).get_Cornsilk_wq0qna_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 248, 220);
  };
  protoOf(Colors).get_Crimson_p5oht6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(220, 20, 60);
  };
  protoOf(Colors).get_Cyan_wnzzpo_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 255);
  };
  protoOf(Colors).get_DarkBlue_1y795z_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 139);
  };
  protoOf(Colors).get_DarkCyan_1y6d0e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 139, 139);
  };
  protoOf(Colors).get_DarkGoldenRod_c3b5lt_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(184, 134, 11);
  };
  protoOf(Colors).get_DarkGray_1y3y8u_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(169, 169, 169);
  };
  protoOf(Colors).get_DarkGrey_1y3y5e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(169, 169, 169);
  };
  protoOf(Colors).get_DarkGreen_anpmxw_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 100, 0);
  };
  protoOf(Colors).get_DarkKhaki_apqcmb_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(189, 183, 107);
  };
  protoOf(Colors).get_DarkMagenta_njr8wa_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(139, 0, 139);
  };
  protoOf(Colors).get_DarkOliveGreen_81ck6f_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(85, 107, 47);
  };
  protoOf(Colors).get_DarkOrange_ky6wwj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 140, 0);
  };
  protoOf(Colors).get_DarkOrchid_ky5rby_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(153, 50, 204);
  };
  protoOf(Colors).get_DarkRed_ie5ln2_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(139, 0, 0);
  };
  protoOf(Colors).get_DarkSalmon_jb5x3n_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(233, 150, 122);
  };
  protoOf(Colors).get_DarkSeaGreen_yymm7n_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(143, 188, 143);
  };
  protoOf(Colors).get_DarkSlateBlue_s42xdg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(72, 61, 139);
  };
  protoOf(Colors).get_DarkSlateGray_s468al_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(47, 79, 79);
  };
  protoOf(Colors).get_DarkSlateGrey_s468e1_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(47, 79, 79);
  };
  protoOf(Colors).get_DarkTurquoise_8s04jm_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 206, 209);
  };
  protoOf(Colors).get_DarkViolet_hrkt6q_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(148, 0, 211);
  };
  protoOf(Colors).get_DeepPink_kcbez9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 20, 147);
  };
  protoOf(Colors).get_DeepSkyBlue_2ykmii_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 191, 255);
  };
  protoOf(Colors).get_DimGray_ep5xby_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(105, 105, 105);
  };
  protoOf(Colors).get_DimGrey_ep5x8i_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(105, 105, 105);
  };
  protoOf(Colors).get_DodgerBlue_w4tkwu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(30, 144, 255);
  };
  protoOf(Colors).get_FireBrick_yjvehq_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(178, 34, 34);
  };
  protoOf(Colors).get_FloralWhite_l3nfn0_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 250, 240);
  };
  protoOf(Colors).get_ForestGreen_rtf599_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(34, 139, 34);
  };
  protoOf(Colors).get_Fuchsia_k799e6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 0, 255);
  };
  protoOf(Colors).get_Gainsboro_426zpx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(220, 220, 220);
  };
  protoOf(Colors).get_GhostWhite_l7lzsz_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(248, 248, 255);
  };
  protoOf(Colors).get_Gold_wo2ci1_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 215, 0);
  };
  protoOf(Colors).get_GoldenRod_khhved_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(218, 165, 32);
  };
  protoOf(Colors).get_Gray_wo2eh8_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 128, 128);
  };
  protoOf(Colors).get_Grey_wo2eko_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 128, 128);
  };
  protoOf(Colors).get_Green_iahrqy_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 128, 0);
  };
  protoOf(Colors).get_GreenYellow_73rc9a_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(173, 255, 47);
  };
  protoOf(Colors).get_HoneyDew_wqvfes_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 255, 240);
  };
  protoOf(Colors).get_HotPink_o2ezdy_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 105, 180);
  };
  protoOf(Colors).get_IndianRed_tuu69d_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(205, 92, 92);
  };
  protoOf(Colors).get_Indigo_bq1ad_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(75, 0, 130);
  };
  protoOf(Colors).get_Ivory_ibo4m8_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 240);
  };
  protoOf(Colors).get_Khaki_icihfd_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 230, 140);
  };
  protoOf(Colors).get_Lavender_hd40j4_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(230, 230, 250);
  };
  protoOf(Colors).get_LavenderBlush_p15ihc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 240, 245);
  };
  protoOf(Colors).get_LawnGreen_blu54i_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(124, 252, 0);
  };
  protoOf(Colors).get_LemonChiffon_t7hz2f_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 250, 205);
  };
  protoOf(Colors).get_LightBlue_i1kdo9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(173, 216, 230);
  };
  protoOf(Colors).get_LightCoral_8wyb8k_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(240, 128, 128);
  };
  protoOf(Colors).get_LightCyan_i1jhio_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(224, 255, 255);
  };
  protoOf(Colors).get_LightGoldenRodYellow_yxbqf9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 250, 210);
  };
  protoOf(Colors).get_LightGray_i1h2r4_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(211, 211, 211);
  };
  protoOf(Colors).get_LightGrey_i1h2no_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(211, 211, 211);
  };
  protoOf(Colors).get_LightGreen_8z7512_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(144, 238, 144);
  };
  protoOf(Colors).get_LightPink_i1bi8t_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 182, 193);
  };
  protoOf(Colors).get_LightSalmon_dzaed_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 160, 122);
  };
  protoOf(Colors).get_LightSeaGreen_yvslb5_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(32, 178, 170);
  };
  protoOf(Colors).get_LightSkyBlue_74jx4i_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(135, 206, 250);
  };
  protoOf(Colors).get_LightSlateGray_pobgb3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(119, 136, 153);
  };
  protoOf(Colors).get_LightSlateGrey_pobgej_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(119, 136, 153);
  };
  protoOf(Colors).get_LightSteelBlue_nuj33s_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(176, 196, 222);
  };
  protoOf(Colors).get_LightYellow_2ihllt_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 224);
  };
  protoOf(Colors).get_Lime_wo5f0e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 0);
  };
  protoOf(Colors).get_LimeGreen_33bue3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(50, 205, 50);
  };
  protoOf(Colors).get_Linen_id36i9_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 240, 230);
  };
  protoOf(Colors).get_Magenta_siy4ww_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 0, 255);
  };
  protoOf(Colors).get_Maroon_1dk715_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 0, 0);
  };
  protoOf(Colors).get_MediumAquaMarine_9nmz8c_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(102, 205, 170);
  };
  protoOf(Colors).get_MediumBlue_ghumeg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 205);
  };
  protoOf(Colors).get_MediumOrchid_6dr9cv_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(186, 85, 211);
  };
  protoOf(Colors).get_MediumPurple_5usidi_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(147, 112, 219);
  };
  protoOf(Colors).get_MediumSeaGreen_uimfda_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(60, 179, 113);
  };
  protoOf(Colors).get_MediumSlateBlue_cvjwbv_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(123, 104, 238);
  };
  protoOf(Colors).get_MediumSpringGreen_68myrc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 250, 154);
  };
  protoOf(Colors).get_MediumTurquoise_w7mp5p_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(72, 209, 204);
  };
  protoOf(Colors).get_MediumVioletRed_cpazro_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(199, 21, 133);
  };
  protoOf(Colors).get_MidnightBlue_di5bxv_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(25, 25, 112);
  };
  protoOf(Colors).get_MintCream_b9kfih_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 255, 250);
  };
  protoOf(Colors).get_MistyRose_83ke2m_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 228, 225);
  };
  protoOf(Colors).get_Moccasin_tjrwhu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 228, 181);
  };
  protoOf(Colors).get_NavajoWhite_yqbnct_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 222, 173);
  };
  protoOf(Colors).get_Navy_wo6ja7_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 0, 128);
  };
  protoOf(Colors).get_OldLace_5z8ndh_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(253, 245, 230);
  };
  protoOf(Colors).get_Olive_iesdxu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 128, 0);
  };
  protoOf(Colors).get_OliveDrab_ei6q5d_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(107, 142, 35);
  };
  protoOf(Colors).get_Orange_2kp26v_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 165, 0);
  };
  protoOf(Colors).get_OrangeRed_4r1q9y_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 69, 0);
  };
  protoOf(Colors).get_Orchid_2kq7rg_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(218, 112, 214);
  };
  protoOf(Colors).get_PaleGoldenRod_ekls2d_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(238, 232, 170);
  };
  protoOf(Colors).get_PaleGreen_crlqds_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(152, 251, 152);
  };
  protoOf(Colors).get_PaleTurquoise_6api32_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(175, 238, 238);
  };
  protoOf(Colors).get_PaleVioletRed_jtguyp_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(219, 112, 147);
  };
  protoOf(Colors).get_PapayaWhip_vnp0lx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 239, 213);
  };
  protoOf(Colors).get_PeachPuff_bn3oi5_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 218, 185);
  };
  protoOf(Colors).get_Peru_wo7w4h_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(205, 133, 63);
  };
  protoOf(Colors).get_Pink_wo7yzj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 192, 203);
  };
  protoOf(Colors).get_Plum_wo81dp_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(221, 160, 221);
  };
  protoOf(Colors).get_PowderBlue_ha8x0_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(176, 224, 230);
  };
  protoOf(Colors).get_Purple_33oyqt_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(128, 0, 128);
  };
  protoOf(Colors).get_RebeccaPurple_6mafj6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(102, 51, 153);
  };
  protoOf(Colors).get_Red_18jks8_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 0, 0);
  };
  protoOf(Colors).get_RosyBrown_gx67d6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(188, 143, 143);
  };
  protoOf(Colors).get_RoyalBlue_n7lkjc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(65, 105, 225);
  };
  protoOf(Colors).get_SaddleBrown_xa0bbu_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(139, 69, 19);
  };
  protoOf(Colors).get_Salmon_47q1zr_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(250, 128, 114);
  };
  protoOf(Colors).get_SandyBrown_fjstbe_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(244, 164, 96);
  };
  protoOf(Colors).get_SeaGreen_gor2g3_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(46, 139, 87);
  };
  protoOf(Colors).get_SeaShell_gibx12_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 245, 238);
  };
  protoOf(Colors).get_Sienna_4bzyjf_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(160, 82, 45);
  };
  protoOf(Colors).get_Silver_4c4l6e_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(192, 192, 192);
  };
  protoOf(Colors).get_SkyBlue_6hycxa_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(135, 206, 235);
  };
  protoOf(Colors).get_SlateBlue_ac83li_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(106, 90, 205);
  };
  protoOf(Colors).get_SlateGray_ac4sod_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(112, 128, 144);
  };
  protoOf(Colors).get_SlateGrey_ac4skx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(112, 128, 144);
  };
  protoOf(Colors).get_Snow_wo9zos_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 250, 250);
  };
  protoOf(Colors).get_SpringGreen_t4r3al_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 255, 127);
  };
  protoOf(Colors).get_SteelBlue_c5x5vo_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(70, 130, 180);
  };
  protoOf(Colors).get_Tan_18jje0_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(210, 180, 140);
  };
  protoOf(Colors).get_Teal_woafnp_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(0, 128, 128);
  };
  protoOf(Colors).get_Thistle_6jdsp2_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(216, 191, 216);
  };
  protoOf(Colors).get_Tomato_4wh6wj_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 99, 71);
  };
  protoOf(Colors).get_Turquoise_toawfc_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(64, 224, 208);
  };
  protoOf(Colors).get_Violet_5rb5wo_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(238, 130, 238);
  };
  protoOf(Colors).get_Wheat_ij43a6_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 222, 179);
  };
  protoOf(Colors).get_White_ij46ow_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 255);
  };
  protoOf(Colors).get_WhiteSmoke_gvtxtb_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(245, 245, 245);
  };
  protoOf(Colors).get_Yellow_746xzx_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(255, 255, 0);
  };
  protoOf(Colors).get_YellowGreen_wl0z8m_k$ = function () {
    return Companion_getInstance_8().rgb_ncqb1w_k$(154, 205, 50);
  };
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function get_$stableprop_32() {
    return 0;
  }
  function get_$stableprop_33() {
    return 0;
  }
  function Rgb(value) {
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Rgb).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Rgb).get_red_18ix20_k$ = function () {
    return this.value_1 >> 16 & 255;
  };
  protoOf(Rgb).get_green_is36qi_k$ = function () {
    return this.value_1 >> 8 & 255;
  };
  protoOf(Rgb).get_blue_wojj4z_k$ = function () {
    return this.value_1 >> 0 & 255;
  };
  protoOf(Rgb).get_alpha_iooth1_k$ = function () {
    return this.value_1 >> 24 & 255;
  };
  protoOf(Rgb).get_redf_wotlby_k$ = function () {
    return toColorFloat(this.get_red_18ix20_k$());
  };
  protoOf(Rgb).get_greenf_dxud3g_k$ = function () {
    return toColorFloat(this.get_green_is36qi_k$());
  };
  protoOf(Rgb).get_bluef_ip8ppf_k$ = function () {
    return toColorFloat(this.get_blue_wojj4z_k$());
  };
  protoOf(Rgb).get_alphaf_b0gxxt_k$ = function () {
    return toColorFloat(this.get_alpha_iooth1_k$());
  };
  protoOf(Rgb).inverted_adp911_k$ = function () {
    return Companion_getInstance_8().rgba_2wpmgk_k$(255 - this.get_red_18ix20_k$() | 0, 255 - this.get_green_is36qi_k$() | 0, 255 - this.get_blue_wojj4z_k$() | 0, this.get_alpha_iooth1_k$());
  };
  protoOf(Rgb).darkened_3k65o0_k$ = function (byPercent) {
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
    return Companion_getInstance_8().rgba_yjhdu4_k$(this.get_redf_wotlby_k$() * darkeningMultiplier, this.get_greenf_dxud3g_k$() * darkeningMultiplier, this.get_bluef_ip8ppf_k$() * darkeningMultiplier, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(Rgb).copy_2hj87f_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_8().rgba_2wpmgk_k$(red, green, blue, alpha);
  };
  protoOf(Rgb).copy$default_z5pom3_k$ = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_red_18ix20_k$() : red;
    green = green === VOID ? this.get_green_is36qi_k$() : green;
    blue = blue === VOID ? this.get_blue_wojj4z_k$() : blue;
    alpha = alpha === VOID ? this.get_alpha_iooth1_k$() : alpha;
    return $super === VOID ? this.copy_2hj87f_k$(red, green, blue, alpha) : $super.copy_2hj87f_k$.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).copyf_t7rrzj_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_8().rgba_yjhdu4_k$(red, green, blue, alpha);
  };
  protoOf(Rgb).copyf$default_1ypp37_k$ = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_redf_wotlby_k$() : red;
    green = green === VOID ? this.get_greenf_dxud3g_k$() : green;
    blue = blue === VOID ? this.get_bluef_ip8ppf_k$() : blue;
    alpha = alpha === VOID ? this.get_alphaf_b0gxxt_k$() : alpha;
    return $super === VOID ? this.copyf_t7rrzj_k$(red, green, blue, alpha) : $super.copyf_t7rrzj_k$.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).toRgb_1tsrpu_k$ = function () {
    return this;
  };
  protoOf(Rgb).toHsl_1tskli_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.get_redf_wotlby_k$();
    var tmp1_maxOf = this.get_greenf_dxud3g_k$();
    var tmp2_maxOf = this.get_bluef_ip8ppf_k$();
    tmp$ret$0 = Math.max(tmp0_maxOf, tmp1_maxOf, tmp2_maxOf);
    var chromaMax = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp3_minOf = this.get_redf_wotlby_k$();
    var tmp4_minOf = this.get_greenf_dxud3g_k$();
    var tmp5_minOf = this.get_bluef_ip8ppf_k$();
    tmp$ret$1 = Math.min(tmp3_minOf, tmp4_minOf, tmp5_minOf);
    var chromaMin = tmp$ret$1;
    var chromaDelta = chromaMax - chromaMin;
    var lightness = (chromaMin + chromaMax) / 2.0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp6_abs = 2.0 * lightness - 1.0;
    tmp$ret$2 = Math.abs(tmp6_abs);
    var saturation = chromaDelta / (1.0 - tmp$ret$2);
    var tmp;
    if (chromaDelta === 0.0) {
      tmp = 0.0;
    } else {
      var tmp_0;
      if (chromaMax === this.get_redf_wotlby_k$()) {
        tmp_0 = (this.get_greenf_dxud3g_k$() - this.get_bluef_ip8ppf_k$()) / chromaDelta % 6;
      } else if (chromaMax === this.get_greenf_dxud3g_k$()) {
        tmp_0 = (this.get_bluef_ip8ppf_k$() - this.get_redf_wotlby_k$()) / chromaDelta + 2.0;
      } else if (chromaMax === this.get_bluef_ip8ppf_k$()) {
        tmp_0 = (this.get_redf_wotlby_k$() - this.get_greenf_dxud3g_k$()) / chromaDelta + 4.0;
      } else {
        var tmp7_error = 'Unexpected chromaMax value ' + chromaMax;
        throw IllegalStateException_init_$Create$(toString(tmp7_error));
      }
      tmp = 60.0 * tmp_0;
    }
    var hue = tmp;
    return Companion_getInstance_8().hsla_u2xvsw_k$(hue, saturation, lightness, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(Rgb).toString = function () {
    return this.get_alpha_iooth1_k$() === 255 ? 'rgb(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ')' : 'rgba(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ', ' + this.get_alphaf_b0gxxt_k$() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.get_red_18ix20_k$() === other.get_red_18ix20_k$();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.get_green_is36qi_k$() === other.get_green_is36qi_k$();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.get_blue_wojj4z_k$() === other.get_blue_wojj4z_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.get_alpha_iooth1_k$() === other.get_alpha_iooth1_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.get_red_18ix20_k$();
    result = imul(31, result) + this.get_green_is36qi_k$() | 0;
    result = imul(31, result) + this.get_blue_wojj4z_k$() | 0;
    result = imul(31, result) + this.get_alpha_iooth1_k$() | 0;
    return result;
  };
  function Hsl(hue, saturation, lightness, alpha) {
    this.hue_1 = hue;
    this.saturation_1 = saturation;
    this.lightness_1 = lightness;
    this.alpha_1 = alpha;
    this.$stable_1 = 0;
  }
  protoOf(Hsl).get_hue_18j435_k$ = function () {
    return this.hue_1;
  };
  protoOf(Hsl).get_saturation_nzhaqt_k$ = function () {
    return this.saturation_1;
  };
  protoOf(Hsl).get_lightness_jv7mx0_k$ = function () {
    return this.lightness_1;
  };
  protoOf(Hsl).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Hsl).inverted_adp911_k$ = function () {
    return this.toRgb_1tsrpu_k$().inverted_adp911_k$();
  };
  protoOf(Hsl).darkened_3k65o0_k$ = function (byPercent) {
    return this.toRgb_1tsrpu_k$().darkened_3k65o0_k$(byPercent);
  };
  protoOf(Hsl).copy_skjbed_k$ = function (hue, saturation, lightness, alpha) {
    return Companion_getInstance_8().hsla_u2xvsw_k$(hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).copy$default_vk74rp_k$ = function (hue, saturation, lightness, alpha, $super) {
    hue = hue === VOID ? this.hue_1 : hue;
    saturation = saturation === VOID ? this.saturation_1 : saturation;
    lightness = lightness === VOID ? this.lightness_1 : lightness;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_skjbed_k$(hue, saturation, lightness, alpha) : $super.copy_skjbed_k$.call(this, hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).toRgb_1tsrpu_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = 2 * this.lightness_1 - 1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    var chroma = (1 - tmp$ret$0) * this.saturation_1;
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = this.hue_1 / 60 % 2 - 1;
    tmp$ret$1 = Math.abs(tmp1_abs);
    var intermediateValue = chroma * (1 - tmp$ret$1);
    var hueSection = (numberToInt(this.hue_1) % 360 | 0) / 60 | 0;
    var r;
    var g;
    var b;
    var tmp0_subject = hueSection;
    switch (tmp0_subject) {
      case 0:
        r = chroma;
        g = intermediateValue;
        b = 0.0;
        break;
      case 1:
        r = intermediateValue;
        g = chroma;
        b = 0.0;
        break;
      case 2:
        r = 0.0;
        g = chroma;
        b = intermediateValue;
        break;
      case 3:
        r = 0.0;
        g = intermediateValue;
        b = chroma;
        break;
      case 4:
        r = intermediateValue;
        g = 0.0;
        b = chroma;
        break;
      default:
        // Inline function 'kotlin.check' call
        var tmp2_check = hueSection === 5;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp2_check) {
          var tmp$ret$2;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$2 = 'Check failed.';
          var message = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString(message));
        }

        r = chroma;
        g = 0.0;
        b = intermediateValue;
        break;
    }
    var lightnessAdjustment = this.lightness_1 - chroma / 2;
    return Companion_getInstance_8().rgba_yjhdu4_k$(r + lightnessAdjustment, g + lightnessAdjustment, b + lightnessAdjustment, this.alpha_1);
  };
  protoOf(Hsl).toHsl_1tskli_k$ = function () {
    return this;
  };
  protoOf(Hsl).toString = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = this.hue_1 * 10;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var hueRounded = tmp$ret$0 / 10.0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = this.saturation_1 * 1000;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    var saturationPercent = tmp$ret$1 / 10.0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp2_roundToInt = this.lightness_1 * 1000;
    tmp$ret$2 = roundToInt(tmp2_roundToInt);
    var lightnessPercent = tmp$ret$2 / 10.0;
    return this.alpha_1 === 1.0 ? 'hsl(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%)' : 'hsla(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%, ' + this.alpha_1 + ')';
  };
  protoOf(Hsl).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Hsl) {
      tmp_2 = this.hue_1 === other.hue_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.saturation_1 === other.saturation_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.lightness_1 === other.lightness_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.alpha_1 === other.alpha_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Hsl).hashCode = function () {
    var result = getNumberHashCode(this.hue_1);
    result = imul(31, result) + getNumberHashCode(this.saturation_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lightness_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.DEFAULT_SHIFTING_PERCENT_1 = 0.3;
  }
  protoOf(Companion_0).get_DEFAULT_SHIFTING_PERCENT_bgdcr7_k$ = function () {
    return this.DEFAULT_SHIFTING_PERCENT_1;
  };
  protoOf(Companion_0).rgb_hjb4t0_k$ = function (value) {
    return new Rgb(-16777216 | value);
  };
  protoOf(Companion_0).argb_kwjsfp_k$ = function (value) {
    return new Rgb(value);
  };
  protoOf(Companion_0).argb_8r2xdi_k$ = function (value) {
    var tmp$ret$4;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Companion.argb.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = (new Long(0, -1)).and_jhajnj_k$(value).equals(new Long(0, 0));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Companion.argb.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.text.uppercase' call
      var tmp0_uppercase = toString_0(value, 16);
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_uppercase;
      tmp$ret$1 = tmp$ret$0.toUpperCase();
      tmp$ret$2 = 'Got an invalid hex color (0x' + tmp$ret$1 + ') value larger than 0xFFFFFFFF';
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$3 = this.argb_kwjsfp_k$(value.toInt_1tsl84_k$());
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  };
  protoOf(Companion_0).rgba_9ecc6r_k$ = function (value) {
    return this.argb_kwjsfp_k$(value);
  };
  protoOf(Companion_0).rgb_ncqb1w_k$ = function (r, g, b) {
    return this.rgba_2wpmgk_k$(r, g, b, 255);
  };
  protoOf(Companion_0).rgba_2wpmgk_k$ = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).argb_xx08ss_k$ = function (a, r, g, b) {
    return this.rgba_2wpmgk_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgb_fip3nl_k$ = function (r, g, b) {
    return this.rgb_ncqb1w_k$(toColorInt(r), toColorInt(g), toColorInt(b));
  };
  protoOf(Companion_0).rgba_yjhdu4_k$ = function (r, g, b, a) {
    return this.rgba_2wpmgk_k$(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  protoOf(Companion_0).argb_j85n4c_k$ = function (a, r, g, b) {
    return this.rgba_yjhdu4_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgba_oyxpup_k$ = function (r, g, b, a) {
    return this.rgba_2wpmgk_k$(r, g, b, toColorInt(a));
  };
  protoOf(Companion_0).argb_w73dfl_k$ = function (a, r, g, b) {
    return this.rgba_oyxpup_k$(r, g, b, a);
  };
  protoOf(Companion_0).hsl_t08kgw_k$ = function (h, s, l) {
    return this.hsl_5d7ooj_k$(h, s, l);
  };
  protoOf(Companion_0).hsla_qz6e31_k$ = function (h, s, l, a) {
    return this.hsla_u2xvsw_k$(h, s, l, a);
  };
  protoOf(Companion_0).hsl_5d7ooj_k$ = function (h, s, l) {
    return new Hsl(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_u2xvsw_k$ = function (h, s, l, a) {
    return new Hsl(h, s, l, a);
  };
  protoOf(Companion_0).rgb_qm2dwq_k$ = function (r, g, b) {
    return this.rgba_s8oif1_k$(r, g, b, 1.0);
  };
  protoOf(Companion_0).rgba_abxsgg_k$ = function (r, g, b, a) {
    return this.rgba_yjhdu4_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a.value / 100.0);
  };
  protoOf(Companion_0).rgba_s8oif1_k$ = function (r, g, b, a) {
    return this.rgba_yjhdu4_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a);
  };
  protoOf(Companion_0).argb_chscaw_k$ = function (a, r, g, b) {
    return this.argb_j85n4c_k$(a.value / 100.0, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).argb_950gcf_k$ = function (a, r, g, b) {
    return this.argb_j85n4c_k$(a, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).hsl_wg0ugj_k$ = function (h, s, l) {
    return this.hsla_ok8ugw_k$(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_ok8ugw_k$ = function (h, s, l, alpha) {
    return this.hsla_u2xvsw_k$(toDegrees(h), s.value / 100.0, l.value / 100.0, alpha);
  };
  protoOf(Companion_0).hsla_ouuvxv_k$ = function (h, s, l, alpha) {
    return this.hsla_ok8ugw_k$(h, s, l, alpha.value / 100.0);
  };
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Color() {
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
    return _this__u8e3s4.inverted_adp911_k$().darkened_3k65o0_k$(byPercent).inverted_adp911_k$();
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function toDegrees(_this__u8e3s4) {
    var tmp0_subject = toString(_this__u8e3s4.unit);
    var tmp;
    switch (tmp0_subject) {
      case 'deg':
        tmp = _this__u8e3s4.value;
        break;
      case 'grad':
        tmp = _this__u8e3s4.value * 0.9;
        break;
      case 'rad':
        tmp = _this__u8e3s4.value * 180.0 / get_PI();
        break;
      case 'turn':
        tmp = _this__u8e3s4.value * 360.0;
        break;
      default:
        var tmp0_error = 'Unexpected unit type ' + _this__u8e3s4.unit;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp % 360.0;
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.attr_z3nk29_k$('aria-disabled', $value.toString());
      return Unit_getInstance();
    };
  }
  function alignSelf_1(_this__u8e3s4, alignSelf) {
    return styleModifier(_this__u8e3s4, alignSelf$lambda(alignSelf));
  }
  function justifyContent_0(_this__u8e3s4, justifyContent) {
    return styleModifier(_this__u8e3s4, justifyContent$lambda(justifyContent));
  }
  function alignItems_0(_this__u8e3s4, alignItems) {
    return styleModifier(_this__u8e3s4, alignItems$lambda(alignItems));
  }
  function alignSelf$lambda($alignSelf) {
    return function ($this$styleModifier) {
      alignSelf_0($this$styleModifier, $alignSelf);
      return Unit_getInstance();
    };
  }
  function justifyContent$lambda($justifyContent) {
    return function ($this$styleModifier) {
      justifyContent($this$styleModifier, $justifyContent);
      return Unit_getInstance();
    };
  }
  function alignItems$lambda($alignItems) {
    return function ($this$styleModifier) {
      alignItems($this$styleModifier, $alignItems);
      return Unit_getInstance();
    };
  }
  function background_0(_this__u8e3s4, backgrounds) {
    return styleModifier(_this__u8e3s4, background$lambda(backgrounds));
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function background$lambda($backgrounds) {
    return function ($this$styleModifier) {
      background($this$styleModifier, $backgrounds.slice());
      return Unit_getInstance();
    };
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_getInstance();
    };
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
  function borderRadius_1(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function borderWidth_0(_this__u8e3s4, width) {
    return styleModifier(_this__u8e3s4, borderWidth$lambda(width));
  }
  function borderRadius_2(_this__u8e3s4, topLeftAndBottomRight, topRightAndBottomLeft) {
    topLeftAndBottomRight = topLeftAndBottomRight === VOID ? get_px(0) : topLeftAndBottomRight;
    topRightAndBottomLeft = topRightAndBottomLeft === VOID ? get_px(0) : topRightAndBottomLeft;
    return styleModifier(_this__u8e3s4, borderRadius$lambda_0(topLeftAndBottomRight, topRightAndBottomLeft));
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
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_getInstance();
    };
  }
  function borderWidth$lambda($width) {
    return function ($this$styleModifier) {
      borderWidth($this$styleModifier, $width);
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
  function id_0(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, id$lambda(value));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_mog12g_k$($classes.slice());
      return Unit_getInstance();
    };
  }
  function id$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.id_xxyy5i_k$($value);
      return Unit_getInstance();
    };
  }
  function flexShrink_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexShrink$lambda(value));
  }
  function flexWrap_0(_this__u8e3s4, flexWrap) {
    return styleModifier(_this__u8e3s4, flexWrap$lambda(flexWrap));
  }
  function flexDirection_0(_this__u8e3s4, flexDirection) {
    return styleModifier(_this__u8e3s4, flexDirection$lambda(flexDirection));
  }
  function flexBasis_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexBasis$lambda(value));
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function flexShrink$lambda($value) {
    return function ($this$styleModifier) {
      flexShrink($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function flexWrap$lambda($flexWrap) {
    return function ($this$styleModifier) {
      flexWrap($this$styleModifier, $flexWrap);
      return Unit_getInstance();
    };
  }
  function flexDirection$lambda($flexDirection) {
    return function ($this$styleModifier) {
      flexDirection($this$styleModifier, $flexDirection);
      return Unit_getInstance();
    };
  }
  function flexBasis$lambda($value) {
    return function ($this$styleModifier) {
      flexBasis($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function gridTemplateRows_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gridTemplateRows$lambda(value));
  }
  function gridRowEnd_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gridRowEnd$lambda(value));
  }
  function gridRowStart_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gridRowStart$lambda(value));
  }
  function gridTemplateRows$lambda($value) {
    return function ($this$styleModifier) {
      gridTemplateRows($this$styleModifier, $value);
      return Unit_getInstance();
    };
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
      $this$attrsModifier.onClick_3adsri_k$($listener);
      return Unit_getInstance();
    };
  }
  function margin_0(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda(top, leftRight, bottom));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function padding_0(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda(topBottom, leftRight));
  }
  function lineHeight_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function margin_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, margin$lambda_0(topBottom, leftRight));
  }
  function padding_1(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda_0(all));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function lineHeight_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda_0(value));
  }
  function margin_2(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_1(all));
  }
  function maxWidth_0(_this__u8e3s4, maxWidth) {
    return styleModifier(_this__u8e3s4, maxWidth$lambda(maxWidth));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function padding_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, padding$lambda_1(top, leftRight, bottom));
  }
  function margin_3(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda_2(top, right, bottom, left));
  }
  function margin$lambda($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_getInstance();
    };
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
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function margin$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function lineHeight$lambda_0($value) {
    return function ($this$styleModifier) {
      lineHeight_0($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function margin$lambda_1($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
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
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_2($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
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
  protoOf(KobwebComposeStyleSheet).style_4edtvi_k$ = style;
  protoOf(KobwebComposeStyleSheet).style_5otx79_k$ = style_0;
  protoOf(KobwebComposeStyleSheet).style_68ppe6_k$ = style_1;
  protoOf(KobwebComposeStyleSheet).invoke_qvgdhg_k$ = invoke;
  protoOf(KobwebComposeStyleSheet).invoke_wa7zhx_k$ = invoke_0;
  protoOf(KobwebComposeStyleSheet).selector_vsua3m_k$ = selector;
  protoOf(KobwebComposeStyleSheet).combine_75bnet_k$ = combine;
  protoOf(KobwebComposeStyleSheet).plus_nlz2mk_k$ = plus;
  protoOf(KobwebComposeStyleSheet).plus_85zybx_k$ = plus_0;
  protoOf(KobwebComposeStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(KobwebComposeStyleSheet).get_universal_1qp21u_k$ = get_universal;
  protoOf(KobwebComposeStyleSheet).type_gwc96h_k$ = type;
  protoOf(KobwebComposeStyleSheet).className_ykinvi_k$ = className;
  protoOf(KobwebComposeStyleSheet).id_xxyy5i_k$ = id;
  protoOf(KobwebComposeStyleSheet).attr_8c4xcm_k$ = attr;
  protoOf(KobwebComposeStyleSheet).attr$default_c3gqj1_k$ = attr$default;
  protoOf(KobwebComposeStyleSheet).attrEquals_ekinah_k$ = attrEquals;
  protoOf(KobwebComposeStyleSheet).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(KobwebComposeStyleSheet).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(KobwebComposeStyleSheet).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(KobwebComposeStyleSheet).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(KobwebComposeStyleSheet).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(KobwebComposeStyleSheet).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(KobwebComposeStyleSheet).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(KobwebComposeStyleSheet).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(KobwebComposeStyleSheet).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(KobwebComposeStyleSheet).attrContains_2muovr_k$ = attrContains;
  protoOf(KobwebComposeStyleSheet).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(KobwebComposeStyleSheet).group_po2tbv_k$ = group;
  protoOf(KobwebComposeStyleSheet).descendant_x63x3d_k$ = descendant;
  protoOf(KobwebComposeStyleSheet).desc_ej3sir_k$ = desc;
  protoOf(KobwebComposeStyleSheet).desc_8daddi_k$ = desc_0;
  protoOf(KobwebComposeStyleSheet).desc_npizau_k$ = desc_1;
  protoOf(KobwebComposeStyleSheet).desc_w7b77z_k$ = desc_2;
  protoOf(KobwebComposeStyleSheet).child_4w4v4o_k$ = child;
  protoOf(KobwebComposeStyleSheet).sibling_tzh2by_k$ = sibling;
  protoOf(KobwebComposeStyleSheet).adjacent_gxbr7y_k$ = adjacent;
  protoOf(KobwebComposeStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(KobwebComposeStyleSheet).hover_gby0bi_k$ = hover;
  protoOf(KobwebComposeStyleSheet).get_hover_islez7_k$ = get_hover;
  protoOf(KobwebComposeStyleSheet).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(KobwebComposeStyleSheet).get_link_wopumb_k$ = get_link;
  protoOf(KobwebComposeStyleSheet).get_visited_8zg8qp_k$ = get_visited;
  protoOf(KobwebComposeStyleSheet).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(KobwebComposeStyleSheet).get_target_juba8q_k$ = get_target;
  protoOf(KobwebComposeStyleSheet).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(KobwebComposeStyleSheet).get_scope_iyfcq3_k$ = get_scope;
  protoOf(KobwebComposeStyleSheet).get_active_avldsf_k$ = get_active;
  protoOf(KobwebComposeStyleSheet).get_focus_irhg33_k$ = get_focus;
  protoOf(KobwebComposeStyleSheet).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(KobwebComposeStyleSheet).get_playing_6wau9n_k$ = get_playing;
  protoOf(KobwebComposeStyleSheet).get_paused_hy6yif_k$ = get_paused;
  protoOf(KobwebComposeStyleSheet).get_autofill_801dad_k$ = get_autofill;
  protoOf(KobwebComposeStyleSheet).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(KobwebComposeStyleSheet).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(KobwebComposeStyleSheet).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(KobwebComposeStyleSheet).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(KobwebComposeStyleSheet).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(KobwebComposeStyleSheet).get_default_qtagd4_k$ = get_default;
  protoOf(KobwebComposeStyleSheet).get_checked_djib3y_k$ = get_checked;
  protoOf(KobwebComposeStyleSheet).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(KobwebComposeStyleSheet).get_blank_ip8b3f_k$ = get_blank;
  protoOf(KobwebComposeStyleSheet).get_valid_j01e4z_k$ = get_valid;
  protoOf(KobwebComposeStyleSheet).get_invalid_xocxse_k$ = get_invalid;
  protoOf(KobwebComposeStyleSheet).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(KobwebComposeStyleSheet).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(KobwebComposeStyleSheet).get_required_wq3z3c_k$ = get_required;
  protoOf(KobwebComposeStyleSheet).get_optional_x3zcnr_k$ = get_optional;
  protoOf(KobwebComposeStyleSheet).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(KobwebComposeStyleSheet).get_root_wott0r_k$ = get_root;
  protoOf(KobwebComposeStyleSheet).get_empty_iqwn50_k$ = get_empty;
  protoOf(KobwebComposeStyleSheet).get_first_irdx8n_k$ = get_first;
  protoOf(KobwebComposeStyleSheet).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(KobwebComposeStyleSheet).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(KobwebComposeStyleSheet).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(KobwebComposeStyleSheet).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(KobwebComposeStyleSheet).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(KobwebComposeStyleSheet).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(KobwebComposeStyleSheet).get_host_wonf8x_k$ = get_host;
  protoOf(KobwebComposeStyleSheet).host_93x8z6_k$ = host;
  protoOf(KobwebComposeStyleSheet).get_defined_qtfew0_k$ = get_defined;
  protoOf(KobwebComposeStyleSheet).get_left_woprgw_k$ = get_left;
  protoOf(KobwebComposeStyleSheet).get_right_ixz7xv_k$ = get_right;
  protoOf(KobwebComposeStyleSheet).lang_xkki7h_k$ = lang;
  protoOf(KobwebComposeStyleSheet).nthChild_tigwrk_k$ = nthChild;
  protoOf(KobwebComposeStyleSheet).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(KobwebComposeStyleSheet).nthOfType_n46p53_k$ = nthOfType;
  protoOf(KobwebComposeStyleSheet).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(KobwebComposeStyleSheet).not_di0wzr_k$ = not;
  protoOf(KobwebComposeStyleSheet).get_after_iol2gj_k$ = get_after;
  protoOf(KobwebComposeStyleSheet).get_before_bdhrwo_k$ = get_before;
  protoOf(KobwebComposeStyleSheet).get_cue_18j7sm_k$ = get_cue;
  protoOf(KobwebComposeStyleSheet).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(KobwebComposeStyleSheet).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(KobwebComposeStyleSheet).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(KobwebComposeStyleSheet).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(KobwebComposeStyleSheet).get_selection_jv4aal_k$ = get_selection;
  protoOf(KobwebComposeStyleSheet).slotted_iujblx_k$ = slotted;
  protoOf(ChainedModifier).then_6jcr1i_k$ = then;
  protoOf(StyleModifier).fold_s9dnuv_k$ = fold;
  protoOf(StyleModifier).then_6jcr1i_k$ = then;
  protoOf(AttrsModifier).fold_s9dnuv_k$ = fold;
  protoOf(AttrsModifier).then_6jcr1i_k$ = then;
  protoOf(Rgb).darkened$default_a76wb7_k$ = darkened$default;
  protoOf(Hsl).darkened$default_a76wb7_k$ = darkened$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = Column$composable;
  _.$_$.c = Row$composable;
  _.$_$.d = lightened;
  _.$_$.e = alignItems_0;
  _.$_$.f = alignSelf_1;
  _.$_$.g = ariaDisabled;
  _.$_$.h = backdropFilter_0;
  _.$_$.i = backgroundColor_0;
  _.$_$.j = background_0;
  _.$_$.k = borderRadius_2;
  _.$_$.l = borderRadius_1;
  _.$_$.m = borderStyle_0;
  _.$_$.n = borderTop_0;
  _.$_$.o = borderWidth_0;
  _.$_$.p = bottom_0;
  _.$_$.q = boxShadow_0;
  _.$_$.r = classNames;
  _.$_$.s = color_0;
  _.$_$.t = cursor_0;
  _.$_$.u = display_0;
  _.$_$.v = fillMaxSize;
  _.$_$.w = fillMaxWidth;
  _.$_$.x = flexBasis_0;
  _.$_$.y = flexDirection_0;
  _.$_$.z = flexGrow_0;
  _.$_$.a1 = flexShrink_0;
  _.$_$.b1 = flexWrap_0;
  _.$_$.c1 = fontFamily_0;
  _.$_$.d1 = fontSize_2;
  _.$_$.e1 = fontSize_1;
  _.$_$.f1 = fontWeight_0;
  _.$_$.g1 = gridRowEnd_0;
  _.$_$.h1 = gridRowStart_0;
  _.$_$.i1 = gridTemplateRows_0;
  _.$_$.j1 = height_0;
  _.$_$.k1 = id_0;
  _.$_$.l1 = justifyContent_0;
  _.$_$.m1 = left_0;
  _.$_$.n1 = lineHeight_1;
  _.$_$.o1 = lineHeight_2;
  _.$_$.p1 = margin_3;
  _.$_$.q1 = margin_1;
  _.$_$.r1 = margin_2;
  _.$_$.s1 = margin_0;
  _.$_$.t1 = maxWidth_0;
  _.$_$.u1 = minWidth_0;
  _.$_$.v1 = objectFit_0;
  _.$_$.w1 = onClick;
  _.$_$.x1 = opacity_0;
  _.$_$.y1 = outline_0;
  _.$_$.z1 = paddingInline_0;
  _.$_$.a2 = padding_1;
  _.$_$.b2 = padding_2;
  _.$_$.c2 = padding_0;
  _.$_$.d2 = position_0;
  _.$_$.e2 = right_0;
  _.$_$.f2 = textAlign_0;
  _.$_$.g2 = textDecorationLine_0;
  _.$_$.h2 = top_0;
  _.$_$.i2 = transition_0;
  _.$_$.j2 = userSelect_0;
  _.$_$.k2 = whiteSpace_0;
  _.$_$.l2 = width_0;
  _.$_$.m2 = Modifier;
  _.$_$.n2 = StyleModifier;
  _.$_$.o2 = styleModifier;
  _.$_$.p2 = thenIf_0;
  _.$_$.q2 = toAttrs;
  _.$_$.r2 = toStyles;
  _.$_$.s2 = SpaceBetween_getInstance;
  _.$_$.t2 = Start_getInstance;
  _.$_$.u2 = KobwebComposeStyleSheet_getInstance;
  _.$_$.v2 = Colors_getInstance;
  _.$_$.w2 = CenterVertically_getInstance;
  _.$_$.x2 = Center_getInstance_0;
  _.$_$.y2 = Start_getInstance_0;
  _.$_$.z2 = Companion_getInstance_7;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-kobweb-compose.js.map
