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
  var protoOf = kotlin_kotlin.$_$.q5;
  var Unit_getInstance = kotlin_kotlin.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.j7;
  var classMeta = kotlin_kotlin.$_$.w4;
  var VOID = kotlin_kotlin.$_$.u7;
  var setMetadataFor = kotlin_kotlin.$_$.r5;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.e7;
  var onBeginChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var onEndChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var CoroutineImpl = kotlin_kotlin.$_$.n4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.j5;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var objectMeta = kotlin_kotlin.$_$.p5;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var plus = kotlin_kotlin.$_$.m4;
  var get = kotlin_kotlin.$_$.e4;
  var fold = kotlin_kotlin.$_$.i4;
  var minusKey = kotlin_kotlin.$_$.f4;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
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
    this.v1p_1 = node;
    this.w1p_1 = 0;
  }
  protoOf(DomNodeWrapper).x1p = function () {
    return this.v1p_1;
  };
  protoOf(DomNodeWrapper).y1p = function (index, nodeWrapper) {
    var length = this.x1p().childNodes.length;
    if (index < length) {
      var tmp = this.x1p();
      var tmp_0 = nodeWrapper.x1p();
      var tmp$ret$1;
      // Inline function 'org.w3c.dom.get' call
      var tmp0_get = this.x1p().childNodes;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_get;
      tmp$ret$1 = tmp$ret$0[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.x1p().appendChild(nodeWrapper.x1p());
    }
  };
  protoOf(DomNodeWrapper).qp = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.x1p();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.x1p().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).rp = function (from, to, count) {
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
        var tmp = this.x1p();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.x1p().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.x1p();
        var tmp$ret$3;
        // Inline function 'org.w3c.dom.get' call
        var tmp1_get = this.x1p().childNodes;
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
    this.d1q_1 = 0;
  }
  protoOf(DomApplier).e1q = function (index, instance) {
  };
  protoOf(DomApplier).op = function (index, instance) {
    return this.e1q(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).f1q = function (index, instance) {
    this.jp().y1p(index, instance);
  };
  protoOf(DomApplier).pp = function (index, instance) {
    return this.f1q(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).qp = function (index, count) {
    this.jp().qp(index, count);
  };
  protoOf(DomApplier).rp = function (from, to, count) {
    this.jp().rp(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.l1q_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.l1q_1.d6();
    $this.m1q_1 = false;
  }
  function schedule($this, block) {
    $this.l1q_1.a(block);
    if (!$this.m1q_1) {
      $this.m1q_1 = true;
      launch($this.j1q_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().h1q_1) {
      GlobalSnapshotManager_getInstance().h1q_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().h1q_1 = false;
    Companion_getInstance().c1a();
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).v18 = function ($this$launch, $completion) {
    var tmp = this.w18($this$launch, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).jd = function (p1, $completion) {
    return this.v18((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        if (tmp === 0) {
          this.pc_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).w18 = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.w1q_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v18($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.g1q_1 = false;
    this.h1q_1 = false;
    this.i1q_1 = null;
    this.j1q_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).b4(SupervisorJob()));
    var tmp = this;
    tmp.k1q_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.l1q_1 = tmp$ret$0;
    this.m1q_1 = false;
    this.n1q_1 = 8;
  }
  protoOf(GlobalSnapshotManager).x1q = function () {
    if (!this.g1q_1) {
      this.g1q_1 = true;
      this.i1q_1 = Companion_getInstance().u1k(this.k1q_1);
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
      $block.xh();
      return Unit_getInstance();
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.z1q_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).gi = function (context, block) {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable$composable(rootElementId, content) {
    return renderComposable$composable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable$composable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().x1q();
    var context = monotonicFrameClock.b4(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$composable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$composable$scope$1(root);
    composition.n16(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$composable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$composable$slambda($recomposer, resultContinuation) {
    this.i1r_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$composable$slambda).v18 = function ($this$launch, $completion) {
    var tmp = this.w18($this$launch, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(renderComposable$composable$slambda).jd = function (p1, $completion) {
    return this.v18((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$composable$slambda).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 2;
            this.oc_1 = 1;
            suspendResult = this.i1r_1.b1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.pc_1 === 2) {
          throw e;
        } else {
          this.oc_1 = this.pc_1;
          this.rc_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$composable$slambda).w18 = function ($this$launch, completion) {
    var i = new renderComposable$composable$slambda(this.i1r_1, completion);
    i.j1r_1 = $this$launch;
    return i;
  };
  function renderComposable$composable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$composable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v18($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$composable$scope$1($root) {
    this.k1r_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.o11(p0, p1);
    };
  }
  function renderComposable$composable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.q11()) {
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
        $composer_0.pw();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(DomApplier).kp = onBeginChanges;
  protoOf(DomApplier).lp = onEndChanges;
  protoOf(JsMicrotasksDispatcher).b4 = plus;
  protoOf(JsMicrotasksDispatcher).u3 = get;
  protoOf(JsMicrotasksDispatcher).a4 = fold;
  protoOf(JsMicrotasksDispatcher).z3 = minusKey;
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
