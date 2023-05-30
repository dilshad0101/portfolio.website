(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    root['androidx-runtime'] = factory(typeof this['androidx-runtime'] === 'undefined' ? {} : this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.p5;
  var interfaceMeta = kotlin_kotlin.$_$.f5;
  var VOID = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.q5;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var toString = kotlin_kotlin.$_$.r5;
  var classMeta = kotlin_kotlin.$_$.v4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var isObject = kotlin_kotlin.$_$.j5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var Companion_getInstance = kotlin_kotlin.$_$.q1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j1;
  var createFailure = kotlin_kotlin.$_$.g7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.o7;
  var intercepted = kotlin_kotlin.$_$.a4;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.i4;
  var fold = kotlin_kotlin.$_$.h4;
  var minusKey = kotlin_kotlin.$_$.j4;
  var plus = kotlin_kotlin.$_$.l4;
  var isInterface = kotlin_kotlin.$_$.i5;
  var equals = kotlin_kotlin.$_$.y4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var fill = kotlin_kotlin.$_$.t2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var rotateLeft = kotlin_kotlin.$_$.l7;
  var hashCode = kotlin_kotlin.$_$.d5;
  var Enum = kotlin_kotlin.$_$.w6;
  var emptyList = kotlin_kotlin.$_$.r2;
  var toMutableList = kotlin_kotlin.$_$.u3;
  var rotateRight = kotlin_kotlin.$_$.m7;
  var sortWith = kotlin_kotlin.$_$.q3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.q7;
  var compareValues = kotlin_kotlin.$_$.w3;
  var objectMeta = kotlin_kotlin.$_$.o5;
  var IllegalStateException = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.r4;
  var defineProp = kotlin_kotlin.$_$.x4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var lazy = kotlin_kotlin.$_$.i7;
  var firstOrNull = kotlin_kotlin.$_$.v2;
  var compareTo = kotlin_kotlin.$_$.w4;
  var KProperty1 = kotlin_kotlin.$_$.z5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.b5;
  var isArray = kotlin_kotlin.$_$.g5;
  var Set = kotlin_kotlin.$_$.h2;
  var ensureNotNull = kotlin_kotlin.$_$.h7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var plus_0 = kotlin_kotlin.$_$.l3;
  var Exception = kotlin_kotlin.$_$.y6;
  var fillArrayVal = kotlin_kotlin.$_$.z4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.p7;
  var Element = kotlin_kotlin.$_$.k4;
  var getStringHashCode = kotlin_kotlin.$_$.c5;
  var Collection = kotlin_kotlin.$_$.a2;
  var addAll = kotlin_kotlin.$_$.j2;
  var CoroutineImpl = kotlin_kotlin.$_$.m4;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y3;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var toList = kotlin_kotlin.$_$.s3;
  var flatten = kotlin_kotlin.$_$.x2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.p;
  var CancellationException = kotlin_kotlin.$_$.x3;
  var addSuppressed = kotlin_kotlin.$_$.e7;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.a7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.o3;
  var arrayCopy = kotlin_kotlin.$_$.k2;
  var fill_0 = kotlin_kotlin.$_$.u2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o1;
  var first = kotlin_kotlin.$_$.w2;
  var last = kotlin_kotlin.$_$.f3;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.s;
  var copyOf = kotlin_kotlin.$_$.p2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var copyOf_0 = kotlin_kotlin.$_$.o2;
  var Map = kotlin_kotlin.$_$.d2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var AbstractList = kotlin_kotlin.$_$.s1;
  var List = kotlin_kotlin.$_$.b2;
  var coerceAtMost = kotlin_kotlin.$_$.t5;
  var arrayIterator = kotlin_kotlin.$_$.q4;
  var AbstractMutableList = kotlin_kotlin.$_$.v1;
  var MutableIterable = kotlin_kotlin.$_$.e2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var indexOf = kotlin_kotlin.$_$.a3;
  var lastIndexOf = kotlin_kotlin.$_$.e3;
  var AbstractMap = kotlin_kotlin.$_$.t1;
  var AbstractMutableMap = kotlin_kotlin.$_$.w1;
  var MutableMap = kotlin_kotlin.$_$.g2;
  var MutableEntry = kotlin_kotlin.$_$.f2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var AbstractMutableSet = kotlin_kotlin.$_$.x1;
  var AbstractMutableCollection = kotlin_kotlin.$_$.u1;
  var Entry = kotlin_kotlin.$_$.c2;
  var AbstractSet = kotlin_kotlin.$_$.y1;
  var objectCreate = kotlin_kotlin.$_$.n5;
  var until = kotlin_kotlin.$_$.w5;
  var step = kotlin_kotlin.$_$.v5;
  var countOneBits = kotlin_kotlin.$_$.f7;
  var takeLowestOneBit = kotlin_kotlin.$_$.n7;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var longArray = kotlin_kotlin.$_$.k5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var Char = kotlin_kotlin.$_$.v6;
  var isCharSequence = kotlin_kotlin.$_$.h5;
  var contains = kotlin_kotlin.$_$.n2;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.p3;
  var SequenceScope = kotlin_kotlin.$_$.a6;
  var intArrayIterator = kotlin_kotlin.$_$.e5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p1;
  var toIntArray = kotlin_kotlin.$_$.r3;
  var sequence = kotlin_kotlin.$_$.b6;
  var anyToString = kotlin_kotlin.$_$.p4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.m2;
  var println = kotlin_kotlin.$_$.o4;
  var printStackTrace = kotlin_kotlin.$_$.k7;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.c;
  var toDuration = kotlin_kotlin.$_$.u6;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.h1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.q;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_getInstance_0();
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  function changed(value) {
    return this.o12(value);
  }
  function changed_0(value) {
    return this.p12(value);
  }
  function changedInstance(value) {
    return this.fv(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$1, '$awaitWorkAvailableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta);
  setMetadataFor(IntStack, 'IntStack', classMeta);
  setMetadataFor(Stack, 'Stack', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set]);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(PersistentMap, 'PersistentMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [List, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, List, Collection, MutableIterable]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, PersistentMap]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [Set, Collection, MutableIterable, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [Collection, MutableIterable, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Set, Collection]);
  setMetadataFor(Links, 'Links', classMeta);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [List, Collection, MutableIterable, StateObject]);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$4, '$withFrameNanosCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.pp_1 = applier;
    this.qp_1 = offset;
    this.rp_1 = 0;
  }
  protoOf(OffsetApplier).gp = function () {
    return this.pp_1.gp();
  };
  protoOf(OffsetApplier).jp = function (node) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.rp_1;
    tmp0_this.rp_1 = tmp1 + 1 | 0;
    this.pp_1.jp(node);
  };
  protoOf(OffsetApplier).kp = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.rp_1 > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.rp_1;
    tmp0_this.rp_1 = tmp1 - 1 | 0;
    this.pp_1.kp();
  };
  protoOf(OffsetApplier).lp = function (index, instance) {
    this.pp_1.lp(index + (this.rp_1 === 0 ? this.qp_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).mp = function (index, instance) {
    this.pp_1.mp(index + (this.rp_1 === 0 ? this.qp_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).np = function (index, count) {
    this.pp_1.np(index + (this.rp_1 === 0 ? this.qp_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).op = function (from, to, count) {
    var effectiveOffset = this.rp_1 === 0 ? this.qp_1 : 0;
    this.pp_1.op(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.sp_1 = root;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.tp_1 = tmp$ret$0;
    this.up_1 = this.sp_1;
    this.vp_1 = 8;
  }
  protoOf(AbstractApplier).wp = function (_set____db54di) {
    this.up_1 = _set____db54di;
  };
  protoOf(AbstractApplier).gp = function () {
    return this.up_1;
  };
  protoOf(AbstractApplier).xp = function (node) {
    this.tp_1.a(this.gp());
    this.wp(node);
  };
  protoOf(AbstractApplier).jp = function (node) {
    return this.xp((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).kp = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.tp_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.wp(this.tp_1.z2(this.tp_1.f() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.yp_1 = onFrame;
    this.zp_1 = continuation;
  }
  protoOf(FrameAwaiter).aq = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      tmp$ret$0 = this.yp_1(timeNanos);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(e));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    this.zp_1.h3(tmp$ret$3);
  };
  function fail($this, cause) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.cq_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.dq_1 == null))
      return Unit_getInstance();
    $this.dq_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.eq_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp1_resumeWithException = item.zp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp1_resumeWithException.h3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable <= last);
    $this.eq_1.d6();
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.cq_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.eq_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.a6(tmp_0);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.bq_1 = onNewAwaiters;
    this.cq_1 = createSynchronizedObject();
    this.dq_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.eq_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.fq_1 = tmp$ret$1;
    this.gq_1 = 8;
  }
  protoOf(BroadcastFrameClock).hq = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.cq_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.eq_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(BroadcastFrameClock).iq = function (timeNanos) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.cq_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.eq_1;
    this.eq_1 = this.fq_1;
    this.fq_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.g(i).aq(timeNanos);
      }
       while (inductionVariable < last);
    toResume.d6();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(BroadcastFrameClock).jq = function (onFrame, $completion) {
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.ch();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this.cq_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.dq_1;
      if (!(cause == null)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.h3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.eq_1;
      tmp$ret$3 = !tmp1_isNotEmpty.h();
      var hadAwaiters = tmp$ret$3;
      var tmp = this.eq_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a(tmp_0);
      tmp$ret$4 = !hadAwaiters;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var hasNewAwaiters = tmp$ret$6;
      cancellable.eg(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.bq_1 == null) : false) {
        try {
          this.bq_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    tmp$ret$7 = cancellable.qf();
    var tmp0 = tmp$ret$7;
    return tmp0;
  };
  function invalidApplier() {
    throw IllegalStateException_init_$Create$('Invalid applier');
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.ir();
    tmp$ret$0 = tmp0_iterator;
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.d()) {
      var slot = tmp0_iterator_0.e();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.jr(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.kr(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        var composition = slot.mr_1;
        if (!(composition == null)) {
          composition.fs_1 = true;
          slot.ei();
        }
      }
    }
    _this__u8e3s4.ns();
  }
  function startRoot($this) {
    $this.vt_1 = $this.qs_1.yu();
    startGroup($this, 100);
    $this.ps_1.av();
    $this.it_1 = $this.ps_1.bv();
    $this.lt_1.ev(asInt($this.kt_1));
    $this.kt_1 = $this.fv($this.it_1);
    $this.zt_1 = null;
    if (!$this.dt_1) {
      $this.dt_1 = $this.ps_1.gv();
    }
    var tmp0_safe_receiver = resolveCompositionLocal($this, get_LocalInspectionTables(), $this.it_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.qs_1);
      $this.ps_1.hv(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    startGroup($this, $this.ps_1.iv());
  }
  function endRoot($this) {
    endGroup($this);
    $this.ps_1.jv();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.vt_1.wv();
    $this.et_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.vs_1.d6();
    $this.ys_1.d6();
    $this.at_1.d6();
    $this.ht_1.d6();
    $this.lt_1.d6();
    $this.jt_1.d6();
    if (!$this.vt_1.pv_1) {
      $this.vt_1.wv();
    }
    if (!$this.xt_1.gr_1) {
      $this.xt_1.wv();
    }
    createFreshInsertTable($this);
    $this.eu_1 = 0;
    $this.ot_1 = 0;
    $this.ft_1 = false;
    $this.du_1 = false;
    $this.mt_1 = false;
    $this.tt_1 = false;
    $this.et_1 = false;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_2().zv_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_2().zv_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    var tmp0_this = $this;
    tmp0_this.zs_1 = tmp0_this.zs_1 + $this.vt_1.cw() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.zt_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.vt_1.sv_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.du_1 ? $this.yt_1 : false) {
      var current = $this.xt_1.fr_1;
      while (current > 0) {
        if ($this.xt_1.fw(current) === 202 ? equals($this.xt_1.ew(current), get_compositionLocalMap()) : false) {
          var tmp = $this.xt_1.dw(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
          $this.zt_1 = providers;
          return providers;
        }
        current = $this.xt_1.gw(current);
      }
    }
    if ($this.vt_1.f() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.vt_1.fw(current_0) === 202 ? equals($this.vt_1.ew(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.jt_1.g(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.vt_1.dw(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.zt_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.vt_1.gw(current_0);
      }
    }
    $this.zt_1 = $this.it_1;
    return $this.it_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.hw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.q2(currentProviders);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h7();
    var providerScope = tmp$ret$1;
    startGroup_0($this, 204, get_providerMaps());
    $this.fv(providerScope);
    $this.fv(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function resolveCompositionLocal($this, key, scope) {
    var tmp;
    if (contains_0(scope, key)) {
      tmp = getValueOf(scope, key);
    } else {
      tmp = key.iw_1.o1();
    }
    return tmp;
  }
  function ensureWriter($this) {
    if ($this.xt_1.gr_1) {
      $this.xt_1 = $this.wt_1.lw();
      $this.xt_1.mw();
      $this.yt_1 = false;
      $this.zt_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.xt_1.gr_1);
    $this.wt_1 = new SlotTable();
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.wt_1.lw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.wv();
    tmp$ret$0 = tmp0_also;
    tmp.xt_1 = tmp$ret$0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.vt_1.pw();
    } else {
      if (!(data == null) ? !($this.vt_1.nw() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.vt_1.ow();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    tmp$ret$0 = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().zv_1));
    var isNode = tmp$ret$0;
    if ($this.du_1) {
      $this.vt_1.qw();
      var startIndex = $this.xt_1.er_1;
      if (isNode) {
        $this.xt_1.uw(key, Companion_getInstance_1().rw_1);
      } else if (!(data == null)) {
        var tmp = $this.xt_1;
        var tmp0_elvis_lhs = objectKey;
        tmp.tw(key, tmp0_elvis_lhs == null ? Companion_getInstance_1().rw_1 : tmp0_elvis_lhs, data);
      } else {
        var tmp_0 = $this.xt_1;
        var tmp1_elvis_lhs = objectKey;
        tmp_0.sw(key, tmp1_elvis_lhs == null ? Companion_getInstance_1().rw_1 : tmp1_elvis_lhs);
      }
      var tmp2_safe_receiver = $this.ws_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.bx(insertKeyInfo, $this.xs_1 - tmp2_safe_receiver.ww_1 | 0);
        tmp$ret$1 = tmp2_safe_receiver.cx(insertKeyInfo);
        tmp$ret$2 = tmp$ret$1;
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    var tmp_1;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    tmp$ret$3 = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().aw_1));
    if (!tmp$ret$3) {
      tmp_1 = $this.mt_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.ws_1 == null) {
      var slotKey = $this.vt_1.dx();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.vt_1.fx()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.ws_1 = new Pending($this.vt_1.ex(), $this.xs_1);
      }
    }
    var pending = $this.ws_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.gx(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.cx(keyInfo);
        var location = keyInfo.lx_1;
        $this.xs_1 = pending.ox(keyInfo) + pending.ww_1 | 0;
        var relativePosition = pending.px(keyInfo);
        var currentRelativePosition = relativePosition - pending.xw_1 | 0;
        pending.qx(relativePosition, pending.xw_1);
        recordReaderMoving($this, location);
        $this.vt_1.rx(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.vt_1.qw();
        $this.du_1 = true;
        $this.zt_1 = null;
        ensureWriter($this);
        $this.xt_1.hx();
        var startIndex_0 = $this.xt_1.er_1;
        if (isNode) {
          $this.xt_1.uw(key, Companion_getInstance_1().rw_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.xt_1;
          var tmp3_elvis_lhs = objectKey;
          tmp_2.tw(key, tmp3_elvis_lhs == null ? Companion_getInstance_1().rw_1 : tmp3_elvis_lhs, data);
        } else {
          var tmp_3 = $this.xt_1;
          var tmp4_elvis_lhs = objectKey;
          tmp_3.sw(key, tmp4_elvis_lhs == null ? Companion_getInstance_1().rw_1 : tmp4_elvis_lhs);
        }
        $this.bu_1 = $this.xt_1.ix(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.bx(insertKeyInfo_0, $this.xs_1 - pending.ww_1 | 0);
        pending.cx(insertKeyInfo_0);
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.xs_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.vs_1.sx($this.ws_1);
    $this.ws_1 = newPending;
    $this.ys_1.ev($this.xs_1);
    if (isNode)
      $this.xs_1 = 0;
    $this.at_1.ev($this.zs_1);
    $this.zs_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.vs_1.tx();
    if (!(previousPending == null) ? !inserting : false) {
      var tmp0_this = previousPending;
      var tmp1 = tmp0_this.xw_1;
      tmp0_this.xw_1 = tmp1 + 1 | 0;
    }
    $this.ws_1 = previousPending;
    $this.xs_1 = $this.ys_1.tx() + expectedNodeCount | 0;
    $this.zs_1 = $this.at_1.tx() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.du_1) {
      var parent = $this.xt_1.fr_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.xt_1.fw(parent), $this.xt_1.ew(parent), $this.xt_1.dw(parent));
    } else {
      var parent_0 = $this.vt_1.sv_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.vt_1.fw(parent_0), $this.vt_1.ew(parent_0), $this.vt_1.dw(parent_0));
    }
    var expectedNodeCount = $this.zs_1;
    var pending = $this.ws_1;
    if (!(pending == null) ? pending.vw_1.f() > 0 : false) {
      var previous = pending.vw_1;
      var current = pending.ux();
      var usedKeys = fastToSet(current);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var placedKeys = tmp$ret$0;
      var currentIndex = 0;
      var currentEnd = current.f();
      var previousIndex = 0;
      var previousEnd = previous.f();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.g(previousIndex);
        if (!usedKeys.i(previousInfo)) {
          var deleteOffset = pending.ox(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.ww_1 | 0, previousInfo.mx_1);
          pending.vx(previousInfo.lx_1, 0);
          recordReaderMoving($this, previousInfo.lx_1);
          $this.vt_1.rx(previousInfo.lx_1);
          recordDelete($this);
          $this.vt_1.cw();
          removeRange($this.gt_1, previousInfo.lx_1, previousInfo.lx_1 + $this.vt_1.wx(previousInfo.lx_1) | 0);
          var tmp0 = previousIndex;
          previousIndex = tmp0 + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.i(previousInfo)) {
          var tmp1 = previousIndex;
          previousIndex = tmp1 + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.g(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.ox(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.xx(currentInfo);
              recordMoveNode($this, nodePosition + pending.ww_1 | 0, nodeOffset + pending.ww_1 | 0, updatedCount);
              pending.yx(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            var tmp2 = previousIndex;
            previousIndex = tmp2 + 1 | 0;
          }
          var tmp3 = currentIndex;
          currentIndex = tmp3 + 1 | 0;
          nodeOffset = nodeOffset + pending.xx(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.f() > 0) {
        recordReaderMoving($this, $this.vt_1.zx());
        $this.vt_1.mw();
      }
    }
    var removeIndex = $this.xs_1;
    while (!$this.vt_1.ay()) {
      var startSlot = $this.vt_1.qv_1;
      recordDelete($this);
      var nodesToRemove = $this.vt_1.cw();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.gt_1, startSlot, $this.vt_1.qv_1);
    }
    var inserting = $this.du_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.vt_1.cy();
      var parentGroup = $this.xt_1.fr_1;
      $this.xt_1.dy();
      if (!$this.vt_1.fy()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.xt_1.ey();
        $this.xt_1.wv();
        recordInsert($this, $this.bu_1);
        $this.du_1 = false;
        if (!$this.qs_1.ti()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.vt_1.sv_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.vt_1.by();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.tt_1;
    $this.tt_1 = true;
    var recomposed = false;
    var parent = $this.vt_1.sv_1;
    var end = parent + $this.vt_1.wx(parent) | 0;
    var recomposeIndex = $this.xs_1;
    var recomposeCompoundKey = $this.eu_1;
    var oldGroupNodeCount = $this.zs_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.gt_1, $this.vt_1.qv_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.hy_1;
      removeLocation($this.gt_1, location);
      if (firstInRange_0.my()) {
        recomposed = true;
        $this.vt_1.rx(location);
        var newGroup = $this.vt_1.qv_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.xs_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.eu_1 = compoundKeyOf($this, $this.vt_1.gw(newGroup), parent, recomposeCompoundKey);
        $this.zt_1 = null;
        firstInRange_0.gy_1.ky($this);
        $this.zt_1 = null;
        $this.vt_1.ly(parent);
      } else {
        $this.st_1.sx(firstInRange_0.gy_1);
        firstInRange_0.gy_1.jy();
        $this.st_1.tx();
      }
      firstInRange_0 = firstInRange($this.gt_1, $this.vt_1.qv_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.vt_1.mw();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.xs_1 = recomposeIndex + parentGroupNodes | 0;
      $this.zs_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.eu_1 = recomposeCompoundKey;
    $this.tt_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.vs_1.f() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.vs_1.ny(pendingIndex);
            if (!(pending == null) ? pending.vx(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.vt_1.sv_1;
        } else {
          if ($this.vt_1.oy(current))
            break $l$loop_0;
          current = $this.vt_1.gw(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.vt_1.gw(group);
    $l$loop: while (!(anchorGroup === recomposeGroup)) {
      if ($this.vt_1.oy(anchorGroup))
        break $l$loop;
      anchorGroup = $this.vt_1.gw(anchorGroup);
    }
    var index = $this.vt_1.oy(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.vt_1.py(group) | 0) | 0;
    loop: while (index < nodeIndexLimit) {
      if (current === groupLocation)
        break loop;
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.vt_1.wx(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.ct_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp$ret$0 = tmp0_safe_receiver.z1(group);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.bt_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.vt_1.py(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.ct_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.ct_1 = newCounts;
          tmp$ret$0 = newCounts;
          tmp$ret$1 = tmp$ret$0;
          tmp = tmp$ret$1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.v2(group, count);
      } else {
        var tmp1_elvis_lhs = $this.bt_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          var tmp$ret$3;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.vt_1.f());
          fill(newCounts_0, -1);
          $this.bt_1 = newCounts_0;
          tmp$ret$2 = newCounts_0;
          tmp$ret$3 = tmp$ret$2;
          tmp_0 = tmp$ret$3;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.bt_1 = null;
    $this.ct_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.vt_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.oy(current)) {
        recordUp($this);
      }
      current = reader.gw(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.vt_1.gw(group), nearestCommonRoot);
      if ($this.vt_1.oy(group)) {
        recordDown($this, nodeAt($this.vt_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.vt_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.vt_1.gw(group), recomposeGroup, recomposeKey);
        tmp$ret$0 = rotateLeft(tmp0_rol, 3);
        tmp_0 = tmp$ret$0 ^ groupKey;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.qy(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.ew(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp0_subject = tmp0_safe_receiver;
        var tmp_1;
        if (tmp0_subject instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.f4_1;
        } else {
          if (tmp0_subject instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.fw(group);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.dw(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp$ret$2 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().rw_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
          tmp$ret$3 = tmp$ret$2;
          tmp_3 = tmp$ret$3;
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? tmp0_let : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$4 = tmp_2;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.zs_1 = $this.vt_1.ry();
    $this.vt_1.mw();
  }
  function addRecomposeScope($this) {
    if ($this.du_1) {
      var tmp = $this.us_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.st_1.sx(scope);
      $this.sy(scope);
      scope.uy($this.qt_1);
    } else {
      var invalidation = removeLocation($this.gt_1, $this.vt_1.sv_1);
      var slot = $this.vt_1.e();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().rw_1)) {
        var tmp_1 = $this.us_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.sy(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.ty(!(invalidation == null));
      $this.st_1.sx(scope_0);
      scope_0.uy($this.qt_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.vy(get_movableContentKey(), content);
    $this.fv(parameter);
    var savedCompoundKeyHash = $this.eu_1;
    try {
      $this.eu_1 = get_movableContentKey();
      if ($this.du_1) {
        $this.xt_1.wy();
      }
      var providersChanged = $this.du_1 ? false : !equals($this.vt_1.nw(), locals);
      if (providersChanged) {
        $this.jt_1.xy($this.vt_1.qv_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_2().zv_1, locals);
      if ($this.du_1 ? !force : false) {
        $this.yt_1 = true;
        $this.zt_1 = null;
        var anchor = $this.xt_1.ix($this.xt_1.gw($this.xt_1.fr_1));
        var reference = new MovableContentStateReference(content, parameter, $this.us_1, $this.wt_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.ps_1.yy(reference);
      } else {
        var savedProvidersInvalid = $this.kt_1;
        $this.kt_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(694380496, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.kt_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.eu_1 = savedCompoundKeyHash;
      $this.zy();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp$ret$13;
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.ts_1;
      var savedChanges = $this.ss_1;
      try {
        $this.ss_1 = tmp0_withChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.t2();
            var from = item.u2();
            var anchor = to.ez_1;
            var location = to.dz_1.iz(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.dz_1;
              if (equals(toSlotTable, $this.wt_1)) {
                createFreshInsertTable($this);
              }
              var tmp$ret$4;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp1_read = to.dz_1;
              var tmp$ret$3;
              // Inline function 'kotlin.let' call
              var tmp0_let = tmp1_read.yu();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$2;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.rx(location);
                $this.hu_1 = location;
                var tmp$ret$0;
                // Inline function 'kotlin.collections.mutableListOf' call
                tmp$ret$0 = ArrayList_init_$Create$();
                var offsetChanges = tmp$ret$0;
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, tmp0_let, to));
                var tmp_0;
                var tmp$ret$1;
                // Inline function 'kotlin.collections.isNotEmpty' call
                tmp$ret$1 = !offsetChanges.h();
                if (tmp$ret$1) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_getInstance();
                }
                tmp = tmp_0;
              }finally {
                tmp0_let.wv();
              }
              tmp$ret$2 = tmp;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = tmp$ret$3;
            } else {
              var resolvedState = $this.ps_1.jz(from);
              var tmp0_safe_receiver = resolvedState;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kz_1;
              var fromTable = tmp1_elvis_lhs == null ? from.dz_1 : tmp1_elvis_lhs;
              var tmp2_safe_receiver = resolvedState;
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.kz_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ix(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.ez_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              var tmp$ret$5;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$5 = !nodesToInsert.h();
              if (tmp$ret$5) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.dz_1, $this.qs_1)) {
                  var group = $this.qs_1.iz(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.f() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              var tmp$ret$12;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp$ret$11;
              // Inline function 'kotlin.let' call
              var tmp2_let = fromTable.yu();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$10;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.vt_1;
                  var savedCountOverrides = $this.bt_1;
                  $this.bt_1 = null;
                  try {
                    $this.vt_1 = tmp2_let;
                    var newLocation = fromTable.iz(fromAnchor);
                    tmp2_let.rx(newLocation);
                    $this.hu_1 = newLocation;
                    var tmp$ret$6;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    tmp$ret$6 = ArrayList_init_$Create$();
                    var offsetChanges_0 = tmp$ret$6;
                    var tmp$ret$7;
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.ss_1;
                      try {
                        $this.ss_1 = offsetChanges_0;
                        var tmp_2 = tmp2_let.qv_1;
                        tmp$ret$7 = recomposeMovableContent($this, from.cz_1, to.cz_1, tmp_2, from.fz_1, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.ss_1 = savedChanges_0;
                      }
                    }
                    var tmp_3;
                    var tmp$ret$8;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    tmp$ret$8 = !offsetChanges_0.h();
                    if (tmp$ret$8) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_3 = Unit_getInstance();
                    }
                    tmp$ret$9 = tmp_3;
                    break $l$block_0;
                  }finally {
                    $this.vt_1 = savedReader;
                    $this.bt_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp2_let.wv();
              }
              tmp$ret$10 = tmp_1;
              tmp$ret$11 = tmp$ret$10;
              tmp$ret$12 = tmp$ret$11;
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.hu_1 = 0;
        tmp$ret$13 = Unit_getInstance();
        break $l$block_1;
      }finally {
        $this.ss_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.ju_1;
    var savedIsComposing = $this.tt_1;
    var savedNodeIndex = $this.xs_1;
    try {
      $this.ju_1 = false;
      $this.tt_1 = true;
      $this.xs_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.g(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.t2();
          var instances = item.u2();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            var last_0 = instances.nz_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp0__anonymous__q1qw7t = instances.g(i);
                $this.mz(scope, tmp0__anonymous__q1qw7t);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.mz(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp1_safe_receiver = from;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp0_elvis_lhs = index;
        tmp = tmp1_safe_receiver.pz(to, tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.ju_1 = savedImplicitRootStart;
      $this.tt_1 = savedIsComposing;
      $this.xs_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.qz(_this__u8e3s4.sv_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.qz(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.ft_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.ft_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.ft_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.ss_1.a(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.fu_1;
    if (count > 0) {
      $this.fu_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.gu_1.rz()) {
      realizeDowns($this, $this.gu_1.j7());
      $this.gu_1.d6();
    }
  }
  function recordDown($this, node) {
    $this.gu_1.sx(node);
  }
  function recordUp($this) {
    if ($this.gu_1.rz()) {
      $this.gu_1.tx();
    } else {
      var tmp0_this = $this;
      var tmp1 = tmp0_this.fu_1;
      tmp0_this.fu_1 = tmp1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.vt_1.sv_1 : $this.vt_1.qv_1;
    var distance = location - $this.hu_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = distance >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      tmp$ret$0 = 'Tried to seek backward';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.hu_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.cu_1.h()) {
      var insertTable = $this.wt_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.cu_1);
      $this.cu_1.d6();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.wt_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.cu_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.lu_1.sx(change);
  }
  function registerInsertUpFixup($this) {
    $this.cu_1.a($this.lu_1.tx());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.vt_1.qv_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    var tmp0_this = $this;
    tmp0_this.hu_1 = tmp0_this.hu_1 + $this.vt_1.sz() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.lw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      tmp0_let.hx();
      tmp0_let.sw(get_movableContentKey(), reference.az_1);
      tmp0_let.wy();
      tmp0_let.tz(reference.bz_1);
      slots.uz(reference.ez_1, 1, tmp0_let);
      tmp0_let.cw();
      tmp0_let.dy();
      tmp0_let.ey();
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.wv();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var state = new MovableContentState(slotTable);
    $this.ps_1.vz(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.qs_1.wz()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var changes = tmp$ret$0;
      $this.au_1 = changes;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      var tmp1_read = $this.qs_1;
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_read.yu();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.vt_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.ss_1;
          try {
            $this.ss_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.iu_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.ss_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.wv();
      }
      tmp$ret$2 = tmp;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.vt_1.qv_1 - $this.hu_1 | 0;
    $this.hu_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.vt_1.f() > 0) {
      var reader = $this.vt_1;
      var location = reader.sv_1;
      if (!($this.ku_1.xz(-2) === location)) {
        if (!$this.iu_1 ? $this.ju_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.iu_1 = true;
        }
        if (location > 0) {
          var anchor = reader.ix(location);
          $this.ku_1.ev(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.vt_1.sv_1;
    var currentStartedGroup = $this.ku_1.xz(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = currentStartedGroup <= location;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      tmp$ret$0 = 'Missed recording an endGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if ($this.ku_1.xz(-1) === location) {
      $this.ku_1.tx();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.iu_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.iu_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.vs_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$0 = 'Start/end imbalance';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = $this.ku_1.h();
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$1 = 'Missed recording an endGroup()';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.ws_1 = null;
    $this.xs_1 = 0;
    $this.zs_1 = 0;
    $this.hu_1 = 0;
    $this.eu_1 = 0;
    $this.ft_1 = false;
    $this.iu_1 = false;
    $this.ku_1.d6();
    $this.st_1.d6();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = nodeIndex >= 0;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      if ($this.mu_1 === nodeIndex) {
        var tmp0_this = $this;
        tmp0_this.pu_1 = tmp0_this.pu_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.mu_1 = nodeIndex;
        $this.pu_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.pu_1 > 0 ? $this.nu_1 === (from - $this.pu_1 | 0) : false) ? $this.ou_1 === (to - $this.pu_1 | 0) : false) {
        var tmp0_this = $this;
        tmp0_this.pu_1 = tmp0_this.pu_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.nu_1 = from;
        $this.ou_1 = to;
        $this.pu_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.pu_1;
    $this.pu_1 = 0;
    if (count > 0) {
      if ($this.mu_1 >= 0) {
        var removeIndex = $this.mu_1;
        $this.mu_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.nu_1;
        $this.nu_1 = -1;
        var to = $this.ou_1;
        $this.ou_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().rw_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.f4_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.eu_1;
    tmp$ret$0 = rotateLeft(tmp0_rol, 3);
    tmp.eu_1 = tmp$ret$0 ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().rw_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.f4_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.eu_1 ^ groupKey;
    tmp$ret$0 = rotateRight(tmp0_ror, 3);
    tmp.eu_1 = tmp$ret$0;
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.tt_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      tmp$ret$0 = 'Reentrant composition is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().yz('Compose:recompose');
      try {
        $this.pt_1 = currentSnapshot();
        $this.qt_1 = $this.pt_1.e10();
        $this.jt_1.d6();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.h10_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.f10_1[index];
            var tmp0__anonymous__q1qw7t = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.g10_1[index];
            var tmp1__anonymous__uwfjfc = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0__anonymous__q1qw7t.nr_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i10_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.gt_1.a(new Invalidation(tmp0__anonymous__q1qw7t, location, tmp1__anonymous__uwfjfc));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.gt_1;
        if (tmp2_sortBy.f() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.xs_1 = 0;
        var complete = false;
        $this.tt_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.j10();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.sy((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          var tmp_4 = ComposerImpl$doCompose$composable$lambda_0($this);
          var tmp_5 = ComposerImpl$doCompose$composable$lambda_1($this);
          observeDerivedStateRecalculations(tmp_4, tmp_5, ComposerImpl$doCompose$composable$lambda_2(content, $this, savedContent));
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.tt_1 = false;
          $this.gt_1.d6();
          if (!complete) {
            abortRoot($this);
          }
        }
        tmp$ret$2 = tmp_3;
        break $l$block;
      }finally {
        Trace_getInstance().k10(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.l10_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).m10 = function (a, b) {
    return this.l10_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.m10(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.n10(index)) {
      slots.mw();
      if (slots.oy(slots.fr_1)) {
        applier.kp();
      }
      slots.dy();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.er_1;
    var current = slots.fr_1;
    while (current >= 0 ? !slots.oy(current) : false) {
      current = slots.gw(current);
    }
    var index = 0;
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    while (current < original) {
      if (slots.o10(original, current)) {
        if (slots.oy(current))
          index = 0;
        var tmp1 = current;
        current = tmp1 + 1 | 0;
      } else {
        index = index + (slots.oy(current) ? 1 : slots.py(current)) | 0;
        current = current + slots.wx(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.iz(anchor);
    runtimeCheck(slots.er_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.er_1 < destination) {
      if (slots.q10(destination)) {
        if (slots.p10()) {
          applier.jp(slots.qz(slots.er_1));
          nodeIndex = 0;
        }
        slots.ow();
      } else
        nodeIndex = nodeIndex + slots.cw() | 0;
    }
    runtimeCheck(slots.er_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.vt_1.c11(group)) {
      var key = this$0.vt_1.fw(group);
      var objectKey = this$0.vt_1.ew(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.vt_1.s10(group, 0);
        var anchor = this$0.vt_1.ix(group);
        var end = group + this$0.vt_1.wx(group) | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.gt_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(tmp0_fastMap.f());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastMap.g(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            tmp$ret$0 = to(item.gy_1, item.iy_1);
            var tmp0_plusAssign = tmp$ret$0;
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        tmp$ret$1 = target;
        var invalidations = tmp$ret$1;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.us_1, this$0.qs_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.ps_1.b11(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.vt_1.oy(group) ? 1 : this$0.vt_1.py(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.vt_1.py(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.vt_1.s10(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.t10_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp1_forEach = compositionContext.y10_1;
            var tmp0_iterator = tmp1_forEach.c();
            while (tmp0_iterator.d()) {
              var element = tmp0_iterator.e();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
            }
          }
          tmp_0 = this$0.vt_1.py(group);
        } else {
          tmp_0 = this$0.vt_1.py(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.vt_1.r10(group)) {
      var size = this$0.vt_1.wx(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.vt_1.oy(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.vt_1.qz(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.vt_1.wx(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.vt_1.py(group);
    }
    return tmp;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.d11($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.lp($insertIndex, node);
      applier.jp(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.e11($groupAnchor);
      applier.kp();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.mp($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.gp();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).kq();
    return Unit_getInstance();
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.gp();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.f11($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.f11($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.g11($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.kr(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          var composition = previous.mr_1;
          var tmp_1;
          if (!(composition == null)) {
            previous.ei();
            composition.fs_1 = true;
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h11(935231726);
      sourceInformation($composer_0, 'C1983@73024L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(935231726, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1982)');
        tmp = Unit_getInstance();
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.i11();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.j11($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.k11($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.us_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.l11(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112191L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n11()) {
        if (isTraceInProgress()) {
          traceEventStart(694380496, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.m11_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (isInterface(applier, Applier))
        applier;
      else
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $tmp0_let, $to) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var savedChanges = this$0.ss_1;
        try {
          this$0.ss_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.vt_1;
            var savedCountOverrides = this$0.bt_1;
            this$0.bt_1 = null;
            try {
              this$0.vt_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.az_1, $to.gz_1, $to.bz_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.vt_1 = savedReader;
              this$0.bt_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.ss_1 = savedChanges;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $nodesToInsert.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $nodesToInsert.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (isInterface(applier, Applier))
            applier;
          else
            THROW_CCE();
          applier.mp(base + index | 0, item);
          applier.lp(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.ps_1.jz($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.o11(1, state.kz_1, 2);
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.h();
      if (tmp$ret$0) {
        var tmp_1 = $to.cz_1;
        var toComposition = tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.f() - 1 | 0;
        var tmp_2;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = slots.p11(item, 0);
            var recomposeScope = tmp_3 instanceof RecomposeScopeImpl ? tmp_3 : null;
            var tmp0_safe_receiver = recomposeScope;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.q11(toComposition);
            }
          }
           while (inductionVariable <= last);
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.az_1, $to.gz_1, $to.bz_1, true);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (isInterface(applier, Applier))
      applier;
    else
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.dy();
    return Unit_getInstance();
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $count) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.kp();
        }
         while (inductionVariable < $count);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.jp($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.r11($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.hx();
      slots.t11($insertTable, $anchor.s11($insertTable));
      slots.ey();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.lw();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp;
      try {
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = $fixups.f() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = $fixups.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, tmp0_let, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }finally {
        tmp0_let.wv();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.hx();
      slots.t11($insertTable, $anchor.s11($insertTable));
      slots.ey();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.u11($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.np($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.op($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.hy_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.hy_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposerImpl$doCompose$composable$lambda_0(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.ot_1;
      tmp0_this.ot_1 = tmp1 + 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_1(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.ot_1;
      tmp0_this.ot_1 = tmp1 - 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_2($content, this$0, $savedContent) {
    return function () {
      var tmp;
      if (!($content == null)) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, $content);
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else if (((this$0.et_1 ? true : this$0.kt_1) ? !($savedContent == null) : false) ? !equals($savedContent, Companion_getInstance_1().rw_1) : false) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, (!($savedContent == null) ? typeof $savedContent === 'function' : false) ? $savedContent : THROW_CCE());
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else {
        this$0.v11();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_getInstance();
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.os_1 = applier;
    this.ps_1 = parentContext;
    this.qs_1 = slotTable;
    this.rs_1 = abandonSet;
    this.ss_1 = changes;
    this.ts_1 = lateChanges;
    this.us_1 = composition;
    this.vs_1 = new Stack();
    this.ws_1 = null;
    this.xs_1 = 0;
    this.ys_1 = new IntStack();
    this.zs_1 = 0;
    this.at_1 = new IntStack();
    this.bt_1 = null;
    this.ct_1 = null;
    this.dt_1 = false;
    this.et_1 = false;
    this.ft_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.gt_1 = tmp$ret$0;
    this.ht_1 = new IntStack();
    this.it_1 = persistentHashMapOf();
    this.jt_1 = new IntMap();
    this.kt_1 = false;
    this.lt_1 = new IntStack();
    this.mt_1 = false;
    this.nt_1 = -1;
    this.ot_1 = 0;
    this.pt_1 = currentSnapshot();
    this.qt_1 = 0;
    this.rt_1 = true;
    this.st_1 = new Stack();
    this.tt_1 = false;
    this.ut_1 = false;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.qs_1.yu();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.wv();
    tmp$ret$1 = tmp0_also;
    tmp_0.vt_1 = tmp$ret$1;
    this.wt_1 = new SlotTable();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.wt_1.lw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.wv();
    tmp$ret$2 = tmp0_also_0;
    tmp_1.xt_1 = tmp$ret$2;
    this.yt_1 = false;
    this.zt_1 = null;
    this.au_1 = null;
    var tmp_2 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp1_read = this.wt_1;
    var tmp$ret$5;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_read.yu();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_3;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp$ret$3 = tmp0_let.ix(0);
      tmp_3 = tmp$ret$3;
    }finally {
      tmp0_let.wv();
    }
    tmp$ret$4 = tmp_3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp_2.bu_1 = tmp$ret$6;
    var tmp_4 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$7 = ArrayList_init_$Create$();
    tmp_4.cu_1 = tmp$ret$7;
    this.du_1 = false;
    this.eu_1 = 0;
    this.fu_1 = 0;
    this.gu_1 = new Stack();
    this.hu_1 = 0;
    this.iu_1 = false;
    this.ju_1 = true;
    this.ku_1 = new IntStack();
    this.lu_1 = new Stack();
    this.mu_1 = -1;
    this.nu_1 = -1;
    this.ou_1 = -1;
    this.pu_1 = 0;
  }
  protoOf(ComposerImpl).w11 = function () {
    return this.os_1;
  };
  protoOf(ComposerImpl).x11 = function () {
    return this.ot_1 > 0;
  };
  protoOf(ComposerImpl).y11 = function () {
    return this.ps_1.z11();
  };
  protoOf(ComposerImpl).h11 = function (key) {
    return start(this, key, null, Companion_getInstance_2().zv_1, null);
  };
  protoOf(ComposerImpl).i11 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).a12 = function () {
    return start(this, -127, null, Companion_getInstance_2().zv_1, null);
  };
  protoOf(ComposerImpl).b12 = function () {
    endGroup(this);
    var scope = this.c12();
    if (!(scope == null) ? scope.ux() : false) {
      scope.d12(true);
    }
  };
  protoOf(ComposerImpl).e12 = function () {
    var tmp;
    if (this.kt_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.c12();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e12()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).vy = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_2().zv_1, null);
  };
  protoOf(ComposerImpl).zy = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).f12 = function () {
    this.jt_1.d6();
  };
  protoOf(ComposerImpl).g12 = function () {
    return this.du_1;
  };
  protoOf(ComposerImpl).n11 = function () {
    var tmp;
    var tmp_0;
    if ((!this.du_1 ? !this.mt_1 : false) ? !this.kt_1 : false) {
      var tmp0_safe_receiver = this.c12();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h12()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.et_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).pw = function () {
    start(this, 125, null, Companion_getInstance_2().aw_1, null);
    this.ft_1 = true;
  };
  protoOf(ComposerImpl).i12 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.du_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      tmp$ret$0 = 'createNode() can only be called when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.ys_1.j12();
    var groupAnchor = this.xt_1.ix(this.xt_1.fr_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.zs_1;
    tmp0_this.zs_1 = tmp1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).k12 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.du_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      tmp$ret$0 = 'useNode() called while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.vt_1, this);
    recordDown(this, node);
    var tmp;
    if (this.mt_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).l12 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).m12 = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.du_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).j10 = function () {
    var tmp;
    if (this.du_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().rw_1;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.vt_1.e();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp$ret$0 = this.mt_1 ? Companion_getInstance_1().rw_1 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(ComposerImpl).fv = function (value) {
    var tmp;
    if (!equals(this.j10(), value)) {
      this.sy(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).n12 = function (value) {
    var tmp;
    if (!(this.j10() === value)) {
      this.sy(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).o12 = function (value) {
    var next = this.j10();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.sy(value);
    return true;
  };
  protoOf(ComposerImpl).p12 = function (value) {
    var next = this.j10();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.sy(value);
    return true;
  };
  protoOf(ComposerImpl).sy = function (value) {
    if (this.du_1) {
      this.xt_1.tz(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.rs_1.a(value);
      }
    } else {
      var groupSlotIndex = this.vt_1.q12() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.rs_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).r12 = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.du_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.yt_1 = true;
    } else {
      var tmp = this.vt_1.s12(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.vt_1.s12(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.n11() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.du_1 : false) {
      this.jt_1.xy(this.vt_1.qv_1, providers);
    }
    this.lt_1.ev(asInt(this.kt_1));
    this.kt_1 = invalid;
    this.zt_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_2().zv_1, providers);
  };
  protoOf(ComposerImpl).t12 = function () {
    endGroup(this);
    endGroup(this);
    this.kt_1 = asBool(this.lt_1.tx());
    this.zt_1 = null;
  };
  protoOf(ComposerImpl).u12 = function (key) {
    return resolveCompositionLocal(this, key, currentCompositionLocalScope(this));
  };
  protoOf(ComposerImpl).c12 = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.st_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    tmp$ret$0 = (this.ot_1 === 0 ? tmp0_let.rz() : false) ? tmp0_let.j12() : null;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ComposerImpl).mz = function (scope, instance) {
    var tmp0_elvis_lhs = scope.nr_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var location = anchor.s11(this.qs_1);
    if (this.tt_1 ? location >= this.vt_1.qv_1 : false) {
      insertIfMissing(this.gt_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).v11 = function () {
    if (this.gt_1.h()) {
      skipGroup(this);
    } else {
      var reader = this.vt_1;
      var key = reader.dx();
      var dataKey = reader.fx();
      var aux = reader.nw();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.p10(), null);
      recomposeToGroupEnd(this);
      reader.by();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).mw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.zs_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.c12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v12();
    }
    if (this.gt_1.h()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).w12 = function (key) {
    start(this, key, null, Companion_getInstance_2().zv_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).x12 = function () {
    var scope = this.st_1.rz() ? this.st_1.tx() : null;
    var tmp0_safe_receiver = scope;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.ty(false);
    }
    var tmp1_safe_receiver = scope;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y12(this.qt_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp;
    if ((!(scope == null) ? !scope.a13() : false) ? scope.ux() ? true : this.dt_1 : false) {
      if (scope.nr_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.du_1) {
          tmp_1 = this.xt_1.ix(this.xt_1.fr_1);
        } else {
          tmp_1 = this.vt_1.ix(this.vt_1.sv_1);
        }
        tmp_0.nr_1 = tmp_1;
      }
      scope.z12(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).b13 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).c13 = function (sourceInformation) {
    if (this.du_1 ? this.rt_1 : false) {
      this.xt_1.d13(sourceInformation);
    }
  };
  protoOf(ComposerImpl).e13 = function (key, sourceInformation) {
    if (this.rt_1) {
      start(this, key, null, Companion_getInstance_2().zv_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).f13 = function () {
    if (this.rt_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).g13 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.tt_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      tmp$ret$0 = 'Preparing a composition while composing is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.tt_1 = true;
    try {
      block();
    }finally {
      this.tt_1 = false;
    }
  };
  protoOf(ComposerImpl).h13 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.ss_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.rz()) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.gt_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.et_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp2_isNotEmpty = this.ss_1;
      tmp$ret$2 = !tmp2_isNotEmpty.h();
      return tmp$ret$2;
    }
    return false;
  };
  protoOf(ComposerImpl).i13 = function () {
    return this.c12();
  };
  protoOf(ComposerImpl).j13 = function () {
    return this.j10();
  };
  protoOf(ComposerImpl).k13 = function (value) {
    return this.sy(value);
  };
  protoOf(ComposerImpl).l13 = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.m13(true);
    }
  };
  protoOf(ComposerImpl).n13 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.ss_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.rw_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_getInstance();
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.az_1 = content;
    this.bz_1 = parameter;
    this.cz_1 = composition;
    this.dz_1 = slotTable;
    this.ez_1 = anchor;
    this.fz_1 = invalidations;
    this.gz_1 = locals;
    this.hz_1 = 8;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      tmp$ret$0 = 'Check failed';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.kz_1 = slotTable;
    this.lz_1 = 8;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.c13(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    tmp$ret$0 = !(tmp0_let == null) ? tmp0_let.o13() : false;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p13(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q13();
    }
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.e13(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.f13();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.r13_1 = compositionLocal;
    this.s13_1 = value;
    this.t13_1 = canOverride;
    this.u13_1 = 0;
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.v13_1 = message;
  }
  protoOf(ComposeRuntimeError).p5 = function () {
    return this.v13_1;
  };
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.p5();
  });
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.vw_1.f();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.vw_1.g(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.vw_1 = keyInfos;
    this.ww_1 = startIndex;
    this.xw_1 = 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.ww_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      tmp$ret$0 = 'Invalid start index';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp.yw_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    var result = tmp$ret$2;
    var inductionVariable = 0;
    var last = this.vw_1.f();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.vw_1.g(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.lx_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.mx_1);
        result.v2(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.mx_1 | 0;
      }
       while (inductionVariable < last);
    tmp$ret$3 = result;
    tmp$ret$4 = tmp$ret$3;
    tmp_0.zw_1 = tmp$ret$4;
    var tmp_1 = this;
    tmp_1.ax_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).w13 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = keyMap$factory();
    tmp$ret$0 = this.ax_1.o1();
    return tmp$ret$0;
  };
  protoOf(Pending).gx = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.w13(), joinedKey);
  };
  protoOf(Pending).cx = function (keyInfo) {
    return this.yw_1.a(keyInfo);
  };
  protoOf(Pending).ux = function () {
    return this.yw_1;
  };
  protoOf(Pending).qx = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.zw_1.g7();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.x13_1;
        if (position === from)
          element.x13_1 = to;
        else if (to <= position ? position < from : false)
          element.x13_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.zw_1.g7();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.x13_1;
        if (position_0 === from)
          element_0.x13_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.x13_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).yx = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.zw_1.g7();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.y13_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.y13_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.y13_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.zw_1.g7();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.y13_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.y13_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.y13_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).bx = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.zw_1;
    var tmp1_set = keyInfo.lx_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.v2(tmp1_set, tmp2_set);
  };
  protoOf(Pending).vx = function (group, newCount) {
    var groupInfo = this.zw_1.z1(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.y13_1;
      var difference = newCount - groupInfo.z13_1 | 0;
      groupInfo.z13_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = this.zw_1.g7();
        var tmp0_iterator = tmp0_forEach.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.y13_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.y13_1 + difference | 0;
            if (newIndex >= 0)
              element.y13_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).px = function (keyInfo) {
    var tmp0_safe_receiver = this.zw_1.z1(keyInfo.lx_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x13_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).ox = function (keyInfo) {
    var tmp0_safe_receiver = this.zw_1.z1(keyInfo.lx_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y13_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).xx = function (keyInfo) {
    var tmp0_safe_receiver = this.zw_1.z1(keyInfo.lx_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z13_1;
    return tmp1_elvis_lhs == null ? keyInfo.mx_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.gy_1 = scope;
    this.hy_1 = location;
    this.iy_1 = instances;
  }
  protoOf(Invalidation).my = function () {
    return this.gy_1.a14(this.iy_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.zv_1 = _GroupKind___init__impl__iwqg06(0);
    this.aw_1 = _GroupKind___init__impl__iwqg06(1);
    this.bw_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    _init_properties_Composer_kt__bmp4g0();
    var $composer_0 = $composer;
    $composer_0.h11(692276709);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):Composer.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(692276709, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (Composer.kt:320)');
    }
    var result = persistentHashMapOf();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.hw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var provided = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.h11(1391443232);
      sourceInformation($composer_0, '*330@12010L24');
      if (provided.t13_1 ? true : !contains_0(parentScope, provided.r13_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.r13_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.r13_1.b14(provided.s13_1, $composer_0, 0);
        tmp0_apply.v2(tmp0_set, tmp1_set);
      }
      $composer_0.i11();
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h7();
    var tmp1_group = tmp$ret$1;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function contains_0(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.v1(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.z1(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var validation = _this__u8e3s4.g(index);
      if (validation.hy_1 < end) {
        _this__u8e3s4.z2(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.f()) {
      var firstInvalidation = _this__u8e3s4.g(index);
      if (firstInvalidation.hy_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.z2(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.gw(a) === b)
      return b;
    if (_this__u8e3s4.gw(b) === a)
      return a;
    if (_this__u8e3s4.gw(a) === _this__u8e3s4.gw(b))
      return _this__u8e3s4.gw(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.gw(currentA);
      }
       while (inductionVariable < tmp0_repeat);
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_repeat)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.gw(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.gw(currentA);
      currentB = _this__u8e3s4.gw(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp0_safe_receiver = instance;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        tmp0_also.c14(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_also;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      }
      _this__u8e3s4.q6(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.g(index).iy_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.g(index).iy_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.c14(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.yu();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.iz(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.wv();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var invalidation = _this__u8e3s4.g(index);
      if (invalidation.hy_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.x13_1 = slotIndex;
    this.y13_1 = nodeIndex;
    this.z13_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.z1(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var answer = tmp$ret$0;
      _this__u8e3s4.v2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.kx_1 == null) ? new JoinedKey(_this__u8e3s4.jx_1, _this__u8e3s4.kx_1) : _this__u8e3s4.jx_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.z1(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp$ret$0 = tmp1_safe_receiver;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = findLocation(_this__u8e3s4, location);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? -(tmp0_let + 1 | 0) | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.g(mid);
      var cmp = compareTo(midVal.hy_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.gw(current);
      var tmp0 = count;
      count = tmp0 + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.z1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a6(value);
      var tmp_0;
      if (tmp0_safe_receiver.h()) {
        _this__u8e3s4.c7(key);
        tmp_0 = Unit_getInstance();
      }
      tmp$ret$0 = tmp_0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_with.g12() ? true : !equals(tmp0_with.j13(), value)) {
      tmp0_with.k13(value);
      _Updater___get_composer__impl__9ty7av($this).m12(value, block);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.oy(group)) {
      result.a($reader.qz(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.wx(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.wx(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_getInstance();
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.mw();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.dy();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.d14(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.e14();
    return Unit_getInstance();
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.w13();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (properties_initialized_Composer_kt_89qzc2) {
    } else {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.is_1.x11();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.ur_1.h14(get_PendingApplyNoModifications());
    if (toRecord == null) {
    } else {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.ur_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.ur_1.h14(null);
    if (equals(toRecord, get_PendingApplyNoModifications())) {
    } else {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.ur_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, values, forgetConditionalScopes) {
    var invalidated = {_v: null};
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (value instanceof RecomposeScopeImpl) {
        value.i14(null);
      } else {
        addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, value);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var tmp1_forEachScopeOf = $this.as_1;
        var index = find_2(tmp1_forEachScopeOf, value);
        if (index >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.nz_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
              addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, tmp2__anonymous__z9zvc9);
            }
             while (inductionVariable < last);
        }
      }
    }
    var tmp;
    if (forgetConditionalScopes) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp3_isNotEmpty = $this.zr_1;
      tmp$ret$0 = !tmp3_isNotEmpty.h();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp4_removeValueIf = $this.yr_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var destinationIndex = 0;
      var inductionVariable_0 = 0;
      var last_0 = tmp4_removeValueIf.m14_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var valueIndex = tmp4_removeValueIf.j14_1[i_0];
          var set = ensureNotNull(tmp4_removeValueIf.l14_1[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var destinationIndex_0 = 0;
          var inductionVariable_1 = 0;
          var last_1 = set.nz_1;
          if (inductionVariable_1 < last_1)
            do {
              var i_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var tmp_0 = set.oz_1[i_1];
              var item = isObject(tmp_0) ? tmp_0 : THROW_CCE();
              var tmp$ret$3;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_1;
              if ($this.zr_1.i(item)) {
                tmp_1 = true;
              } else {
                var tmp0_safe_receiver = invalidated._v;
                var tmp_2;
                if (tmp0_safe_receiver == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$2;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$1;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp$ret$1 = tmp0_safe_receiver.i(item);
                  tmp$ret$2 = tmp$ret$1;
                  tmp_2 = tmp$ret$2;
                }
                tmp_1 = tmp_2 === true;
              }
              tmp$ret$3 = tmp_1;
              if (!tmp$ret$3) {
                if (!(destinationIndex_0 === i_1)) {
                  set.oz_1[destinationIndex_0] = item;
                }
                var tmp1 = destinationIndex_0;
                destinationIndex_0 = tmp1 + 1 | 0;
              }
            }
             while (inductionVariable_1 < last_1);
          var inductionVariable_2 = destinationIndex_0;
          var last_2 = set.nz_1;
          if (inductionVariable_2 < last_2)
            do {
              var i_2 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              set.oz_1[i_2] = null;
            }
             while (inductionVariable_2 < last_2);
          set.nz_1 = destinationIndex_0;
          if (set.nz_1 > 0) {
            if (!(destinationIndex === i_0)) {
              var destinationKeyOrder = tmp4_removeValueIf.j14_1[destinationIndex];
              tmp4_removeValueIf.j14_1[destinationIndex] = valueIndex;
              tmp4_removeValueIf.j14_1[i_0] = destinationKeyOrder;
            }
            var tmp1_0 = destinationIndex;
            destinationIndex = tmp1_0 + 1 | 0;
          }
        }
         while (inductionVariable_0 < last_0);
      var inductionVariable_3 = destinationIndex;
      var last_3 = tmp4_removeValueIf.m14_1;
      if (inductionVariable_3 < last_3)
        do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          tmp4_removeValueIf.k14_1[tmp4_removeValueIf.j14_1[i_3]] = null;
        }
         while (inductionVariable_3 < last_3);
      tmp4_removeValueIf.m14_1 = destinationIndex;
      cleanUpDerivedStateObservations($this);
      $this.zr_1.d6();
    } else {
      var tmp1_safe_receiver = invalidated._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.yr_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var destinationIndex_1 = 0;
        var inductionVariable_4 = 0;
        var last_4 = tmp0_removeValueIf.m14_1;
        if (inductionVariable_4 < last_4)
          do {
            var i_4 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var valueIndex_0 = tmp0_removeValueIf.j14_1[i_4];
            var set_0 = ensureNotNull(tmp0_removeValueIf.l14_1[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var destinationIndex_2 = 0;
            var inductionVariable_5 = 0;
            var last_5 = set_0.nz_1;
            if (inductionVariable_5 < last_5)
              do {
                var i_5 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                var tmp_3 = set_0.oz_1[i_5];
                var item_0 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
                var tmp$ret$4;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                tmp$ret$4 = tmp1_safe_receiver.i(item_0);
                if (!tmp$ret$4) {
                  if (!(destinationIndex_2 === i_5)) {
                    set_0.oz_1[destinationIndex_2] = item_0;
                  }
                  var tmp1_1 = destinationIndex_2;
                  destinationIndex_2 = tmp1_1 + 1 | 0;
                }
              }
               while (inductionVariable_5 < last_5);
            var inductionVariable_6 = destinationIndex_2;
            var last_6 = set_0.nz_1;
            if (inductionVariable_6 < last_6)
              do {
                var i_6 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                set_0.oz_1[i_6] = null;
              }
               while (inductionVariable_6 < last_6);
            set_0.nz_1 = destinationIndex_2;
            if (set_0.nz_1 > 0) {
              if (!(destinationIndex_1 === i_4)) {
                var destinationKeyOrder_0 = tmp0_removeValueIf.j14_1[destinationIndex_1];
                tmp0_removeValueIf.j14_1[destinationIndex_1] = valueIndex_0;
                tmp0_removeValueIf.j14_1[i_4] = destinationKeyOrder_0;
              }
              var tmp1_2 = destinationIndex_1;
              destinationIndex_1 = tmp1_2 + 1 | 0;
            }
          }
           while (inductionVariable_4 < last_4);
        var inductionVariable_7 = destinationIndex_1;
        var last_7 = tmp0_removeValueIf.m14_1;
        if (inductionVariable_7 < last_7)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            tmp0_removeValueIf.k14_1[tmp0_removeValueIf.j14_1[i_7]] = null;
          }
           while (inductionVariable_7 < last_7);
        tmp0_removeValueIf.m14_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
        tmp$ret$5 = Unit_getInstance();
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.as_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.m14_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = tmp0_removeValueIf.j14_1[i];
        var set = ensureNotNull(tmp0_removeValueIf.l14_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        var last_0 = set.nz_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = set.oz_1[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            tmp$ret$0 = !$this.yr_1.n14(item);
            if (!tmp$ret$0) {
              if (!(destinationIndex_0 === i_0)) {
                set.oz_1[destinationIndex_0] = item;
              }
              var tmp1 = destinationIndex_0;
              destinationIndex_0 = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = destinationIndex_0;
        var last_1 = set.nz_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set.oz_1[i_1] = null;
          }
           while (inductionVariable_1 < last_1);
        set.nz_1 = destinationIndex_0;
        if (set.nz_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = tmp0_removeValueIf.j14_1[destinationIndex];
            tmp0_removeValueIf.j14_1[destinationIndex] = valueIndex;
            tmp0_removeValueIf.j14_1[i] = destinationKeyOrder;
          }
          var tmp1_0 = destinationIndex;
          destinationIndex = tmp1_0 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_2 = tmp0_removeValueIf.m14_1;
    if (inductionVariable_2 < last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        tmp0_removeValueIf.k14_1[tmp0_removeValueIf.j14_1[i_2]] = null;
      }
       while (inductionVariable_2 < last_2);
    tmp0_removeValueIf.m14_1 = destinationIndex;
    // Inline function 'androidx.compose.runtime.removeValueIf' call
    var tmp1_removeValueIf = $this.zr_1;
    var iter = tmp1_removeValueIf.c();
    while (iter.d()) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = iter.e();
      tmp$ret$1 = !tmp2__anonymous__z9zvc9.o14();
      if (tmp$ret$1) {
        iter.a3();
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = $this.yr_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.nz_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (tmp2__anonymous__z9zvc9.i14(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.ds_1.p14(value, tmp2__anonymous__z9zvc9);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.wr_1);
    try {
      if (changes.h())
        return Unit_getInstance();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().yz('Compose:applyChanges');
        try {
          $this.tr_1.hp();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          var tmp1_write = $this.xr_1;
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_write.lw();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.tr_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.g(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, tmp0_let, manager);
              }
               while (inductionVariable <= last);
            changes.d6();
            tmp = Unit_getInstance();
          }finally {
            tmp0_let.wv();
          }
          tmp$ret$0 = tmp;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          $this.tr_1.ip();
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().k10(token);
        }
      }
      manager.w14();
      manager.x14();
      manager.y14();
      if ($this.fs_1) {
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().yz('Compose:unobserve');
          try {
            $this.fs_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.yr_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.m14_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = tmp0_removeValueIf.j14_1[i];
                var set = ensureNotNull(tmp0_removeValueIf.l14_1[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                var last_1 = set.nz_1;
                if (inductionVariable_1 < last_1)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = set.oz_1[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    var tmp$ret$4;
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    tmp$ret$4 = !item_0.z14();
                    if (!tmp$ret$4) {
                      if (!(destinationIndex_0 === i_0)) {
                        set.oz_1[destinationIndex_0] = item_0;
                      }
                      var tmp1 = destinationIndex_0;
                      destinationIndex_0 = tmp1 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < last_1);
                var inductionVariable_2 = destinationIndex_0;
                var last_2 = set.nz_1;
                if (inductionVariable_2 < last_2)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    set.oz_1[i_1] = null;
                  }
                   while (inductionVariable_2 < last_2);
                set.nz_1 = destinationIndex_0;
                if (set.nz_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = tmp0_removeValueIf.j14_1[destinationIndex];
                    tmp0_removeValueIf.j14_1[destinationIndex] = valueIndex;
                    tmp0_removeValueIf.j14_1[i] = destinationKeyOrder;
                  }
                  var tmp1_0 = destinationIndex;
                  destinationIndex = tmp1_0 + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_3 = tmp0_removeValueIf.m14_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                tmp0_removeValueIf.k14_1[tmp0_removeValueIf.j14_1[i_2]] = null;
              }
               while (inductionVariable_3 < last_3);
            tmp0_removeValueIf.m14_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            tmp$ret$5 = Unit_getInstance();
            break $l$block_0;
          }finally {
            Trace_getInstance().k10(token_0);
          }
        }
      }
    }finally {
      if ($this.cs_1.h()) {
        manager.a15();
      }
    }
  }
  function abandonChanges($this) {
    $this.ur_1.b15(null);
    $this.bs_1.d6();
    $this.cs_1.d6();
    $this.wr_1.d6();
  }
  function invalidateChecked($this, scope, anchor, instance) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.vr_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.gs_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.xr_1.c15($this.hs_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var delegate = tmp;
    if (delegate == null) {
      if ($this.d15() ? $this.is_1.mz(scope, instance) : false) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.es_1.e15(scope, null);
      } else {
        addValue($this.es_1, scope, instance);
      }
    }
    tmp$ret$2 = delegate;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var delegate_0 = tmp$ret$4;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.sr_1.f15($this);
    return $this.d15() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.es_1;
    $this.es_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.q14_1 = abandoning;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.r14_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.s14_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.t14_1 = tmp$ret$2;
    this.u14_1 = null;
    this.v14_1 = null;
  }
  protoOf(RememberEventDispatcher).f11 = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.s14_1.i1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.s14_1.z2(tmp0_let);
      tmp = this.q14_1.a6(instance);
    } else {
      tmp = this.r14_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(RememberEventDispatcher).kr = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.r14_1.i1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.r14_1.z2(tmp0_let);
      tmp = this.q14_1.a6(instance);
    } else {
      tmp = this.s14_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(RememberEventDispatcher).jr = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.v14_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.v14_1 = tmp0_also;
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_plusAssign = tmp;
    tmp1_plusAssign.a(instance);
  };
  protoOf(RememberEventDispatcher).w14 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.s14_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().yz('Compose:onForgotten');
        try {
          var inductionVariable = this.s14_1.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.s14_1.g(i);
              if (!this.q14_1.i(instance)) {
                instance.g15();
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().k10(token);
        }
      }
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.r14_1;
    tmp$ret$2 = !tmp1_isNotEmpty.h();
    if (tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().yz('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.r14_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.q14_1.a6(item);
              item.h15();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().k10(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).y14 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.t14_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().yz('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.t14_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.t14_1.d6();
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().k10(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).a15 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.q14_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().yz('Compose:abandons');
        try {
          var iterator = this.q14_1.c();
          while (iterator.d()) {
            var instance = iterator.e();
            iterator.a3();
            instance.i15();
          }
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().k10(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).x14 = function () {
    var deactivating = this.u14_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = deactivating == null ? true : deactivating.h();
    if (!tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().yz('Compose:deactivations');
        try {
          var inductionVariable = deactivating.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.g(i);
              instance.lq();
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().k10(token);
        }
      }
      deactivating.d6();
    }
    var releasing = this.v14_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$2 = releasing == null ? true : releasing.h();
    if (!tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().yz('Compose:releases');
        try {
          var inductionVariable_0 = releasing.f() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = releasing.g(i_0);
              instance_0.mq();
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().k10(token_0);
        }
      }
      releasing.d6();
    }
  };
  function addPendingInvalidationsLocked$invalidate(this$0, $forgetConditionalScopes, invalidated, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = this$0.yr_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.nz_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (!this$0.ds_1.j15(value, tmp2__anonymous__z9zvc9) ? !tmp2__anonymous__z9zvc9.i14(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp2__anonymous__z9zvc9.o14() ? !$forgetConditionalScopes : false) {
              this$0.zr_1.a(tmp2__anonymous__z9zvc9);
            } else {
              var tmp0_elvis_lhs = invalidated._v;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp$ret$0;
                // Inline function 'kotlin.also' call
                var tmp0_also = HashSet_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>.<anonymous>' call
                invalidated._v = tmp0_also;
                tmp$ret$0 = tmp0_also;
                tmp = tmp$ret$0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var set = tmp;
              set.a(tmp2__anonymous__z9zvc9);
            }
          }
        }
         while (inductionVariable < last);
    }
  }
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.sr_1 = parent;
    this.tr_1 = applier;
    this.ur_1 = new AtomicReference(null);
    this.vr_1 = createSynchronizedObject();
    this.wr_1 = HashSet_init_$Create$();
    this.xr_1 = new SlotTable();
    this.yr_1 = new IdentityScopeMap();
    this.zr_1 = HashSet_init_$Create$();
    this.as_1 = new IdentityScopeMap();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.bs_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.cs_1 = tmp$ret$1;
    this.ds_1 = new IdentityScopeMap();
    this.es_1 = new IdentityArrayMap();
    this.fs_1 = false;
    this.gs_1 = null;
    this.hs_1 = 0;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.tr_1, this.sr_1, this.xr_1, this.wr_1, this.bs_1, this.cs_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.sr_1.k15(tmp0_also);
    tmp$ret$2 = tmp0_also;
    tmp_1.is_1 = tmp$ret$2;
    this.js_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.sr_1;
    tmp_2.ks_1 = tmp_3 instanceof Recomposer;
    this.ls_1 = false;
    this.ms_1 = ComposableSingletons$CompositionKt_getInstance().l15_1;
  }
  protoOf(CompositionImpl).d15 = function () {
    return this.is_1.tt_1;
  };
  protoOf(CompositionImpl).n15 = function () {
    return this.ls_1;
  };
  protoOf(CompositionImpl).o15 = function (values) {
    $l$loop: while (true) {
      var old = this.ur_1.aj();
      var tmp0_subject = old;
      var tmp;
      if (tmp0_subject == null ? true : equals(tmp0_subject, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [old, values];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          tmp = tmp$ret$2;
        } else {
          if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var tmp1_error = 'corrupt pendingModifications: ' + this.ur_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.ur_1.p15(old, new_0)) {
        if (old == null) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp2_synchronized = this.vr_1;
          var tmp$ret$3;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          drainPendingModificationsLocked(this);
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$4 = tmp$ret$3;
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).q15 = function (values) {
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.yr_1.n14(value) ? true : this.as_1.n14(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).g13 = function (block) {
    return this.is_1.g13(block);
  };
  protoOf(CompositionImpl).r15 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.is_1.c12();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.m13(true);
        this.yr_1.p14(value, tmp0_safe_receiver);
        if (isInterface(value, DerivedState)) {
          this.as_1.s15(value);
          var indexedObject = value.t15();
          var inductionVariable = 0;
          var last = indexedObject.length;
          $l$loop: while (inductionVariable < last) {
            var dependency = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (dependency == null)
              break $l$loop;
            this.as_1.p14(dependency, value);
          }
        }
        tmp0_safe_receiver.u15(value);
        tmp$ret$0 = Unit_getInstance();
      }
    }
  };
  protoOf(CompositionImpl).v15 = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.vr_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp1_forEachScopeOf = this.as_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.nz_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          invalidateScopeOfLocked(this, tmp2__anonymous__z9zvc9);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(CompositionImpl).w15 = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.vr_1;
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'kotlin.also' call
          var tmp0_also = this.is_1.h13(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!tmp0_also) {
            drainPendingModificationsLocked(this);
          }
          tmp$ret$0 = tmp0_also;
          tmp$ret$1 = tmp$ret$0;
          tmp_1 = tmp$ret$1;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.es_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$2 = tmp_1;
        tmp$ret$3 = tmp$ret$2;
        var tmp0_also_0 = tmp$ret$3;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$4 = tmp0_also_0;
        tmp_0 = tmp$ret$4;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.wr_1;
          tmp$ret$5 = !tmp1_isNotEmpty.h();
          tmp_3 = tmp$ret$5;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.wr_1)).a15();
        }
      }
      tmp$ret$6 = tmp_0;
      tmp = tmp$ret$6;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$7 = tmp;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    return tmp$ret$10;
  };
  protoOf(CompositionImpl).x15 = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          tmp$ret$0 = equals(item.r2_1.cz_1, this);
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        this.is_1.b13(references);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$2 = tmp0_also;
        tmp_0 = tmp$ret$2;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.wr_1;
          tmp$ret$3 = !tmp1_isNotEmpty.h();
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.wr_1)).a15();
        }
      }
      tmp$ret$4 = tmp_0;
      tmp = tmp$ret$4;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$5 = tmp;
  };
  protoOf(CompositionImpl).y15 = function (state) {
    var manager = new RememberEventDispatcher(this.wr_1);
    var slotTable = state.kz_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.lw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.wv();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    manager.w14();
    manager.x14();
  };
  protoOf(CompositionImpl).z15 = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.vr_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.bs_1);
        drainPendingModificationsLocked(this);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.wr_1;
          tmp$ret$1 = !tmp1_isNotEmpty.h();
          tmp_1 = tmp$ret$1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.wr_1)).a15();
        }
      }
      tmp$ret$2 = tmp_0;
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
  };
  protoOf(CompositionImpl).a16 = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.vr_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.cs_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        if (tmp$ret$0) {
          applyChangesInLocked(this, this.cs_1);
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.wr_1;
          tmp$ret$2 = !tmp1_isNotEmpty.h();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.wr_1)).a15();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  protoOf(CompositionImpl).f12 = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.vr_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        this.is_1.f12();
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.wr_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        if (tmp$ret$0) {
          (new RememberEventDispatcher(this.wr_1)).a15();
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.wr_1;
          tmp$ret$2 = !tmp1_isNotEmpty.h();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.wr_1)).a15();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  protoOf(CompositionImpl).b16 = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.vr_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.xr_1.su_1;
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.c16();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(CompositionImpl).pz = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.gs_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.hs_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.gs_1 = null;
        this.hs_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).d16 = function (scope, instance) {
    if (scope.e16()) {
      scope.z12(true);
    }
    var anchor = scope.nr_1;
    if ((anchor == null ? true : !this.xr_1.f16(anchor)) ? true : !anchor.z14())
      return InvalidationResult_IGNORED_getInstance();
    if (!anchor.z14())
      return InvalidationResult_IGNORED_getInstance();
    if (!scope.g16())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).h16 = function (instance, scope) {
    this.yr_1.j15(instance, scope);
  };
  protoOf(CompositionImpl).i16 = function (state) {
    if (!this.yr_1.n14(state)) {
      this.as_1.s15(state);
    }
  };
  protoOf(CompositionImpl).j16 = function (set__$_ezb9bk) {
    this.ms_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).k16 = function (content) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.ls_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      tmp$ret$0 = 'The composition is disposed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.j16(content);
    this.sr_1.l16(this, this.ms_1);
  };
  protoOf(CompositionImpl).m16 = function (content) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this.vr_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.is_1.n13(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.es_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        var tmp0_also = tmp$ret$2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$3 = tmp0_also;
        tmp_0 = tmp$ret$3;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.wr_1;
          tmp$ret$4 = !tmp1_isNotEmpty.h();
          tmp_3 = tmp$ret$4;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.wr_1)).a15();
        }
      }
      tmp$ret$5 = tmp_0;
      tmp = tmp$ret$5;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$6 = tmp;
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.l11(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.n11()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:505)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mw();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.l11(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.n11()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:596)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mw();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.l15_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.m15_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.o16(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.n16(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.c14(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.c14(value);
      tmp$ret$0 = tmp0_also;
      _this__u8e3s4.e15(key, tmp$ret$0);
    }
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (properties_initialized_Composition_kt_u7hvq2) {
    } else {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyCompositionLocalMap;
  }
  var EmptyCompositionLocalMap;
  function CompositionContext() {
    this.zu_1 = 0;
  }
  protoOf(CompositionContext).hv = function (table) {
  };
  protoOf(CompositionContext).k15 = function (composer) {
  };
  protoOf(CompositionContext).bv = function () {
    return get_EmptyCompositionLocalMap();
  };
  protoOf(CompositionContext).av = function () {
  };
  protoOf(CompositionContext).jv = function () {
  };
  protoOf(CompositionContext).jz = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (properties_initialized_CompositionContext_kt_mk393b) {
    } else {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyCompositionLocalMap = persistentHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.iw_1 = new LazyValueHolder(defaultFactory);
    this.jw_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.r16_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).s16 = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).b14 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.w12(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@9992L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.r12(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.t12();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.x12();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.w16(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.a17_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).b14 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h11(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().rw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(value, this.a17_1);
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
    var tmp3_apply = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp3_apply.hn(value);
    tmp$ret$5 = tmp3_apply;
    var tmp0_0 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
    return tmp0_0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function observeDerivedStateRecalculations(start, done, block) {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().aj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.also' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(16), null);
      tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
      tmp$ret$2 = tmp$ret$1;
      var tmp0_also = tmp$ret$2;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations.<anonymous>' call
      get_derivedStateObservers().f17(tmp0_also);
      tmp$ret$3 = tmp0_also;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var observers = tmp;
    var observer = to(start, done);
    try {
      observers.c14(observer);
      block();
    }finally {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$4 = observers.i17_1 - 1 | 0;
      observers.z2(tmp$ret$4);
    }
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (properties_initialized_DerivedState_kt_scch8q) {
    } else {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.k17_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h11(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)336@14101L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:331)');
    }
    var applyContext = $composer_0.y11();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.h11(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.fv(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.j13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().rw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.l17_1 = task;
    this.m17_1 = CoroutineScope(parentCoroutineContext);
    this.n17_1 = null;
  }
  protoOf(LaunchedEffectImpl).h15 = function () {
    var tmp0_safe_receiver = this.n17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.n17_1 = launch(this.m17_1, VOID, VOID, this.l17_1);
  };
  protoOf(LaunchedEffectImpl).g15 = function () {
    var tmp0_safe_receiver = this.n17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ye();
    }
    this.n17_1 = null;
  };
  protoOf(LaunchedEffectImpl).i15 = function () {
    var tmp0_safe_receiver = this.n17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ye();
    }
    this.n17_1 = null;
  };
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h11(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.h11(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.fv(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.j13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().rw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
  }
  function DisposableEffect$composable_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h11(-1541565433);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)275@11877L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1541565433, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:271)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = keys.slice();
    var tmp4_remember$composable = $composer_0;
    var $composer_1 = tmp4_remember$composable;
    $composer_1.h11(-1603429786);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp3_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.fv(key));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = invalid;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.j13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().rw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
  }
  function DisposableEffectImpl(effect) {
    this.o17_1 = effect;
    this.p17_1 = null;
  }
  protoOf(DisposableEffectImpl).h15 = function () {
    this.p17_1 = this.o17_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).g15 = function () {
    var tmp0_safe_receiver = this.p17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dh();
    }
    this.p17_1 = null;
  };
  protoOf(DisposableEffectImpl).i15 = function () {
  };
  function DisposableEffect$composable_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h11(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.h11(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.fv(key1) | $composer_1.fv(key2));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.j13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().rw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i11();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (properties_initialized_Effects_kt_cj8kem) {
    } else {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.f4_1;
    } else {
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.q17_1 = left;
    this.r17_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.q17_1), 31) + hashCodeOf(this, this.r17_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.q17_1) + ', right=' + toString_0(this.r17_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.q17_1, tmp0_other_with_cast.q17_1))
      return false;
    if (!equals(this.r17_1, tmp0_other_with_cast.r17_1))
      return false;
    return true;
  };
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.s3(Key_getInstance_0());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.s17_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.s17_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.s17_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.s17_1 === tmp0_other_with_cast.s17_1))
      return false;
    return true;
  };
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.lr_1 = $this.lr_1 | 32;
    } else {
      $this.lr_1 = $this.lr_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.lr_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.lr_1 = $this.lr_1 | 16;
    } else {
      $this.lr_1 = $this.lr_1 & -17;
    }
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.pr_1 === $token ? equals($tmp0_safe_receiver, this$0.qr_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var destinationIndex = 0;
        var inductionVariable = 0;
        var last = $tmp0_safe_receiver.t17_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = $tmp0_safe_receiver.u17_1[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = $tmp0_safe_receiver.v17_1[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.h16(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.i16(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.rr_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.w17(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.h10_1 === 0) {
                    this$0.rr_1 = null;
                    tmp_3 = Unit_getInstance();
                  }
                  tmp$ret$0 = tmp_3;
                  tmp_2 = Unit_getInstance();
                }
                tmp$ret$1 = tmp_2;
                tmp$ret$2 = tmp$ret$1;
              }
            }
            tmp$ret$3 = tmp0_also;
            tmp$ret$4 = tmp$ret$3;
            if (!tmp$ret$4) {
              if (!(destinationIndex === i)) {
                $tmp0_safe_receiver.u17_1[destinationIndex] = key;
                $tmp0_safe_receiver.v17_1[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < last);
        var inductionVariable_0 = destinationIndex;
        var last_0 = $tmp0_safe_receiver.t17_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $tmp0_safe_receiver.u17_1[i_0] = null;
          }
           while (inductionVariable_0 < last_0);
        $tmp0_safe_receiver.t17_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.t17_1 === 0) {
          this$0.qr_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(composition) {
    this.lr_1 = 0;
    this.mr_1 = composition;
    this.nr_1 = null;
    this.or_1 = null;
    this.pr_1 = 0;
    this.qr_1 = null;
    this.rr_1 = null;
  }
  protoOf(RecomposeScopeImpl).z14 = function () {
    var tmp;
    if (!(this.mr_1 == null)) {
      var tmp0_safe_receiver = this.nr_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z14();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).g16 = function () {
    return !(this.or_1 == null);
  };
  protoOf(RecomposeScopeImpl).m13 = function (value) {
    if (value) {
      this.lr_1 = this.lr_1 | 1;
    } else {
      this.lr_1 = this.lr_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).ux = function () {
    return !((this.lr_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).d12 = function (value) {
    if (value) {
      this.lr_1 = this.lr_1 | 2;
    } else {
      this.lr_1 = this.lr_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).e16 = function () {
    return !((this.lr_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).z12 = function (value) {
    if (value) {
      this.lr_1 = this.lr_1 | 4;
    } else {
      this.lr_1 = this.lr_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).e12 = function () {
    return !((this.lr_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).ty = function (value) {
    if (value) {
      this.lr_1 = this.lr_1 | 8;
    } else {
      this.lr_1 = this.lr_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).h12 = function () {
    return !((this.lr_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).ky = function (composer) {
    var tmp0_safe_receiver = this.or_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1);
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    } else {
    }
  };
  protoOf(RecomposeScopeImpl).i14 = function (value) {
    var tmp0_safe_receiver = this.mr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d16(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).ei = function () {
    this.mr_1 = null;
    this.qr_1 = null;
    this.rr_1 = null;
  };
  protoOf(RecomposeScopeImpl).q11 = function (composition) {
    this.mr_1 = composition;
  };
  protoOf(RecomposeScopeImpl).c16 = function () {
    var tmp0_safe_receiver = this.mr_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.d16(this, null);
  };
  protoOf(RecomposeScopeImpl).w16 = function (block) {
    this.or_1 = block;
  };
  protoOf(RecomposeScopeImpl).a13 = function () {
    return !((this.lr_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).uy = function (token) {
    this.pr_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).v12 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).u15 = function (instance) {
    if (_get_rereading__g2iruw(this))
      return Unit_getInstance();
    var tmp0_elvis_lhs = this.qr_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.qr_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.x17(instance, this.pr_1);
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.rr_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.rr_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.e15(instance, instance.b17());
    }
  };
  protoOf(RecomposeScopeImpl).o14 = function () {
    return !(this.rr_1 == null);
  };
  protoOf(RecomposeScopeImpl).a14 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.rr_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.rz()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (!(instances == null) ? isInterface(instances, Collection) : false) {
          tmp_1 = instances.h();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = element;
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (isInterface(tmp0_let, DerivedState))
              tmp0_let;
            else
              THROW_CCE();
            var tmp0_elvis_lhs_0 = tmp0_let.c17();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp$ret$1 = policy.y17(tmp0_let.b17(), trackedDependencies.n16(tmp0_let));
            tmp$ret$2 = tmp$ret$1;
            tmp_2 = tmp$ret$2;
          } else {
            tmp_2 = false;
          }
          tmp$ret$3 = tmp_2;
          if (!tmp$ret$3) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).jy = function () {
    var tmp0_safe_receiver = this.mr_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.qr_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var inductionVariable = 0;
          var last = tmp0_safe_receiver_0.t17_1;
          var tmp_1;
          if (inductionVariable < last) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver_0.u17_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver_0.v17_1[i];
              tmp0_safe_receiver.r15(tmp0__anonymous__q1qw7t);
            }
             while (inductionVariable < last);
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp$ret$0 = tmp_0;
        tmp = Unit_getInstance();
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
    }
  };
  protoOf(RecomposeScopeImpl).y12 = function (token) {
    var tmp0_safe_receiver = this.qr_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.a13()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var inductionVariable = 0;
          var last = tmp0_safe_receiver.t17_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver.u17_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver.v17_1[i];
              tmp$ret$0 = !(tmp1__anonymous__uwfjfc === token);
              if (tmp$ret$0) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp$ret$2 = tmp_0;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.z17_1.o1();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.z17_1.in(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.z17_1.o1();
      var new_0 = old.a6(info);
      if (old === new_0 ? true : $this.z17_1.in(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.d6();
    toInsert.d6();
    toApply.d6();
    toLateApply.d6();
    toComplete.d6();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.d6();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.e18_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.l18_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a(item);
      }
       while (inductionVariable <= last);
    this$0.l18_1.d6();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (this$0.d18_1.hq()) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().yz('Recomposer:animation');
          try {
            this$0.d18_1.iq(frameTime);
            Companion_getInstance_9().y18();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().k10(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$15;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().yz('Recomposer:recompose');
        try {
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.e18_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          recordComposerModificationsLocked(this$0);
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.j18_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a(item);
            }
             while (inductionVariable <= last);
          this$0.j18_1.d6();
          tmp$ret$1 = Unit_getInstance();
          tmp$ret$2 = tmp$ret$1;
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            var tmp$ret$3;
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp$ret$3 = !$toRecompose.h();
            if (tmp$ret$3) {
              tmp_0 = true;
            } else {
              var tmp$ret$4;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$4 = !$toInsert.h();
              tmp_0 = tmp$ret$4;
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = $toRecompose.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = $toRecompose.g(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.c14(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$5;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a(tmp0_safe_receiver);
                    tmp$ret$5 = Unit_getInstance();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.d6();
            }
            if (modifiedValues.rz()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.e18_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.h18_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = tmp0_fastForEach_0.f() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_fastForEach_0.g(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.j2(item_1) ? item_1.q15(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_getInstance();
              }
              tmp$ret$6 = tmp_1;
              tmp$ret$7 = tmp$ret$6;
            }
            if ($toRecompose.h()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  var tmp$ret$8;
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  tmp$ret$8 = !$toInsert.h();
                  if (!tmp$ret$8) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp2_plusAssign = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll($toLateApply, tmp2_plusAssign);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_getInstance();
                } else {
                  throw $p;
                }
              }
            }
          }
          var tmp$ret$9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$9 = !$toApply.h();
          if (tmp$ret$9) {
            var tmp0_this = this$0;
            var tmp1 = tmp0_this.c18_1;
            tmp0_this.c18_1 = tmp1.bc();
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toApply);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = $toApply.f() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = $toApply.g(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.z15();
                }
                 while (inductionVariable_2 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.d6();
            }
          }
          var tmp$ret$10;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$10 = !$toLateApply.h();
          if (tmp$ret$10) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toLateApply);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.c();
              while (tmp0_iterator.d()) {
                var element = tmp0_iterator.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.a16();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.d6();
            }
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$11 = !$toComplete.h();
          if (tmp$ret$11) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.c();
              while (tmp0_iterator_0.d()) {
                var element_0 = tmp0_iterator_0.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.f12();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.d6();
            }
          }
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp3_synchronized = this$0.e18_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          Companion_getInstance_9().z18();
          tmp$ret$15 = Unit_getInstance();
          break $l$block_0;
        }finally {
          Trace_getInstance().k10(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.e18_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.t18_1.o1().g4(State_Idle_getInstance()) >= 0) {
        this$0.i18_1.t(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = tmp$ret$2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.h3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.i19_1 = $block;
    this.j19_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).l19 = function ($this$coroutineScope, $completion) {
    var tmp = this.m19($this$coroutineScope, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).gd = function (p1, $completion) {
    return this.l19((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 2;
            this.lc_1 = 1;
            suspendResult = this.i19_1(this.k19_1, this.j19_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).m19 = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.i19_1, this.j19_1, completion);
    i.k19_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.l19($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function deriveStateLocked($this) {
    if ($this.t18_1.o1().g4(State_ShuttingDown_getInstance()) <= 0) {
      $this.h18_1.d6();
      var tmp = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      tmp.i18_1 = tmp$ret$0;
      $this.j18_1.d6();
      $this.k18_1.d6();
      $this.l18_1.d6();
      $this.o18_1 = null;
      var tmp0_safe_receiver = $this.p18_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.dg();
      $this.p18_1 = null;
      $this.s18_1 = null;
      return null;
    }
    var tmp_0;
    if (!($this.s18_1 == null)) {
      tmp_0 = State_Inactive_getInstance();
    } else {
      if ($this.f18_1 == null) {
        var tmp_1 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp$ret$1 = LinkedHashSet_init_$Create$();
        tmp_1.i18_1 = tmp$ret$1;
        $this.j18_1.d6();
        tmp_0 = $this.d18_1.hq() ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp_5;
        var tmp_6;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = $this.j18_1;
        tmp$ret$2 = !tmp0_isNotEmpty.h();
        if (tmp$ret$2) {
          tmp_6 = true;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = $this.i18_1;
          tmp$ret$3 = !tmp1_isNotEmpty.h();
          tmp_6 = tmp$ret$3;
        }
        if (tmp_6) {
          tmp_5 = true;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp2_isNotEmpty = $this.k18_1;
          tmp$ret$4 = !tmp2_isNotEmpty.h();
          tmp_5 = tmp$ret$4;
        }
        if (tmp_5) {
          tmp_4 = true;
        } else {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp3_isNotEmpty = $this.l18_1;
          tmp$ret$5 = !tmp3_isNotEmpty.h();
          tmp_4 = tmp$ret$5;
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          tmp_3 = $this.q18_1 > 0;
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          tmp_2 = $this.d18_1.hq();
        }
        if (tmp_2) {
          tmp_0 = State_PendingWork_getInstance();
        } else {
          tmp_0 = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp_0;
    $this.t18_1.hn(newState);
    var tmp_7;
    if (newState.equals(State_PendingWork_getInstance())) {
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp4_also = $this.p18_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.p18_1 = null;
      tmp$ret$6 = tmp4_also;
      tmp_7 = tmp$ret$6;
    } else {
      tmp_7 = null;
    }
    return tmp_7;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.e18_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    tmp$ret$0 = !$this.r18_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp1_any = $this.u18_1.ml();
        var tmp0_iterator = tmp1_any.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          tmp$ret$3 = element.sd();
          if (tmp$ret$3) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.n19_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.o19_1 = recoverable;
    this.p19_1 = cause;
  }
  function recordComposerModificationsLocked($this) {
    var changes = $this.i18_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !changes.h();
    if (tmp$ret$0) {
      var tmp$ret$2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var tmp0_fastForEach = $this.h18_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastForEach.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastForEach.g(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>.<anonymous>' call
            item.o15(changes);
            if ($this.t18_1.o1().g4(State_ShuttingDown_getInstance()) <= 0) {
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$2 = tmp$ret$1;
      var tmp = $this;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$3 = LinkedHashSet_init_$Create$();
      tmp.i18_1 = tmp$ret$3;
      if (!(deriveStateLocked($this) == null)) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
      }
    }
  }
  function registerRunnerJob($this, callingJob) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.e18_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.g18_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.t18_1.o1().g4(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.f18_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.f18_1 = callingJob;
    tmp$ret$1 = deriveStateLocked($this);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().a18_1.aj()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = $this.e18_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.k18_1.d6();
      $this.j18_1.d6();
      var tmp_0 = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      tmp_0.i18_1 = tmp$ret$0;
      $this.l18_1.d6();
      $this.m18_1.d6();
      $this.n18_1.d6();
      $this.s18_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.o18_1;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$2;
          // Inline function 'kotlin.also' call
          var tmp$ret$1;
          // Inline function 'kotlin.collections.mutableListOf' call
          tmp$ret$1 = ArrayList_init_$Create$();
          var tmp0_also = tmp$ret$1;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.o18_1 = tmp0_also;
          tmp$ret$2 = tmp0_also;
          tmp_1 = tmp$ret$2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_1;
        if (!failedCompositions.i(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a(failedInitialComposition);
        }
        var tmp1_this = $this;
        // Inline function 'kotlin.collections.minusAssign' call
        var tmp1_minusAssign = tmp1_this.h18_1;
        tmp1_minusAssign.a6(failedInitialComposition);
      }
      tmp$ret$3 = deriveStateLocked($this);
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.e18_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.i18_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = $this.j18_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = $this.d18_1.hq();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  }
  function recompositionRunner($this, block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.j3();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    var tmp0 = withContext($this.d18_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
    return tmp0;
  }
  function performInitialMovableContentInserts($this, composition) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.e18_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.l18_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          tmp$ret$0 = equals(item.cz_1, composition);
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_getInstance();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    var toInsert = tmp$ret$4;
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !toInsert.h();
      if (!tmp$ret$5) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    if (composition.d15() ? true : composition.n15())
      return null;
    var tmp;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_9().z19(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.a1a();
          try {
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            var tmp0_safe_receiver = modifiedValues;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rz()) === true) {
              composition.g13(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$0 = composition.w15();
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            snapshot.b1a(previous);
          }
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$2) {
      tmp = composition;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function performInsertValues($this, references, modifiedValues) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.f());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        tmp$ret$0 = item.cz_1;
        var key = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.z1(key);
        var tmp;
        if (value == null) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          tmp$ret$1 = ArrayList_init_$Create$();
          var answer = tmp$ret$1;
          destination.v2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        tmp$ret$2 = tmp;
        var list = tmp$ret$2;
        list.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$3 = destination;
    var tasks = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$4 = tasks.m1().c();
    var tmp0_iterator = tmp$ret$4;
    while (tmp0_iterator.d()) {
      var tmp1_loop_parameter = tmp0_iterator.e();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$5 = tmp1_loop_parameter.l1();
      var composition = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$6 = tmp1_loop_parameter.o1();
      var refs = tmp$ret$6;
      runtimeCheck(!composition.d15());
      var tmp$ret$13;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_9().z19(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          var tmp$ret$12;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.a1a();
            try {
              var tmp$ret$11;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp0_synchronized = $this.e18_1;
              var tmp$ret$10;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp$ret$9;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              var tmp$ret$8;
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.f());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.g(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp$ret$7;
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  tmp$ret$7 = to(item_0, removeLastMultiValue($this.m18_1, item_0.az_1));
                  var tmp0_plusAssign = tmp$ret$7;
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$8 = target;
              tmp$ret$9 = tmp$ret$8;
              tmp$ret$10 = tmp$ret$9;
              tmp$ret$11 = tmp$ret$10;
              var pairs = tmp$ret$11;
              composition.x15(pairs);
              tmp$ret$12 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.b1a(previous);
            }
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.a2());
  }
  function discardUnusedValues($this) {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.e18_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.m18_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var references = flatten($this.m18_1.g7());
      $this.m18_1.d6();
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.f());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          tmp$ret$1 = to(item, $this.n18_1.z1(item));
          var tmp0_plusAssign = tmp$ret$1;
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      tmp$ret$2 = target;
      var unusedValues = tmp$ret$2;
      $this.n18_1.d6();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var unusedValues_0 = tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.g(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.t2();
        var state = item_0.u2();
        if (!(state == null)) {
          reference.cz_1.y15(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.p1a();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.dh();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.j18_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.d18_1.hq();
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.z17_1 = MutableStateFlow(persistentSetOf());
    this.a18_1 = new AtomicReference(false);
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.d6();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.e18_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.l18_1.c();
    while (iterator.d()) {
      var value = iterator.e();
      if (equals(value.cz_1, $composition)) {
        toInsert.a(value);
        iterator.a3();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.e18_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.t18_1.o1().g4(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.g18_1);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.h3(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.e18_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = runnerJobCause;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = !(tmp0_safe_receiver_0 instanceof CancellationException);
          if (tmp$ret$0) {
            tmp_2 = tmp0_safe_receiver_0;
          } else {
            tmp_2 = null;
          }
          tmp$ret$1 = tmp_2;
          tmp_1 = tmp$ret$1;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        tmp$ret$3 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$3;
      }
      tmp.g18_1 = tmp_0;
      this$0.t18_1.hn(State_ShutDown_getInstance());
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$5 = tmp$ret$4;
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.e18_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.f18_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.t18_1.hn(State_ShuttingDown_getInstance());
        if (!this$0.r18_1) {
          runnerJob.xe(cancellation);
        } else if (!(this$0.p18_1 == null)) {
          continuationToResume = this$0.p18_1;
        }
        this$0.p18_1 = null;
        tmp = runnerJob.se(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.g18_1 = cancellation;
        this$0.t18_1.hn(State_ShutDown_getInstance());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.h3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.y1a_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g1b = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.h1b($this$recompositionRunner, parentFrameClock, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).i1b = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.g1b(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 6;
            var tmp_0 = this;
            tmp_0.b1b_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.c1b_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.d1b_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.e1b_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.f1b_1 = LinkedHashSet_init_$Create$();
            this.lc_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.y1a_1)) {
              this.lc_1 = 5;
              continue $sm;
            }

            this.lc_1 = 2;
            suspendResult = awaitWorkAvailable(this.y1a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_synchronized = this.y1a_1.e18_1;
            var tmp_5;
            if (!_get_hasFrameWorkLocked__1gtyf7(this.y1a_1)) {
              recordComposerModificationsLocked(this.y1a_1);
              tmp_5 = !_get_hasFrameWorkLocked__1gtyf7(this.y1a_1);
            } else {
              tmp_5 = false;
            }

            if (tmp_5) {
              this.lc_1 = 1;
              continue $sm;
            } else {
              this.lc_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.lc_1 = 4;
            suspendResult = this.a1b_1.jq(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.y1a_1, this.b1b_1, this.c1b_1, this.d1b_1, this.e1b_1, this.f1b_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.y1a_1);
            this.lc_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.oc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.mc_1 === 6) {
          throw e;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).h1b = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.y1a_1, completion);
    i.z1a_1 = $this$recompositionRunner;
    i.a1b_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.g1b($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.r1b_1 = this$0;
    this.s1b_1 = $block;
    this.t1b_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).l19 = function ($this$withContext, $completion) {
    var tmp = this.m19($this$withContext, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  protoOf(Recomposer$recompositionRunner$slambda).gd = function (p1, $completion) {
    return this.l19((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 5;
            this.v1b_1 = get_job(this.u1b_1.rd());
            registerRunnerJob(this.r1b_1, this.v1b_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_9();
            tmp_0.w1b_1 = tmp_1.y1b(Recomposer$recompositionRunner$slambda$lambda(this.r1b_1));
            addRunning(Companion_getInstance_3(), this.r1b_1.w18_1);
            this.lc_1 = 1;
            continue $sm;
          case 1:
            this.mc_1 = 4;
            var tmp0_synchronized = this.r1b_1.e18_1;
            var tmp0_fastForEach = this.r1b_1.h18_1;
            var inductionVariable = 0;
            var last = tmp0_fastForEach.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0_fastForEach.g(index);
                item.b16();
              }
               while (inductionVariable <= last);
            this.lc_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.s1b_1, this.t1b_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x1b_1 = suspendResult;
            this.mc_1 = 5;
            this.lc_1 = 3;
            continue $sm;
          case 3:
            this.w1b_1.dh();
            var tmp1_synchronized = this.r1b_1.e18_1;
            if (this.r1b_1.f18_1 === this.v1b_1) {
              this.r1b_1.f18_1 = null;
            }

            deriveStateLocked(this.r1b_1);
            ;
            removeRunning(Companion_getInstance_3(), this.r1b_1.w18_1);
            ;
            return Unit_getInstance();
          case 4:
            this.mc_1 = 5;
            var t = this.oc_1;
            this.w1b_1.dh();
            var tmp1_synchronized_0 = this.r1b_1.e18_1;
            if (this.r1b_1.f18_1 === this.v1b_1) {
              this.r1b_1.f18_1 = null;
            }

            deriveStateLocked(this.r1b_1);
            ;
            removeRunning(Companion_getInstance_3(), this.r1b_1.w18_1);
            ;
            throw t;
          case 5:
            throw this.oc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.mc_1 === 5) {
          throw e;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).m19 = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.r1b_1, this.s1b_1, this.t1b_1, completion);
    i.u1b_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.l19($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $modifiedValues.nz_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0__anonymous__q1qw7t = $modifiedValues.g(i);
          $composition.v15(tmp0__anonymous__q1qw7t);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.r15(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.v15(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.c14(value);
      return Unit_getInstance();
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y19_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.y19_1)) {
              this.lc_1 = 1;
              var tmp0__anonymous__q1qw7t = this;
              var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
              cancellable.ch();
              var tmp0_synchronized = this.y19_1.e18_1;
              if (_get_hasSchedulingWork__b617oy(this.y19_1)) {
                var tmp0_success = Companion_getInstance();
                cancellable.h3(_Result___init__impl__xyqfz8(Unit_getInstance()));
              } else {
                this.y19_1.p18_1 = cancellable;
              }
              suspendResult = returnIfSuspended(cancellable.qf(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.lc_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.lc_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.oc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.mc_1 === 3) {
          throw e;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.c18_1 = new Long(0, 0);
    var tmp = this;
    tmp.d18_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.e18_1 = createSynchronizedObject();
    this.f18_1 = null;
    this.g18_1 = null;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.h18_1 = tmp$ret$0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_1.i18_1 = tmp$ret$1;
    var tmp_2 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_2.j18_1 = tmp$ret$2;
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_3.k18_1 = tmp$ret$3;
    var tmp_4 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    tmp_4.l18_1 = tmp$ret$4;
    var tmp_5 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$5 = LinkedHashMap_init_$Create$();
    tmp_5.m18_1 = tmp$ret$5;
    var tmp_6 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$6 = LinkedHashMap_init_$Create$();
    tmp_6.n18_1 = tmp$ret$6;
    this.o18_1 = null;
    this.p18_1 = null;
    this.q18_1 = 0;
    this.r18_1 = false;
    this.s18_1 = null;
    this.t18_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_7 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.s3(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.se(Recomposer$effectJob$lambda(this));
    tmp$ret$7 = tmp0_apply;
    tmp_7.u18_1 = tmp$ret$7;
    this.v18_1 = effectCoroutineContext.z3(this.d18_1).z3(this.u18_1);
    this.w18_1 = new RecomposerInfoImpl(this);
    this.x18_1 = 8;
  }
  protoOf(Recomposer).z11 = function () {
    return this.v18_1;
  };
  protoOf(Recomposer).z1b = function ($completion) {
    var tmp0 = recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
    return tmp0;
  };
  protoOf(Recomposer).iv = function () {
    return 1000;
  };
  protoOf(Recomposer).gv = function () {
    return false;
  };
  protoOf(Recomposer).hv = function (table) {
  };
  protoOf(Recomposer).f15 = function (composition) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.e18_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.j18_1.i(composition)) {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this.j18_1;
      tmp0_plusAssign.a(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.h3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(Recomposer).yy = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.e18_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.l18_1;
    tmp0_plusAssign.a(reference);
    tmp$ret$0 = deriveStateLocked(this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.h3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(Recomposer).b11 = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.e18_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    tmp$ret$0 = addMultiValue(this.m18_1, reference.az_1, reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Recomposer).vz = function (reference, data) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.e18_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_set = this.n18_1;
    tmp0_set.v2(reference, data);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(Recomposer).jz = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.e18_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    tmp$ret$0 = this.n18_1.c7(reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(Recomposer).l16 = function (composition, content) {
    var composerWasComposing = composition.d15();
    try {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_9().z19(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.a1a();
            try {
              composition.m16(content);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.b1a(previous);
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_9().z18();
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.e18_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.t18_1.o1().g4(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.h18_1.i(composition)) {
        var tmp0_this = this;
        var tmp0_plusAssign = tmp0_this.h18_1;
        tmp0_plusAssign.a(composition);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    try {
      composition.z15();
      composition.a16();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_9().z18();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.z1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.h()) {
        _this__u8e3s4.c7(key);
      }
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.z1(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      _this__u8e3s4.v2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2.a(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (properties_initialized_Recomposer_kt_k8q2ph) {
    } else {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor) {
    var groupsToMove = fromWriter.wx(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.er_1);
    if (fromWriter.rq_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.wq_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.oq_1;
    var currentGroup = toWriter.er_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.oq_1;
    var tmp1_copyInto = imul(currentGroup, 5);
    var tmp2_copyInto = imul(fromIndex, 5);
    var tmp3_copyInto = imul(sourceGroupsEnd, 5);
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = groups;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
    tmp$ret$4 = groups;
    var slots = toWriter.pq_1;
    var currentSlot = toWriter.uq_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.pq_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    tmp$ret$5 = slots;
    var parent = toWriter.fr_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    var tmp$ret$7;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    tmp$ret$6 = dataIndex_0(groups, toWriter, currentGroup);
    tmp$ret$7 = tmp$ret$6;
    var dataIndexDelta = currentSlot - tmp$ret$7 | 0;
    var slotsGapOwner = toWriter.yq_1;
    var slotsGapLen = toWriter.xq_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        var tmp$ret$9;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$8 = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        tmp$ret$9 = tmp$ret$8;
        var newDataIndex = tmp$ret$9;
        var tmp$ret$11;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$10 = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.wq_1, slotsGapLen, slotsCapacity);
        tmp$ret$11 = tmp$ret$10;
        var newDataAnchor = tmp$ret$11;
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          var tmp1 = slotsGapOwner;
          slotsGapOwner = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.yq_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.qq_1, fromIndex, fromWriter.f());
    var endAnchors = locationOf(fromWriter.qq_1, sourceGroupsEnd, fromWriter.f());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.qq_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.g(anchorIndex);
          var tmp3_this = sourceAnchor;
          tmp3_this.i10_1 = tmp3_this.i10_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.qq_1, toWriter.er_1, toWriter.f());
      toWriter.qq_1.i7(insertLocation, anchors);
      sourceAnchors.s6(startAnchors, endAnchors).d6();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.gw(fromIndex);
    var tmp_1;
    if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.ow();
        fromWriter.r11(parentGroup - fromWriter.er_1 | 0);
        fromWriter.ow();
      }
      fromWriter.r11(fromIndex - fromWriter.er_1 | 0);
      var anchorsRemoved = fromWriter.ns();
      if (needsStartGroups) {
        fromWriter.mw();
        fromWriter.dy();
        fromWriter.mw();
        fromWriter.dy();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp5_runtimeCheck = !anchorsRemoved_1;
    if (!tmp5_runtimeCheck) {
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      tmp$ret$12 = 'Unexpectedly removed anchors';
      var message = tmp$ret$12;
      composeRuntimeError(toString(message));
    }
    var tmp4_this = toWriter;
    tmp4_this.ar_1 = tmp4_this.ar_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.er_1 = currentGroup + groupsToMove | 0;
      toWriter.uq_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.zq_1 > 0;
    $this.dr_1.ev($this.ar_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.er_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().rw_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().rw_1) : false;
      initGroup($this.oq_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.fr_1, $this.uq_1);
      $this.vq_1 = $this.uq_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.pq_1;
        var currentSlot = $this.uq_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.uq_1 = currentSlot;
      }
      $this.ar_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.fr_1 = current;
      $this.er_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.fr_1;
      $this.br_1.ev(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.er_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().rw_1)) {
        if (isNode) {
          $this.a1c(aux);
        } else {
          $this.j11(aux);
        }
      }
      $this.uq_1 = slotIndex($this.oq_1, $this, currentGroupAddress);
      $this.vq_1 = dataIndex_0($this.oq_1, $this, groupIndexToAddress($this, $this.er_1 + 1 | 0));
      $this.ar_1 = nodeCount($this.oq_1, currentGroupAddress);
      $this.fr_1 = currentGroup;
      $this.er_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.oq_1, currentGroupAddress) | 0;
    }
    tmp.tq_1 = tmp_0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.oq_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.oq_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.hr_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.rz()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.c1c(), tmp0_safe_receiver);
      }
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.hr_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.hr_1 = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.d1c(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.oq_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.oq_1, groupAddress, containsAnyMarks);
      var parent = $this.gw(group);
      if (parent >= 0) {
        set.d1c(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.wx(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.oq_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.wx(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.cr_1.ev((_get_capacity__a9k9f3($this) - $this.sq_1 | 0) - $this.tq_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.sq_1 | 0) - $this.cr_1.tx() | 0;
    $this.tq_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.rq_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.oq_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.oq_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.sq_1;
    var gapStart = $this.rq_1;
    if (!(gapStart === index)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = $this.qq_1;
      tmp$ret$0 = !tmp0_isNotEmpty.h();
      if (tmp$ret$0) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.oq_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = groups;
          tmp$ret$2 = tmp$ret$1;
          var tmp = tmp$ret$2;
          var tmp$ret$4;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$3;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$3 = groups;
          tmp$ret$4 = tmp$ret$3;
          arrayCopy(tmp, tmp$ret$4, tmp1_copyInto, groupPhysicalAddress, groupPhysicalGapStart);
          tmp$ret$5 = groups;
        } else {
          var tmp$ret$10;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var tmp3_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$7;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$6;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$6 = groups;
          tmp$ret$7 = tmp$ret$6;
          var tmp_0 = tmp$ret$7;
          var tmp$ret$9;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$8;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$8 = groups;
          tmp$ret$9 = tmp$ret$8;
          arrayCopy(tmp_0, tmp$ret$9, groupPhysicalGapStart, tmp2_copyInto, tmp3_copyInto);
          tmp$ret$10 = groups;
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.oq_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.oq_1, groupAddress, newAnchor);
        }
        var tmp0 = groupAddress;
        groupAddress = tmp0 + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.rq_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.xq_1;
    var gapStart = $this.wq_1;
    var slotsGapOwner = $this.yq_1;
    if (!(gapStart === index)) {
      var slots = $this.pq_1;
      if (index < gapStart) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, tmp0_copyInto, index, gapStart);
        tmp$ret$0 = slots;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = gapStart + gapLen | 0;
        var tmp2_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp1_copyInto, tmp2_copyInto);
        tmp$ret$1 = slots;
      }
      fill_0(slots, null, index, index + gapLen | 0);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = group + 1 | 0;
    var tmp4_min = $this.f();
    tmp$ret$2 = Math.min(tmp3_min, tmp4_min);
    var newSlotsGapOwner = tmp$ret$2;
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.pq_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.rq_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.oq_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp5_runtimeCheck = anchor >= 0;
          if (!tmp5_runtimeCheck) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            var message = tmp$ret$3;
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.oq_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          var tmp0 = updateAddress;
          updateAddress = tmp0 + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.sq_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.oq_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp6_runtimeCheck = anchor_0 < 0;
          if (!tmp6_runtimeCheck) {
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            var message_0 = tmp$ret$4;
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.oq_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          var tmp1 = updateAddress_0;
          updateAddress_0 = tmp1 + 1 | 0;
          if (updateAddress_0 === $this.rq_1)
            updateAddress_0 = updateAddress_0 + $this.sq_1 | 0;
        }
      }
      $this.yq_1 = newSlotsGapOwner;
    }
    $this.wq_1 = index;
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.er_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.rq_1;
      var gapLen = $this.sq_1;
      var oldCapacity = $this.oq_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.oq_1;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = imul(gapStart, 5);
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = groups;
        tmp$ret$3 = tmp$ret$2;
        var tmp = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = newGroups;
        tmp$ret$5 = tmp$ret$4;
        arrayCopy(tmp, tmp$ret$5, 0, 0, tmp4_copyInto);
        tmp$ret$6 = newGroups;
        var tmp$ret$11;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp5_copyInto = imul(newGapEndAddress, 5);
        var tmp6_copyInto = imul(oldGapEndAddress, 5);
        var tmp7_copyInto = imul(oldCapacity, 5);
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = groups;
        tmp$ret$8 = tmp$ret$7;
        var tmp_0 = tmp$ret$8;
        var tmp$ret$10;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$9;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$9 = newGroups;
        tmp$ret$10 = tmp$ret$9;
        arrayCopy(tmp_0, tmp$ret$10, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto);
        tmp$ret$11 = newGroups;
        $this.oq_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.tq_1;
      if (currentEnd >= gapStart)
        $this.tq_1 = currentEnd + size | 0;
      $this.rq_1 = gapStart + size | 0;
      $this.sq_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.yq_1 < gapStart ? 0 : $this.wq_1, $this.xq_1, $this.pq_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.oq_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.yq_1;
      if (slotsGapOwner >= gapStart) {
        $this.yq_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.uq_1, group);
      var gapStart = $this.wq_1;
      var gapLen = $this.xq_1;
      if (gapLen < size) {
        var slots = $this.pq_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var tmp = 0;
        var tmp_0 = newCapacity;
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$2 = fillArrayVal(Array(tmp_0), null);
        var tmp_1 = tmp$ret$2;
        while (tmp < tmp_0) {
          var tmp_2 = tmp;
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.SlotWriter.insertSlots.<anonymous>' call
          tmp$ret$3 = null;
          tmp_1[tmp_2] = tmp$ret$3;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_1;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        tmp$ret$4 = newData;
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        tmp$ret$5 = newData;
        $this.pq_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.vq_1;
      if (currentDataEnd >= gapStart)
        $this.vq_1 = currentDataEnd + size | 0;
      $this.wq_1 = gapStart + size | 0;
      $this.xq_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.qq_1;
      moveGroupGapTo($this, start);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.h();
      if (tmp$ret$0)
        anchorsRemoved = removeAnchors($this, start, len);
      $this.rq_1 = start;
      var previousGapLen = $this.sq_1;
      var newGapLen = previousGapLen + len | 0;
      $this.sq_1 = newGapLen;
      var slotsGapOwner = $this.yq_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp$ret$1 = Math.max(start, tmp0_max);
        tmp_0.yq_1 = tmp$ret$1;
      }
      if ($this.tq_1 >= $this.rq_1) {
        var tmp0_this = $this;
        tmp0_this.tq_1 = tmp0_this.tq_1 - len | 0;
      }
      if (containsGroupMark($this, $this.fr_1)) {
        updateContainsMark($this, $this.fr_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.xq_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.wq_1 = start;
      $this.xq_1 = gapLen + len | 0;
      fill_0($this.pq_1, null, start, start + len | 0);
      var currentDataEnd = $this.vq_1;
      if (currentDataEnd >= start)
        $this.vq_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = address < $this.oq_1.length ? isNode($this.oq_1, address) : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.pq_1[dataIndexToDataAddress($this, nodeIndex($this.oq_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.sq_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.qq_1, previousGapStart, size);
      $l$loop_0: while (index < $this.qq_1.f()) {
        var anchor = $this.qq_1.g(index);
        var location = anchor.i10_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.i10_1 = size + location | 0;
            var tmp0 = index;
            index = tmp0 + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.qq_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.qq_1.f()) {
        var anchor_0 = $this.qq_1.g(index_0);
        var location_0 = anchor_0.i10_1;
        if (location_0 >= 0) {
          anchor_0.i10_1 = -(size - location_0 | 0) | 0;
          var tmp1 = index_0;
          index_0 = tmp1 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.sq_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.qq_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    tmp$ret$0 = tmp0_let >= $this.qq_1.f() ? tmp0_let - 1 | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    var index = tmp$ret$1;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.qq_1.g(index);
      var location = $this.iz(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.i10_1 = IntCompanionObject_getInstance().MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        var tmp0 = index;
        index = tmp0 - 1 | 0;
      } else
        break $l$loop;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp1_also = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (tmp1_also) {
      $this.qq_1.s6(removeAnchorStart, removeAnchorEnd).d6();
    }
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.f();
    var index = locationOf($this.qq_1, originalLocation, groupsSize);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var removedAnchors = tmp$ret$0;
    if (index >= 0) {
      $l$loop: while (index < $this.qq_1.f()) {
        var anchor = $this.qq_1.g(index);
        var location = $this.iz(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.qq_1.z2(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.g(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.iz(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.rq_1) {
          item.i10_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.i10_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.qq_1, newAnchorIndex, groupsSize);
        $this.qq_1.q6(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.oq_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.rq_1 ? index : index + $this.sq_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.wq_1 ? dataIndex : dataIndex + $this.xq_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.oq_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.pq_1.length - $this.xq_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.xq_1, $this.pq_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.pq_1.length - $this.xq_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.xq_1, $this.pq_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.wq_1, $this.xq_1, $this.pq_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.f() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.f() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.f1c_1 = $end;
    this.g1c_1 = this$0;
    this.e1c_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).d = function () {
    return this.e1c_1 < this.f1c_1;
  };
  protoOf(SlotWriter$groupSlots$1).e = function () {
    var tmp;
    if (this.d()) {
      var tmp_0 = this.g1c_1.pq_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.e1c_1;
      tmp0_this.e1c_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.g1c_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    Companion_getInstance_4();
    this.nq_1 = table;
    this.oq_1 = this.nq_1.qu_1;
    this.pq_1 = this.nq_1.su_1;
    this.qq_1 = this.nq_1.xu_1;
    this.rq_1 = this.nq_1.ru_1;
    this.sq_1 = (this.oq_1.length / 5 | 0) - this.nq_1.ru_1 | 0;
    this.tq_1 = this.nq_1.ru_1;
    this.uq_1 = 0;
    this.vq_1 = 0;
    this.wq_1 = this.nq_1.tu_1;
    this.xq_1 = this.pq_1.length - this.nq_1.tu_1 | 0;
    this.yq_1 = this.nq_1.ru_1;
    this.zq_1 = 0;
    this.ar_1 = 0;
    this.br_1 = new IntStack();
    this.cr_1 = new IntStack();
    this.dr_1 = new IntStack();
    this.er_1 = 0;
    this.fr_1 = -1;
    this.gr_1 = false;
    this.hr_1 = null;
  }
  protoOf(SlotWriter).p10 = function () {
    return this.er_1 < this.tq_1 ? isNode(this.oq_1, groupIndexToAddress(this, this.er_1)) : false;
  };
  protoOf(SlotWriter).oy = function (index) {
    return isNode(this.oq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).py = function (index) {
    return nodeCount(this.oq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).fw = function (index) {
    return key(this.oq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).ew = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.oq_1, address) ? this.pq_1[objectKeyIndex(this.oq_1, address)] : null;
  };
  protoOf(SlotWriter).wx = function (index) {
    return groupSize(this.oq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).dw = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.oq_1, address) ? this.pq_1[auxIndex(this.oq_1, this, address)] : Companion_getInstance_1().rw_1;
  };
  protoOf(SlotWriter).n10 = function (index) {
    return (index > this.fr_1 ? index < this.tq_1 : false) ? true : this.fr_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).q10 = function (index) {
    return this.o10(index, this.er_1);
  };
  protoOf(SlotWriter).o10 = function (index, group) {
    var tmp;
    if (group === this.fr_1) {
      tmp = this.tq_1;
    } else if (group > this.br_1.xz(0)) {
      tmp = group + this.wx(group) | 0;
    } else {
      var openIndex = this.br_1.h1c(group);
      tmp = openIndex < 0 ? group + this.wx(group) | 0 : (_get_capacity__a9k9f3(this) - this.sq_1 | 0) - this.cr_1.ny(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).qz = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.oq_1, address) ? this.pq_1[dataIndexToDataAddress(this, nodeIndex(this.oq_1, this, address))] : null;
  };
  protoOf(SlotWriter).e11 = function (anchor) {
    return this.qz(anchor.i1c(this));
  };
  protoOf(SlotWriter).gw = function (index) {
    return parent(this.oq_1, this, index);
  };
  protoOf(SlotWriter).wv = function () {
    this.gr_1 = true;
    if (this.br_1.h()) {
      moveGroupGapTo(this, this.f());
      moveSlotGapTo(this, this.pq_1.length - this.xq_1 | 0, this.rq_1);
      recalculateMarks(this);
    }
    this.nq_1.j1c(this, this.oq_1, this.rq_1, this.pq_1, this.wq_1, this.qq_1);
  };
  protoOf(SlotWriter).e14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.zq_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      tmp$ret$0 = 'Cannot reset when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.er_1 = 0;
    this.tq_1 = _get_capacity__a9k9f3(this) - this.sq_1 | 0;
    this.uq_1 = 0;
    this.vq_1 = 0;
    this.ar_1 = 0;
  };
  protoOf(SlotWriter).tz = function (value) {
    var result = this.k1c();
    this.l1c(value);
    return result;
  };
  protoOf(SlotWriter).j11 = function (value) {
    var address = groupIndexToAddress(this, this.er_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = hasAux(this.oq_1, address);
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.pq_1[dataIndexToDataAddress(this, auxIndex(this.oq_1, this, address))] = value;
  };
  protoOf(SlotWriter).d13 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.zq_1 >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$0 = 'Cannot insert auxiliary data when not inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.fr_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = !hasAux(this.oq_1, parentGroupAddress);
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$1 = 'Group already has auxiliary data';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.oq_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.uq_1 > auxIndex_0) {
      var slotsToMove = this.uq_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      var tmp2_check = slotsToMove < 3;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_check) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        tmp$ret$2 = 'Moving more than two slot not supported';
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.pq_1[auxAddress + 2 | 0] = this.pq_1[auxAddress + 1 | 0];
      }
      this.pq_1[auxAddress + 1 | 0] = this.pq_1[auxAddress];
    }
    addAux(this.oq_1, parentGroupAddress);
    this.pq_1[auxAddress] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.uq_1;
    tmp0_this.uq_1 = tmp1 + 1 | 0;
  };
  protoOf(SlotWriter).a1c = function (value) {
    return updateNodeOfGroup(this, this.er_1, value);
  };
  protoOf(SlotWriter).d11 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.i1c(this), value);
  };
  protoOf(SlotWriter).l1c = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.uq_1 <= this.vq_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Writing to an invalid slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.pq_1[dataIndexToDataAddress(this, this.uq_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).g11 = function (index, value) {
    var address = groupIndexToAddress(this, this.er_1);
    var slotsStart = slotIndex(this.oq_1, this, address);
    var slotsEnd = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, this.er_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + this.er_1;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.pq_1[slotAddress];
    this.pq_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).k1c = function () {
    if (this.zq_1 > 0) {
      insertSlots(this, 1, this.fr_1);
    }
    var tmp = this.pq_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.uq_1;
    tmp0_this.uq_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).p11 = function (anchor, index) {
    return this.m1c(this.iz(anchor), index);
  };
  protoOf(SlotWriter).m1c = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.oq_1, this, address);
    var slotsEnd = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().rw_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.pq_1[slotAddress];
  };
  protoOf(SlotWriter).r11 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = amount >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$0 = 'Cannot seek backwards';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = this.zq_1 <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$1 = 'Cannot call seek() while inserting';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_getInstance();
    var index = this.er_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp2_runtimeCheck = index >= this.fr_1 ? index <= this.tq_1 : false;
    if (!tmp2_runtimeCheck) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$2 = 'Cannot seek outside the current group (' + this.fr_1 + '-' + this.tq_1 + ')';
      var message_1 = tmp$ret$2;
      composeRuntimeError(toString(message_1));
    }
    this.er_1 = index;
    var newSlot = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, index));
    this.uq_1 = newSlot;
    this.vq_1 = newSlot;
  };
  protoOf(SlotWriter).mw = function () {
    var newGroup = this.tq_1;
    this.er_1 = newGroup;
    this.uq_1 = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).hx = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.zq_1;
    tmp0_this.zq_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).ey = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.zq_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end insert';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.zq_1 = tmp0_this.zq_1 - 1 | 0;
    if (tmp0_this.zq_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = this.dr_1.f() === this.br_1.f();
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).ow = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.zq_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      tmp$ret$0 = 'Key must be supplied when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().rw_1, false, Companion_getInstance_1().rw_1);
  };
  protoOf(SlotWriter).sw = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().rw_1);
  };
  protoOf(SlotWriter).uw = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_1().rw_1);
  };
  protoOf(SlotWriter).tw = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).dy = function () {
    var inserting = this.zq_1 > 0;
    var currentGroup = this.er_1;
    var currentGroupEnd = this.tq_1;
    var groupIndex = this.fr_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.ar_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.oq_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.oq_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.oq_1, groupAddress, newNodes);
      this.ar_1 = this.dr_1.tx() + (isNode_0 ? 1 : newNodes) | 0;
      this.fr_1 = parent(this.oq_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = currentGroup === currentGroupEnd;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        tmp$ret$0 = 'Expected to be at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.oq_1, groupAddress);
      var oldNodes = nodeCount(this.oq_1, groupAddress);
      updateGroupSize(this.oq_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.oq_1, groupAddress, newNodes);
      var newParent = this.br_1.tx();
      restoreCurrentGroupEnd(this);
      this.fr_1 = newParent;
      var groupParent = parent(this.oq_1, this, groupIndex);
      this.ar_1 = this.dr_1.tx();
      if (groupParent === newParent) {
        var tmp0_this = this;
        tmp0_this.ar_1 = tmp0_this.ar_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.oq_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.oq_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.oq_1, currentAddress, nodeCount(this.oq_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.oq_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.oq_1, this, current);
          }
        }
        var tmp1_this = this;
        tmp1_this.ar_1 = tmp1_this.ar_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).d14 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.zq_1 <= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.fr_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = index >= parent ? index < this.tq_1 : false;
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.er_1;
      var oldCurrentSlot = this.uq_1;
      var oldCurrentSlotEnd = this.vq_1;
      this.er_1 = index;
      this.ow();
      this.er_1 = oldCurrent;
      this.uq_1 = oldCurrentSlot;
      this.vq_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).u11 = function (anchor) {
    return this.d14(anchor.i1c(this));
  };
  protoOf(SlotWriter).cw = function () {
    var groupAddress = groupIndexToAddress(this, this.er_1);
    var newGroup = this.er_1 + groupSize(this.oq_1, groupAddress) | 0;
    this.er_1 = newGroup;
    this.uq_1 = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.oq_1, groupAddress) ? 1 : nodeCount(this.oq_1, groupAddress);
  };
  protoOf(SlotWriter).ns = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.zq_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot remove group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.er_1;
    var oldSlot = this.uq_1;
    var count = this.cw();
    var tmp0_safe_receiver = this.hr_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.rz() ? tmp0_safe_receiver.j12() >= oldGroup : false) {
        tmp0_safe_receiver.c1c();
      }
      tmp$ret$1 = Unit_getInstance();
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.er_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.uq_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.er_1 = oldGroup;
    this.uq_1 = oldSlot;
    var tmp1_this = this;
    tmp1_this.ar_1 = tmp1_this.ar_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).ir = function () {
    var start = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, this.er_1));
    var end = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, this.er_1 + this.wx(this.er_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).k11 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.zq_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot move a group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = offset >= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$1 = 'Parameter offset is out of bounds';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_getInstance();
    var current = this.er_1;
    var parent = this.fr_1;
    var parentEnd = this.tq_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.oq_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp2_runtimeCheck = groupToMove <= parentEnd;
      if (!tmp2_runtimeCheck) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        tmp$ret$2 = 'Parameter offset is out of bounds';
        var message_1 = tmp$ret$2;
        composeRuntimeError(toString(message_1));
      }
      var tmp0 = count;
      count = tmp0 - 1 | 0;
    }
    var moveLen = groupSize(this.oq_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.uq_1;
    var dataStart = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.oq_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.er_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.oq_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = imul(currentAddress, 5);
    var tmp5_copyInto = moveLocationOffset + imul(moveLen, 5) | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = groups;
    tmp$ret$5 = tmp$ret$4;
    var tmp = tmp$ret$5;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = groups;
    tmp$ret$7 = tmp$ret$6;
    arrayCopy(tmp, tmp$ret$7, tmp4_copyInto, moveLocationOffset, tmp5_copyInto);
    tmp$ret$8 = groups;
    if (moveDataLen > 0) {
      var slots = this.pq_1;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
      tmp$ret$9 = slots;
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.wq_1;
    var slotsGapLen = this.xq_1;
    var slotsCapacity = this.pq_1.length;
    var slotsGapOwner = this.yq_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp8_runtimeCheck = !anchorsRemoved;
    if (!tmp8_runtimeCheck) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$10 = 'Unexpectedly removed anchors';
      var message_2 = tmp$ret$10;
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.tq_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).uz = function (anchor, offset, writer) {
    runtimeCheck(writer.zq_1 > 0);
    runtimeCheck(this.zq_1 === 0);
    runtimeCheck(anchor.z14());
    var location = this.iz(anchor) + offset | 0;
    var currentGroup = this.er_1;
    runtimeCheck(currentGroup <= location ? location < this.tq_1 : false);
    var parent = this.gw(location);
    var size = this.wx(location);
    var nodes = this.oy(location) ? 1 : this.py(location);
    var result = moveGroup(Companion_getInstance_4(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.oq_1, currentAddress, groupSize(this.oq_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.oq_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.oq_1, currentAddress, nodeCount(this.oq_1, currentAddress) - nodes | 0);
        }
      }
      current = this.gw(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.ar_1 >= nodes);
      var tmp0_this = this;
      tmp0_this.ar_1 = tmp0_this.ar_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).t11 = function (table, index) {
    runtimeCheck(this.zq_1 > 0);
    if ((index === 0 ? this.er_1 === 0 : false) ? this.nq_1.ru_1 === 0 : false) {
      var myGroups = this.oq_1;
      var mySlots = this.pq_1;
      var myAnchors = this.qq_1;
      var groups = table.qu_1;
      var groupsSize = table.ru_1;
      var slots = table.su_1;
      var slotsSize = table.tu_1;
      this.oq_1 = groups;
      this.pq_1 = slots;
      this.qq_1 = table.xu_1;
      this.rq_1 = groupsSize;
      this.sq_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.wq_1 = slotsSize;
      this.xq_1 = slots.length - slotsSize | 0;
      this.yq_1 = groupsSize;
      table.n1c(myGroups, 0, mySlots, 0, myAnchors);
      return this.qq_1;
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.lw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_4(), tmp0_let, index, this, true, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.wv();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(SlotWriter).o11 = function (offset, table, index) {
    runtimeCheck(this.zq_1 <= 0 ? this.wx(this.er_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.er_1;
    var previousCurrentSlot = this.uq_1;
    var previousCurrentSlotEnd = this.vq_1;
    this.r11(offset);
    this.ow();
    this.hx();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.lw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_4(), tmp0_let, index, this, false, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.wv();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var anchors = tmp$ret$3;
    this.ey();
    this.dy();
    this.er_1 = previousCurrentGroup;
    this.uq_1 = previousCurrentSlot;
    this.vq_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).ix = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.qq_1;
    var tmp1_getOrAdd = this.f();
    var location = search$accessor$3b1dzq(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index <= this.rq_1 ? index : -(this.f() - index | 0) | 0);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.q6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.g(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  protoOf(SlotWriter).o1c = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.oq_1, groupAddress)) {
      updateMark(this.oq_1, groupAddress, true);
      if (!containsMark(this.oq_1, groupAddress)) {
        updateContainsMark(this, this.gw(group));
      }
    }
  };
  protoOf(SlotWriter).wy = function (group, $super) {
    group = group === VOID ? this.fr_1 : group;
    var tmp;
    if ($super === VOID) {
      this.o1c(group);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.o1c.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).iz = function (anchor) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.i10_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? this.f() + tmp0_let | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.er_1 + ' end=' + this.tq_1 + ' size = ' + this.f() + ' ' + ('gap=' + this.rq_1 + '-' + (this.rq_1 + this.sq_1 | 0) + ')');
  };
  protoOf(SlotWriter).f = function () {
    return _get_capacity__a9k9f3(this) - this.sq_1 | 0;
  };
  function SlotTable() {
    this.qu_1 = new Int32Array(0);
    this.ru_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.slots.<anonymous>' call
      tmp$ret$1 = null;
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.su_1 = tmp_2;
    this.tu_1 = 0;
    this.uu_1 = 0;
    this.vu_1 = false;
    this.wu_1 = 0;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_4.xu_1 = tmp$ret$2;
  }
  protoOf(SlotTable).ti = function () {
    return this.ru_1 === 0;
  };
  protoOf(SlotTable).yu = function () {
    if (this.vu_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.uu_1;
    tmp0_this.uu_1 = tmp1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).lw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.vu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = this.uu_1 <= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    this.vu_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.wu_1;
    tmp0_this.wu_1 = tmp1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).ix = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.vu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$0 = 'use active SlotWriter to create an anchor location instead ';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = 0 <= index ? index < this.ru_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$1 = 'Parameter index is out of range';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp2_getOrAdd = this.xu_1;
    var tmp3_getOrAdd = this.ru_1;
    var location = search$accessor$3b1dzq(tmp2_getOrAdd, index, tmp3_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$2 = new Anchor(index);
      var anchor = tmp$ret$2;
      tmp2_getOrAdd.q6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp2_getOrAdd.g(location);
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  };
  protoOf(SlotTable).iz = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.vu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = anchor.z14();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$1 = 'Anchor refers to a group that was removed';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.i10_1;
  };
  protoOf(SlotTable).f16 = function (anchor) {
    var tmp;
    if (anchor.z14()) {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$3b1dzq(this.xu_1, anchor.i10_1, this.ru_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp$ret$0 = tmp0_let >= 0 ? equals(this.xu_1.g(tmp0_let), anchor) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).c15 = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.vu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$0 = 'Writer is active';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = 0 <= groupIndex ? groupIndex < this.ru_1 : false;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$1 = 'Invalid group index';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.f16(anchor)) {
      var containsUpper = groupIndex + groupSize(this.qu_1, groupIndex) | 0;
      var containsArg = anchor.i10_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).p1c = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = reader.kv_1 === this ? this.uu_1 > 0 : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected reader close()';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.uu_1;
    tmp0_this.uu_1 = tmp1 - 1 | 0;
  };
  protoOf(SlotTable).j1c = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    var tmp0_require = writer.nq_1 === this ? this.vu_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected writer close()';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.vu_1 = false;
    this.n1c(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).n1c = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.qu_1 = groups;
    this.ru_1 = groupsSize;
    this.su_1 = slots;
    this.tu_1 = slotsSize;
    this.xu_1 = anchors;
  };
  protoOf(SlotTable).wz = function () {
    return this.ru_1 > 0 ? containsMark(this.qu_1, 0) : false;
  };
  protoOf(SlotTable).c = function () {
    return new GroupIterator(this, 0, this.ru_1);
  };
  function Anchor(loc) {
    this.i10_1 = loc;
  }
  protoOf(Anchor).z14 = function () {
    return !(this.i10_1 === IntCompanionObject_getInstance().MIN_VALUE);
  };
  protoOf(Anchor).s11 = function (slots) {
    return slots.iz(this);
  };
  protoOf(Anchor).i1c = function (writer) {
    return writer.iz(this);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 30) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = list;
    }
    list = tmp;
    this.b1c_1 = list;
  }
  protoOf(PrioritySet).d1c = function (value) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.b1c_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = this.b1c_1.g(0) === value ? true : this.b1c_1.g(this.b1c_1.f() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.b1c_1.f();
    this.b1c_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.b1c_1.g(parent);
      if (value > parentValue) {
        this.b1c_1.z5(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.b1c_1.z5(index, value);
  };
  protoOf(PrioritySet).rz = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.b1c_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    return tmp$ret$0;
  };
  protoOf(PrioritySet).j12 = function () {
    return first(this.b1c_1);
  };
  protoOf(PrioritySet).c1c = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.b1c_1.f() > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      tmp$ret$0 = 'Set is empty';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var value = this.b1c_1.g(0);
    $l$loop: while (true) {
      var tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.b1c_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      if (tmp$ret$1) {
        tmp = this.b1c_1.g(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.b1c_1.z5(0, last(this.b1c_1));
      this.b1c_1.z2(this.b1c_1.f() - 1 | 0);
      var index = 0;
      var size = this.b1c_1.f();
      var max = this.b1c_1.f() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.b1c_1.g(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.b1c_1.g(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.b1c_1.g(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.b1c_1.z5(index, rightValue);
              this.b1c_1.z5(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.b1c_1.z5(index, leftValue);
          this.b1c_1.z5(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = search$accessor$3b1dzq(_this__u8e3s4, index, effectiveSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    tmp$ret$0 = tmp0_let >= 0 ? tmp0_let : -(tmp0_let + 1 | 0) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 28) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function countOneBits_0(value) {
    var tmp0_subject = value;
    switch (tmp0_subject) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.nv_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().rw_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.nv_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().rw_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.nv_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.kv_1 = table;
    this.lv_1 = this.kv_1.qu_1;
    this.mv_1 = this.kv_1.ru_1;
    this.nv_1 = this.kv_1.su_1;
    this.ov_1 = this.kv_1.tu_1;
    this.pv_1 = false;
    this.qv_1 = 0;
    this.rv_1 = this.mv_1;
    this.sv_1 = -1;
    this.tv_1 = 0;
    this.uv_1 = 0;
    this.vv_1 = 0;
  }
  protoOf(SlotReader).f = function () {
    return this.mv_1;
  };
  protoOf(SlotReader).gw = function (index) {
    return parentAnchor(this.lv_1, index);
  };
  protoOf(SlotReader).p10 = function () {
    return isNode(this.lv_1, this.qv_1);
  };
  protoOf(SlotReader).oy = function (index) {
    return isNode(this.lv_1, index);
  };
  protoOf(SlotReader).py = function (index) {
    return nodeCount(this.lv_1, index);
  };
  protoOf(SlotReader).qz = function (index) {
    return isNode(this.lv_1, index) ? node(this.lv_1, this, index) : null;
  };
  protoOf(SlotReader).ay = function () {
    return this.fy() ? true : this.qv_1 === this.rv_1;
  };
  protoOf(SlotReader).fy = function () {
    return this.tv_1 > 0;
  };
  protoOf(SlotReader).sz = function () {
    return groupSize(this.lv_1, this.qv_1);
  };
  protoOf(SlotReader).wx = function (index) {
    return groupSize(this.lv_1, index);
  };
  protoOf(SlotReader).zx = function () {
    return this.rv_1;
  };
  protoOf(SlotReader).dx = function () {
    var tmp;
    if (this.qv_1 < this.rv_1) {
      tmp = key(this.lv_1, this.qv_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).fw = function (index) {
    return key(this.lv_1, index);
  };
  protoOf(SlotReader).q12 = function () {
    return this.uv_1 - slotAnchor(this.lv_1, this.sv_1) | 0;
  };
  protoOf(SlotReader).qy = function (index) {
    return hasObjectKey(this.lv_1, index);
  };
  protoOf(SlotReader).fx = function () {
    return this.qv_1 < this.rv_1 ? objectKey(this.lv_1, this, this.qv_1) : null;
  };
  protoOf(SlotReader).ew = function (index) {
    return objectKey(this.lv_1, this, index);
  };
  protoOf(SlotReader).nw = function () {
    return this.qv_1 < this.rv_1 ? aux(this.lv_1, this, this.qv_1) : 0;
  };
  protoOf(SlotReader).dw = function (index) {
    return aux(this.lv_1, this, index);
  };
  protoOf(SlotReader).c11 = function (index) {
    return hasMark(this.lv_1, index);
  };
  protoOf(SlotReader).r10 = function (index) {
    return containsMark(this.lv_1, index);
  };
  protoOf(SlotReader).ry = function () {
    return this.sv_1 >= 0 ? nodeCount(this.lv_1, this.sv_1) : 0;
  };
  protoOf(SlotReader).s12 = function (index) {
    return this.s10(this.qv_1, index);
  };
  protoOf(SlotReader).s10 = function (group, index) {
    var start = slotAnchor(this.lv_1, group);
    var next = group + 1 | 0;
    var end = next < this.mv_1 ? dataAnchor(this.lv_1, next) : this.ov_1;
    var address = start + index | 0;
    return address < end ? this.nv_1[address] : Companion_getInstance_1().rw_1;
  };
  protoOf(SlotReader).e = function () {
    if (this.tv_1 > 0 ? true : this.uv_1 >= this.vv_1)
      return Companion_getInstance_1().rw_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.uv_1;
    tmp0_this.uv_1 = tmp1 + 1 | 0;
    return this.nv_1[tmp1];
  };
  protoOf(SlotReader).qw = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.tv_1;
    tmp0_this.tv_1 = tmp1 + 1 | 0;
  };
  protoOf(SlotReader).cy = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.tv_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end empty';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.tv_1;
    tmp0_this.tv_1 = tmp1 - 1 | 0;
  };
  protoOf(SlotReader).wv = function () {
    this.pv_1 = true;
    this.kv_1.p1c(this);
  };
  protoOf(SlotReader).ow = function () {
    if (this.tv_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = parentAnchor(this.lv_1, this.qv_1) === this.sv_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        tmp$ret$0 = 'Invalid slot table detected';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.sv_1 = this.qv_1;
      this.rv_1 = this.qv_1 + groupSize(this.lv_1, this.qv_1) | 0;
      var tmp0_this = this;
      var tmp1 = tmp0_this.qv_1;
      tmp0_this.qv_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.uv_1 = slotAnchor(this.lv_1, current);
      this.vv_1 = current >= (this.mv_1 - 1 | 0) ? this.ov_1 : dataAnchor(this.lv_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).pw = function () {
    if (this.tv_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = isNode(this.lv_1, this.qv_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        tmp$ret$0 = 'Expected a node group';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.ow();
    }
  };
  protoOf(SlotReader).cw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.tv_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot skip while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.lv_1, this.qv_1) ? 1 : nodeCount(this.lv_1, this.qv_1);
    var tmp0_this = this;
    tmp0_this.qv_1 = tmp0_this.qv_1 + groupSize(this.lv_1, this.qv_1) | 0;
    return count;
  };
  protoOf(SlotReader).mw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.tv_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.qv_1 = this.rv_1;
  };
  protoOf(SlotReader).rx = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.tv_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      tmp$ret$0 = 'Cannot reposition while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.qv_1 = index;
    var parent = index < this.mv_1 ? parentAnchor(this.lv_1, index) : -1;
    this.sv_1 = parent;
    if (parent < 0)
      this.rv_1 = this.mv_1;
    else
      this.rv_1 = parent + groupSize(this.lv_1, parent) | 0;
    this.uv_1 = 0;
    this.vv_1 = 0;
  };
  protoOf(SlotReader).ly = function (index) {
    var newCurrentEnd = index + groupSize(this.lv_1, index) | 0;
    var current = this.qv_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = current >= index ? current <= newCurrentEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.sv_1 = index;
    this.rv_1 = newCurrentEnd;
    this.uv_1 = 0;
    this.vv_1 = 0;
  };
  protoOf(SlotReader).by = function () {
    if (this.tv_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = this.qv_1 === this.rv_1;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        tmp$ret$0 = 'endGroup() not called at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.lv_1, this.sv_1);
      this.sv_1 = parent;
      this.rv_1 = parent < 0 ? this.mv_1 : parent + groupSize(this.lv_1, parent) | 0;
    }
  };
  protoOf(SlotReader).ex = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    if (this.tv_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.qv_1;
    while (childIndex < this.rv_1) {
      var tmp = key(this.lv_1, childIndex);
      var tmp_0 = objectKey(this.lv_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.lv_1, childIndex) ? 1 : nodeCount(this.lv_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.lv_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.qv_1 + ', key=' + this.dx() + ', ' + ('parent=' + this.sv_1 + ', end=' + this.rv_1 + ')');
  };
  protoOf(SlotReader).ix = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.kv_1.xu_1;
    var tmp1_getOrAdd = this.mv_1;
    var location = search$accessor$3b1dzq(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.q6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.g(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.g(mid).i10_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      tmp$ret$0 = tmp0_let < 0 ? effectiveSize + tmp0_let | 0 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      var midVal = tmp$ret$1;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 29) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function validateRead($this) {
    if (!($this.q1c_1.wu_1 === $this.t1c_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.q1c_1 = table;
    this.r1c_1 = end;
    this.s1c_1 = start;
    this.t1c_1 = this.q1c_1.wu_1;
    if (this.q1c_1.vu_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).d = function () {
    return this.s1c_1 < this.r1c_1;
  };
  protoOf(GroupIterator).e = function () {
    validateRead(this);
    var group = this.s1c_1;
    var tmp0_this = this;
    tmp0_this.s1c_1 = tmp0_this.s1c_1 + groupSize(this.q1c_1.qu_1, group) | 0;
    return new SlotTableGroup(this.q1c_1, group, this.t1c_1);
  };
  function validateRead_0($this) {
    if (!($this.u1c_1.wu_1 === $this.w1c_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.wu_1 : version;
    this.u1c_1 = table;
    this.v1c_1 = group;
    this.w1c_1 = version;
  }
  protoOf(SlotTableGroup).c = function () {
    validateRead_0(this);
    return new GroupIterator(this.u1c_1, this.v1c_1 + 1 | 0, this.v1c_1 + groupSize(this.u1c_1.qu_1, this.v1c_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.jx_1 = key;
    this.kx_1 = objectKey;
    this.lx_1 = location;
    this.mx_1 = nodes;
    this.nx_1 = index;
  }
  function search$accessor$3b1dzq(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
    StructuralEqualityPolicy_instance = this;
  }
  protoOf(StructuralEqualityPolicy).y1c = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).y17 = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.y1c(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    if (StructuralEqualityPolicy_instance == null)
      new StructuralEqualityPolicy();
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.c1d_1 = myValue;
  }
  protoOf(StateStateRecord).d1d = function (value) {
    var tmp = this;
    tmp.c1d_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).c1d_1;
  };
  protoOf(StateStateRecord).e1d = function () {
    return new StateStateRecord(this.c1d_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.f1d_1 = policy;
    this.g1d_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).c17 = function () {
    return this.f1d_1;
  };
  protoOf(SnapshotMutableStateImpl).hn = function (value) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.g1d_1;
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp;
    if (!this.c17().y17(tmp1__anonymous__uwfjfc.c1d_1, value)) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp2_overwritable = this.g1d_1;
      var snapshot = get_snapshotInitializer();
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_9().gp();
      var tmp3__anonymous__ufb84q = overwritableRecord(tmp2_overwritable, this, snapshot, tmp1__anonymous__uwfjfc);
      tmp3__anonymous__ufb84q.c1d_1 = value;
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_also = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$4 = tmp1_also;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    tmp$ret$6 = tmp;
    return tmp$ret$6;
  };
  protoOf(SnapshotMutableStateImpl).o1 = function () {
    return readable_0(this.g1d_1, this).c1d_1;
  };
  protoOf(SnapshotMutableStateImpl).h1d = function () {
    return this.g1d_1;
  };
  protoOf(SnapshotMutableStateImpl).i1d = function (value) {
    var tmp = this;
    tmp.g1d_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).j1d = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.c17().y17(currentRecord.c1d_1, appliedRecord.c1d_1)) {
      tmp = current;
    } else {
      var merged = this.c17().x1c(previousRecord.c1d_1, currentRecord.c1d_1, appliedRecord.c1d_1);
      var tmp_0;
      if (!(merged == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.e1d();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).c1d_1 = merged;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.g1d_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = 'MutableState(value=' + tmp1__anonymous__uwfjfc.c1d_1 + ')@' + hashCode(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.d17_1 = new AtomicReference(get_emptyThreadMap());
    this.e17_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).aj = function () {
    var tmp = this.d17_1.aj().n1d(getCurrentThreadId());
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).f17 = function (value) {
    var key = getCurrentThreadId();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.e17_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var current = this.d17_1.aj();
    if (current.o1d(key, value))
      return Unit_getInstance();
    this.d17_1.b15(current.p1d(key, value));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  function IntStack() {
    this.cv_1 = new Int32Array(10);
    this.dv_1 = 0;
  }
  protoOf(IntStack).f = function () {
    return this.dv_1;
  };
  protoOf(IntStack).ev = function (value) {
    if (this.dv_1 >= this.cv_1.length) {
      this.cv_1 = copyOf(this.cv_1, imul(this.cv_1.length, 2));
    }
    var tmp = this.cv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.dv_1;
    tmp0_this.dv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).tx = function () {
    var tmp = this.cv_1;
    var tmp0_this = this;
    tmp0_this.dv_1 = tmp0_this.dv_1 - 1 | 0;
    return tmp[tmp0_this.dv_1];
  };
  protoOf(IntStack).xz = function (default_0) {
    return this.dv_1 > 0 ? this.j12() : default_0;
  };
  protoOf(IntStack).j12 = function () {
    return this.cv_1[this.dv_1 - 1 | 0];
  };
  protoOf(IntStack).ny = function (index) {
    return this.cv_1[index];
  };
  protoOf(IntStack).h = function () {
    return this.dv_1 === 0;
  };
  protoOf(IntStack).d6 = function () {
    this.dv_1 = 0;
  };
  protoOf(IntStack).h1c = function (value) {
    var inductionVariable = 0;
    var last = this.dv_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.cv_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.xv_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).f = function () {
    return this.xv_1.f();
  };
  protoOf(Stack).sx = function (value) {
    return this.xv_1.a(value);
  };
  protoOf(Stack).tx = function () {
    return this.xv_1.z2(this.f() - 1 | 0);
  };
  protoOf(Stack).j12 = function () {
    return this.xv_1.g(this.f() - 1 | 0);
  };
  protoOf(Stack).ny = function (index) {
    return this.xv_1.g(index);
  };
  protoOf(Stack).h = function () {
    return this.xv_1.h();
  };
  protoOf(Stack).rz = function () {
    return !this.h();
  };
  protoOf(Stack).d6 = function () {
    return this.xv_1.d6();
  };
  protoOf(Stack).j7 = function () {
    var tmp = 0;
    var tmp_0 = this.xv_1.f();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Stack.toArray.<anonymous>' call
      tmp$ret$1 = this.xv_1.g(tmp_2);
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = current$factory();
    tmp$ret$0 = $this.kw_1.o1();
    return tmp$ret$0;
  }
  function LazyValueHolder(valueProducer) {
    this.kw_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).o1 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.q1d_1 = value;
  }
  protoOf(StaticValueHolder).o1 = function () {
    return this.q1d_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.q1d_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.q1d_1 == null ? 0 : hashCode(this.q1d_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.q1d_1, tmp0_other_with_cast.q1d_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.t17_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.u17_1[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.u17_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.t17_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.u17_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.t17_1 + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.t17_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(4), null);
    tmp.u17_1 = tmp$ret$0;
    this.v17_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).x17 = function (key, value) {
    var index;
    if (this.t17_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = this.v17_1[index];
        this.v17_1[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.t17_1 === this.u17_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.u17_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newKeys = tmp$ret$0;
      var newValues = new Int32Array(imul(this.u17_1.length, 2));
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.u17_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.t17_1;
      arrayCopy(tmp1_copyInto, newKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newKeys;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.v17_1;
      var tmp5_copyInto = insertIndex + 1 | 0;
      var tmp6_copyInto = this.t17_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp4_copyInto;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = newValues;
      tmp$ret$5 = tmp$ret$4;
      arrayCopy(tmp, tmp$ret$5, tmp5_copyInto, insertIndex, tmp6_copyInto);
      tmp$ret$6 = newValues;
      var tmp$ret$7;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp7_copyInto = this.u17_1;
      arrayCopy(tmp7_copyInto, newKeys, 0, 0, insertIndex);
      tmp$ret$7 = newKeys;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = this.v17_1;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = tmp8_copyInto;
      tmp$ret$9 = tmp$ret$8;
      var tmp_0 = tmp$ret$9;
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = newValues;
      tmp$ret$11 = tmp$ret$10;
      arrayCopy(tmp_0, tmp$ret$11, 0, 0, insertIndex);
      tmp$ret$12 = newValues;
      this.u17_1 = newKeys;
      this.v17_1 = newValues;
    } else {
      var tmp$ret$13;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.u17_1;
      var tmp10_copyInto = this.u17_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      var tmp12_copyInto = this.t17_1;
      arrayCopy(tmp9_copyInto, tmp10_copyInto, tmp11_copyInto, insertIndex, tmp12_copyInto);
      tmp$ret$13 = tmp10_copyInto;
      var tmp$ret$18;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp13_copyInto = this.v17_1;
      var tmp14_copyInto = this.v17_1;
      var tmp15_copyInto = insertIndex + 1 | 0;
      var tmp16_copyInto = this.t17_1;
      var tmp$ret$15;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$14;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$14 = tmp13_copyInto;
      tmp$ret$15 = tmp$ret$14;
      var tmp_1 = tmp$ret$15;
      var tmp$ret$17;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$16 = tmp14_copyInto;
      tmp$ret$17 = tmp$ret$16;
      arrayCopy(tmp_1, tmp$ret$17, tmp15_copyInto, insertIndex, tmp16_copyInto);
      tmp$ret$18 = tmp14_copyInto;
    }
    this.u17_1[insertIndex] = key;
    this.v17_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.t17_1;
    tmp0_this.t17_1 = tmp1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.h10_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = $this.f10_1[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = $this.f10_1[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.h10_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = $this.f10_1[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.h10_1 + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    tmp.f10_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(capacity), null);
    tmp_0.g10_1 = tmp$ret$1;
    this.h10_1 = 0;
  }
  protoOf(IdentityArrayMap).rz = function () {
    return this.h10_1 > 0;
  };
  protoOf(IdentityArrayMap).o16 = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).n16 = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.g10_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).e15 = function (key, value) {
    var index = find_0(this, key);
    if (index >= 0) {
      this.g10_1[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = this.h10_1 === this.f10_1.length;
      var tmp;
      if (resize) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(this.h10_1, 2);
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = this.f10_1;
      }
      var destKeys = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.f10_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.h10_1;
      arrayCopy(tmp1_copyInto, destKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = destKeys;
      if (resize) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = this.f10_1;
        arrayCopy(tmp4_copyInto, destKeys, 0, 0, insertIndex);
        tmp$ret$2 = destKeys;
      }
      destKeys[insertIndex] = key;
      this.f10_1 = destKeys;
      var tmp_0;
      if (resize) {
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp5_arrayOfNulls = imul(this.h10_1, 2);
        tmp$ret$3 = fillArrayVal(Array(tmp5_arrayOfNulls), null);
        tmp_0 = tmp$ret$3;
      } else {
        tmp_0 = this.g10_1;
      }
      var destValues = tmp_0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.g10_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.h10_1;
      arrayCopy(tmp6_copyInto, destValues, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$4 = destValues;
      if (resize) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp9_copyInto = this.g10_1;
        arrayCopy(tmp9_copyInto, destValues, 0, 0, insertIndex);
        tmp$ret$5 = destValues;
      }
      destValues[insertIndex] = value;
      this.g10_1 = destValues;
      var tmp0_this = this;
      var tmp1 = tmp0_this.h10_1;
      tmp0_this.h10_1 = tmp1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).w17 = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.g10_1[index];
      var size = this.h10_1;
      var keys = this.f10_1;
      var values = this.g10_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      arrayCopy(keys, keys, index, tmp0_copyInto, size);
      tmp$ret$0 = keys;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(values, values, index, tmp1_copyInto, size);
      tmp$ret$1 = values;
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.h10_1 = newSize;
      return (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return null;
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.nz_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.g(mid);
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.oz_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.nz_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.oz_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.nz_1 + 1 | 0) | 0;
  }
  function checkIndexBounds($this, index) {
    if (!(0 <= index ? index < $this.nz_1 : false)) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ', size ' + $this.nz_1);
    }
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.s1d_1 = this$0;
    this.r1d_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).d = function () {
    return this.r1d_1 < this.s1d_1.nz_1;
  };
  protoOf(IdentityArraySet$iterator$1).e = function () {
    var tmp = this.s1d_1.oz_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.r1d_1;
    tmp0_this.r1d_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet() {
    this.nz_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.oz_1 = tmp$ret$0;
  }
  protoOf(IdentityArraySet).f = function () {
    return this.nz_1;
  };
  protoOf(IdentityArraySet).j2 = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).i = function (element) {
    if (!isObject(element))
      return false;
    return this.j2(isObject(element) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).g = function (index) {
    checkIndexBounds(this, index);
    var tmp = this.oz_1[index];
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  protoOf(IdentityArraySet).c14 = function (value) {
    var index;
    if (this.nz_1 > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.nz_1 === this.oz_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.oz_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newSorted = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.oz_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.nz_1;
      arrayCopy(tmp1_copyInto, newSorted, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newSorted;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.oz_1;
      arrayCopy(tmp4_copyInto, newSorted, 0, 0, insertIndex);
      tmp$ret$2 = newSorted;
      this.oz_1 = newSorted;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = this.oz_1;
      var tmp6_copyInto = this.oz_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.nz_1;
      arrayCopy(tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$3 = tmp6_copyInto;
    }
    this.oz_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.nz_1;
    tmp0_this.nz_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).h = function () {
    return this.nz_1 === 0;
  };
  protoOf(IdentityArraySet).rz = function () {
    return this.nz_1 > 0;
  };
  protoOf(IdentityArraySet).t1d = function (value) {
    var index = find_1(this, value);
    if (index >= 0) {
      if (index < (this.nz_1 - 1 | 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.oz_1;
        var tmp1_copyInto = this.oz_1;
        var tmp2_copyInto = index + 1 | 0;
        var tmp3_copyInto = this.nz_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tmp3_copyInto);
        tmp$ret$0 = tmp1_copyInto;
      }
      var tmp0_this = this;
      var tmp1 = tmp0_this.nz_1;
      tmp0_this.nz_1 = tmp1 - 1 | 0;
      this.oz_1[this.nz_1] = null;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).k2 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        tmp$ret$1 = this.j2(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).u = function (elements) {
    return this.k2(elements);
  };
  protoOf(IdentityArraySet).c = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.l14_1[$this.j14_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var index;
    if ($this.m14_1 > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if ($this.m14_1 < $this.j14_1.length) {
      var valueIndex = $this.j14_1[$this.m14_1];
      $this.k14_1[valueIndex] = value;
      var tmp0_elvis_lhs = $this.l14_1[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        $this.l14_1[valueIndex] = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < $this.m14_1) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = $this.j14_1;
        var tmp2_copyInto = $this.j14_1;
        var tmp3_copyInto = insertIndex + 1 | 0;
        var tmp4_copyInto = $this.m14_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp1_copyInto;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = tmp2_copyInto;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, tmp3_copyInto, insertIndex, tmp4_copyInto);
        tmp$ret$5 = tmp2_copyInto;
      }
      $this.j14_1[insertIndex] = valueIndex;
      var tmp1_this = $this;
      var tmp2 = tmp1_this.m14_1;
      tmp1_this.m14_1 = tmp2 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul($this.j14_1.length, 2);
    var valueIndex_0 = $this.m14_1;
    $this.l14_1 = copyOf_0($this.l14_1, newSize);
    var scopeSet_0 = new IdentityArraySet();
    $this.l14_1[valueIndex_0] = scopeSet_0;
    $this.k14_1 = copyOf_0($this.k14_1, newSize);
    $this.k14_1[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = $this.m14_1 + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < $this.m14_1) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = $this.j14_1;
      var tmp6_copyInto = insertIndex + 1 | 0;
      var tmp7_copyInto = $this.m14_1;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp5_copyInto;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = newKeyOrder;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, tmp6_copyInto, insertIndex, tmp7_copyInto);
      tmp$ret$10 = newKeyOrder;
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      var tmp$ret$15;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = $this.j14_1;
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = tmp8_copyInto;
      tmp$ret$12 = tmp$ret$11;
      var tmp_2 = tmp$ret$12;
      var tmp$ret$14;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$13 = newKeyOrder;
      tmp$ret$14 = tmp$ret$13;
      arrayCopy(tmp_2, tmp$ret$14, 0, 0, insertIndex);
      tmp$ret$15 = newKeyOrder;
    }
    $this.j14_1 = newKeyOrder;
    var tmp4_this = $this;
    var tmp5 = tmp4_this.m14_1;
    tmp4_this.m14_1 = tmp5 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.m14_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
      tmp$ret$0 = ensureNotNull($this.k14_1[$this.j14_1[mid]]);
      var midValue = tmp$ret$0;
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$0 = ensureNotNull($this.k14_1[$this.j14_1[i]]);
        var v = tmp$ret$0;
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.m14_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$1 = ensureNotNull($this.k14_1[$this.j14_1[i_0]]);
        var v_0 = tmp$ret$1;
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.m14_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 50;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueOrder.<anonymous>' call
      tmp$ret$0 = tmp_3;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j14_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(50), null);
    tmp_4.k14_1 = tmp$ret$1;
    var tmp_5 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(50), null);
    tmp_5.l14_1 = tmp$ret$2;
    this.m14_1 = 0;
  }
  protoOf(IdentityScopeMap).p14 = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.c14(scope);
  };
  protoOf(IdentityScopeMap).n14 = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).j15 = function (value, scope) {
    var index = find_2(this, value);
    if (index >= 0) {
      var valueOrderIndex = this.j14_1[index];
      var tmp0_elvis_lhs = this.l14_1[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.t1d(scope);
      if (set.nz_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = this.m14_1;
        if (startIndex < endIndex) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp0_copyInto = this.j14_1;
          var tmp1_copyInto = this.j14_1;
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyInto;
          tmp$ret$1 = tmp$ret$0;
          var tmp_0 = tmp$ret$1;
          var tmp$ret$3;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$2;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$2 = tmp1_copyInto;
          tmp$ret$3 = tmp$ret$2;
          arrayCopy(tmp_0, tmp$ret$3, index, startIndex, endIndex);
          tmp$ret$4 = tmp1_copyInto;
        }
        this.j14_1[this.m14_1 - 1 | 0] = valueOrderIndex;
        this.k14_1[valueOrderIndex] = null;
        var tmp1_this = this;
        var tmp2 = tmp1_this.m14_1;
        tmp1_this.m14_1 = tmp2 - 1 | 0;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).s15 = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.m14_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = this.j14_1[i];
        var set = ensureNotNull(this.l14_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.t1d(scope);
        if (set.nz_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = this.j14_1[destinationIndex];
            this.j14_1[destinationIndex] = valueIndex;
            this.j14_1[i] = destinationKeyOrder;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.m14_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.k14_1[this.j14_1[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.m14_1 = destinationIndex;
  };
  function MutableVector(content, size) {
    this.g17_1 = content;
    this.h17_1 = null;
    this.i17_1 = size;
    this.j17_1 = 8;
  }
  protoOf(MutableVector).c14 = function (element) {
    this.u1d(this.i17_1 + 1 | 0);
    this.g17_1[this.i17_1] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.i17_1;
    tmp0_this.i17_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).u1d = function (capacity) {
    var oldContent = this.g17_1;
    if (oldContent.length < capacity) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      tmp$ret$0 = Math.max(capacity, tmp0_max);
      var newSize = tmp$ret$0;
      this.g17_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).z2 = function (index) {
    var content = this.g17_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.i17_1 - 1 | 0;
    if (!(index === tmp$ret$0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.i17_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
      tmp$ret$1 = content;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.i17_1;
    tmp0_this.i17_1 = tmp1 - 1 | 0;
    content[this.i17_1] = null;
    return item;
  };
  function PersistentMap() {
  }
  function persistentHashMapOf() {
    return Companion_getInstance_6().w1d();
  }
  function persistentSetOf() {
    return Companion_getInstance_8().y1d();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.z1d_1 = index;
    this.a1e_1 = size;
  }
  protoOf(AbstractListIterator).d = function () {
    return this.z1d_1 < this.a1e_1;
  };
  protoOf(AbstractListIterator).b1 = function () {
    return this.z1d_1 > 0;
  };
  protoOf(AbstractListIterator).c1 = function () {
    return this.z1d_1;
  };
  protoOf(AbstractListIterator).b1e = function () {
    if (!this.d())
      throw NoSuchElementException_init_$Create$();
  };
  protoOf(AbstractListIterator).c1e = function () {
    if (!this.b1())
      throw NoSuchElementException_init_$Create$();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).t = function (elements) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.hw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.t(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h7();
    return tmp$ret$1;
  };
  protoOf(AbstractPersistentList).a6 = function (element) {
    var index = this.j(element);
    if (!(index === -1)) {
      return this.z2(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).i = function (element) {
    return !(this.j(element) === -1);
  };
  protoOf(AbstractPersistentList).u = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        tmp$ret$1 = this.i(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).c = function () {
    return this.d1e();
  };
  protoOf(AbstractPersistentList).d1e = function () {
    return this.j1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.h1e_1 = buffer;
  }
  protoOf(BufferIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.z1d_1;
    tmp0_this.z1d_1 = tmp1 + 1 | 0;
    return this.h1e_1[tmp1];
  };
  protoOf(BufferIterator).d1 = function () {
    if (!this.b1()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.z1d_1 = tmp0_this.z1d_1 - 1 | 0;
    return this.h1e_1[tmp0_this.z1d_1];
  };
  function rootSize($this) {
    return rootSize_1($this.k1e_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.k1e_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.l1e_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.l1e_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.k1e_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.l1e_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.k1e_1 + 1 | 0, $this.l1e_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.k1e_1 - 1 | 0, shift);
    var tmp0_safe_receiver = root;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copyOf_0(tmp0_safe_receiver, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.k1e_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.j1e_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.j1e_1;
      var tmp1_copyInto = tailIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, tmp1_copyInto, tailIndex, tailSize);
      tmp$ret$0 = newTail;
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.k1e_1 + 1 | 0, $this.l1e_1);
    }
    var lastElement = $this.j1e_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.j1e_1;
    var tmp3_copyInto = tailIndex + 1 | 0;
    var tmp4_copyInto = tailSize - 1 | 0;
    arrayCopy(tmp2_copyInto, newTail, tmp3_copyInto, tailIndex, tmp4_copyInto);
    tmp$ret$1 = newTail;
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      elementCarry.m1e_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.m1e_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.k1e_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.j1e_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.j1e_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, index, tmp1_copyInto, tailSize);
      tmp$ret$0 = newTail;
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.m1e_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.m1e_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.m1e_1;
      tailCarry.m1e_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.j1e_1;
    }
    var buffer = $this.i1e_1;
    var shift = $this.l1e_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.i1e_1 = root;
    this.j1e_1 = tail;
    this.k1e_1 = size;
    this.l1e_1 = rootShift;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.k1e_1 > get_MAX_BUFFER_SIZE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      tmp$ret$0 = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.k1e_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.k1e_1 - rootSize_1(this.k1e_1) | 0) <= coerceAtMost(this.j1e_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).f = function () {
    return this.k1e_1;
  };
  protoOf(PersistentVector).a = function (element) {
    var tailSize = this.k1e_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.j1e_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.i1e_1, newTail, this.k1e_1 + 1 | 0, this.l1e_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.i1e_1, this.j1e_1, newTail_0);
  };
  protoOf(PersistentVector).e1e = function (index, element) {
    ListImplementation_getInstance().a1(index, this.k1e_1);
    if (index === this.k1e_1) {
      return this.a(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.i1e_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.i1e_1, this.l1e_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.m1e_1);
  };
  protoOf(PersistentVector).z2 = function (index) {
    ListImplementation_getInstance().e1(index, this.k1e_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.i1e_1, rootSize_0, this.l1e_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.i1e_1, this.l1e_1, index, new ObjectRef(this.j1e_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.l1e_1, 0);
  };
  protoOf(PersistentVector).hw = function () {
    return new PersistentVectorBuilder(this, this.i1e_1, this.j1e_1, this.l1e_1);
  };
  protoOf(PersistentVector).j1 = function (index) {
    ListImplementation_getInstance().a1(index, this.k1e_1);
    var tmp = this.j1e_1;
    return new PersistentVectorIterator(this.i1e_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.k1e_1, (this.l1e_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).g = function (index) {
    ListImplementation_getInstance().e1(index, this.k1e_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).z5 = function (index, element) {
    ListImplementation_getInstance().e1(index, this.k1e_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.j1e_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.i1e_1, newTail, this.k1e_1, this.l1e_1);
    }
    var newRoot = setInRoot(this, this.i1e_1, this.l1e_1, index, element);
    return new PersistentVector(newRoot, this.j1e_1, this.k1e_1, this.l1e_1);
  };
  function rootSize_0($this) {
    if ($this.v1e_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.v1e_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.v1e_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.s1e_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = mutableBuffer($this);
    var tmp1_copyInto = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, tmp0_copyInto, 0, 0, tmp1_copyInto);
    tmp$ret$0 = tmp0_copyInto;
    return tmp$ret$0;
  }
  function mutableBufferWith($this, element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.s1e_1;
    return buffer;
  }
  function mutableBuffer($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.s1e_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.v1e_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.r1e_1) {
      $this.t1e_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.r1e_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.u1e_1 = newTail;
      var tmp0_this = $this;
      tmp0_this.r1e_1 = tmp0_this.r1e_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      var tmp1_this = $this;
      tmp1_this.v1e_1 = tmp1_this.v1e_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.t1e_1 = filledTail;
      $this.u1e_1 = newTail;
      var tmp2_this = $this;
      tmp2_this.v1e_1 = tmp2_this.v1e_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.t1e_1 = pushTail_0($this, root, filledTail, $this.r1e_1);
      $this.u1e_1 = newTail;
      var tmp3_this = $this;
      tmp3_this.v1e_1 = tmp3_this.v1e_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.v1e_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.d() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.e();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.r1e_1 ? pushBuffers($this, root, rootSize, $this.r1e_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.d()) {
      var tmp0_this = $this;
      tmp0_this.r1e_1 = tmp0_this.r1e_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.r1e_1, $this.r1e_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffersIterator.d();
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
    // Inline function 'kotlin.check' call
    var tmp1_check = shift >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.e();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.d();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.u1e_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.u1e_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      tmp$ret$0 = mutableTail;
      mutableTail[index] = element;
      $this.t1e_1 = root;
      $this.u1e_1 = mutableTail;
      var tmp0_this = $this;
      tmp0_this.v1e_1 = tmp0_this.v1e_1 + 1 | 0;
    } else {
      var lastElement = $this.u1e_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.u1e_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      tmp$ret$1 = mutableTail;
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.m1e_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, tmp0_copyInto, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.m1e_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.u1e_1;
    }
    var buffer = ensureNotNull($this.t1e_1);
    var shift = $this.r1e_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.v1e_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.u1e_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.u1e_1[index];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.u1e_1;
      var tmp1_copyInto = makeMutable($this, $this.u1e_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      tmp$ret$0 = tmp1_copyInto;
      var mutableTail = tmp$ret$0;
      mutableTail[tailSize - 1 | 0] = null;
      $this.t1e_1 = root;
      $this.u1e_1 = mutableTail;
      $this.v1e_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.r1e_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.m1e_1;
      tailCarry.m1e_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.t1e_1 = null;
      var tmp = $this;
      var tmp0_elvis_lhs = root;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.emptyArray' call
        tmp$ret$0 = [];
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp.u1e_1 = tmp_0;
      $this.v1e_1 = rootSize;
      $this.r1e_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.m1e_1;
    tmp_1.u1e_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.v1e_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.t1e_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.r1e_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.t1e_1 = newRoot;
      $this.r1e_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.m1e_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        var tmp0_this = $this;
        var tmp1 = tmp0_this.h6_1;
        tmp0_this.h6_1 = tmp1 + 1 | 0;
      }
      oldElementCarry.m1e_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.o1e_1 = vector;
    this.p1e_1 = vectorRoot;
    this.q1e_1 = vectorTail;
    this.r1e_1 = rootShift;
    this.s1e_1 = new MutabilityOwnership();
    this.t1e_1 = this.p1e_1;
    this.u1e_1 = this.q1e_1;
    this.v1e_1 = this.o1e_1.f();
  }
  protoOf(PersistentVectorBuilder).f = function () {
    return this.v1e_1;
  };
  protoOf(PersistentVectorBuilder).w1e = function () {
    return this.h6_1;
  };
  protoOf(PersistentVectorBuilder).h7 = function () {
    var tmp = this;
    var tmp_0;
    if (this.t1e_1 === this.p1e_1 ? this.u1e_1 === this.q1e_1 : false) {
      tmp_0 = this.o1e_1;
    } else {
      this.s1e_1 = new MutabilityOwnership();
      this.p1e_1 = this.t1e_1;
      this.q1e_1 = this.u1e_1;
      var tmp_1;
      if (this.t1e_1 == null) {
        var tmp_2;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isEmpty' call
        var tmp0_isEmpty = this.u1e_1;
        tmp$ret$0 = tmp0_isEmpty.length === 0;
        if (tmp$ret$0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.u1e_1, this.v1e_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.t1e_1), this.u1e_1, this.v1e_1, this.r1e_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.o1e_1 = tmp_0;
    return this.o1e_1;
  };
  protoOf(PersistentVectorBuilder).a = function (element) {
    var tmp0_this = this;
    tmp0_this.h6_1 = tmp0_this.h6_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.u1e_1);
      mutableTail[tailSize] = element;
      this.u1e_1 = mutableTail;
      var tmp1_this = this;
      tmp1_this.v1e_1 = tmp1_this.v1e_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.t1e_1, this.u1e_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).t = function (elements) {
    if (elements.h()) {
      return false;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.h6_1;
    tmp0_this.h6_1 = tmp1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.c();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.f()) {
      this.u1e_1 = copyToBuffer(this, makeMutable(this, this.u1e_1), tailSize, elementsIterator);
      var tmp2_this = this;
      tmp2_this.v1e_1 = tmp2_this.v1e_1 + elements.f() | 0;
    } else {
      var buffersSize = ((elements.f() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(buffersSize), null);
      var buffers = tmp$ret$0;
      buffers[0] = copyToBuffer(this, makeMutable(this, this.u1e_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.t1e_1;
      var tmp_1 = rootSize_0(this);
      tmp.t1e_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.u1e_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      var tmp4_this = this;
      tmp4_this.v1e_1 = tmp4_this.v1e_1 + elements.f() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).q6 = function (index, element) {
    ListImplementation_getInstance().a1(index, this.v1e_1);
    if (index === this.v1e_1) {
      this.a(element);
      return Unit_getInstance();
    }
    var tmp0_this = this;
    tmp0_this.h6_1 = tmp0_this.h6_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.t1e_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.t1e_1), this.r1e_1, index, element, elementCarry);
    var tmp = elementCarry.m1e_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).g = function (index) {
    ListImplementation_getInstance().e1(index, this.v1e_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).z2 = function (index) {
    ListImplementation_getInstance().e1(index, this.v1e_1);
    var tmp0_this = this;
    tmp0_this.h6_1 = tmp0_this.h6_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.t1e_1, rootSize, this.r1e_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.u1e_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.t1e_1), this.r1e_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.r1e_1, 0);
    var tmp_0 = elementCarry.m1e_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).z5 = function (index, element) {
    ListImplementation_getInstance().e1(index, this.v1e_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.u1e_1);
      if (!(mutableTail === this.u1e_1)) {
        var tmp0_this = this;
        var tmp1 = tmp0_this.h6_1;
        tmp0_this.h6_1 = tmp1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.u1e_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.t1e_1 = setInRoot_0(this, ensureNotNull(this.t1e_1), this.r1e_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.m1e_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).c = function () {
    return this.d1e();
  };
  protoOf(PersistentVectorBuilder).d1e = function () {
    return this.j1(0);
  };
  protoOf(PersistentVectorBuilder).j1 = function (index) {
    ListImplementation_getInstance().a1(index, this.v1e_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.z1e_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.a1f_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).e = function () {
    this.b1e();
    if (this.a1f_1.d()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.z1d_1;
      tmp0_this.z1d_1 = tmp1 + 1 | 0;
      return this.a1f_1.e();
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.z1d_1;
    tmp2_this.z1d_1 = tmp3 + 1 | 0;
    return this.z1e_1[tmp3 - this.a1f_1.a1e_1 | 0];
  };
  protoOf(PersistentVectorIterator).d1 = function () {
    this.c1e();
    if (this.z1d_1 > this.a1f_1.a1e_1) {
      var tmp0_this = this;
      tmp0_this.z1d_1 = tmp0_this.z1d_1 - 1 | 0;
      return this.z1e_1[tmp0_this.z1d_1 - this.a1f_1.a1e_1 | 0];
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this.z1d_1;
    tmp1_this.z1d_1 = tmp2 - 1 | 0;
    return this.a1f_1.d1();
  };
  function reset($this) {
    $this.a1e_1 = $this.i1f_1.v1e_1;
    $this.j1f_1 = $this.i1f_1.w1e();
    $this.l1f_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.i1f_1.t1e_1;
    if (root == null) {
      $this.k1f_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.i1f_1.v1e_1);
    var trieIndex = coerceAtMost($this.z1d_1, trieSize);
    var trieHeight = ($this.i1f_1.r1e_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.k1f_1 == null) {
      $this.k1f_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.k1f_1).m1f(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.j1f_1 === $this.i1f_1.w1e()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.l1f_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.v1e_1);
    this.i1f_1 = builder;
    this.j1f_1 = this.i1f_1.w1e();
    this.k1f_1 = null;
    this.l1f_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).d1 = function () {
    checkForComodification(this);
    this.c1e();
    this.l1f_1 = this.z1d_1 - 1 | 0;
    var tmp1_elvis_lhs = this.k1f_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.i1f_1.u1e_1;
      var tmp0_this = this;
      tmp0_this.z1d_1 = tmp0_this.z1d_1 - 1 | 0;
      var tmp_1 = tmp_0[tmp0_this.z1d_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.z1d_1 > trieIterator.a1e_1) {
      var tmp_2 = this.i1f_1.u1e_1;
      var tmp2_this = this;
      tmp2_this.z1d_1 = tmp2_this.z1d_1 - 1 | 0;
      var tmp_3 = tmp_2[tmp2_this.z1d_1 - trieIterator.a1e_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    var tmp3_this = this;
    var tmp4 = tmp3_this.z1d_1;
    tmp3_this.z1d_1 = tmp4 - 1 | 0;
    return trieIterator.d1();
  };
  protoOf(PersistentVectorMutableIterator).e = function () {
    checkForComodification(this);
    this.b1e();
    this.l1f_1 = this.z1d_1;
    var tmp2_elvis_lhs = this.k1f_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.i1f_1.u1e_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.z1d_1;
      tmp0_this.z1d_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.d()) {
      var tmp3_this = this;
      var tmp4 = tmp3_this.z1d_1;
      tmp3_this.z1d_1 = tmp4 + 1 | 0;
      return trieIterator.e();
    }
    var tmp_2 = this.i1f_1.u1e_1;
    var tmp5_this = this;
    var tmp6 = tmp5_this.z1d_1;
    tmp5_this.z1d_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.a1e_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).a3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.i1f_1.z2(this.l1f_1);
    if (this.l1f_1 < this.z1d_1)
      this.z1d_1 = this.l1f_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.n1f_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_5();
    AbstractPersistentList.call(this);
    this.o1f_1 = buffer;
    assert(this.o1f_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).f = function () {
    return this.o1f_1.length;
  };
  protoOf(SmallPersistentVector).a = function (element) {
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.o1f_1, this.f() + 1 | 0);
      newBuffer[this.f()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.o1f_1, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).t = function (elements) {
    if ((this.f() + elements.f() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.o1f_1, this.f() + elements.f() | 0);
      var index = this.f();
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.hw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.t(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h7();
    return tmp$ret$1;
  };
  protoOf(SmallPersistentVector).e1e = function (index, element) {
    ListImplementation_getInstance().a1(index, this.f());
    if (index === this.f()) {
      return this.a(element);
    }
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.f() + 1 | 0);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.o1f_1;
      arrayCopy(tmp0_copyInto, newBuffer, 0, 0, index);
      tmp$ret$0 = newBuffer;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.o1f_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = this.f();
      arrayCopy(tmp1_copyInto, newBuffer, tmp2_copyInto, index, tmp3_copyInto);
      tmp$ret$1 = newBuffer;
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp4_copyOf = this.o1f_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp4_copyOf;
    tmp$ret$3 = tmp$ret$2.slice();
    var root = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.o1f_1;
    var tmp6_copyInto = index + 1 | 0;
    var tmp7_copyInto = this.f() - 1 | 0;
    arrayCopy(tmp5_copyInto, root, tmp6_copyInto, index, tmp7_copyInto);
    tmp$ret$4 = root;
    root[index] = element;
    var tail = presizedBufferWith(this.o1f_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).z2 = function (index) {
    ListImplementation_getInstance().e1(index, this.f());
    if (this.f() === 1) {
      return Companion_getInstance_5().n1f_1;
    }
    var newBuffer = copyOf_0(this.o1f_1, this.f() - 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.o1f_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.f();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).hw = function () {
    return new PersistentVectorBuilder(this, null, this.o1f_1, 0);
  };
  protoOf(SmallPersistentVector).j = function (element) {
    return indexOf(this.o1f_1, element);
  };
  protoOf(SmallPersistentVector).i1 = function (element) {
    return lastIndexOf(this.o1f_1, element);
  };
  protoOf(SmallPersistentVector).j1 = function (index) {
    ListImplementation_getInstance().a1(index, this.f());
    var tmp = this.o1f_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.f());
  };
  protoOf(SmallPersistentVector).g = function (index) {
    ListImplementation_getInstance().e1(index, this.f());
    var tmp = this.o1f_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).z5 = function (index, element) {
    ListImplementation_getInstance().e1(index, this.f());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.o1f_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.d1f_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.d1f_1) {
      var tmp = $this.e1f_1;
      var tmp_0 = i;
      var tmp_1 = $this.e1f_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.z1d_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.d1f_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.z1d_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.z1d_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.e1f_1[$this.d1f_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.d1f_1 = height;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.d1f_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.e1f_1 = tmp$ret$0;
    this.f1f_1 = index === size;
    this.e1f_1[0] = root;
    fillPath(this, index - (this.f1f_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).m1f = function (root, index, size, height) {
    this.z1d_1 = index;
    this.a1e_1 = size;
    this.d1f_1 = height;
    if (this.e1f_1.length < height) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(height), null);
      tmp.e1f_1 = tmp$ret$0;
    }
    this.e1f_1[0] = root;
    this.f1f_1 = index === size;
    fillPath(this, index - (this.f1f_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    var tmp0_this = this;
    tmp0_this.z1d_1 = tmp0_this.z1d_1 + 1 | 0;
    if (this.z1d_1 === this.a1e_1) {
      this.f1f_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).d1 = function () {
    if (!this.b1()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.z1d_1 = tmp0_this.z1d_1 - 1 | 0;
    if (this.f1f_1) {
      this.f1f_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_5().n1f_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = 32;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.m1e_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.v1d_1 = new PersistentHashMap(Companion_getInstance_7().p1f_1, 0);
  }
  protoOf(Companion_4).w1d = function () {
    var tmp = this.v1d_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_6();
    AbstractMap.call(this);
    this.s1f_1 = node;
    this.t1f_1 = size;
  }
  protoOf(PersistentHashMap).f = function () {
    return this.t1f_1;
  };
  protoOf(PersistentHashMap).a2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).m1 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).v1 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.s1f_1.y1f(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).z1 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.s1f_1.z1f(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).v2 = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.s1f_1.a1g(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.b1g_1, this.t1f_1 + newNodeResult.c1g_1 | 0);
  };
  protoOf(PersistentHashMap).c7 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.s1f_1.d1g(tmp$ret$0, key, 0);
    if (this.s1f_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().w1d();
    }
    return new PersistentHashMap(newNode, this.t1f_1 - 1 | 0);
  };
  protoOf(PersistentHashMap).hw = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.i1g_1 = map;
    this.j1g_1 = new MutabilityOwnership();
    this.k1g_1 = this.i1g_1.s1f_1;
    this.l1g_1 = null;
    this.m1g_1 = 0;
    this.n1g_1 = this.i1g_1.t1f_1;
  }
  protoOf(PersistentHashMapBuilder).o1g = function (value) {
    this.n1g_1 = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1g_1;
    tmp0_this.m1g_1 = tmp1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).f = function () {
    return this.n1g_1;
  };
  protoOf(PersistentHashMapBuilder).h7 = function () {
    var tmp = this;
    var tmp_0;
    if (this.k1g_1 === this.i1g_1.s1f_1) {
      tmp_0 = this.i1g_1;
    } else {
      this.j1g_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.k1g_1, this.n1g_1);
    }
    tmp.i1g_1 = tmp_0;
    return this.i1g_1;
  };
  protoOf(PersistentHashMapBuilder).m1 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).a2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).g7 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).v1 = function (key) {
    var tmp = this.k1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.y1f(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).z1 = function (key) {
    var tmp = this.k1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.z1f(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).v2 = function (key, value) {
    this.l1g_1 = null;
    var tmp = this;
    var tmp_0 = this.k1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.k1g_1 = tmp_0.p1g(tmp$ret$0, key, value, 0, this);
    return this.l1g_1;
  };
  protoOf(PersistentHashMapBuilder).q2 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h7();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.n1g_1;
      var tmp_0 = this;
      var tmp_1 = this.k1g_1;
      var tmp_2 = map.s1f_1;
      tmp_0.k1g_1 = tmp_1.q1g(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.t1f_1 | 0) - intersectionCounter.r1g_1 | 0;
      if (!(oldSize === newSize)) {
        this.o1g(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).q2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).c7 = function (key) {
    this.l1g_1 = null;
    var tmp = this;
    var tmp_0 = this.k1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.s1g(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().p1f_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.k1g_1 = tmp_1;
    return this.l1g_1;
  };
  protoOf(PersistentHashMapBuilder).t1g = function (key, value) {
    var oldSize = this.n1g_1;
    var tmp = this;
    var tmp_0 = this.k1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.u1g(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().p1f_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.k1g_1 = tmp_1;
    return !(oldSize === this.n1g_1);
  };
  protoOf(PersistentHashMapBuilder).d6 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().p1f_1;
    tmp.k1g_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.o1g(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntriesIterator.base.<anonymous>' call
      tmp$ret$1 = new TrieNodeMutableEntriesIterator(this);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.v1g_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).d = function () {
    return this.v1g_1.d();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e = function () {
    return this.v1g_1.e();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).a3 = function () {
    return this.v1g_1.a3();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).g1h = function (key, newValue) {
    return this.v1g_1.g1h(key, newValue);
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderValuesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeValuesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.w1g_1[pathIndex].l1h(node.x1f_1, node.x1f_1.length, 0);
      while (!equals($this.w1g_1[pathIndex].h1h(), key)) {
        $this.w1g_1[pathIndex].m1h();
      }
      $this.x1g_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.p1h(keyPositionMask)) {
      var keyIndex = node.n1h(keyPositionMask);
      $this.w1g_1[pathIndex].l1h(node.x1f_1, imul(get_ENTRY_SIZE(), node.o1h()), keyIndex);
      $this.x1g_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.q1h(keyPositionMask);
    var targetNode = node.r1h(nodeIndex);
    $this.w1g_1[pathIndex].l1h(node.x1f_1, imul(get_ENTRY_SIZE(), node.o1h()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.e1h_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.c1h_1.m1g_1 === $this.f1h_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.k1g_1, path);
    this.c1h_1 = builder;
    this.d1h_1 = null;
    this.e1h_1 = false;
    this.f1h_1 = this.c1h_1.m1g_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).e = function () {
    checkForComodification_0(this);
    this.d1h_1 = this.h1h();
    this.e1h_1 = true;
    return protoOf(PersistentHashMapBaseIterator).e.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).a3 = function () {
    checkNextWasInvoked(this);
    if (this.d()) {
      var currentKey = this.h1h();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.c1h_1;
      var tmp1_remove = this.d1h_1;
      tmp$ret$0 = (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).c7(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.c1h_1.k1g_1, currentKey, 0);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.c1h_1;
      var tmp3_remove = this.d1h_1;
      tmp$ret$2 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).c7(tmp3_remove);
    }
    this.d1h_1 = null;
    this.e1h_1 = false;
    this.f1h_1 = this.c1h_1.m1g_1;
  };
  protoOf(PersistentHashMapBuilderBaseIterator).g1h = function (key, newValue) {
    if (!this.c1h_1.v1(key))
      return Unit_getInstance();
    if (this.d()) {
      var currentKey = this.h1h();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.c1h_1;
      tmp0_set.v2(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.c1h_1.k1g_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.c1h_1;
      tmp1_set.v2(key, newValue);
    }
    this.f1h_1 = this.c1h_1.m1g_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.v1h_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).e = function () {
    assert(this.w1h());
    var tmp0_this = this;
    tmp0_this.k1h_1 = tmp0_this.k1h_1 + 2 | 0;
    var tmp = this.i1h_1[this.k1h_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.i1h_1[this.k1h_1 - 1 | 0];
    return new MutableMapEntry(this.v1h_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.d1i_1 = parentIterator;
    this.e1i_1 = value;
  }
  protoOf(MutableMapEntry).o1 = function () {
    return this.e1i_1;
  };
  protoOf(MutableMapEntry).x6 = function (newValue) {
    var result = this.e1i_1;
    this.e1i_1 = newValue;
    this.d1i_1.g1h(this.l1(), newValue);
    return result;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.h1i_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).n7 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).a = function (element) {
    return this.n7((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).d6 = function () {
    this.h1i_1.d6();
  };
  protoOf(PersistentHashMapBuilderEntries).c = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.h1i_1);
  };
  protoOf(PersistentHashMapBuilderEntries).z6 = function (element) {
    return this.h1i_1.t1g(element.l1(), element.o1());
  };
  protoOf(PersistentHashMapBuilderEntries).f = function () {
    return this.h1i_1.n1g_1;
  };
  protoOf(PersistentHashMapBuilderEntries).y6 = function (element) {
    var tmp0_safe_receiver = this.h1i_1.z1(element.l1());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.o1());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.o1() == null ? this.h1i_1.v1(element.l1()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.i1i_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).b7 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).a = function (element) {
    return this.b7((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).d6 = function () {
    this.i1i_1.d6();
  };
  protoOf(PersistentHashMapBuilderKeys).c = function () {
    return new PersistentHashMapBuilderKeysIterator(this.i1i_1);
  };
  protoOf(PersistentHashMapBuilderKeys).c7 = function (element) {
    if (this.i1i_1.v1(element)) {
      this.i1i_1.c7(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).a6 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.c7((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).f = function () {
    return this.i1i_1.n1g_1;
  };
  protoOf(PersistentHashMapBuilderKeys).s1 = function (element) {
    return this.i1i_1.v1(element);
  };
  protoOf(PersistentHashMapBuilderKeys).i = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.s1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.j1i_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).f = function () {
    return this.j1i_1.n1g_1;
  };
  protoOf(PersistentHashMapBuilderValues).f7 = function (element) {
    return this.j1i_1.x1(element);
  };
  protoOf(PersistentHashMapBuilderValues).i = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.f7((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).e7 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).a = function (element) {
    return this.e7((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).c = function () {
    return new PersistentHashMapBuilderValuesIterator(this.j1i_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).i = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.y6(element);
  };
  protoOf(AbstractMapBuilderEntries).a6 = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.z6(element);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntriesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeEntriesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  function TrieNodeBaseIterator() {
    this.i1h_1 = Companion_getInstance_7().p1f_1.x1f_1;
    this.j1h_1 = 0;
    this.k1h_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).l1h = function (buffer, dataSize, index) {
    this.i1h_1 = buffer;
    this.j1h_1 = dataSize;
    this.k1h_1 = index;
  };
  protoOf(TrieNodeBaseIterator).x1h = function (buffer, dataSize) {
    this.l1h(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).w1h = function () {
    return this.k1h_1 < this.j1h_1;
  };
  protoOf(TrieNodeBaseIterator).h1h = function () {
    assert(this.w1h());
    var tmp = this.i1h_1[this.k1h_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).m1h = function () {
    assert(this.w1h());
    var tmp0_this = this;
    tmp0_this.k1h_1 = tmp0_this.k1h_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).y1h = function () {
    assert(this.k1h_1 >= this.j1h_1);
    return this.k1h_1 < this.i1h_1.length;
  };
  protoOf(TrieNodeBaseIterator).z1h = function () {
    assert(this.y1h());
    var tmp = this.i1h_1[this.k1h_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).a1i = function () {
    assert(this.y1h());
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1h_1;
    tmp0_this.k1h_1 = tmp1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).d = function () {
    return this.w1h();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).e = function () {
    assert(this.w1h());
    var tmp0_this = this;
    tmp0_this.k1h_1 = tmp0_this.k1h_1 + 2 | 0;
    var tmp = this.i1h_1[this.k1h_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).e = function () {
    assert(this.w1h());
    var tmp0_this = this;
    tmp0_this.k1h_1 = tmp0_this.k1h_1 + 2 | 0;
    var tmp = this.i1h_1[this.k1h_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.w1g_1[pathIndex].w1h()) {
      return pathIndex;
    }
    if ($this.w1g_1[pathIndex].y1h()) {
      var node = $this.w1g_1[pathIndex].z1h();
      if (pathIndex === 6) {
        $this.w1g_1[pathIndex + 1 | 0].x1h(node.x1f_1, node.x1f_1.length);
      } else {
        $this.w1g_1[pathIndex + 1 | 0].x1h(node.x1f_1, imul(get_ENTRY_SIZE(), node.o1h()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.w1g_1[$this.x1g_1].w1h()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.x1g_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.w1g_1[i].y1h() : false) {
          $this.w1g_1[i].a1i();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.x1g_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.w1g_1[i - 1 | 0].a1i();
        }
        $this.w1g_1[i].x1h(Companion_getInstance_7().p1f_1.x1f_1, 0);
      }
       while (0 <= inductionVariable);
    $this.y1g_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.w1g_1 = path;
    this.x1g_1 = 0;
    this.y1g_1 = true;
    this.w1g_1[0].x1h(node.x1f_1, imul(get_ENTRY_SIZE(), node.o1h()));
    this.x1g_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).h1h = function () {
    checkHasNext(this);
    return this.w1g_1[this.x1g_1].h1h();
  };
  protoOf(PersistentHashMapBaseIterator).d = function () {
    return this.y1g_1;
  };
  protoOf(PersistentHashMapBaseIterator).e = function () {
    checkHasNext(this);
    var result = this.w1g_1[this.x1g_1].e();
    ensureNextEntryIsReady(this);
    return result;
  };
  function MapEntry(key, value) {
    this.f1i_1 = key;
    this.g1i_1 = value;
  }
  protoOf(MapEntry).l1 = function () {
    return this.f1i_1;
  };
  protoOf(MapEntry).o1 = function () {
    return this.g1i_1;
  };
  protoOf(MapEntry).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.l1();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.o1();
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp ^ tmp$ret$1;
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver.l1(), this.l1()) ? equals(tmp0_safe_receiver.o1(), this.o1()) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.l1()) + '=' + toString_0(this.o1());
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).e = function () {
    assert(this.w1h());
    var tmp0_this = this;
    tmp0_this.k1h_1 = tmp0_this.k1h_1 + 2 | 0;
    var tmp = this.i1h_1[this.k1h_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.i1h_1[this.k1h_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.t1i_1 = map;
  }
  protoOf(PersistentHashMapKeys).f = function () {
    return this.t1i_1.t1f_1;
  };
  protoOf(PersistentHashMapKeys).s1 = function (element) {
    return this.t1i_1.v1(element);
  };
  protoOf(PersistentHashMapKeys).i = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.s1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).c = function () {
    return new PersistentHashMapKeysIterator(this.t1i_1.s1f_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.u1i_1 = map;
  }
  protoOf(PersistentHashMapEntries).f = function () {
    return this.u1i_1.t1f_1;
  };
  protoOf(PersistentHashMapEntries).v1i = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.u1i_1.z1(element.l1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.o1());
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.o1() == null ? this.u1i_1.v1(element.l1()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).i = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.v1i((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).c = function () {
    return new PersistentHashMapEntriesIterator(this.u1i_1.s1f_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.b1g_1 = node;
    this.c1g_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.v1f_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.x1f_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.x1f_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.n1h(positionMask);
    var newBuffer = insertEntryAtIndex($this.x1f_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.u1f_1 | positionMask, $this.v1f_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.n1h(positionMask);
    if ($this.w1f_1 === owner) {
      $this.x1f_1 = insertEntryAtIndex($this.x1f_1, keyIndex, key, value);
      $this.u1f_1 = $this.u1f_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.x1f_1, keyIndex, key, value);
    return new TrieNode($this.u1f_1 | positionMask, $this.v1f_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.x1f_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.u1f_1, $this.v1f_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.w1f_1 === mutator.j1g_1) {
      $this.x1f_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.m1g_1;
    tmp0_this.m1g_1 = tmp1 + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.x1f_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.u1f_1, $this.v1f_1, newBuffer, mutator.j1g_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.x1f_1;
    if (newNodeBuffer.length === 2 ? newNode.v1f_1 === 0 : false) {
      if ($this.x1f_1.length === 1) {
        newNode.u1f_1 = $this.v1f_1;
        return newNode;
      }
      var keyIndex = $this.n1h(positionMask);
      var newBuffer = replaceNodeWithEntry($this.x1f_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.u1f_1 ^ positionMask, $this.v1f_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.x1f_1, $this.x1f_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.u1f_1, $this.v1f_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.x1f_1.length === 1 ? newNode.x1f_1.length === 2 : false) ? newNode.v1f_1 === 0 : false) {
      newNode.u1f_1 = $this.v1f_1;
      return newNode;
    }
    if ($this.w1f_1 === owner) {
      $this.x1f_1[nodeIndex] = newNode;
      return $this;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.x1f_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.u1f_1, $this.v1f_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.x1f_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.x1f_1, nodeIndex);
    return TrieNode_init_$Create$($this.u1f_1, $this.v1f_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.x1f_1.length === 1)
      return null;
    if ($this.w1f_1 === owner) {
      $this.x1f_1 = removeNodeAtIndex_0($this.x1f_1, nodeIndex);
      $this.v1f_1 = $this.v1f_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.x1f_1, nodeIndex);
    return new TrieNode($this.u1f_1, $this.v1f_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = storedKey;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedKeyHash = tmp$ret$0;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.q1h(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.x1f_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.u1f_1 ^ positionMask, $this.v1f_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.w1f_1 === owner) {
      $this.x1f_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.u1f_1 = $this.u1f_1 ^ positionMask;
      $this.v1f_1 = $this.v1f_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.u1f_1 ^ positionMask, $this.v1f_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [key1, value1, key2, value2];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        var tmp$ret$5;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = [key1, value1, key2, value2];
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } else {
        var tmp$ret$8;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = [key2, value2, key1, value1];
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp = tmp$ret$8;
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = [node];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.x1f_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.x1f_1, keyIndex);
    return TrieNode_init_$Create$($this.u1f_1 ^ positionMask, $this.v1f_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.n1g_1;
    tmp0_this.o1g(tmp1 - 1 | 0);
    mutator.l1g_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.x1f_1.length === 2)
      return null;
    if ($this.w1f_1 === mutator.j1g_1) {
      $this.x1f_1 = removeEntryAtIndex_0($this.x1f_1, keyIndex);
      $this.u1f_1 = $this.u1f_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.x1f_1, keyIndex);
    return new TrieNode($this.u1f_1 ^ positionMask, $this.v1f_1, newBuffer, mutator.j1g_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.x1f_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.x1f_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.n1g_1;
    tmp0_this.o1g(tmp1 - 1 | 0);
    mutator.l1g_1 = valueAtKeyIndex($this, i);
    if ($this.x1f_1.length === 2)
      return null;
    if ($this.w1f_1 === mutator.j1g_1) {
      $this.x1f_1 = removeEntryAtIndex_0($this.x1f_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.x1f_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.j1g_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.x1f_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.x1f_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.x1f_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.l1g_1 = valueAtKeyIndex($this, i);
          if ($this.w1f_1 === mutator.j1g_1) {
            $this.x1f_1[i + 1 | 0] = value;
            return $this;
          }
          var tmp1_this = mutator;
          var tmp2 = tmp1_this.m1g_1;
          tmp1_this.m1g_1 = tmp2 + 1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.x1f_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.j1g_1);
        }
      }
       while (!(i === last));
    var tmp3_this = mutator;
    var tmp4 = tmp3_this.n1g_1;
    tmp3_this.o1g(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.x1f_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.j1g_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.v1f_1 === 0);
    assert($this.u1f_1 === 0);
    assert(otherNode.v1f_1 === 0);
    assert(otherNode.u1f_1 === 0);
    var tempBuffer = copyOf_0($this.x1f_1, $this.x1f_1.length + otherNode.x1f_1.length | 0);
    var i = $this.x1f_1.length;
    var progression = step(until(0, otherNode.x1f_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.x1f_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.x1f_1[j];
          tempBuffer[i + 1 | 0] = otherNode.x1f_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          var tmp1_this = intersectionCounter;
          var tmp2 = tmp1_this.r1g_1;
          tmp1_this.r1g_1 = tmp2 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.x1f_1.length ? $this : newSize === otherNode.x1f_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.r1h($this.q1h(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.r1h(otherNode.q1h(positionMask));
        tmp_0 = targetNode.q1g(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.p1h(positionMask)) {
        var keyIndex = otherNode.n1h(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.n1g_1;
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = key;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.p1g(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.n1g_1 === oldSize) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.r1g_1;
          tmp0_this.r1g_1 = tmp1 + 1 | 0;
        }
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.r1h(otherNode.q1h(positionMask));
      var tmp_1;
      if ($this.p1h(positionMask)) {
        var keyIndex_0 = $this.n1h(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = key_0;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.y1f(tmp$ret$2, key_0, shift + 5 | 0)) {
          var tmp0_this_0 = intersectionCounter;
          var tmp1_0 = tmp0_this_0.r1g_1;
          tmp0_this_0.r1g_1 = tmp1_0 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp0_safe_receiver_1 = key_0;
          var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.p1g(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.n1h(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.n1h(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      var tmp$ret$4;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = thisKey;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      tmp$ret$4 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = otherKey;
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.j1g_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.v1f_1 === 0)
      return $this.x1f_1.length / 2 | 0;
    var numValues = countOneBits($this.u1f_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.x1f_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.r1h(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.v1f_1 === otherNode.v1f_1))
      return false;
    if (!($this.u1f_1 === otherNode.u1f_1))
      return false;
    var inductionVariable = 0;
    var last = $this.x1f_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.x1f_1[i] === otherNode.x1f_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.w1f_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.p1f_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.u1f_1 = dataMap;
    this.v1f_1 = nodeMap;
    this.w1f_1 = ownedBy;
    this.x1f_1 = buffer;
  }
  protoOf(TrieNode).o1h = function () {
    return countOneBits(this.u1f_1);
  };
  protoOf(TrieNode).p1h = function (positionMask) {
    return !((this.u1f_1 & positionMask) === 0);
  };
  protoOf(TrieNode).n1h = function (positionMask) {
    return imul(2, countOneBits(this.u1f_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).q1h = function (positionMask) {
    return (this.x1f_1.length - 1 | 0) - countOneBits(this.v1f_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).r1h = function (nodeIndex) {
    var tmp = this.x1f_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).y1f = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.p1h(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.n1h(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.r1h(this.q1h(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.y1f(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).z1f = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.p1h(keyPositionMask)) {
      var keyIndex = this.n1h(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.r1h(this.q1h(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.z1f(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).q1g = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.w1i(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.j1g_1);
    }
    var newNodeMap = this.v1f_1 | otherNode.v1f_1;
    var newDataMap = (this.u1f_1 ^ otherNode.u1f_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp0_forEachOneBit = this.u1f_1 & otherNode.u1f_1;
    var mask = tmp0_forEachOneBit;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp1__anonymous__uwfjfc = index;
      var leftKey = keyAtIndex(this, this.n1h(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.n1h(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = (newNodeMap & newDataMap) === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.w1f_1, mutator.j1g_1) ? this.u1f_1 === newDataMap : false) ? this.v1f_1 === newNodeMap : false) {
      tmp = this;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp3_arrayOfNulls = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      tmp$ret$1 = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      var newBuffer = tmp$ret$1;
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp4_forEachOneBit = newNodeMap;
    var mask_0 = tmp4_forEachOneBit;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp5__anonymous__kpxxpo = index_0;
      var newNodeIndex = (mutableNode.x1f_1.length - 1 | 0) - tmp5__anonymous__kpxxpo | 0;
      mutableNode.x1f_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      var tmp0_0 = index_0;
      index_0 = tmp0_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp6_forEachOneBit = newDataMap;
    var mask_1 = tmp6_forEachOneBit;
    var index_1 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp7__anonymous__b0knam = index_1;
      var newKeyIndex = imul(tmp7__anonymous__b0knam, 2);
      if (!otherNode.p1h(bit_1)) {
        var oldKeyIndex = this.n1h(bit_1);
        mutableNode.x1f_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.x1f_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.n1h(bit_1);
        mutableNode.x1f_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.x1f_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.p1h(bit_1)) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.r1g_1;
          tmp0_this.r1g_1 = tmp1 + 1 | 0;
        }
      }
      var tmp0_1 = index_1;
      index_1 = tmp0_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).a1g = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.p1h(keyPositionMask)) {
      var keyIndex = this.n1h(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.q1h(keyPositionMask);
      var targetNode = this.r1h(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.a1g(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0__anonymous__q1qw7t = putResult.b1g_1;
      tmp$ret$0 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0__anonymous__q1qw7t);
      tmp_2.b1g_1 = tmp$ret$0;
      tmp$ret$1 = putResult;
      tmp$ret$2 = tmp$ret$1;
      return tmp$ret$2;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).p1g = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.p1h(keyPositionMask)) {
      var keyIndex = this.n1h(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.l1g_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp0_this = mutator;
      var tmp1 = tmp0_this.n1g_1;
      tmp0_this.o1g(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.j1g_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.q1h(keyPositionMask);
      var targetNode = this.r1h(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.p1g(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.j1g_1);
    }
    var tmp2_this = mutator;
    var tmp3 = tmp2_this.n1g_1;
    tmp2_this.o1g(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.j1g_1);
  };
  protoOf(TrieNode).d1g = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.p1h(keyPositionMask)) {
      var keyIndex = this.n1h(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.q1h(keyPositionMask);
      var targetNode = this.r1h(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.d1g(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).s1g = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.p1h(keyPositionMask)) {
      var keyIndex = this.n1h(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.q1h(keyPositionMask);
      var targetNode = this.r1h(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.s1g(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.j1g_1);
    }
    return this;
  };
  protoOf(TrieNode).u1g = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.p1h(keyPositionMask)) {
      var keyIndex = this.n1h(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.q1h(keyPositionMask);
      var targetNode = this.r1h(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.u1g(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.j1g_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    tmp$ret$1 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    tmp$ret$2 = newBuffer;
    newBuffer[newNodeIndex] = newNode;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    tmp$ret$3 = newBuffer;
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.x1d_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_6().w1d());
  }
  protoOf(Companion_6).y1d = function () {
    return this.x1d_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_8();
    AbstractSet.call(this);
    this.x1i_1 = firstElement;
    this.y1i_1 = lastElement;
    this.z1i_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).f = function () {
    return this.z1i_1.t1f_1;
  };
  protoOf(PersistentOrderedSet).i = function (element) {
    return this.z1i_1.v1(element);
  };
  protoOf(PersistentOrderedSet).a = function (element) {
    if (this.z1i_1.v1(element)) {
      return this;
    }
    if (this.h()) {
      var newMap = this.z1i_1.v2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.y1i_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.z1i_1.z1(lastElement));
    var newMap_0 = this.z1i_1.v2(lastElement, lastLinks.c1j(element)).v2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.x1i_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).a6 = function (element) {
    var tmp0_elvis_lhs = this.z1i_1.z1(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.z1i_1.c7(element);
    if (links.d1j()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.a1j_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).z1(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.a1j_1;
      newMap = tmp_0.v2((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.c1j(links.b1j_1));
    }
    if (links.f1j()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.b1j_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).z1(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.b1j_1;
      newMap = tmp_2.v2((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.e1j(links.a1j_1));
    }
    var newFirstElement = !links.d1j() ? links.b1j_1 : this.x1i_1;
    var newLastElement = !links.f1j() ? links.a1j_1 : this.y1i_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).c = function () {
    return new PersistentOrderedSetIterator(this.x1i_1, this.z1i_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.a1j_1 = previous;
    this.b1j_1 = next;
  }
  protoOf(Links).c1j = function (newNext) {
    return new Links(this.a1j_1, newNext);
  };
  protoOf(Links).e1j = function (newPrevious) {
    return new Links(newPrevious, this.b1j_1);
  };
  protoOf(Links).f1j = function () {
    return !(this.b1j_1 === EndOfChain_getInstance());
  };
  protoOf(Links).d1j = function () {
    return !(this.a1j_1 === EndOfChain_getInstance());
  };
  function checkHasNext_0($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.g1j_1 = nextElement;
    this.h1j_1 = map;
    this.i1j_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).d = function () {
    return this.i1j_1 < this.h1j_1.f();
  };
  protoOf(PersistentOrderedSetIterator).e = function () {
    checkHasNext_0(this);
    var tmp = this.g1j_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp0_this = this;
    var tmp1 = tmp0_this.i1j_1;
    tmp0_this.i1j_1 = tmp1 + 1 | 0;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_getOrElse = this.h1j_1;
    var tmp0_elvis_lhs = tmp0_getOrElse.z1(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp$ret$0 = tmp_1;
    tmp_0.g1j_1 = tmp$ret$0.b1j_1;
    return result;
  };
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  protoOf(ListImplementation).e1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).a1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance == null)
      new ListImplementation();
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.r1g_1 = count;
  }
  protoOf(DeltaCounter).w1i = function (that) {
    var tmp0_this = this;
    tmp0_this.r1g_1 = tmp0_this.r1g_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.r1g_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.r1g_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.r1g_1 === tmp0_other_with_cast.r1g_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    tmp0_apply.o1j(block);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.z14() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.nr_1, other.nr_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.h11(key);
    var slot = composer.j13();
    var tmp;
    if (slot === Companion_getInstance_1().rw_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.k13(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.o1j(block);
    composer.i11();
    return result;
  }
  function illegalDecoyCallException(fName) {
    throw IllegalStateException_init_$Create$('Function ' + fName + ' should have been replaced by compiler.');
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.k1d_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.l1d_1[0].equals(key) ? 0 : $this.l1d_1[0].n(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.l1d_1[mid];
      var comparison = midVal.ac(key);
      if (comparison.n(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.n(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.k1d_1 = size;
    this.l1d_1 = keys;
    this.m1d_1 = values;
  }
  protoOf(ThreadMap).n1d = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.m1d_1[index] : null;
  };
  protoOf(ThreadMap).o1d = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.m1d_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).p1d = function (key, value) {
    var size = this.k1d_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.count' call
    var tmp0_count = this.m1d_1;
    var count = 0;
    var indexedObject = tmp0_count;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      tmp$ret$0 = !(element == null);
      if (tmp$ret$0) {
        count = count + 1 | 0;
      }
    }
    tmp$ret$1 = count;
    var newSize = tmp$ret$1 + 1 | 0;
    var newKeys = longArray(newSize);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(newSize), null);
    var newValues = tmp$ret$2;
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.l1d_1[source];
        var oldValue = this.m1d_1[source];
        if (oldKey.n(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          var tmp0 = dest;
          dest = tmp0 + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          var tmp1 = dest;
          dest = tmp1 + 1 | 0;
        }
        var tmp2 = source;
        source = tmp2 + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.l1d_1[source];
          var oldValue_0 = this.m1d_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            var tmp3 = dest;
            dest = tmp3 + 1 | 0;
          }
          var tmp4 = source;
          source = tmp4 + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (properties_initialized_ThreadMap_kt_kd2vq6) {
    } else {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = HashSet_init_$Create$_0(_this__u8e3s4.f());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        tmp0_also.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.g(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.r4(element.q4_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.p1j_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).dh = function () {
    return this.p1j_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.q1j_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).dh = function () {
    return this.q1j_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_applyObservers().a6($observer);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return Unit_getInstance();
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      tmp$ret$0 = get_globalWriteObservers().a6($observer);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      advanceGlobalSnapshot_0();
      return Unit_getInstance();
    };
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).gp = function () {
    return currentSnapshot();
  };
  protoOf(Companion_7).z19 = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1j(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_7).y1b = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    tmp$ret$0 = get_applyObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_7).s1j = function (observer) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    tmp$ret$0 = get_globalWriteObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_7).z18 = function () {
    return currentSnapshot().z18();
  };
  protoOf(Companion_7).y18 = function () {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().aj().t1j();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !tmp0_safe_receiver.h();
      tmp = tmp$ret$0;
    }
    tmp$ret$1 = tmp === true;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var changes = tmp$ret$4;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Snapshot(id, invalid) {
    Companion_getInstance_9();
    this.zz_1 = invalid;
    this.a10_1 = id;
    this.b10_1 = false;
    this.c10_1 = !(id === 0) ? trackPinning(id, this.u1j()) : -1;
    this.d10_1 = 8;
  }
  protoOf(Snapshot).v1j = function (_set____db54di) {
    this.zz_1 = _set____db54di;
  };
  protoOf(Snapshot).u1j = function () {
    return this.zz_1;
  };
  protoOf(Snapshot).w1j = function (_set____db54di) {
    this.a10_1 = _set____db54di;
  };
  protoOf(Snapshot).e10 = function () {
    return this.a10_1;
  };
  protoOf(Snapshot).dh = function () {
    this.b10_1 = true;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.y1j();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Snapshot).a1a = function () {
    var previous = get_threadSnapshot().aj();
    get_threadSnapshot().f17(this);
    return previous;
  };
  protoOf(Snapshot).b1a = function (snapshot) {
    get_threadSnapshot().f17(snapshot);
  };
  protoOf(Snapshot).c1k = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d1k();
    this.e1k();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Snapshot).d1k = function () {
    set_openSnapshots(get_openSnapshots().j1k(this.e10()));
  };
  protoOf(Snapshot).e1k = function () {
    this.y1j();
  };
  protoOf(Snapshot).k1k = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = !this.b10_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      tmp$ret$0 = 'Cannot use a disposed snapshot';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).y1j = function () {
    if (this.c10_1 >= 0) {
      releasePinningLocked(this.c10_1);
      this.c10_1 = -1;
    }
  };
  protoOf(Snapshot).l1k = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.c10_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.c10_1 = -1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  function abandon($this) {
    var modified = $this.t1j();
    if (!(modified == null)) {
      $this.m1k();
      $this.n1k(null);
      var id = $this.e10();
      var tmp0_iterator = modified.c();
      while (tmp0_iterator.d()) {
        var state = tmp0_iterator.e();
        var current = state.h1d();
        while (!(current == null)) {
          if (current.o1k_1 === id ? true : contains($this.k1a_1, current.o1k_1)) {
            current.o1k_1 = 0;
          }
          current = current.p1k_1;
        }
      }
    }
    $this.c1k();
  }
  function apply$overwriteUnusedRecordsLocked(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function apply$overwriteUnusedRecordsLocked_0(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Snapshot.call(this, id, invalid);
    this.h1a_1 = readObserver;
    this.i1a_1 = writeObserver;
    this.j1a_1 = null;
    this.k1a_1 = Companion_getInstance_10().r1k_1;
    this.l1a_1 = new Int32Array(0);
    this.m1a_1 = 1;
    this.n1a_1 = false;
    this.o1a_1 = 8;
  }
  protoOf(MutableSnapshot).z1j = function () {
    return this.h1a_1;
  };
  protoOf(MutableSnapshot).a1k = function () {
    return this.i1a_1;
  };
  protoOf(MutableSnapshot).r1j = function (readObserver, writeObserver) {
    this.k1k();
    this.s1k();
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.t1k(this.e10());
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().u1k(newId));
    var currentInvalid = this.u1j();
    this.v1j(currentInvalid.u1k(newId));
    tmp$ret$0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.e10() + 1 | 0, newId), mergedReadObserver(readObserver, this.z1j()), mergedWriteObserver(writeObserver, this.a1k()), this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.n1a_1 ? !this.b10_1 : false) {
      var previousId = this.e10();
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.w1j(tmp0_0);
      set_openSnapshots(get_openSnapshots().u1k(this.e10()));
      tmp$ret$5 = Unit_getInstance();
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      this.v1j(addRange(this.u1j(), previousId + 1 | 0, this.e10()));
    }
    tmp$ret$8 = tmp0_also;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  };
  protoOf(MutableSnapshot).p1a = function () {
    var modified = this.t1j();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().aj(), this, get_openSnapshots().j1k(get_currentGlobalSnapshot().aj().e10())) : null;
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.f() === 0) {
      this.d1k();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().aj();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var globalModified = previousGlobalSnapshot.t1j();
      var tmp_0;
      var tmp_1;
      if (!(globalModified == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp$ret$0 = !globalModified.h();
        tmp_1 = tmp$ret$0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = to(toMutableList(get_applyObservers()), globalModified);
      } else {
        tmp_0 = to(emptyList(), null);
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().aj();
      var result = this.v1k(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().j1k(previousGlobalSnapshot_0.e10()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.d1k();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var globalModified_0 = previousGlobalSnapshot_0.t1j();
      this.n1k(null);
      previousGlobalSnapshot_0.n1k(null);
      tmp = to(toMutableList(get_applyObservers()), globalModified_0);
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_container = tmp$ret$4;
    var observers = tmp0_container.t2();
    var globalModified_1 = tmp0_container.u2();
    this.n1a_1 = true;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$5 = globalModified_1 == null ? true : globalModified_1.h();
    if (!tmp$ret$5) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(globalModified_1, this);
        }
         while (inductionVariable <= last);
    }
    var tmp$ret$6;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$6 = modified == null ? true : modified.h();
    if (!tmp$ret$6) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = observers.f() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = observers.g(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp1_synchronized = get_lock();
    var tmp$ret$8;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
    this.e1k();
    var tmp0_safe_receiver = globalModified_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        apply$overwriteUnusedRecordsLocked(element);
      }
    }
    var tmp1_safe_receiver = modified;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp1_safe_receiver.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        apply$overwriteUnusedRecordsLocked_0(element_0);
      }
      tmp_2 = Unit_getInstance();
    }
    tmp$ret$7 = tmp_2;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).x1j = function () {
    return false;
  };
  protoOf(MutableSnapshot).dh = function () {
    if (!this.b10_1) {
      protoOf(Snapshot).dh.call(this);
      this.w1k(this);
    }
  };
  protoOf(MutableSnapshot).x1k = function (snapshot) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1a_1;
    tmp0_this.m1a_1 = tmp1 + 1 | 0;
  };
  protoOf(MutableSnapshot).w1k = function (snapshot) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.m1a_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.m1a_1 = tmp0_this.m1a_1 - 1 | 0;
    if (tmp0_this.m1a_1 === 0) {
      if (!this.n1a_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).z18 = function () {
    if (this.n1a_1 ? true : this.b10_1)
      return Unit_getInstance();
    this.y1k();
  };
  protoOf(MutableSnapshot).d1k = function () {
    set_openSnapshots(get_openSnapshots().j1k(this.e10()).z1k(this.k1a_1));
  };
  protoOf(MutableSnapshot).e1k = function () {
    this.a1l();
    protoOf(Snapshot).e1k.call(this);
  };
  protoOf(MutableSnapshot).m1k = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.n1a_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(MutableSnapshot).s1k = function () {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!this.n1a_1) {
      tmp = true;
    } else {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp$ret$0 = this.c10_1 >= 0;
      tmp = tmp$ret$0;
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(MutableSnapshot).v1k = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.u1j().u1k(this.e10()).b1l(this.k1a_1);
    var modified = ensureNotNull(this.t1j());
    var statesToRemove = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.h1d();
      var tmp1_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, this.e10(), start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, this.e10(), this.u1j());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var tmp4_safe_receiver = optimisticMerges;
        var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.z1(current);
        var tmp_2;
        if (tmp5_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          tmp$ret$0 = state.j1d(previous, current, applied);
          tmp$ret$1 = tmp$ret$0;
          tmp_2 = tmp$ret$1;
        } else {
          tmp_2 = tmp5_elvis_lhs;
        }
        var merged = tmp_2;
        var tmp6_subject = merged;
        if (tmp6_subject == null)
          return new Failure(this);
        else if (equals(tmp6_subject, applied)) {
        } else if (equals(tmp6_subject, current)) {
          var tmp7_elvis_lhs = mergedRecords;
          var tmp_3;
          if (tmp7_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp$ret$2;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$2 = ArrayList_init_$Create$();
            var tmp0_also = tmp$ret$2;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp0_also;
            tmp$ret$3 = tmp0_also;
            tmp_3 = tmp$ret$3;
          } else {
            tmp_3 = tmp7_elvis_lhs;
          }
          tmp_3.a(to(state, current.e1d()));
          var tmp8_elvis_lhs = statesToRemove;
          var tmp_4;
          if (tmp8_elvis_lhs == null) {
            var tmp$ret$5;
            // Inline function 'kotlin.also' call
            var tmp$ret$4;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$4 = ArrayList_init_$Create$();
            var tmp1_also = tmp$ret$4;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            statesToRemove = tmp1_also;
            tmp$ret$5 = tmp1_also;
            tmp_4 = tmp$ret$5;
          } else {
            tmp_4 = tmp8_elvis_lhs;
          }
          tmp_4.a(state);
        } else {
          var tmp9_elvis_lhs = mergedRecords;
          var tmp_5;
          if (tmp9_elvis_lhs == null) {
            var tmp$ret$7;
            // Inline function 'kotlin.also' call
            var tmp$ret$6;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$6 = ArrayList_init_$Create$();
            var tmp2_also = tmp$ret$6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp2_also;
            tmp$ret$7 = tmp2_also;
            tmp_5 = tmp$ret$7;
          } else {
            tmp_5 = tmp9_elvis_lhs;
          }
          tmp_5.a(!equals(merged, previous) ? to(state, merged) : to(state, previous.e1d()));
        }
      }
    }
    var tmp10_safe_receiver = mergedRecords;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.y1k();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp10_safe_receiver.f() - 1 | 0;
      var tmp_6;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp10_safe_receiver.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var tmp0_container = item;
          var state_0 = tmp0_container.t2();
          var stateRecord = tmp0_container.u2();
          stateRecord.o1k_1 = this.e10();
          var tmp$ret$10;
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = get_lock();
          var tmp$ret$8;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.p1k_1 = state_0.h1d();
          state_0.i1d(stateRecord);
          tmp$ret$8 = Unit_getInstance();
          tmp$ret$9 = tmp$ret$8;
          tmp$ret$10 = tmp$ret$9;
        }
         while (inductionVariable <= last);
        tmp_6 = Unit_getInstance();
      }
      tmp$ret$11 = tmp_6;
    }
    var tmp11_safe_receiver = statesToRemove;
    if (tmp11_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      tmp$ret$12 = modified.c6(tmp11_safe_receiver);
      tmp$ret$13 = tmp$ret$12;
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).y1k = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.t1k(this.e10());
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    var tmp0_also = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.n1a_1 ? !this.b10_1 : false) {
      var previousId = this.e10();
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.w1j(tmp0);
      set_openSnapshots(get_openSnapshots().u1k(this.e10()));
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      this.v1j(addRange(this.u1j(), previousId + 1 | 0, this.e10()));
    }
    tmp$ret$4 = tmp0_also;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  protoOf(MutableSnapshot).t1k = function (id) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1a_1 = this.k1a_1.u1k(id);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(MutableSnapshot).c1l = function (id) {
    if (id >= 0) {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      var tmp1_plus = this.l1a_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([id]);
      var tmp0_plus = tmp$ret$0;
      tmp$ret$1 = primitiveArrayConcat([tmp1_plus, tmp0_plus]);
      tmp$ret$2 = tmp$ret$1;
      tmp.l1a_1 = tmp$ret$2;
    }
  };
  protoOf(MutableSnapshot).d1l = function (handles) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = handles.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var pinned = this.l1a_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$1 = pinned.length === 0;
    if (tmp$ret$1)
      this.l1a_1 = handles;
    else {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      tmp$ret$2 = primitiveArrayConcat([pinned, handles]);
      tmp.l1a_1 = tmp$ret$2;
    }
  };
  protoOf(MutableSnapshot).a1l = function () {
    var inductionVariable = 0;
    var last = this.l1a_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked(this.l1a_1[index]);
      }
       while (inductionVariable <= last);
  };
  protoOf(MutableSnapshot).e1l = function (snapshots) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1a_1 = this.k1a_1.b1l(snapshots);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(MutableSnapshot).b1k = function (state) {
    var tmp0_elvis_lhs = this.t1j();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.n1k(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(state);
  };
  protoOf(MutableSnapshot).n1k = function (_set____db54di) {
    this.j1a_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).t1j = function () {
    return this.j1a_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.g1l_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.i1l_1 = snapshot;
    this.j1l_1 = 8;
  }
  function SnapshotApplyResult() {
    this.k1l_1 = 0;
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($tmp0_safe_receiver) {
    return function (state) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $tmp0_safe_receiver.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $tmp0_safe_receiver.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new MutableSnapshot(tmp$ret$3, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = get_globalWriteObservers();
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).r1j = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).z18 = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).y1l = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).w1k = function (snapshot) {
    return this.y1l(snapshot);
  };
  protoOf(GlobalSnapshot).z1l = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).x1k = function (snapshot) {
    return this.z1l(snapshot);
  };
  protoOf(GlobalSnapshot).p1a = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  protoOf(GlobalSnapshot).dh = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.y1j();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.a1m(id);
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    tmp$ret$0 = get_pinningTable().g1m(pinned);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function StateObject() {
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().h1m(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().aj();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().aj() : tmp0_elvis_lhs;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().aj();
    tmp$ret$0 = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var result = tmp$ret$3;
    var modified = previousGlobalSnapshot.t1j();
    if (!(modified == null)) {
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
      tmp$ret$4 = toMutableList(get_applyObservers());
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var observers = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
          item(modified, previousGlobalSnapshot);
        }
         while (inductionVariable <= last);
    }
    var tmp$ret$11;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp2_synchronized = get_lock();
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    var tmp0_safe_receiver = modified;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        advanceGlobalSnapshot$overwriteUnusedRecordsLocked(element);
      }
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$8 = tmp_0;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.w1m_1) {
      $this.w1m_1 = true;
      $this.v1m_1.w1k($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.v1m_1 = parent;
    this.w1m_1 = false;
    this.v1m_1.x1k(this);
  }
  protoOf(NestedMutableSnapshot).dh = function () {
    if (!this.b10_1) {
      protoOf(MutableSnapshot).dh.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).p1a = function () {
    if (this.v1m_1.n1a_1 ? true : this.v1m_1.b10_1)
      return new Failure(this);
    var modified = this.t1j();
    var id = this.e10();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.v1m_1, this, this.v1m_1.u1j()) : null;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.f() === 0) {
      this.c1k();
    } else {
      var result = this.v1k(this.v1m_1.e10(), optimisticMerges_0, this.v1m_1.u1j());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_elvis_lhs = this.v1m_1.t1j();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = HashSet_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.v1m_1.n1k(tmp0_also);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.t(modified);
    }
    if (this.v1m_1.e10() < id) {
      this.v1m_1.y1k();
    }
    this.v1m_1.v1j(this.v1m_1.u1j().j1k(id).z1k(this.k1a_1));
    this.v1m_1.t1k(id);
    this.v1m_1.c1l(this.l1k());
    this.v1m_1.e1l(this.k1a_1);
    this.v1m_1.d1l(this.l1a_1);
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    this.n1a_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.u1k(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      var tmp0_elvis_lhs = readObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver_0 : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      var tmp0_elvis_lhs = writeObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StateRecord() {
    this.o1k_1 = currentSnapshot().e10();
    this.p1k_1 = null;
    this.q1k_1 = 8;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.t1j();
    var id = currentSnapshot.e10();
    if (modified == null)
      return null;
    var start = applyingSnapshot.u1j().u1k(applyingSnapshot.e10()).b1l(applyingSnapshot.k1a_1);
    var result = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.h1d();
      var tmp1_elvis_lhs = readable(first, id, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, id, start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, applyingSnapshot.e10(), applyingSnapshot.u1j());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var merged = state.j1d(previous, current, applied);
        if (!(merged == null)) {
          // Inline function 'kotlin.collections.set' call
          var tmp4_elvis_lhs = result;
          var tmp_2;
          if (tmp4_elvis_lhs == null) {
            var tmp$ret$1;
            // Inline function 'kotlin.also' call
            var tmp$ret$0;
            // Inline function 'kotlin.collections.hashMapOf' call
            tmp$ret$0 = HashMap_init_$Create$();
            var tmp0_also = tmp$ret$0;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
            result = tmp0_also;
            tmp$ret$1 = tmp0_also;
            tmp_2 = tmp$ret$1;
          } else {
            tmp_2 = tmp4_elvis_lhs;
          }
          var tmp1_set = tmp_2;
          tmp1_set.v2(current, merged);
        } else {
          return null;
        }
      }
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().g(snapshot.e10())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().j1k(previousGlobalSnapshot.e10()));
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().j1k(previousGlobalSnapshot.e10()));
    get_currentGlobalSnapshot().b15(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.dh();
    set_openSnapshots(get_openSnapshots().u1k(globalId));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return result;
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.h1d();
    var validRecord = null;
    var reuseLimit = get_pinningTable().x1m(get_nextSnapshotId()) - 1 | 0;
    var uncertainRecords = 0;
    while (!(current == null)) {
      var currentId = current.o1k_1;
      if (!(currentId === 0)) {
        if (currentId <= reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
          } else {
            var tmp;
            if (current.o1k_1 < validRecord.o1k_1) {
              tmp = current;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = validRecord;
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
              validRecord = current;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            }
            var recordToOverwrite = tmp;
            recordToOverwrite.o1k_1 = 0;
            var tmp0_safe_receiver = validRecord;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp$ret$1;
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              recordToOverwrite.d1d(tmp0_safe_receiver);
              tmp$ret$1 = Unit_getInstance();
            }
          }
        } else {
          var tmp1 = uncertainRecords;
          uncertainRecords = tmp1 + 1 | 0;
        }
      }
      current = current.p1k_1;
    }
    return uncertainRecords < 1;
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.o1k_1 < current.o1k_1 ? current : candidate;
      }
      current = current.p1k_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.o1k_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.g(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_getInstance_9().gp();
    var tmp0_safe_receiver = snapshot.z1j();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.e10(), snapshot.u1j());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_getInstance_9().gp();
      var tmp_0 = state.h1d();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.e10(), syncSnapshot.u1j());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$0 = tmp_1;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_9().gp();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.e10(), tmp0_let.u1j());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = Companion_getInstance_9().gp();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = readable(r, tmp0_let_0.e10(), tmp0_let_0.u1j());
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp$ret$6 = tmp_0;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_safe_receiver = snapshot.a1k();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.x1j()) {
      snapshot.b1k(state);
    }
    var id = snapshot.e10();
    if (candidate.o1k_1 === id)
      return candidate;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    tmp$ret$0 = newOverwritableRecordLocked(_this__u8e3s4, state);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var newData = tmp$ret$3;
    newData.o1k_1 = id;
    snapshot.b1k(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.o1k_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp$ret$0 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.e1d();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_apply.o1k_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp0_apply.p1k_1 = state.h1d();
      state.i1d(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
      tmp$ret$1 = tmp0_apply;
      var tmp_2 = tmp$ret$1;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.h1d();
    var validRecord = null;
    var reuseLimit = get_pinningTable().x1m(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_10().r1k_1;
    while (!(current == null)) {
      var currentId = current.o1k_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.o1k_1 < validRecord.o1k_1 ? current : validRecord;
        }
      }
      current = current.p1k_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.x1j()) {
      snapshot.b1k(state);
    }
    var id = snapshot.e10();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.u1j());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.o1k_1 === snapshot.e10())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.b1k(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    tmp$ret$0 = newWritableRecordLocked(_this__u8e3s4, state, snapshot);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.d1d(_this__u8e3s4);
    newData.o1k_1 = snapshot.e10();
    return newData;
  }
  function advanceGlobalSnapshot$overwriteUnusedRecordsLocked(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      set_openSnapshots(get_openSnapshots().u1k(result.e10()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (properties_initialized_Snapshot_kt_2vlcoq) {
    } else {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_10().r1k_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      applyObservers = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0_0 = ArrayList_init_$Create$();
      globalWriteObservers = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_10().r1k_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().u1k(tmp0_also.e10()));
      tmp$ret$0_1 = tmp0_also;
      currentGlobalSnapshot = new AtomicReference(tmp$ret$0_1);
      snapshotInitializer = get_currentGlobalSnapshot().aj();
    }
  }
  function shiftUp($this, index) {
    var values = $this.c1m_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.c1m_1;
    var half = $this.b1m_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.b1m_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_getInstance();
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_getInstance();
    }
  }
  function swap($this, a, b) {
    var values = $this.c1m_1;
    var index = $this.d1m_1;
    var handles = $this.e1m_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.c1m_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.c1m_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newValues;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newValues;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.d1m_1;
    var tmp3_copyInto = tmp2_copyInto.length;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp2_copyInto;
    tmp$ret$6 = tmp$ret$5;
    var tmp_0 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = newIndex;
    tmp$ret$8 = tmp$ret$7;
    arrayCopy(tmp_0, tmp$ret$8, 0, 0, tmp3_copyInto);
    tmp$ret$9 = newIndex;
    $this.c1m_1 = newValues;
    $this.d1m_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.e1m_1.length;
    if ($this.f1m_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.allocateHandle.<anonymous>' call
        tmp$ret$0 = tmp_2 + 1 | 0;
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.e1m_1;
      var tmp1_copyInto = tmp0_copyInto.length;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = newHandles;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_3, tmp$ret$4, 0, 0, tmp1_copyInto);
      tmp$ret$5 = newHandles;
      $this.e1m_1 = newHandles;
    }
    var handle = $this.f1m_1;
    $this.f1m_1 = $this.e1m_1[$this.f1m_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.e1m_1[handle] = $this.f1m_1;
    $this.f1m_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.b1m_1 = 0;
    this.c1m_1 = new Int32Array(16);
    this.d1m_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 16;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.handles.<anonymous>' call
      tmp$ret$0 = tmp_3 + 1 | 0;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.e1m_1 = tmp_2;
    this.f1m_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).x1m = function (default_0) {
    return this.b1m_1 > 0 ? this.c1m_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).g1m = function (value) {
    ensure(this, this.b1m_1 + 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.b1m_1;
    tmp0_this.b1m_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.c1m_1[i] = value;
    this.d1m_1[i] = handle;
    this.e1m_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).h1m = function (handle) {
    var i = this.e1m_1[handle];
    swap(this, i, this.b1m_1 - 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.b1m_1;
    tmp0_this.b1m_1 = tmp1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_8() {
    Companion_instance_8 = this;
    this.r1k_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.g1n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).p1n = function ($this$sequence, $completion) {
    var tmp = this.q1n($this$sequence, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  protoOf(SnapshotIdSet$iterator$slambda).gd = function (p1, $completion) {
    return this.p1n(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 15;
            this.i1n_1 = this.g1n_1.i1k_1;
            if (!(this.i1n_1 == null)) {
              this.j1n_1 = intArrayIterator(this.i1n_1);
              this.lc_1 = 1;
              continue $sm;
            } else {
              this.lc_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            if (!this.j1n_1.d()) {
              this.lc_1 = 3;
              continue $sm;
            }

            this.k1n_1 = this.j1n_1.e();
            this.lc_1 = 2;
            suspendResult = this.h1n_1.c3(this.k1n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.lc_1 = 1;
            continue $sm;
          case 3:
            this.lc_1 = 4;
            continue $sm;
          case 4:
            if (!this.g1n_1.g1k_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.l1n_1 = until(0, 64).c();
              this.lc_1 = 5;
              continue $sm;
            } else {
              this.lc_1 = 9;
              continue $sm;
            }

            break;
          case 5:
            if (!this.l1n_1.d()) {
              this.lc_1 = 8;
              continue $sm;
            }

            this.m1n_1 = this.l1n_1.e();
            if (!this.g1n_1.g1k_1.ec((new Long(1, 0)).i5(this.m1n_1)).equals(new Long(0, 0))) {
              this.lc_1 = 6;
              suspendResult = this.h1n_1.c3(this.m1n_1 + this.g1n_1.h1k_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.lc_1 = 7;
              continue $sm;
            }

            break;
          case 6:
            this.lc_1 = 7;
            continue $sm;
          case 7:
            this.lc_1 = 5;
            continue $sm;
          case 8:
            this.lc_1 = 9;
            continue $sm;
          case 9:
            if (!this.g1n_1.f1k_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.n1n_1 = until(0, 64).c();
              this.lc_1 = 10;
              continue $sm;
            } else {
              this.lc_1 = 14;
              continue $sm;
            }

            break;
          case 10:
            if (!this.n1n_1.d()) {
              this.lc_1 = 13;
              continue $sm;
            }

            this.o1n_1 = this.n1n_1.e();
            if (!this.g1n_1.f1k_1.ec((new Long(1, 0)).i5(this.o1n_1)).equals(new Long(0, 0))) {
              this.lc_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.h1n_1.c3((this.o1n_1 + 64 | 0) + this.g1n_1.h1k_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.lc_1 = 12;
              continue $sm;
            }

            break;
          case 11:
            this.lc_1 = 12;
            continue $sm;
          case 12:
            this.lc_1 = 10;
            continue $sm;
          case 13:
            this.lc_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.oc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.mc_1 === 15) {
          throw e;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).q1n = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.g1n_1, completion);
    i.h1n_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.p1n($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_10();
    this.f1k_1 = upperSet;
    this.g1k_1 = lowerSet;
    this.h1k_1 = lowerBound;
    this.i1k_1 = belowBound;
  }
  protoOf(SnapshotIdSet).g = function (bit) {
    var offset = bit - this.h1k_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).i5(offset).ec(this.g1k_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        return !tmp_1.i5(offset - 64 | 0).ec(this.f1k_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.i1k_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp$ret$0 = binarySearch(tmp0_safe_receiver, bit) >= 0;
            tmp$ret$1 = tmp$ret$0;
            tmp_2 = tmp$ret$1;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).u1k = function (bit) {
    var offset = bit - this.h1k_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).i5(offset);
      if (this.g1k_1.ec(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f1k_1, this.g1k_1.fc(mask), this.h1k_1, this.i1k_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.i5(offset - 64 | 0);
        if (this.f1k_1.ec(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.f1k_1.fc(mask_0), this.g1k_1, this.h1k_1, this.i1k_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.g(bit)) {
            var newUpperSet = this.f1k_1;
            var newLowerSet = this.g1k_1;
            var newLowerBound = this.h1k_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance_0();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance_0();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  var tmp$ret$2;
                  // Inline function 'kotlin.apply' call
                  var tmp$ret$0;
                  // Inline function 'kotlin.collections.mutableListOf' call
                  tmp$ret$0 = ArrayList_init_$Create$();
                  var tmp0_apply = tmp$ret$0;
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.i1k_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$1;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var indexedObject = tmp0_safe_receiver;
                    var inductionVariable = 0;
                    var last = indexedObject.length;
                    while (inductionVariable < last) {
                      var element = indexedObject[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      tmp0_apply.a(element);
                    }
                    tmp$ret$1 = Unit_getInstance();
                  }
                  tmp$ret$2 = tmp0_apply;
                  newBelowBound = tmp$ret$2;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance_0();
                var tmp1_repeat = 64;
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < tmp1_repeat)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.ec((new Long(1, 0)).i5(index)).equals(new Long(0, 0))) {
                      newBelowBound.a(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < tmp1_repeat);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance_0();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.i1k_1 : tmp1_elvis_lhs)).u1k(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.i1k_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.f1k_1, this.g1k_1, this.h1k_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            var tmp$ret$8;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp$ret$5;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$4 = array;
            tmp$ret$5 = tmp$ret$4;
            var tmp_9 = tmp$ret$5;
            var tmp$ret$7;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$6;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$6 = newBelowBound_0;
            tmp$ret$7 = tmp$ret$6;
            arrayCopy(tmp_9, tmp$ret$7, 0, 0, insertLocation);
            tmp$ret$8 = newBelowBound_0;
            var tmp$ret$13;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp2_copyInto = insertLocation + 1 | 0;
            var tmp3_copyInto = newSize - 1 | 0;
            var tmp$ret$10;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$9;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$9 = array;
            tmp$ret$10 = tmp$ret$9;
            var tmp_10 = tmp$ret$10;
            var tmp$ret$12;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$11;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$11 = newBelowBound_0;
            tmp$ret$12 = tmp$ret$11;
            arrayCopy(tmp_10, tmp$ret$12, tmp2_copyInto, insertLocation, tmp3_copyInto);
            tmp$ret$13 = newBelowBound_0;
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.f1k_1, this.g1k_1, this.h1k_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).j1k = function (bit) {
    var offset = bit - this.h1k_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).i5(offset);
      if (!this.g1k_1.ec(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f1k_1, this.g1k_1.ec(mask.dc()), this.h1k_1, this.i1k_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.i5(offset - 64 | 0);
        if (!this.f1k_1.ec(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.f1k_1.ec(mask_0.dc()), this.g1k_1, this.h1k_1, this.i1k_1);
        }
      } else {
        if (offset < 0) {
          var array = this.i1k_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.f1k_1, this.g1k_1, this.h1k_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                var tmp$ret$4;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp$ret$1;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$0;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$0 = array;
                tmp$ret$1 = tmp$ret$0;
                var tmp_2 = tmp$ret$1;
                var tmp$ret$3;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$2;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$2 = newBelowBound;
                tmp$ret$3 = tmp$ret$2;
                arrayCopy(tmp_2, tmp$ret$3, 0, 0, location);
                tmp$ret$4 = newBelowBound;
              }
              if (location < newSize) {
                var tmp$ret$9;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = location + 1 | 0;
                var tmp1_copyInto = newSize + 1 | 0;
                var tmp$ret$6;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$5;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$5 = array;
                tmp$ret$6 = tmp$ret$5;
                var tmp_3 = tmp$ret$6;
                var tmp$ret$8;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$7;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$7 = newBelowBound;
                tmp$ret$8 = tmp$ret$7;
                arrayCopy(tmp_3, tmp$ret$8, location, tmp0_copyInto, tmp1_copyInto);
                tmp$ret$9 = newBelowBound;
              }
              return new SnapshotIdSet(this.f1k_1, this.g1k_1, this.h1k_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).z1k = function (bits) {
    if (bits === Companion_getInstance_10().r1k_1)
      return this;
    if (this === Companion_getInstance_10().r1k_1)
      return Companion_getInstance_10().r1k_1;
    var tmp;
    if (bits.h1k_1 === this.h1k_1 ? bits.i1k_1 === this.i1k_1 : false) {
      tmp = new SnapshotIdSet(this.f1k_1.ec(bits.f1k_1.dc()), this.g1k_1.ec(bits.g1k_1.dc()), this.h1k_1, this.i1k_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        tmp$ret$0 = tmp0__anonymous__q1qw7t.j1k(element);
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).b1l = function (bits) {
    if (bits === Companion_getInstance_10().r1k_1)
      return this;
    if (this === Companion_getInstance_10().r1k_1)
      return bits;
    var tmp;
    if (bits.h1k_1 === this.h1k_1 ? bits.i1k_1 === this.i1k_1 : false) {
      tmp = new SnapshotIdSet(this.f1k_1.fc(bits.f1k_1), this.g1k_1.fc(bits.g1k_1), this.h1k_1, this.i1k_1);
    } else {
      var tmp_0;
      if (this.i1k_1 == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp0__anonymous__q1qw7t = accumulator;
          tmp$ret$0 = tmp0__anonymous__q1qw7t.u1k(element);
          accumulator = tmp$ret$0;
        }
        tmp$ret$1 = accumulator;
        tmp_0 = tmp$ret$1;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp1__anonymous__uwfjfc = accumulator_0;
          tmp$ret$2 = tmp1__anonymous__uwfjfc.u1k(element_0);
          accumulator_0 = tmp$ret$2;
        }
        tmp$ret$3 = accumulator_0;
        tmp_0 = tmp$ret$3;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).c = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).c();
  };
  protoOf(SnapshotIdSet).a1m = function (default_0) {
    var belowBound = this.i1k_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.g1k_1.equals(new Long(0, 0)))
      return this.h1k_1 + lowestBitOf(this.g1k_1) | 0;
    if (!this.f1k_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.h1k_1 + 64 | 0) + lowestBitOf(this.f1k_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp + ' [' + fastJoinToString(tmp$ret$2) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.ec(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.f5(32);
    }
    if (b.ec(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.f5(16);
    }
    if (b.ec(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.f5(8);
    }
    if (b.ec(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.f5(4);
    }
    if (!b.ec(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.ec(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.ec(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.ec(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.u1n_1 = list;
    this.v1n_1 = 0;
  }
  protoOf(StateListStateRecord).d1d = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp = this;
    tmp.u1n_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).u1n_1;
    this.v1n_1 = value.v1n_1;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(StateListStateRecord).e1d = function () {
    return new StateListStateRecord(this.u1n_1);
  };
  function SnapshotStateList() {
    this.w1n_1 = new StateListStateRecord(persistentListOf());
    this.x1n_1 = 0;
  }
  protoOf(SnapshotStateList).h1d = function () {
    return this.w1n_1;
  };
  protoOf(SnapshotStateList).i1d = function (value) {
    value.p1k_1 = this.w1n_1;
    var tmp = this;
    tmp.w1n_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).y1n = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.w1n_1;
    var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = tmp1__anonymous__uwfjfc.v1n_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(SnapshotStateList).z1n = function () {
    var tmp = this.w1n_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).f = function () {
    return this.z1n().u1n_1.f();
  };
  protoOf(SnapshotStateList).j2 = function (element) {
    return this.z1n().u1n_1.i(element);
  };
  protoOf(SnapshotStateList).i = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.j2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).k2 = function (elements) {
    return this.z1n().u1n_1.u(elements);
  };
  protoOf(SnapshotStateList).u = function (elements) {
    return this.k2(elements);
  };
  protoOf(SnapshotStateList).g = function (index) {
    return this.z1n().u1n_1.g(index);
  };
  protoOf(SnapshotStateList).a1o = function (element) {
    return this.z1n().u1n_1.j(element);
  };
  protoOf(SnapshotStateList).j = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.a1o((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).h = function () {
    return this.z1n().u1n_1.h();
  };
  protoOf(SnapshotStateList).c = function () {
    return this.d1e();
  };
  protoOf(SnapshotStateList).b1o = function (element) {
    return this.z1n().u1n_1.i1(element);
  };
  protoOf(SnapshotStateList).i1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.b1o((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).d1e = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).j1 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).c14 = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1n_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.v1n_1;
      oldList = current_0.u1n_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.a(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1n_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().gp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.v1n_1 === currentModification) {
        tmp3__anonymous__ufb84q.u1n_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.v1n_1;
        tmp0_this.v1n_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  protoOf(SnapshotStateList).a = function (element) {
    return this.c14((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).c1o = function (index, element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1n_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.v1n_1;
      oldList = current_0.u1n_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.e1e(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1n_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().gp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.v1n_1 === currentModification) {
        tmp3__anonymous__ufb84q.u1n_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.v1n_1;
        tmp0_this.v1n_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return Unit_getInstance();
  };
  protoOf(SnapshotStateList).q6 = function (index, element) {
    return this.c1o(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).d1o = function (elements) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1n_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.v1n_1;
      oldList = current_0.u1n_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.t(elements);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1n_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().gp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.v1n_1 === currentModification) {
        tmp3__anonymous__ufb84q.u1n_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.v1n_1;
        tmp0_this.v1n_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  protoOf(SnapshotStateList).t = function (elements) {
    return this.d1o(elements);
  };
  protoOf(SnapshotStateList).d6 = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.w1n_1;
    var tmp2_writable = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized_0 = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_9().gp();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
    tmp3__anonymous__ufb84q.u1n_1 = persistentListOf();
    var tmp0_this = tmp3__anonymous__ufb84q;
    var tmp1 = tmp0_this.v1n_1;
    tmp0_this.v1n_1 = tmp1 + 1 | 0;
    tmp$ret$0 = tmp1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
    tmp$ret$5 = tmp1_also;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
  };
  protoOf(SnapshotStateList).t1d = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1n_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.v1n_1;
      oldList = current_0.u1n_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.a6(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1n_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().gp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.v1n_1 === currentModification) {
        tmp3__anonymous__ufb84q.u1n_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.v1n_1;
        tmp0_this.v1n_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  protoOf(SnapshotStateList).a6 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.t1d((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).z2 = function (index) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1n_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.v1n_1;
      oldList = current_0.u1n_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.z2(index);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1n_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().gp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.v1n_1 === currentModification) {
        tmp3__anonymous__ufb84q.u1n_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.v1n_1;
        tmp0_this.v1n_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  protoOf(SnapshotStateList).e1o = function (index, element) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1n_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.v1n_1;
      oldList = current_0.u1n_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.z5(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1n_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_9().gp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.v1n_1 === currentModification) {
        tmp3__anonymous__ufb84q.u1n_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.v1n_1;
        tmp0_this.v1n_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  protoOf(SnapshotStateList).z5 = function (index, element) {
    return this.e1o(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.f1o_1.y1n() === $this.h1o_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.f1o_1 = list;
    this.g1o_1 = offset - 1 | 0;
    this.h1o_1 = this.f1o_1.y1n();
  }
  protoOf(StateListIterator).b1 = function () {
    return this.g1o_1 >= 0;
  };
  protoOf(StateListIterator).c1 = function () {
    return this.g1o_1 + 1 | 0;
  };
  protoOf(StateListIterator).d1 = function () {
    validateModification(this);
    validateRange(this.g1o_1, this.f1o_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.f1o_1.g(this.g1o_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.g1o_1;
    tmp0_this.g1o_1 = tmp1 - 1 | 0;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(StateListIterator).d = function () {
    return this.g1o_1 < (this.f1o_1.f() - 1 | 0);
  };
  protoOf(StateListIterator).e = function () {
    validateModification(this);
    var newIndex = this.g1o_1 + 1 | 0;
    validateRange(newIndex, this.f1o_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.f1o_1.g(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.g1o_1 = newIndex;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(StateListIterator).a3 = function () {
    validateModification(this);
    this.f1o_1.z2(this.g1o_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.g1o_1;
    tmp0_this.g1o_1 = tmp1 - 1 | 0;
    this.h1o_1 = this.f1o_1.y1n();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$mtya1n_8tc451() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (properties_initialized_SnapshotStateList_kt_lcuarf) {
    } else {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (properties_initialized_SnapshotStateMap_kt_9i73ip) {
    } else {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (properties_initialized_InspectionTables_kt_tgdbmt) {
    } else {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.f14_1 = value;
    this.g14_1 = 8;
  }
  protoOf(AtomicReference).aj = function () {
    return this.f14_1;
  };
  protoOf(AtomicReference).b15 = function (value) {
    this.f14_1 = value;
  };
  protoOf(AtomicReference).h14 = function (value) {
    var oldValue = this.f14_1;
    this.f14_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).p15 = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.f14_1)) {
      this.f14_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = instance;
    var hashCode = tmp$ret$0['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp0_subject = typeof instance;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $safe) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $safe.h3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1o_1 = _this__u8e3s4;
    this.r1o_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 2;
            this.lc_1 = 1;
            var tmp0__anonymous__q1qw7t = this;
            var safe = SafeContinuation_init_$Create$(intercepted(tmp0__anonymous__q1qw7t));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.r1o_1, safe));
            ;
            suspendResult = returnIfSuspended(safe.n9(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).jq = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function createSnapshotMutableState(value, policy) {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new SnapshotMutableStateImpl(value, policy);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (properties_initialized_ActualJs_js_kt_azbr3k) {
    } else {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
    Trace_instance = this;
  }
  protoOf(Trace).yz = function (name) {
    return null;
  };
  protoOf(Trace).k10 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    if (Trace_instance == null)
      new Trace();
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    var tmp0_unsafeCast = tmp$ret$1(composer, 1);
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function invokeComposable$composable(composer, composable) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$1(composer, 1);
  }
  function trackWrite($this) {
    if ($this.k1j_1) {
      var scope = $this.m1j_1;
      if (!(scope == null)) {
        scope.c16();
        $this.m1j_1 = null;
      }
      var scopes = $this.n1j_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.f();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.g(index);
            item.c16();
          }
           while (inductionVariable < last);
        scopes.d6();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.k1j_1) {
      var scope = composer.i13();
      if (!(scope == null)) {
        composer.l13(scope);
        var lastScope = $this.m1j_1;
        if (replacableWith(lastScope, scope)) {
          $this.m1j_1 = scope;
        } else {
          var lastScopes = $this.n1j_1;
          if (lastScopes == null) {
            var tmp$ret$0;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$0 = ArrayList_init_$Create$();
            var newScopes = tmp$ret$0;
            $this.n1j_1 = newScopes;
            newScopes.a(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.f();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.g(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.z5(index, scope);
                  return Unit_getInstance();
                }
              }
               while (inductionVariable < last);
            lastScopes.a(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.l11(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.s1o($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.j1j_1 = key;
    this.k1j_1 = tracked;
    this.l1j_1 = null;
    this.m1j_1 = null;
    this.n1j_1 = null;
  }
  protoOf(ComposableLambdaImpl).o1j = function (block) {
    if (!equals(this.l1j_1, block)) {
      var oldBlockNull = this.l1j_1 == null;
      this.l1j_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).l11 = function (c, changed) {
    var c_0 = c.w12(this.j1j_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.fv(this) ? differentBits(0) : sameBits(0));
    var tmp = this.l1j_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.x12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w16(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).s1o = function (p1, c, changed) {
    var c_0 = c.w12(this.j1j_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.fv(this) ? differentBits(1) : sameBits(1));
    var tmp = this.l1j_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.x12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w16(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function IntMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.yv_1 = tmp$ret$0;
  }
  protoOf(IntMap).g = function (key) {
    return this.yv_1.z1(key);
  };
  protoOf(IntMap).xy = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.yv_1;
    tmp0_set.v2(key, value);
  };
  protoOf(IntMap).d6 = function () {
    this.yv_1.d6();
  };
  //region block: post-declaration
  protoOf(OffsetApplier).hp = onBeginChanges;
  protoOf(OffsetApplier).ip = onEndChanges;
  protoOf(AbstractApplier).hp = onBeginChanges;
  protoOf(AbstractApplier).ip = onEndChanges;
  protoOf(BroadcastFrameClock).l1 = get_key;
  protoOf(BroadcastFrameClock).s3 = get;
  protoOf(BroadcastFrameClock).y3 = fold;
  protoOf(BroadcastFrameClock).x3 = minusKey;
  protoOf(BroadcastFrameClock).z3 = plus;
  protoOf(StructuralEqualityPolicy).x1c = merge;
  protoOf(SnapshotStateList).j1d = mergeRecords;
  protoOf(MonotonicClockImpl).l1 = get_key;
  protoOf(MonotonicClockImpl).s3 = get;
  protoOf(MonotonicClockImpl).y3 = fold;
  protoOf(MonotonicClockImpl).x3 = minusKey;
  protoOf(MonotonicClockImpl).z3 = plus;
  //endregion
  //region block: init
  movableContentKey = 126665345;
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = illegalDecoyCallException;
  _.$_$.d = AbstractApplier;
  _.$_$.e = onBeginChanges;
  _.$_$.f = onEndChanges;
  _.$_$.g = CompositionLocalProvider$composable;
  _.$_$.h = ControlledComposition;
  _.$_$.i = get_DefaultMonotonicFrameClock;
  _.$_$.j = DisposableEffect$composable_1;
  _.$_$.k = DisposableEffect$composable_0;
  _.$_$.l = DisposableEffect$composable;
  _.$_$.m = LaunchedEffect$composable;
  _.$_$.n = Recomposer;
  _.$_$.o = compositionLocalOf;
  _.$_$.p = invalidApplier;
  _.$_$.q = isTraceInProgress;
  _.$_$.r = mutableStateListOf;
  _.$_$.s = mutableStateOf;
  _.$_$.t = sourceInformationMarkerEnd;
  _.$_$.u = sourceInformationMarkerStart;
  _.$_$.v = sourceInformation;
  _.$_$.w = staticCompositionLocalOf;
  _.$_$.x = traceEventEnd;
  _.$_$.y = traceEventStart;
  _.$_$.z = updateChangedFlags;
  _.$_$.a1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.b1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.c1 = _Updater___init__impl__rbfxm8;
  _.$_$.d1 = Updater__set_impl_v7kwss;
  _.$_$.e1 = Companion_getInstance_9;
  _.$_$.f1 = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime.js.map
