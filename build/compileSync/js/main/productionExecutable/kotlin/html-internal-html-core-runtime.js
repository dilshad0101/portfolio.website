(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    root['html-internal-html-core-runtime'] = factory(typeof this['html-internal-html-core-runtime'] === 'undefined' ? {} : this['html-internal-html-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.p5;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var ensureNotNull = kotlin_kotlin.$_$.h7;
  var classMeta = kotlin_kotlin.$_$.v4;
  var VOID = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.q5;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var onBeginChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var onEndChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var CoroutineImpl = kotlin_kotlin.$_$.m4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.i5;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var objectMeta = kotlin_kotlin.$_$.o5;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var plus = kotlin_kotlin.$_$.l4;
  var get = kotlin_kotlin.$_$.d4;
  var fold = kotlin_kotlin.$_$.h4;
  var minusKey = kotlin_kotlin.$_$.e4;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DomNodeWrapper, 'DomNodeWrapper', classMeta);
  setMetadataFor(DomApplier, 'DomApplier', classMeta, AbstractApplier);
  setMetadataFor(GlobalSnapshotManager$schedule$slambda, 'GlobalSnapshotManager$schedule$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(GlobalSnapshotManager, 'GlobalSnapshotManager', objectMeta);
  setMetadataFor(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(renderComposable$composable$slambda, 'renderComposable$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(renderComposable$composable$scope$1, VOID, classMeta);
  //endregion
  function DomNodeWrapper(node) {
    this.t1o_1 = node;
    this.u1o_1 = 0;
  }
  protoOf(DomNodeWrapper).v1o = function () {
    return this.t1o_1;
  };
  protoOf(DomNodeWrapper).w1o = function (index, nodeWrapper) {
    var length = this.v1o().childNodes.length;
    if (index < length) {
      var tmp = this.v1o();
      var tmp_0 = nodeWrapper.v1o();
      var tmp$ret$1;
      // Inline function 'org.w3c.dom.get' call
      var tmp0_get = this.v1o().childNodes;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_get;
      tmp$ret$1 = tmp$ret$0[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.v1o().appendChild(nodeWrapper.v1o());
    }
  };
  protoOf(DomNodeWrapper).np = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.v1o();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.v1o().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).op = function (from, to, count) {
    if (from === to) {
      return Unit_getInstance();
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.v1o();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.v1o().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.v1o();
        var tmp$ret$3;
        // Inline function 'org.w3c.dom.get' call
        var tmp1_get = this.v1o().childNodes;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_get;
        tmp$ret$3 = tmp$ret$2[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.b1p_1 = 0;
  }
  protoOf(DomApplier).c1p = function (index, instance) {
  };
  protoOf(DomApplier).lp = function (index, instance) {
    return this.c1p(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).d1p = function (index, instance) {
    this.gp().w1o(index, instance);
  };
  protoOf(DomApplier).mp = function (index, instance) {
    return this.d1p(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).np = function (index, count) {
    this.gp().np(index, count);
  };
  protoOf(DomApplier).op = function (from, to, count) {
    this.gp().op(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.j1p_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.j1p_1.d6();
    $this.k1p_1 = false;
  }
  function schedule($this, block) {
    $this.j1p_1.a(block);
    if (!$this.k1p_1) {
      $this.k1p_1 = true;
      launch($this.h1p_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().f1p_1) {
      GlobalSnapshotManager_getInstance().f1p_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().f1p_1 = false;
    Companion_getInstance().y18();
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).l19 = function ($this$launch, $completion) {
    var tmp = this.m19($this$launch, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).gd = function (p1, $completion) {
    return this.l19((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        if (tmp === 0) {
          this.mc_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.oc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).m19 = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.u1p_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.l19($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.e1p_1 = false;
    this.f1p_1 = false;
    this.g1p_1 = null;
    this.h1p_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).z3(SupervisorJob()));
    var tmp = this;
    tmp.i1p_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.j1p_1 = tmp$ret$0;
    this.k1p_1 = false;
    this.l1p_1 = 8;
  }
  protoOf(GlobalSnapshotManager).v1p = function () {
    if (!this.e1p_1) {
      this.e1p_1 = true;
      this.g1p_1 = Companion_getInstance().s1j(this.i1p_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.uh();
      return Unit_getInstance();
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.x1p_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).di = function (context, block) {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable$composable(rootElementId, content) {
    return renderComposable$composable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable$composable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().v1p();
    var context = monotonicFrameClock.z3(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$composable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$composable$scope$1(root);
    composition.k16(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$composable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$composable$slambda($recomposer, resultContinuation) {
    this.g1q_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$composable$slambda).l19 = function ($this$launch, $completion) {
    var tmp = this.m19($this$launch, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  protoOf(renderComposable$composable$slambda).gd = function (p1, $completion) {
    return this.l19((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$composable$slambda).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 2;
            this.lc_1 = 1;
            suspendResult = this.g1q_1.z1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.oc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.mc_1 === 2) {
          throw e;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$composable$slambda).m19 = function ($this$launch, completion) {
    var i = new renderComposable$composable$slambda(this.g1q_1, completion);
    i.h1q_1 = $this$launch;
    return i;
  };
  function renderComposable$composable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$composable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.l19($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$composable$scope$1($root) {
    this.i1q_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.l11(p0, p1);
    };
  }
  function renderComposable$composable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable$composable.<anonymous> (renderComposable.kt:59)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: post-declaration
  protoOf(DomApplier).hp = onBeginChanges;
  protoOf(DomApplier).ip = onEndChanges;
  protoOf(JsMicrotasksDispatcher).z3 = plus;
  protoOf(JsMicrotasksDispatcher).s3 = get;
  protoOf(JsMicrotasksDispatcher).y3 = fold;
  protoOf(JsMicrotasksDispatcher).x3 = minusKey;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
