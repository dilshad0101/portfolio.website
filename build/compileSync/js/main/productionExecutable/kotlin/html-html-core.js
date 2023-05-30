(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var protoOf = kotlin_kotlin.$_$.p5;
  var objectMeta = kotlin_kotlin.$_$.o5;
  var VOID = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.q5;
  var asList = kotlin_kotlin.$_$.l2;
  var interfaceMeta = kotlin_kotlin.$_$.f5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var addAll = kotlin_kotlin.$_$.i2;
  var classMeta = kotlin_kotlin.$_$.v4;
  var charSequenceLength = kotlin_kotlin.$_$.u4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var ensureNotNull = kotlin_kotlin.$_$.h7;
  var getStringHashCode = kotlin_kotlin.$_$.c5;
  var hashCode = kotlin_kotlin.$_$.d5;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var equals = kotlin_kotlin.$_$.y4;
  var toString = kotlin_kotlin.$_$.p7;
  var numberToDouble = kotlin_kotlin.$_$.l5;
  var getNumberHashCode = kotlin_kotlin.$_$.a5;
  var defineProp = kotlin_kotlin.$_$.x4;
  var toString_0 = kotlin_kotlin.$_$.r5;
  var isInterface = kotlin_kotlin.$_$.i5;
  var Collection = kotlin_kotlin.$_$.a2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var listOfNotNull = kotlin_kotlin.$_$.g3;
  var joinToString = kotlin_kotlin.$_$.b3;
  var joinToString_0 = kotlin_kotlin.$_$.c3;
  var contains = kotlin_kotlin.$_$.c6;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var isObject = kotlin_kotlin.$_$.j5;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.r2;
  var copyToArray = kotlin_kotlin.$_$.q2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.o7;
  var lazy = kotlin_kotlin.$_$.i7;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var KProperty1 = kotlin_kotlin.$_$.z5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.b5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  function onClick(listener) {
    Companion_getInstance_1();
    this.y1q(new MouseEventListener('click', listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.v1q(asList(classes));
  }
  function id(value) {
    Companion_getInstance_0();
    return this.j1q('id', value);
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope]);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  setMetadataFor(Raw, 'Raw', classMeta);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.r1u(propertyName, tmp$ret$2);
  }
  function property_0(propertyName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.r1u(propertyName, tmp$ret$2);
  }
  function variable(variableName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.u1u(variableName, tmp$ret$2);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder]);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(RGBA, 'RGBA', classMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  function add(selector, style) {
    this.a1u(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.u1v();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke(_this__u8e3s4, cssRule) {
    this.s1v(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.s1v(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.p1v(selector, buildCSSStyleRule(cssRule));
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder]);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.j1q('href', value);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.j1q('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.j1q('src', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_getInstance();
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (properties_initialized_Attrs_kt_uypsku) {
    } else {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function Companion() {
    Companion_instance = this;
    this.k1q_1 = 'class';
    this.l1q_1 = 'id';
    this.m1q_1 = 'hidden';
    this.n1q_1 = 'title';
    this.o1q_1 = 'dir';
    this.p1q_1 = 'draggable';
    this.q1q_1 = 'contenteditable';
    this.r1q_1 = 'lang';
    this.s1q_1 = 'tabindex';
    this.t1q_1 = 'spellcheck';
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.a1r_1 = eventsListenerScopeBuilder;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.b1r_1 = tmp$ret$0;
    this.c1r_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.d1r_1 = tmp$ret$1;
    this.e1r_1 = null;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.f1r_1 = tmp$ret$2;
    this.g1r_1 = 8;
  }
  protoOf(AttrsScopeBuilder).z1q = function (listener) {
    this.a1r_1.z1q(listener);
  };
  protoOf(AttrsScopeBuilder).y1q = function (listener) {
    this.a1r_1.y1q(listener);
  };
  protoOf(AttrsScopeBuilder).v1q = function (classes) {
    this.f1r_1.t(classes);
  };
  protoOf(AttrsScopeBuilder).w1q = function (classes) {
    addAll(this.f1r_1, classes);
  };
  protoOf(AttrsScopeBuilder).u1q = function (builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.c1r_1;
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
  };
  protoOf(AttrsScopeBuilder).j1q = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.b1r_1;
    tmp0_set.v2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).j1r = function () {
    return this.b1r_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.k1r_1 = 'copy';
    this.l1r_1 = 'cut';
    this.m1r_1 = 'paste';
    this.n1r_1 = 'contextmenu';
    this.o1r_1 = 'click';
    this.p1r_1 = 'dblclick';
    this.q1r_1 = 'focus';
    this.r1r_1 = 'blur';
    this.s1r_1 = 'focusin';
    this.t1r_1 = 'focusout';
    this.u1r_1 = 'keydown';
    this.v1r_1 = 'keyup';
    this.w1r_1 = 'mousedown';
    this.x1r_1 = 'mouseup';
    this.y1r_1 = 'mouseenter';
    this.z1r_1 = 'mouseleave';
    this.a1s_1 = 'mousemove';
    this.b1s_1 = 'mouseout';
    this.c1s_1 = 'mouseover';
    this.d1s_1 = 'wheel';
    this.e1s_1 = 'scroll';
    this.f1s_1 = 'select';
    this.g1s_1 = 'touchcancel';
    this.h1s_1 = 'touchend';
    this.i1s_1 = 'touchmove';
    this.j1s_1 = 'touchstart';
    this.k1s_1 = 'animationcancel';
    this.l1s_1 = 'animationend';
    this.m1s_1 = 'animationiteration';
    this.n1s_1 = 'animationstart';
    this.o1s_1 = 'beforeinput';
    this.p1s_1 = 'input';
    this.q1s_1 = 'change';
    this.r1s_1 = 'invalid';
    this.s1s_1 = 'drag';
    this.t1s_1 = 'drop';
    this.u1s_1 = 'dragstart';
    this.v1s_1 = 'dragend';
    this.w1s_1 = 'dragover';
    this.x1s_1 = 'dragenter';
    this.y1s_1 = 'dragleave';
    this.z1s_1 = 'submit';
    this.a1t_1 = 'reset';
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.h1r_1 = tmp$ret$0;
    this.i1r_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).y1q = function (listener) {
    this.h1r_1.a(listener);
  };
  protoOf(EventsListenerScopeBuilder).b1t = function () {
    return this.h1r_1;
  };
  function SyntheticEventListener(event, listener) {
    this.c1t_1 = event;
    this.d1t_1 = listener;
    this.e1t_1 = this.c1t_1;
    this.f1t_1 = 0;
  }
  protoOf(SyntheticEventListener).g1t = function () {
    return this.e1t_1;
  };
  protoOf(SyntheticEventListener).h1t = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = new SyntheticEvent(event);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    this.d1t_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.h1t(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).h1t = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.d1t_1(new SyntheticMouseEvent(tmp$ret$1));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.h1t(event);
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      var tmp0_isNotEmpty = element.name;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().v1(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = get_controlledRadioGroups();
        var tmp2_set = element.name;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp$ret$1 = LinkedHashSet_init_$Create$();
        var tmp3_set = tmp$ret$1;
        tmp1_set.v2(tmp2_set, tmp3_set);
      }
      ensureNotNull(get_controlledRadioGroups().z1(element.name)).a(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
    } else {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new WeakMap();
      tmp$ret$0 = tmp0_unsafeCast;
      controlledInputsValuesWeakMap = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0_0 = LinkedHashMap_init_$Create$();
      controlledRadioGroups = tmp$ret$0_0;
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.m1t_1 = name;
    this.n1t_1 = keys;
    this.o1t_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).p1t = function () {
    return '@keyframes ' + this.m1t_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.m1t_1 + ', keys=' + this.n1t_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.m1t_1);
    result = imul(result, 31) + hashCode(this.n1t_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.m1t_1 === tmp0_other_with_cast.m1t_1))
      return false;
    if (!equals(this.n1t_1, tmp0_other_with_cast.n1t_1))
      return false;
    return true;
  };
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.q1t_1 = keyframe;
    this.r1t_1 = style;
    this.s1t_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).t1t = function () {
    return this.r1t_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).p1t = function () {
    return this.q1t_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.q1t_1 + ', style=' + this.r1t_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.q1t_1);
    result = imul(result, 31) + hashCode(this.r1t_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.q1t_1, tmp0_other_with_cast.q1t_1))
      return false;
    if (!equals(this.r1t_1, tmp0_other_with_cast.r1t_1))
      return false;
    return true;
  };
  function Raw(string) {
    this.u1t_1 = string;
    this.v1t_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.u1t_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.u1t_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.u1t_1 === tmp0_other_with_cast.u1t_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.w1t_1 = name;
    this.x1t_1 = value;
    this.y1t_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.w1t_1 === other.w1t_1 ? toString(this.x1t_1) === toString(other.x1t_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp0_safe_receiver = this.x1t_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp$ret$0 = ': ' + this.x1t_1 + ')';
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.w1t_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.z1t(rulesBuild);
    _this__u8e3s4.a1u(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.b1u_1 = query;
    this.c1u_1 = rules;
    this.d1u_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).e1u = function () {
    return this.c1u_1;
  };
  protoOf(CSSMediaRuleDeclaration).p1t = function () {
    return '@media ' + this.b1u_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.c1u_1, other.c1u_1) ? equals(this.b1u_1, other.b1u_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.f1u_1 = selector;
    this.g1u_1 = style;
    this.h1u_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).t1t = function () {
    return this.g1u_1;
  };
  protoOf(CSSStyleRuleDeclaration).p1t = function () {
    return this.f1u_1.j1u();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.f1u_1 + ', style=' + this.g1u_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.f1u_1);
    result = imul(result, 31) + hashCode(this.g1u_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.f1u_1, tmp0_other_with_cast.f1u_1))
      return false;
    if (!equals(this.g1u_1, tmp0_other_with_cast.g1u_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.n1u_1 = 0;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    var tmp0__get_px__p4dvcn = Companion_getInstance_10();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'px';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    var tmp0__get_percent__ps7yqu = Companion_getInstance_10();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '%';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    var tmp0__get_ms__p4dxp1 = Companion_getInstance_10();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'ms';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    var tmp0__get_rem__2kbiwh = Companion_getInstance_10();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'rem';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    var tmp0__get_vh__p4dra9 = Companion_getInstance_10();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'vh';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function get_dppx(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.dppx' call
    var tmp0__get_dppx__89b871 = Companion_getInstance_10();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'dppx';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function CSSUnitValueTyped(value, unit) {
    this.y1u_1 = value;
    this.z1u_1 = unit;
    this.a1v_1 = 0;
  }
  protoOf(CSSUnitValueTyped).o1 = function () {
    return this.y1u_1;
  };
  protoOf(CSSUnitValueTyped).b1v = function () {
    return this.z1u_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.y1u_1 + this.z1u_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.y1u_1);
    result = imul(result, 31) + hashCode(this.z1u_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.y1u_1, tmp0_other_with_cast.y1u_1))
      return false;
    if (!equals(this.z1u_1, tmp0_other_with_cast.z1u_1))
      return false;
    return true;
  };
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.o1();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.b1v();
  });
  function rgba(r, g, b, a) {
    return new RGBA(r, g, b, a);
  }
  function RGBA(r, g, b, a) {
    this.c1v_1 = r;
    this.d1v_1 = g;
    this.e1v_1 = b;
    this.f1v_1 = a;
  }
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString_0(this.c1v_1) + ', ' + toString_0(this.d1v_1) + ', ' + toString_0(this.e1v_1) + ', ' + toString_0(this.f1v_1) + ')';
  };
  function StyleScope() {
  }
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.g1v_1 = name;
    this.h1v_1 = value;
    this.i1v_1 = 8;
  }
  protoOf(StylePropertyDeclaration).t2 = function () {
    return this.g1v_1;
  };
  protoOf(StylePropertyDeclaration).u2 = function () {
    return this.h1v_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.g1v_1 + ', value=' + this.h1v_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.g1v_1);
    result = imul(result, 31) + hashCode(this.h1v_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.g1v_1 === tmp0_other_with_cast.g1v_1))
      return false;
    if (!equals(this.h1v_1, tmp0_other_with_cast.h1v_1))
      return false;
    return true;
  };
  function StyleScopeBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.o1u_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.p1u_1 = tmp$ret$1;
    this.q1u_1 = 0;
  }
  protoOf(StyleScopeBuilder).w1u = function () {
    return this.o1u_1;
  };
  protoOf(StyleScopeBuilder).x1u = function () {
    return this.p1u_1;
  };
  protoOf(StyleScopeBuilder).r1u = function (propertyName, value) {
    this.w1u().a(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).u1u = function (variableName, value) {
    this.x1u().a(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.w1u(), other.w1u()) ? nativeEquals(this.x1u(), other.x1u()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.f() === properties.f()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.g(tmp0);
        tmp$ret$1 = element.g1v_1 === otherProp.g1v_1 ? toString_0(element.h1v_1) === toString_0(otherProp.h1v_1) : false;
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.j1v_1 = 0;
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function StyleSheet(rulesHolder, usePrefix) {
    Companion_getInstance_11();
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    this.k1v_1 = rulesHolder;
    this.l1v_1 = usePrefix;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.m1v_1 = tmp$ret$0;
    this.n1v_1 = 0;
  }
  protoOf(StyleSheet).o1v = function () {
    return this.k1v_1.o1v();
  };
  protoOf(StyleSheet).a1u = function (cssRule) {
    this.k1v_1.a1u(cssRule);
  };
  protoOf(StyleSheet).p1v = function (selector, style) {
    this.k1v_1.p1v(selector, style);
  };
  protoOf(StyleSheet).q1v = function (rulesBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new StyleSheet();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.o1v();
  };
  protoOf(StyleSheet).z1t = function (rulesBuild) {
    return this.q1v(rulesBuild);
  };
  protoOf(StyleSheet).s1v = function (selector, cssRule) {
    return this.r1v(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.v1v_1 = mutableStateListOf();
    this.w1v_1 = 0;
  }
  protoOf(CSSRulesHolderState).o1v = function () {
    return this.v1v_1;
  };
  protoOf(CSSRulesHolderState).a1u = function (cssRule) {
    this.v1v_1.c14(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.y1v_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.y1v_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.y1v_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.y1v_1 === tmp0_other_with_cast.y1v_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.a1w_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.a1w_1 === other.a1w_1 ? this.b1w() == other.b1w() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).b1w = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.b1w();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp$ret$0 = '(' + tmp0_safe_receiver + ')';
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.a1w_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
    } else {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('background-color', value);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.r1u('border-width', width);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.r1u('border-radius', r);
  }
  function borderRadius_0(_this__u8e3s4, topLeft, bottomRight) {
    _this__u8e3s4.s1u('border-radius', '' + topLeft + ' ' + bottomRight);
  }
  function CSSBorder() {
    this.d1w_1 = null;
    this.e1w_1 = null;
    this.f1w_1 = null;
    this.g1w_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.d1w_1, other.d1w_1) ? equals(this.e1w_1, other.e1w_1) : false) ? equals(this.f1w_1, other.f1w_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.d1w_1, this.e1w_1, this.f1w_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.d1w_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.e1w_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.f1w_1 = color;
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('width', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('min-height', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.s1u('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('color', value);
  }
  function flexWrap(_this__u8e3s4, flexWrap) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = flexWrap;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.s1u('flex-wrap', tmp$ret$2);
  }
  function flexShrink(_this__u8e3s4, value) {
    _this__u8e3s4.t1u('flex-shrink', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.t1u('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = alignItems;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.s1u('align-items', tmp$ret$2);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = alignSelf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.s1u('align-self', tmp$ret$2);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = flexDirection;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.s1u('flex-direction', tmp$ret$2);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = justifyContent;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.s1u('justify-content', tmp$ret$2);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.s1u('grid-template-columns', value);
  }
  function gridRowEnd(_this__u8e3s4, value) {
    _this__u8e3s4.t1u('grid-row-end', value);
  }
  function gridRowStart(_this__u8e3s4, value) {
    _this__u8e3s4.t1u('grid-row-start', value);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.s1u('grid-template-rows', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.s1u('grid-area', rowStart + ' / ' + columnStart);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.s1u('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.s1u('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = position;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.s1u('position', tmp$ret$2);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('bottom', value);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.t1u('opacity', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = displayStyle;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.s1u('display', tmp$ret$2);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.s1u('line-height', value);
  }
  function lineHeight_0(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.r1u('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.s1u('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function CSSSelector() {
    this.i1u_1 = 0;
  }
  protoOf(CSSSelector).j1u = function () {
    return toString_0(this);
  };
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n12(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.n11()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.h11(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        tmp$ret$0 = new ElementScopeImpl();
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      var scope = tmp$ret$4;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var tmp3_ComposeDomNode$composable = $composer_0;
      var $composer_2 = tmp3_ComposeDomNode$composable;
      $composer_2.pw();
      if ($composer_2.g12()) {
        var tmp_1 = $composer_2;
        tmp_1.i12(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.k12();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp4__anonymous__pkmkx7 = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var tmp5__anonymous__kpxxpo = $composer_2;
      var tmp6__anonymous__fv9ai5 = 0;
      var $composer_3 = tmp5__anonymous__kpxxpo;
      var attrsScope = new AttrsScopeBuilder();
      var tmp0_safe_receiver = applyAttrs;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(attrsScope);
      refEffect = attrsScope.e1r_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp4__anonymous__pkmkx7).h11(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp4__anonymous__pkmkx7));
      Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, attrsScope.f1r_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, attrsScope.c1r_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.j1r();
      Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.a1r_1.b1t();
      Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, attrsScope.d1r_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne(tmp4__anonymous__pkmkx7).i11();
      $composer_2.h11(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp7__anonymous__b0knam = $composer_2;
      var tmp8__anonymous__65w033 = 8;
      var $composer_4 = tmp7__anonymous__b0knam;
      var tmp0_safe_receiver_0 = content;
      $composer_4.h11(-1128047990);
      var tmp0_group = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0(scope, $composer_4, 14 & tmp8__anonymous__65w033 | 112 & $dirty >> 3);
      $composer_4.i11();
      $composer_2.i11();
      $composer_2.l12();
      var tmp0_safe_receiver_1 = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver_1 == null) {
        tmp_4 = null;
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver_1, scope), $composer_0, 6);
        tmp$ret$5 = Unit_getInstance();
        tmp_4 = Unit_getInstance();
      }
      var tmp0_group_0 = tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mw();
    }
    var tmp1_safe_receiver = $composer_0.x12();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w16(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.j1w_1 = node;
    this.k1w_1 = emptyList();
  }
  protoOf(DomElementWrapper).v1o = function () {
    return this.j1w_1;
  };
  protoOf(DomElementWrapper).l1w = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.k1w_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.j1w_1.removeEventListener(element.g1t(), element);
    }
    this.k1w_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.k1w_1;
    var tmp0_iterator_0 = tmp1_forEach.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.j1w_1.addEventListener(element_0.g1t(), element_0);
    }
  };
  protoOf(DomElementWrapper).m1w = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.t2();
      var item = element.u2();
      applicator(this.j1w_1, item);
    }
  };
  protoOf(DomElementWrapper).n1w = function (styleApplier) {
    var tmp0_subject = this.j1w_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.j1w_1.removeAttribute('style');
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.j1w_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      var style = tmp$ret$1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = styleApplier.w1u();
      var tmp0_iterator = tmp1_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.t2();
        var value = element.u2();
        style.setProperty(name, toString_0(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp2_forEach = styleApplier.x1u();
      var tmp0_iterator_0 = tmp2_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.t2();
        var value_0 = element_0.u2();
        style.setProperty(name_0, toString_0(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).o1w = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.j1w_1.getAttributeNames();
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      var tmp0_subject = element;
      switch (tmp0_subject) {
        case 'style':
        case 'class':
          break;
        default:
          this.j1w_1.removeAttribute(element);
          ;
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = attrs.m1().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var element_0 = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.j1w_1.setAttribute(element_0.l1(), element_0.o1());
    }
  };
  protoOf(DomElementWrapper).p1w = function (classes) {
    this.j1w_1.removeAttribute('class');
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !classes.h();
    if (tmp$ret$0) {
      var tmp = this.j1w_1.classList;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$composable$lambda($elementBuilder, $scope) {
    return function () {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var node = $elementBuilder.e1d();
      $scope.t1w(node);
      tmp$ret$0 = new DomElementWrapper(node);
      return tmp$ret$0;
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.p1w(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.n1w(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.o1w(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.l1w(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.m1w(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($tmp0_safe_receiver, $scope) {
    return function ($this$DisposableEffect) {
      return $tmp0_safe_receiver($this$DisposableEffect, $scope.u1w());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).t1w = function (_set____db54di) {
    this.s1w_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).u1w = function () {
    var tmp = this.s1w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).v1w = function (_this__u8e3s4) {
    return this.u1w();
  };
  function ElementScopeBase() {
    this.w1w_1 = 0;
    this.x1w_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  var Em;
  var I;
  var B;
  var Small;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  var Ul;
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function _get_el__ndc0ck($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = el$factory();
    tmp$ret$0 = $this.z1w_1.o1();
    return tmp$ret$0;
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.y1w_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.y1w_1 = tagName;
    var tmp = this;
    tmp.z1w_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).e1d = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1021009996, $dirty, -1, 'org.jetbrains.compose.web.dom.Div$composable (Elements.kt:489)');
      }
      TagElement$composable(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.w16(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text$composable(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.n11()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.h11(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        tmp$ret$0 = Text$composable$lambda;
        var value_0 = tmp$ret$0;
        tmp1_cache.k13(value_0);
        tmp = value_0;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      var tmp3_ComposeNode$composable = tmp$ret$4;
      var tmp4_ComposeNode$composable = $composer_0;
      var $composer_2 = tmp4_ComposeNode$composable;
      $composer_2.h11(-1846754774);
      sourceInformation($composer_2, 'CC(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.w11();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.pw();
      if ($composer_2.g12()) {
        var tmp_2 = $composer_2;
        tmp_2.i12(Text$composable$lambda_0(tmp3_ComposeNode$composable));
      } else {
        $composer_2.k12();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var tmp5__anonymous__kpxxpo = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss(tmp5__anonymous__kpxxpo, value, Text$composable$lambda_1);
      $composer_2.l12();
      $composer_2.i11();
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
      tmp0_safe_receiver.w16(Text$composable$lambda_2(value, $changed));
    }
  }
  function Span$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-155327957);
    sourceInformation($composer_0, 'C(Span$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-155327957, $dirty, -1, 'org.jetbrains.compose.web.dom.Span$composable (Elements.kt:593)');
      }
      TagElement$composable(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.w16(Span$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Li$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-456299496);
    sourceInformation($composer_0, 'C(Li$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-456299496, $dirty, -1, 'org.jetbrains.compose.web.dom.Li$composable (Elements.kt:615)');
      }
      TagElement$composable(get_Li(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.w16(Li$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Button$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-767970749);
    sourceInformation($composer_0, 'C(Button$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-767970749, $dirty, -1, 'org.jetbrains.compose.web.dom.Button$composable (Elements.kt:521)');
      }
      TagElement$composable(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.w16(Button$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H1$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-583188148);
    sourceInformation($composer_0, 'C(H1$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-583188148, $dirty, -1, 'org.jetbrains.compose.web.dom.H1$composable (Elements.kt:527)');
      }
      TagElement$composable(get_H1(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.w16(H1$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function P$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-100692211);
    sourceInformation($composer_0, 'C(P$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-100692211, $dirty, -1, 'org.jetbrains.compose.web.dom.P$composable (Elements.kt:563)');
      }
      TagElement$composable(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.w16(P$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A$composable(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(294823474);
    sourceInformation($composer_0, 'C(A$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n12(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(294823474, $dirty, -1, 'org.jetbrains.compose.web.dom.A$composable (Elements.kt:501)');
      }
      var tmp = get_A();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = href_0._v;
      var tmp4_remember$composable = attrs_0._v;
      var tmp5_remember$composable = $composer_0;
      var tmp6_remember$composable = 14 & $dirty | 112 & $dirty;
      var $composer_1 = tmp5_remember$composable;
      $composer_1.h11(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.fv(tmp3_remember$composable) | $composer_1.fv(tmp4_remember$composable));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.A$composable.<anonymous>' call
        tmp$ret$0 = A$composable$lambda(href_0, attrs_0);
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      TagElement$composable(tmp, tmp$ret$4, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.w16(A$composable$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Img$composable(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-878444342);
    sourceInformation($composer_0, 'C(Img$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n12(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.n11()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-878444342, $dirty, -1, 'org.jetbrains.compose.web.dom.Img$composable (Elements.kt:621)');
      }
      var tmp = get_Img();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = alt_0._v;
      var tmp4_remember$composable = attrs_0._v;
      var tmp5_remember$composable = $composer_0;
      var tmp6_remember$composable = 14 & $dirty | 112 & $dirty | 896 & $dirty;
      var $composer_1 = tmp5_remember$composable;
      $composer_1.h11(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!(!!($composer_1.fv(src) | $composer_1.fv(tmp3_remember$composable)) | $composer_1.fv(tmp4_remember$composable));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.Img$composable.<anonymous>' call
        tmp$ret$0 = Img$composable$lambda(src, alt_0, attrs_0);
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      TagElement$composable(tmp, tmp$ret$4, null, $composer_0, 384);
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
      tmp0_safe_receiver.w16(Img$composable$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Style$composable(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-1688263201);
    sourceInformation($composer_0, 'C(Style$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n12(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1688263201, $dirty, -1, 'org.jetbrains.compose.web.dom.Style$composable (Elements.kt:978)');
      }
      var tmp = get_Style();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = applyAttrs_0._v;
      var tmp4_remember$composable = $composer_0;
      var tmp5_remember$composable = 14 & $dirty;
      var $composer_1 = tmp4_remember$composable;
      $composer_1.h11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.fv(tmp3_remember$composable);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().rw_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
        tmp$ret$0 = Style$composable$lambda(applyAttrs_0);
        var value = tmp$ret$0;
        tmp1_cache.k13(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.i11();
      tmp$ret$4 = tmp0;
      var tmp_2 = tmp$ret$4;
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 962227798, true, Style$composable$lambda_0(cssRules, $dirty));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_0 = $composer_0;
      var $composer_2 = tmp3_remember$composable_0;
      $composer_2.h11(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.fv(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.j13();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().rw_1) {
        var tmp$ret$5;
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref(dispatchReceiver);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.k13(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_4;
      tmp$ret$7 = tmp$ret$6;
      var tmp_5 = tmp$ret$7;
      tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.i11();
      tmp$ret$9 = tmp0_0;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      TagElement$composable(tmp, tmp_2, tmp$ret$11, $composer_0, 384);
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
      tmp0_safe_receiver.w16(Style$composable$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < tmp0_repeat);
  }
  function Div$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$composable$lambda_0($tmp3_ComposeNode$composable) {
    return function () {
      return $tmp3_ComposeNode$composable();
    };
  }
  function Text$composable$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.v1o();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_getInstance();
  }
  function Text$composable$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text$composable($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Span$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Li$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Li$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Button$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function H1$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H1$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function P$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function A$composable$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function A$composable$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A$composable($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Img$composable$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function Img$composable$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img$composable($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Style$composable$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.a1x_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).dh = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.a1x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$composable$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.v1w($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      var tmp0_safe_receiver = cssStylesheet;
      if (tmp0_safe_receiver == null)
        null;
      else {
        setCSSRules(tmp0_safe_receiver, $cssRules);
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(cssStylesheet);
      return tmp$ret$0;
    };
  }
  function Style$composable$lambda_0($cssRules, $$dirty) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $changed, -1, 'org.jetbrains.compose.web.dom.Style$composable.<anonymous> (Elements.kt:989)');
        }
        var tmp_1 = $cssRules.f();
        DisposableEffect$composable_0($cssRules, tmp_1, Style$composable$lambda$lambda($this$TagElement, $cssRules), $composer_0, 14 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.mw();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.s1o(p0, p1, p2);
    };
  }
  function Style$composable$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style$composable($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (properties_initialized_Elements_kt_gtqiqv) {
    } else {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.p1t() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    var tmp0_subject = cssRuleDeclaration;
    if (isInterface(tmp0_subject, CSSStyledRuleDeclaration)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = cssRule;
      tmp$ret$1 = tmp$ret$0;
      var cssStyleRule = tmp$ret$1;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = cssRuleDeclaration.t1t().w1u();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.t2();
        var value = element.u2();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = cssRuleDeclaration.t1t().x1u();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.t2();
        var value_0 = element_0.u2();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(tmp0_subject, CSSGroupingRuleDeclaration)) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = cssRule;
        tmp$ret$3 = tmp$ret$2;
        var cssGroupingRule = tmp$ret$3;
        // Inline function 'kotlin.collections.forEach' call
        var tmp2_forEach = cssRuleDeclaration.e1u();
        var tmp0_iterator_1 = tmp2_forEach.c();
        while (tmp0_iterator_1.d()) {
          var element_1 = tmp0_iterator_1.e();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (tmp0_subject instanceof CSSKeyframesRuleDeclaration) {
          var tmp$ret$5;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$4;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$4 = cssRule;
          tmp$ret$5 = tmp$ret$4;
          var cssGroupingRule_0 = tmp$ret$5;
          // Inline function 'kotlin.collections.forEach' call
          var tmp3_forEach = cssRuleDeclaration.n1t_1;
          var tmp0_iterator_2 = tmp3_forEach.c();
          while (tmp0_iterator_2.d()) {
            var element_2 = tmp0_iterator_2.e();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString_0(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString_0(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.p1t() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.p1t() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$0.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticEvent(nativeEvent) {
    this.b1x_1 = nativeEvent;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = this.b1x_1.target;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp.c1x_1 = tmp$ret$1;
    this.d1x_1 = this.b1x_1.bubbles;
    this.e1x_1 = this.b1x_1.cancelable;
    this.f1x_1 = this.b1x_1.composed;
    this.g1x_1 = this.b1x_1.currentTarget;
    this.h1x_1 = this.b1x_1.eventPhase;
    this.i1x_1 = this.b1x_1.defaultPrevented;
    this.j1x_1 = this.b1x_1.timeStamp;
    this.k1x_1 = this.b1x_1.type;
    this.l1x_1 = this.b1x_1.isTrusted;
    this.m1x_1 = 0;
  }
  protoOf(SyntheticEvent).n1x = function () {
    return this.b1x_1.preventDefault();
  };
  protoOf(SyntheticEvent).o1x = function () {
    return this.b1x_1.stopPropagation();
  };
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.b1y_1 = nativeEvent;
    this.c1y_1 = nativeEvent.altKey;
    this.d1y_1 = nativeEvent.button;
    this.e1y_1 = nativeEvent.buttons;
    this.f1y_1 = nativeEvent.clientX;
    this.g1y_1 = nativeEvent.clientY;
    this.h1y_1 = nativeEvent.ctrlKey;
    this.i1y_1 = nativeEvent.metaKey;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = nativeEvent;
    var tmp_0 = tmp$ret$0.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.j1y_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = nativeEvent;
    var tmp_2 = tmp$ret$1.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.k1y_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.l1y_1 = nativeEvent.offsetX;
    this.m1y_1 = nativeEvent.offsetY;
    this.n1y_1 = nativeEvent.pageX;
    this.o1y_1 = nativeEvent.pageY;
    this.p1y_1 = nativeEvent.region;
    this.q1y_1 = nativeEvent.relatedTarget;
    this.r1y_1 = nativeEvent.screenX;
    this.s1y_1 = nativeEvent.screenY;
    this.t1y_1 = nativeEvent.shiftKey;
    this.u1y_1 = nativeEvent.x;
    this.v1y_1 = nativeEvent.y;
    this.w1y_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).x1q = id;
  protoOf(EventsListenerScopeBuilder).z1q = onClick;
  protoOf(StyleScopeBuilder).s1u = property;
  protoOf(StyleScopeBuilder).t1u = property_0;
  protoOf(StyleScopeBuilder).v1u = variable;
  protoOf(CSSRuleBuilderImpl).s1u = property;
  protoOf(CSSRuleBuilderImpl).t1u = property_0;
  protoOf(CSSRuleBuilderImpl).v1u = variable;
  protoOf(StyleSheet).r1v = style_0;
  protoOf(StyleSheet).t1v = style;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).u1v = get_hover;
  protoOf(CSSRulesHolderState).p1v = add;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_6;
  _.$_$.b = Companion_getInstance_7;
  _.$_$.c = Companion_getInstance_3;
  _.$_$.d = Companion_getInstance_8;
  _.$_$.e = Companion_getInstance_5;
  _.$_$.f = Companion_getInstance_9;
  _.$_$.g = Companion_getInstance_2;
  _.$_$.h = Companion_getInstance_4;
  _.$_$.i = classes;
  _.$_$.j = id;
  _.$_$.k = AttrsScope;
  _.$_$.l = onClick;
  _.$_$.m = CSSBorder;
  _.$_$.n = CSSKeyframeRuleDeclaration;
  _.$_$.o = CSSKeyframesRuleDeclaration;
  _.$_$.p = MediaFeature;
  _.$_$.q = Raw;
  _.$_$.r = invoke;
  _.$_$.s = style;
  _.$_$.t = get_hover;
  _.$_$.u = returnHoverSelector;
  _.$_$.v = returnUniversalSelector;
  _.$_$.w = property;
  _.$_$.x = property_0;
  _.$_$.y = variable;
  _.$_$.z = StyleScopeBuilder;
  _.$_$.a1 = StyleScope;
  _.$_$.b1 = style_0;
  _.$_$.c1 = StyleSheet;
  _.$_$.d1 = alignItems;
  _.$_$.e1 = alignSelf;
  _.$_$.f1 = backgroundColor;
  _.$_$.g1 = borderRadius_0;
  _.$_$.h1 = borderRadius;
  _.$_$.i1 = borderWidth;
  _.$_$.j1 = bottom;
  _.$_$.k1 = boxSizing;
  _.$_$.l1 = color;
  _.$_$.m1 = color_0;
  _.$_$.n1 = get_cssRem;
  _.$_$.o1 = display;
  _.$_$.p1 = get_dppx;
  _.$_$.q1 = flexDirection;
  _.$_$.r1 = flexGrow;
  _.$_$.s1 = flexShrink;
  _.$_$.t1 = flexWrap;
  _.$_$.u1 = fontFamily;
  _.$_$.v1 = fontSize;
  _.$_$.w1 = gridArea;
  _.$_$.x1 = gridRowEnd;
  _.$_$.y1 = gridRowStart;
  _.$_$.z1 = gridTemplateColumns;
  _.$_$.a2 = gridTemplateRows;
  _.$_$.b2 = height;
  _.$_$.c2 = justifyContent;
  _.$_$.d2 = left;
  _.$_$.e2 = lineHeight_0;
  _.$_$.f2 = lineHeight;
  _.$_$.g2 = margin;
  _.$_$.h2 = media;
  _.$_$.i2 = minHeight;
  _.$_$.j2 = get_ms;
  _.$_$.k2 = opacity;
  _.$_$.l2 = padding;
  _.$_$.m2 = get_percent;
  _.$_$.n2 = position;
  _.$_$.o2 = get_px;
  _.$_$.p2 = rgba;
  _.$_$.q2 = right;
  _.$_$.r2 = style_1;
  _.$_$.s2 = top;
  _.$_$.t2 = unaryMinus;
  _.$_$.u2 = get_vh;
  _.$_$.v2 = width_0;
  _.$_$.w2 = width;
  _.$_$.x2 = A$composable;
  _.$_$.y2 = Button$composable;
  _.$_$.z2 = Div$composable;
  _.$_$.a3 = H1$composable;
  _.$_$.b3 = Img$composable;
  _.$_$.c3 = Li$composable;
  _.$_$.d3 = P$composable;
  _.$_$.e3 = Span$composable;
  _.$_$.f3 = Style$composable;
  _.$_$.g3 = Text$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
