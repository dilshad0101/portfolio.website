(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './html-html-core.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./html-html-core.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-compose-html-ext'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-compose-html-ext'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-compose-html-ext'.");
    }
    root['kobweb-compose-html-ext'] = factory(typeof this['kobweb-compose-html-ext'] === 'undefined' ? {} : this['kobweb-compose-html-ext'], this['kotlin-kotlin-stdlib-js-ir'], this['html-html-core'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.y6;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var equals = kotlin_kotlin.$_$.f6;
  var hashCode = kotlin_kotlin.$_$.k6;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var hidden = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var title = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var dir = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var draggable = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var contentEditable = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var inputMode = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var inputMode_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var onContextMenu = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var onDoubleClick = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var onMouseDown = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var onMouseUp = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var onMouseMove = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var onMouseOut = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var onMouseOver = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var onWheel = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var onDrag = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var onDrop = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var onDragStart = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var onDragEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var onDragOver = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var onDragEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var onDragLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var onCopy = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var onCut = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var onPaste = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var onFocus = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var onBlur = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var onTouchCancel = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var onTouchMove = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var onTouchEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var onTouchStart = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var onAnimationIteration = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var onAnimationStart = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var onScroll = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var addEventListener = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var addEventListener_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var classMeta = kotlin_kotlin.$_$.c6;
  var VOID = kotlin_kotlin.$_$.z9;
  var setMetadataFor = kotlin_kotlin.$_$.z6;
  var objectMeta = kotlin_kotlin.$_$.x6;
  var THROW_ISE = kotlin_kotlin.$_$.e9;
  var Enum = kotlin_kotlin.$_$.v8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n1;
  var joinToString = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var toString = kotlin_kotlin.$_$.b7;
  var joinToString_0 = kotlin_kotlin.$_$.u3;
  var THROW_CCE = kotlin_kotlin.$_$.d9;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.o8;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.j8;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.b7;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.g8;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.e8;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.l6;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.m6;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.o6;
  var variable_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.n6;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.k6;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.j6;
  var invoke_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.i6;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.q6;
  var listOfNotNull = kotlin_kotlin.$_$.z3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var copyToArray = kotlin_kotlin.$_$.i3;
  var charSequenceLength = kotlin_kotlin.$_$.b6;
  var charSequenceGet = kotlin_kotlin.$_$.a6;
  var isWhitespace = kotlin_kotlin.$_$.a8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Collection = kotlin_kotlin.$_$.g2;
  var isInterface = kotlin_kotlin.$_$.p6;
  var checkCountOverflow = kotlin_kotlin.$_$.a3;
  var checkIndexOverflow = kotlin_kotlin.$_$.b3;
  var getOrNull = kotlin_kotlin.$_$.r3;
  var interfaceMeta = kotlin_kotlin.$_$.m6;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var toList = kotlin_kotlin.$_$.u4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var isBlank = kotlin_kotlin.$_$.y7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var isUpperCase = kotlin_kotlin.$_$.z7;
  var decapitalize = kotlin_kotlin.$_$.s7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsKeyword, 'JustifyItemsKeyword', classMeta, JustifyItems);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItemsKeyword);
  setMetadataFor(BaselineAlignment, 'BaselineAlignment', classMeta, JustifyItems);
  setMetadataFor(OverflowAlignment, 'OverflowAlignment', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(AlignSelf, 'AlignSelf', classMeta);
  setMetadataFor(AlignSelfKeyword, 'AlignSelfKeyword', classMeta, AlignSelf);
  setMetadataFor(AlignSelfPosition, 'AlignSelfPosition', classMeta, AlignSelfKeyword);
  setMetadataFor(BaselineAlignment_0, 'BaselineAlignment', classMeta, AlignSelf);
  setMetadataFor(OverflowAlignment_0, 'OverflowAlignment', classMeta, AlignSelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfKeyword, 'JustifySelfKeyword', classMeta, JustifySelf);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelfKeyword);
  setMetadataFor(BaselineAlignment_1, 'BaselineAlignment', classMeta, JustifySelf);
  setMetadataFor(OverflowAlignment_1, 'OverflowAlignment', classMeta, JustifySelf);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BaselineSet, 'BaselineSet', classMeta, Enum);
  setMetadataFor(OverflowStrategy, 'OverflowStrategy', classMeta, Enum);
  setMetadataFor(BackgroundSize, 'BackgroundSize', classMeta);
  setMetadataFor(Keyword, 'Keyword', classMeta, BackgroundSize);
  setMetadataFor(Size, 'Size', classMeta, BackgroundSize);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CSSBackground, 'CSSBackground', classMeta);
  setMetadataFor(BackgroundImage, 'BackgroundImage', classMeta);
  setMetadataFor(Keyword_0, 'Keyword', classMeta, BackgroundImage);
  setMetadataFor(Url, 'Url', classMeta, BackgroundImage);
  setMetadataFor(Gradient, 'Gradient', classMeta, BackgroundImage);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(BackgroundRepeat, 'BackgroundRepeat', classMeta);
  setMetadataFor(Keyword_1, 'Keyword', classMeta, BackgroundRepeat);
  setMetadataFor(RepeatStyle, 'RepeatStyle', classMeta, Keyword_1);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(BackgroundPosition, 'BackgroundPosition', classMeta);
  setMetadataFor(Keyword_2, 'Keyword', classMeta, BackgroundPosition);
  setMetadataFor(Position, 'Position', classMeta, BackgroundPosition);
  setMetadataFor(LegacyEdge, 'LegacyEdge', classMeta, BackgroundPosition);
  setMetadataFor(LegacyEdgeX, 'LegacyEdgeX', classMeta, LegacyEdge);
  setMetadataFor(LegacyEdgeY, 'LegacyEdgeY', classMeta, LegacyEdge);
  setMetadataFor(LegacyEdgeOffset, 'LegacyEdgeOffset', classMeta, BackgroundPosition);
  setMetadataFor(LegacyPosition, 'LegacyPosition', classMeta, BackgroundPosition);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(BackgroundOrigin, 'BackgroundOrigin', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(BackgroundClip, 'BackgroundClip', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(BackgroundAttachment, 'BackgroundAttachment', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(CSSPosition, 'CSSPosition', classMeta);
  setMetadataFor(Edge, 'Edge', classMeta);
  setMetadataFor(EdgeXOrCenter, 'EdgeXOrCenter', classMeta, Edge);
  setMetadataFor(EdgeYOrCenter, 'EdgeYOrCenter', classMeta, Edge);
  setMetadataFor(EdgeX, 'EdgeX', classMeta, EdgeXOrCenter);
  setMetadataFor(EdgeXOffset, 'EdgeXOffset', classMeta);
  setMetadataFor(EdgeY, 'EdgeY', classMeta, EdgeYOrCenter);
  setMetadataFor(CenterX, 'CenterX', classMeta, EdgeXOrCenter);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(EdgeYOffset, 'EdgeYOffset', classMeta);
  setMetadataFor(CenterY, 'CenterY', classMeta, EdgeYOrCenter);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(Filter, 'Filter', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(FontSize, 'FontSize', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(MaxWidth, 'MaxWidth', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color);
  setMetadataFor(Stop, 'Stop', classMeta, Color);
  setMetadataFor(StopRange, 'StopRange', classMeta, Color);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta);
  setMetadataFor(Gradient_0, 'Gradient', interfaceMeta);
  setMetadataFor(CSSUrl, 'CSSUrl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  //endregion
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function get_$stableprop() {
    return 8;
  }
  function ComparableAttrsScope(wrapped) {
    this.wrapped_1 = wrapped;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.attributes_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0.classes_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$2 = LinkedHashSet_init_$Create$();
    tmp_1.listeners_1 = tmp$ret$2;
    this.style_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(ComparableAttrsScope).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(ComparableAttrsScope).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(ComparableAttrsScope).get_listeners_bn2kiy_k$ = function () {
    return this.listeners_1;
  };
  protoOf(ComparableAttrsScope).set_style_ch8v2y_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(ComparableAttrsScope).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ComparableAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.attributes_1;
    tmp0_set.put_3mhbri_k$(attr, value);
    this.wrapped_1.attr_z3nk29_k$(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).classes_m2xsyo_k$ = function (classes) {
    this.classes_1.addAll_oxxjjk_k$(classes);
  };
  protoOf(ComparableAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    this.wrapped_1.prop_mo7bqj_k$(update, value);
  };
  protoOf(ComparableAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    this.listeners_1.add_1j60pz_k$(listener);
    this.wrapped_1.registerEventListener_wc34s5_k$(listener);
  };
  protoOf(ComparableAttrsScope).style_sa2yps_k$ = function (builder) {
    var tmp0_elvis_lhs = this.style_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.style_1 = style;
    this.wrapped_1.style_sa2yps_k$(builder);
  };
  protoOf(ComparableAttrsScope).ref_r9zm5w_k$ = function (effect) {
    this.wrapped_1.ref_6wvjf3_k$(effect);
  };
  protoOf(ComparableAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_r9zm5w_k$(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.attributes_1, this.attributes_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.classes_1, this.classes_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.listeners_1, this.listeners_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.style_1, this.style_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.attributes_1);
    result = imul(31, result) + hashCode(this.classes_1) | 0;
    result = imul(31, result) + hashCode(this.listeners_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).classes_m2xsyo_k$ = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).style_sa2yps_k$ = function (builder) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_r9zm5w_k$ = function (effect) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_r9zm5w_k$(effect);
  };
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
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function JustifyItemsKeyword(value) {
    JustifyItems.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifyItemsPosition(value) {
    JustifyItemsKeyword.call(this, value);
    this.$stable_3 = 0;
  }
  function BaselineAlignment(baselineSet) {
    JustifyItems.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment(strategy, position) {
    JustifyItems.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Normal_22avww_k$ = function () {
    return new JustifyItemsKeyword('normal');
  };
  protoOf(Companion).get_Stretch_2brthg_k$ = function () {
    return new JustifyItemsKeyword('stretch');
  };
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return new JustifyItemsPosition('end');
  };
  protoOf(Companion).get_FlexStart_cfavq8_k$ = function () {
    return new JustifyItemsPosition('flex-start');
  };
  protoOf(Companion).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifyItemsPosition('flex-end');
  };
  protoOf(Companion).get_SelfStart_di8gbx_k$ = function () {
    return new JustifyItemsPosition('self-start');
  };
  protoOf(Companion).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifyItemsPosition('self-end');
  };
  protoOf(Companion).get_Left_wo5bw0_k$ = function () {
    return new JustifyItemsPosition('left');
  };
  protoOf(Companion).get_Right_igdsyb_k$ = function () {
    return new JustifyItemsPosition('right');
  };
  protoOf(Companion).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment(null);
  };
  protoOf(Companion).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion).Safe_362a2d_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion).Unsafe_he27se_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion).get_Inherit_a1a9e6_k$ = function () {
    return new JustifyItemsKeyword('inherit');
  };
  protoOf(Companion).get_Initial_a0h2v9_k$ = function () {
    return new JustifyItemsKeyword('initial');
  };
  protoOf(Companion).get_Revert_3t1tzh_k$ = function () {
    return new JustifyItemsKeyword('revert');
  };
  protoOf(Companion).get_Unset_ii4mhs_k$ = function () {
    return new JustifyItemsKeyword('unset');
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function JustifyItems(value) {
    Companion_getInstance();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.value_1;
  };
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.property_lwhspk_k$('justify-items', justifyItems);
  }
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.property_lwhspk_k$('justify-self', justifySelf);
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
  function get_$stableprop_8() {
    return 0;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function AlignSelfKeyword(value) {
    AlignSelf.call(this, value);
    this.$stable_2 = 0;
  }
  function AlignSelfPosition(value) {
    AlignSelfKeyword.call(this, value);
    this.$stable_3 = 0;
  }
  function BaselineAlignment_0(baselineSet) {
    AlignSelf.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment_0(strategy, position) {
    AlignSelf.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Auto_wnyn88_k$ = function () {
    return new AlignSelfKeyword('auto');
  };
  protoOf(Companion_0).get_Normal_22avww_k$ = function () {
    return new AlignSelfKeyword('normal');
  };
  protoOf(Companion_0).get_Stretch_2brthg_k$ = function () {
    return new AlignSelfKeyword('stretch');
  };
  protoOf(Companion_0).get_Center_3arb0i_k$ = function () {
    return new AlignSelfPosition('center');
  };
  protoOf(Companion_0).get_Start_ih4i6x_k$ = function () {
    return new AlignSelfPosition('start');
  };
  protoOf(Companion_0).get_End_18ju7i_k$ = function () {
    return new AlignSelfPosition('end');
  };
  protoOf(Companion_0).get_SelfStart_di8gbx_k$ = function () {
    return new AlignSelfPosition('self-start');
  };
  protoOf(Companion_0).get_SelfEnd_9ir8ka_k$ = function () {
    return new AlignSelfPosition('self-end');
  };
  protoOf(Companion_0).get_FlexStart_cfavq8_k$ = function () {
    return new AlignSelfPosition('flex-start');
  };
  protoOf(Companion_0).get_FlexEnd_fz7iu1_k$ = function () {
    return new AlignSelfPosition('flex-end');
  };
  protoOf(Companion_0).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment_0(null);
  };
  protoOf(Companion_0).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion_0).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion_0).Safe_sejl1k_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion_0).Unsafe_cgopgf_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion_0).get_Inherit_a1a9e6_k$ = function () {
    return new AlignSelfKeyword('inherit');
  };
  protoOf(Companion_0).get_Initial_a0h2v9_k$ = function () {
    return new AlignSelfKeyword('initial');
  };
  protoOf(Companion_0).get_Revert_3t1tzh_k$ = function () {
    return new AlignSelfKeyword('revert');
  };
  protoOf(Companion_0).get_Unset_ii4mhs_k$ = function () {
    return new AlignSelfKeyword('unset');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function AlignSelf(value) {
    Companion_getInstance_0();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(AlignSelf).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_10() {
    return 0;
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
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function JustifySelfKeyword(value) {
    JustifySelf.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifySelfPosition(value) {
    JustifySelfKeyword.call(this, value);
    this.$stable_3 = 0;
  }
  function BaselineAlignment_1(baselineSet) {
    JustifySelf.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment_1(strategy, position) {
    JustifySelf.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_Auto_wnyn88_k$ = function () {
    return new JustifySelfKeyword('auto');
  };
  protoOf(Companion_1).get_Normal_22avww_k$ = function () {
    return new JustifySelfKeyword('normal');
  };
  protoOf(Companion_1).get_Stretch_2brthg_k$ = function () {
    return new JustifySelfKeyword('stretch');
  };
  protoOf(Companion_1).get_Center_3arb0i_k$ = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_1).get_Start_ih4i6x_k$ = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_1).get_End_18ju7i_k$ = function () {
    return new JustifySelfPosition('end');
  };
  protoOf(Companion_1).get_SelfStart_di8gbx_k$ = function () {
    return new JustifySelfPosition('self-start');
  };
  protoOf(Companion_1).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifySelfPosition('self-end');
  };
  protoOf(Companion_1).get_FlexStart_cfavq8_k$ = function () {
    return new JustifySelfPosition('flex-start');
  };
  protoOf(Companion_1).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifySelfPosition('flex-end');
  };
  protoOf(Companion_1).get_Left_wo5bw0_k$ = function () {
    return new JustifySelfPosition('left');
  };
  protoOf(Companion_1).get_Right_igdsyb_k$ = function () {
    return new JustifySelfPosition('right');
  };
  protoOf(Companion_1).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment_1(null);
  };
  protoOf(Companion_1).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment_1(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion_1).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment_1(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion_1).Safe_8ikg8d_k$ = function (position) {
    return new OverflowAlignment_1(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion_1).Unsafe_23mdn8_k$ = function (position) {
    return new OverflowAlignment_1(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion_1).get_Inherit_a1a9e6_k$ = function () {
    return new JustifySelfKeyword('inherit');
  };
  protoOf(Companion_1).get_Initial_a0h2v9_k$ = function () {
    return new JustifySelfKeyword('initial');
  };
  protoOf(Companion_1).get_Revert_3t1tzh_k$ = function () {
    return new JustifySelfKeyword('revert');
  };
  protoOf(Companion_1).get_Unset_ii4mhs_k$ = function () {
    return new JustifySelfKeyword('unset');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function JustifySelf(value) {
    Companion_getInstance_1();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.value_1;
  };
  function alignSelf(_this__u8e3s4, alignSelf) {
    _this__u8e3s4.property_lwhspk_k$('align-self', alignSelf);
  }
  var BaselineSet_FIRST_instance;
  var BaselineSet_LAST_instance;
  function values() {
    return [BaselineSet_FIRST_getInstance(), BaselineSet_LAST_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FIRST':
        return BaselineSet_FIRST_getInstance();
      case 'LAST':
        return BaselineSet_LAST_getInstance();
      default:
        BaselineSet_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BaselineSet_entriesInitialized;
  function BaselineSet_initEntries() {
    if (BaselineSet_entriesInitialized)
      return Unit_getInstance();
    BaselineSet_entriesInitialized = true;
    BaselineSet_FIRST_instance = new BaselineSet('FIRST', 0);
    BaselineSet_LAST_instance = new BaselineSet('LAST', 1);
  }
  function BaselineSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue(_this__u8e3s4) {
    var self_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toValue.<anonymous>' call
    if (!(self_0 == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.lowercase' call
      var tmp0_lowercase = self_0.get_name_woqyms_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_lowercase;
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      tmp0_apply.append_ssq29y_k$(tmp$ret$1);
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.append_ssq29y_k$('baseline');
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  var OverflowStrategy_SAFE_instance;
  var OverflowStrategy_UNSAFE_instance;
  function values_0() {
    return [OverflowStrategy_SAFE_getInstance(), OverflowStrategy_UNSAFE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SAFE':
        return OverflowStrategy_SAFE_getInstance();
      case 'UNSAFE':
        return OverflowStrategy_UNSAFE_getInstance();
      default:
        OverflowStrategy_initEntries();
        THROW_ISE();
        break;
    }
  }
  var OverflowStrategy_entriesInitialized;
  function OverflowStrategy_initEntries() {
    if (OverflowStrategy_entriesInitialized)
      return Unit_getInstance();
    OverflowStrategy_entriesInitialized = true;
    OverflowStrategy_SAFE_instance = new OverflowStrategy('SAFE', 0);
    OverflowStrategy_UNSAFE_instance = new OverflowStrategy('UNSAFE', 1);
  }
  function OverflowStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue_0(_this__u8e3s4, position) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = _this__u8e3s4.get_name_woqyms_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    return tmp$ret$1 + ' ' + position;
  }
  function BaselineSet_FIRST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_FIRST_instance;
  }
  function BaselineSet_LAST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_LAST_instance;
  }
  function OverflowStrategy_SAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_SAFE_instance;
  }
  function OverflowStrategy_UNSAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_UNSAFE_instance;
  }
  function _get_value__a43j40_2($this) {
    return $this.value_1;
  }
  function Keyword(value) {
    BackgroundSize.call(this, value);
  }
  function Size(value) {
    BackgroundSize.call(this, value);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).of_7jtbf1_k$ = function (width) {
    return new Size('' + width);
  };
  protoOf(Companion_2).of_dzi368_k$ = function (width) {
    return new Size('' + width);
  };
  protoOf(Companion_2).of_hp4o5f_k$ = function (width, height) {
    return new Size('' + width + ' ' + height);
  };
  protoOf(Companion_2).of_kg6kbe_k$ = function (width, height) {
    return new Size('' + width + ' ' + height);
  };
  protoOf(Companion_2).of_vgs84m_k$ = function (width, height) {
    return new Size('' + width + ' ' + height);
  };
  protoOf(Companion_2).get_Cover_i8910u_k$ = function () {
    return new Keyword('cover');
  };
  protoOf(Companion_2).get_Contain_qhyalx_k$ = function () {
    return new Keyword('contain');
  };
  protoOf(Companion_2).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword('inherit');
  };
  protoOf(Companion_2).get_Initial_a0h2v9_k$ = function () {
    return new Keyword('initial');
  };
  protoOf(Companion_2).get_Revert_3t1tzh_k$ = function () {
    return new Keyword('revert');
  };
  protoOf(Companion_2).get_Unset_ii4mhs_k$ = function () {
    return new Keyword('unset');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function BackgroundSize(value) {
    Companion_getInstance_2();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundSize).toString = function () {
    return this.value_1;
  };
  function background(_this__u8e3s4, backgrounds) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = backgrounds.length === 0;
    tmp$ret$1 = !tmp$ret$0;
    if (tmp$ret$1) {
      _this__u8e3s4.property_ze5ozi_k$('background', joinToString(backgrounds, ', '));
    }
  }
  function get_$stableprop_16() {
    return 8;
  }
  function CSSBackground(image, color, repeat, position, size, origin, clip, attachment) {
    image = image === VOID ? null : image;
    color = color === VOID ? null : color;
    repeat = repeat === VOID ? null : repeat;
    position = position === VOID ? null : position;
    size = size === VOID ? null : size;
    origin = origin === VOID ? null : origin;
    clip = clip === VOID ? null : clip;
    attachment = attachment === VOID ? null : attachment;
    this.image_1 = image;
    this.color_1 = color;
    this.repeat_1 = repeat;
    this.position_1 = position;
    this.size_1 = size;
    this.origin_1 = origin;
    this.clip_1 = clip;
    this.attachment_1 = attachment;
    this.$stable_1 = 8;
  }
  protoOf(CSSBackground).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(CSSBackground).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSBackground).get_repeat_iydw9w_k$ = function () {
    return this.repeat_1;
  };
  protoOf(CSSBackground).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(CSSBackground).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(CSSBackground).get_origin_hq9xkf_k$ = function () {
    return this.origin_1;
  };
  protoOf(CSSBackground).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(CSSBackground).get_attachment_iduc30_k$ = function () {
    return this.attachment_1;
  };
  protoOf(CSSBackground).toString = function () {
    var tmp$ret$16;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$15;
    // Inline function 'kotlin.collections.buildListInternal' call
    var tmp$ret$14;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>' call
    var tmp0_safe_receiver = this.image_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$0 = tmp0_apply.add_1j60pz_k$(tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp1_safe_receiver = this.color_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$2 = tmp0_apply.add_1j60pz_k$(toString(tmp1_safe_receiver));
      tmp$ret$3 = tmp$ret$2;
    }
    var tmp2_safe_receiver = this.repeat_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$4 = tmp0_apply.add_1j60pz_k$(tmp2_safe_receiver);
      tmp$ret$5 = tmp$ret$4;
    }
    var tmp3_safe_receiver = this.position_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$6 = tmp0_apply.add_1j60pz_k$(tmp3_safe_receiver.toString());
      tmp$ret$7 = tmp$ret$6;
    }
    var tmp4_safe_receiver = this.size_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      if (this.position_1 == null) {
        tmp0_apply.add_1j60pz_k$(Companion_getInstance_5().of_fqnock_k$(Companion_getInstance_9().get_TopLeft_9xuhv7_k$()));
      }
      tmp0_apply.add_1j60pz_k$('/');
      tmp$ret$8 = tmp0_apply.add_1j60pz_k$(tmp4_safe_receiver.toString());
      tmp$ret$9 = tmp$ret$8;
    }
    var tmp5_safe_receiver = this.origin_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_apply.add_1j60pz_k$(tmp5_safe_receiver);
      var tmp;
      if (this.clip_1 == null) {
        tmp0_apply.add_1j60pz_k$(Companion_getInstance_7().get_BorderBox_q3yb4a_k$().toString());
        tmp = Unit_getInstance();
      }
      tmp$ret$10 = tmp;
    }
    var tmp6_safe_receiver = this.clip_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      if (this.origin_1 == null) {
        tmp0_apply.add_1j60pz_k$(Companion_getInstance_6().get_PaddingBox_ea98df_k$().toString());
      }
      tmp$ret$11 = tmp0_apply.add_1j60pz_k$(tmp6_safe_receiver);
      tmp$ret$12 = tmp$ret$11;
    }
    var tmp7_safe_receiver = this.attachment_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_apply.add_1j60pz_k$(tmp7_safe_receiver);
      tmp$ret$13 = Unit_getInstance();
    }
    tmp$ret$14 = tmp0_apply;
    tmp$ret$15 = tmp$ret$14.build_1k0s4u_k$();
    tmp$ret$16 = tmp$ret$15;
    return joinToString_0(tmp$ret$16, ' ');
  };
  protoOf(CSSBackground).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(CSSBackground).component2_7eebsb_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSBackground).component3_7eebsa_k$ = function () {
    return this.repeat_1;
  };
  protoOf(CSSBackground).component4_7eebs9_k$ = function () {
    return this.position_1;
  };
  protoOf(CSSBackground).component5_7eebs8_k$ = function () {
    return this.size_1;
  };
  protoOf(CSSBackground).component6_7eebs7_k$ = function () {
    return this.origin_1;
  };
  protoOf(CSSBackground).component7_7eebs6_k$ = function () {
    return this.clip_1;
  };
  protoOf(CSSBackground).component8_7eebs5_k$ = function () {
    return this.attachment_1;
  };
  protoOf(CSSBackground).copy_iox202_k$ = function (image, color, repeat, position, size, origin, clip, attachment) {
    return new CSSBackground(image, color, repeat, position, size, origin, clip, attachment);
  };
  protoOf(CSSBackground).copy$default_ialans_k$ = function (image, color, repeat, position, size, origin, clip, attachment, $super) {
    image = image === VOID ? this.image_1 : image;
    color = color === VOID ? this.color_1 : color;
    repeat = repeat === VOID ? this.repeat_1 : repeat;
    position = position === VOID ? this.position_1 : position;
    size = size === VOID ? this.size_1 : size;
    origin = origin === VOID ? this.origin_1 : origin;
    clip = clip === VOID ? this.clip_1 : clip;
    attachment = attachment === VOID ? this.attachment_1 : attachment;
    return $super === VOID ? this.copy_iox202_k$(image, color, repeat, position, size, origin, clip, attachment) : $super.copy_iox202_k$.call(this, image, color, repeat, position, size, origin, clip, attachment);
  };
  protoOf(CSSBackground).hashCode = function () {
    var result = this.image_1 == null ? 0 : hashCode(this.image_1);
    result = imul(result, 31) + (this.color_1 == null ? 0 : hashCode(this.color_1)) | 0;
    result = imul(result, 31) + (this.repeat_1 == null ? 0 : hashCode(this.repeat_1)) | 0;
    result = imul(result, 31) + (this.position_1 == null ? 0 : hashCode(this.position_1)) | 0;
    result = imul(result, 31) + (this.size_1 == null ? 0 : hashCode(this.size_1)) | 0;
    result = imul(result, 31) + (this.origin_1 == null ? 0 : hashCode(this.origin_1)) | 0;
    result = imul(result, 31) + (this.clip_1 == null ? 0 : hashCode(this.clip_1)) | 0;
    result = imul(result, 31) + (this.attachment_1 == null ? 0 : hashCode(this.attachment_1)) | 0;
    return result;
  };
  protoOf(CSSBackground).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSBackground))
      return false;
    var tmp0_other_with_cast = other instanceof CSSBackground ? other : THROW_CCE();
    if (!equals(this.image_1, tmp0_other_with_cast.image_1))
      return false;
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    if (!equals(this.repeat_1, tmp0_other_with_cast.repeat_1))
      return false;
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.origin_1, tmp0_other_with_cast.origin_1))
      return false;
    if (!equals(this.clip_1, tmp0_other_with_cast.clip_1))
      return false;
    if (!equals(this.attachment_1, tmp0_other_with_cast.attachment_1))
      return false;
    return true;
  };
  function _get_value__a43j40_3($this) {
    return $this.value_1;
  }
  function Keyword_0(value) {
    BackgroundImage.call(this, value);
  }
  function Url(url) {
    BackgroundImage.call(this, url.toString());
  }
  function Gradient(gradient) {
    BackgroundImage.call(this, gradient.toString());
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).of_5r4von_k$ = function (url) {
    return new Url(url);
  };
  protoOf(Companion_3).of_24wexh_k$ = function (gradient) {
    return new Gradient(gradient);
  };
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_0('inherit');
  };
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_0('initial');
  };
  protoOf(Companion_3).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_0('revert');
  };
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_0('unset');
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function BackgroundImage(value) {
    Companion_getInstance_3();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundImage).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_18() {
    return 0;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function _get_value__a43j40_4($this) {
    return $this.value_1;
  }
  function Keyword_1(value) {
    BackgroundRepeat.call(this, value);
    this.$stable_2 = 0;
  }
  function RepeatStyle(value) {
    Keyword_1.call(this, value);
    this.$stable_3 = 0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_RepeatX_o4yei4_k$ = function () {
    return new Keyword_1('repeat-x');
  };
  protoOf(Companion_4).get_RepeatY_o4yei3_k$ = function () {
    return new Keyword_1('repeat-y');
  };
  protoOf(Companion_4).get_Repeat_3sxzno_k$ = function () {
    return new RepeatStyle('repeat');
  };
  protoOf(Companion_4).get_Space_ih1xvh_k$ = function () {
    return new RepeatStyle('space');
  };
  protoOf(Companion_4).get_Round_ighxdx_k$ = function () {
    return new RepeatStyle('round');
  };
  protoOf(Companion_4).get_NoRepeat_ko4dp7_k$ = function () {
    return new RepeatStyle('no-repeat');
  };
  protoOf(Companion_4).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_1('inherit');
  };
  protoOf(Companion_4).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_1('initial');
  };
  protoOf(Companion_4).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_1('revert');
  };
  protoOf(Companion_4).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_1('unset');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function BackgroundRepeat(value) {
    Companion_getInstance_4();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundRepeat).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_21() {
    return 0;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function get_$stableprop_23() {
    return 0;
  }
  function _get_value__a43j40_5($this) {
    return $this.value_1;
  }
  function Keyword_2(value) {
    BackgroundPosition.call(this, value);
  }
  function Position(position) {
    BackgroundPosition.call(this, '' + position);
  }
  function LegacyEdge(value) {
    BackgroundPosition.call(this, value);
    this.$stable_2 = 0;
  }
  function LegacyEdgeX(value) {
    LegacyEdge.call(this, value);
    this.$stable_3 = 0;
  }
  function LegacyEdgeY(value) {
    LegacyEdge.call(this, value);
    this.$stable_3 = 0;
  }
  function LegacyEdgeOffset(edge, offset) {
    edge = edge === VOID ? null : edge;
    BackgroundPosition.call(this, '' + edge + ' ' + offset);
  }
  function LegacyPosition(x, y) {
    BackgroundPosition.call(this, '' + x + ' ' + y);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).of_8zywv4_k$ = function (xAnchor, x) {
    return new LegacyEdgeOffset(xAnchor, x);
  };
  protoOf(Companion_5).of_9z87vl_k$ = function (yAnchor, y) {
    return new LegacyEdgeOffset(yAnchor, y);
  };
  protoOf(Companion_5).of_dby99m_k$ = function (xAnchor, x, yAnchor, y) {
    return new LegacyPosition(new LegacyEdgeOffset(xAnchor, x), new LegacyEdgeOffset(yAnchor, y));
  };
  protoOf(Companion_5).of_hp4o5f_k$ = function (x, y) {
    return this.of_dby99m_k$(this.get_Left_wo5bw0_k$(), x, this.get_Top_18jj1w_k$(), y);
  };
  protoOf(Companion_5).of_fqnock_k$ = function (position) {
    return new Position(position);
  };
  protoOf(Companion_5).get_Top_18jj1w_k$ = function () {
    return new LegacyEdgeY('top');
  };
  protoOf(Companion_5).get_Bottom_3m75bg_k$ = function () {
    return new LegacyEdgeY('bottom');
  };
  protoOf(Companion_5).get_Left_wo5bw0_k$ = function () {
    return new LegacyEdgeX('left');
  };
  protoOf(Companion_5).get_Right_igdsyb_k$ = function () {
    return new LegacyEdgeX('right');
  };
  protoOf(Companion_5).get_Center_3arb0i_k$ = function () {
    return new Keyword_2('center');
  };
  protoOf(Companion_5).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_2('inherit');
  };
  protoOf(Companion_5).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_2('initial');
  };
  protoOf(Companion_5).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_2('revert');
  };
  protoOf(Companion_5).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_2('unset');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function BackgroundPosition(value) {
    Companion_getInstance_5();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundPosition).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_6($this) {
    return $this.value_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_BorderBox_q3yb4a_k$ = function () {
    return new BackgroundOrigin('border-box');
  };
  protoOf(Companion_6).get_PaddingBox_ea98df_k$ = function () {
    return new BackgroundOrigin('padding-box');
  };
  protoOf(Companion_6).get_ContentBox_h63h2z_k$ = function () {
    return new BackgroundOrigin('content-box');
  };
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = function () {
    return new BackgroundOrigin('inherit');
  };
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = function () {
    return new BackgroundOrigin('initial');
  };
  protoOf(Companion_6).get_Revert_3t1tzh_k$ = function () {
    return new BackgroundOrigin('revert');
  };
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = function () {
    return new BackgroundOrigin('unset');
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function BackgroundOrigin(value) {
    Companion_getInstance_6();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundOrigin).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_7($this) {
    return $this.value_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_BorderBox_q3yb4a_k$ = function () {
    return new BackgroundClip('border-box');
  };
  protoOf(Companion_7).get_PaddingBox_ea98df_k$ = function () {
    return new BackgroundClip('padding-box');
  };
  protoOf(Companion_7).get_ContentBox_h63h2z_k$ = function () {
    return new BackgroundClip('content-box');
  };
  protoOf(Companion_7).get_Text_woag7q_k$ = function () {
    return new BackgroundClip('text');
  };
  protoOf(Companion_7).get_Inherit_a1a9e6_k$ = function () {
    return new BackgroundClip('inherit');
  };
  protoOf(Companion_7).get_Initial_a0h2v9_k$ = function () {
    return new BackgroundClip('initial');
  };
  protoOf(Companion_7).get_Revert_3t1tzh_k$ = function () {
    return new BackgroundClip('revert');
  };
  protoOf(Companion_7).get_Unset_ii4mhs_k$ = function () {
    return new BackgroundClip('unset');
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function get_$stableprop_26() {
    return 0;
  }
  function BackgroundClip(value) {
    Companion_getInstance_7();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundClip).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_8($this) {
    return $this.value_1;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).get_Scroll_48xiie_k$ = function () {
    return new BackgroundAttachment('scroll');
  };
  protoOf(Companion_8).get_Fixed_i9smcr_k$ = function () {
    return new BackgroundAttachment('fixed');
  };
  protoOf(Companion_8).get_Local_id6s6a_k$ = function () {
    return new BackgroundAttachment('local');
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    return new BackgroundAttachment('inherit');
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    return new BackgroundAttachment('initial');
  };
  protoOf(Companion_8).get_Revert_3t1tzh_k$ = function () {
    return new BackgroundAttachment('revert');
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    return new BackgroundAttachment('unset');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function BackgroundAttachment(value) {
    Companion_getInstance_8();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundAttachment).toString = function () {
    return this.value_1;
  };
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = lineStyle;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.property_ze5ozi_k$('border-style', tmp$ret$2);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.property_lwhspk_k$('border-top', tmp$ret$0);
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function boxShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.boxShadow.<anonymous>' call
    if (inset) {
      tmp0_apply.append_ssq29y_k$('inset');
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.append_t8pm91_k$(offsetX);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    tmp0_apply.append_t8pm91_k$(offsetY);
    if (!(blurRadius == null)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(48));
      }
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(spreadRadius);
    }
    if (!(color == null)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(color);
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('box-shadow', value);
  }
  function _get_value__a43j40_9($this) {
    return $this.value_1;
  }
  function CSSPosition_init_$Init$(x, y, $this) {
    x = x === VOID ? get_percent(50) : x;
    y = y === VOID ? get_percent(50) : y;
    CSSPosition.call($this, '' + x + ' ' + y);
    return $this;
  }
  function CSSPosition_init_$Create$(x, y) {
    return CSSPosition_init_$Init$(x, y, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_0(xAnchor, $this) {
    CSSPosition.call($this, '' + xAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$_0(xAnchor) {
    return CSSPosition_init_$Init$_0(xAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_1(yAnchor, $this) {
    CSSPosition.call($this, 'center ' + yAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$_1(yAnchor) {
    return CSSPosition_init_$Init$_1(yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_2(xAnchor, yAnchor, $this) {
    CSSPosition.call($this, '' + xAnchor + ' ' + yAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$_2(xAnchor, yAnchor) {
    return CSSPosition_init_$Init$_2(xAnchor, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_3(xAnchor, xOffset, $this) {
    CSSPosition.call($this, (new EdgeXOffset(xAnchor, xOffset)).toString());
    return $this;
  }
  function CSSPosition_init_$Create$_3(xAnchor, xOffset) {
    return CSSPosition_init_$Init$_3(xAnchor, xOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_4(xOffset, $this) {
    CSSPosition.call($this, xOffset.toString());
    return $this;
  }
  function CSSPosition_init_$Create$_4(xOffset) {
    return CSSPosition_init_$Init$_4(xOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_5(yAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_11(Companion_getInstance_10().get_CenterX_v8efdy_k$(), yAnchor, yOffset, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_5(yAnchor, yOffset) {
    return CSSPosition_init_$Init$_5(yAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_6(yOffset, $this) {
    CSSPosition_init_$Init$_12(Companion_getInstance_10().get_CenterX_v8efdy_k$(), yOffset, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_6(yOffset) {
    return CSSPosition_init_$Init$_6(yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_7(xCenter, y, $this) {
    CSSPosition.call($this, '' + xCenter + ' ' + y);
    return $this;
  }
  function CSSPosition_init_$Create$_7(xCenter, y) {
    return CSSPosition_init_$Init$_7(xCenter, y, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_8(x, yCenter, $this) {
    CSSPosition.call($this, '' + x + ' ' + yCenter);
    return $this;
  }
  function CSSPosition_init_$Create$_8(x, yCenter) {
    return CSSPosition_init_$Init$_8(x, yCenter, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_9(xAnchor, xOffset, yAnchor, $this) {
    CSSPosition_init_$Init$_10(new EdgeXOffset(xAnchor, xOffset), yAnchor, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_9(xAnchor, xOffset, yAnchor) {
    return CSSPosition_init_$Init$_9(xAnchor, xOffset, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_10(xOffset, yAnchor, $this) {
    CSSPosition.call($this, '' + xOffset + ' ' + yAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$_10(xOffset, yAnchor) {
    return CSSPosition_init_$Init$_10(xOffset, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_11(xAnchor, yAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_12(xAnchor, new EdgeYOffset(yAnchor, yOffset), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_11(xAnchor, yAnchor, yOffset) {
    return CSSPosition_init_$Init$_11(xAnchor, yAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_12(xAnchor, yOffset, $this) {
    CSSPosition.call($this, '' + xAnchor + ' ' + yOffset);
    return $this;
  }
  function CSSPosition_init_$Create$_12(xAnchor, yOffset) {
    return CSSPosition_init_$Init$_12(xAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_13(xAnchor, xOffset, yAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_14(new EdgeXOffset(xAnchor, xOffset), new EdgeYOffset(yAnchor, yOffset), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_13(xAnchor, xOffset, yAnchor, yOffset) {
    return CSSPosition_init_$Init$_13(xAnchor, xOffset, yAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_14(xAnchor, yAnchor, $this) {
    CSSPosition.call($this, '' + xAnchor + ' ' + yAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$_14(xAnchor, yAnchor) {
    return CSSPosition_init_$Init$_14(xAnchor, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_Top_18jj1w_k$ = function () {
    return CSSPosition_init_$Create$_1(Companion_getInstance_10().get_Top_18jj1w_k$());
  };
  protoOf(Companion_9).get_TopRight_o46i0g_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_10().get_Right_igdsyb_k$(), Companion_getInstance_10().get_Top_18jj1w_k$());
  };
  protoOf(Companion_9).get_Right_igdsyb_k$ = function () {
    return CSSPosition_init_$Create$_0(Companion_getInstance_10().get_Right_igdsyb_k$());
  };
  protoOf(Companion_9).get_BottomRight_v7b1go_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_10().get_Right_igdsyb_k$(), Companion_getInstance_10().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_9).get_Bottom_3m75bg_k$ = function () {
    return CSSPosition_init_$Create$_1(Companion_getInstance_10().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_9).get_BottomLeft_f1aa2t_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_10().get_Left_wo5bw0_k$(), Companion_getInstance_10().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_9).get_Left_wo5bw0_k$ = function () {
    return CSSPosition_init_$Create$_0(Companion_getInstance_10().get_Left_wo5bw0_k$());
  };
  protoOf(Companion_9).get_TopLeft_9xuhv7_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_10().get_Left_wo5bw0_k$(), Companion_getInstance_10().get_Top_18jj1w_k$());
  };
  protoOf(Companion_9).get_Center_3arb0i_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_10().get_CenterX_v8efdy_k$(), Companion_getInstance_10().get_CenterY_v8efdx_k$());
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function CSSPosition(value) {
    Companion_getInstance_9();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CSSPosition).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_29() {
    return 0;
  }
  function EdgeXOrCenter(value) {
    Edge.call(this, value);
    this.$stable_2 = 0;
  }
  function get_$stableprop_30() {
    return 0;
  }
  function EdgeYOrCenter(value) {
    Edge.call(this, value);
    this.$stable_2 = 0;
  }
  function get_$stableprop_31() {
    return 0;
  }
  function EdgeX(value) {
    EdgeXOrCenter.call(this, value);
    this.$stable_3 = 0;
  }
  protoOf(EdgeX).invoke_hkq2lq_k$ = function (offset) {
    return new EdgeXOffset(this, offset);
  };
  function get_$stableprop_32() {
    return 8;
  }
  function EdgeXOffset(edgeX, offset) {
    this.edgeX_1 = edgeX;
    this.offset_1 = offset;
    this.$stable_1 = 8;
  }
  protoOf(EdgeXOffset).get_edgeX_iqqp76_k$ = function () {
    return this.edgeX_1;
  };
  protoOf(EdgeXOffset).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(EdgeXOffset).toString = function () {
    return '' + this.edgeX_1 + ' ' + this.offset_1;
  };
  function get_$stableprop_33() {
    return 0;
  }
  function EdgeY(value) {
    EdgeYOrCenter.call(this, value);
    this.$stable_3 = 0;
  }
  protoOf(EdgeY).invoke_hkq2lq_k$ = function (offset) {
    return new EdgeYOffset(this, offset);
  };
  function get_$stableprop_34() {
    return 0;
  }
  function CenterX() {
    EdgeXOrCenter.call(this, 'center');
    this.$stable_3 = 0;
  }
  function _get_value__a43j40_10($this) {
    return $this.value_1;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Top_18jj1w_k$ = function () {
    return new EdgeY('top');
  };
  protoOf(Companion_10).get_Bottom_3m75bg_k$ = function () {
    return new EdgeY('bottom');
  };
  protoOf(Companion_10).get_Left_wo5bw0_k$ = function () {
    return new EdgeX('left');
  };
  protoOf(Companion_10).get_Right_igdsyb_k$ = function () {
    return new EdgeX('right');
  };
  protoOf(Companion_10).get_CenterX_v8efdy_k$ = function () {
    return new CenterX();
  };
  protoOf(Companion_10).get_CenterY_v8efdx_k$ = function () {
    return new CenterY();
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_$stableprop_35() {
    return 0;
  }
  function Edge(value) {
    Companion_getInstance_10();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Edge).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_36() {
    return 8;
  }
  function EdgeYOffset(edgeY, offset) {
    this.edgeY_1 = edgeY;
    this.offset_1 = offset;
    this.$stable_1 = 8;
  }
  protoOf(EdgeYOffset).get_edgeY_iqqp77_k$ = function () {
    return this.edgeY_1;
  };
  protoOf(EdgeYOffset).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(EdgeYOffset).toString = function () {
    return '' + this.edgeY_1 + ' ' + this.offset_1;
  };
  function get_$stableprop_37() {
    return 0;
  }
  function CenterY() {
    EdgeYOrCenter.call(this, 'center');
    this.$stable_3 = 0;
  }
  function get_$stableprop_38() {
    return 0;
  }
  function ComparableStyleScope() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.properties_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.variables_1 = tmp$ret$1;
    this.$stable_1 = 0;
  }
  protoOf(ComparableStyleScope).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(ComparableStyleScope).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(ComparableStyleScope).property_lwhspk_k$ = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.properties_1;
    var tmp1_set = toString(value);
    tmp0_set.put_3mhbri_k$(propertyName, tmp1_set);
  };
  protoOf(ComparableStyleScope).variable_3743rz_k$ = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.variables_1;
    var tmp1_set = toString(value);
    tmp0_set.put_3mhbri_k$(variableName, tmp1_set);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.properties_1, other.properties_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.variables_1, other.variables_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(31, result) + hashCode(this.variables_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.properties_1;
    tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = _this__u8e3s4.variables_1;
      tmp$ret$1 = !tmp1_isNotEmpty.isEmpty_y1axqb_k$();
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function _get_value__a43j40_11($this) {
    return $this.value_1;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).get_Auto_wnyn88_k$ = function () {
    return new Cursor('auto');
  };
  protoOf(Companion_11).get_Default_goqax4_k$ = function () {
    return new Cursor('default');
  };
  protoOf(Companion_11).get_None_wo6tgh_k$ = function () {
    return new Cursor('none');
  };
  protoOf(Companion_11).get_ContextMenu_v99p0b_k$ = function () {
    return new Cursor('context-menu');
  };
  protoOf(Companion_11).get_Help_wo2s2y_k$ = function () {
    return new Cursor('help');
  };
  protoOf(Companion_11).get_Pointer_m64vg4_k$ = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_11).get_Progress_nqna52_k$ = function () {
    return new Cursor('progress');
  };
  protoOf(Companion_11).get_Wait_woc9um_k$ = function () {
    return new Cursor('wait');
  };
  protoOf(Companion_11).get_Cell_wnzl57_k$ = function () {
    return new Cursor('cell');
  };
  protoOf(Companion_11).get_Crosshair_69627b_k$ = function () {
    return new Cursor('crosshair');
  };
  protoOf(Companion_11).get_Text_woag7q_k$ = function () {
    return new Cursor('text');
  };
  protoOf(Companion_11).get_VerticalText_6nu4a4_k$ = function () {
    return new Cursor('vertical-text');
  };
  protoOf(Companion_11).get_Alias_i73953_k$ = function () {
    return new Cursor('alias');
  };
  protoOf(Companion_11).get_Copy_wnzsny_k$ = function () {
    return new Cursor('copy');
  };
  protoOf(Companion_11).get_Move_wo66nu_k$ = function () {
    return new Cursor('move');
  };
  protoOf(Companion_11).get_NoDrop_21hmk9_k$ = function () {
    return new Cursor('no-drop');
  };
  protoOf(Companion_11).get_NotAllowed_mobp4y_k$ = function () {
    return new Cursor('not-allowed');
  };
  protoOf(Companion_11).get_Grab_wo2egl_k$ = function () {
    return new Cursor('grab');
  };
  protoOf(Companion_11).get_Grabbing_taamx7_k$ = function () {
    return new Cursor('grabbing');
  };
  protoOf(Companion_11).get_AllScroll_y9eih1_k$ = function () {
    return new Cursor('all-scroll');
  };
  protoOf(Companion_11).get_ColumnResize_w27e5_k$ = function () {
    return new Cursor('col-resize');
  };
  protoOf(Companion_11).get_RowResize_dbunq3_k$ = function () {
    return new Cursor('row-resize');
  };
  protoOf(Companion_11).get_NResize_kz2xjb_k$ = function () {
    return new Cursor('n-resize');
  };
  protoOf(Companion_11).get_NeResize_pdt3gs_k$ = function () {
    return new Cursor('ne-resize');
  };
  protoOf(Companion_11).get_EResize_b0fdlc_k$ = function () {
    return new Cursor('e-resize');
  };
  protoOf(Companion_11).get_SeResize_nbwu41_k$ = function () {
    return new Cursor('se-resize');
  };
  protoOf(Companion_11).get_SResize_im7kea_k$ = function () {
    return new Cursor('s-resize');
  };
  protoOf(Companion_11).get_SwResize_rrw3z5_k$ = function () {
    return new Cursor('sw-resize');
  };
  protoOf(Companion_11).get_WResize_uxqhha_k$ = function () {
    return new Cursor('w-resize');
  };
  protoOf(Companion_11).get_NwResize_ppzume_k$ = function () {
    return new Cursor('nw-resize');
  };
  protoOf(Companion_11).get_EwResize_kla901_k$ = function () {
    return new Cursor('ew-resize');
  };
  protoOf(Companion_11).get_NsResize_wzla9q_k$ = function () {
    return new Cursor('ns-resize');
  };
  protoOf(Companion_11).get_NeswResize_x625qw_k$ = function () {
    return new Cursor('nesw-resize');
  };
  protoOf(Companion_11).get_NwseResize_c95994_k$ = function () {
    return new Cursor('nwse-resize');
  };
  protoOf(Companion_11).get_ZoomIn_7qsf41_k$ = function () {
    return new Cursor('zoom-in');
  };
  protoOf(Companion_11).get_ZoomOut_qz4z8y_k$ = function () {
    return new Cursor('zoom-out');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function get_$stableprop_39() {
    return 0;
  }
  function Cursor(value) {
    Companion_getInstance_11();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.value_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.property_lwhspk_k$('cursor', cursor);
  }
  function _get_value__a43j40_12($this) {
    return $this.value_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.None_1 = new Filter('none');
    this.Inherit_1 = new Filter('inherit');
    this.Initial_1 = new Filter('initial');
    this.Revert_1 = new Filter('revert');
    this.Unset_1 = new Filter('unset');
  }
  protoOf(Companion_12).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = function () {
    return this.Inherit_1;
  };
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = function () {
    return this.Initial_1;
  };
  protoOf(Companion_12).get_Revert_3t1tzh_k$ = function () {
    return this.Revert_1;
  };
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = function () {
    return this.Unset_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function get_$stableprop_40() {
    return 0;
  }
  function Filter(value) {
    Companion_getInstance_12();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Filter).toString = function () {
    return this.value_1;
  };
  function backdropFilter(_this__u8e3s4, backdropFilter) {
    _this__u8e3s4.property_lwhspk_k$('backdrop-filter', backdropFilter);
  }
  function flexBasis(_this__u8e3s4, value) {
    _this__u8e3s4.property_lwhspk_k$('flex-basis', value);
  }
  function _get_value__a43j40_13($this) {
    return $this.value_1;
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).get_Thin_woai2q_k$ = function () {
    return new FontWeight('100');
  };
  protoOf(Companion_13).get_ExtraLight_ov7yxb_k$ = function () {
    return new FontWeight('200');
  };
  protoOf(Companion_13).get_Light_id31e5_k$ = function () {
    return new FontWeight('300');
  };
  protoOf(Companion_13).get_Medium_1fiba6_k$ = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_13).get_SemiBold_aid1c4_k$ = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_13).get_ExtraBold_xklwd0_k$ = function () {
    return new FontWeight('800');
  };
  protoOf(Companion_13).get_Black_i7mvue_k$ = function () {
    return new FontWeight('900');
  };
  protoOf(Companion_13).get_ExtraBlack_oprtdk_k$ = function () {
    return new FontWeight('950');
  };
  protoOf(Companion_13).get_Normal_22avww_k$ = function () {
    return new FontWeight('normal');
  };
  protoOf(Companion_13).get_Bold_wnz5ke_k$ = function () {
    return new FontWeight('bold');
  };
  protoOf(Companion_13).get_Lighter_vm6n22_k$ = function () {
    return new FontWeight('lighter');
  };
  protoOf(Companion_13).get_Bolder_3mclb9_k$ = function () {
    return new FontWeight('bolder');
  };
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = function () {
    return new FontWeight('inherit');
  };
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = function () {
    return new FontWeight('initial');
  };
  protoOf(Companion_13).get_Revert_3t1tzh_k$ = function () {
    return new FontWeight('revert');
  };
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = function () {
    return new FontWeight('unset');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function get_$stableprop_41() {
    return 0;
  }
  function FontWeight(value) {
    Companion_getInstance_13();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.value_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.property_lwhspk_k$('font-weight', weight);
  }
  function fontSize(_this__u8e3s4, size) {
    _this__u8e3s4.property_lwhspk_k$('font-size', size);
  }
  function _get_value__a43j40_14($this) {
    return $this.value_1;
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).get_XXSmall_dp2rr6_k$ = function () {
    return new FontSize('xx-small');
  };
  protoOf(Companion_14).get_XSmall_6d9fo8_k$ = function () {
    return new FontSize('x-small');
  };
  protoOf(Companion_14).get_Small_ih014u_k$ = function () {
    return new FontSize('small');
  };
  protoOf(Companion_14).get_Medium_1fiba6_k$ = function () {
    return new FontSize('medium');
  };
  protoOf(Companion_14).get_Large_icy5ma_k$ = function () {
    return new FontSize('large');
  };
  protoOf(Companion_14).get_XLarge_697k5o_k$ = function () {
    return new FontSize('x-large');
  };
  protoOf(Companion_14).get_XXLarge_dt4n9q_k$ = function () {
    return new FontSize('xx-large');
  };
  protoOf(Companion_14).get_Smaller_5wbdat_k$ = function () {
    return new FontSize('smaller');
  };
  protoOf(Companion_14).get_Larger_wiegw_k$ = function () {
    return new FontSize('larger');
  };
  protoOf(Companion_14).get_Inherit_a1a9e6_k$ = function () {
    return new FontSize('inherit');
  };
  protoOf(Companion_14).get_Initial_a0h2v9_k$ = function () {
    return new FontSize('initial');
  };
  protoOf(Companion_14).get_Revert_3t1tzh_k$ = function () {
    return new FontSize('revert');
  };
  protoOf(Companion_14).get_Unset_ii4mhs_k$ = function () {
    return new FontSize('unset');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function get_$stableprop_42() {
    return 0;
  }
  function FontSize(value) {
    Companion_getInstance_14();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(FontSize).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_15($this) {
    return $this.value_1;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.FitContent_1 = new MaxWidth('fit-content');
    this.MaxContext_1 = new MaxWidth('max-content');
    this.MinContent_1 = new MaxWidth('min-content');
    this.None_1 = new MaxWidth('none');
    this.Inherit_1 = new MaxWidth('inherit');
    this.Initial_1 = new MaxWidth('initial');
    this.Revert_1 = new MaxWidth('revert');
    this.Unset_1 = new MaxWidth('unset');
  }
  protoOf(Companion_15).get_FitContent_e3ump_k$ = function () {
    return this.FitContent_1;
  };
  protoOf(Companion_15).get_MaxContext_n323zg_k$ = function () {
    return this.MaxContext_1;
  };
  protoOf(Companion_15).get_MinContent_hspenk_k$ = function () {
    return this.MinContent_1;
  };
  protoOf(Companion_15).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_15).get_Inherit_a1a9e6_k$ = function () {
    return this.Inherit_1;
  };
  protoOf(Companion_15).get_Initial_a0h2v9_k$ = function () {
    return this.Initial_1;
  };
  protoOf(Companion_15).get_Revert_3t1tzh_k$ = function () {
    return this.Revert_1;
  };
  protoOf(Companion_15).get_Unset_ii4mhs_k$ = function () {
    return this.Unset_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function get_$stableprop_43() {
    return 0;
  }
  function MaxWidth(value) {
    Companion_getInstance_15();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(MaxWidth).toString = function () {
    return this.value_1;
  };
  function maxWidth(_this__u8e3s4, maxWidth) {
    _this__u8e3s4.property_lwhspk_k$('max-width', maxWidth);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('padding-inline', joinToString(value, ' '));
  }
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.property_lwhspk_k$('object-fit', objectFit);
  }
  function _get_value__a43j40_16($this) {
    return $this.value_1;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).get_Contain_qhyalx_k$ = function () {
    return new ObjectFit('contain');
  };
  protoOf(Companion_16).get_Cover_i8910u_k$ = function () {
    return new ObjectFit('cover');
  };
  protoOf(Companion_16).get_Fill_wo1l2k_k$ = function () {
    return new ObjectFit('fill');
  };
  protoOf(Companion_16).get_None_wo6tgh_k$ = function () {
    return new ObjectFit('none');
  };
  protoOf(Companion_16).get_ScaleDown_ala7ur_k$ = function () {
    return new ObjectFit('scale-down');
  };
  protoOf(Companion_16).get_Inherit_a1a9e6_k$ = function () {
    return new ObjectFit('inherit');
  };
  protoOf(Companion_16).get_Initial_a0h2v9_k$ = function () {
    return new ObjectFit('initial');
  };
  protoOf(Companion_16).get_Revert_3t1tzh_k$ = function () {
    return new ObjectFit('revert');
  };
  protoOf(Companion_16).get_Unset_ii4mhs_k$ = function () {
    return new ObjectFit('unset');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function get_$stableprop_44() {
    return 0;
  }
  function ObjectFit(value) {
    Companion_getInstance_16();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.value_1;
  };
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.property_lwhspk_k$('outline', tmp$ret$0);
  }
  function get_$stableprop_45() {
    return 8;
  }
  function CSSOutline() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(CSSOutline).set_width_63m8iw_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSOutline).set_style_eysa9r_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSOutline).set_color_ynz953_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.width_1, other.width_1) ? equals(this.style_1, other.style_1) : false) ? equals(this.color_1, other.color_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.color_1, this.style_1, this.width_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.width_1 = $width;
      $this$outline.style_1 = $style;
      $this$outline.color_1 = $color;
      return Unit_getInstance();
    };
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.property_lwhspk_k$('white-space', whiteSpace);
  }
  function _get_value__a43j40_17($this) {
    return $this.value_1;
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).get_Underline_oo7egz_k$ = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_17).get_Overline_lz0ci7_k$ = function () {
    return new TextDecorationLine('overline');
  };
  protoOf(Companion_17).get_LineThrough_pr9ajs_k$ = function () {
    return new TextDecorationLine('line-through');
  };
  protoOf(Companion_17).get_None_wo6tgh_k$ = function () {
    return new TextDecorationLine('none');
  };
  protoOf(Companion_17).get_Inherit_a1a9e6_k$ = function () {
    return new TextDecorationLine('inherit');
  };
  protoOf(Companion_17).get_Initial_a0h2v9_k$ = function () {
    return new TextDecorationLine('initial');
  };
  protoOf(Companion_17).get_Revert_3t1tzh_k$ = function () {
    return new TextDecorationLine('revert');
  };
  protoOf(Companion_17).get_Unset_ii4mhs_k$ = function () {
    return new TextDecorationLine('unset');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function get_$stableprop_46() {
    return 0;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_17();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.value_1;
  };
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.property_ze5ozi_k$('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  function _get_value__a43j40_18($this) {
    return $this.value_1;
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).get_None_wo6tgh_k$ = function () {
    return new UserSelect('none');
  };
  protoOf(Companion_18).get_Auto_wnyn88_k$ = function () {
    return new UserSelect('auto');
  };
  protoOf(Companion_18).get_Text_woag7q_k$ = function () {
    return new UserSelect('text');
  };
  protoOf(Companion_18).get_Contain_qhyalx_k$ = function () {
    return new UserSelect('contain');
  };
  protoOf(Companion_18).get_All_18jx7s_k$ = function () {
    return new UserSelect('all');
  };
  protoOf(Companion_18).get_Inherit_a1a9e6_k$ = function () {
    return new UserSelect('inherit');
  };
  protoOf(Companion_18).get_Initial_a0h2v9_k$ = function () {
    return new UserSelect('initial');
  };
  protoOf(Companion_18).get_Revert_3t1tzh_k$ = function () {
    return new UserSelect('revert');
  };
  protoOf(Companion_18).get_Unset_ii4mhs_k$ = function () {
    return new UserSelect('unset');
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function get_$stableprop_47() {
    return 0;
  }
  function UserSelect(value) {
    Companion_getInstance_18();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.value_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.property_lwhspk_k$('user-select', userSelect);
  }
  function _get_value__a43j40_19($this) {
    return $this.value_1;
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).get_Left_wo5bw0_k$ = function () {
    return new TextAlign('left');
  };
  protoOf(Companion_19).get_Right_igdsyb_k$ = function () {
    return new TextAlign('right');
  };
  protoOf(Companion_19).get_Center_3arb0i_k$ = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_19).get_Justify_84qi6f_k$ = function () {
    return new TextAlign('justify');
  };
  protoOf(Companion_19).get_JustifyAll_vzjb16_k$ = function () {
    return new TextAlign('justify-all');
  };
  protoOf(Companion_19).get_Start_ih4i6x_k$ = function () {
    return new TextAlign('start');
  };
  protoOf(Companion_19).get_End_18ju7i_k$ = function () {
    return new TextAlign('end');
  };
  protoOf(Companion_19).get_MatchParent_4236be_k$ = function () {
    return new TextAlign('match-parent');
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function get_$stableprop_48() {
    return 0;
  }
  function TextAlign(value) {
    Companion_getInstance_19();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_20($this) {
    return $this.value_1;
  }
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).get_Normal_22avww_k$ = function () {
    return new WhiteSpace('normal');
  };
  protoOf(Companion_20).get_NoWrap_21tqz8_k$ = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_20).get_Pre_18jlye_k$ = function () {
    return new WhiteSpace('pre');
  };
  protoOf(Companion_20).get_PreWrap_nintz8_k$ = function () {
    return new WhiteSpace('pre-wrap');
  };
  protoOf(Companion_20).get_PreLine_nigmr2_k$ = function () {
    return new WhiteSpace('pre-line');
  };
  protoOf(Companion_20).get_BreakSpaces_6b23jx_k$ = function () {
    return new WhiteSpace('break-spaces');
  };
  protoOf(Companion_20).get_Inherit_a1a9e6_k$ = function () {
    return new WhiteSpace('inherit');
  };
  protoOf(Companion_20).get_Initial_a0h2v9_k$ = function () {
    return new WhiteSpace('initial');
  };
  protoOf(Companion_20).get_Revert_3t1tzh_k$ = function () {
    return new WhiteSpace('revert');
  };
  protoOf(Companion_20).get_Unset_ii4mhs_k$ = function () {
    return new WhiteSpace('unset');
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function get_$stableprop_49() {
    return 0;
  }
  function WhiteSpace(value) {
    Companion_getInstance_20();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.value_1;
  };
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.property_lwhspk_k$('text-align', textAlign);
  }
  function Companion_21() {
    Companion_instance_21 = this;
  }
  protoOf(Companion_21).group_8mv6tz_k$ = function (properties, duration, timingFunction, delay) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  protoOf(Companion_21).group$default_tjw00v_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_8mv6tz_k$(properties, duration, timingFunction, delay) : $super.group_8mv6tz_k$.call(this, properties, duration, timingFunction, delay);
  };
  protoOf(Companion_21).group_xeysqd_k$ = function (properties, duration, timingFunction, delay) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      tmp$ret$0 = new CSSTransition(item, duration, timingFunction, delay);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  protoOf(Companion_21).group$default_gmjvw9_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_xeysqd_k$(properties, duration, timingFunction, delay) : $super.group_xeysqd_k$.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_22().of_yqlxgq_k$(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function get_$stableprop_50() {
    return 0;
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_21();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.property_1 = property;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
    this.$stable_1 = 0;
  }
  protoOf(CSSTransition).get_property_msvula_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).toString = function () {
    var tmp$ret$6;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.buildListInternal' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    tmp0_apply.add_1j60pz_k$(this.property_1.toString());
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp$ret$0 = tmp0_apply.add_1j60pz_k$(toString(tmp0_safe_receiver));
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp$ret$2 = tmp0_apply.add_1j60pz_k$(toString(tmp1_safe_receiver));
      tmp$ret$3 = tmp$ret$2;
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        tmp0_apply.add_1j60pz_k$('0s');
      }
      tmp0_apply.add_1j60pz_k$(toString(this.delay_1));
    }
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4.build_1k0s4u_k$();
    tmp$ret$6 = tmp$ret$5;
    return joinToString_0(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).component1_7eebsc_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).copy_irqi13_k$ = function (property, duration, timingFunction, delay) {
    return new CSSTransition(property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).copy$default_o0mzgy_k$ = function (property, duration, timingFunction, delay, $super) {
    property = property === VOID ? this.property_1 : property;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    return $super === VOID ? this.copy_irqi13_k$(property, duration, timingFunction, delay) : $super.copy_irqi13_k$.call(this, property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.property_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = transitions.length === 0;
    tmp$ret$1 = !tmp$ret$0;
    if (tmp$ret$1) {
      _this__u8e3s4.property_ze5ozi_k$('transition', joinToString(transitions));
    }
  }
  function _get_value__a43j40_21($this) {
    return $this.value_1;
  }
  function Companion_22() {
    Companion_instance_22 = this;
  }
  protoOf(Companion_22).of_yqlxgq_k$ = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(customValue) > 0;
    if (tmp$ret$0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var indexedObject = customValue;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$1;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          tmp$ret$1 = isWhitespace(element);
          if (tmp$ret$1) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      tmp$ret$3 = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      var message = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new TransitionProperty(customValue);
  };
  protoOf(Companion_22).get_None_wo6tgh_k$ = function () {
    return new TransitionProperty('none');
  };
  protoOf(Companion_22).get_All_18jx7s_k$ = function () {
    return new TransitionProperty('all');
  };
  protoOf(Companion_22).get_Inherit_a1a9e6_k$ = function () {
    return new TransitionProperty('inherit');
  };
  protoOf(Companion_22).get_Initial_a0h2v9_k$ = function () {
    return new TransitionProperty('initial');
  };
  protoOf(Companion_22).get_Revert_3t1tzh_k$ = function () {
    return new TransitionProperty('revert');
  };
  protoOf(Companion_22).get_Unset_ii4mhs_k$ = function () {
    return new TransitionProperty('unset');
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function get_$stableprop_51() {
    return 0;
  }
  function TransitionProperty(value) {
    Companion_getInstance_22();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_52() {
    return 0;
  }
  function get_$stableprop_53() {
    return 0;
  }
  function get_$stableprop_54() {
    return 0;
  }
  function Simple(value) {
    Color.call(this, '' + value);
    this.$stable_2 = 0;
  }
  function Stop(color, stop) {
    Color.call(this, '' + color + ' ' + stop);
    this.$stable_2 = 0;
  }
  function StopRange(color, from, to) {
    Color.call(this, '' + color + ' ' + from + ' ' + to);
    this.$stable_2 = 0;
  }
  function get_$stableprop_55() {
    return 0;
  }
  function get_$stableprop_56() {
    return 0;
  }
  function _get_entryStr__gktpos($this) {
    return $this.entryStr_1;
  }
  function Color(value) {
    Entry.call(this, value);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Color).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Hint(value) {
    Entry.call(this, '' + value);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Hint).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Entry(entryStr) {
    this.entryStr_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.entryStr_1;
  };
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function get_$stableprop_57() {
    return 8;
  }
  function ColorStopsBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.entries_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(ColorStopsBuilder).verifiedEntries_yuic0o_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp0_count = this.entries_1;
      var tmp;
      if (isInterface(tmp0_count, Collection)) {
        tmp = tmp0_count.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = tmp0_count.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
        tmp$ret$1 = element instanceof Color;
        if (tmp$ret$1) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    var tmp1_check = tmp$ret$0 >= 2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      tmp$ret$2 = 'A linear gradient should consistent of at least two color entries (an initial color and an end color)';
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var tmp2_forEachIndexed = this.entries_1;
    var index = 0;
    var tmp0_iterator_0 = tmp2_forEachIndexed.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp3__anonymous__ufb84q = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.entries_1, tmp3__anonymous__ufb84q - 1 | 0);
        if (tmp_1 instanceof Color) {
          var tmp_2 = getOrNull(this.entries_1, tmp3__anonymous__ufb84q + 1 | 0);
          tmp_0 = tmp_2 instanceof Color;
        } else {
          tmp_0 = false;
        }
        var tmp0_check = tmp_0;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$3;
          // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'A gradient color midpoint must only be added between two colors';
          var message_0 = tmp$ret$3;
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp4_toTypedArray = this.entries_1;
    tmp$ret$4 = copyToArray(tmp4_toTypedArray);
    return tmp$ret$4;
  };
  protoOf(ColorStopsBuilder).add_v2zte8_k$ = function (color) {
    return this.entries_1.add_1j60pz_k$(new Simple(color));
  };
  protoOf(ColorStopsBuilder).add_x2bhad_k$ = function (color, stop) {
    return this.entries_1.add_1j60pz_k$(new Stop(color, stop));
  };
  protoOf(ColorStopsBuilder).add_o340yi_k$ = function (color, from, to) {
    return this.entries_1.add_1j60pz_k$(new StopRange(color, from, to));
  };
  protoOf(ColorStopsBuilder).setMidpoint_twxelb_k$ = function (hint) {
    return this.entries_1.add_1j60pz_k$(new Hint(hint));
  };
  function Gradient_0() {
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function get_$stableprop_58() {
    return 0;
  }
  function CSSUrl(url) {
    this.url_1 = url;
    this.$stable_1 = 0;
  }
  protoOf(CSSUrl).toString = function () {
    return 'url("' + this.url_1 + '")';
  };
  function get_$stableprop_59() {
    return 0;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3n44we_k$ = function () {
    var tmp$ret$0;
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function get_$stableprop_60() {
    return 0;
  }
  function Simple_0(handle) {
    RefCallback.call(this);
    this.handle_1 = handle;
    this.$stable_1 = 0;
  }
  protoOf(Simple_0).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).invoke_1jjxys_k$ = function (scope, element) {
    this.handle_1(element);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp$ret$0;
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.effect_1 = effect;
    this.$stable_1 = 0;
  }
  protoOf(Disposable).get_effect_ct67x6_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).invoke_1jjxys_k$ = function (scope, element) {
    return this.effect_1(scope, element);
  };
  function _get_keyedCallbacks__mth523($this) {
    return $this.keyedCallbacks_1;
  }
  function get_$stableprop_61() {
    return 8;
  }
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.keys_1 = keys;
    this.refCallback_1 = refCallback;
  }
  protoOf(KeysToEffect).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).get_refCallback_52b629_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).component1_7eebsc_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).component2_7eebsb_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).copy_7udkeq_k$ = function (keys, refCallback) {
    return new KeysToEffect(keys, refCallback);
  };
  protoOf(KeysToEffect).copy$default_xzh8d2_k$ = function (keys, refCallback, $super) {
    keys = keys === VOID ? this.keys_1 : keys;
    refCallback = refCallback === VOID ? this.refCallback_1 : refCallback;
    return $super === VOID ? this.copy_7udkeq_k$(keys, refCallback) : $super.copy_7udkeq_k$.call(this, keys, refCallback);
  };
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.keys_1 + ', refCallback=' + this.refCallback_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.keys_1);
    result = imul(result, 31) + hashCode(this.refCallback_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    if (!equals(this.refCallback_1, tmp0_other_with_cast.refCallback_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.keyedCallbacks_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(Builder).ref_djwlwl_k$ = function (keys, handle) {
    this.keyedCallbacks_1.add_1j60pz_k$(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).disposableRef_wrpb68_k$ = function (keys, effect) {
    this.keyedCallbacks_1.add_1j60pz_k$(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).add_wiwqkq_k$ = function (other) {
    if (!(other == null)) {
      this.keyedCallbacks_1.addAll_oxxjjk_k$(other.keyedCallbacks_1);
    }
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ElementRefScope(this.keyedCallbacks_1);
  };
  function get_$stableprop_62() {
    return 8;
  }
  function ElementRefScope(keyedCallbacks) {
    this.keyedCallbacks_1 = keyedCallbacks;
    this.$stable_1 = 8;
  }
  protoOf(ElementRefScope).get_keyedCallbacks_7cgu1_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).component1_7eebsc_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).copy_9g1vtr_k$ = function (keyedCallbacks) {
    return new ElementRefScope(keyedCallbacks);
  };
  protoOf(ElementRefScope).copy$default_za44lh_k$ = function (keyedCallbacks, $super) {
    keyedCallbacks = keyedCallbacks === VOID ? this.keyedCallbacks_1 : keyedCallbacks;
    return $super === VOID ? this.copy_9g1vtr_k$(keyedCallbacks) : $super.copy_9g1vtr_k$.call(this, keyedCallbacks);
  };
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.keyedCallbacks_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.keyedCallbacks_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.keyedCallbacks_1, tmp0_other_with_cast.keyedCallbacks_1))
      return false;
    return true;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1682539725);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:89)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = scope.keyedCallbacks_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = element.keys_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
      var tmp = tmp$ret$0.slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda(element, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function registerRefScope$composable$lambda($element, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $element.refCallback_1.invoke_1jjxys_k$($this$DisposableEffect, $this_registerRefScope$composable.get_scopeElement_mn83kc_k$($this$DisposableEffect));
    };
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(_this__u8e3s4);
    var tmp0_require = tmp$ret$0;
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
    var currentWord = StringBuilder_init_$Create$();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    var words = tmp$ret$2;
    // Inline function 'kotlin.text.forEach' call
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.util.titleCamelCaseToKebabCase.<anonymous>' call
      if (isUpperCase(element)) {
        var tmp$ret$3;
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp$ret$3 = charSequenceLength(currentWord) > 0;
        if (tmp$ret$3) {
          words.add_1j60pz_k$(currentWord.toString());
          currentWord.clear_1keqml_k$();
        }
      }
      currentWord.append_t8oh9e_k$(element);
    }
    words.add_1j60pz_k$(currentWord.toString());
    return joinToString_0(words, '-', VOID, VOID, VOID, VOID, titleCamelCaseToKebabCase$lambda);
  }
  function titleCamelCaseToKebabCase$lambda(it) {
    return decapitalize(it);
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).classes_mog12g_k$ = classes;
  protoOf(ComparableAttrsScope).id_xxyy5i_k$ = id;
  protoOf(ComparableAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(ComparableAttrsScope).title_898wkp_k$ = title;
  protoOf(ComparableAttrsScope).dir_9tgcjq_k$ = dir;
  protoOf(ComparableAttrsScope).draggable_ghcstc_k$ = draggable;
  protoOf(ComparableAttrsScope).contentEditable_oklk6b_k$ = contentEditable;
  protoOf(ComparableAttrsScope).lang_xkki7h_k$ = lang;
  protoOf(ComparableAttrsScope).tabIndex_coguxw_k$ = tabIndex;
  protoOf(ComparableAttrsScope).spellCheck_ra9ojq_k$ = spellCheck;
  protoOf(ComparableAttrsScope).inputMode_q3xdho_k$ = inputMode;
  protoOf(ComparableAttrsScope).inputMode_ni4l5s_k$ = inputMode_0;
  protoOf(ComparableAttrsScope).onContextMenu_rqaeiw_k$ = onContextMenu;
  protoOf(ComparableAttrsScope).onClick_3adsri_k$ = onClick;
  protoOf(ComparableAttrsScope).onDoubleClick_o3ltf3_k$ = onDoubleClick;
  protoOf(ComparableAttrsScope).onMouseDown_em11hd_k$ = onMouseDown;
  protoOf(ComparableAttrsScope).onMouseUp_qybdyy_k$ = onMouseUp;
  protoOf(ComparableAttrsScope).onMouseEnter_g3bz11_k$ = onMouseEnter;
  protoOf(ComparableAttrsScope).onMouseLeave_4qyrg6_k$ = onMouseLeave;
  protoOf(ComparableAttrsScope).onMouseMove_609snk_k$ = onMouseMove;
  protoOf(ComparableAttrsScope).onMouseOut_alj067_k$ = onMouseOut;
  protoOf(ComparableAttrsScope).onMouseOver_66zdzh_k$ = onMouseOver;
  protoOf(ComparableAttrsScope).onWheel_cg2j2t_k$ = onWheel;
  protoOf(ComparableAttrsScope).onDrag_vg0lyh_k$ = onDrag;
  protoOf(ComparableAttrsScope).onDrop_3mkg4y_k$ = onDrop;
  protoOf(ComparableAttrsScope).onDragStart_w5ys4t_k$ = onDragStart;
  protoOf(ComparableAttrsScope).onDragEnd_y7ewx8_k$ = onDragEnd;
  protoOf(ComparableAttrsScope).onDragOver_ti99sb_k$ = onDragOver;
  protoOf(ComparableAttrsScope).onDragEnter_uyubsn_k$ = onDragEnter;
  protoOf(ComparableAttrsScope).onDragLeave_nnon60_k$ = onDragLeave;
  protoOf(ComparableAttrsScope).onCopy_takkx5_k$ = onCopy;
  protoOf(ComparableAttrsScope).onCut_ol4js_k$ = onCut;
  protoOf(ComparableAttrsScope).onPaste_rubsh5_k$ = onPaste;
  protoOf(ComparableAttrsScope).onKeyDown_xycn2o_k$ = onKeyDown;
  protoOf(ComparableAttrsScope).onKeyUp_u3a7vt_k$ = onKeyUp;
  protoOf(ComparableAttrsScope).onFocus_f0s6pg_k$ = onFocus;
  protoOf(ComparableAttrsScope).onBlur_jks72x_k$ = onBlur;
  protoOf(ComparableAttrsScope).onFocusIn_o8fbjl_k$ = onFocusIn;
  protoOf(ComparableAttrsScope).onFocusOut_pmzsfc_k$ = onFocusOut;
  protoOf(ComparableAttrsScope).onTouchCancel_ufddza_k$ = onTouchCancel;
  protoOf(ComparableAttrsScope).onTouchMove_f4qr3x_k$ = onTouchMove;
  protoOf(ComparableAttrsScope).onTouchEnd_u7mt1j_k$ = onTouchEnd;
  protoOf(ComparableAttrsScope).onTouchStart_sporrm_k$ = onTouchStart;
  protoOf(ComparableAttrsScope).onAnimationEnd_35pssj_k$ = onAnimationEnd;
  protoOf(ComparableAttrsScope).onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  protoOf(ComparableAttrsScope).onAnimationStart_jojejg_k$ = onAnimationStart;
  protoOf(ComparableAttrsScope).onScroll_3uphub_k$ = onScroll;
  protoOf(ComparableAttrsScope).addEventListener_rnhydf_k$ = addEventListener;
  protoOf(ComparableAttrsScope).addEventListener_y3hr2r_k$ = addEventListener_0;
  protoOf(DummyAttrsScope).classes_mog12g_k$ = classes;
  protoOf(DummyAttrsScope).id_xxyy5i_k$ = id;
  protoOf(DummyAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(DummyAttrsScope).title_898wkp_k$ = title;
  protoOf(DummyAttrsScope).dir_9tgcjq_k$ = dir;
  protoOf(DummyAttrsScope).draggable_ghcstc_k$ = draggable;
  protoOf(DummyAttrsScope).contentEditable_oklk6b_k$ = contentEditable;
  protoOf(DummyAttrsScope).lang_xkki7h_k$ = lang;
  protoOf(DummyAttrsScope).tabIndex_coguxw_k$ = tabIndex;
  protoOf(DummyAttrsScope).spellCheck_ra9ojq_k$ = spellCheck;
  protoOf(DummyAttrsScope).inputMode_q3xdho_k$ = inputMode;
  protoOf(DummyAttrsScope).inputMode_ni4l5s_k$ = inputMode_0;
  protoOf(DummyAttrsScope).onContextMenu_rqaeiw_k$ = onContextMenu;
  protoOf(DummyAttrsScope).onClick_3adsri_k$ = onClick;
  protoOf(DummyAttrsScope).onDoubleClick_o3ltf3_k$ = onDoubleClick;
  protoOf(DummyAttrsScope).onMouseDown_em11hd_k$ = onMouseDown;
  protoOf(DummyAttrsScope).onMouseUp_qybdyy_k$ = onMouseUp;
  protoOf(DummyAttrsScope).onMouseEnter_g3bz11_k$ = onMouseEnter;
  protoOf(DummyAttrsScope).onMouseLeave_4qyrg6_k$ = onMouseLeave;
  protoOf(DummyAttrsScope).onMouseMove_609snk_k$ = onMouseMove;
  protoOf(DummyAttrsScope).onMouseOut_alj067_k$ = onMouseOut;
  protoOf(DummyAttrsScope).onMouseOver_66zdzh_k$ = onMouseOver;
  protoOf(DummyAttrsScope).onWheel_cg2j2t_k$ = onWheel;
  protoOf(DummyAttrsScope).onDrag_vg0lyh_k$ = onDrag;
  protoOf(DummyAttrsScope).onDrop_3mkg4y_k$ = onDrop;
  protoOf(DummyAttrsScope).onDragStart_w5ys4t_k$ = onDragStart;
  protoOf(DummyAttrsScope).onDragEnd_y7ewx8_k$ = onDragEnd;
  protoOf(DummyAttrsScope).onDragOver_ti99sb_k$ = onDragOver;
  protoOf(DummyAttrsScope).onDragEnter_uyubsn_k$ = onDragEnter;
  protoOf(DummyAttrsScope).onDragLeave_nnon60_k$ = onDragLeave;
  protoOf(DummyAttrsScope).onCopy_takkx5_k$ = onCopy;
  protoOf(DummyAttrsScope).onCut_ol4js_k$ = onCut;
  protoOf(DummyAttrsScope).onPaste_rubsh5_k$ = onPaste;
  protoOf(DummyAttrsScope).onKeyDown_xycn2o_k$ = onKeyDown;
  protoOf(DummyAttrsScope).onKeyUp_u3a7vt_k$ = onKeyUp;
  protoOf(DummyAttrsScope).onFocus_f0s6pg_k$ = onFocus;
  protoOf(DummyAttrsScope).onBlur_jks72x_k$ = onBlur;
  protoOf(DummyAttrsScope).onFocusIn_o8fbjl_k$ = onFocusIn;
  protoOf(DummyAttrsScope).onFocusOut_pmzsfc_k$ = onFocusOut;
  protoOf(DummyAttrsScope).onTouchCancel_ufddza_k$ = onTouchCancel;
  protoOf(DummyAttrsScope).onTouchMove_f4qr3x_k$ = onTouchMove;
  protoOf(DummyAttrsScope).onTouchEnd_u7mt1j_k$ = onTouchEnd;
  protoOf(DummyAttrsScope).onTouchStart_sporrm_k$ = onTouchStart;
  protoOf(DummyAttrsScope).onAnimationEnd_35pssj_k$ = onAnimationEnd;
  protoOf(DummyAttrsScope).onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  protoOf(DummyAttrsScope).onAnimationStart_jojejg_k$ = onAnimationStart;
  protoOf(DummyAttrsScope).onScroll_3uphub_k$ = onScroll;
  protoOf(DummyAttrsScope).addEventListener_rnhydf_k$ = addEventListener;
  protoOf(DummyAttrsScope).addEventListener_y3hr2r_k$ = addEventListener_0;
  protoOf(ComparableStyleScope).property_ze5ozi_k$ = property;
  protoOf(ComparableStyleScope).property_nit37e_k$ = property_0;
  protoOf(ComparableStyleScope).variable_d7dn6f_k$ = variable;
  protoOf(ComparableStyleScope).variable_pbiwyn_k$ = variable_0;
  protoOf(ComparableStyleScope).invoke_ie9e5n_k$ = invoke;
  protoOf(ComparableStyleScope).invoke_49si7m_k$ = invoke_0;
  protoOf(ComparableStyleScope).invoke_tbupf6_k$ = invoke_1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CSSBackground;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = alignSelf;
  _.$_$.d = backdropFilter;
  _.$_$.e = background;
  _.$_$.f = borderStyle;
  _.$_$.g = borderTop;
  _.$_$.h = boxShadow;
  _.$_$.i = cursor;
  _.$_$.j = flexBasis;
  _.$_$.k = fontSize;
  _.$_$.l = fontWeight;
  _.$_$.m = isNotEmpty;
  _.$_$.n = justifyItems;
  _.$_$.o = justifySelf;
  _.$_$.p = maxWidth;
  _.$_$.q = objectFit;
  _.$_$.r = outline;
  _.$_$.s = paddingInline;
  _.$_$.t = textAlign;
  _.$_$.u = textDecorationLine;
  _.$_$.v = transition;
  _.$_$.w = userSelect;
  _.$_$.x = whiteSpace;
  _.$_$.y = registerRefScope$composable;
  _.$_$.z = titleCamelCaseToKebabCase;
  _.$_$.a1 = ComparableAttrsScope_init_$Create$;
  _.$_$.b1 = CSSTransition_init_$Create$;
  _.$_$.c1 = Companion_getInstance_0;
  _.$_$.d1 = Companion_getInstance_2;
  _.$_$.e1 = Companion_getInstance_11;
  _.$_$.f1 = Companion_getInstance_12;
  _.$_$.g1 = Companion_getInstance_14;
  _.$_$.h1 = Companion_getInstance_13;
  _.$_$.i1 = Companion_getInstance;
  _.$_$.j1 = Companion_getInstance_1;
  _.$_$.k1 = Companion_getInstance_15;
  _.$_$.l1 = Companion_getInstance_16;
  _.$_$.m1 = Companion_getInstance_19;
  _.$_$.n1 = Companion_getInstance_17;
  _.$_$.o1 = Companion_getInstance_18;
  _.$_$.p1 = Companion_getInstance_20;
  //endregion
  return _;
}));
