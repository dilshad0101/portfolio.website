(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.q5;
  var THROW_CCE = kotlin_kotlin.$_$.e7;
  var isObject = kotlin_kotlin.$_$.k5;
  var Unit_getInstance = kotlin_kotlin.$_$.s1;
  var plus = kotlin_kotlin.$_$.m4;
  var get = kotlin_kotlin.$_$.j4;
  var fold = kotlin_kotlin.$_$.i4;
  var minusKey = kotlin_kotlin.$_$.k4;
  var Continuation = kotlin_kotlin.$_$.h4;
  var classMeta = kotlin_kotlin.$_$.w4;
  var VOID = kotlin_kotlin.$_$.u7;
  var setMetadataFor = kotlin_kotlin.$_$.r5;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.o1;
  var Key_getInstance = kotlin_kotlin.$_$.n1;
  var equals = kotlin_kotlin.$_$.z4;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.a4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.b4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z3;
  var interfaceMeta = kotlin_kotlin.$_$.g5;
  var isInterface = kotlin_kotlin.$_$.j5;
  var toString = kotlin_kotlin.$_$.s7;
  var toString_0 = kotlin_kotlin.$_$.s5;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.p5;
  var hashCode = kotlin_kotlin.$_$.e5;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.n;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.l1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m1;
  var Companion_getInstance = kotlin_kotlin.$_$.r1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k1;
  var createFailure = kotlin_kotlin.$_$.i7;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.d4;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.c4;
  var get_0 = kotlin_kotlin.$_$.e4;
  var minusKey_0 = kotlin_kotlin.$_$.f4;
  var ContinuationInterceptor = kotlin_kotlin.$_$.g4;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Enum = kotlin_kotlin.$_$.y6;
  var startCoroutine = kotlin_kotlin.$_$.o4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l7;
  var Long = kotlin_kotlin.$_$.c7;
  var RuntimeException = kotlin_kotlin.$_$.d7;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.e1;
  var captureStack = kotlin_kotlin.$_$.s4;
  var Error_0 = kotlin_kotlin.$_$.z6;
  var Error_init_$Init$ = kotlin_kotlin.$_$.u;
  var Element = kotlin_kotlin.$_$.l4;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var CancellationException = kotlin_kotlin.$_$.y3;
  var ArrayList = kotlin_kotlin.$_$.a2;
  var CoroutineImpl = kotlin_kotlin.$_$.n4;
  var SequenceScope = kotlin_kotlin.$_$.b6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var sequence = kotlin_kotlin.$_$.c6;
  var anyToString = kotlin_kotlin.$_$.q4;
  var UnsupportedOperationException = kotlin_kotlin.$_$.f7;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var arrayIterator = kotlin_kotlin.$_$.r4;
  var fillArrayVal = kotlin_kotlin.$_$.a5;
  var arrayCopy = kotlin_kotlin.$_$.l2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.j7;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.o;
  var getStringHashCode = kotlin_kotlin.$_$.d5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.i;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.af(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.af.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.we(onCancelling, invokeImmediately, handler) : $super.we.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.fg(cause) : $super.fg.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, VOID, VOID, VOID, [1]);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.qd(parentContext.u3(Key_getInstance_2()));
    }
    this.td_1 = parentContext.b4(this);
  }
  protoOf(AbstractCoroutine).l3 = function () {
    return this.td_1;
  };
  protoOf(AbstractCoroutine).ud = function () {
    return this.td_1;
  };
  protoOf(AbstractCoroutine).vd = function () {
    return protoOf(JobSupport).vd.call(this);
  };
  protoOf(AbstractCoroutine).wd = function (value) {
  };
  protoOf(AbstractCoroutine).xd = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).yd = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).zd = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.xd(state.ae_1, state.ce());
    } else {
      this.wd((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).j3 = function (result) {
    var state = this.de(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.ee(state);
  };
  protoOf(AbstractCoroutine).ee = function (state) {
    return this.fe(state);
  };
  protoOf(AbstractCoroutine).ge = function (exception) {
    handleCoroutineException(this.td_1, exception);
  };
  protoOf(AbstractCoroutine).he = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.td_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).he.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).he.call(this);
  };
  protoOf(AbstractCoroutine).ie = function (start, receiver, block) {
    start.le(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.nf() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.ie(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $completion;
      var oldContext = tmp0__anonymous__q1qw7t.l3();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, tmp0__anonymous__q1qw7t);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.u3(Key_getInstance()), oldContext.u3(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.tf();
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).lf = function (exception) {
    handleCoroutineException(this.td_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.ag_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).re = function () {
    startCoroutineCancellable_0(this.ag_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.sf_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.sf_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.sf_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.sf_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.sf_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).fe = function (state) {
    this.ee(state);
  };
  protoOf(DispatchedCoroutine).ee = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.eg_1), recoverResult(state, this.eg_1));
  };
  protoOf(DispatchedCoroutine).tf = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.oe());
    if (state instanceof CompletedExceptionally)
      throw state.ae_1;
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.oe();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.vg_1)) {
      var tmp_0 = $this.jg_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).ug();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.jg_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.wg(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.l3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.lg_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.lg_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.lg_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.lg_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.l3().u3(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.xe(true, VOID, tmp$ret$1);
    $this.ng_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.jg_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xg($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.yg();
    $this.fg(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.mg_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.mg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.dh()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.zg(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.ae_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.yg();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.jg_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.kg_1 = this.jg_1.l3();
    this.lg_1 = atomic$int$1(0);
    this.mg_1 = atomic$ref$1(Active_getInstance());
    this.ng_1 = null;
  }
  protoOf(CancellableContinuationImpl).eh = function () {
    return this.jg_1;
  };
  protoOf(CancellableContinuationImpl).l3 = function () {
    return this.kg_1;
  };
  protoOf(CancellableContinuationImpl).oe = function () {
    return this.mg_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).pe = function () {
    var tmp = this.oe();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).fh = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.pe()) {
      handle.gh();
      this.ng_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).hh = function () {
    return this.oe();
  };
  protoOf(CancellableContinuationImpl).ih = function (takenState, cause) {
    var tmp0_loop = this.mg_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.oh();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.ph(VOID, VOID, VOID, VOID, cause);
            if (this.mg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.qh(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.mg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new CompletedContinuation(tmp1__anonymous__uwfjfc, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).fg = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.mg_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.mg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.rh(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.vg_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).sh = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.fg(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).rh = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).zg = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).th = function (parent) {
    return parent.se();
  };
  protoOf(CancellableContinuationImpl).tf = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.ng_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.oe();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.ae_1, this);
    if (get_isCancellableMode(this.vg_1)) {
      var job = this.l3().u3(Key_getInstance_2());
      if (!(job == null) ? !job.vd() : false) {
        var cause = job.se();
        this.ih(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.uh(state);
  };
  protoOf(CancellableContinuationImpl).j3 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.vg_1);
  };
  protoOf(CancellableContinuationImpl).hg = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.mg_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.mg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.vh()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ae_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.kh_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.oh()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.nh_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.ph(VOID, cancelHandler);
              if (this.mg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(tmp1__anonymous__uwfjfc, cancelHandler);
              if (this.mg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).yg = function () {
    var tmp0_elvis_lhs = this.ng_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.gh();
    this.ng_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).uh = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.jh_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).wh = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).wh.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.jg_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.he() + '(' + toDebugString(this.jg_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).he = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.jh_1 = result;
    this.kh_1 = cancelHandler;
    this.lh_1 = onCancellation;
    this.mh_1 = idempotentResume;
    this.nh_1 = cancelCause;
  }
  protoOf(CompletedContinuation).oh = function () {
    return !(this.nh_1 == null);
  };
  protoOf(CompletedContinuation).qh = function (cont, cause) {
    var tmp0_safe_receiver = this.kh_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.rh(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.lh_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.zg(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  protoOf(CompletedContinuation).zh = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).ph = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.jh_1 : result;
    cancelHandler = cancelHandler === VOID ? this.kh_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.lh_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.mh_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.nh_1 : cancelCause;
    return $super === VOID ? this.zh(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.zh.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString(this.jh_1) + ', cancelHandler=' + this.kh_1 + ', onCancellation=' + this.lh_1 + ', idempotentResume=' + toString(this.mh_1) + ', cancelCause=' + this.nh_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.jh_1 == null ? 0 : hashCode(this.jh_1);
    result = imul(result, 31) + (this.kh_1 == null ? 0 : hashCode(this.kh_1)) | 0;
    result = imul(result, 31) + (this.lh_1 == null ? 0 : hashCode(this.lh_1)) | 0;
    result = imul(result, 31) + (this.mh_1 == null ? 0 : hashCode(this.mh_1)) | 0;
    result = imul(result, 31) + (this.nh_1 == null ? 0 : hashCode(this.nh_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.jh_1, tmp0_other_with_cast.jh_1))
      return false;
    if (!equals(this.kh_1, tmp0_other_with_cast.kh_1))
      return false;
    if (!equals(this.lh_1, tmp0_other_with_cast.lh_1))
      return false;
    if (!equals(this.mh_1, tmp0_other_with_cast.mh_1))
      return false;
    if (!equals(this.nh_1, tmp0_other_with_cast.nh_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.ai_1 = handler;
  }
  protoOf(InvokeOnCancel).bi = function (cause) {
    this.ai_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.bi(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.ai_1) + '@' + get_hexAddress(this) + ']';
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.ae_1 = cause;
    this.be_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).ce = function () {
    return this.be_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).vh = function () {
    return this.be_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.ae_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.ch_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).dh = function () {
    return this.ch_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(recoverStackTrace(exception, caller));
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(exception);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.ci_1 = result;
    this.di_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.ci_1) + ', onCancellation=' + this.di_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.ci_1 == null ? 0 : hashCode(this.ci_1);
    result = imul(result, 31) + hashCode(this.di_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.ci_1, tmp0_other_with_cast.ci_1))
      return false;
    if (!equals(this.di_1, tmp0_other_with_cast.di_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.ae_1, uCont);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp2_success = Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).fi = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).s3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).t3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.hi();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.u3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.ii(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.u3(Key_getInstance_2()) == null) ? context : context.b4(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var coroutine = new ScopeCoroutine(tmp0__anonymous__q1qw7t.l3(), tmp0__anonymous__q1qw7t);
    tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).le = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.h4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).nf = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.ki_1 = new Long(0, 0);
    this.li_1 = false;
    this.mi_1 = null;
  }
  protoOf(EventLoop).ni = function () {
    var tmp0_elvis_lhs = this.mi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.ri();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.xh();
    return true;
  };
  protoOf(EventLoop).si = function (task) {
    var tmp0_elvis_lhs = this.mi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.mi_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ti(task);
  };
  protoOf(EventLoop).ui = function () {
    return this.ki_1.n(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).vi = function () {
    var tmp0_safe_receiver = this.mi_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wi();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).xi = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.ki_1 = tmp0_this.ki_1.l5(delta(this, unconfined));
    if (!unconfined)
      this.li_1 = true;
  };
  protoOf(EventLoop).yi = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.ki_1 = tmp0_this.ki_1.cc(delta(this, unconfined));
    if (this.ki_1.n(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.li_1) {
      this.zi();
    }
  };
  protoOf(EventLoop).zi = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.aj_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).bj = function () {
    var tmp0_elvis_lhs = this.aj_1.dj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().aj_1.ej(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).gh = function () {
  };
  protoOf(NonDisposableHandle).ef = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u3(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.vd())
      throw _this__u8e3s4.se();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.u3(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.af(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.fj_1 = isActive;
  }
  protoOf(Empty).vd = function () {
    return this.fj_1;
  };
  protoOf(Empty).gj = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.fj_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).vd = function () {
    return true;
  };
  protoOf(NodeList).gj = function () {
    return this;
  };
  protoOf(NodeList).kj = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.va('List{');
    tmp0_apply.va(state);
    tmp0_apply.va('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.lj_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.va(', ');
        }
        tmp0_apply.ua(tmp0__anonymous__q1qw7t);
      }
      cur = cur.lj_1;
    }
    tmp0_apply.va(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.kj('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).uj = function () {
    var tmp = this.tj_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).vd = function () {
    return true;
  };
  protoOf(JobNode).gj = function () {
    return null;
  };
  protoOf(JobNode).gh = function () {
    return this.uj().ye(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.uj()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.ak_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.ak_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ae_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.bk();
    var exceptions = state.ck(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.lf(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).vh();
      }
    }
    if (!wasCancelling) {
      $this.if(finalException);
    }
    $this.zd(finalState);
    var casSuccess = $this.od_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.h()) {
      if (state.bk()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.yd() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.g(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.f() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.f());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.c();
    while (tmp0_iterator.d()) {
      var exception = tmp0_iterator.e();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.od_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.if(null);
    $this.zd(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.ne();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.gh();
      $this.me(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ae_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.ge(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.gj();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.if(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.lj_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.lj_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ge(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.jf())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.ne();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.ef(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.lj_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.lj_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ge(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.fj_1)
        return 0;
      if (!$this.od_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.re();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.od_1.atomicfu$compareAndSet(state, state.dk_1))
          return -1;
        $this.re();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.tj_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.oe() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.oj(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.fj_1 ? list : new InactiveNodeList(list);
    $this.od_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.wj(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.lj_1;
    var list = tmp$ret$0;
    $this.od_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.oe();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.ek();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.yd() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).gf();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.oe();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.fk())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.bk();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.gk(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.hk();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.xj_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.vd()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.gj();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.od_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.ek())
      return get_COMPLETING_ALREADY();
    finishing.ik(true);
    if (!(finishing === state)) {
      if (!$this.od_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.bk();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.gk(tmp0_safe_receiver.ae_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.hk();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ae_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.gj();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.nk_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.xe(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.fe(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.nj_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.mj_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.lj_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.nj_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.bk() ? 'Cancelling' : state.ek() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.vd() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.xj_1 = list;
    this.yj_1 = atomic$boolean$1(isCompleting);
    this.zj_1 = atomic$ref$1(rootCause);
    this.ak_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).gj = function () {
    return this.xj_1;
  };
  protoOf(Finishing).ik = function (value) {
    this.yj_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).ek = function () {
    return this.yj_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).ok = function (value) {
    this.zj_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).hk = function () {
    return this.zj_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).fk = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).bk = function () {
    return !(this.hk() == null);
  };
  protoOf(Finishing).vd = function () {
    return this.hk() == null;
  };
  protoOf(Finishing).ck = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.hk();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.q6(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).gk = function (exception) {
    var rootCause = this.hk();
    if (rootCause == null) {
      this.ok(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.bk() + ', completing=' + this.ek() + ', rootCause=' + this.hk() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.xj_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.tk_1 = parent;
    this.uk_1 = state;
    this.vk_1 = child;
    this.wk_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).bi = function (cause) {
    continueCompleting(this.tk_1, this.uk_1, this.vk_1, this.wk_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.bi(cause);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.fl_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).ml = function ($this$sequence, $completion) {
    var tmp = this.nl($this$sequence, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).jd = function (p1, $completion) {
    return this.ml(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 8;
            this.hl_1 = this.fl_1.oe();
            var tmp_0 = this.hl_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.oc_1 = 6;
              suspendResult = this.gl_1.e3(this.hl_1.nk_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.hl_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.il_1 = this.hl_1.gj();
                if (this.il_1 == null) {
                  this.jl_1 = null;
                  this.oc_1 = 5;
                  continue $sm;
                } else {
                  this.kl_1 = this.il_1.lj_1;
                  this.oc_1 = 1;
                  continue $sm;
                }
              } else {
                this.oc_1 = 7;
                continue $sm;
              }
            }

            break;
          case 1:
            if (!!equals(this.kl_1, this.il_1)) {
              this.oc_1 = 4;
              continue $sm;
            }

            var tmp_2 = this.kl_1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.ll_1 = this.kl_1;
              this.oc_1 = 2;
              suspendResult = this.gl_1.e3(this.ll_1.nk_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oc_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.oc_1 = 3;
            continue $sm;
          case 3:
            this.kl_1 = this.kl_1.lj_1;
            this.oc_1 = 1;
            continue $sm;
          case 4:
            this.jl_1 = Unit_getInstance();
            this.oc_1 = 5;
            continue $sm;
          case 5:
            ;
            this.oc_1 = 7;
            continue $sm;
          case 6:
            this.oc_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.pc_1 === 8) {
          throw e;
        } else {
          this.oc_1 = this.pc_1;
          this.rc_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).nl = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.fl_1, completion);
    i.gl_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.ml($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.od_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.pd_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).n1 = function () {
    return Key_getInstance_2();
  };
  protoOf(JobSupport).me = function (value) {
    this.pd_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).ne = function () {
    return this.pd_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).qd = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.me(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.qe();
    var handle = parent.hf(this);
    this.me(handle);
    if (this.pe()) {
      handle.gh();
      this.me(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).oe = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.od_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.ol(this);
    }
  };
  protoOf(JobSupport).vd = function () {
    var state = this.oe();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.vd();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).pe = function () {
    var tmp = this.oe();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).qe = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.oe();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).re = function () {
  };
  protoOf(JobSupport).se = function () {
    var state = this.oe();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.hk();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.te(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.ue(state.ae_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).te = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.yd() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).ue = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.te(_this__u8e3s4, message) : $super.te.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).ve = function (handler) {
    return this.we(false, true, handler);
  };
  protoOf(JobSupport).we = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.oe();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.fj_1) {
            if (this.od_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.gj();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.hk();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.ek();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ae_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).ye = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.oe();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.od_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.gj() == null)) {
            node.vj();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).ze = function () {
    return false;
  };
  protoOf(JobSupport).af = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.yd() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cf(tmp);
  };
  protoOf(JobSupport).yd = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).cf = function (cause) {
    this.ff(cause);
  };
  protoOf(JobSupport).df = function (parentJob) {
    this.ff(parentJob);
  };
  protoOf(JobSupport).ef = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.ff(cause) ? this.kf() : false;
  };
  protoOf(JobSupport).ff = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ze()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.fe(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).gf = function () {
    var state = this.oe();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.hk();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.ae_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).de = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.oe();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).pl = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).hf = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.xe(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).ge = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).if = function (cause) {
  };
  protoOf(JobSupport).jf = function () {
    return false;
  };
  protoOf(JobSupport).kf = function () {
    return true;
  };
  protoOf(JobSupport).lf = function (exception) {
    return false;
  };
  protoOf(JobSupport).zd = function (state) {
  };
  protoOf(JobSupport).fe = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.mf() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).mf = function () {
    return this.he() + '{' + stateString(this, this.oe()) + '}';
  };
  protoOf(JobSupport).he = function () {
    return get_classSimpleName(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.dk_1 = list;
  }
  protoOf(InactiveNodeList).gj = function () {
    return this.dk_1;
  };
  protoOf(InactiveNodeList).vd = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.dk_1.kj('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.nk_1 = childJob;
  }
  protoOf(ChildHandleNode).bi = function (cause) {
    return this.nk_1.df(this.uj());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.bi(cause);
  };
  protoOf(ChildHandleNode).ef = function (cause) {
    return this.uj().ef(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.ul_1 = handler;
    this.vl_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).bi = function (cause) {
    if (this.vl_1.atomicfu$compareAndSet(0, 1))
      this.ul_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.bi(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.am_1 = handler;
  }
  protoOf(InvokeOnCompletion).bi = function (cause) {
    return this.am_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.bi(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bm_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.bm_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.gm_1 = child;
  }
  protoOf(ChildContinuation).bi = function (cause) {
    this.gm_1.sh(this.gm_1.th(this.uj()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.bi(cause);
  };
  function handlesException($this) {
    var tmp = $this.ne();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uj();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.kf())
        return true;
      var tmp_1 = parentJob.ne();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.uj();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.qd(parent);
    this.jm_1 = handlesException(this);
  }
  protoOf(JobImpl).ze = function () {
    return true;
  };
  protoOf(JobImpl).kf = function () {
    return this.jm_1;
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.mm();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).mm = function () {
    var main = Dispatchers_getInstance().rm();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.lm();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).ef = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).fi = function (context) {
    return false;
  };
  protoOf(Unconfined).gi = function (context, block) {
    var yieldContext = context.u3(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.xm_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.ym_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this.gn_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.gn_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.hn_1;
    if ((curSequence & 1) === 0) {
      var tmp0 = curSequence;
      curSequence = tmp0 + 1 | 0;
      $this.hn_1 = curSequence;
    } else {
      $this.hn_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.ym_1;
    tmp$ret$0 = Unit_getInstance();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          var tmp0_safe_receiver_0 = element;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.jn();
          }
        }
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.hn_1 === curSequence) {
        $this.hn_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.hn_1;
      curSlots = $this.ym_1;
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.gn_1 = atomic$ref$1(initialState);
    this.hn_1 = 0;
  }
  protoOf(StateFlowImpl).kn = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  };
  protoOf(StateFlowImpl).q1 = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this.gn_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  protoOf(StateFlowImpl).ln = function (expect, update) {
    var tmp0_elvis_lhs = expect;
    var tmp = tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = update;
    return updateState(this, tmp, tmp1_elvis_lhs == null ? get_NULL() : tmp1_elvis_lhs);
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function AbstractSharedFlow() {
    this.ym_1 = null;
    this.zm_1 = 0;
    this.an_1 = 0;
    this.bn_1 = null;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function ensureCapacity($this) {
    var currentSize = $this.oi_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.oi_1;
    var tmp1_copyInto = $this.pi_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.oi_1;
    var tmp4_copyInto = $this.oi_1.length - $this.pi_1 | 0;
    var tmp5_copyInto = $this.pi_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.oi_1 = newElements;
    $this.pi_1 = 0;
    $this.qi_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.oi_1 = tmp$ret$0;
    this.pi_1 = 0;
    this.qi_1 = 0;
  }
  protoOf(ArrayQueue).wi = function () {
    return this.pi_1 === this.qi_1;
  };
  protoOf(ArrayQueue).ti = function (element) {
    this.oi_1[this.qi_1] = element;
    this.qi_1 = (this.qi_1 + 1 | 0) & (this.oi_1.length - 1 | 0);
    if (this.qi_1 === this.pi_1) {
      ensureCapacity(this);
    }
  };
  protoOf(ArrayQueue).ri = function () {
    if (this.pi_1 === this.qi_1)
      return null;
    var element = this.oi_1[this.pi_1];
    this.oi_1[this.pi_1] = null;
    this.pi_1 = (this.pi_1 + 1 | 0) & (this.oi_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function OpDescriptor() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.pg_1.fi(tmp1_resumeCancellableWith.l3())) {
        tmp1_resumeCancellableWith.rg_1 = state;
        tmp1_resumeCancellableWith.vg_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.pg_1.gi(tmp1_resumeCancellableWith.l3(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().bj();
          if (false ? eventLoop.vi() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.ui()) {
            tmp1_resumeCancellableWith.rg_1 = state;
            tmp1_resumeCancellableWith.vg_1 = tmp0_executeUnconfined;
            eventLoop.si(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.xi(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.l3().u3(Key_getInstance_2());
                if (!(job == null) ? !job.vd() : false) {
                  var cause = job.se();
                  tmp1_resumeCancellableWith.ih(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.j3(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.qg_1;
                var tmp2_withContinuationContext = tmp1_resumeCancellableWith.sg_1;
                tmp1_resumeCancellableWith.qg_1.j3(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.ni())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                tmp1_resumeCancellableWith.yh(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.yi(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.j3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.tg_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.pg_1 = dispatcher;
    this.qg_1 = continuation;
    this.rg_1 = get_UNDEFINED();
    this.sg_1 = threadContextElements(this.l3());
    this.tg_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).l3 = function () {
    return this.qg_1.l3();
  };
  protoOf(DispatchedContinuation).ug = function () {
    return !(this.tg_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).mn = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.tg_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).hi = function () {
    this.mn();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.yg();
    }
  };
  protoOf(DispatchedContinuation).xg = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.tg_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.tg_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.tg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).wg = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.tg_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.tg_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.tg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).hh = function () {
    var state = this.rg_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.rg_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).eh = function () {
    return this;
  };
  protoOf(DispatchedContinuation).j3 = function (result) {
    var context = this.qg_1.l3();
    var state = toState_0(result);
    if (this.pg_1.fi(context)) {
      this.rg_1 = state;
      this.vg_1 = get_MODE_ATOMIC();
      this.pg_1.gi(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().bj();
        if (false ? eventLoop.vi() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.ui()) {
          this.rg_1 = state;
          this.vg_1 = tmp0_executeUnconfined;
          eventLoop.si(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.xi(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.l3();
            var tmp1_withCoroutineContext = this.sg_1;
            this.qg_1.j3(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.ni())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.yh(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.yi(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  protoOf(DispatchedContinuation).ih = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.di_1(cause);
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.pg_1 + ', ' + toDebugString(this.qg_1) + ']';
  };
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.vg_1 = resumeMode;
  }
  protoOf(DispatchedTask).ih = function (takenState, cause) {
  };
  protoOf(DispatchedTask).uh = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).wh = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ae_1;
  };
  protoOf(DispatchedTask).xh = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.eh();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.qg_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.sg_1;
      var context = continuation.l3();
      var state = this.hh();
      var exception = this.wh(state);
      var job = (exception == null ? get_isCancellableMode(this.vg_1) : false) ? context.u3(Key_getInstance_2()) : null;
      var tmp_0;
      if (!(job == null) ? !job.vd() : false) {
        var cause = job.se();
        this.ih(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.j3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.j3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp4_resume = this.uh(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp3_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp4_resume);
          continuation.j3(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        var tmp2_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp3_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(e_0));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.yh(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).yh = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.eh().l3(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.eh();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.vg_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.pg_1;
      var context = delegate.l3();
      if (dispatcher.fi(context)) {
        dispatcher.gi(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().bj();
    if (eventLoop.ui()) {
      eventLoop.si(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.xi(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.eh(), true);
        $l$loop: while (true) {
          if (!eventLoop.ni())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.yh(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.yi(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.hh();
    var exception = _this__u8e3s4.wh(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      var tmp2_success = _this__u8e3s4.uh(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp5_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp3_withContinuationContext = tmp5_resumeUndispatchedWith.qg_1;
      var tmp4_withContinuationContext = tmp5_resumeUndispatchedWith.sg_1;
      tmp5_resumeUndispatchedWith.qg_1.j3(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.j3(result);
    }
  }
  function ContextScope(context) {
    this.nn_1 = context;
  }
  protoOf(ContextScope).ud = function () {
    return this.nn_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.nn_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.eg_1 = uCont;
  }
  protoOf(ScopeCoroutine).jf = function () {
    return true;
  };
  protoOf(ScopeCoroutine).fe = function (state) {
    resumeCancellableWith(intercepted(this.eg_1), recoverResult(state, this.eg_1));
  };
  protoOf(ScopeCoroutine).ee = function (state) {
    this.eg_1.j3(recoverResult(state, this.eg_1));
  };
  function Symbol(symbol) {
    this.on_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.on_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.j3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.jd(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.de(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.ae_1;
        tmp$ret$4 = true;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.ae_1, _this__u8e3s4.eg_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.ae_1, _this__u8e3s4.eg_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.l3();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.jd(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.j3(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp2_resume);
        actualCompletion.j3(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.ud().b4(context);
    return (!(combined === Dispatchers_getInstance().nm_1) ? combined.u3(Key_getInstance()) == null : false) ? combined.b4(Dispatchers_getInstance().nm_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.b4(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).ee = function (state) {
    return this.eg_1.j3(recoverResult(state, this.eg_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).p9();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.nm_1 = createDefaultDispatcher();
    this.om_1 = Unconfined_getInstance();
    this.pm_1 = new JsMainDispatcher(this.nm_1, false);
    this.qm_1 = null;
  }
  protoOf(Dispatchers).rm = function () {
    var tmp0_elvis_lhs = this.qm_1;
    return tmp0_elvis_lhs == null ? this.pm_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.un_1 = delegate;
    this.vn_1 = invokeImmediately;
    this.wn_1 = this.vn_1 ? this : new JsMainDispatcher(this.un_1, true);
  }
  protoOf(JsMainDispatcher).lm = function () {
    return this.wn_1;
  };
  protoOf(JsMainDispatcher).fi = function (context) {
    return !this.vn_1;
  };
  protoOf(JsMainDispatcher).gi = function (context, block) {
    return this.un_1.gi(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.mm();
    return tmp0_elvis_lhs == null ? this.un_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).gi = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.bo_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.bo_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.bo_1, this.bo_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.bo_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).eo = function () {
    process.nextTick(this.no_1.ko_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).eo = function () {
    setTimeout(this.no_1.ko_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.vo();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.lo_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.ko_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).wo = function () {
    this.lo_1.eo();
  };
  protoOf(ScheduledMessageQueue).xo = function () {
    setTimeout(this.ko_1, 0);
  };
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.no_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).gi = function (context, block) {
    this.no_1.yo(block);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.to_1 = 16;
    this.uo_1 = false;
  }
  protoOf(MessageQueue).yo = function (element) {
    this.ti(element);
    if (!this.uo_1) {
      this.uo_1 = true;
      this.wo();
    }
  };
  protoOf(MessageQueue).vo = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.to_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.ri();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.xh();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.wi()) {
        this.uo_1 = false;
      } else {
        this.xo();
      }
    }
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.ap_1 = window_0;
    this.bp_1 = new WindowMessageQueue(this.ap_1);
  }
  protoOf(WindowDispatcher).gi = function (context, block) {
    return this.bp_1.yo(block);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.hp_1 ? event.data == this$0.ip_1 : false) {
        event.stopPropagation();
        this$0.vo();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.vo();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.hp_1 = window_0;
    this.ip_1 = 'dispatchCoroutine';
    this.hp_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).wo = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).xo = function () {
    this.hp_1.postMessage(this.ip_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  function LinkedListNode() {
    this.lj_1 = this;
    this.mj_1 = this;
    this.nj_1 = false;
  }
  protoOf(LinkedListNode).oj = function (node) {
    var prev = this.mj_1;
    node.lj_1 = this;
    node.mj_1 = prev;
    prev.lj_1 = node;
    this.mj_1 = node;
  };
  protoOf(LinkedListNode).vj = function () {
    return this.pj();
  };
  protoOf(LinkedListNode).pj = function () {
    if (this.nj_1)
      return false;
    var prev = this.mj_1;
    var next = this.lj_1;
    prev.lj_1 = next;
    next.mj_1 = prev;
    this.nj_1 = true;
    return true;
  };
  protoOf(LinkedListNode).wj = function (node) {
    if (!(this.lj_1 === this))
      return false;
    this.oj(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.cj_1 = null;
  }
  protoOf(CommonThreadLocal).dj = function () {
    var tmp = this.cj_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).ej = function (value) {
    this.cj_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).xe = invokeOnCompletion$default;
  protoOf(JobSupport).bf = cancel$default;
  protoOf(JobSupport).b4 = plus;
  protoOf(JobSupport).u3 = get;
  protoOf(JobSupport).a4 = fold;
  protoOf(JobSupport).z3 = minusKey;
  protoOf(AbstractCoroutine).xe = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).bf = cancel$default;
  protoOf(AbstractCoroutine).b4 = plus;
  protoOf(AbstractCoroutine).u3 = get;
  protoOf(AbstractCoroutine).a4 = fold;
  protoOf(AbstractCoroutine).z3 = minusKey;
  protoOf(StandaloneCoroutine).xe = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).bf = cancel$default;
  protoOf(StandaloneCoroutine).b4 = plus;
  protoOf(StandaloneCoroutine).u3 = get;
  protoOf(StandaloneCoroutine).a4 = fold;
  protoOf(StandaloneCoroutine).z3 = minusKey;
  protoOf(LazyStandaloneCoroutine).xe = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).bf = cancel$default;
  protoOf(LazyStandaloneCoroutine).b4 = plus;
  protoOf(LazyStandaloneCoroutine).u3 = get;
  protoOf(LazyStandaloneCoroutine).a4 = fold;
  protoOf(LazyStandaloneCoroutine).z3 = minusKey;
  protoOf(ScopeCoroutine).xe = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).bf = cancel$default;
  protoOf(ScopeCoroutine).b4 = plus;
  protoOf(ScopeCoroutine).u3 = get;
  protoOf(ScopeCoroutine).a4 = fold;
  protoOf(ScopeCoroutine).z3 = minusKey;
  protoOf(DispatchedCoroutine).xe = invokeOnCompletion$default;
  protoOf(DispatchedCoroutine).bf = cancel$default;
  protoOf(DispatchedCoroutine).b4 = plus;
  protoOf(DispatchedCoroutine).u3 = get;
  protoOf(DispatchedCoroutine).a4 = fold;
  protoOf(DispatchedCoroutine).z3 = minusKey;
  protoOf(CancellableContinuationImpl).gg = cancel$default_0;
  protoOf(CoroutineDispatcher).u3 = get_0;
  protoOf(CoroutineDispatcher).a4 = fold;
  protoOf(CoroutineDispatcher).z3 = minusKey_0;
  protoOf(CoroutineDispatcher).b4 = plus;
  protoOf(EventLoop).b4 = plus;
  protoOf(EventLoop).u3 = get_0;
  protoOf(EventLoop).a4 = fold;
  protoOf(EventLoop).z3 = minusKey_0;
  protoOf(JobImpl).xe = invokeOnCompletion$default;
  protoOf(JobImpl).bf = cancel$default;
  protoOf(JobImpl).b4 = plus;
  protoOf(JobImpl).u3 = get;
  protoOf(JobImpl).a4 = fold;
  protoOf(JobImpl).z3 = minusKey;
  protoOf(MainCoroutineDispatcher).b4 = plus;
  protoOf(MainCoroutineDispatcher).u3 = get_0;
  protoOf(MainCoroutineDispatcher).a4 = fold;
  protoOf(MainCoroutineDispatcher).z3 = minusKey_0;
  protoOf(SupervisorJobImpl).xe = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).bf = cancel$default;
  protoOf(SupervisorJobImpl).b4 = plus;
  protoOf(SupervisorJobImpl).u3 = get;
  protoOf(SupervisorJobImpl).a4 = fold;
  protoOf(SupervisorJobImpl).z3 = minusKey;
  protoOf(Unconfined).b4 = plus;
  protoOf(Unconfined).u3 = get_0;
  protoOf(Unconfined).a4 = fold;
  protoOf(Unconfined).z3 = minusKey_0;
  protoOf(UndispatchedCoroutine).xe = invokeOnCompletion$default;
  protoOf(UndispatchedCoroutine).bf = cancel$default;
  protoOf(UndispatchedCoroutine).b4 = plus;
  protoOf(UndispatchedCoroutine).u3 = get;
  protoOf(UndispatchedCoroutine).a4 = fold;
  protoOf(UndispatchedCoroutine).z3 = minusKey;
  protoOf(JsMainDispatcher).b4 = plus;
  protoOf(JsMainDispatcher).u3 = get_0;
  protoOf(JsMainDispatcher).a4 = fold;
  protoOf(JsMainDispatcher).z3 = minusKey_0;
  protoOf(UnconfinedEventLoop).b4 = plus;
  protoOf(UnconfinedEventLoop).u3 = get_0;
  protoOf(UnconfinedEventLoop).a4 = fold;
  protoOf(UnconfinedEventLoop).z3 = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).b4 = plus;
  protoOf(SetTimeoutBasedDispatcher).u3 = get_0;
  protoOf(SetTimeoutBasedDispatcher).a4 = fold;
  protoOf(SetTimeoutBasedDispatcher).z3 = minusKey_0;
  protoOf(NodeDispatcher).b4 = plus;
  protoOf(NodeDispatcher).u3 = get_0;
  protoOf(NodeDispatcher).a4 = fold;
  protoOf(NodeDispatcher).z3 = minusKey_0;
  protoOf(SetTimeoutDispatcher).b4 = plus;
  protoOf(SetTimeoutDispatcher).u3 = get_0;
  protoOf(SetTimeoutDispatcher).a4 = fold;
  protoOf(SetTimeoutDispatcher).z3 = minusKey_0;
  protoOf(WindowDispatcher).b4 = plus;
  protoOf(WindowDispatcher).u3 = get_0;
  protoOf(WindowDispatcher).a4 = fold;
  protoOf(WindowDispatcher).z3 = minusKey_0;
  //endregion
  //region block: init
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = coroutineScope;
  _.$_$.c = withContext;
  _.$_$.d = Key_getInstance_2;
  _.$_$.e = MutableStateFlow;
  _.$_$.f = CancellableContinuationImpl;
  _.$_$.g = CoroutineDispatcher;
  _.$_$.h = CoroutineScope_0;
  _.$_$.i = CoroutineScope;
  _.$_$.j = Job_0;
  _.$_$.k = get_MODE_CANCELLABLE;
  _.$_$.l = SupervisorJob;
  _.$_$.m = cancel;
  _.$_$.n = get_job;
  _.$_$.o = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
