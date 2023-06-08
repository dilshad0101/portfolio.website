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
  var protoOf = kotlin_kotlin.$_$.q5;
  var objectCreate = kotlin_kotlin.$_$.o5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.s1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var equals = kotlin_kotlin.$_$.z4;
  var hashCode = kotlin_kotlin.$_$.e5;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var classMeta = kotlin_kotlin.$_$.w4;
  var VOID = kotlin_kotlin.$_$.u7;
  var setMetadataFor = kotlin_kotlin.$_$.r5;
  var objectMeta = kotlin_kotlin.$_$.p5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var toString = kotlin_kotlin.$_$.s5;
  var joinToString = kotlin_kotlin.$_$.c3;
  var THROW_CCE = kotlin_kotlin.$_$.e7;
  var joinToString_0 = kotlin_kotlin.$_$.d3;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.j1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var listOfNotNull = kotlin_kotlin.$_$.h3;
  var charSequenceLength = kotlin_kotlin.$_$.v4;
  var charSequenceGet = kotlin_kotlin.$_$.u4;
  var isWhitespace = kotlin_kotlin.$_$.m6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var copyToArray = kotlin_kotlin.$_$.r2;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var isBlank = kotlin_kotlin.$_$.k6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var isUpperCase = kotlin_kotlin.$_$.l6;
  var decapitalize = kotlin_kotlin.$_$.f6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(AlignSelf, 'AlignSelf', classMeta);
  setMetadataFor(AlignSelfKeyword, 'AlignSelfKeyword', classMeta, AlignSelf);
  setMetadataFor(AlignSelfPosition, 'AlignSelfPosition', classMeta, AlignSelfKeyword);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsKeyword, 'JustifyItemsKeyword', classMeta, JustifyItems);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItemsKeyword);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfKeyword, 'JustifySelfKeyword', classMeta, JustifySelf);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelfKeyword);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(CSSBackground, 'CSSBackground', classMeta);
  setMetadataFor(BackgroundSize, 'BackgroundSize', classMeta);
  setMetadataFor(Size, 'Size', classMeta, BackgroundSize);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(BackgroundPosition, 'BackgroundPosition', classMeta);
  setMetadataFor(Position, 'Position', classMeta, BackgroundPosition);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(BackgroundOrigin, 'BackgroundOrigin', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(BackgroundClip, 'BackgroundClip', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(CSSPosition, 'CSSPosition', classMeta);
  setMetadataFor(Edge, 'Edge', classMeta);
  setMetadataFor(EdgeXOrCenter, 'EdgeXOrCenter', classMeta, Edge);
  setMetadataFor(EdgeYOrCenter, 'EdgeYOrCenter', classMeta, Edge);
  setMetadataFor(EdgeX, 'EdgeX', classMeta, EdgeXOrCenter);
  setMetadataFor(EdgeY, 'EdgeY', classMeta, EdgeYOrCenter);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Filter, 'Filter', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FontSize, 'FontSize', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(MaxWidth, 'MaxWidth', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.y1z_1 = wrapped;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.z1z_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0.a20_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$2 = LinkedHashSet_init_$Create$();
    tmp_1.b20_1 = tmp$ret$2;
    this.c20_1 = null;
    this.d20_1 = 8;
  }
  protoOf(ComparableAttrsScope).l1r = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.z1z_1;
    tmp0_set.x2(attr, value);
    this.y1z_1.l1r(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).x1r = function (classes) {
    this.a20_1.t(classes);
  };
  protoOf(ComparableAttrsScope).a1s = function (listener) {
    this.b20_1.a(listener);
    this.y1z_1.a1s(listener);
  };
  protoOf(ComparableAttrsScope).w1r = function (builder) {
    var tmp0_elvis_lhs = this.c20_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.c20_1 = style;
    this.y1z_1.w1r(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.z1z_1, this.z1z_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.a20_1, this.a20_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.b20_1, this.b20_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.c20_1, this.c20_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.z1z_1);
    result = imul(31, result) + hashCode(this.a20_1) | 0;
    result = imul(31, result) + hashCode(this.b20_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.c20_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).l1r = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).x1r = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).a1s = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).w1r = function (builder) {
    return Unit_getInstance();
  };
  function AlignSelfKeyword(value) {
    AlignSelf.call(this, value);
    this.g20_1 = 0;
  }
  function AlignSelfPosition(value) {
    AlignSelfKeyword.call(this, value);
    this.k20_1 = 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).l20 = function () {
    return new AlignSelfPosition('center');
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AlignSelf(value) {
    Companion_getInstance();
    this.m20_1 = value;
    this.n20_1 = 0;
  }
  protoOf(AlignSelf).toString = function () {
    return this.m20_1;
  };
  function alignSelf(_this__u8e3s4, alignSelf) {
    _this__u8e3s4.s1v('align-self', alignSelf);
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.s1v('justify-items', justifyItems);
  }
  function JustifyItemsKeyword(value) {
    JustifyItems.call(this, value);
    this.q20_1 = 0;
  }
  function JustifyItemsPosition(value) {
    JustifyItemsKeyword.call(this, value);
    this.u20_1 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).l20 = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion_0).v20 = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion_0).w20 = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JustifyItems(value) {
    Companion_getInstance_0();
    this.x20_1 = value;
    this.y20_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.x20_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.s1v('justify-self', justifySelf);
  }
  function JustifySelfKeyword(value) {
    JustifySelf.call(this, value);
    this.b21_1 = 0;
  }
  function JustifySelfPosition(value) {
    JustifySelfKeyword.call(this, value);
    this.f21_1 = 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).l20 = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_1).v20 = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_1).w20 = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JustifySelf(value) {
    Companion_getInstance_1();
    this.g21_1 = value;
    this.h21_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.g21_1;
  };
  function CSSBackground(image, color, repeat, position, size, origin, clip, attachment) {
    image = image === VOID ? null : image;
    color = color === VOID ? null : color;
    repeat = repeat === VOID ? null : repeat;
    position = position === VOID ? null : position;
    size = size === VOID ? null : size;
    origin = origin === VOID ? null : origin;
    clip = clip === VOID ? null : clip;
    attachment = attachment === VOID ? null : attachment;
    this.i21_1 = image;
    this.j21_1 = color;
    this.k21_1 = repeat;
    this.l21_1 = position;
    this.m21_1 = size;
    this.n21_1 = origin;
    this.o21_1 = clip;
    this.p21_1 = attachment;
    this.q21_1 = 8;
  }
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
    var tmp0_safe_receiver = this.i21_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$0 = tmp0_apply.a(tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp1_safe_receiver = this.j21_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$2 = tmp0_apply.a(toString(tmp1_safe_receiver));
      tmp$ret$3 = tmp$ret$2;
    }
    var tmp2_safe_receiver = this.k21_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$4 = tmp0_apply.a(tmp2_safe_receiver);
      tmp$ret$5 = tmp$ret$4;
    }
    var tmp3_safe_receiver = this.l21_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      tmp$ret$6 = tmp0_apply.a(tmp3_safe_receiver.toString());
      tmp$ret$7 = tmp$ret$6;
    }
    var tmp4_safe_receiver = this.m21_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      if (this.l21_1 == null) {
        tmp0_apply.a(Companion_getInstance_3().s21(Companion_getInstance_6().r21()));
      }
      tmp0_apply.a('/');
      tmp$ret$8 = tmp0_apply.a(tmp4_safe_receiver.toString());
      tmp$ret$9 = tmp$ret$8;
    }
    var tmp5_safe_receiver = this.n21_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_apply.a(tmp5_safe_receiver);
      var tmp;
      if (this.o21_1 == null) {
        tmp0_apply.a(Companion_getInstance_5().t21().toString());
        tmp = Unit_getInstance();
      }
      tmp$ret$10 = tmp;
    }
    var tmp6_safe_receiver = this.o21_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      if (this.n21_1 == null) {
        tmp0_apply.a(Companion_getInstance_4().u21().toString());
      }
      tmp$ret$11 = tmp0_apply.a(tmp6_safe_receiver);
      tmp$ret$12 = tmp$ret$11;
    }
    var tmp7_safe_receiver = this.p21_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_apply.a(tmp7_safe_receiver);
      tmp$ret$13 = Unit_getInstance();
    }
    tmp$ret$14 = tmp0_apply;
    tmp$ret$15 = tmp$ret$14.h7();
    tmp$ret$16 = tmp$ret$15;
    return joinToString(tmp$ret$16, ' ');
  };
  protoOf(CSSBackground).hashCode = function () {
    var result = this.i21_1 == null ? 0 : hashCode(this.i21_1);
    result = imul(result, 31) + (this.j21_1 == null ? 0 : hashCode(this.j21_1)) | 0;
    result = imul(result, 31) + (this.k21_1 == null ? 0 : hashCode(this.k21_1)) | 0;
    result = imul(result, 31) + (this.l21_1 == null ? 0 : hashCode(this.l21_1)) | 0;
    result = imul(result, 31) + (this.m21_1 == null ? 0 : hashCode(this.m21_1)) | 0;
    result = imul(result, 31) + (this.n21_1 == null ? 0 : hashCode(this.n21_1)) | 0;
    result = imul(result, 31) + (this.o21_1 == null ? 0 : hashCode(this.o21_1)) | 0;
    result = imul(result, 31) + (this.p21_1 == null ? 0 : hashCode(this.p21_1)) | 0;
    return result;
  };
  protoOf(CSSBackground).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSBackground))
      return false;
    var tmp0_other_with_cast = other instanceof CSSBackground ? other : THROW_CCE();
    if (!equals(this.i21_1, tmp0_other_with_cast.i21_1))
      return false;
    if (!equals(this.j21_1, tmp0_other_with_cast.j21_1))
      return false;
    if (!equals(this.k21_1, tmp0_other_with_cast.k21_1))
      return false;
    if (!equals(this.l21_1, tmp0_other_with_cast.l21_1))
      return false;
    if (!equals(this.m21_1, tmp0_other_with_cast.m21_1))
      return false;
    if (!equals(this.n21_1, tmp0_other_with_cast.n21_1))
      return false;
    if (!equals(this.o21_1, tmp0_other_with_cast.o21_1))
      return false;
    if (!equals(this.p21_1, tmp0_other_with_cast.p21_1))
      return false;
    return true;
  };
  function Size(value) {
    BackgroundSize.call(this, value);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).v21 = function (width) {
    return new Size('' + width);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function BackgroundSize(value) {
    Companion_getInstance_2();
    this.w21_1 = value;
    this.x21_1 = 0;
  }
  protoOf(BackgroundSize).toString = function () {
    return this.w21_1;
  };
  function background(_this__u8e3s4, backgrounds) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = backgrounds.length === 0;
    tmp$ret$1 = !tmp$ret$0;
    if (tmp$ret$1) {
      _this__u8e3s4.t1v('background', joinToString_0(backgrounds, ', '));
    }
  }
  function Position(position) {
    BackgroundPosition.call(this, '' + position);
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).s21 = function (position) {
    return new Position(position);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function BackgroundPosition(value) {
    Companion_getInstance_3();
    this.y21_1 = value;
    this.z21_1 = 0;
  }
  protoOf(BackgroundPosition).toString = function () {
    return this.y21_1;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).u21 = function () {
    return new BackgroundOrigin('padding-box');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function BackgroundOrigin(value) {
    Companion_getInstance_4();
    this.a22_1 = value;
    this.b22_1 = 0;
  }
  protoOf(BackgroundOrigin).toString = function () {
    return this.a22_1;
  };
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).t21 = function () {
    return new BackgroundClip('border-box');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function BackgroundClip(value) {
    Companion_getInstance_5();
    this.c22_1 = value;
    this.d22_1 = 0;
  }
  protoOf(BackgroundClip).toString = function () {
    return this.c22_1;
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
    _this__u8e3s4.t1v('border-style', tmp$ret$2);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.s1v('border-top', tmp$ret$0);
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
      tmp0_apply.va('inset');
      tmp0_apply.t4(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.ua(offsetX);
    tmp0_apply.t4(_Char___init__impl__6a9atx(32));
    tmp0_apply.ua(offsetY);
    if (!(blurRadius == null)) {
      tmp0_apply.t4(_Char___init__impl__6a9atx(32));
      tmp0_apply.ua(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        tmp0_apply.t4(_Char___init__impl__6a9atx(32));
        tmp0_apply.t4(_Char___init__impl__6a9atx(48));
      }
      tmp0_apply.t4(_Char___init__impl__6a9atx(32));
      tmp0_apply.ua(spreadRadius);
    }
    if (!(color == null)) {
      tmp0_apply.t4(_Char___init__impl__6a9atx(32));
      tmp0_apply.ua(color);
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.t1v('box-shadow', value);
  }
  function CSSPosition_init_$Init$(xAnchor, yAnchor, $this) {
    CSSPosition.call($this, '' + xAnchor + ' ' + yAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$(xAnchor, yAnchor) {
    return CSSPosition_init_$Init$(xAnchor, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).r21 = function () {
    return CSSPosition_init_$Create$(Companion_getInstance_7().e22(), Companion_getInstance_7().f22());
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function CSSPosition(value) {
    Companion_getInstance_6();
    this.g22_1 = value;
    this.h22_1 = 0;
  }
  protoOf(CSSPosition).toString = function () {
    return this.g22_1;
  };
  function EdgeXOrCenter(value) {
    Edge.call(this, value);
    this.k22_1 = 0;
  }
  function EdgeYOrCenter(value) {
    Edge.call(this, value);
    this.n22_1 = 0;
  }
  function EdgeX(value) {
    EdgeXOrCenter.call(this, value);
    this.r22_1 = 0;
  }
  function EdgeY(value) {
    EdgeYOrCenter.call(this, value);
    this.v22_1 = 0;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).f22 = function () {
    return new EdgeY('top');
  };
  protoOf(Companion_7).e22 = function () {
    return new EdgeX('left');
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Edge(value) {
    Companion_getInstance_7();
    this.w22_1 = value;
    this.x22_1 = 0;
  }
  protoOf(Edge).toString = function () {
    return this.w22_1;
  };
  function ComparableStyleScope() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.y22_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.z22_1 = tmp$ret$1;
    this.a23_1 = 0;
  }
  protoOf(ComparableStyleScope).s1v = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.y22_1;
    var tmp1_set = toString(value);
    tmp0_set.x2(propertyName, tmp1_set);
  };
  protoOf(ComparableStyleScope).v1v = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.z22_1;
    var tmp1_set = toString(value);
    tmp0_set.x2(variableName, tmp1_set);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.y22_1, other.y22_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.z22_1, other.z22_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.y22_1);
    result = imul(31, result) + hashCode(this.z22_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.y22_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = _this__u8e3s4.z22_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).b23 = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_8).c23 = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Cursor(value) {
    Companion_getInstance_8();
    this.d23_1 = value;
    this.e23_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.d23_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.s1v('cursor', cursor);
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.f23_1 = new Filter('none');
    this.g23_1 = new Filter('inherit');
    this.h23_1 = new Filter('initial');
    this.i23_1 = new Filter('revert');
    this.j23_1 = new Filter('unset');
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Filter(value) {
    Companion_getInstance_9();
    this.k23_1 = value;
    this.l23_1 = 0;
  }
  protoOf(Filter).toString = function () {
    return this.k23_1;
  };
  function backdropFilter(_this__u8e3s4, backdropFilter) {
    _this__u8e3s4.s1v('backdrop-filter', backdropFilter);
  }
  function flexBasis(_this__u8e3s4, value) {
    _this__u8e3s4.s1v('flex-basis', value);
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).m23 = function () {
    return new FontSize('xx-small');
  };
  protoOf(Companion_10).n23 = function () {
    return new FontSize('smaller');
  };
  protoOf(Companion_10).o23 = function () {
    return new FontSize('larger');
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontSize(value) {
    Companion_getInstance_10();
    this.p23_1 = value;
    this.q23_1 = 0;
  }
  protoOf(FontSize).toString = function () {
    return this.p23_1;
  };
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).r23 = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_11).s23 = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_11).t23 = function () {
    return new FontWeight('900');
  };
  protoOf(Companion_11).u23 = function () {
    return new FontWeight('bold');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FontWeight(value) {
    Companion_getInstance_11();
    this.v23_1 = value;
    this.w23_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.v23_1;
  };
  function fontSize(_this__u8e3s4, size) {
    _this__u8e3s4.s1v('font-size', size);
  }
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.s1v('font-weight', weight);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.x23_1 = new MaxWidth('fit-content');
    this.y23_1 = new MaxWidth('max-content');
    this.z23_1 = new MaxWidth('min-content');
    this.a24_1 = new MaxWidth('none');
    this.b24_1 = new MaxWidth('inherit');
    this.c24_1 = new MaxWidth('initial');
    this.d24_1 = new MaxWidth('revert');
    this.e24_1 = new MaxWidth('unset');
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function MaxWidth(value) {
    Companion_getInstance_12();
    this.f24_1 = value;
    this.g24_1 = 0;
  }
  protoOf(MaxWidth).toString = function () {
    return this.f24_1;
  };
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.t1v('padding-inline', joinToString_0(value, ' '));
  }
  function maxWidth(_this__u8e3s4, maxWidth) {
    _this__u8e3s4.s1v('max-width', maxWidth);
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).h24 = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ObjectFit(value) {
    Companion_getInstance_13();
    this.i24_1 = value;
    this.j24_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.i24_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.s1v('object-fit', objectFit);
  }
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
    _this__u8e3s4.s1v('outline', tmp$ret$0);
  }
  function CSSOutline() {
    this.k24_1 = null;
    this.l24_1 = null;
    this.m24_1 = null;
    this.n24_1 = 8;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.k24_1, other.k24_1) ? equals(this.l24_1, other.l24_1) : false) ? equals(this.m24_1, other.m24_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.m24_1, this.l24_1, this.k24_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.k24_1 = $width;
      $this$outline.l24_1 = $style;
      $this$outline.m24_1 = $color;
      return Unit_getInstance();
    };
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).o24 = function () {
    return new UserSelect('none');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function UserSelect(value) {
    Companion_getInstance_14();
    this.p24_1 = value;
    this.q24_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.p24_1;
  };
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).r24 = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_15).o24 = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_15();
    this.s24_1 = value;
    this.t24_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.s24_1;
  };
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).e22 = function () {
    return new TextAlign('left');
  };
  protoOf(Companion_16).l20 = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_16).v20 = function () {
    return new TextAlign('start');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function TextAlign(value) {
    Companion_getInstance_16();
    this.u24_1 = value;
    this.v24_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.u24_1;
  };
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).w24 = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function WhiteSpace(value) {
    Companion_getInstance_17();
    this.x24_1 = value;
    this.y24_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.x24_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.s1v('user-select', userSelect);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.t1v('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.s1v('text-align', textAlign);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.s1v('white-space', whiteSpace);
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_19().z24(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_18();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.a25_1 = property;
    this.b25_1 = duration;
    this.c25_1 = timingFunction;
    this.d25_1 = delay;
    this.e25_1 = 0;
  }
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
    tmp0_apply.a(this.a25_1.toString());
    var tmp0_safe_receiver = this.b25_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp$ret$0 = tmp0_apply.a(toString(tmp0_safe_receiver));
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp1_safe_receiver = this.c25_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp$ret$2 = tmp0_apply.a(toString(tmp1_safe_receiver));
      tmp$ret$3 = tmp$ret$2;
    }
    if (!(this.d25_1 == null)) {
      if (this.b25_1 == null) {
        tmp0_apply.a('0s');
      }
      tmp0_apply.a(toString(this.d25_1));
    }
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4.h7();
    tmp$ret$6 = tmp$ret$5;
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.a25_1);
    result = imul(result, 31) + (this.b25_1 == null ? 0 : hashCode(this.b25_1)) | 0;
    result = imul(result, 31) + (this.c25_1 == null ? 0 : hashCode(this.c25_1)) | 0;
    result = imul(result, 31) + (this.d25_1 == null ? 0 : hashCode(this.d25_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.a25_1, tmp0_other_with_cast.a25_1))
      return false;
    if (!equals(this.b25_1, tmp0_other_with_cast.b25_1))
      return false;
    if (!equals(this.c25_1, tmp0_other_with_cast.c25_1))
      return false;
    if (!equals(this.d25_1, tmp0_other_with_cast.d25_1))
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
      _this__u8e3s4.t1v('transition', joinToString_0(transitions));
    }
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).z24 = function (customValue) {
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
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TransitionProperty(value) {
    Companion_getInstance_19();
    this.f25_1 = value;
    this.g25_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.f25_1;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.k11(1682539725);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:89)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.l11();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = scope.h25_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = element.j25_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
      var tmp = tmp$ret$0.slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda(element, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
  }
  function registerRefScope$composable$lambda($element, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $element.k25_1.l25($this$DisposableEffect, $this_registerRefScope$composable.w1x($this$DisposableEffect));
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
          words.a(currentWord.toString());
          currentWord.wa();
        }
      }
      currentWord.t4(element);
    }
    words.a(currentWord.toString());
    return joinToString(words, '-', VOID, VOID, VOID, VOID, titleCamelCaseToKebabCase$lambda);
  }
  function titleCamelCaseToKebabCase$lambda(it) {
    return decapitalize(it);
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).y1r = classes;
  protoOf(ComparableAttrsScope).z1r = id;
  protoOf(ComparableAttrsScope).b1s = onClick;
  protoOf(DummyAttrsScope).y1r = classes;
  protoOf(DummyAttrsScope).z1r = id;
  protoOf(DummyAttrsScope).b1s = onClick;
  protoOf(ComparableStyleScope).t1v = property;
  protoOf(ComparableStyleScope).u1v = property_0;
  protoOf(ComparableStyleScope).w1v = variable;
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
  _.$_$.c1 = Companion_getInstance;
  _.$_$.d1 = Companion_getInstance_2;
  _.$_$.e1 = Companion_getInstance_8;
  _.$_$.f1 = Companion_getInstance_9;
  _.$_$.g1 = Companion_getInstance_10;
  _.$_$.h1 = Companion_getInstance_11;
  _.$_$.i1 = Companion_getInstance_0;
  _.$_$.j1 = Companion_getInstance_1;
  _.$_$.k1 = Companion_getInstance_12;
  _.$_$.l1 = Companion_getInstance_13;
  _.$_$.m1 = Companion_getInstance_16;
  _.$_$.n1 = Companion_getInstance_15;
  _.$_$.o1 = Companion_getInstance_14;
  _.$_$.p1 = Companion_getInstance_17;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-compose-html-ext.js.map
