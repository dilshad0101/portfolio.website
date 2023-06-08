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
  var protoOf = kotlin_kotlin.$_$.q5;
  var interfaceMeta = kotlin_kotlin.$_$.g5;
  var VOID = kotlin_kotlin.$_$.u7;
  var setMetadataFor = kotlin_kotlin.$_$.r5;
  var Unit_getInstance = kotlin_kotlin.$_$.s1;
  var toString = kotlin_kotlin.$_$.s5;
  var classMeta = kotlin_kotlin.$_$.w4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.e7;
  var isObject = kotlin_kotlin.$_$.k5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var Companion_getInstance = kotlin_kotlin.$_$.r1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k1;
  var createFailure = kotlin_kotlin.$_$.i7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r7;
  var intercepted = kotlin_kotlin.$_$.b4;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.j4;
  var fold = kotlin_kotlin.$_$.i4;
  var minusKey = kotlin_kotlin.$_$.k4;
  var plus = kotlin_kotlin.$_$.m4;
  var isInterface = kotlin_kotlin.$_$.j5;
  var equals = kotlin_kotlin.$_$.z4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var fill = kotlin_kotlin.$_$.u2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var rotateLeft = kotlin_kotlin.$_$.n7;
  var hashCode = kotlin_kotlin.$_$.e5;
  var Enum = kotlin_kotlin.$_$.y6;
  var emptyList = kotlin_kotlin.$_$.s2;
  var toMutableList = kotlin_kotlin.$_$.v3;
  var rotateRight = kotlin_kotlin.$_$.o7;
  var sortWith = kotlin_kotlin.$_$.r3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.t7;
  var compareValues = kotlin_kotlin.$_$.x3;
  var objectMeta = kotlin_kotlin.$_$.p5;
  var IllegalStateException = kotlin_kotlin.$_$.b7;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.s4;
  var defineProp = kotlin_kotlin.$_$.y4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w;
  var lazy = kotlin_kotlin.$_$.k7;
  var firstOrNull = kotlin_kotlin.$_$.w2;
  var compareTo = kotlin_kotlin.$_$.x4;
  var KProperty1 = kotlin_kotlin.$_$.a6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c5;
  var isArray = kotlin_kotlin.$_$.h5;
  var Set = kotlin_kotlin.$_$.i2;
  var ensureNotNull = kotlin_kotlin.$_$.j7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var plus_0 = kotlin_kotlin.$_$.m3;
  var Exception = kotlin_kotlin.$_$.a7;
  var fillArrayVal = kotlin_kotlin.$_$.a5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.s7;
  var Element = kotlin_kotlin.$_$.l4;
  var getStringHashCode = kotlin_kotlin.$_$.d5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.n4;
  var returnIfSuspended = kotlin_kotlin.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z3;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.q7;
  var Collection = kotlin_kotlin.$_$.b2;
  var addAll = kotlin_kotlin.$_$.k2;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var toList = kotlin_kotlin.$_$.t3;
  var flatten = kotlin_kotlin.$_$.y2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.p;
  var CancellationException = kotlin_kotlin.$_$.y3;
  var addSuppressed = kotlin_kotlin.$_$.g7;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Long = kotlin_kotlin.$_$.c7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.p3;
  var arrayCopy = kotlin_kotlin.$_$.l2;
  var fill_0 = kotlin_kotlin.$_$.v2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.p1;
  var first = kotlin_kotlin.$_$.x2;
  var last = kotlin_kotlin.$_$.g3;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.s;
  var copyOf = kotlin_kotlin.$_$.q2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var copyOf_0 = kotlin_kotlin.$_$.p2;
  var Map = kotlin_kotlin.$_$.e2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var AbstractList = kotlin_kotlin.$_$.t1;
  var List = kotlin_kotlin.$_$.c2;
  var coerceAtMost = kotlin_kotlin.$_$.u5;
  var arrayIterator = kotlin_kotlin.$_$.r4;
  var AbstractMutableList = kotlin_kotlin.$_$.w1;
  var MutableIterable = kotlin_kotlin.$_$.f2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var indexOf = kotlin_kotlin.$_$.b3;
  var lastIndexOf = kotlin_kotlin.$_$.f3;
  var AbstractMap = kotlin_kotlin.$_$.u1;
  var AbstractMutableMap = kotlin_kotlin.$_$.x1;
  var MutableMap = kotlin_kotlin.$_$.h2;
  var MutableEntry = kotlin_kotlin.$_$.g2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var AbstractMutableSet = kotlin_kotlin.$_$.y1;
  var AbstractMutableCollection = kotlin_kotlin.$_$.v1;
  var Entry = kotlin_kotlin.$_$.d2;
  var AbstractSet = kotlin_kotlin.$_$.z1;
  var objectCreate = kotlin_kotlin.$_$.o5;
  var until = kotlin_kotlin.$_$.x5;
  var step = kotlin_kotlin.$_$.w5;
  var countOneBits = kotlin_kotlin.$_$.h7;
  var takeLowestOneBit = kotlin_kotlin.$_$.p7;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var longArray = kotlin_kotlin.$_$.l5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var Char = kotlin_kotlin.$_$.x6;
  var isCharSequence = kotlin_kotlin.$_$.i5;
  var contains = kotlin_kotlin.$_$.o2;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.q3;
  var SequenceScope = kotlin_kotlin.$_$.b6;
  var intArrayIterator = kotlin_kotlin.$_$.f5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.q1;
  var toIntArray = kotlin_kotlin.$_$.s3;
  var sequence = kotlin_kotlin.$_$.c6;
  var anyToString = kotlin_kotlin.$_$.q4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n2;
  var println = kotlin_kotlin.$_$.p4;
  var printStackTrace = kotlin_kotlin.$_$.m7;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.c;
  var toDuration = kotlin_kotlin.$_$.w6;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.i1;
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
    return this.r12(value);
  }
  function changed_0(value) {
    return this.s12(value);
  }
  function changedInstance(value) {
    return this.iv(value);
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
  setMetadataFor(ProduceStateScope, 'ProduceStateScope', interfaceMeta, VOID, [CoroutineScope_0], VOID, VOID, [1]);
  setMetadataFor($awaitDisposeCOROUTINE$0, '$awaitDisposeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ProduceStateScopeImpl, 'ProduceStateScopeImpl', classMeta, VOID, [ProduceStateScope], VOID, VOID, [1]);
  setMetadataFor(produceState$composable$slambda, 'produceState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$2, '$awaitWorkAvailableCOROUTINE$2', classMeta, CoroutineImpl);
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
  setMetadataFor($withFrameNanosCOROUTINE$5, '$withFrameNanosCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.sp_1 = applier;
    this.tp_1 = offset;
    this.up_1 = 0;
  }
  protoOf(OffsetApplier).jp = function () {
    return this.sp_1.jp();
  };
  protoOf(OffsetApplier).mp = function (node) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.up_1;
    tmp0_this.up_1 = tmp1 + 1 | 0;
    this.sp_1.mp(node);
  };
  protoOf(OffsetApplier).np = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.up_1 > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.up_1;
    tmp0_this.up_1 = tmp1 - 1 | 0;
    this.sp_1.np();
  };
  protoOf(OffsetApplier).op = function (index, instance) {
    this.sp_1.op(index + (this.up_1 === 0 ? this.tp_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).pp = function (index, instance) {
    this.sp_1.pp(index + (this.up_1 === 0 ? this.tp_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).qp = function (index, count) {
    this.sp_1.qp(index + (this.up_1 === 0 ? this.tp_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).rp = function (from, to, count) {
    var effectiveOffset = this.up_1 === 0 ? this.tp_1 : 0;
    this.sp_1.rp(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.vp_1 = root;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.wp_1 = tmp$ret$0;
    this.xp_1 = this.vp_1;
    this.yp_1 = 8;
  }
  protoOf(AbstractApplier).zp = function (_set____db54di) {
    this.xp_1 = _set____db54di;
  };
  protoOf(AbstractApplier).jp = function () {
    return this.xp_1;
  };
  protoOf(AbstractApplier).aq = function (node) {
    this.wp_1.a(this.jp());
    this.zp(node);
  };
  protoOf(AbstractApplier).mp = function (node) {
    return this.aq((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).np = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.wp_1;
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
    this.zp(this.wp_1.b3(this.wp_1.f() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.bq_1 = onFrame;
    this.cq_1 = continuation;
  }
  protoOf(FrameAwaiter).dq = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      tmp$ret$0 = this.bq_1(timeNanos);
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
    this.cq_1.j3(tmp$ret$3);
  };
  function fail($this, cause) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.fq_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.gq_1 == null))
      return Unit_getInstance();
    $this.gq_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.hq_1;
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
        var tmp1_resumeWithException = item.cq_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp1_resumeWithException.j3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable <= last);
    $this.hq_1.d6();
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.fq_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.hq_1;
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
    this.eq_1 = onNewAwaiters;
    this.fq_1 = createSynchronizedObject();
    this.gq_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.hq_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.iq_1 = tmp$ret$1;
    this.jq_1 = 8;
  }
  protoOf(BroadcastFrameClock).kq = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.fq_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.hq_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(BroadcastFrameClock).lq = function (timeNanos) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.fq_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.hq_1;
    this.hq_1 = this.iq_1;
    this.iq_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.g(i).dq(timeNanos);
      }
       while (inductionVariable < last);
    toResume.d6();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(BroadcastFrameClock).mq = function (onFrame, $completion) {
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fh();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this.fq_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.gq_1;
      if (!(cause == null)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.j3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.hq_1;
      tmp$ret$3 = !tmp1_isNotEmpty.h();
      var hadAwaiters = tmp$ret$3;
      var tmp = this.hq_1;
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
      cancellable.hg(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.eq_1 == null) : false) {
        try {
          this.eq_1();
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
    tmp$ret$7 = cancellable.tf();
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
    var tmp0_iterator = _this__u8e3s4.lr();
    tmp$ret$0 = tmp0_iterator;
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.d()) {
      var slot = tmp0_iterator_0.e();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.mr(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.nr(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        var composition = slot.pr_1;
        if (!(composition == null)) {
          composition.is_1 = true;
          slot.hi();
        }
      }
    }
    _this__u8e3s4.qs();
  }
  function startRoot($this) {
    $this.yt_1 = $this.ts_1.bv();
    startGroup($this, 100);
    $this.ss_1.dv();
    $this.lt_1 = $this.ss_1.ev();
    $this.ot_1.hv(asInt($this.nt_1));
    $this.nt_1 = $this.iv($this.lt_1);
    $this.cu_1 = null;
    if (!$this.gt_1) {
      $this.gt_1 = $this.ss_1.jv();
    }
    var tmp0_safe_receiver = resolveCompositionLocal($this, get_LocalInspectionTables(), $this.lt_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.ts_1);
      $this.ss_1.kv(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    startGroup($this, $this.ss_1.lv());
  }
  function endRoot($this) {
    endGroup($this);
    $this.ss_1.mv();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.yt_1.zv();
    $this.ht_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.ys_1.d6();
    $this.bt_1.d6();
    $this.dt_1.d6();
    $this.kt_1.d6();
    $this.ot_1.d6();
    $this.mt_1.d6();
    if (!$this.yt_1.sv_1) {
      $this.yt_1.zv();
    }
    if (!$this.au_1.jr_1) {
      $this.au_1.zv();
    }
    createFreshInsertTable($this);
    $this.hu_1 = 0;
    $this.rt_1 = 0;
    $this.it_1 = false;
    $this.gu_1 = false;
    $this.pt_1 = false;
    $this.wt_1 = false;
    $this.ht_1 = false;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_2().cw_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_2().cw_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    var tmp0_this = $this;
    tmp0_this.ct_1 = tmp0_this.ct_1 + $this.yt_1.fw() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.cu_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.yt_1.vv_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.gu_1 ? $this.bu_1 : false) {
      var current = $this.au_1.ir_1;
      while (current > 0) {
        if ($this.au_1.iw(current) === 202 ? equals($this.au_1.hw(current), get_compositionLocalMap()) : false) {
          var tmp = $this.au_1.gw(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
          $this.cu_1 = providers;
          return providers;
        }
        current = $this.au_1.jw(current);
      }
    }
    if ($this.yt_1.f() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.yt_1.iw(current_0) === 202 ? equals($this.yt_1.hw(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.mt_1.g(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.yt_1.gw(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.cu_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.yt_1.jw(current_0);
      }
    }
    $this.cu_1 = $this.lt_1;
    return $this.lt_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.kw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.s2(currentProviders);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h7();
    var providerScope = tmp$ret$1;
    startGroup_0($this, 204, get_providerMaps());
    $this.iv(providerScope);
    $this.iv(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function resolveCompositionLocal($this, key, scope) {
    var tmp;
    if (contains_0(scope, key)) {
      tmp = getValueOf(scope, key);
    } else {
      tmp = key.lw_1.q1();
    }
    return tmp;
  }
  function ensureWriter($this) {
    if ($this.au_1.jr_1) {
      $this.au_1 = $this.zt_1.ow();
      $this.au_1.pw();
      $this.bu_1 = false;
      $this.cu_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.au_1.jr_1);
    $this.zt_1 = new SlotTable();
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.zt_1.ow();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.zv();
    tmp$ret$0 = tmp0_also;
    tmp.au_1 = tmp$ret$0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.yt_1.sw();
    } else {
      if (!(data == null) ? !($this.yt_1.qw() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.yt_1.rw();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    tmp$ret$0 = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().cw_1));
    var isNode = tmp$ret$0;
    if ($this.gu_1) {
      $this.yt_1.tw();
      var startIndex = $this.au_1.hr_1;
      if (isNode) {
        $this.au_1.xw(key, Companion_getInstance_1().uw_1);
      } else if (!(data == null)) {
        var tmp = $this.au_1;
        var tmp0_elvis_lhs = objectKey;
        tmp.ww(key, tmp0_elvis_lhs == null ? Companion_getInstance_1().uw_1 : tmp0_elvis_lhs, data);
      } else {
        var tmp_0 = $this.au_1;
        var tmp1_elvis_lhs = objectKey;
        tmp_0.vw(key, tmp1_elvis_lhs == null ? Companion_getInstance_1().uw_1 : tmp1_elvis_lhs);
      }
      var tmp2_safe_receiver = $this.zs_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.ex(insertKeyInfo, $this.at_1 - tmp2_safe_receiver.zw_1 | 0);
        tmp$ret$1 = tmp2_safe_receiver.fx(insertKeyInfo);
        tmp$ret$2 = tmp$ret$1;
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    var tmp_1;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    tmp$ret$3 = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().dw_1));
    if (!tmp$ret$3) {
      tmp_1 = $this.pt_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.zs_1 == null) {
      var slotKey = $this.yt_1.gx();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.yt_1.ix()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.zs_1 = new Pending($this.yt_1.hx(), $this.at_1);
      }
    }
    var pending = $this.zs_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.jx(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.fx(keyInfo);
        var location = keyInfo.ox_1;
        $this.at_1 = pending.rx(keyInfo) + pending.zw_1 | 0;
        var relativePosition = pending.sx(keyInfo);
        var currentRelativePosition = relativePosition - pending.ax_1 | 0;
        pending.tx(relativePosition, pending.ax_1);
        recordReaderMoving($this, location);
        $this.yt_1.ux(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.yt_1.tw();
        $this.gu_1 = true;
        $this.cu_1 = null;
        ensureWriter($this);
        $this.au_1.kx();
        var startIndex_0 = $this.au_1.hr_1;
        if (isNode) {
          $this.au_1.xw(key, Companion_getInstance_1().uw_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.au_1;
          var tmp3_elvis_lhs = objectKey;
          tmp_2.ww(key, tmp3_elvis_lhs == null ? Companion_getInstance_1().uw_1 : tmp3_elvis_lhs, data);
        } else {
          var tmp_3 = $this.au_1;
          var tmp4_elvis_lhs = objectKey;
          tmp_3.vw(key, tmp4_elvis_lhs == null ? Companion_getInstance_1().uw_1 : tmp4_elvis_lhs);
        }
        $this.eu_1 = $this.au_1.lx(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.ex(insertKeyInfo_0, $this.at_1 - pending.zw_1 | 0);
        pending.fx(insertKeyInfo_0);
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.at_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.ys_1.vx($this.zs_1);
    $this.zs_1 = newPending;
    $this.bt_1.hv($this.at_1);
    if (isNode)
      $this.at_1 = 0;
    $this.dt_1.hv($this.ct_1);
    $this.ct_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.ys_1.wx();
    if (!(previousPending == null) ? !inserting : false) {
      var tmp0_this = previousPending;
      var tmp1 = tmp0_this.ax_1;
      tmp0_this.ax_1 = tmp1 + 1 | 0;
    }
    $this.zs_1 = previousPending;
    $this.at_1 = $this.bt_1.wx() + expectedNodeCount | 0;
    $this.ct_1 = $this.dt_1.wx() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.gu_1) {
      var parent = $this.au_1.ir_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.au_1.iw(parent), $this.au_1.hw(parent), $this.au_1.gw(parent));
    } else {
      var parent_0 = $this.yt_1.vv_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.yt_1.iw(parent_0), $this.yt_1.hw(parent_0), $this.yt_1.gw(parent_0));
    }
    var expectedNodeCount = $this.ct_1;
    var pending = $this.zs_1;
    if (!(pending == null) ? pending.yw_1.f() > 0 : false) {
      var previous = pending.yw_1;
      var current = pending.xx();
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
          var deleteOffset = pending.rx(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.zw_1 | 0, previousInfo.px_1);
          pending.yx(previousInfo.ox_1, 0);
          recordReaderMoving($this, previousInfo.ox_1);
          $this.yt_1.ux(previousInfo.ox_1);
          recordDelete($this);
          $this.yt_1.fw();
          removeRange($this.jt_1, previousInfo.ox_1, previousInfo.ox_1 + $this.yt_1.zx(previousInfo.ox_1) | 0);
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
            var nodePosition = pending.rx(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.ay(currentInfo);
              recordMoveNode($this, nodePosition + pending.zw_1 | 0, nodeOffset + pending.zw_1 | 0, updatedCount);
              pending.by(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            var tmp2 = previousIndex;
            previousIndex = tmp2 + 1 | 0;
          }
          var tmp3 = currentIndex;
          currentIndex = tmp3 + 1 | 0;
          nodeOffset = nodeOffset + pending.ay(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.f() > 0) {
        recordReaderMoving($this, $this.yt_1.cy());
        $this.yt_1.pw();
      }
    }
    var removeIndex = $this.at_1;
    while (!$this.yt_1.dy()) {
      var startSlot = $this.yt_1.tv_1;
      recordDelete($this);
      var nodesToRemove = $this.yt_1.fw();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.jt_1, startSlot, $this.yt_1.tv_1);
    }
    var inserting = $this.gu_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.yt_1.fy();
      var parentGroup = $this.au_1.ir_1;
      $this.au_1.gy();
      if (!$this.yt_1.iy()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.au_1.hy();
        $this.au_1.zv();
        recordInsert($this, $this.eu_1);
        $this.gu_1 = false;
        if (!$this.ts_1.wi()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.yt_1.vv_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.yt_1.ey();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.wt_1;
    $this.wt_1 = true;
    var recomposed = false;
    var parent = $this.yt_1.vv_1;
    var end = parent + $this.yt_1.zx(parent) | 0;
    var recomposeIndex = $this.at_1;
    var recomposeCompoundKey = $this.hu_1;
    var oldGroupNodeCount = $this.ct_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.jt_1, $this.yt_1.tv_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.ky_1;
      removeLocation($this.jt_1, location);
      if (firstInRange_0.py()) {
        recomposed = true;
        $this.yt_1.ux(location);
        var newGroup = $this.yt_1.tv_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.at_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.hu_1 = compoundKeyOf($this, $this.yt_1.jw(newGroup), parent, recomposeCompoundKey);
        $this.cu_1 = null;
        firstInRange_0.jy_1.ny($this);
        $this.cu_1 = null;
        $this.yt_1.oy(parent);
      } else {
        $this.vt_1.vx(firstInRange_0.jy_1);
        firstInRange_0.jy_1.my();
        $this.vt_1.wx();
      }
      firstInRange_0 = firstInRange($this.jt_1, $this.yt_1.tv_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.yt_1.pw();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.at_1 = recomposeIndex + parentGroupNodes | 0;
      $this.ct_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.hu_1 = recomposeCompoundKey;
    $this.wt_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.ys_1.f() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.ys_1.qy(pendingIndex);
            if (!(pending == null) ? pending.yx(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.yt_1.vv_1;
        } else {
          if ($this.yt_1.ry(current))
            break $l$loop_0;
          current = $this.yt_1.jw(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.yt_1.jw(group);
    $l$loop: while (!(anchorGroup === recomposeGroup)) {
      if ($this.yt_1.ry(anchorGroup))
        break $l$loop;
      anchorGroup = $this.yt_1.jw(anchorGroup);
    }
    var index = $this.yt_1.ry(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.yt_1.sy(group) | 0) | 0;
    loop: while (index < nodeIndexLimit) {
      if (current === groupLocation)
        break loop;
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.yt_1.zx(current) | 0;
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
      var tmp0_safe_receiver = $this.ft_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp$ret$0 = tmp0_safe_receiver.b2(group);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.et_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.yt_1.sy(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.ft_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.ft_1 = newCounts;
          tmp$ret$0 = newCounts;
          tmp$ret$1 = tmp$ret$0;
          tmp = tmp$ret$1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.x2(group, count);
      } else {
        var tmp1_elvis_lhs = $this.et_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          var tmp$ret$3;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.yt_1.f());
          fill(newCounts_0, -1);
          $this.et_1 = newCounts_0;
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
    $this.et_1 = null;
    $this.ft_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.yt_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.ry(current)) {
        recordUp($this);
      }
      current = reader.jw(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.yt_1.jw(group), nearestCommonRoot);
      if ($this.yt_1.ry(group)) {
        recordDown($this, nodeAt($this.yt_1, $this, group));
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
      var groupKey = groupCompoundKeyPart($this.yt_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.yt_1.jw(group), recomposeGroup, recomposeKey);
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
    if (_this__u8e3s4.ty(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.hw(group);
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
          tmp_1 = tmp0_safe_receiver.h4_1;
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
      var tmp0_let = _this__u8e3s4.iw(group);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.gw(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp$ret$2 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().uw_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
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
    $this.ct_1 = $this.yt_1.uy();
    $this.yt_1.pw();
  }
  function addRecomposeScope($this) {
    if ($this.gu_1) {
      var tmp = $this.xs_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.vt_1.vx(scope);
      $this.vy(scope);
      scope.xy($this.tt_1);
    } else {
      var invalidation = removeLocation($this.jt_1, $this.yt_1.vv_1);
      var slot = $this.yt_1.e();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().uw_1)) {
        var tmp_1 = $this.xs_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.vy(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.wy(!(invalidation == null));
      $this.vt_1.vx(scope_0);
      scope_0.xy($this.tt_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.yy(get_movableContentKey(), content);
    $this.iv(parameter);
    var savedCompoundKeyHash = $this.hu_1;
    try {
      $this.hu_1 = get_movableContentKey();
      if ($this.gu_1) {
        $this.au_1.zy();
      }
      var providersChanged = $this.gu_1 ? false : !equals($this.yt_1.qw(), locals);
      if (providersChanged) {
        $this.mt_1.az($this.yt_1.tv_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_2().cw_1, locals);
      if ($this.gu_1 ? !force : false) {
        $this.bu_1 = true;
        $this.cu_1 = null;
        var anchor = $this.au_1.lx($this.au_1.jw($this.au_1.ir_1));
        var reference = new MovableContentStateReference(content, parameter, $this.xs_1, $this.zt_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.ss_1.bz(reference);
      } else {
        var savedProvidersInvalid = $this.nt_1;
        $this.nt_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(694380496, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.nt_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.hu_1 = savedCompoundKeyHash;
      $this.cz();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp$ret$13;
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.ws_1;
      var savedChanges = $this.vs_1;
      try {
        $this.vs_1 = tmp0_withChanges;
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
            var to = item.v2();
            var from = item.w2();
            var anchor = to.hz_1;
            var location = to.gz_1.lz(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.gz_1;
              if (equals(toSlotTable, $this.zt_1)) {
                createFreshInsertTable($this);
              }
              var tmp$ret$4;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp1_read = to.gz_1;
              var tmp$ret$3;
              // Inline function 'kotlin.let' call
              var tmp0_let = tmp1_read.bv();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$2;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.ux(location);
                $this.ku_1 = location;
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
                tmp0_let.zv();
              }
              tmp$ret$2 = tmp;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = tmp$ret$3;
            } else {
              var resolvedState = $this.ss_1.mz(from);
              var tmp0_safe_receiver = resolvedState;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nz_1;
              var fromTable = tmp1_elvis_lhs == null ? from.gz_1 : tmp1_elvis_lhs;
              var tmp2_safe_receiver = resolvedState;
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.nz_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.lx(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.hz_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              var tmp$ret$5;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$5 = !nodesToInsert.h();
              if (tmp$ret$5) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.gz_1, $this.ts_1)) {
                  var group = $this.ts_1.lz(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.f() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              var tmp$ret$12;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp$ret$11;
              // Inline function 'kotlin.let' call
              var tmp2_let = fromTable.bv();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$10;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.yt_1;
                  var savedCountOverrides = $this.et_1;
                  $this.et_1 = null;
                  try {
                    $this.yt_1 = tmp2_let;
                    var newLocation = fromTable.lz(fromAnchor);
                    tmp2_let.ux(newLocation);
                    $this.ku_1 = newLocation;
                    var tmp$ret$6;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    tmp$ret$6 = ArrayList_init_$Create$();
                    var offsetChanges_0 = tmp$ret$6;
                    var tmp$ret$7;
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.vs_1;
                      try {
                        $this.vs_1 = offsetChanges_0;
                        var tmp_2 = tmp2_let.tv_1;
                        tmp$ret$7 = recomposeMovableContent($this, from.fz_1, to.fz_1, tmp_2, from.iz_1, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.vs_1 = savedChanges_0;
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
                    $this.yt_1 = savedReader;
                    $this.et_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp2_let.zv();
              }
              tmp$ret$10 = tmp_1;
              tmp$ret$11 = tmp$ret$10;
              tmp$ret$12 = tmp$ret$11;
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.ku_1 = 0;
        tmp$ret$13 = Unit_getInstance();
        break $l$block_1;
      }finally {
        $this.vs_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.mu_1;
    var savedIsComposing = $this.wt_1;
    var savedNodeIndex = $this.at_1;
    try {
      $this.mu_1 = false;
      $this.wt_1 = true;
      $this.at_1 = 0;
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
          var scope = item.v2();
          var instances = item.w2();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            var last_0 = instances.qz_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp0__anonymous__q1qw7t = instances.g(i);
                $this.pz(scope, tmp0__anonymous__q1qw7t);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.pz(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp1_safe_receiver = from;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp0_elvis_lhs = index;
        tmp = tmp1_safe_receiver.sz(to, tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.mu_1 = savedImplicitRootStart;
      $this.wt_1 = savedIsComposing;
      $this.at_1 = savedNodeIndex;
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
    return _this__u8e3s4.tz(_this__u8e3s4.vv_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.tz(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.it_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.it_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.it_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.vs_1.a(change);
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
    var count = $this.iu_1;
    if (count > 0) {
      $this.iu_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.ju_1.uz()) {
      realizeDowns($this, $this.ju_1.j7());
      $this.ju_1.d6();
    }
  }
  function recordDown($this, node) {
    $this.ju_1.vx(node);
  }
  function recordUp($this) {
    if ($this.ju_1.uz()) {
      $this.ju_1.wx();
    } else {
      var tmp0_this = $this;
      var tmp1 = tmp0_this.iu_1;
      tmp0_this.iu_1 = tmp1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.yt_1.vv_1 : $this.yt_1.tv_1;
    var distance = location - $this.ku_1 | 0;
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
      $this.ku_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.fu_1.h()) {
      var insertTable = $this.zt_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.fu_1);
      $this.fu_1.d6();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.zt_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.fu_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.ou_1.vx(change);
  }
  function registerInsertUpFixup($this) {
    $this.fu_1.a($this.ou_1.wx());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.yt_1.tv_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    var tmp0_this = $this;
    tmp0_this.ku_1 = tmp0_this.ku_1 + $this.yt_1.vz() | 0;
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
    var tmp0_let = slotTable.ow();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      tmp0_let.kx();
      tmp0_let.vw(get_movableContentKey(), reference.dz_1);
      tmp0_let.zy();
      tmp0_let.wz(reference.ez_1);
      slots.xz(reference.hz_1, 1, tmp0_let);
      tmp0_let.fw();
      tmp0_let.gy();
      tmp0_let.hy();
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.zv();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var state = new MovableContentState(slotTable);
    $this.ss_1.yz(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.ts_1.zz()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var changes = tmp$ret$0;
      $this.du_1 = changes;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      var tmp1_read = $this.ts_1;
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_read.bv();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.yt_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.vs_1;
          try {
            $this.vs_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.lu_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.vs_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.zv();
      }
      tmp$ret$2 = tmp;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.yt_1.tv_1 - $this.ku_1 | 0;
    $this.ku_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.yt_1.f() > 0) {
      var reader = $this.yt_1;
      var location = reader.vv_1;
      if (!($this.nu_1.a10(-2) === location)) {
        if (!$this.lu_1 ? $this.mu_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.lu_1 = true;
        }
        if (location > 0) {
          var anchor = reader.lx(location);
          $this.nu_1.hv(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.yt_1.vv_1;
    var currentStartedGroup = $this.nu_1.a10(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = currentStartedGroup <= location;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      tmp$ret$0 = 'Missed recording an endGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if ($this.nu_1.a10(-1) === location) {
      $this.nu_1.wx();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.lu_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.lu_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.ys_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$0 = 'Start/end imbalance';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = $this.nu_1.h();
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
    $this.zs_1 = null;
    $this.at_1 = 0;
    $this.ct_1 = 0;
    $this.ku_1 = 0;
    $this.hu_1 = 0;
    $this.it_1 = false;
    $this.lu_1 = false;
    $this.nu_1.d6();
    $this.vt_1.d6();
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
      if ($this.pu_1 === nodeIndex) {
        var tmp0_this = $this;
        tmp0_this.su_1 = tmp0_this.su_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.pu_1 = nodeIndex;
        $this.su_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.su_1 > 0 ? $this.qu_1 === (from - $this.su_1 | 0) : false) ? $this.ru_1 === (to - $this.su_1 | 0) : false) {
        var tmp0_this = $this;
        tmp0_this.su_1 = tmp0_this.su_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.qu_1 = from;
        $this.ru_1 = to;
        $this.su_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.su_1;
    $this.su_1 = 0;
    if (count > 0) {
      if ($this.pu_1 >= 0) {
        var removeIndex = $this.pu_1;
        $this.pu_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.qu_1;
        $this.qu_1 = -1;
        var to = $this.ru_1;
        $this.ru_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().uw_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.h4_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.hu_1;
    tmp$ret$0 = rotateLeft(tmp0_rol, 3);
    tmp.hu_1 = tmp$ret$0 ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().uw_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.h4_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.hu_1 ^ groupKey;
    tmp$ret$0 = rotateRight(tmp0_ror, 3);
    tmp.hu_1 = tmp$ret$0;
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.wt_1;
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
      var token = Trace_getInstance().b10('Compose:recompose');
      try {
        $this.st_1 = currentSnapshot();
        $this.tt_1 = $this.st_1.h10();
        $this.mt_1.d6();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.k10_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.i10_1[index];
            var tmp0__anonymous__q1qw7t = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.j10_1[index];
            var tmp1__anonymous__uwfjfc = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0__anonymous__q1qw7t.qr_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l10_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.jt_1.a(new Invalidation(tmp0__anonymous__q1qw7t, location, tmp1__anonymous__uwfjfc));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.jt_1;
        if (tmp2_sortBy.f() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.at_1 = 0;
        var complete = false;
        $this.wt_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.m10();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.vy((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          var tmp_4 = ComposerImpl$doCompose$composable$lambda_0($this);
          var tmp_5 = ComposerImpl$doCompose$composable$lambda_1($this);
          observeDerivedStateRecalculations(tmp_4, tmp_5, ComposerImpl$doCompose$composable$lambda_2(content, $this, savedContent));
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.wt_1 = false;
          $this.jt_1.d6();
          if (!complete) {
            abortRoot($this);
          }
        }
        tmp$ret$2 = tmp_3;
        break $l$block;
      }finally {
        Trace_getInstance().n10(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.o10_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).p10 = function (a, b) {
    return this.o10_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.p10(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.q10(index)) {
      slots.pw();
      if (slots.ry(slots.ir_1)) {
        applier.np();
      }
      slots.gy();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.hr_1;
    var current = slots.ir_1;
    while (current >= 0 ? !slots.ry(current) : false) {
      current = slots.jw(current);
    }
    var index = 0;
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    while (current < original) {
      if (slots.r10(original, current)) {
        if (slots.ry(current))
          index = 0;
        var tmp1 = current;
        current = tmp1 + 1 | 0;
      } else {
        index = index + (slots.ry(current) ? 1 : slots.sy(current)) | 0;
        current = current + slots.zx(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.lz(anchor);
    runtimeCheck(slots.hr_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.hr_1 < destination) {
      if (slots.t10(destination)) {
        if (slots.s10()) {
          applier.mp(slots.tz(slots.hr_1));
          nodeIndex = 0;
        }
        slots.rw();
      } else
        nodeIndex = nodeIndex + slots.fw() | 0;
    }
    runtimeCheck(slots.hr_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.yt_1.f11(group)) {
      var key = this$0.yt_1.iw(group);
      var objectKey = this$0.yt_1.hw(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.yt_1.v10(group, 0);
        var anchor = this$0.yt_1.lx(group);
        var end = group + this$0.yt_1.zx(group) | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.jt_1, group, end);
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
            tmp$ret$0 = to(item.jy_1, item.ly_1);
            var tmp0_plusAssign = tmp$ret$0;
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        tmp$ret$1 = target;
        var invalidations = tmp$ret$1;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.xs_1, this$0.ts_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.ss_1.e11(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.yt_1.ry(group) ? 1 : this$0.yt_1.sy(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.yt_1.sy(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.yt_1.v10(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.w10_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp1_forEach = compositionContext.b11_1;
            var tmp0_iterator = tmp1_forEach.c();
            while (tmp0_iterator.d()) {
              var element = tmp0_iterator.e();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
            }
          }
          tmp_0 = this$0.yt_1.sy(group);
        } else {
          tmp_0 = this$0.yt_1.sy(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.yt_1.u10(group)) {
      var size = this$0.yt_1.zx(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.yt_1.ry(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.yt_1.tz(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.yt_1.zx(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.yt_1.sy(group);
    }
    return tmp;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.g11($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.op($insertIndex, node);
      applier.mp(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.h11($groupAnchor);
      applier.np();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.pp($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.jp();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).nq();
    return Unit_getInstance();
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.jp();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.i11($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.i11($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.j11($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.nr(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          var composition = previous.pr_1;
          var tmp_1;
          if (!(composition == null)) {
            previous.hi();
            composition.is_1 = true;
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
      $composer_0.k11(935231726);
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
      $composer_0.l11();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.m11($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.n11($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.xs_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.o11(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112191L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.q11()) {
        if (isTraceInProgress()) {
          traceEventStart(694380496, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.p11_1($parameter, $composer_0, 0);
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
        var savedChanges = this$0.vs_1;
        try {
          this$0.vs_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.yt_1;
            var savedCountOverrides = this$0.et_1;
            this$0.et_1 = null;
            try {
              this$0.yt_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.dz_1, $to.jz_1, $to.ez_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.yt_1 = savedReader;
              this$0.et_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.vs_1 = savedChanges;
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
          applier.pp(base + index | 0, item);
          applier.op(base + index | 0, item);
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.ss_1.mz($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.r11(1, state.nz_1, 2);
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.h();
      if (tmp$ret$0) {
        var tmp_1 = $to.fz_1;
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
            var tmp_3 = slots.s11(item, 0);
            var recomposeScope = tmp_3 instanceof RecomposeScopeImpl ? tmp_3 : null;
            var tmp0_safe_receiver = recomposeScope;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.t11(toComposition);
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
      invokeMovableContentLambda(this$0, $to.dz_1, $to.jz_1, $to.ez_1, true);
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
    slots.gy();
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
          applier.np();
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
          nodeApplier.mp($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.u11($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.kx();
      slots.w11($insertTable, $anchor.v11($insertTable));
      slots.hy();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.ow();
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
        tmp0_let.zv();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.kx();
      slots.w11($insertTable, $anchor.v11($insertTable));
      slots.hy();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.x11($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.qp($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.rp($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.ky_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.ky_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposerImpl$doCompose$composable$lambda_0(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.rt_1;
      tmp0_this.rt_1 = tmp1 + 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_1(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.rt_1;
      tmp0_this.rt_1 = tmp1 - 1 | 0;
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
      } else if (((this$0.ht_1 ? true : this$0.nt_1) ? !($savedContent == null) : false) ? !equals($savedContent, Companion_getInstance_1().uw_1) : false) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, (!($savedContent == null) ? typeof $savedContent === 'function' : false) ? $savedContent : THROW_CCE());
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else {
        this$0.y11();
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
    this.rs_1 = applier;
    this.ss_1 = parentContext;
    this.ts_1 = slotTable;
    this.us_1 = abandonSet;
    this.vs_1 = changes;
    this.ws_1 = lateChanges;
    this.xs_1 = composition;
    this.ys_1 = new Stack();
    this.zs_1 = null;
    this.at_1 = 0;
    this.bt_1 = new IntStack();
    this.ct_1 = 0;
    this.dt_1 = new IntStack();
    this.et_1 = null;
    this.ft_1 = null;
    this.gt_1 = false;
    this.ht_1 = false;
    this.it_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.jt_1 = tmp$ret$0;
    this.kt_1 = new IntStack();
    this.lt_1 = persistentHashMapOf();
    this.mt_1 = new IntMap();
    this.nt_1 = false;
    this.ot_1 = new IntStack();
    this.pt_1 = false;
    this.qt_1 = -1;
    this.rt_1 = 0;
    this.st_1 = currentSnapshot();
    this.tt_1 = 0;
    this.ut_1 = true;
    this.vt_1 = new Stack();
    this.wt_1 = false;
    this.xt_1 = false;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.ts_1.bv();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.zv();
    tmp$ret$1 = tmp0_also;
    tmp_0.yt_1 = tmp$ret$1;
    this.zt_1 = new SlotTable();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.zt_1.ow();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.zv();
    tmp$ret$2 = tmp0_also_0;
    tmp_1.au_1 = tmp$ret$2;
    this.bu_1 = false;
    this.cu_1 = null;
    this.du_1 = null;
    var tmp_2 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp1_read = this.zt_1;
    var tmp$ret$5;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_read.bv();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_3;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp$ret$3 = tmp0_let.lx(0);
      tmp_3 = tmp$ret$3;
    }finally {
      tmp0_let.zv();
    }
    tmp$ret$4 = tmp_3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp_2.eu_1 = tmp$ret$6;
    var tmp_4 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$7 = ArrayList_init_$Create$();
    tmp_4.fu_1 = tmp$ret$7;
    this.gu_1 = false;
    this.hu_1 = 0;
    this.iu_1 = 0;
    this.ju_1 = new Stack();
    this.ku_1 = 0;
    this.lu_1 = false;
    this.mu_1 = true;
    this.nu_1 = new IntStack();
    this.ou_1 = new Stack();
    this.pu_1 = -1;
    this.qu_1 = -1;
    this.ru_1 = -1;
    this.su_1 = 0;
  }
  protoOf(ComposerImpl).z11 = function () {
    return this.rs_1;
  };
  protoOf(ComposerImpl).a12 = function () {
    return this.rt_1 > 0;
  };
  protoOf(ComposerImpl).b12 = function () {
    return this.ss_1.c12();
  };
  protoOf(ComposerImpl).k11 = function (key) {
    return start(this, key, null, Companion_getInstance_2().cw_1, null);
  };
  protoOf(ComposerImpl).l11 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).d12 = function () {
    return start(this, -127, null, Companion_getInstance_2().cw_1, null);
  };
  protoOf(ComposerImpl).e12 = function () {
    endGroup(this);
    var scope = this.f12();
    if (!(scope == null) ? scope.xx() : false) {
      scope.g12(true);
    }
  };
  protoOf(ComposerImpl).h12 = function () {
    var tmp;
    if (this.nt_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.f12();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h12()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).yy = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_2().cw_1, null);
  };
  protoOf(ComposerImpl).cz = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).i12 = function () {
    this.mt_1.d6();
  };
  protoOf(ComposerImpl).j12 = function () {
    return this.gu_1;
  };
  protoOf(ComposerImpl).q11 = function () {
    var tmp;
    var tmp_0;
    if ((!this.gu_1 ? !this.pt_1 : false) ? !this.nt_1 : false) {
      var tmp0_safe_receiver = this.f12();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k12()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.ht_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).sw = function () {
    start(this, 125, null, Companion_getInstance_2().dw_1, null);
    this.it_1 = true;
  };
  protoOf(ComposerImpl).l12 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.gu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      tmp$ret$0 = 'createNode() can only be called when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.bt_1.m12();
    var groupAnchor = this.au_1.lx(this.au_1.ir_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.ct_1;
    tmp0_this.ct_1 = tmp1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).n12 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.gu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      tmp$ret$0 = 'useNode() called while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.yt_1, this);
    recordDown(this, node);
    var tmp;
    if (this.pt_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).o12 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).p12 = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.gu_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).m10 = function () {
    var tmp;
    if (this.gu_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().uw_1;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.yt_1.e();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp$ret$0 = this.pt_1 ? Companion_getInstance_1().uw_1 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(ComposerImpl).iv = function (value) {
    var tmp;
    if (!equals(this.m10(), value)) {
      this.vy(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).q12 = function (value) {
    var tmp;
    if (!(this.m10() === value)) {
      this.vy(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).r12 = function (value) {
    var next = this.m10();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.vy(value);
    return true;
  };
  protoOf(ComposerImpl).s12 = function (value) {
    var next = this.m10();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.vy(value);
    return true;
  };
  protoOf(ComposerImpl).vy = function (value) {
    if (this.gu_1) {
      this.au_1.wz(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.us_1.a(value);
      }
    } else {
      var groupSlotIndex = this.yt_1.t12() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.us_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).u12 = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.gu_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.bu_1 = true;
    } else {
      var tmp = this.yt_1.v12(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.yt_1.v12(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.q11() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.gu_1 : false) {
      this.mt_1.az(this.yt_1.tv_1, providers);
    }
    this.ot_1.hv(asInt(this.nt_1));
    this.nt_1 = invalid;
    this.cu_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_2().cw_1, providers);
  };
  protoOf(ComposerImpl).w12 = function () {
    endGroup(this);
    endGroup(this);
    this.nt_1 = asBool(this.ot_1.wx());
    this.cu_1 = null;
  };
  protoOf(ComposerImpl).x12 = function (key) {
    return resolveCompositionLocal(this, key, currentCompositionLocalScope(this));
  };
  protoOf(ComposerImpl).f12 = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.vt_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    tmp$ret$0 = (this.rt_1 === 0 ? tmp0_let.uz() : false) ? tmp0_let.m12() : null;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ComposerImpl).pz = function (scope, instance) {
    var tmp0_elvis_lhs = scope.qr_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var location = anchor.v11(this.ts_1);
    if (this.wt_1 ? location >= this.yt_1.tv_1 : false) {
      insertIfMissing(this.jt_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).y11 = function () {
    if (this.jt_1.h()) {
      skipGroup(this);
    } else {
      var reader = this.yt_1;
      var key = reader.gx();
      var dataKey = reader.ix();
      var aux = reader.qw();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.s10(), null);
      recomposeToGroupEnd(this);
      reader.ey();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).pw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.ct_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.f12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y12();
    }
    if (this.jt_1.h()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).z12 = function (key) {
    start(this, key, null, Companion_getInstance_2().cw_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).a13 = function () {
    var scope = this.vt_1.uz() ? this.vt_1.wx() : null;
    var tmp0_safe_receiver = scope;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.wy(false);
    }
    var tmp1_safe_receiver = scope;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b13(this.tt_1);
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
    if ((!(scope == null) ? !scope.d13() : false) ? scope.xx() ? true : this.gt_1 : false) {
      if (scope.qr_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.gu_1) {
          tmp_1 = this.au_1.lx(this.au_1.ir_1);
        } else {
          tmp_1 = this.yt_1.lx(this.yt_1.vv_1);
        }
        tmp_0.qr_1 = tmp_1;
      }
      scope.c13(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).e13 = function (references) {
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
  protoOf(ComposerImpl).f13 = function (sourceInformation) {
    if (this.gu_1 ? this.ut_1 : false) {
      this.au_1.g13(sourceInformation);
    }
  };
  protoOf(ComposerImpl).h13 = function (key, sourceInformation) {
    if (this.ut_1) {
      start(this, key, null, Companion_getInstance_2().cw_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).i13 = function () {
    if (this.ut_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).j13 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.wt_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      tmp$ret$0 = 'Preparing a composition while composing is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.wt_1 = true;
    try {
      block();
    }finally {
      this.wt_1 = false;
    }
  };
  protoOf(ComposerImpl).k13 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.vs_1.h();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.uz()) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.jt_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.ht_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp2_isNotEmpty = this.vs_1;
      tmp$ret$2 = !tmp2_isNotEmpty.h();
      return tmp$ret$2;
    }
    return false;
  };
  protoOf(ComposerImpl).l13 = function () {
    return this.f12();
  };
  protoOf(ComposerImpl).m13 = function () {
    return this.m10();
  };
  protoOf(ComposerImpl).n13 = function (value) {
    return this.vy(value);
  };
  protoOf(ComposerImpl).o13 = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.p13(true);
    }
  };
  protoOf(ComposerImpl).q13 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.vs_1.h();
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
    tmp.uw_1 = new Composer$Companion$Empty$1();
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
    this.dz_1 = content;
    this.ez_1 = parameter;
    this.fz_1 = composition;
    this.gz_1 = slotTable;
    this.hz_1 = anchor;
    this.iz_1 = invalidations;
    this.jz_1 = locals;
    this.kz_1 = 8;
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
    this.nz_1 = slotTable;
    this.oz_1 = 8;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.f13(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    tmp$ret$0 = !(tmp0_let == null) ? tmp0_let.r13() : false;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s13(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t13();
    }
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.h13(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.i13();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.u13_1 = compositionLocal;
    this.v13_1 = value;
    this.w13_1 = canOverride;
    this.x13_1 = 0;
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.y13_1 = message;
  }
  protoOf(ComposeRuntimeError).u = function () {
    return this.y13_1;
  };
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.u();
  });
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.yw_1.f();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.yw_1.g(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.yw_1 = keyInfos;
    this.zw_1 = startIndex;
    this.ax_1 = 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.zw_1 >= 0;
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
    tmp.bx_1 = tmp$ret$1;
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
    var last = this.yw_1.f();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.yw_1.g(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.ox_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.px_1);
        result.x2(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.px_1 | 0;
      }
       while (inductionVariable < last);
    tmp$ret$3 = result;
    tmp$ret$4 = tmp$ret$3;
    tmp_0.cx_1 = tmp$ret$4;
    var tmp_1 = this;
    tmp_1.dx_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).z13 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = keyMap$factory();
    tmp$ret$0 = this.dx_1.q1();
    return tmp$ret$0;
  };
  protoOf(Pending).jx = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.z13(), joinedKey);
  };
  protoOf(Pending).fx = function (keyInfo) {
    return this.bx_1.a(keyInfo);
  };
  protoOf(Pending).xx = function () {
    return this.bx_1;
  };
  protoOf(Pending).tx = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.cx_1.g7();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.a14_1;
        if (position === from)
          element.a14_1 = to;
        else if (to <= position ? position < from : false)
          element.a14_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.cx_1.g7();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.a14_1;
        if (position_0 === from)
          element_0.a14_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.a14_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).by = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.cx_1.g7();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.b14_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.b14_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.b14_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.cx_1.g7();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.b14_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.b14_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.b14_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).ex = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.cx_1;
    var tmp1_set = keyInfo.ox_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.x2(tmp1_set, tmp2_set);
  };
  protoOf(Pending).yx = function (group, newCount) {
    var groupInfo = this.cx_1.b2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.b14_1;
      var difference = newCount - groupInfo.c14_1 | 0;
      groupInfo.c14_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = this.cx_1.g7();
        var tmp0_iterator = tmp0_forEach.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.b14_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.b14_1 + difference | 0;
            if (newIndex >= 0)
              element.b14_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).sx = function (keyInfo) {
    var tmp0_safe_receiver = this.cx_1.b2(keyInfo.ox_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a14_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).rx = function (keyInfo) {
    var tmp0_safe_receiver = this.cx_1.b2(keyInfo.ox_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b14_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).ay = function (keyInfo) {
    var tmp0_safe_receiver = this.cx_1.b2(keyInfo.ox_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c14_1;
    return tmp1_elvis_lhs == null ? keyInfo.px_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.jy_1 = scope;
    this.ky_1 = location;
    this.ly_1 = instances;
  }
  protoOf(Invalidation).py = function () {
    return this.jy_1.d14(this.ly_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.cw_1 = _GroupKind___init__impl__iwqg06(0);
    this.dw_1 = _GroupKind___init__impl__iwqg06(1);
    this.ew_1 = _GroupKind___init__impl__iwqg06(2);
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
    $composer_0.k11(692276709);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):Composer.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(692276709, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (Composer.kt:320)');
    }
    var result = persistentHashMapOf();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.kw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var provided = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.k11(1391443232);
      sourceInformation($composer_0, '*330@12010L24');
      if (provided.w13_1 ? true : !contains_0(parentScope, provided.u13_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.u13_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.u13_1.e14(provided.v13_1, $composer_0, 0);
        tmp0_apply.x2(tmp0_set, tmp1_set);
      }
      $composer_0.l11();
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h7();
    var tmp1_group = tmp$ret$1;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
    return tmp0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function contains_0(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.x1(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.b2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var validation = _this__u8e3s4.g(index);
      if (validation.ky_1 < end) {
        _this__u8e3s4.b3(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.f()) {
      var firstInvalidation = _this__u8e3s4.g(index);
      if (firstInvalidation.ky_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.b3(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.jw(a) === b)
      return b;
    if (_this__u8e3s4.jw(b) === a)
      return a;
    if (_this__u8e3s4.jw(a) === _this__u8e3s4.jw(b))
      return _this__u8e3s4.jw(a);
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
        currentA = _this__u8e3s4.jw(currentA);
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
        currentB = _this__u8e3s4.jw(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.jw(currentA);
      currentB = _this__u8e3s4.jw(currentB);
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
        tmp0_also.f14(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_also;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      }
      _this__u8e3s4.q6(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.g(index).ly_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.g(index).ly_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.f14(instance);
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
    var tmp0_let = _this__u8e3s4.bv();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.lz(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.zv();
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
      if (invalidation.ky_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.a14_1 = slotIndex;
    this.b14_1 = nodeIndex;
    this.c14_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.b2(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var answer = tmp$ret$0;
      _this__u8e3s4.x2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.nx_1 == null) ? new JoinedKey(_this__u8e3s4.mx_1, _this__u8e3s4.nx_1) : _this__u8e3s4.mx_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.b2(key);
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
      var cmp = compareTo(midVal.ky_1, location);
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
      current = _this__u8e3s4.jw(current);
      var tmp0 = count;
      count = tmp0 + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.b2(key);
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
    if (tmp0_with.j12() ? true : !equals(tmp0_with.m13(), value)) {
      tmp0_with.n13(value);
      _Updater___get_composer__impl__9ty7av($this).p12(value, block);
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
    if ($reader.ry(group)) {
      result.a($reader.tz(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.zx(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.zx(current) | 0;
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
    slots.pw();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.gy();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.g14(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.h14();
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
      return receiver.z13();
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
    return $this.ls_1.a12();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.xr_1.k14(get_PendingApplyNoModifications());
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
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.xr_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.xr_1.k14(null);
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
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.xr_1);
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
        value.l14(null);
      } else {
        addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, value);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var tmp1_forEachScopeOf = $this.ds_1;
        var index = find_2(tmp1_forEachScopeOf, value);
        if (index >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.qz_1;
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
      var tmp3_isNotEmpty = $this.cs_1;
      tmp$ret$0 = !tmp3_isNotEmpty.h();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp4_removeValueIf = $this.bs_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var destinationIndex = 0;
      var inductionVariable_0 = 0;
      var last_0 = tmp4_removeValueIf.p14_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var valueIndex = tmp4_removeValueIf.m14_1[i_0];
          var set = ensureNotNull(tmp4_removeValueIf.o14_1[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var destinationIndex_0 = 0;
          var inductionVariable_1 = 0;
          var last_1 = set.qz_1;
          if (inductionVariable_1 < last_1)
            do {
              var i_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var tmp_0 = set.rz_1[i_1];
              var item = isObject(tmp_0) ? tmp_0 : THROW_CCE();
              var tmp$ret$3;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_1;
              if ($this.cs_1.i(item)) {
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
                  set.rz_1[destinationIndex_0] = item;
                }
                var tmp1 = destinationIndex_0;
                destinationIndex_0 = tmp1 + 1 | 0;
              }
            }
             while (inductionVariable_1 < last_1);
          var inductionVariable_2 = destinationIndex_0;
          var last_2 = set.qz_1;
          if (inductionVariable_2 < last_2)
            do {
              var i_2 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              set.rz_1[i_2] = null;
            }
             while (inductionVariable_2 < last_2);
          set.qz_1 = destinationIndex_0;
          if (set.qz_1 > 0) {
            if (!(destinationIndex === i_0)) {
              var destinationKeyOrder = tmp4_removeValueIf.m14_1[destinationIndex];
              tmp4_removeValueIf.m14_1[destinationIndex] = valueIndex;
              tmp4_removeValueIf.m14_1[i_0] = destinationKeyOrder;
            }
            var tmp1_0 = destinationIndex;
            destinationIndex = tmp1_0 + 1 | 0;
          }
        }
         while (inductionVariable_0 < last_0);
      var inductionVariable_3 = destinationIndex;
      var last_3 = tmp4_removeValueIf.p14_1;
      if (inductionVariable_3 < last_3)
        do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          tmp4_removeValueIf.n14_1[tmp4_removeValueIf.m14_1[i_3]] = null;
        }
         while (inductionVariable_3 < last_3);
      tmp4_removeValueIf.p14_1 = destinationIndex;
      cleanUpDerivedStateObservations($this);
      $this.cs_1.d6();
    } else {
      var tmp1_safe_receiver = invalidated._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.bs_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var destinationIndex_1 = 0;
        var inductionVariable_4 = 0;
        var last_4 = tmp0_removeValueIf.p14_1;
        if (inductionVariable_4 < last_4)
          do {
            var i_4 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var valueIndex_0 = tmp0_removeValueIf.m14_1[i_4];
            var set_0 = ensureNotNull(tmp0_removeValueIf.o14_1[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var destinationIndex_2 = 0;
            var inductionVariable_5 = 0;
            var last_5 = set_0.qz_1;
            if (inductionVariable_5 < last_5)
              do {
                var i_5 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                var tmp_3 = set_0.rz_1[i_5];
                var item_0 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
                var tmp$ret$4;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                tmp$ret$4 = tmp1_safe_receiver.i(item_0);
                if (!tmp$ret$4) {
                  if (!(destinationIndex_2 === i_5)) {
                    set_0.rz_1[destinationIndex_2] = item_0;
                  }
                  var tmp1_1 = destinationIndex_2;
                  destinationIndex_2 = tmp1_1 + 1 | 0;
                }
              }
               while (inductionVariable_5 < last_5);
            var inductionVariable_6 = destinationIndex_2;
            var last_6 = set_0.qz_1;
            if (inductionVariable_6 < last_6)
              do {
                var i_6 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                set_0.rz_1[i_6] = null;
              }
               while (inductionVariable_6 < last_6);
            set_0.qz_1 = destinationIndex_2;
            if (set_0.qz_1 > 0) {
              if (!(destinationIndex_1 === i_4)) {
                var destinationKeyOrder_0 = tmp0_removeValueIf.m14_1[destinationIndex_1];
                tmp0_removeValueIf.m14_1[destinationIndex_1] = valueIndex_0;
                tmp0_removeValueIf.m14_1[i_4] = destinationKeyOrder_0;
              }
              var tmp1_2 = destinationIndex_1;
              destinationIndex_1 = tmp1_2 + 1 | 0;
            }
          }
           while (inductionVariable_4 < last_4);
        var inductionVariable_7 = destinationIndex_1;
        var last_7 = tmp0_removeValueIf.p14_1;
        if (inductionVariable_7 < last_7)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            tmp0_removeValueIf.n14_1[tmp0_removeValueIf.m14_1[i_7]] = null;
          }
           while (inductionVariable_7 < last_7);
        tmp0_removeValueIf.p14_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
        tmp$ret$5 = Unit_getInstance();
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.ds_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.p14_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = tmp0_removeValueIf.m14_1[i];
        var set = ensureNotNull(tmp0_removeValueIf.o14_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        var last_0 = set.qz_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = set.rz_1[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            tmp$ret$0 = !$this.bs_1.q14(item);
            if (!tmp$ret$0) {
              if (!(destinationIndex_0 === i_0)) {
                set.rz_1[destinationIndex_0] = item;
              }
              var tmp1 = destinationIndex_0;
              destinationIndex_0 = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = destinationIndex_0;
        var last_1 = set.qz_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set.rz_1[i_1] = null;
          }
           while (inductionVariable_1 < last_1);
        set.qz_1 = destinationIndex_0;
        if (set.qz_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = tmp0_removeValueIf.m14_1[destinationIndex];
            tmp0_removeValueIf.m14_1[destinationIndex] = valueIndex;
            tmp0_removeValueIf.m14_1[i] = destinationKeyOrder;
          }
          var tmp1_0 = destinationIndex;
          destinationIndex = tmp1_0 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_2 = tmp0_removeValueIf.p14_1;
    if (inductionVariable_2 < last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        tmp0_removeValueIf.n14_1[tmp0_removeValueIf.m14_1[i_2]] = null;
      }
       while (inductionVariable_2 < last_2);
    tmp0_removeValueIf.p14_1 = destinationIndex;
    // Inline function 'androidx.compose.runtime.removeValueIf' call
    var tmp1_removeValueIf = $this.cs_1;
    var iter = tmp1_removeValueIf.c();
    while (iter.d()) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = iter.e();
      tmp$ret$1 = !tmp2__anonymous__z9zvc9.r14();
      if (tmp$ret$1) {
        iter.c3();
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = $this.bs_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.qz_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (tmp2__anonymous__z9zvc9.l14(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.gs_1.s14(value, tmp2__anonymous__z9zvc9);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.zr_1);
    try {
      if (changes.h())
        return Unit_getInstance();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().b10('Compose:applyChanges');
        try {
          $this.wr_1.kp();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          var tmp1_write = $this.as_1;
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_write.ow();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.wr_1;
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
            tmp0_let.zv();
          }
          tmp$ret$0 = tmp;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          $this.wr_1.lp();
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().n10(token);
        }
      }
      manager.z14();
      manager.a15();
      manager.b15();
      if ($this.is_1) {
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().b10('Compose:unobserve');
          try {
            $this.is_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.bs_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.p14_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = tmp0_removeValueIf.m14_1[i];
                var set = ensureNotNull(tmp0_removeValueIf.o14_1[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                var last_1 = set.qz_1;
                if (inductionVariable_1 < last_1)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = set.rz_1[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    var tmp$ret$4;
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    tmp$ret$4 = !item_0.c15();
                    if (!tmp$ret$4) {
                      if (!(destinationIndex_0 === i_0)) {
                        set.rz_1[destinationIndex_0] = item_0;
                      }
                      var tmp1 = destinationIndex_0;
                      destinationIndex_0 = tmp1 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < last_1);
                var inductionVariable_2 = destinationIndex_0;
                var last_2 = set.qz_1;
                if (inductionVariable_2 < last_2)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    set.rz_1[i_1] = null;
                  }
                   while (inductionVariable_2 < last_2);
                set.qz_1 = destinationIndex_0;
                if (set.qz_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = tmp0_removeValueIf.m14_1[destinationIndex];
                    tmp0_removeValueIf.m14_1[destinationIndex] = valueIndex;
                    tmp0_removeValueIf.m14_1[i] = destinationKeyOrder;
                  }
                  var tmp1_0 = destinationIndex;
                  destinationIndex = tmp1_0 + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_3 = tmp0_removeValueIf.p14_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                tmp0_removeValueIf.n14_1[tmp0_removeValueIf.m14_1[i_2]] = null;
              }
               while (inductionVariable_3 < last_3);
            tmp0_removeValueIf.p14_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            tmp$ret$5 = Unit_getInstance();
            break $l$block_0;
          }finally {
            Trace_getInstance().n10(token_0);
          }
        }
      }
    }finally {
      if ($this.fs_1.h()) {
        manager.d15();
      }
    }
  }
  function abandonChanges($this) {
    $this.xr_1.e15(null);
    $this.es_1.d6();
    $this.fs_1.d6();
    $this.zr_1.d6();
  }
  function invalidateChecked($this, scope, anchor, instance) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.yr_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.js_1;
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
      if ($this.as_1.f15($this.ks_1, anchor)) {
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
      if ($this.g15() ? $this.ls_1.pz(scope, instance) : false) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.hs_1.h15(scope, null);
      } else {
        addValue($this.hs_1, scope, instance);
      }
    }
    tmp$ret$2 = delegate;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var delegate_0 = tmp$ret$4;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.vr_1.i15($this);
    return $this.g15() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.hs_1;
    $this.hs_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.t14_1 = abandoning;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.u14_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.v14_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.w14_1 = tmp$ret$2;
    this.x14_1 = null;
    this.y14_1 = null;
  }
  protoOf(RememberEventDispatcher).i11 = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.v14_1.k1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.v14_1.b3(tmp0_let);
      tmp = this.t14_1.a6(instance);
    } else {
      tmp = this.u14_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(RememberEventDispatcher).nr = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.u14_1.k1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.u14_1.b3(tmp0_let);
      tmp = this.t14_1.a6(instance);
    } else {
      tmp = this.v14_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(RememberEventDispatcher).mr = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.y14_1;
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
      this.y14_1 = tmp0_also;
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_plusAssign = tmp;
    tmp1_plusAssign.a(instance);
  };
  protoOf(RememberEventDispatcher).z14 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.v14_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().b10('Compose:onForgotten');
        try {
          var inductionVariable = this.v14_1.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.v14_1.g(i);
              if (!this.t14_1.i(instance)) {
                instance.j15();
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().n10(token);
        }
      }
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.u14_1;
    tmp$ret$2 = !tmp1_isNotEmpty.h();
    if (tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().b10('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.u14_1;
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
              this.t14_1.a6(item);
              item.k15();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().n10(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).b15 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.w14_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().b10('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.w14_1;
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
          this.w14_1.d6();
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().n10(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).d15 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.t14_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().b10('Compose:abandons');
        try {
          var iterator = this.t14_1.c();
          while (iterator.d()) {
            var instance = iterator.e();
            iterator.c3();
            instance.l15();
          }
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().n10(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).a15 = function () {
    var deactivating = this.x14_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = deactivating == null ? true : deactivating.h();
    if (!tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().b10('Compose:deactivations');
        try {
          var inductionVariable = deactivating.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.g(i);
              instance.oq();
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().n10(token);
        }
      }
      deactivating.d6();
    }
    var releasing = this.y14_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$2 = releasing == null ? true : releasing.h();
    if (!tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().b10('Compose:releases');
        try {
          var inductionVariable_0 = releasing.f() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = releasing.g(i_0);
              instance_0.pq();
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().n10(token_0);
        }
      }
      releasing.d6();
    }
  };
  function addPendingInvalidationsLocked$invalidate(this$0, $forgetConditionalScopes, invalidated, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = this$0.bs_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.qz_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (!this$0.gs_1.m15(value, tmp2__anonymous__z9zvc9) ? !tmp2__anonymous__z9zvc9.l14(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp2__anonymous__z9zvc9.r14() ? !$forgetConditionalScopes : false) {
              this$0.cs_1.a(tmp2__anonymous__z9zvc9);
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
    this.vr_1 = parent;
    this.wr_1 = applier;
    this.xr_1 = new AtomicReference(null);
    this.yr_1 = createSynchronizedObject();
    this.zr_1 = HashSet_init_$Create$();
    this.as_1 = new SlotTable();
    this.bs_1 = new IdentityScopeMap();
    this.cs_1 = HashSet_init_$Create$();
    this.ds_1 = new IdentityScopeMap();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.es_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.fs_1 = tmp$ret$1;
    this.gs_1 = new IdentityScopeMap();
    this.hs_1 = new IdentityArrayMap();
    this.is_1 = false;
    this.js_1 = null;
    this.ks_1 = 0;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.wr_1, this.vr_1, this.as_1, this.zr_1, this.es_1, this.fs_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.vr_1.n15(tmp0_also);
    tmp$ret$2 = tmp0_also;
    tmp_1.ls_1 = tmp$ret$2;
    this.ms_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.vr_1;
    tmp_2.ns_1 = tmp_3 instanceof Recomposer;
    this.os_1 = false;
    this.ps_1 = ComposableSingletons$CompositionKt_getInstance().o15_1;
  }
  protoOf(CompositionImpl).g15 = function () {
    return this.ls_1.wt_1;
  };
  protoOf(CompositionImpl).q15 = function () {
    return this.os_1;
  };
  protoOf(CompositionImpl).r15 = function (values) {
    $l$loop: while (true) {
      var old = this.xr_1.dj();
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
            var tmp1_error = 'corrupt pendingModifications: ' + this.xr_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.xr_1.s15(old, new_0)) {
        if (old == null) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp2_synchronized = this.yr_1;
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
  protoOf(CompositionImpl).t15 = function (values) {
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.bs_1.q14(value) ? true : this.ds_1.q14(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).j13 = function (block) {
    return this.ls_1.j13(block);
  };
  protoOf(CompositionImpl).u15 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.ls_1.f12();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.p13(true);
        this.bs_1.s14(value, tmp0_safe_receiver);
        if (isInterface(value, DerivedState)) {
          this.ds_1.v15(value);
          var indexedObject = value.w15();
          var inductionVariable = 0;
          var last = indexedObject.length;
          $l$loop: while (inductionVariable < last) {
            var dependency = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (dependency == null)
              break $l$loop;
            this.ds_1.s14(dependency, value);
          }
        }
        tmp0_safe_receiver.x15(value);
        tmp$ret$0 = Unit_getInstance();
      }
    }
  };
  protoOf(CompositionImpl).y15 = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.yr_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp1_forEachScopeOf = this.ds_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.qz_1;
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
  protoOf(CompositionImpl).z15 = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.yr_1;
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
          var tmp0_also = this.ls_1.k13(invalidations);
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
            this.hs_1 = invalidations;
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
          var tmp1_isNotEmpty = this.zr_1;
          tmp$ret$5 = !tmp1_isNotEmpty.h();
          tmp_3 = tmp$ret$5;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.zr_1)).d15();
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
  protoOf(CompositionImpl).a16 = function (references) {
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
          tmp$ret$0 = equals(item.t2_1.fz_1, this);
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
        this.ls_1.e13(references);
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
          var tmp1_isNotEmpty = this.zr_1;
          tmp$ret$3 = !tmp1_isNotEmpty.h();
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.zr_1)).d15();
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
  protoOf(CompositionImpl).b16 = function (state) {
    var manager = new RememberEventDispatcher(this.zr_1);
    var slotTable = state.nz_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.ow();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.zv();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    manager.z14();
    manager.a15();
  };
  protoOf(CompositionImpl).c16 = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.yr_1;
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
        applyChangesInLocked(this, this.es_1);
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
          var tmp1_isNotEmpty = this.zr_1;
          tmp$ret$1 = !tmp1_isNotEmpty.h();
          tmp_1 = tmp$ret$1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.zr_1)).d15();
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
  protoOf(CompositionImpl).d16 = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.yr_1;
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
        var tmp0_isNotEmpty = this.fs_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        if (tmp$ret$0) {
          applyChangesInLocked(this, this.fs_1);
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
          var tmp1_isNotEmpty = this.zr_1;
          tmp$ret$2 = !tmp1_isNotEmpty.h();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.zr_1)).d15();
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
  protoOf(CompositionImpl).i12 = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.yr_1;
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
        this.ls_1.i12();
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.zr_1;
        tmp$ret$0 = !tmp0_isNotEmpty.h();
        if (tmp$ret$0) {
          (new RememberEventDispatcher(this.zr_1)).d15();
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
          var tmp1_isNotEmpty = this.zr_1;
          tmp$ret$2 = !tmp1_isNotEmpty.h();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.zr_1)).d15();
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
  protoOf(CompositionImpl).e16 = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.yr_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.as_1.vu_1;
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
        tmp0_safe_receiver.f16();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(CompositionImpl).sz = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.js_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.ks_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.js_1 = null;
        this.ks_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).g16 = function (scope, instance) {
    if (scope.h16()) {
      scope.c13(true);
    }
    var anchor = scope.qr_1;
    if ((anchor == null ? true : !this.as_1.i16(anchor)) ? true : !anchor.c15())
      return InvalidationResult_IGNORED_getInstance();
    if (!anchor.c15())
      return InvalidationResult_IGNORED_getInstance();
    if (!scope.j16())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).k16 = function (instance, scope) {
    this.bs_1.m15(instance, scope);
  };
  protoOf(CompositionImpl).l16 = function (state) {
    if (!this.bs_1.q14(state)) {
      this.ds_1.v15(state);
    }
  };
  protoOf(CompositionImpl).m16 = function (set__$_ezb9bk) {
    this.ps_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).n16 = function (content) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.os_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      tmp$ret$0 = 'The composition is disposed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.m16(content);
    this.vr_1.o16(this, this.ps_1);
  };
  protoOf(CompositionImpl).p16 = function (content) {
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
        var tmp0_synchronized = this.yr_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.ls_1.q13(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.hs_1 = invalidations;
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
          var tmp1_isNotEmpty = this.zr_1;
          tmp$ret$4 = !tmp1_isNotEmpty.h();
          tmp_3 = tmp$ret$4;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.zr_1)).d15();
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
      return $boundThis.o11(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.q11()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:505)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.pw();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.o11(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.q11()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:596)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.pw();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.o15_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.p15_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.r16(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.q16(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.f14(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.f14(value);
      tmp$ret$0 = tmp0_also;
      _this__u8e3s4.h15(key, tmp$ret$0);
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
    this.cv_1 = 0;
  }
  protoOf(CompositionContext).kv = function (table) {
  };
  protoOf(CompositionContext).n15 = function (composer) {
  };
  protoOf(CompositionContext).ev = function () {
    return get_EmptyCompositionLocalMap();
  };
  protoOf(CompositionContext).dv = function () {
  };
  protoOf(CompositionContext).mv = function () {
  };
  protoOf(CompositionContext).mz = function (reference) {
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
    this.lw_1 = new LazyValueHolder(defaultFactory);
    this.mw_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.u16_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).v16 = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).e14 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.k11(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z12(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@9992L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.u12(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.w12();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.a13();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z16(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.d17_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).e14 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.k11(-1327537144);
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
    $composer_1.k11(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.m13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_1().uw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(value, this.d17_1);
      var value_0 = tmp$ret$0;
      tmp1_cache.n13(value_0);
      tmp = value_0;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.l11();
    tmp$ret$4 = tmp0;
    var tmp3_apply = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp3_apply.kn(value);
    tmp$ret$5 = tmp3_apply;
    var tmp0_0 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
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
    var tmp0_elvis_lhs = get_derivedStateObservers().dj();
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
      get_derivedStateObservers().i17(tmp0_also);
      tmp$ret$3 = tmp0_also;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var observers = tmp;
    var observer = to(start, done);
    try {
      observers.f14(observer);
      block();
    }finally {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$4 = observers.l17_1 - 1 | 0;
      observers.b3(tmp$ret$4);
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
    this.n17_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.k11(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)336@14101L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:331)');
    }
    var applyContext = $composer_0.b12();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.k11(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.iv(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.m13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().uw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
      var value = tmp$ret$0;
      tmp1_cache.n13(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.l11();
    tmp$ret$4 = tmp0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.o17_1 = task;
    this.p17_1 = CoroutineScope(parentCoroutineContext);
    this.q17_1 = null;
  }
  protoOf(LaunchedEffectImpl).k15 = function () {
    var tmp0_safe_receiver = this.q17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.q17_1 = launch(this.p17_1, VOID, VOID, this.o17_1);
  };
  protoOf(LaunchedEffectImpl).j15 = function () {
    var tmp0_safe_receiver = this.q17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.bf();
    }
    this.q17_1 = null;
  };
  protoOf(LaunchedEffectImpl).l15 = function () {
    var tmp0_safe_receiver = this.q17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.bf();
    }
    this.q17_1 = null;
  };
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.k11(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.k11(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.iv(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.m13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().uw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
      var value = tmp$ret$0;
      tmp1_cache.n13(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.l11();
    tmp$ret$4 = tmp0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
  }
  function DisposableEffect$composable_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.k11(-1541565433);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)275@11877L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1541565433, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:271)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = keys.slice();
    var tmp4_remember$composable = $composer_0;
    var $composer_1 = tmp4_remember$composable;
    $composer_1.k11(-1603429786);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp3_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.iv(key));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = invalid;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.m13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().uw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
      var value = tmp$ret$0;
      tmp1_cache.n13(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.l11();
    tmp$ret$4 = tmp0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
  }
  function DisposableEffectImpl(effect) {
    this.r17_1 = effect;
    this.s17_1 = null;
  }
  protoOf(DisposableEffectImpl).k15 = function () {
    this.s17_1 = this.r17_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).j15 = function () {
    var tmp0_safe_receiver = this.s17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gh();
    }
    this.s17_1 = null;
  };
  protoOf(DisposableEffectImpl).l15 = function () {
  };
  function DisposableEffect$composable_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.k11(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.k11(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.iv(key1) | $composer_1.iv(key2));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.m13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().uw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
      var value = tmp$ret$0;
      tmp1_cache.n13(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.l11();
    tmp$ret$4 = tmp0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
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
      tmp = value.h4_1;
    } else {
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.t17_1 = left;
    this.u17_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.t17_1), 31) + hashCodeOf(this, this.u17_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.t17_1) + ', right=' + toString_0(this.u17_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.t17_1, tmp0_other_with_cast.t17_1))
      return false;
    if (!equals(this.u17_1, tmp0_other_with_cast.u17_1))
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
    var tmp0_elvis_lhs = _this__u8e3s4.u3(Key_getInstance_0());
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
    this.v17_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.v17_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.v17_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.v17_1 === tmp0_other_with_cast.v17_1))
      return false;
    return true;
  };
  function produceState$composable(initialValue, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.k11(1150638565);
    sourceInformation($composer_0, 'C(produceState$composable)81@2971L41,82@3017L95:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1150638565, $changed, -1, 'androidx.compose.runtime.produceState$composable (ProduceState.kt:77)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_0;
    var $composer_1 = tmp2_remember$composable;
    $composer_1.k11(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.m13();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_1().uw_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.produceState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(initialValue);
      var value = tmp$ret$0;
      tmp1_cache.n13(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.l11();
    tmp$ret$4 = tmp0;
    var result = tmp$ret$4;
    LaunchedEffect$composable(Unit_getInstance(), produceState$composable$slambda_0(producer, result, null), $composer_0, 6);
    var tmp0_0 = result;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l11();
    return tmp0_0;
  }
  function ProduceStateScope() {
  }
  function $awaitDisposeCOROUTINE$0(_this__u8e3s4, onDispose, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f18_1 = _this__u8e3s4;
    this.g18_1 = onDispose;
  }
  protoOf($awaitDisposeCOROUTINE$0).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 5;
            this.oc_1 = 1;
            continue $sm;
          case 1:
            this.pc_1 = 4;
            this.oc_1 = 2;
            var tmp0__anonymous__q1qw7t = this;
            var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
            cancellable.fh();
            ;
            suspendResult = returnIfSuspended(cancellable.tf(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h18_1 = throwKotlinNothingValueException();
            this.pc_1 = 5;
            this.oc_1 = 3;
            continue $sm;
          case 3:
            this.g18_1();
            return Unit_getInstance();
          case 4:
            this.pc_1 = 5;
            var t = this.rc_1;
            this.g18_1();
            throw t;
          case 5:
            throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.pc_1 === 5) {
          throw e;
        } else {
          this.oc_1 = this.pc_1;
          this.rc_1 = e;
        }
      }
     while (true);
  };
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.i18_1 = coroutineContext;
    this.j18_1 = state;
  }
  protoOf(ProduceStateScopeImpl).ud = function () {
    return this.i18_1;
  };
  protoOf(ProduceStateScopeImpl).kn = function (_set____db54di) {
    this.j18_1.kn(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).q1 = function () {
    return this.j18_1.q1();
  };
  protoOf(ProduceStateScopeImpl).w17 = function (onDispose, $completion) {
    var tmp = new $awaitDisposeCOROUTINE$0(this, onDispose, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  function produceState$composable$slambda($producer, $result, resultContinuation) {
    this.s18_1 = $producer;
    this.t18_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$composable$slambda).v18 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w18($this$LaunchedEffect, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(produceState$composable$slambda).jd = function (p1, $completion) {
    return this.v18((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$composable$slambda).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 2;
            this.oc_1 = 1;
            suspendResult = this.s18_1(new ProduceStateScopeImpl(this.t18_1, this.u18_1.ud()), this);
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
  protoOf(produceState$composable$slambda).w18 = function ($this$LaunchedEffect, completion) {
    var i = new produceState$composable$slambda(this.s18_1, this.t18_1, completion);
    i.u18_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$composable$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$composable$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v18($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.or_1 = $this.or_1 | 32;
    } else {
      $this.or_1 = $this.or_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.or_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.or_1 = $this.or_1 | 16;
    } else {
      $this.or_1 = $this.or_1 & -17;
    }
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.sr_1 === $token ? equals($tmp0_safe_receiver, this$0.tr_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var destinationIndex = 0;
        var inductionVariable = 0;
        var last = $tmp0_safe_receiver.x18_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = $tmp0_safe_receiver.y18_1[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = $tmp0_safe_receiver.z18_1[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.k16(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.l16(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.ur_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.a19(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.k10_1 === 0) {
                    this$0.ur_1 = null;
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
                $tmp0_safe_receiver.y18_1[destinationIndex] = key;
                $tmp0_safe_receiver.z18_1[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < last);
        var inductionVariable_0 = destinationIndex;
        var last_0 = $tmp0_safe_receiver.x18_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $tmp0_safe_receiver.y18_1[i_0] = null;
          }
           while (inductionVariable_0 < last_0);
        $tmp0_safe_receiver.x18_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.x18_1 === 0) {
          this$0.tr_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(composition) {
    this.or_1 = 0;
    this.pr_1 = composition;
    this.qr_1 = null;
    this.rr_1 = null;
    this.sr_1 = 0;
    this.tr_1 = null;
    this.ur_1 = null;
  }
  protoOf(RecomposeScopeImpl).c15 = function () {
    var tmp;
    if (!(this.pr_1 == null)) {
      var tmp0_safe_receiver = this.qr_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c15();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).j16 = function () {
    return !(this.rr_1 == null);
  };
  protoOf(RecomposeScopeImpl).p13 = function (value) {
    if (value) {
      this.or_1 = this.or_1 | 1;
    } else {
      this.or_1 = this.or_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).xx = function () {
    return !((this.or_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).g12 = function (value) {
    if (value) {
      this.or_1 = this.or_1 | 2;
    } else {
      this.or_1 = this.or_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).h16 = function () {
    return !((this.or_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).c13 = function (value) {
    if (value) {
      this.or_1 = this.or_1 | 4;
    } else {
      this.or_1 = this.or_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).h12 = function () {
    return !((this.or_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).wy = function (value) {
    if (value) {
      this.or_1 = this.or_1 | 8;
    } else {
      this.or_1 = this.or_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).k12 = function () {
    return !((this.or_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).ny = function (composer) {
    var tmp0_safe_receiver = this.rr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1);
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    } else {
    }
  };
  protoOf(RecomposeScopeImpl).l14 = function (value) {
    var tmp0_safe_receiver = this.pr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g16(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).hi = function () {
    this.pr_1 = null;
    this.tr_1 = null;
    this.ur_1 = null;
  };
  protoOf(RecomposeScopeImpl).t11 = function (composition) {
    this.pr_1 = composition;
  };
  protoOf(RecomposeScopeImpl).f16 = function () {
    var tmp0_safe_receiver = this.pr_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.g16(this, null);
  };
  protoOf(RecomposeScopeImpl).z16 = function (block) {
    this.rr_1 = block;
  };
  protoOf(RecomposeScopeImpl).d13 = function () {
    return !((this.or_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).xy = function (token) {
    this.sr_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).y12 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).x15 = function (instance) {
    if (_get_rereading__g2iruw(this))
      return Unit_getInstance();
    var tmp0_elvis_lhs = this.tr_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.tr_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.b19(instance, this.sr_1);
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.ur_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.ur_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.h15(instance, instance.e17());
    }
  };
  protoOf(RecomposeScopeImpl).r14 = function () {
    return !(this.ur_1 == null);
  };
  protoOf(RecomposeScopeImpl).d14 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.ur_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.uz()) {
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
            var tmp0_elvis_lhs_0 = tmp0_let.f17();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp$ret$1 = policy.c19(tmp0_let.e17(), trackedDependencies.q16(tmp0_let));
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
  protoOf(RecomposeScopeImpl).my = function () {
    var tmp0_safe_receiver = this.pr_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.tr_1;
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
          var last = tmp0_safe_receiver_0.x18_1;
          var tmp_1;
          if (inductionVariable < last) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver_0.y18_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver_0.z18_1[i];
              tmp0_safe_receiver.u15(tmp0__anonymous__q1qw7t);
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
  protoOf(RecomposeScopeImpl).b13 = function (token) {
    var tmp0_safe_receiver = this.tr_1;
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
      if (!this.d13()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var inductionVariable = 0;
          var last = tmp0_safe_receiver.x18_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver.y18_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver.z18_1[i];
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
      var old = $this.d19_1.q1();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.d19_1.ln(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.d19_1.q1();
      var new_0 = old.a6(info);
      if (old === new_0 ? true : $this.d19_1.ln(old, new_0))
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
    var tmp0_synchronized = this$0.i19_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.p19_1;
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
    this$0.p19_1.d6();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (this$0.h19_1.kq()) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().b10('Recomposer:animation');
          try {
            this$0.h19_1.lq(frameTime);
            Companion_getInstance_9().c1a();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().n10(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$15;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().b10('Recomposer:recompose');
        try {
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.i19_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          recordComposerModificationsLocked(this$0);
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.n19_1;
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
          this$0.n19_1.d6();
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
                  alreadyComposed.f14(item_0);
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
            if (modifiedValues.uz()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.i19_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.l19_1;
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
                  if (!alreadyComposed.l2(item_1) ? item_1.t15(modifiedValues) : false) {
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
            var tmp1 = tmp0_this.g19_1;
            tmp0_this.g19_1 = tmp1.dc();
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
                  item_2.c16();
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
                element.d16();
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
                element_0.i12();
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
          var tmp3_synchronized = this$0.i19_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          Companion_getInstance_9().d1a();
          tmp$ret$15 = Unit_getInstance();
          break $l$block_0;
        }finally {
          Trace_getInstance().n10(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.i19_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.x19_1.q1().i4(State_Idle_getInstance()) >= 0) {
        this$0.m19_1.t(changed);
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
        tmp0_safe_receiver.j3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.m1a_1 = $block;
    this.n1a_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).v18 = function ($this$coroutineScope, $completion) {
    var tmp = this.w18($this$coroutineScope, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).jd = function (p1, $completion) {
    return this.v18((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 2;
            this.oc_1 = 1;
            suspendResult = this.m1a_1(this.o1a_1, this.n1a_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).w18 = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.m1a_1, this.n1a_1, completion);
    i.o1a_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.v18($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function deriveStateLocked($this) {
    if ($this.x19_1.q1().i4(State_ShuttingDown_getInstance()) <= 0) {
      $this.l19_1.d6();
      var tmp = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      tmp.m19_1 = tmp$ret$0;
      $this.n19_1.d6();
      $this.o19_1.d6();
      $this.p19_1.d6();
      $this.s19_1 = null;
      var tmp0_safe_receiver = $this.t19_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.gg();
      $this.t19_1 = null;
      $this.w19_1 = null;
      return null;
    }
    var tmp_0;
    if (!($this.w19_1 == null)) {
      tmp_0 = State_Inactive_getInstance();
    } else {
      if ($this.j19_1 == null) {
        var tmp_1 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp$ret$1 = LinkedHashSet_init_$Create$();
        tmp_1.m19_1 = tmp$ret$1;
        $this.n19_1.d6();
        tmp_0 = $this.h19_1.kq() ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp_5;
        var tmp_6;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = $this.n19_1;
        tmp$ret$2 = !tmp0_isNotEmpty.h();
        if (tmp$ret$2) {
          tmp_6 = true;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = $this.m19_1;
          tmp$ret$3 = !tmp1_isNotEmpty.h();
          tmp_6 = tmp$ret$3;
        }
        if (tmp_6) {
          tmp_5 = true;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp2_isNotEmpty = $this.o19_1;
          tmp$ret$4 = !tmp2_isNotEmpty.h();
          tmp_5 = tmp$ret$4;
        }
        if (tmp_5) {
          tmp_4 = true;
        } else {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp3_isNotEmpty = $this.p19_1;
          tmp$ret$5 = !tmp3_isNotEmpty.h();
          tmp_4 = tmp$ret$5;
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          tmp_3 = $this.u19_1 > 0;
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          tmp_2 = $this.h19_1.kq();
        }
        if (tmp_2) {
          tmp_0 = State_PendingWork_getInstance();
        } else {
          tmp_0 = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp_0;
    $this.x19_1.kn(newState);
    var tmp_7;
    if (newState.equals(State_PendingWork_getInstance())) {
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp4_also = $this.t19_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.t19_1 = null;
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
    var tmp0_synchronized = $this.i19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    tmp$ret$0 = !$this.v19_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp1_any = $this.y19_1.pl();
        var tmp0_iterator = tmp1_any.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          tmp$ret$3 = element.vd();
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
    this.p1a_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.q1a_1 = recoverable;
    this.r1a_1 = cause;
  }
  function recordComposerModificationsLocked($this) {
    var changes = $this.m19_1;
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
        var tmp0_fastForEach = $this.l19_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastForEach.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastForEach.g(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>.<anonymous>' call
            item.r15(changes);
            if ($this.x19_1.q1().i4(State_ShuttingDown_getInstance()) <= 0) {
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
      tmp.m19_1 = tmp$ret$3;
      if (!(deriveStateLocked($this) == null)) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
      }
    }
  }
  function registerRunnerJob($this, callingJob) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.i19_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.k19_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.x19_1.q1().i4(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.j19_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.j19_1 = callingJob;
    tmp$ret$1 = deriveStateLocked($this);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().e19_1.dj()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = $this.i19_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.o19_1.d6();
      $this.n19_1.d6();
      var tmp_0 = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      tmp_0.m19_1 = tmp$ret$0;
      $this.p19_1.d6();
      $this.q19_1.d6();
      $this.r19_1.d6();
      $this.w19_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.s19_1;
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
          $this.s19_1 = tmp0_also;
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
        var tmp1_minusAssign = tmp1_this.l19_1;
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
    var tmp0_synchronized = $this.i19_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.m19_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = $this.n19_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = $this.h19_1.kq();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  }
  function recompositionRunner($this, block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.l3();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    var tmp0 = withContext($this.h19_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
    return tmp0;
  }
  function performInitialMovableContentInserts($this, composition) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.i19_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.p19_1;
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
          tmp$ret$0 = equals(item.fz_1, composition);
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
    if (composition.g15() ? true : composition.q15())
      return null;
    var tmp;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_9().b1b(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.c1b();
          try {
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            var tmp0_safe_receiver = modifiedValues;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uz()) === true) {
              composition.j13(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$0 = composition.z15();
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            snapshot.d1b(previous);
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
        tmp$ret$0 = item.fz_1;
        var key = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.b2(key);
        var tmp;
        if (value == null) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          tmp$ret$1 = ArrayList_init_$Create$();
          var answer = tmp$ret$1;
          destination.x2(key, answer);
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
    tmp$ret$4 = tasks.o1().c();
    var tmp0_iterator = tmp$ret$4;
    while (tmp0_iterator.d()) {
      var tmp1_loop_parameter = tmp0_iterator.e();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$5 = tmp1_loop_parameter.n1();
      var composition = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$6 = tmp1_loop_parameter.q1();
      var refs = tmp$ret$6;
      runtimeCheck(!composition.g15());
      var tmp$ret$13;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_9().b1b(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          var tmp$ret$12;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.c1b();
            try {
              var tmp$ret$11;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp0_synchronized = $this.i19_1;
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
                  tmp$ret$7 = to(item_0, removeLastMultiValue($this.q19_1, item_0.dz_1));
                  var tmp0_plusAssign = tmp$ret$7;
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$8 = target;
              tmp$ret$9 = tmp$ret$8;
              tmp$ret$10 = tmp$ret$9;
              tmp$ret$11 = tmp$ret$10;
              var pairs = tmp$ret$11;
              composition.a16(pairs);
              tmp$ret$12 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.d1b(previous);
            }
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.c2());
  }
  function discardUnusedValues($this) {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.i19_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.q19_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      var references = flatten($this.q19_1.g7());
      $this.q19_1.d6();
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
          tmp$ret$1 = to(item, $this.r19_1.b2(item));
          var tmp0_plusAssign = tmp$ret$1;
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      tmp$ret$2 = target;
      var unusedValues = tmp$ret$2;
      $this.r19_1.d6();
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
        var reference = item_0.v2();
        var state = item_0.w2();
        if (!(state == null)) {
          reference.fz_1.b16(state);
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
      var applyResult = snapshot.r1b();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.gh();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.n19_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.h19_1.kq();
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.d19_1 = MutableStateFlow(persistentSetOf());
    this.e19_1 = new AtomicReference(false);
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
    var tmp0_synchronized = this$0.i19_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.p19_1.c();
    while (iterator.d()) {
      var value = iterator.e();
      if (equals(value.fz_1, $composition)) {
        toInsert.a(value);
        iterator.c3();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.i19_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.x19_1.q1().i4(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.k19_1);
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
        tmp0_safe_receiver.j3(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.i19_1;
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
      tmp.k19_1 = tmp_0;
      this$0.x19_1.kn(State_ShutDown_getInstance());
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
      var tmp0_synchronized = this$0.i19_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.j19_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.x19_1.kn(State_ShuttingDown_getInstance());
        if (!this$0.v19_1) {
          runnerJob.af(cancellation);
        } else if (!(this$0.t19_1 == null)) {
          continuationToResume = this$0.t19_1;
        }
        this$0.t19_1 = null;
        tmp = runnerJob.ve(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.k19_1 = cancellation;
        this$0.x19_1.kn(State_ShutDown_getInstance());
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
        tmp0_safe_receiver.j3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.a1c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).i1c = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.j1c($this$recompositionRunner, parentFrameClock, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).k1c = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.i1c(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 6;
            var tmp_0 = this;
            tmp_0.d1c_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.e1c_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.f1c_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.g1c_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.h1c_1 = LinkedHashSet_init_$Create$();
            this.oc_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.a1c_1)) {
              this.oc_1 = 5;
              continue $sm;
            }

            this.oc_1 = 2;
            suspendResult = awaitWorkAvailable(this.a1c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_synchronized = this.a1c_1.i19_1;
            var tmp_5;
            if (!_get_hasFrameWorkLocked__1gtyf7(this.a1c_1)) {
              recordComposerModificationsLocked(this.a1c_1);
              tmp_5 = !_get_hasFrameWorkLocked__1gtyf7(this.a1c_1);
            } else {
              tmp_5 = false;
            }

            if (tmp_5) {
              this.oc_1 = 1;
              continue $sm;
            } else {
              this.oc_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.oc_1 = 4;
            suspendResult = this.c1c_1.mq(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.a1c_1, this.d1c_1, this.e1c_1, this.f1c_1, this.g1c_1, this.h1c_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.a1c_1);
            this.oc_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.pc_1 === 6) {
          throw e;
        } else {
          this.oc_1 = this.pc_1;
          this.rc_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).j1c = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.a1c_1, completion);
    i.b1c_1 = $this$recompositionRunner;
    i.c1c_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.i1c($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.t1c_1 = this$0;
    this.u1c_1 = $block;
    this.v1c_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).v18 = function ($this$withContext, $completion) {
    var tmp = this.w18($this$withContext, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(Recomposer$recompositionRunner$slambda).jd = function (p1, $completion) {
    return this.v18((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 5;
            this.x1c_1 = get_job(this.w1c_1.ud());
            registerRunnerJob(this.t1c_1, this.x1c_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_9();
            tmp_0.y1c_1 = tmp_1.a1d(Recomposer$recompositionRunner$slambda$lambda(this.t1c_1));
            addRunning(Companion_getInstance_3(), this.t1c_1.a1a_1);
            this.oc_1 = 1;
            continue $sm;
          case 1:
            this.pc_1 = 4;
            var tmp0_synchronized = this.t1c_1.i19_1;
            var tmp0_fastForEach = this.t1c_1.l19_1;
            var inductionVariable = 0;
            var last = tmp0_fastForEach.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0_fastForEach.g(index);
                item.e16();
              }
               while (inductionVariable <= last);
            this.oc_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.u1c_1, this.v1c_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z1c_1 = suspendResult;
            this.pc_1 = 5;
            this.oc_1 = 3;
            continue $sm;
          case 3:
            this.y1c_1.gh();
            var tmp1_synchronized = this.t1c_1.i19_1;
            if (this.t1c_1.j19_1 === this.x1c_1) {
              this.t1c_1.j19_1 = null;
            }

            deriveStateLocked(this.t1c_1);
            ;
            removeRunning(Companion_getInstance_3(), this.t1c_1.a1a_1);
            ;
            return Unit_getInstance();
          case 4:
            this.pc_1 = 5;
            var t = this.rc_1;
            this.y1c_1.gh();
            var tmp1_synchronized_0 = this.t1c_1.i19_1;
            if (this.t1c_1.j19_1 === this.x1c_1) {
              this.t1c_1.j19_1 = null;
            }

            deriveStateLocked(this.t1c_1);
            ;
            removeRunning(Companion_getInstance_3(), this.t1c_1.a1a_1);
            ;
            throw t;
          case 5:
            throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.pc_1 === 5) {
          throw e;
        } else {
          this.oc_1 = this.pc_1;
          this.rc_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).w18 = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.t1c_1, this.u1c_1, this.v1c_1, completion);
    i.w1c_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.v18($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $modifiedValues.qz_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0__anonymous__q1qw7t = $modifiedValues.g(i);
          $composition.y15(tmp0__anonymous__q1qw7t);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.u15(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.y15(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.f14(value);
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
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1b_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.a1b_1)) {
              this.oc_1 = 1;
              var tmp0__anonymous__q1qw7t = this;
              var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
              cancellable.fh();
              var tmp0_synchronized = this.a1b_1.i19_1;
              if (_get_hasSchedulingWork__b617oy(this.a1b_1)) {
                var tmp0_success = Companion_getInstance();
                cancellable.j3(_Result___init__impl__xyqfz8(Unit_getInstance()));
              } else {
                this.a1b_1.t19_1 = cancellable;
              }
              suspendResult = returnIfSuspended(cancellable.tf(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oc_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.oc_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.pc_1 === 3) {
          throw e;
        } else {
          this.oc_1 = this.pc_1;
          this.rc_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.g19_1 = new Long(0, 0);
    var tmp = this;
    tmp.h19_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.i19_1 = createSynchronizedObject();
    this.j19_1 = null;
    this.k19_1 = null;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.l19_1 = tmp$ret$0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_1.m19_1 = tmp$ret$1;
    var tmp_2 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_2.n19_1 = tmp$ret$2;
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_3.o19_1 = tmp$ret$3;
    var tmp_4 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    tmp_4.p19_1 = tmp$ret$4;
    var tmp_5 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$5 = LinkedHashMap_init_$Create$();
    tmp_5.q19_1 = tmp$ret$5;
    var tmp_6 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$6 = LinkedHashMap_init_$Create$();
    tmp_6.r19_1 = tmp$ret$6;
    this.s19_1 = null;
    this.t19_1 = null;
    this.u19_1 = 0;
    this.v19_1 = false;
    this.w19_1 = null;
    this.x19_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_7 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.u3(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.ve(Recomposer$effectJob$lambda(this));
    tmp$ret$7 = tmp0_apply;
    tmp_7.y19_1 = tmp$ret$7;
    this.z19_1 = effectCoroutineContext.b4(this.h19_1).b4(this.y19_1);
    this.a1a_1 = new RecomposerInfoImpl(this);
    this.b1a_1 = 8;
  }
  protoOf(Recomposer).c12 = function () {
    return this.z19_1;
  };
  protoOf(Recomposer).b1d = function ($completion) {
    var tmp0 = recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
    return tmp0;
  };
  protoOf(Recomposer).lv = function () {
    return 1000;
  };
  protoOf(Recomposer).jv = function () {
    return false;
  };
  protoOf(Recomposer).kv = function (table) {
  };
  protoOf(Recomposer).i15 = function (composition) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.i19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.n19_1.i(composition)) {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this.n19_1;
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
      tmp0_safe_receiver.j3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(Recomposer).bz = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.i19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.p19_1;
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
      tmp0_safe_receiver.j3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(Recomposer).e11 = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.i19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    tmp$ret$0 = addMultiValue(this.q19_1, reference.dz_1, reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Recomposer).yz = function (reference, data) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.i19_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_set = this.r19_1;
    tmp0_set.x2(reference, data);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(Recomposer).mz = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.i19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    tmp$ret$0 = this.r19_1.c7(reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(Recomposer).o16 = function (composition, content) {
    var composerWasComposing = composition.g15();
    try {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_9().b1b(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.c1b();
            try {
              composition.p16(content);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.d1b(previous);
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
      Companion_getInstance_9().d1a();
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.i19_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.x19_1.q1().i4(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.l19_1.i(composition)) {
        var tmp0_this = this;
        var tmp0_plusAssign = tmp0_this.l19_1;
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
      composition.c16();
      composition.d16();
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
      Companion_getInstance_9().d1a();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.b2(key);
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
    var value_0 = _this__u8e3s4.b2(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      _this__u8e3s4.x2(key, answer);
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
    var groupsToMove = fromWriter.zx(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.hr_1);
    if (fromWriter.uq_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.zq_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.rq_1;
    var currentGroup = toWriter.hr_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.rq_1;
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
    var slots = toWriter.sq_1;
    var currentSlot = toWriter.xq_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.sq_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    tmp$ret$5 = slots;
    var parent = toWriter.ir_1;
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
    var slotsGapOwner = toWriter.br_1;
    var slotsGapLen = toWriter.ar_1;
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
        tmp$ret$10 = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.zq_1, slotsGapLen, slotsCapacity);
        tmp$ret$11 = tmp$ret$10;
        var newDataAnchor = tmp$ret$11;
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          var tmp1 = slotsGapOwner;
          slotsGapOwner = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.br_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.tq_1, fromIndex, fromWriter.f());
    var endAnchors = locationOf(fromWriter.tq_1, sourceGroupsEnd, fromWriter.f());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.tq_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.g(anchorIndex);
          var tmp3_this = sourceAnchor;
          tmp3_this.l10_1 = tmp3_this.l10_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.tq_1, toWriter.hr_1, toWriter.f());
      toWriter.tq_1.i7(insertLocation, anchors);
      sourceAnchors.s6(startAnchors, endAnchors).d6();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.jw(fromIndex);
    var tmp_1;
    if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.rw();
        fromWriter.u11(parentGroup - fromWriter.hr_1 | 0);
        fromWriter.rw();
      }
      fromWriter.u11(fromIndex - fromWriter.hr_1 | 0);
      var anchorsRemoved = fromWriter.qs();
      if (needsStartGroups) {
        fromWriter.pw();
        fromWriter.gy();
        fromWriter.pw();
        fromWriter.gy();
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
    tmp4_this.dr_1 = tmp4_this.dr_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.hr_1 = currentGroup + groupsToMove | 0;
      toWriter.xq_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.cr_1 > 0;
    $this.gr_1.hv($this.dr_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.hr_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().uw_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().uw_1) : false;
      initGroup($this.rq_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.ir_1, $this.xq_1);
      $this.yq_1 = $this.xq_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.sq_1;
        var currentSlot = $this.xq_1;
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
        $this.xq_1 = currentSlot;
      }
      $this.dr_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.ir_1 = current;
      $this.hr_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.ir_1;
      $this.er_1.hv(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.hr_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().uw_1)) {
        if (isNode) {
          $this.c1d(aux);
        } else {
          $this.m11(aux);
        }
      }
      $this.xq_1 = slotIndex($this.rq_1, $this, currentGroupAddress);
      $this.yq_1 = dataIndex_0($this.rq_1, $this, groupIndexToAddress($this, $this.hr_1 + 1 | 0));
      $this.dr_1 = nodeCount($this.rq_1, currentGroupAddress);
      $this.ir_1 = currentGroup;
      $this.hr_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.rq_1, currentGroupAddress) | 0;
    }
    tmp.wq_1 = tmp_0;
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
    return group >= 0 ? containsMark($this.rq_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.rq_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.kr_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.uz()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.e1d(), tmp0_safe_receiver);
      }
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.kr_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.kr_1 = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.f1d(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.rq_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.rq_1, groupAddress, containsAnyMarks);
      var parent = $this.jw(group);
      if (parent >= 0) {
        set.f1d(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.zx(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.rq_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.zx(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.fr_1.hv((_get_capacity__a9k9f3($this) - $this.vq_1 | 0) - $this.wq_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.vq_1 | 0) - $this.fr_1.wx() | 0;
    $this.wq_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.uq_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.rq_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.rq_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.vq_1;
    var gapStart = $this.uq_1;
    if (!(gapStart === index)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = $this.tq_1;
      tmp$ret$0 = !tmp0_isNotEmpty.h();
      if (tmp$ret$0) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.rq_1;
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
        var oldAnchor = parentAnchor($this.rq_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.rq_1, groupAddress, newAnchor);
        }
        var tmp0 = groupAddress;
        groupAddress = tmp0 + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.uq_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.ar_1;
    var gapStart = $this.zq_1;
    var slotsGapOwner = $this.br_1;
    if (!(gapStart === index)) {
      var slots = $this.sq_1;
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
      var slotsSize = $this.sq_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.uq_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.rq_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp5_runtimeCheck = anchor >= 0;
          if (!tmp5_runtimeCheck) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            var message = tmp$ret$3;
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.rq_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          var tmp0 = updateAddress;
          updateAddress = tmp0 + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.vq_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.rq_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp6_runtimeCheck = anchor_0 < 0;
          if (!tmp6_runtimeCheck) {
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            var message_0 = tmp$ret$4;
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.rq_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          var tmp1 = updateAddress_0;
          updateAddress_0 = tmp1 + 1 | 0;
          if (updateAddress_0 === $this.uq_1)
            updateAddress_0 = updateAddress_0 + $this.vq_1 | 0;
        }
      }
      $this.br_1 = newSlotsGapOwner;
    }
    $this.zq_1 = index;
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.hr_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.uq_1;
      var gapLen = $this.vq_1;
      var oldCapacity = $this.rq_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.rq_1;
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
        $this.rq_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.wq_1;
      if (currentEnd >= gapStart)
        $this.wq_1 = currentEnd + size | 0;
      $this.uq_1 = gapStart + size | 0;
      $this.vq_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.br_1 < gapStart ? 0 : $this.zq_1, $this.ar_1, $this.sq_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.rq_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.br_1;
      if (slotsGapOwner >= gapStart) {
        $this.br_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.xq_1, group);
      var gapStart = $this.zq_1;
      var gapLen = $this.ar_1;
      if (gapLen < size) {
        var slots = $this.sq_1;
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
        $this.sq_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.yq_1;
      if (currentDataEnd >= gapStart)
        $this.yq_1 = currentDataEnd + size | 0;
      $this.zq_1 = gapStart + size | 0;
      $this.ar_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.tq_1;
      moveGroupGapTo($this, start);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.h();
      if (tmp$ret$0)
        anchorsRemoved = removeAnchors($this, start, len);
      $this.uq_1 = start;
      var previousGapLen = $this.vq_1;
      var newGapLen = previousGapLen + len | 0;
      $this.vq_1 = newGapLen;
      var slotsGapOwner = $this.br_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp$ret$1 = Math.max(start, tmp0_max);
        tmp_0.br_1 = tmp$ret$1;
      }
      if ($this.wq_1 >= $this.uq_1) {
        var tmp0_this = $this;
        tmp0_this.wq_1 = tmp0_this.wq_1 - len | 0;
      }
      if (containsGroupMark($this, $this.ir_1)) {
        updateContainsMark($this, $this.ir_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.ar_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.zq_1 = start;
      $this.ar_1 = gapLen + len | 0;
      fill_0($this.sq_1, null, start, start + len | 0);
      var currentDataEnd = $this.yq_1;
      if (currentDataEnd >= start)
        $this.yq_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = address < $this.rq_1.length ? isNode($this.rq_1, address) : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.sq_1[dataIndexToDataAddress($this, nodeIndex($this.rq_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.vq_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.tq_1, previousGapStart, size);
      $l$loop_0: while (index < $this.tq_1.f()) {
        var anchor = $this.tq_1.g(index);
        var location = anchor.l10_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.l10_1 = size + location | 0;
            var tmp0 = index;
            index = tmp0 + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.tq_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.tq_1.f()) {
        var anchor_0 = $this.tq_1.g(index_0);
        var location_0 = anchor_0.l10_1;
        if (location_0 >= 0) {
          anchor_0.l10_1 = -(size - location_0 | 0) | 0;
          var tmp1 = index_0;
          index_0 = tmp1 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.vq_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.tq_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    tmp$ret$0 = tmp0_let >= $this.tq_1.f() ? tmp0_let - 1 | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    var index = tmp$ret$1;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.tq_1.g(index);
      var location = $this.lz(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.l10_1 = IntCompanionObject_getInstance().MIN_VALUE;
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
      $this.tq_1.s6(removeAnchorStart, removeAnchorEnd).d6();
    }
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.f();
    var index = locationOf($this.tq_1, originalLocation, groupsSize);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var removedAnchors = tmp$ret$0;
    if (index >= 0) {
      $l$loop: while (index < $this.tq_1.f()) {
        var anchor = $this.tq_1.g(index);
        var location = $this.lz(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.tq_1.b3(index);
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
        var anchorIndex = $this.lz(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.uq_1) {
          item.l10_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.l10_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.tq_1, newAnchorIndex, groupsSize);
        $this.tq_1.q6(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.rq_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.uq_1 ? index : index + $this.vq_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.zq_1 ? dataIndex : dataIndex + $this.ar_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.rq_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.sq_1.length - $this.ar_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.ar_1, $this.sq_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.sq_1.length - $this.ar_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.ar_1, $this.sq_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.zq_1, $this.ar_1, $this.sq_1.length));
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
    this.h1d_1 = $end;
    this.i1d_1 = this$0;
    this.g1d_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).d = function () {
    return this.g1d_1 < this.h1d_1;
  };
  protoOf(SlotWriter$groupSlots$1).e = function () {
    var tmp;
    if (this.d()) {
      var tmp_0 = this.i1d_1.sq_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.g1d_1;
      tmp0_this.g1d_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.i1d_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    Companion_getInstance_4();
    this.qq_1 = table;
    this.rq_1 = this.qq_1.tu_1;
    this.sq_1 = this.qq_1.vu_1;
    this.tq_1 = this.qq_1.av_1;
    this.uq_1 = this.qq_1.uu_1;
    this.vq_1 = (this.rq_1.length / 5 | 0) - this.qq_1.uu_1 | 0;
    this.wq_1 = this.qq_1.uu_1;
    this.xq_1 = 0;
    this.yq_1 = 0;
    this.zq_1 = this.qq_1.wu_1;
    this.ar_1 = this.sq_1.length - this.qq_1.wu_1 | 0;
    this.br_1 = this.qq_1.uu_1;
    this.cr_1 = 0;
    this.dr_1 = 0;
    this.er_1 = new IntStack();
    this.fr_1 = new IntStack();
    this.gr_1 = new IntStack();
    this.hr_1 = 0;
    this.ir_1 = -1;
    this.jr_1 = false;
    this.kr_1 = null;
  }
  protoOf(SlotWriter).s10 = function () {
    return this.hr_1 < this.wq_1 ? isNode(this.rq_1, groupIndexToAddress(this, this.hr_1)) : false;
  };
  protoOf(SlotWriter).ry = function (index) {
    return isNode(this.rq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).sy = function (index) {
    return nodeCount(this.rq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).iw = function (index) {
    return key(this.rq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).hw = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.rq_1, address) ? this.sq_1[objectKeyIndex(this.rq_1, address)] : null;
  };
  protoOf(SlotWriter).zx = function (index) {
    return groupSize(this.rq_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).gw = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.rq_1, address) ? this.sq_1[auxIndex(this.rq_1, this, address)] : Companion_getInstance_1().uw_1;
  };
  protoOf(SlotWriter).q10 = function (index) {
    return (index > this.ir_1 ? index < this.wq_1 : false) ? true : this.ir_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).t10 = function (index) {
    return this.r10(index, this.hr_1);
  };
  protoOf(SlotWriter).r10 = function (index, group) {
    var tmp;
    if (group === this.ir_1) {
      tmp = this.wq_1;
    } else if (group > this.er_1.a10(0)) {
      tmp = group + this.zx(group) | 0;
    } else {
      var openIndex = this.er_1.j1d(group);
      tmp = openIndex < 0 ? group + this.zx(group) | 0 : (_get_capacity__a9k9f3(this) - this.vq_1 | 0) - this.fr_1.qy(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).tz = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.rq_1, address) ? this.sq_1[dataIndexToDataAddress(this, nodeIndex(this.rq_1, this, address))] : null;
  };
  protoOf(SlotWriter).h11 = function (anchor) {
    return this.tz(anchor.k1d(this));
  };
  protoOf(SlotWriter).jw = function (index) {
    return parent(this.rq_1, this, index);
  };
  protoOf(SlotWriter).zv = function () {
    this.jr_1 = true;
    if (this.er_1.h()) {
      moveGroupGapTo(this, this.f());
      moveSlotGapTo(this, this.sq_1.length - this.ar_1 | 0, this.uq_1);
      recalculateMarks(this);
    }
    this.qq_1.l1d(this, this.rq_1, this.uq_1, this.sq_1, this.zq_1, this.tq_1);
  };
  protoOf(SlotWriter).h14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.cr_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      tmp$ret$0 = 'Cannot reset when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.hr_1 = 0;
    this.wq_1 = _get_capacity__a9k9f3(this) - this.vq_1 | 0;
    this.xq_1 = 0;
    this.yq_1 = 0;
    this.dr_1 = 0;
  };
  protoOf(SlotWriter).wz = function (value) {
    var result = this.m1d();
    this.n1d(value);
    return result;
  };
  protoOf(SlotWriter).m11 = function (value) {
    var address = groupIndexToAddress(this, this.hr_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = hasAux(this.rq_1, address);
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.sq_1[dataIndexToDataAddress(this, auxIndex(this.rq_1, this, address))] = value;
  };
  protoOf(SlotWriter).g13 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.cr_1 >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$0 = 'Cannot insert auxiliary data when not inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.ir_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = !hasAux(this.rq_1, parentGroupAddress);
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$1 = 'Group already has auxiliary data';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.rq_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.xq_1 > auxIndex_0) {
      var slotsToMove = this.xq_1 - auxIndex_0 | 0;
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
        this.sq_1[auxAddress + 2 | 0] = this.sq_1[auxAddress + 1 | 0];
      }
      this.sq_1[auxAddress + 1 | 0] = this.sq_1[auxAddress];
    }
    addAux(this.rq_1, parentGroupAddress);
    this.sq_1[auxAddress] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.xq_1;
    tmp0_this.xq_1 = tmp1 + 1 | 0;
  };
  protoOf(SlotWriter).c1d = function (value) {
    return updateNodeOfGroup(this, this.hr_1, value);
  };
  protoOf(SlotWriter).g11 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.k1d(this), value);
  };
  protoOf(SlotWriter).n1d = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.xq_1 <= this.yq_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Writing to an invalid slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.sq_1[dataIndexToDataAddress(this, this.xq_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).j11 = function (index, value) {
    var address = groupIndexToAddress(this, this.hr_1);
    var slotsStart = slotIndex(this.rq_1, this, address);
    var slotsEnd = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, this.hr_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + this.hr_1;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.sq_1[slotAddress];
    this.sq_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).m1d = function () {
    if (this.cr_1 > 0) {
      insertSlots(this, 1, this.ir_1);
    }
    var tmp = this.sq_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.xq_1;
    tmp0_this.xq_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).s11 = function (anchor, index) {
    return this.o1d(this.lz(anchor), index);
  };
  protoOf(SlotWriter).o1d = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.rq_1, this, address);
    var slotsEnd = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().uw_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.sq_1[slotAddress];
  };
  protoOf(SlotWriter).u11 = function (amount) {
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
    var tmp1_check = this.cr_1 <= 0;
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
    var index = this.hr_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp2_runtimeCheck = index >= this.ir_1 ? index <= this.wq_1 : false;
    if (!tmp2_runtimeCheck) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$2 = 'Cannot seek outside the current group (' + this.ir_1 + '-' + this.wq_1 + ')';
      var message_1 = tmp$ret$2;
      composeRuntimeError(toString(message_1));
    }
    this.hr_1 = index;
    var newSlot = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, index));
    this.xq_1 = newSlot;
    this.yq_1 = newSlot;
  };
  protoOf(SlotWriter).pw = function () {
    var newGroup = this.wq_1;
    this.hr_1 = newGroup;
    this.xq_1 = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).kx = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.cr_1;
    tmp0_this.cr_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).hy = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.cr_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end insert';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.cr_1 = tmp0_this.cr_1 - 1 | 0;
    if (tmp0_this.cr_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = this.gr_1.f() === this.er_1.f();
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
  protoOf(SlotWriter).rw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.cr_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      tmp$ret$0 = 'Key must be supplied when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().uw_1, false, Companion_getInstance_1().uw_1);
  };
  protoOf(SlotWriter).vw = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().uw_1);
  };
  protoOf(SlotWriter).xw = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_1().uw_1);
  };
  protoOf(SlotWriter).ww = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).gy = function () {
    var inserting = this.cr_1 > 0;
    var currentGroup = this.hr_1;
    var currentGroupEnd = this.wq_1;
    var groupIndex = this.ir_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.dr_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.rq_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.rq_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.rq_1, groupAddress, newNodes);
      this.dr_1 = this.gr_1.wx() + (isNode_0 ? 1 : newNodes) | 0;
      this.ir_1 = parent(this.rq_1, this, groupIndex);
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
      var oldGroupSize = groupSize(this.rq_1, groupAddress);
      var oldNodes = nodeCount(this.rq_1, groupAddress);
      updateGroupSize(this.rq_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.rq_1, groupAddress, newNodes);
      var newParent = this.er_1.wx();
      restoreCurrentGroupEnd(this);
      this.ir_1 = newParent;
      var groupParent = parent(this.rq_1, this, groupIndex);
      this.dr_1 = this.gr_1.wx();
      if (groupParent === newParent) {
        var tmp0_this = this;
        tmp0_this.dr_1 = tmp0_this.dr_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.rq_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.rq_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.rq_1, currentAddress, nodeCount(this.rq_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.rq_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.rq_1, this, current);
          }
        }
        var tmp1_this = this;
        tmp1_this.dr_1 = tmp1_this.dr_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).g14 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.cr_1 <= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.ir_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = index >= parent ? index < this.wq_1 : false;
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.hr_1;
      var oldCurrentSlot = this.xq_1;
      var oldCurrentSlotEnd = this.yq_1;
      this.hr_1 = index;
      this.rw();
      this.hr_1 = oldCurrent;
      this.xq_1 = oldCurrentSlot;
      this.yq_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).x11 = function (anchor) {
    return this.g14(anchor.k1d(this));
  };
  protoOf(SlotWriter).fw = function () {
    var groupAddress = groupIndexToAddress(this, this.hr_1);
    var newGroup = this.hr_1 + groupSize(this.rq_1, groupAddress) | 0;
    this.hr_1 = newGroup;
    this.xq_1 = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.rq_1, groupAddress) ? 1 : nodeCount(this.rq_1, groupAddress);
  };
  protoOf(SlotWriter).qs = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.cr_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot remove group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.hr_1;
    var oldSlot = this.xq_1;
    var count = this.fw();
    var tmp0_safe_receiver = this.kr_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.uz() ? tmp0_safe_receiver.m12() >= oldGroup : false) {
        tmp0_safe_receiver.e1d();
      }
      tmp$ret$1 = Unit_getInstance();
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.hr_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.xq_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.hr_1 = oldGroup;
    this.xq_1 = oldSlot;
    var tmp1_this = this;
    tmp1_this.dr_1 = tmp1_this.dr_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).lr = function () {
    var start = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, this.hr_1));
    var end = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, this.hr_1 + this.zx(this.hr_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).n11 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.cr_1 === 0;
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
    var current = this.hr_1;
    var parent = this.ir_1;
    var parentEnd = this.wq_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.rq_1, groupIndexToAddress(this, groupToMove)) | 0;
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
    var moveLen = groupSize(this.rq_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.xq_1;
    var dataStart = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.rq_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.hr_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.rq_1;
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
      var slots = this.sq_1;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
      tmp$ret$9 = slots;
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.zq_1;
    var slotsGapLen = this.ar_1;
    var slotsCapacity = this.sq_1.length;
    var slotsGapOwner = this.br_1;
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
    fixParentAnchorsFor(this, parent, this.wq_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).xz = function (anchor, offset, writer) {
    runtimeCheck(writer.cr_1 > 0);
    runtimeCheck(this.cr_1 === 0);
    runtimeCheck(anchor.c15());
    var location = this.lz(anchor) + offset | 0;
    var currentGroup = this.hr_1;
    runtimeCheck(currentGroup <= location ? location < this.wq_1 : false);
    var parent = this.jw(location);
    var size = this.zx(location);
    var nodes = this.ry(location) ? 1 : this.sy(location);
    var result = moveGroup(Companion_getInstance_4(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.rq_1, currentAddress, groupSize(this.rq_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.rq_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.rq_1, currentAddress, nodeCount(this.rq_1, currentAddress) - nodes | 0);
        }
      }
      current = this.jw(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.dr_1 >= nodes);
      var tmp0_this = this;
      tmp0_this.dr_1 = tmp0_this.dr_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).w11 = function (table, index) {
    runtimeCheck(this.cr_1 > 0);
    if ((index === 0 ? this.hr_1 === 0 : false) ? this.qq_1.uu_1 === 0 : false) {
      var myGroups = this.rq_1;
      var mySlots = this.sq_1;
      var myAnchors = this.tq_1;
      var groups = table.tu_1;
      var groupsSize = table.uu_1;
      var slots = table.vu_1;
      var slotsSize = table.wu_1;
      this.rq_1 = groups;
      this.sq_1 = slots;
      this.tq_1 = table.av_1;
      this.uq_1 = groupsSize;
      this.vq_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.zq_1 = slotsSize;
      this.ar_1 = slots.length - slotsSize | 0;
      this.br_1 = groupsSize;
      table.p1d(myGroups, 0, mySlots, 0, myAnchors);
      return this.tq_1;
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.ow();
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
      tmp0_let.zv();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(SlotWriter).r11 = function (offset, table, index) {
    runtimeCheck(this.cr_1 <= 0 ? this.zx(this.hr_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.hr_1;
    var previousCurrentSlot = this.xq_1;
    var previousCurrentSlotEnd = this.yq_1;
    this.u11(offset);
    this.rw();
    this.kx();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.ow();
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
      tmp0_let.zv();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var anchors = tmp$ret$3;
    this.hy();
    this.gy();
    this.hr_1 = previousCurrentGroup;
    this.xq_1 = previousCurrentSlot;
    this.yq_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).lx = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.tq_1;
    var tmp1_getOrAdd = this.f();
    var location = search$accessor$3b1dzq(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index <= this.uq_1 ? index : -(this.f() - index | 0) | 0);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.q6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.g(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  protoOf(SlotWriter).q1d = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.rq_1, groupAddress)) {
      updateMark(this.rq_1, groupAddress, true);
      if (!containsMark(this.rq_1, groupAddress)) {
        updateContainsMark(this, this.jw(group));
      }
    }
  };
  protoOf(SlotWriter).zy = function (group, $super) {
    group = group === VOID ? this.ir_1 : group;
    var tmp;
    if ($super === VOID) {
      this.q1d(group);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.q1d.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).lz = function (anchor) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.l10_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? this.f() + tmp0_let | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.hr_1 + ' end=' + this.wq_1 + ' size = ' + this.f() + ' ' + ('gap=' + this.uq_1 + '-' + (this.uq_1 + this.vq_1 | 0) + ')');
  };
  protoOf(SlotWriter).f = function () {
    return _get_capacity__a9k9f3(this) - this.vq_1 | 0;
  };
  function SlotTable() {
    this.tu_1 = new Int32Array(0);
    this.uu_1 = 0;
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
    tmp.vu_1 = tmp_2;
    this.wu_1 = 0;
    this.xu_1 = 0;
    this.yu_1 = false;
    this.zu_1 = 0;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_4.av_1 = tmp$ret$2;
  }
  protoOf(SlotTable).wi = function () {
    return this.uu_1 === 0;
  };
  protoOf(SlotTable).bv = function () {
    if (this.yu_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.xu_1;
    tmp0_this.xu_1 = tmp1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).ow = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.yu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = this.xu_1 <= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    this.yu_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.zu_1;
    tmp0_this.zu_1 = tmp1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).lx = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.yu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$0 = 'use active SlotWriter to create an anchor location instead ';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = 0 <= index ? index < this.uu_1 : false;
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
    var tmp2_getOrAdd = this.av_1;
    var tmp3_getOrAdd = this.uu_1;
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
  protoOf(SlotTable).lz = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.yu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = anchor.c15();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$1 = 'Anchor refers to a group that was removed';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.l10_1;
  };
  protoOf(SlotTable).i16 = function (anchor) {
    var tmp;
    if (anchor.c15()) {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$3b1dzq(this.av_1, anchor.l10_1, this.uu_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp$ret$0 = tmp0_let >= 0 ? equals(this.av_1.g(tmp0_let), anchor) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).f15 = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.yu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$0 = 'Writer is active';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = 0 <= groupIndex ? groupIndex < this.uu_1 : false;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$1 = 'Invalid group index';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.i16(anchor)) {
      var containsUpper = groupIndex + groupSize(this.tu_1, groupIndex) | 0;
      var containsArg = anchor.l10_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).r1d = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = reader.nv_1 === this ? this.xu_1 > 0 : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected reader close()';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.xu_1;
    tmp0_this.xu_1 = tmp1 - 1 | 0;
  };
  protoOf(SlotTable).l1d = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    var tmp0_require = writer.qq_1 === this ? this.yu_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected writer close()';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.yu_1 = false;
    this.p1d(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).p1d = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.tu_1 = groups;
    this.uu_1 = groupsSize;
    this.vu_1 = slots;
    this.wu_1 = slotsSize;
    this.av_1 = anchors;
  };
  protoOf(SlotTable).zz = function () {
    return this.uu_1 > 0 ? containsMark(this.tu_1, 0) : false;
  };
  protoOf(SlotTable).c = function () {
    return new GroupIterator(this, 0, this.uu_1);
  };
  function Anchor(loc) {
    this.l10_1 = loc;
  }
  protoOf(Anchor).c15 = function () {
    return !(this.l10_1 === IntCompanionObject_getInstance().MIN_VALUE);
  };
  protoOf(Anchor).v11 = function (slots) {
    return slots.lz(this);
  };
  protoOf(Anchor).k1d = function (writer) {
    return writer.lz(this);
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
    this.d1d_1 = list;
  }
  protoOf(PrioritySet).f1d = function (value) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.d1d_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    if (tmp$ret$0) {
      tmp = this.d1d_1.g(0) === value ? true : this.d1d_1.g(this.d1d_1.f() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.d1d_1.f();
    this.d1d_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.d1d_1.g(parent);
      if (value > parentValue) {
        this.d1d_1.z5(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.d1d_1.z5(index, value);
  };
  protoOf(PrioritySet).uz = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.d1d_1;
    tmp$ret$0 = !tmp0_isNotEmpty.h();
    return tmp$ret$0;
  };
  protoOf(PrioritySet).m12 = function () {
    return first(this.d1d_1);
  };
  protoOf(PrioritySet).e1d = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.d1d_1.f() > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      tmp$ret$0 = 'Set is empty';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var value = this.d1d_1.g(0);
    $l$loop: while (true) {
      var tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.d1d_1;
      tmp$ret$1 = !tmp1_isNotEmpty.h();
      if (tmp$ret$1) {
        tmp = this.d1d_1.g(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.d1d_1.z5(0, last(this.d1d_1));
      this.d1d_1.b3(this.d1d_1.f() - 1 | 0);
      var index = 0;
      var size = this.d1d_1.f();
      var max = this.d1d_1.f() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.d1d_1.g(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.d1d_1.g(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.d1d_1.g(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.d1d_1.z5(index, rightValue);
              this.d1d_1.z5(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.d1d_1.z5(index, leftValue);
          this.d1d_1.z5(left, indexValue);
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
      tmp = $this.qv_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().uw_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.qv_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().uw_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.qv_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.nv_1 = table;
    this.ov_1 = this.nv_1.tu_1;
    this.pv_1 = this.nv_1.uu_1;
    this.qv_1 = this.nv_1.vu_1;
    this.rv_1 = this.nv_1.wu_1;
    this.sv_1 = false;
    this.tv_1 = 0;
    this.uv_1 = this.pv_1;
    this.vv_1 = -1;
    this.wv_1 = 0;
    this.xv_1 = 0;
    this.yv_1 = 0;
  }
  protoOf(SlotReader).f = function () {
    return this.pv_1;
  };
  protoOf(SlotReader).jw = function (index) {
    return parentAnchor(this.ov_1, index);
  };
  protoOf(SlotReader).s10 = function () {
    return isNode(this.ov_1, this.tv_1);
  };
  protoOf(SlotReader).ry = function (index) {
    return isNode(this.ov_1, index);
  };
  protoOf(SlotReader).sy = function (index) {
    return nodeCount(this.ov_1, index);
  };
  protoOf(SlotReader).tz = function (index) {
    return isNode(this.ov_1, index) ? node(this.ov_1, this, index) : null;
  };
  protoOf(SlotReader).dy = function () {
    return this.iy() ? true : this.tv_1 === this.uv_1;
  };
  protoOf(SlotReader).iy = function () {
    return this.wv_1 > 0;
  };
  protoOf(SlotReader).vz = function () {
    return groupSize(this.ov_1, this.tv_1);
  };
  protoOf(SlotReader).zx = function (index) {
    return groupSize(this.ov_1, index);
  };
  protoOf(SlotReader).cy = function () {
    return this.uv_1;
  };
  protoOf(SlotReader).gx = function () {
    var tmp;
    if (this.tv_1 < this.uv_1) {
      tmp = key(this.ov_1, this.tv_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).iw = function (index) {
    return key(this.ov_1, index);
  };
  protoOf(SlotReader).t12 = function () {
    return this.xv_1 - slotAnchor(this.ov_1, this.vv_1) | 0;
  };
  protoOf(SlotReader).ty = function (index) {
    return hasObjectKey(this.ov_1, index);
  };
  protoOf(SlotReader).ix = function () {
    return this.tv_1 < this.uv_1 ? objectKey(this.ov_1, this, this.tv_1) : null;
  };
  protoOf(SlotReader).hw = function (index) {
    return objectKey(this.ov_1, this, index);
  };
  protoOf(SlotReader).qw = function () {
    return this.tv_1 < this.uv_1 ? aux(this.ov_1, this, this.tv_1) : 0;
  };
  protoOf(SlotReader).gw = function (index) {
    return aux(this.ov_1, this, index);
  };
  protoOf(SlotReader).f11 = function (index) {
    return hasMark(this.ov_1, index);
  };
  protoOf(SlotReader).u10 = function (index) {
    return containsMark(this.ov_1, index);
  };
  protoOf(SlotReader).uy = function () {
    return this.vv_1 >= 0 ? nodeCount(this.ov_1, this.vv_1) : 0;
  };
  protoOf(SlotReader).v12 = function (index) {
    return this.v10(this.tv_1, index);
  };
  protoOf(SlotReader).v10 = function (group, index) {
    var start = slotAnchor(this.ov_1, group);
    var next = group + 1 | 0;
    var end = next < this.pv_1 ? dataAnchor(this.ov_1, next) : this.rv_1;
    var address = start + index | 0;
    return address < end ? this.qv_1[address] : Companion_getInstance_1().uw_1;
  };
  protoOf(SlotReader).e = function () {
    if (this.wv_1 > 0 ? true : this.xv_1 >= this.yv_1)
      return Companion_getInstance_1().uw_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.xv_1;
    tmp0_this.xv_1 = tmp1 + 1 | 0;
    return this.qv_1[tmp1];
  };
  protoOf(SlotReader).tw = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.wv_1;
    tmp0_this.wv_1 = tmp1 + 1 | 0;
  };
  protoOf(SlotReader).fy = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.wv_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end empty';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.wv_1;
    tmp0_this.wv_1 = tmp1 - 1 | 0;
  };
  protoOf(SlotReader).zv = function () {
    this.sv_1 = true;
    this.nv_1.r1d(this);
  };
  protoOf(SlotReader).rw = function () {
    if (this.wv_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = parentAnchor(this.ov_1, this.tv_1) === this.vv_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        tmp$ret$0 = 'Invalid slot table detected';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.vv_1 = this.tv_1;
      this.uv_1 = this.tv_1 + groupSize(this.ov_1, this.tv_1) | 0;
      var tmp0_this = this;
      var tmp1 = tmp0_this.tv_1;
      tmp0_this.tv_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.xv_1 = slotAnchor(this.ov_1, current);
      this.yv_1 = current >= (this.pv_1 - 1 | 0) ? this.rv_1 : dataAnchor(this.ov_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).sw = function () {
    if (this.wv_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = isNode(this.ov_1, this.tv_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        tmp$ret$0 = 'Expected a node group';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.rw();
    }
  };
  protoOf(SlotReader).fw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.wv_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot skip while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.ov_1, this.tv_1) ? 1 : nodeCount(this.ov_1, this.tv_1);
    var tmp0_this = this;
    tmp0_this.tv_1 = tmp0_this.tv_1 + groupSize(this.ov_1, this.tv_1) | 0;
    return count;
  };
  protoOf(SlotReader).pw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.wv_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.tv_1 = this.uv_1;
  };
  protoOf(SlotReader).ux = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.wv_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      tmp$ret$0 = 'Cannot reposition while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.tv_1 = index;
    var parent = index < this.pv_1 ? parentAnchor(this.ov_1, index) : -1;
    this.vv_1 = parent;
    if (parent < 0)
      this.uv_1 = this.pv_1;
    else
      this.uv_1 = parent + groupSize(this.ov_1, parent) | 0;
    this.xv_1 = 0;
    this.yv_1 = 0;
  };
  protoOf(SlotReader).oy = function (index) {
    var newCurrentEnd = index + groupSize(this.ov_1, index) | 0;
    var current = this.tv_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = current >= index ? current <= newCurrentEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.vv_1 = index;
    this.uv_1 = newCurrentEnd;
    this.xv_1 = 0;
    this.yv_1 = 0;
  };
  protoOf(SlotReader).ey = function () {
    if (this.wv_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = this.tv_1 === this.uv_1;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        tmp$ret$0 = 'endGroup() not called at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.ov_1, this.vv_1);
      this.vv_1 = parent;
      this.uv_1 = parent < 0 ? this.pv_1 : parent + groupSize(this.ov_1, parent) | 0;
    }
  };
  protoOf(SlotReader).hx = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    if (this.wv_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.tv_1;
    while (childIndex < this.uv_1) {
      var tmp = key(this.ov_1, childIndex);
      var tmp_0 = objectKey(this.ov_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.ov_1, childIndex) ? 1 : nodeCount(this.ov_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.ov_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.tv_1 + ', key=' + this.gx() + ', ' + ('parent=' + this.vv_1 + ', end=' + this.uv_1 + ')');
  };
  protoOf(SlotReader).lx = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.nv_1.av_1;
    var tmp1_getOrAdd = this.pv_1;
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
      var tmp0_let = _this__u8e3s4.g(mid).l10_1;
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
    if (!($this.s1d_1.zu_1 === $this.v1d_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.s1d_1 = table;
    this.t1d_1 = end;
    this.u1d_1 = start;
    this.v1d_1 = this.s1d_1.zu_1;
    if (this.s1d_1.yu_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).d = function () {
    return this.u1d_1 < this.t1d_1;
  };
  protoOf(GroupIterator).e = function () {
    validateRead(this);
    var group = this.u1d_1;
    var tmp0_this = this;
    tmp0_this.u1d_1 = tmp0_this.u1d_1 + groupSize(this.s1d_1.tu_1, group) | 0;
    return new SlotTableGroup(this.s1d_1, group, this.v1d_1);
  };
  function validateRead_0($this) {
    if (!($this.w1d_1.zu_1 === $this.y1d_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.zu_1 : version;
    this.w1d_1 = table;
    this.x1d_1 = group;
    this.y1d_1 = version;
  }
  protoOf(SlotTableGroup).c = function () {
    validateRead_0(this);
    return new GroupIterator(this.w1d_1, this.x1d_1 + 1 | 0, this.x1d_1 + groupSize(this.w1d_1.tu_1, this.x1d_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.mx_1 = key;
    this.nx_1 = objectKey;
    this.ox_1 = location;
    this.px_1 = nodes;
    this.qx_1 = index;
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
  protoOf(StructuralEqualityPolicy).a1e = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).c19 = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.a1e(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
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
    this.e1e_1 = myValue;
  }
  protoOf(StateStateRecord).f1e = function (value) {
    var tmp = this;
    tmp.e1e_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).e1e_1;
  };
  protoOf(StateStateRecord).g1e = function () {
    return new StateStateRecord(this.e1e_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.h1e_1 = policy;
    this.i1e_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).f17 = function () {
    return this.h1e_1;
  };
  protoOf(SnapshotMutableStateImpl).kn = function (value) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.i1e_1;
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp;
    if (!this.f17().c19(tmp1__anonymous__uwfjfc.e1e_1, value)) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp2_overwritable = this.i1e_1;
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
      snapshot = Companion_getInstance_9().jp();
      var tmp3__anonymous__ufb84q = overwritableRecord(tmp2_overwritable, this, snapshot, tmp1__anonymous__uwfjfc);
      tmp3__anonymous__ufb84q.e1e_1 = value;
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
  protoOf(SnapshotMutableStateImpl).q1 = function () {
    return readable_0(this.i1e_1, this).e1e_1;
  };
  protoOf(SnapshotMutableStateImpl).j1e = function () {
    return this.i1e_1;
  };
  protoOf(SnapshotMutableStateImpl).k1e = function (value) {
    var tmp = this;
    tmp.i1e_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).l1e = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.f17().c19(currentRecord.e1e_1, appliedRecord.e1e_1)) {
      tmp = current;
    } else {
      var merged = this.f17().z1d(previousRecord.e1e_1, currentRecord.e1e_1, appliedRecord.e1e_1);
      var tmp_0;
      if (!(merged == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.g1e();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).e1e_1 = merged;
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
    var tmp0_withCurrent = this.i1e_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = 'MutableState(value=' + tmp1__anonymous__uwfjfc.e1e_1 + ')@' + hashCode(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.g17_1 = new AtomicReference(get_emptyThreadMap());
    this.h17_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).dj = function () {
    var tmp = this.g17_1.dj().p1e(getCurrentThreadId());
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).i17 = function (value) {
    var key = getCurrentThreadId();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.h17_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var current = this.g17_1.dj();
    if (current.q1e(key, value))
      return Unit_getInstance();
    this.g17_1.e15(current.r1e(key, value));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  function IntStack() {
    this.fv_1 = new Int32Array(10);
    this.gv_1 = 0;
  }
  protoOf(IntStack).f = function () {
    return this.gv_1;
  };
  protoOf(IntStack).hv = function (value) {
    if (this.gv_1 >= this.fv_1.length) {
      this.fv_1 = copyOf(this.fv_1, imul(this.fv_1.length, 2));
    }
    var tmp = this.fv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.gv_1;
    tmp0_this.gv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).wx = function () {
    var tmp = this.fv_1;
    var tmp0_this = this;
    tmp0_this.gv_1 = tmp0_this.gv_1 - 1 | 0;
    return tmp[tmp0_this.gv_1];
  };
  protoOf(IntStack).a10 = function (default_0) {
    return this.gv_1 > 0 ? this.m12() : default_0;
  };
  protoOf(IntStack).m12 = function () {
    return this.fv_1[this.gv_1 - 1 | 0];
  };
  protoOf(IntStack).qy = function (index) {
    return this.fv_1[index];
  };
  protoOf(IntStack).h = function () {
    return this.gv_1 === 0;
  };
  protoOf(IntStack).d6 = function () {
    this.gv_1 = 0;
  };
  protoOf(IntStack).j1d = function (value) {
    var inductionVariable = 0;
    var last = this.gv_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.fv_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.aw_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).f = function () {
    return this.aw_1.f();
  };
  protoOf(Stack).vx = function (value) {
    return this.aw_1.a(value);
  };
  protoOf(Stack).wx = function () {
    return this.aw_1.b3(this.f() - 1 | 0);
  };
  protoOf(Stack).m12 = function () {
    return this.aw_1.g(this.f() - 1 | 0);
  };
  protoOf(Stack).qy = function (index) {
    return this.aw_1.g(index);
  };
  protoOf(Stack).h = function () {
    return this.aw_1.h();
  };
  protoOf(Stack).uz = function () {
    return !this.h();
  };
  protoOf(Stack).d6 = function () {
    return this.aw_1.d6();
  };
  protoOf(Stack).j7 = function () {
    var tmp = 0;
    var tmp_0 = this.aw_1.f();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Stack.toArray.<anonymous>' call
      tmp$ret$1 = this.aw_1.g(tmp_2);
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
    tmp$ret$0 = $this.nw_1.q1();
    return tmp$ret$0;
  }
  function LazyValueHolder(valueProducer) {
    this.nw_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).q1 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.s1e_1 = value;
  }
  protoOf(StaticValueHolder).q1 = function () {
    return this.s1e_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.s1e_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.s1e_1 == null ? 0 : hashCode(this.s1e_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.s1e_1, tmp0_other_with_cast.s1e_1))
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
    var high = $this.x18_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.y18_1[mid];
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
        var v = $this.y18_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.x18_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.y18_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.x18_1 + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.x18_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(4), null);
    tmp.y18_1 = tmp$ret$0;
    this.z18_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).b19 = function (key, value) {
    var index;
    if (this.x18_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = this.z18_1[index];
        this.z18_1[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.x18_1 === this.y18_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.y18_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newKeys = tmp$ret$0;
      var newValues = new Int32Array(imul(this.y18_1.length, 2));
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.y18_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.x18_1;
      arrayCopy(tmp1_copyInto, newKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newKeys;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.z18_1;
      var tmp5_copyInto = insertIndex + 1 | 0;
      var tmp6_copyInto = this.x18_1;
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
      var tmp7_copyInto = this.y18_1;
      arrayCopy(tmp7_copyInto, newKeys, 0, 0, insertIndex);
      tmp$ret$7 = newKeys;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = this.z18_1;
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
      this.y18_1 = newKeys;
      this.z18_1 = newValues;
    } else {
      var tmp$ret$13;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.y18_1;
      var tmp10_copyInto = this.y18_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      var tmp12_copyInto = this.x18_1;
      arrayCopy(tmp9_copyInto, tmp10_copyInto, tmp11_copyInto, insertIndex, tmp12_copyInto);
      tmp$ret$13 = tmp10_copyInto;
      var tmp$ret$18;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp13_copyInto = this.z18_1;
      var tmp14_copyInto = this.z18_1;
      var tmp15_copyInto = insertIndex + 1 | 0;
      var tmp16_copyInto = this.x18_1;
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
    this.y18_1[insertIndex] = key;
    this.z18_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.x18_1;
    tmp0_this.x18_1 = tmp1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.k10_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = $this.i10_1[mid];
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
        var k = $this.i10_1[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.k10_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = $this.i10_1[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.k10_1 + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    tmp.i10_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(capacity), null);
    tmp_0.j10_1 = tmp$ret$1;
    this.k10_1 = 0;
  }
  protoOf(IdentityArrayMap).uz = function () {
    return this.k10_1 > 0;
  };
  protoOf(IdentityArrayMap).r16 = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).q16 = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.j10_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).h15 = function (key, value) {
    var index = find_0(this, key);
    if (index >= 0) {
      this.j10_1[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = this.k10_1 === this.i10_1.length;
      var tmp;
      if (resize) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(this.k10_1, 2);
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = this.i10_1;
      }
      var destKeys = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.i10_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.k10_1;
      arrayCopy(tmp1_copyInto, destKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = destKeys;
      if (resize) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = this.i10_1;
        arrayCopy(tmp4_copyInto, destKeys, 0, 0, insertIndex);
        tmp$ret$2 = destKeys;
      }
      destKeys[insertIndex] = key;
      this.i10_1 = destKeys;
      var tmp_0;
      if (resize) {
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp5_arrayOfNulls = imul(this.k10_1, 2);
        tmp$ret$3 = fillArrayVal(Array(tmp5_arrayOfNulls), null);
        tmp_0 = tmp$ret$3;
      } else {
        tmp_0 = this.j10_1;
      }
      var destValues = tmp_0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.j10_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.k10_1;
      arrayCopy(tmp6_copyInto, destValues, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$4 = destValues;
      if (resize) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp9_copyInto = this.j10_1;
        arrayCopy(tmp9_copyInto, destValues, 0, 0, insertIndex);
        tmp$ret$5 = destValues;
      }
      destValues[insertIndex] = value;
      this.j10_1 = destValues;
      var tmp0_this = this;
      var tmp1 = tmp0_this.k10_1;
      tmp0_this.k10_1 = tmp1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).a19 = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.j10_1[index];
      var size = this.k10_1;
      var keys = this.i10_1;
      var values = this.j10_1;
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
      this.k10_1 = newSize;
      return (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return null;
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.qz_1 - 1 | 0;
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
        var v = $this.rz_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.qz_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.rz_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.qz_1 + 1 | 0) | 0;
  }
  function checkIndexBounds($this, index) {
    if (!(0 <= index ? index < $this.qz_1 : false)) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ', size ' + $this.qz_1);
    }
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.u1e_1 = this$0;
    this.t1e_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).d = function () {
    return this.t1e_1 < this.u1e_1.qz_1;
  };
  protoOf(IdentityArraySet$iterator$1).e = function () {
    var tmp = this.u1e_1.rz_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.t1e_1;
    tmp0_this.t1e_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet() {
    this.qz_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.rz_1 = tmp$ret$0;
  }
  protoOf(IdentityArraySet).f = function () {
    return this.qz_1;
  };
  protoOf(IdentityArraySet).l2 = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).i = function (element) {
    if (!isObject(element))
      return false;
    return this.l2(isObject(element) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).g = function (index) {
    checkIndexBounds(this, index);
    var tmp = this.rz_1[index];
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  protoOf(IdentityArraySet).f14 = function (value) {
    var index;
    if (this.qz_1 > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.qz_1 === this.rz_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.rz_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newSorted = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.rz_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.qz_1;
      arrayCopy(tmp1_copyInto, newSorted, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newSorted;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.rz_1;
      arrayCopy(tmp4_copyInto, newSorted, 0, 0, insertIndex);
      tmp$ret$2 = newSorted;
      this.rz_1 = newSorted;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = this.rz_1;
      var tmp6_copyInto = this.rz_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.qz_1;
      arrayCopy(tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$3 = tmp6_copyInto;
    }
    this.rz_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.qz_1;
    tmp0_this.qz_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).h = function () {
    return this.qz_1 === 0;
  };
  protoOf(IdentityArraySet).uz = function () {
    return this.qz_1 > 0;
  };
  protoOf(IdentityArraySet).v1e = function (value) {
    var index = find_1(this, value);
    if (index >= 0) {
      if (index < (this.qz_1 - 1 | 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.rz_1;
        var tmp1_copyInto = this.rz_1;
        var tmp2_copyInto = index + 1 | 0;
        var tmp3_copyInto = this.qz_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tmp3_copyInto);
        tmp$ret$0 = tmp1_copyInto;
      }
      var tmp0_this = this;
      var tmp1 = tmp0_this.qz_1;
      tmp0_this.qz_1 = tmp1 - 1 | 0;
      this.rz_1[this.qz_1] = null;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).m2 = function (elements) {
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
        tmp$ret$1 = this.l2(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).w = function (elements) {
    return this.m2(elements);
  };
  protoOf(IdentityArraySet).c = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.o14_1[$this.m14_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var index;
    if ($this.p14_1 > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if ($this.p14_1 < $this.m14_1.length) {
      var valueIndex = $this.m14_1[$this.p14_1];
      $this.n14_1[valueIndex] = value;
      var tmp0_elvis_lhs = $this.o14_1[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        $this.o14_1[valueIndex] = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < $this.p14_1) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = $this.m14_1;
        var tmp2_copyInto = $this.m14_1;
        var tmp3_copyInto = insertIndex + 1 | 0;
        var tmp4_copyInto = $this.p14_1;
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
      $this.m14_1[insertIndex] = valueIndex;
      var tmp1_this = $this;
      var tmp2 = tmp1_this.p14_1;
      tmp1_this.p14_1 = tmp2 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul($this.m14_1.length, 2);
    var valueIndex_0 = $this.p14_1;
    $this.o14_1 = copyOf_0($this.o14_1, newSize);
    var scopeSet_0 = new IdentityArraySet();
    $this.o14_1[valueIndex_0] = scopeSet_0;
    $this.n14_1 = copyOf_0($this.n14_1, newSize);
    $this.n14_1[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = $this.p14_1 + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < $this.p14_1) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = $this.m14_1;
      var tmp6_copyInto = insertIndex + 1 | 0;
      var tmp7_copyInto = $this.p14_1;
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
      var tmp8_copyInto = $this.m14_1;
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
    $this.m14_1 = newKeyOrder;
    var tmp4_this = $this;
    var tmp5 = tmp4_this.p14_1;
    tmp4_this.p14_1 = tmp5 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.p14_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
      tmp$ret$0 = ensureNotNull($this.n14_1[$this.m14_1[mid]]);
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
        tmp$ret$0 = ensureNotNull($this.n14_1[$this.m14_1[i]]);
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
    var last = $this.p14_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$1 = ensureNotNull($this.n14_1[$this.m14_1[i_0]]);
        var v_0 = tmp$ret$1;
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.p14_1 + 1 | 0) | 0;
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
    tmp.m14_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(50), null);
    tmp_4.n14_1 = tmp$ret$1;
    var tmp_5 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(50), null);
    tmp_5.o14_1 = tmp$ret$2;
    this.p14_1 = 0;
  }
  protoOf(IdentityScopeMap).s14 = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.f14(scope);
  };
  protoOf(IdentityScopeMap).q14 = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).m15 = function (value, scope) {
    var index = find_2(this, value);
    if (index >= 0) {
      var valueOrderIndex = this.m14_1[index];
      var tmp0_elvis_lhs = this.o14_1[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.v1e(scope);
      if (set.qz_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = this.p14_1;
        if (startIndex < endIndex) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp0_copyInto = this.m14_1;
          var tmp1_copyInto = this.m14_1;
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
        this.m14_1[this.p14_1 - 1 | 0] = valueOrderIndex;
        this.n14_1[valueOrderIndex] = null;
        var tmp1_this = this;
        var tmp2 = tmp1_this.p14_1;
        tmp1_this.p14_1 = tmp2 - 1 | 0;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).v15 = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.p14_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = this.m14_1[i];
        var set = ensureNotNull(this.o14_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.v1e(scope);
        if (set.qz_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = this.m14_1[destinationIndex];
            this.m14_1[destinationIndex] = valueIndex;
            this.m14_1[i] = destinationKeyOrder;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.p14_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.n14_1[this.m14_1[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.p14_1 = destinationIndex;
  };
  function MutableVector(content, size) {
    this.j17_1 = content;
    this.k17_1 = null;
    this.l17_1 = size;
    this.m17_1 = 8;
  }
  protoOf(MutableVector).f14 = function (element) {
    this.w1e(this.l17_1 + 1 | 0);
    this.j17_1[this.l17_1] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.l17_1;
    tmp0_this.l17_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).w1e = function (capacity) {
    var oldContent = this.j17_1;
    if (oldContent.length < capacity) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      tmp$ret$0 = Math.max(capacity, tmp0_max);
      var newSize = tmp$ret$0;
      this.j17_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).b3 = function (index) {
    var content = this.j17_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.l17_1 - 1 | 0;
    if (!(index === tmp$ret$0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.l17_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
      tmp$ret$1 = content;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.l17_1;
    tmp0_this.l17_1 = tmp1 - 1 | 0;
    content[this.l17_1] = null;
    return item;
  };
  function PersistentMap() {
  }
  function persistentHashMapOf() {
    return Companion_getInstance_6().y1e();
  }
  function persistentSetOf() {
    return Companion_getInstance_8().a1f();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.b1f_1 = index;
    this.c1f_1 = size;
  }
  protoOf(AbstractListIterator).d = function () {
    return this.b1f_1 < this.c1f_1;
  };
  protoOf(AbstractListIterator).d1 = function () {
    return this.b1f_1 > 0;
  };
  protoOf(AbstractListIterator).e1 = function () {
    return this.b1f_1;
  };
  protoOf(AbstractListIterator).d1f = function () {
    if (!this.d())
      throw NoSuchElementException_init_$Create$();
  };
  protoOf(AbstractListIterator).e1f = function () {
    if (!this.d1())
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
    var tmp0_apply = this.kw();
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
      return this.b3(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).i = function (element) {
    return !(this.j(element) === -1);
  };
  protoOf(AbstractPersistentList).w = function (elements) {
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
    return this.f1f();
  };
  protoOf(AbstractPersistentList).f1f = function () {
    return this.l1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.j1f_1 = buffer;
  }
  protoOf(BufferIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.b1f_1;
    tmp0_this.b1f_1 = tmp1 + 1 | 0;
    return this.j1f_1[tmp1];
  };
  protoOf(BufferIterator).f1 = function () {
    if (!this.d1()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.b1f_1 = tmp0_this.b1f_1 - 1 | 0;
    return this.j1f_1[tmp0_this.b1f_1];
  };
  function rootSize($this) {
    return rootSize_1($this.m1f_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.m1f_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.n1f_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.n1f_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.m1f_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.n1f_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.m1f_1 + 1 | 0, $this.n1f_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.m1f_1 - 1 | 0, shift);
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
    var tailSize = $this.m1f_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.l1f_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.l1f_1;
      var tmp1_copyInto = tailIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, tmp1_copyInto, tailIndex, tailSize);
      tmp$ret$0 = newTail;
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.m1f_1 + 1 | 0, $this.n1f_1);
    }
    var lastElement = $this.l1f_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.l1f_1;
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
      elementCarry.o1f_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
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
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.o1f_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.m1f_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.l1f_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.l1f_1;
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
    var tmp = tailCarry.o1f_1;
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
      tailCarry.o1f_1 = root[bufferIndex];
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
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.o1f_1;
      tailCarry.o1f_1 = root[bufferIndex];
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
      return $this.l1f_1;
    }
    var buffer = $this.k1f_1;
    var shift = $this.n1f_1;
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
    this.k1f_1 = root;
    this.l1f_1 = tail;
    this.m1f_1 = size;
    this.n1f_1 = rootShift;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.m1f_1 > get_MAX_BUFFER_SIZE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      tmp$ret$0 = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.m1f_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.m1f_1 - rootSize_1(this.m1f_1) | 0) <= coerceAtMost(this.l1f_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).f = function () {
    return this.m1f_1;
  };
  protoOf(PersistentVector).a = function (element) {
    var tailSize = this.m1f_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.l1f_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.k1f_1, newTail, this.m1f_1 + 1 | 0, this.n1f_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.k1f_1, this.l1f_1, newTail_0);
  };
  protoOf(PersistentVector).g1f = function (index, element) {
    ListImplementation_getInstance().c1(index, this.m1f_1);
    if (index === this.m1f_1) {
      return this.a(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.k1f_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.k1f_1, this.n1f_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.o1f_1);
  };
  protoOf(PersistentVector).b3 = function (index) {
    ListImplementation_getInstance().g1(index, this.m1f_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.k1f_1, rootSize_0, this.n1f_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.k1f_1, this.n1f_1, index, new ObjectRef(this.l1f_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.n1f_1, 0);
  };
  protoOf(PersistentVector).kw = function () {
    return new PersistentVectorBuilder(this, this.k1f_1, this.l1f_1, this.n1f_1);
  };
  protoOf(PersistentVector).l1 = function (index) {
    ListImplementation_getInstance().c1(index, this.m1f_1);
    var tmp = this.l1f_1;
    return new PersistentVectorIterator(this.k1f_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.m1f_1, (this.n1f_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).g = function (index) {
    ListImplementation_getInstance().g1(index, this.m1f_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).z5 = function (index, element) {
    ListImplementation_getInstance().g1(index, this.m1f_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.l1f_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.k1f_1, newTail, this.m1f_1, this.n1f_1);
    }
    var newRoot = setInRoot(this, this.k1f_1, this.n1f_1, index, element);
    return new PersistentVector(newRoot, this.l1f_1, this.m1f_1, this.n1f_1);
  };
  function rootSize_0($this) {
    if ($this.x1f_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.x1f_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.x1f_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.u1f_1 : false;
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
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.u1f_1;
    return buffer;
  }
  function mutableBuffer($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.u1f_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.x1f_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.t1f_1) {
      $this.v1f_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.t1f_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.w1f_1 = newTail;
      var tmp0_this = $this;
      tmp0_this.t1f_1 = tmp0_this.t1f_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      var tmp1_this = $this;
      tmp1_this.x1f_1 = tmp1_this.x1f_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.v1f_1 = filledTail;
      $this.w1f_1 = newTail;
      var tmp2_this = $this;
      tmp2_this.x1f_1 = tmp2_this.x1f_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.v1f_1 = pushTail_0($this, root, filledTail, $this.t1f_1);
      $this.w1f_1 = newTail;
      var tmp3_this = $this;
      tmp3_this.x1f_1 = tmp3_this.x1f_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.x1f_1 - 1 | 0, shift);
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
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.t1f_1 ? pushBuffers($this, root, rootSize, $this.t1f_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.d()) {
      var tmp0_this = $this;
      tmp0_this.t1f_1 = tmp0_this.t1f_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.t1f_1, $this.t1f_1, buffersIterator);
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
    var mutableTail = makeMutable($this, $this.w1f_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.w1f_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      tmp$ret$0 = mutableTail;
      mutableTail[index] = element;
      $this.v1f_1 = root;
      $this.w1f_1 = mutableTail;
      var tmp0_this = $this;
      tmp0_this.x1f_1 = tmp0_this.x1f_1 + 1 | 0;
    } else {
      var lastElement = $this.w1f_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.w1f_1;
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
      elementCarry.o1f_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
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
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.o1f_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.w1f_1;
    }
    var buffer = ensureNotNull($this.v1f_1);
    var shift = $this.t1f_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.x1f_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.w1f_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.w1f_1[index];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.w1f_1;
      var tmp1_copyInto = makeMutable($this, $this.w1f_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      tmp$ret$0 = tmp1_copyInto;
      var mutableTail = tmp$ret$0;
      mutableTail[tailSize - 1 | 0] = null;
      $this.v1f_1 = root;
      $this.w1f_1 = mutableTail;
      $this.x1f_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.t1f_1 = shift;
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
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.o1f_1;
      tailCarry.o1f_1 = removedElement;
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
      $this.v1f_1 = null;
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
      tmp.w1f_1 = tmp_0;
      $this.x1f_1 = rootSize;
      $this.t1f_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.o1f_1;
    tmp_1.w1f_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.x1f_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.v1f_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.t1f_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.v1f_1 = newRoot;
      $this.t1f_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.o1f_1 = root[bufferIndex];
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
      oldElementCarry.o1f_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.q1f_1 = vector;
    this.r1f_1 = vectorRoot;
    this.s1f_1 = vectorTail;
    this.t1f_1 = rootShift;
    this.u1f_1 = new MutabilityOwnership();
    this.v1f_1 = this.r1f_1;
    this.w1f_1 = this.s1f_1;
    this.x1f_1 = this.q1f_1.f();
  }
  protoOf(PersistentVectorBuilder).f = function () {
    return this.x1f_1;
  };
  protoOf(PersistentVectorBuilder).y1f = function () {
    return this.h6_1;
  };
  protoOf(PersistentVectorBuilder).h7 = function () {
    var tmp = this;
    var tmp_0;
    if (this.v1f_1 === this.r1f_1 ? this.w1f_1 === this.s1f_1 : false) {
      tmp_0 = this.q1f_1;
    } else {
      this.u1f_1 = new MutabilityOwnership();
      this.r1f_1 = this.v1f_1;
      this.s1f_1 = this.w1f_1;
      var tmp_1;
      if (this.v1f_1 == null) {
        var tmp_2;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isEmpty' call
        var tmp0_isEmpty = this.w1f_1;
        tmp$ret$0 = tmp0_isEmpty.length === 0;
        if (tmp$ret$0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.w1f_1, this.x1f_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.v1f_1), this.w1f_1, this.x1f_1, this.t1f_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.q1f_1 = tmp_0;
    return this.q1f_1;
  };
  protoOf(PersistentVectorBuilder).a = function (element) {
    var tmp0_this = this;
    tmp0_this.h6_1 = tmp0_this.h6_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.w1f_1);
      mutableTail[tailSize] = element;
      this.w1f_1 = mutableTail;
      var tmp1_this = this;
      tmp1_this.x1f_1 = tmp1_this.x1f_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.v1f_1, this.w1f_1, newTail);
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
      this.w1f_1 = copyToBuffer(this, makeMutable(this, this.w1f_1), tailSize, elementsIterator);
      var tmp2_this = this;
      tmp2_this.x1f_1 = tmp2_this.x1f_1 + elements.f() | 0;
    } else {
      var buffersSize = ((elements.f() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(buffersSize), null);
      var buffers = tmp$ret$0;
      buffers[0] = copyToBuffer(this, makeMutable(this, this.w1f_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.v1f_1;
      var tmp_1 = rootSize_0(this);
      tmp.v1f_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.w1f_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      var tmp4_this = this;
      tmp4_this.x1f_1 = tmp4_this.x1f_1 + elements.f() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).q6 = function (index, element) {
    ListImplementation_getInstance().c1(index, this.x1f_1);
    if (index === this.x1f_1) {
      this.a(element);
      return Unit_getInstance();
    }
    var tmp0_this = this;
    tmp0_this.h6_1 = tmp0_this.h6_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.v1f_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.v1f_1), this.t1f_1, index, element, elementCarry);
    var tmp = elementCarry.o1f_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).g = function (index) {
    ListImplementation_getInstance().g1(index, this.x1f_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).b3 = function (index) {
    ListImplementation_getInstance().g1(index, this.x1f_1);
    var tmp0_this = this;
    tmp0_this.h6_1 = tmp0_this.h6_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.v1f_1, rootSize, this.t1f_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.w1f_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.v1f_1), this.t1f_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.t1f_1, 0);
    var tmp_0 = elementCarry.o1f_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).z5 = function (index, element) {
    ListImplementation_getInstance().g1(index, this.x1f_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.w1f_1);
      if (!(mutableTail === this.w1f_1)) {
        var tmp0_this = this;
        var tmp1 = tmp0_this.h6_1;
        tmp0_this.h6_1 = tmp1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.w1f_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.v1f_1 = setInRoot_0(this, ensureNotNull(this.v1f_1), this.t1f_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.o1f_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).c = function () {
    return this.f1f();
  };
  protoOf(PersistentVectorBuilder).f1f = function () {
    return this.l1(0);
  };
  protoOf(PersistentVectorBuilder).l1 = function (index) {
    ListImplementation_getInstance().c1(index, this.x1f_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.b1g_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.c1g_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).e = function () {
    this.d1f();
    if (this.c1g_1.d()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.b1f_1;
      tmp0_this.b1f_1 = tmp1 + 1 | 0;
      return this.c1g_1.e();
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.b1f_1;
    tmp2_this.b1f_1 = tmp3 + 1 | 0;
    return this.b1g_1[tmp3 - this.c1g_1.c1f_1 | 0];
  };
  protoOf(PersistentVectorIterator).f1 = function () {
    this.e1f();
    if (this.b1f_1 > this.c1g_1.c1f_1) {
      var tmp0_this = this;
      tmp0_this.b1f_1 = tmp0_this.b1f_1 - 1 | 0;
      return this.b1g_1[tmp0_this.b1f_1 - this.c1g_1.c1f_1 | 0];
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this.b1f_1;
    tmp1_this.b1f_1 = tmp2 - 1 | 0;
    return this.c1g_1.f1();
  };
  function reset($this) {
    $this.c1f_1 = $this.k1g_1.x1f_1;
    $this.l1g_1 = $this.k1g_1.y1f();
    $this.n1g_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.k1g_1.v1f_1;
    if (root == null) {
      $this.m1g_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.k1g_1.x1f_1);
    var trieIndex = coerceAtMost($this.b1f_1, trieSize);
    var trieHeight = ($this.k1g_1.t1f_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.m1g_1 == null) {
      $this.m1g_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.m1g_1).o1g(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.l1g_1 === $this.k1g_1.y1f()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.n1g_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.x1f_1);
    this.k1g_1 = builder;
    this.l1g_1 = this.k1g_1.y1f();
    this.m1g_1 = null;
    this.n1g_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).f1 = function () {
    checkForComodification(this);
    this.e1f();
    this.n1g_1 = this.b1f_1 - 1 | 0;
    var tmp1_elvis_lhs = this.m1g_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.k1g_1.w1f_1;
      var tmp0_this = this;
      tmp0_this.b1f_1 = tmp0_this.b1f_1 - 1 | 0;
      var tmp_1 = tmp_0[tmp0_this.b1f_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.b1f_1 > trieIterator.c1f_1) {
      var tmp_2 = this.k1g_1.w1f_1;
      var tmp2_this = this;
      tmp2_this.b1f_1 = tmp2_this.b1f_1 - 1 | 0;
      var tmp_3 = tmp_2[tmp2_this.b1f_1 - trieIterator.c1f_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    var tmp3_this = this;
    var tmp4 = tmp3_this.b1f_1;
    tmp3_this.b1f_1 = tmp4 - 1 | 0;
    return trieIterator.f1();
  };
  protoOf(PersistentVectorMutableIterator).e = function () {
    checkForComodification(this);
    this.d1f();
    this.n1g_1 = this.b1f_1;
    var tmp2_elvis_lhs = this.m1g_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.k1g_1.w1f_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.b1f_1;
      tmp0_this.b1f_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.d()) {
      var tmp3_this = this;
      var tmp4 = tmp3_this.b1f_1;
      tmp3_this.b1f_1 = tmp4 + 1 | 0;
      return trieIterator.e();
    }
    var tmp_2 = this.k1g_1.w1f_1;
    var tmp5_this = this;
    var tmp6 = tmp5_this.b1f_1;
    tmp5_this.b1f_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.c1f_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).c3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.k1g_1.b3(this.n1g_1);
    if (this.n1g_1 < this.b1f_1)
      this.b1f_1 = this.n1g_1;
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
    tmp.p1g_1 = new SmallPersistentVector(tmp$ret$0);
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
    this.q1g_1 = buffer;
    assert(this.q1g_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).f = function () {
    return this.q1g_1.length;
  };
  protoOf(SmallPersistentVector).a = function (element) {
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.q1g_1, this.f() + 1 | 0);
      newBuffer[this.f()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.q1g_1, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).t = function (elements) {
    if ((this.f() + elements.f() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.q1g_1, this.f() + elements.f() | 0);
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
    var tmp0_apply = this.kw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.t(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.h7();
    return tmp$ret$1;
  };
  protoOf(SmallPersistentVector).g1f = function (index, element) {
    ListImplementation_getInstance().c1(index, this.f());
    if (index === this.f()) {
      return this.a(element);
    }
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.f() + 1 | 0);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.q1g_1;
      arrayCopy(tmp0_copyInto, newBuffer, 0, 0, index);
      tmp$ret$0 = newBuffer;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.q1g_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = this.f();
      arrayCopy(tmp1_copyInto, newBuffer, tmp2_copyInto, index, tmp3_copyInto);
      tmp$ret$1 = newBuffer;
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp4_copyOf = this.q1g_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp4_copyOf;
    tmp$ret$3 = tmp$ret$2.slice();
    var root = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.q1g_1;
    var tmp6_copyInto = index + 1 | 0;
    var tmp7_copyInto = this.f() - 1 | 0;
    arrayCopy(tmp5_copyInto, root, tmp6_copyInto, index, tmp7_copyInto);
    tmp$ret$4 = root;
    root[index] = element;
    var tail = presizedBufferWith(this.q1g_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).b3 = function (index) {
    ListImplementation_getInstance().g1(index, this.f());
    if (this.f() === 1) {
      return Companion_getInstance_5().p1g_1;
    }
    var newBuffer = copyOf_0(this.q1g_1, this.f() - 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.q1g_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.f();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).kw = function () {
    return new PersistentVectorBuilder(this, null, this.q1g_1, 0);
  };
  protoOf(SmallPersistentVector).j = function (element) {
    return indexOf(this.q1g_1, element);
  };
  protoOf(SmallPersistentVector).k1 = function (element) {
    return lastIndexOf(this.q1g_1, element);
  };
  protoOf(SmallPersistentVector).l1 = function (index) {
    ListImplementation_getInstance().c1(index, this.f());
    var tmp = this.q1g_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.f());
  };
  protoOf(SmallPersistentVector).g = function (index) {
    ListImplementation_getInstance().g1(index, this.f());
    var tmp = this.q1g_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).z5 = function (index, element) {
    ListImplementation_getInstance().g1(index, this.f());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.q1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.f1g_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.f1g_1) {
      var tmp = $this.g1g_1;
      var tmp_0 = i;
      var tmp_1 = $this.g1g_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.b1f_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.f1g_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.b1f_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.b1f_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.g1g_1[$this.f1g_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.f1g_1 = height;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.f1g_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.g1g_1 = tmp$ret$0;
    this.h1g_1 = index === size;
    this.g1g_1[0] = root;
    fillPath(this, index - (this.h1g_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).o1g = function (root, index, size, height) {
    this.b1f_1 = index;
    this.c1f_1 = size;
    this.f1g_1 = height;
    if (this.g1g_1.length < height) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(height), null);
      tmp.g1g_1 = tmp$ret$0;
    }
    this.g1g_1[0] = root;
    this.h1g_1 = index === size;
    fillPath(this, index - (this.h1g_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    var tmp0_this = this;
    tmp0_this.b1f_1 = tmp0_this.b1f_1 + 1 | 0;
    if (this.b1f_1 === this.c1f_1) {
      this.h1g_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).f1 = function () {
    if (!this.d1()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.b1f_1 = tmp0_this.b1f_1 - 1 | 0;
    if (this.h1g_1) {
      this.h1g_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_5().p1g_1;
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
    this.o1f_1 = value;
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
    this.x1e_1 = new PersistentHashMap(Companion_getInstance_7().r1g_1, 0);
  }
  protoOf(Companion_4).y1e = function () {
    var tmp = this.x1e_1;
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
    this.u1g_1 = node;
    this.v1g_1 = size;
  }
  protoOf(PersistentHashMap).f = function () {
    return this.v1g_1;
  };
  protoOf(PersistentHashMap).c2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).o1 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).x1 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.u1g_1.a1h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).b2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.u1g_1.b1h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).x2 = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.u1g_1.c1h(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.d1h_1, this.v1g_1 + newNodeResult.e1h_1 | 0);
  };
  protoOf(PersistentHashMap).c7 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.u1g_1.f1h(tmp$ret$0, key, 0);
    if (this.u1g_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().y1e();
    }
    return new PersistentHashMap(newNode, this.v1g_1 - 1 | 0);
  };
  protoOf(PersistentHashMap).kw = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.k1h_1 = map;
    this.l1h_1 = new MutabilityOwnership();
    this.m1h_1 = this.k1h_1.u1g_1;
    this.n1h_1 = null;
    this.o1h_1 = 0;
    this.p1h_1 = this.k1h_1.v1g_1;
  }
  protoOf(PersistentHashMapBuilder).q1h = function (value) {
    this.p1h_1 = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.o1h_1;
    tmp0_this.o1h_1 = tmp1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).f = function () {
    return this.p1h_1;
  };
  protoOf(PersistentHashMapBuilder).h7 = function () {
    var tmp = this;
    var tmp_0;
    if (this.m1h_1 === this.k1h_1.u1g_1) {
      tmp_0 = this.k1h_1;
    } else {
      this.l1h_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.m1h_1, this.p1h_1);
    }
    tmp.k1h_1 = tmp_0;
    return this.k1h_1;
  };
  protoOf(PersistentHashMapBuilder).o1 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).c2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).g7 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).x1 = function (key) {
    var tmp = this.m1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.a1h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).b2 = function (key) {
    var tmp = this.m1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.b1h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).x2 = function (key, value) {
    this.n1h_1 = null;
    var tmp = this;
    var tmp_0 = this.m1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.m1h_1 = tmp_0.r1h(tmp$ret$0, key, value, 0, this);
    return this.n1h_1;
  };
  protoOf(PersistentHashMapBuilder).s2 = function (from) {
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
      var oldSize = this.p1h_1;
      var tmp_0 = this;
      var tmp_1 = this.m1h_1;
      var tmp_2 = map.u1g_1;
      tmp_0.m1h_1 = tmp_1.s1h(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.v1g_1 | 0) - intersectionCounter.t1h_1 | 0;
      if (!(oldSize === newSize)) {
        this.q1h(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).s2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).c7 = function (key) {
    this.n1h_1 = null;
    var tmp = this;
    var tmp_0 = this.m1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.u1h(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().r1g_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.m1h_1 = tmp_1;
    return this.n1h_1;
  };
  protoOf(PersistentHashMapBuilder).v1h = function (key, value) {
    var oldSize = this.p1h_1;
    var tmp = this;
    var tmp_0 = this.m1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.w1h(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().r1g_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.m1h_1 = tmp_1;
    return !(oldSize === this.p1h_1);
  };
  protoOf(PersistentHashMapBuilder).d6 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().r1g_1;
    tmp.m1h_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.q1h(0);
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
    tmp.x1h_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).d = function () {
    return this.x1h_1.d();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e = function () {
    return this.x1h_1.e();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).c3 = function () {
    return this.x1h_1.c3();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).i1i = function (key, newValue) {
    return this.x1h_1.i1i(key, newValue);
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
      $this.y1h_1[pathIndex].n1i(node.z1g_1, node.z1g_1.length, 0);
      while (!equals($this.y1h_1[pathIndex].j1i(), key)) {
        $this.y1h_1[pathIndex].o1i();
      }
      $this.z1h_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.r1i(keyPositionMask)) {
      var keyIndex = node.p1i(keyPositionMask);
      $this.y1h_1[pathIndex].n1i(node.z1g_1, imul(get_ENTRY_SIZE(), node.q1i()), keyIndex);
      $this.z1h_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.s1i(keyPositionMask);
    var targetNode = node.t1i(nodeIndex);
    $this.y1h_1[pathIndex].n1i(node.z1g_1, imul(get_ENTRY_SIZE(), node.q1i()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.g1i_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.e1i_1.o1h_1 === $this.h1i_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.m1h_1, path);
    this.e1i_1 = builder;
    this.f1i_1 = null;
    this.g1i_1 = false;
    this.h1i_1 = this.e1i_1.o1h_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).e = function () {
    checkForComodification_0(this);
    this.f1i_1 = this.j1i();
    this.g1i_1 = true;
    return protoOf(PersistentHashMapBaseIterator).e.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).c3 = function () {
    checkNextWasInvoked(this);
    if (this.d()) {
      var currentKey = this.j1i();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.e1i_1;
      var tmp1_remove = this.f1i_1;
      tmp$ret$0 = (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).c7(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.e1i_1.m1h_1, currentKey, 0);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.e1i_1;
      var tmp3_remove = this.f1i_1;
      tmp$ret$2 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).c7(tmp3_remove);
    }
    this.f1i_1 = null;
    this.g1i_1 = false;
    this.h1i_1 = this.e1i_1.o1h_1;
  };
  protoOf(PersistentHashMapBuilderBaseIterator).i1i = function (key, newValue) {
    if (!this.e1i_1.x1(key))
      return Unit_getInstance();
    if (this.d()) {
      var currentKey = this.j1i();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.e1i_1;
      tmp0_set.x2(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.e1i_1.m1h_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.e1i_1;
      tmp1_set.x2(key, newValue);
    }
    this.h1i_1 = this.e1i_1.o1h_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.x1i_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).e = function () {
    assert(this.y1i());
    var tmp0_this = this;
    tmp0_this.m1i_1 = tmp0_this.m1i_1 + 2 | 0;
    var tmp = this.k1i_1[this.m1i_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.k1i_1[this.m1i_1 - 1 | 0];
    return new MutableMapEntry(this.x1i_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.f1j_1 = parentIterator;
    this.g1j_1 = value;
  }
  protoOf(MutableMapEntry).q1 = function () {
    return this.g1j_1;
  };
  protoOf(MutableMapEntry).x6 = function (newValue) {
    var result = this.g1j_1;
    this.g1j_1 = newValue;
    this.f1j_1.i1i(this.n1(), newValue);
    return result;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.j1j_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).n7 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).a = function (element) {
    return this.n7((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).d6 = function () {
    this.j1j_1.d6();
  };
  protoOf(PersistentHashMapBuilderEntries).c = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.j1j_1);
  };
  protoOf(PersistentHashMapBuilderEntries).z6 = function (element) {
    return this.j1j_1.v1h(element.n1(), element.q1());
  };
  protoOf(PersistentHashMapBuilderEntries).f = function () {
    return this.j1j_1.p1h_1;
  };
  protoOf(PersistentHashMapBuilderEntries).y6 = function (element) {
    var tmp0_safe_receiver = this.j1j_1.b2(element.n1());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.q1());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.q1() == null ? this.j1j_1.x1(element.n1()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.k1j_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).b7 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).a = function (element) {
    return this.b7((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).d6 = function () {
    this.k1j_1.d6();
  };
  protoOf(PersistentHashMapBuilderKeys).c = function () {
    return new PersistentHashMapBuilderKeysIterator(this.k1j_1);
  };
  protoOf(PersistentHashMapBuilderKeys).c7 = function (element) {
    if (this.k1j_1.x1(element)) {
      this.k1j_1.c7(element);
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
    return this.k1j_1.p1h_1;
  };
  protoOf(PersistentHashMapBuilderKeys).u1 = function (element) {
    return this.k1j_1.x1(element);
  };
  protoOf(PersistentHashMapBuilderKeys).i = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.u1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.l1j_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).f = function () {
    return this.l1j_1.p1h_1;
  };
  protoOf(PersistentHashMapBuilderValues).f7 = function (element) {
    return this.l1j_1.z1(element);
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
    return new PersistentHashMapBuilderValuesIterator(this.l1j_1);
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
    this.k1i_1 = Companion_getInstance_7().r1g_1.z1g_1;
    this.l1i_1 = 0;
    this.m1i_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).n1i = function (buffer, dataSize, index) {
    this.k1i_1 = buffer;
    this.l1i_1 = dataSize;
    this.m1i_1 = index;
  };
  protoOf(TrieNodeBaseIterator).z1i = function (buffer, dataSize) {
    this.n1i(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).y1i = function () {
    return this.m1i_1 < this.l1i_1;
  };
  protoOf(TrieNodeBaseIterator).j1i = function () {
    assert(this.y1i());
    var tmp = this.k1i_1[this.m1i_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).o1i = function () {
    assert(this.y1i());
    var tmp0_this = this;
    tmp0_this.m1i_1 = tmp0_this.m1i_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).a1j = function () {
    assert(this.m1i_1 >= this.l1i_1);
    return this.m1i_1 < this.k1i_1.length;
  };
  protoOf(TrieNodeBaseIterator).b1j = function () {
    assert(this.a1j());
    var tmp = this.k1i_1[this.m1i_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).c1j = function () {
    assert(this.a1j());
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1i_1;
    tmp0_this.m1i_1 = tmp1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).d = function () {
    return this.y1i();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).e = function () {
    assert(this.y1i());
    var tmp0_this = this;
    tmp0_this.m1i_1 = tmp0_this.m1i_1 + 2 | 0;
    var tmp = this.k1i_1[this.m1i_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).e = function () {
    assert(this.y1i());
    var tmp0_this = this;
    tmp0_this.m1i_1 = tmp0_this.m1i_1 + 2 | 0;
    var tmp = this.k1i_1[this.m1i_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.y1h_1[pathIndex].y1i()) {
      return pathIndex;
    }
    if ($this.y1h_1[pathIndex].a1j()) {
      var node = $this.y1h_1[pathIndex].b1j();
      if (pathIndex === 6) {
        $this.y1h_1[pathIndex + 1 | 0].z1i(node.z1g_1, node.z1g_1.length);
      } else {
        $this.y1h_1[pathIndex + 1 | 0].z1i(node.z1g_1, imul(get_ENTRY_SIZE(), node.q1i()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.y1h_1[$this.z1h_1].y1i()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.z1h_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.y1h_1[i].a1j() : false) {
          $this.y1h_1[i].c1j();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.z1h_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.y1h_1[i - 1 | 0].c1j();
        }
        $this.y1h_1[i].z1i(Companion_getInstance_7().r1g_1.z1g_1, 0);
      }
       while (0 <= inductionVariable);
    $this.a1i_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.y1h_1 = path;
    this.z1h_1 = 0;
    this.a1i_1 = true;
    this.y1h_1[0].z1i(node.z1g_1, imul(get_ENTRY_SIZE(), node.q1i()));
    this.z1h_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).j1i = function () {
    checkHasNext(this);
    return this.y1h_1[this.z1h_1].j1i();
  };
  protoOf(PersistentHashMapBaseIterator).d = function () {
    return this.a1i_1;
  };
  protoOf(PersistentHashMapBaseIterator).e = function () {
    checkHasNext(this);
    var result = this.y1h_1[this.z1h_1].e();
    ensureNextEntryIsReady(this);
    return result;
  };
  function MapEntry(key, value) {
    this.h1j_1 = key;
    this.i1j_1 = value;
  }
  protoOf(MapEntry).n1 = function () {
    return this.h1j_1;
  };
  protoOf(MapEntry).q1 = function () {
    return this.i1j_1;
  };
  protoOf(MapEntry).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.n1();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.q1();
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
      tmp$ret$0 = equals(tmp0_safe_receiver.n1(), this.n1()) ? equals(tmp0_safe_receiver.q1(), this.q1()) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.n1()) + '=' + toString_0(this.q1());
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).e = function () {
    assert(this.y1i());
    var tmp0_this = this;
    tmp0_this.m1i_1 = tmp0_this.m1i_1 + 2 | 0;
    var tmp = this.k1i_1[this.m1i_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.k1i_1[this.m1i_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.v1j_1 = map;
  }
  protoOf(PersistentHashMapKeys).f = function () {
    return this.v1j_1.v1g_1;
  };
  protoOf(PersistentHashMapKeys).u1 = function (element) {
    return this.v1j_1.x1(element);
  };
  protoOf(PersistentHashMapKeys).i = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.u1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).c = function () {
    return new PersistentHashMapKeysIterator(this.v1j_1.u1g_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.w1j_1 = map;
  }
  protoOf(PersistentHashMapEntries).f = function () {
    return this.w1j_1.v1g_1;
  };
  protoOf(PersistentHashMapEntries).x1j = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.w1j_1.b2(element.n1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.q1());
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.q1() == null ? this.w1j_1.x1(element.n1()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).i = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.x1j((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).c = function () {
    return new PersistentHashMapEntriesIterator(this.w1j_1.u1g_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.d1h_1 = node;
    this.e1h_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.x1g_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.z1g_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.z1g_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.p1i(positionMask);
    var newBuffer = insertEntryAtIndex($this.z1g_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.w1g_1 | positionMask, $this.x1g_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.p1i(positionMask);
    if ($this.y1g_1 === owner) {
      $this.z1g_1 = insertEntryAtIndex($this.z1g_1, keyIndex, key, value);
      $this.w1g_1 = $this.w1g_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.z1g_1, keyIndex, key, value);
    return new TrieNode($this.w1g_1 | positionMask, $this.x1g_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.z1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.w1g_1, $this.x1g_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.y1g_1 === mutator.l1h_1) {
      $this.z1g_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.o1h_1;
    tmp0_this.o1h_1 = tmp1 + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.z1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.w1g_1, $this.x1g_1, newBuffer, mutator.l1h_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.z1g_1;
    if (newNodeBuffer.length === 2 ? newNode.x1g_1 === 0 : false) {
      if ($this.z1g_1.length === 1) {
        newNode.w1g_1 = $this.x1g_1;
        return newNode;
      }
      var keyIndex = $this.p1i(positionMask);
      var newBuffer = replaceNodeWithEntry($this.z1g_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.w1g_1 ^ positionMask, $this.x1g_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.z1g_1, $this.z1g_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.w1g_1, $this.x1g_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.z1g_1.length === 1 ? newNode.z1g_1.length === 2 : false) ? newNode.x1g_1 === 0 : false) {
      newNode.w1g_1 = $this.x1g_1;
      return newNode;
    }
    if ($this.y1g_1 === owner) {
      $this.z1g_1[nodeIndex] = newNode;
      return $this;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.z1g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.w1g_1, $this.x1g_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.z1g_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.z1g_1, nodeIndex);
    return TrieNode_init_$Create$($this.w1g_1, $this.x1g_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.z1g_1.length === 1)
      return null;
    if ($this.y1g_1 === owner) {
      $this.z1g_1 = removeNodeAtIndex_0($this.z1g_1, nodeIndex);
      $this.x1g_1 = $this.x1g_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.z1g_1, nodeIndex);
    return new TrieNode($this.w1g_1, $this.x1g_1 ^ positionMask, newBuffer, owner);
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
    var nodeIndex = $this.s1i(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.z1g_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.w1g_1 ^ positionMask, $this.x1g_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.y1g_1 === owner) {
      $this.z1g_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.w1g_1 = $this.w1g_1 ^ positionMask;
      $this.x1g_1 = $this.x1g_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.w1g_1 ^ positionMask, $this.x1g_1 | positionMask, newBuffer, owner);
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
    if ($this.z1g_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.z1g_1, keyIndex);
    return TrieNode_init_$Create$($this.w1g_1 ^ positionMask, $this.x1g_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.p1h_1;
    tmp0_this.q1h(tmp1 - 1 | 0);
    mutator.n1h_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.z1g_1.length === 2)
      return null;
    if ($this.y1g_1 === mutator.l1h_1) {
      $this.z1g_1 = removeEntryAtIndex_0($this.z1g_1, keyIndex);
      $this.w1g_1 = $this.w1g_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.z1g_1, keyIndex);
    return new TrieNode($this.w1g_1 ^ positionMask, $this.x1g_1, newBuffer, mutator.l1h_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.z1g_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.z1g_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.p1h_1;
    tmp0_this.q1h(tmp1 - 1 | 0);
    mutator.n1h_1 = valueAtKeyIndex($this, i);
    if ($this.z1g_1.length === 2)
      return null;
    if ($this.y1g_1 === mutator.l1h_1) {
      $this.z1g_1 = removeEntryAtIndex_0($this.z1g_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.z1g_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.l1h_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.z1g_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.z1g_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.z1g_1.length), 2);
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
    var progression = step(until(0, $this.z1g_1.length), 2);
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
          var tmp0_copyOf = $this.z1g_1;
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
    var newBuffer_0 = insertEntryAtIndex($this.z1g_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.z1g_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.n1h_1 = valueAtKeyIndex($this, i);
          if ($this.y1g_1 === mutator.l1h_1) {
            $this.z1g_1[i + 1 | 0] = value;
            return $this;
          }
          var tmp1_this = mutator;
          var tmp2 = tmp1_this.o1h_1;
          tmp1_this.o1h_1 = tmp2 + 1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.z1g_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.l1h_1);
        }
      }
       while (!(i === last));
    var tmp3_this = mutator;
    var tmp4 = tmp3_this.p1h_1;
    tmp3_this.q1h(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.z1g_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.l1h_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.z1g_1.length), 2);
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
    var progression = step(until(0, $this.z1g_1.length), 2);
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
    var progression = step(until(0, $this.z1g_1.length), 2);
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
    assert($this.x1g_1 === 0);
    assert($this.w1g_1 === 0);
    assert(otherNode.x1g_1 === 0);
    assert(otherNode.w1g_1 === 0);
    var tempBuffer = copyOf_0($this.z1g_1, $this.z1g_1.length + otherNode.z1g_1.length | 0);
    var i = $this.z1g_1.length;
    var progression = step(until(0, otherNode.z1g_1.length), 2);
    var inductionVariable = progression.p_1;
    var last = progression.q_1;
    var step_0 = progression.r_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.z1g_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.z1g_1[j];
          tempBuffer[i + 1 | 0] = otherNode.z1g_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          var tmp1_this = intersectionCounter;
          var tmp2 = tmp1_this.t1h_1;
          tmp1_this.t1h_1 = tmp2 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.z1g_1.length ? $this : newSize === otherNode.z1g_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.t1i($this.s1i(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.t1i(otherNode.s1i(positionMask));
        tmp_0 = targetNode.s1h(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.r1i(positionMask)) {
        var keyIndex = otherNode.p1i(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.p1h_1;
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = key;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.r1h(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.p1h_1 === oldSize) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.t1h_1;
          tmp0_this.t1h_1 = tmp1 + 1 | 0;
        }
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.t1i(otherNode.s1i(positionMask));
      var tmp_1;
      if ($this.r1i(positionMask)) {
        var keyIndex_0 = $this.p1i(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = key_0;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.a1h(tmp$ret$2, key_0, shift + 5 | 0)) {
          var tmp0_this_0 = intersectionCounter;
          var tmp1_0 = tmp0_this_0.t1h_1;
          tmp0_this_0.t1h_1 = tmp1_0 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp0_safe_receiver_1 = key_0;
          var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.r1h(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.p1i(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.p1i(positionMask);
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
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.l1h_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.x1g_1 === 0)
      return $this.z1g_1.length / 2 | 0;
    var numValues = countOneBits($this.w1g_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.z1g_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.t1i(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.x1g_1 === otherNode.x1g_1))
      return false;
    if (!($this.w1g_1 === otherNode.w1g_1))
      return false;
    var inductionVariable = 0;
    var last = $this.z1g_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.z1g_1[i] === otherNode.z1g_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.y1g_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.r1g_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.w1g_1 = dataMap;
    this.x1g_1 = nodeMap;
    this.y1g_1 = ownedBy;
    this.z1g_1 = buffer;
  }
  protoOf(TrieNode).q1i = function () {
    return countOneBits(this.w1g_1);
  };
  protoOf(TrieNode).r1i = function (positionMask) {
    return !((this.w1g_1 & positionMask) === 0);
  };
  protoOf(TrieNode).p1i = function (positionMask) {
    return imul(2, countOneBits(this.w1g_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).s1i = function (positionMask) {
    return (this.z1g_1.length - 1 | 0) - countOneBits(this.x1g_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).t1i = function (nodeIndex) {
    var tmp = this.z1g_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).a1h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.r1i(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.p1i(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.t1i(this.s1i(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.a1h(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).b1h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.r1i(keyPositionMask)) {
      var keyIndex = this.p1i(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.t1i(this.s1i(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.b1h(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).s1h = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.y1j(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.l1h_1);
    }
    var newNodeMap = this.x1g_1 | otherNode.x1g_1;
    var newDataMap = (this.w1g_1 ^ otherNode.w1g_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp0_forEachOneBit = this.w1g_1 & otherNode.w1g_1;
    var mask = tmp0_forEachOneBit;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp1__anonymous__uwfjfc = index;
      var leftKey = keyAtIndex(this, this.p1i(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.p1i(bit));
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
    if ((equals(this.y1g_1, mutator.l1h_1) ? this.w1g_1 === newDataMap : false) ? this.x1g_1 === newNodeMap : false) {
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
      var newNodeIndex = (mutableNode.z1g_1.length - 1 | 0) - tmp5__anonymous__kpxxpo | 0;
      mutableNode.z1g_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
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
      if (!otherNode.r1i(bit_1)) {
        var oldKeyIndex = this.p1i(bit_1);
        mutableNode.z1g_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.z1g_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.p1i(bit_1);
        mutableNode.z1g_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.z1g_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.r1i(bit_1)) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.t1h_1;
          tmp0_this.t1h_1 = tmp1 + 1 | 0;
        }
      }
      var tmp0_1 = index_1;
      index_1 = tmp0_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).c1h = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.r1i(keyPositionMask)) {
      var keyIndex = this.p1i(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.s1i(keyPositionMask);
      var targetNode = this.t1i(nodeIndex);
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
        var tmp1_elvis_lhs = targetNode.c1h(keyHash, key, value, shift + 5 | 0);
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
      var tmp0__anonymous__q1qw7t = putResult.d1h_1;
      tmp$ret$0 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0__anonymous__q1qw7t);
      tmp_2.d1h_1 = tmp$ret$0;
      tmp$ret$1 = putResult;
      tmp$ret$2 = tmp$ret$1;
      return tmp$ret$2;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).r1h = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.r1i(keyPositionMask)) {
      var keyIndex = this.p1i(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.n1h_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp0_this = mutator;
      var tmp1 = tmp0_this.p1h_1;
      tmp0_this.q1h(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.l1h_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.s1i(keyPositionMask);
      var targetNode = this.t1i(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.r1h(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.l1h_1);
    }
    var tmp2_this = mutator;
    var tmp3 = tmp2_this.p1h_1;
    tmp2_this.q1h(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.l1h_1);
  };
  protoOf(TrieNode).f1h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.r1i(keyPositionMask)) {
      var keyIndex = this.p1i(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.s1i(keyPositionMask);
      var targetNode = this.t1i(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.f1h(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).u1h = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.r1i(keyPositionMask)) {
      var keyIndex = this.p1i(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.s1i(keyPositionMask);
      var targetNode = this.t1i(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.u1h(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.l1h_1);
    }
    return this;
  };
  protoOf(TrieNode).w1h = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.r1i(keyPositionMask)) {
      var keyIndex = this.p1i(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.s1i(keyPositionMask);
      var targetNode = this.t1i(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.w1h(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.l1h_1);
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
    this.z1e_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_6().y1e());
  }
  protoOf(Companion_6).a1f = function () {
    return this.z1e_1;
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
    this.z1j_1 = firstElement;
    this.a1k_1 = lastElement;
    this.b1k_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).f = function () {
    return this.b1k_1.v1g_1;
  };
  protoOf(PersistentOrderedSet).i = function (element) {
    return this.b1k_1.x1(element);
  };
  protoOf(PersistentOrderedSet).a = function (element) {
    if (this.b1k_1.x1(element)) {
      return this;
    }
    if (this.h()) {
      var newMap = this.b1k_1.x2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.a1k_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.b1k_1.b2(lastElement));
    var newMap_0 = this.b1k_1.x2(lastElement, lastLinks.e1k(element)).x2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.z1j_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).a6 = function (element) {
    var tmp0_elvis_lhs = this.b1k_1.b2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.b1k_1.c7(element);
    if (links.f1k()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.c1k_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).b2(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.c1k_1;
      newMap = tmp_0.x2((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.e1k(links.d1k_1));
    }
    if (links.h1k()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.d1k_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).b2(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.d1k_1;
      newMap = tmp_2.x2((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.g1k(links.c1k_1));
    }
    var newFirstElement = !links.f1k() ? links.d1k_1 : this.z1j_1;
    var newLastElement = !links.h1k() ? links.c1k_1 : this.a1k_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).c = function () {
    return new PersistentOrderedSetIterator(this.z1j_1, this.b1k_1);
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
    this.c1k_1 = previous;
    this.d1k_1 = next;
  }
  protoOf(Links).e1k = function (newNext) {
    return new Links(this.c1k_1, newNext);
  };
  protoOf(Links).g1k = function (newPrevious) {
    return new Links(newPrevious, this.d1k_1);
  };
  protoOf(Links).h1k = function () {
    return !(this.d1k_1 === EndOfChain_getInstance());
  };
  protoOf(Links).f1k = function () {
    return !(this.c1k_1 === EndOfChain_getInstance());
  };
  function checkHasNext_0($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.i1k_1 = nextElement;
    this.j1k_1 = map;
    this.k1k_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).d = function () {
    return this.k1k_1 < this.j1k_1.f();
  };
  protoOf(PersistentOrderedSetIterator).e = function () {
    checkHasNext_0(this);
    var tmp = this.i1k_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1k_1;
    tmp0_this.k1k_1 = tmp1 + 1 | 0;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_getOrElse = this.j1k_1;
    var tmp0_elvis_lhs = tmp0_getOrElse.b2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp$ret$0 = tmp_1;
    tmp_0.i1k_1 = tmp$ret$0.d1k_1;
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
  protoOf(ListImplementation).g1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).c1 = function (index, size) {
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
    this.t1h_1 = count;
  }
  protoOf(DeltaCounter).y1j = function (that) {
    var tmp0_this = this;
    tmp0_this.t1h_1 = tmp0_this.t1h_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.t1h_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.t1h_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.t1h_1 === tmp0_other_with_cast.t1h_1))
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
    tmp0_apply.q1k(block);
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
        tmp_0 = (!_this__u8e3s4.c15() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.qr_1, other.qr_1);
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
    composer.k11(key);
    var slot = composer.m13();
    var tmp;
    if (slot === Companion_getInstance_1().uw_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.n13(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.q1k(block);
    composer.l11();
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
    var high = $this.m1e_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.n1e_1[0].equals(key) ? 0 : $this.n1e_1[0].n(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.n1e_1[mid];
      var comparison = midVal.cc(key);
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
    this.m1e_1 = size;
    this.n1e_1 = keys;
    this.o1e_1 = values;
  }
  protoOf(ThreadMap).p1e = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.o1e_1[index] : null;
  };
  protoOf(ThreadMap).q1e = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.o1e_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).r1e = function (key, value) {
    var size = this.m1e_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.count' call
    var tmp0_count = this.o1e_1;
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
        var oldKey = this.n1e_1[source];
        var oldValue = this.o1e_1[source];
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
          var oldKey_0 = this.n1e_1[source];
          var oldValue_0 = this.o1e_1[source];
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
          _this__u8e3s4.t4(element.s4_1);
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
    this.r1k_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).gh = function () {
    return this.r1k_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.s1k_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).gh = function () {
    return this.s1k_1();
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
  protoOf(Companion_7).jp = function () {
    return currentSnapshot();
  };
  protoOf(Companion_7).b1b = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1k(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_7).a1d = function (observer) {
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
  protoOf(Companion_7).u1k = function (observer) {
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
  protoOf(Companion_7).d1a = function () {
    return currentSnapshot().d1a();
  };
  protoOf(Companion_7).c1a = function () {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().dj().v1k();
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
    this.c10_1 = invalid;
    this.d10_1 = id;
    this.e10_1 = false;
    this.f10_1 = !(id === 0) ? trackPinning(id, this.w1k()) : -1;
    this.g10_1 = 8;
  }
  protoOf(Snapshot).x1k = function (_set____db54di) {
    this.c10_1 = _set____db54di;
  };
  protoOf(Snapshot).w1k = function () {
    return this.c10_1;
  };
  protoOf(Snapshot).y1k = function (_set____db54di) {
    this.d10_1 = _set____db54di;
  };
  protoOf(Snapshot).h10 = function () {
    return this.d10_1;
  };
  protoOf(Snapshot).gh = function () {
    this.e10_1 = true;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a1l();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Snapshot).c1b = function () {
    var previous = get_threadSnapshot().dj();
    get_threadSnapshot().i17(this);
    return previous;
  };
  protoOf(Snapshot).d1b = function (snapshot) {
    get_threadSnapshot().i17(snapshot);
  };
  protoOf(Snapshot).e1l = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1l();
    this.g1l();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Snapshot).f1l = function () {
    set_openSnapshots(get_openSnapshots().l1l(this.h10()));
  };
  protoOf(Snapshot).g1l = function () {
    this.a1l();
  };
  protoOf(Snapshot).m1l = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = !this.e10_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      tmp$ret$0 = 'Cannot use a disposed snapshot';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).a1l = function () {
    if (this.f10_1 >= 0) {
      releasePinningLocked(this.f10_1);
      this.f10_1 = -1;
    }
  };
  protoOf(Snapshot).n1l = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.f10_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.f10_1 = -1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  function abandon($this) {
    var modified = $this.v1k();
    if (!(modified == null)) {
      $this.o1l();
      $this.p1l(null);
      var id = $this.h10();
      var tmp0_iterator = modified.c();
      while (tmp0_iterator.d()) {
        var state = tmp0_iterator.e();
        var current = state.j1e();
        while (!(current == null)) {
          if (current.q1l_1 === id ? true : contains($this.m1b_1, current.q1l_1)) {
            current.q1l_1 = 0;
          }
          current = current.r1l_1;
        }
      }
    }
    $this.e1l();
  }
  function apply$overwriteUnusedRecordsLocked(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function apply$overwriteUnusedRecordsLocked_0(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Snapshot.call(this, id, invalid);
    this.j1b_1 = readObserver;
    this.k1b_1 = writeObserver;
    this.l1b_1 = null;
    this.m1b_1 = Companion_getInstance_10().t1l_1;
    this.n1b_1 = new Int32Array(0);
    this.o1b_1 = 1;
    this.p1b_1 = false;
    this.q1b_1 = 8;
  }
  protoOf(MutableSnapshot).b1l = function () {
    return this.j1b_1;
  };
  protoOf(MutableSnapshot).c1l = function () {
    return this.k1b_1;
  };
  protoOf(MutableSnapshot).t1k = function (readObserver, writeObserver) {
    this.m1l();
    this.u1l();
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.v1l(this.h10());
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
    set_openSnapshots(get_openSnapshots().w1l(newId));
    var currentInvalid = this.w1k();
    this.x1k(currentInvalid.w1l(newId));
    tmp$ret$0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.h10() + 1 | 0, newId), mergedReadObserver(readObserver, this.b1l()), mergedWriteObserver(writeObserver, this.c1l()), this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.p1b_1 ? !this.e10_1 : false) {
      var previousId = this.h10();
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.y1k(tmp0_0);
      set_openSnapshots(get_openSnapshots().w1l(this.h10()));
      tmp$ret$5 = Unit_getInstance();
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      this.x1k(addRange(this.w1k(), previousId + 1 | 0, this.h10()));
    }
    tmp$ret$8 = tmp0_also;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  };
  protoOf(MutableSnapshot).r1b = function () {
    var modified = this.v1k();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().dj(), this, get_openSnapshots().l1l(get_currentGlobalSnapshot().dj().h10())) : null;
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
      this.f1l();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().dj();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var globalModified = previousGlobalSnapshot.v1k();
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
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().dj();
      var result = this.x1l(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().l1l(previousGlobalSnapshot_0.h10()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.f1l();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var globalModified_0 = previousGlobalSnapshot_0.v1k();
      this.p1l(null);
      previousGlobalSnapshot_0.p1l(null);
      tmp = to(toMutableList(get_applyObservers()), globalModified_0);
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_container = tmp$ret$4;
    var observers = tmp0_container.v2();
    var globalModified_1 = tmp0_container.w2();
    this.p1b_1 = true;
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
    this.g1l();
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
  protoOf(MutableSnapshot).z1k = function () {
    return false;
  };
  protoOf(MutableSnapshot).gh = function () {
    if (!this.e10_1) {
      protoOf(Snapshot).gh.call(this);
      this.y1l(this);
    }
  };
  protoOf(MutableSnapshot).z1l = function (snapshot) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.o1b_1;
    tmp0_this.o1b_1 = tmp1 + 1 | 0;
  };
  protoOf(MutableSnapshot).y1l = function (snapshot) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.o1b_1 > 0;
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
    tmp0_this.o1b_1 = tmp0_this.o1b_1 - 1 | 0;
    if (tmp0_this.o1b_1 === 0) {
      if (!this.p1b_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).d1a = function () {
    if (this.p1b_1 ? true : this.e10_1)
      return Unit_getInstance();
    this.a1m();
  };
  protoOf(MutableSnapshot).f1l = function () {
    set_openSnapshots(get_openSnapshots().l1l(this.h10()).b1m(this.m1b_1));
  };
  protoOf(MutableSnapshot).g1l = function () {
    this.c1m();
    protoOf(Snapshot).g1l.call(this);
  };
  protoOf(MutableSnapshot).o1l = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.p1b_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(MutableSnapshot).u1l = function () {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!this.p1b_1) {
      tmp = true;
    } else {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp$ret$0 = this.f10_1 >= 0;
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
  protoOf(MutableSnapshot).x1l = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.w1k().w1l(this.h10()).d1m(this.m1b_1);
    var modified = ensureNotNull(this.v1k());
    var statesToRemove = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.j1e();
      var tmp1_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, this.h10(), start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, this.h10(), this.w1k());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var tmp4_safe_receiver = optimisticMerges;
        var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.b2(current);
        var tmp_2;
        if (tmp5_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          tmp$ret$0 = state.l1e(previous, current, applied);
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
          tmp_3.a(to(state, current.g1e()));
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
          tmp_5.a(!equals(merged, previous) ? to(state, merged) : to(state, previous.g1e()));
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
      this.a1m();
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
          var state_0 = tmp0_container.v2();
          var stateRecord = tmp0_container.w2();
          stateRecord.q1l_1 = this.h10();
          var tmp$ret$10;
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = get_lock();
          var tmp$ret$8;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.r1l_1 = state_0.j1e();
          state_0.k1e(stateRecord);
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
  protoOf(MutableSnapshot).a1m = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.v1l(this.h10());
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    var tmp0_also = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.p1b_1 ? !this.e10_1 : false) {
      var previousId = this.h10();
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.y1k(tmp0);
      set_openSnapshots(get_openSnapshots().w1l(this.h10()));
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      this.x1k(addRange(this.w1k(), previousId + 1 | 0, this.h10()));
    }
    tmp$ret$4 = tmp0_also;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  protoOf(MutableSnapshot).v1l = function (id) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1b_1 = this.m1b_1.w1l(id);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(MutableSnapshot).e1m = function (id) {
    if (id >= 0) {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      var tmp1_plus = this.n1b_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([id]);
      var tmp0_plus = tmp$ret$0;
      tmp$ret$1 = primitiveArrayConcat([tmp1_plus, tmp0_plus]);
      tmp$ret$2 = tmp$ret$1;
      tmp.n1b_1 = tmp$ret$2;
    }
  };
  protoOf(MutableSnapshot).f1m = function (handles) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = handles.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var pinned = this.n1b_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$1 = pinned.length === 0;
    if (tmp$ret$1)
      this.n1b_1 = handles;
    else {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      tmp$ret$2 = primitiveArrayConcat([pinned, handles]);
      tmp.n1b_1 = tmp$ret$2;
    }
  };
  protoOf(MutableSnapshot).c1m = function () {
    var inductionVariable = 0;
    var last = this.n1b_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked(this.n1b_1[index]);
      }
       while (inductionVariable <= last);
  };
  protoOf(MutableSnapshot).g1m = function (snapshots) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1b_1 = this.m1b_1.d1m(snapshots);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(MutableSnapshot).d1l = function (state) {
    var tmp0_elvis_lhs = this.v1k();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.p1l(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(state);
  };
  protoOf(MutableSnapshot).p1l = function (_set____db54di) {
    this.l1b_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).v1k = function () {
    return this.l1b_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.i1m_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.k1m_1 = snapshot;
    this.l1m_1 = 8;
  }
  function SnapshotApplyResult() {
    this.m1m_1 = 0;
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
  protoOf(GlobalSnapshot).t1k = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).d1a = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).a1n = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).y1l = function (snapshot) {
    return this.a1n(snapshot);
  };
  protoOf(GlobalSnapshot).b1n = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).z1l = function (snapshot) {
    return this.b1n(snapshot);
  };
  protoOf(GlobalSnapshot).r1b = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  protoOf(GlobalSnapshot).gh = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a1l();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.c1n(id);
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    tmp$ret$0 = get_pinningTable().i1n(pinned);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function StateObject() {
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().j1n(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().dj();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().dj() : tmp0_elvis_lhs;
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
    previousGlobalSnapshot = get_currentGlobalSnapshot().dj();
    tmp$ret$0 = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var result = tmp$ret$3;
    var modified = previousGlobalSnapshot.v1k();
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
    if (!$this.y1n_1) {
      $this.y1n_1 = true;
      $this.x1n_1.y1l($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.x1n_1 = parent;
    this.y1n_1 = false;
    this.x1n_1.z1l(this);
  }
  protoOf(NestedMutableSnapshot).gh = function () {
    if (!this.e10_1) {
      protoOf(MutableSnapshot).gh.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).r1b = function () {
    if (this.x1n_1.p1b_1 ? true : this.x1n_1.e10_1)
      return new Failure(this);
    var modified = this.v1k();
    var id = this.h10();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.x1n_1, this, this.x1n_1.w1k()) : null;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.f() === 0) {
      this.e1l();
    } else {
      var result = this.x1l(this.x1n_1.h10(), optimisticMerges_0, this.x1n_1.w1k());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_elvis_lhs = this.x1n_1.v1k();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = HashSet_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.x1n_1.p1l(tmp0_also);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.t(modified);
    }
    if (this.x1n_1.h10() < id) {
      this.x1n_1.a1m();
    }
    this.x1n_1.x1k(this.x1n_1.w1k().l1l(id).b1m(this.m1b_1));
    this.x1n_1.v1l(id);
    this.x1n_1.e1m(this.n1l());
    this.x1n_1.g1m(this.m1b_1);
    this.x1n_1.f1m(this.n1b_1);
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    this.p1b_1 = true;
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
        result = result.w1l(invalidId);
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
    this.q1l_1 = currentSnapshot().h10();
    this.r1l_1 = null;
    this.s1l_1 = 8;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.v1k();
    var id = currentSnapshot.h10();
    if (modified == null)
      return null;
    var start = applyingSnapshot.w1k().w1l(applyingSnapshot.h10()).d1m(applyingSnapshot.m1b_1);
    var result = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.j1e();
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
        var tmp3_elvis_lhs = readable(first, applyingSnapshot.h10(), applyingSnapshot.w1k());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var merged = state.l1e(previous, current, applied);
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
          tmp1_set.x2(current, merged);
        } else {
          return null;
        }
      }
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().g(snapshot.h10())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().l1l(previousGlobalSnapshot.h10()));
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
    set_openSnapshots(get_openSnapshots().l1l(previousGlobalSnapshot.h10()));
    get_currentGlobalSnapshot().e15(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.gh();
    set_openSnapshots(get_openSnapshots().w1l(globalId));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return result;
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.j1e();
    var validRecord = null;
    var reuseLimit = get_pinningTable().z1n(get_nextSnapshotId()) - 1 | 0;
    var uncertainRecords = 0;
    while (!(current == null)) {
      var currentId = current.q1l_1;
      if (!(currentId === 0)) {
        if (currentId <= reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
          } else {
            var tmp;
            if (current.q1l_1 < validRecord.q1l_1) {
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
            recordToOverwrite.q1l_1 = 0;
            var tmp0_safe_receiver = validRecord;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp$ret$1;
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              recordToOverwrite.f1e(tmp0_safe_receiver);
              tmp$ret$1 = Unit_getInstance();
            }
          }
        } else {
          var tmp1 = uncertainRecords;
          uncertainRecords = tmp1 + 1 | 0;
        }
      }
      current = current.r1l_1;
    }
    return uncertainRecords < 1;
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.q1l_1 < current.q1l_1 ? current : candidate;
      }
      current = current.r1l_1;
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
    return valid_0(snapshot, data.q1l_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.g(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_getInstance_9().jp();
    var tmp0_safe_receiver = snapshot.b1l();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.h10(), snapshot.w1k());
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
      var syncSnapshot = Companion_getInstance_9().jp();
      var tmp_0 = state.j1e();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.h10(), syncSnapshot.w1k());
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
    var tmp0_let = Companion_getInstance_9().jp();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.h10(), tmp0_let.w1k());
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
      var tmp0_let_0 = Companion_getInstance_9().jp();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = readable(r, tmp0_let_0.h10(), tmp0_let_0.w1k());
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
    var tmp0_safe_receiver = snapshot.c1l();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.z1k()) {
      snapshot.d1l(state);
    }
    var id = snapshot.h10();
    if (candidate.q1l_1 === id)
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
    newData.q1l_1 = id;
    snapshot.d1l(state);
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
      tmp0_safe_receiver.q1l_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp$ret$0 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.g1e();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_apply.q1l_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp0_apply.r1l_1 = state.j1e();
      state.k1e(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
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
    var current = state.j1e();
    var validRecord = null;
    var reuseLimit = get_pinningTable().z1n(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_10().t1l_1;
    while (!(current == null)) {
      var currentId = current.q1l_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.q1l_1 < validRecord.q1l_1 ? current : validRecord;
        }
      }
      current = current.r1l_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.z1k()) {
      snapshot.d1l(state);
    }
    var id = snapshot.h10();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.w1k());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.q1l_1 === snapshot.h10())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.d1l(state);
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
    newData.f1e(_this__u8e3s4);
    newData.q1l_1 = snapshot.h10();
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
      set_openSnapshots(get_openSnapshots().w1l(result.h10()));
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
      openSnapshots = Companion_getInstance_10().t1l_1;
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
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_10().t1l_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().w1l(tmp0_also.h10()));
      tmp$ret$0_1 = tmp0_also;
      currentGlobalSnapshot = new AtomicReference(tmp$ret$0_1);
      snapshotInitializer = get_currentGlobalSnapshot().dj();
    }
  }
  function shiftUp($this, index) {
    var values = $this.e1n_1;
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
    var values = $this.e1n_1;
    var half = $this.d1n_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.d1n_1 ? values[right] < values[left] : false) {
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
    var values = $this.e1n_1;
    var index = $this.f1n_1;
    var handles = $this.g1n_1;
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
    var capacity = $this.e1n_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.e1n_1;
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
    var tmp2_copyInto = $this.f1n_1;
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
    $this.e1n_1 = newValues;
    $this.f1n_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.g1n_1.length;
    if ($this.h1n_1 >= capacity) {
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
      var tmp0_copyInto = $this.g1n_1;
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
      $this.g1n_1 = newHandles;
    }
    var handle = $this.h1n_1;
    $this.h1n_1 = $this.g1n_1[$this.h1n_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.g1n_1[handle] = $this.h1n_1;
    $this.h1n_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.d1n_1 = 0;
    this.e1n_1 = new Int32Array(16);
    this.f1n_1 = new Int32Array(16);
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
    tmp.g1n_1 = tmp_2;
    this.h1n_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).z1n = function (default_0) {
    return this.d1n_1 > 0 ? this.e1n_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).i1n = function (value) {
    ensure(this, this.d1n_1 + 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.d1n_1;
    tmp0_this.d1n_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.e1n_1[i] = value;
    this.f1n_1[i] = handle;
    this.g1n_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).j1n = function (handle) {
    var i = this.g1n_1[handle];
    swap(this, i, this.d1n_1 - 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.d1n_1;
    tmp0_this.d1n_1 = tmp1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_8() {
    Companion_instance_8 = this;
    this.t1l_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.i1o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).r1o = function ($this$sequence, $completion) {
    var tmp = this.s1o($this$sequence, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
  };
  protoOf(SnapshotIdSet$iterator$slambda).jd = function (p1, $completion) {
    return this.r1o(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 15;
            this.k1o_1 = this.i1o_1.k1l_1;
            if (!(this.k1o_1 == null)) {
              this.l1o_1 = intArrayIterator(this.k1o_1);
              this.oc_1 = 1;
              continue $sm;
            } else {
              this.oc_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            if (!this.l1o_1.d()) {
              this.oc_1 = 3;
              continue $sm;
            }

            this.m1o_1 = this.l1o_1.e();
            this.oc_1 = 2;
            suspendResult = this.j1o_1.e3(this.m1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.oc_1 = 1;
            continue $sm;
          case 3:
            this.oc_1 = 4;
            continue $sm;
          case 4:
            if (!this.i1o_1.i1l_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.n1o_1 = until(0, 64).c();
              this.oc_1 = 5;
              continue $sm;
            } else {
              this.oc_1 = 9;
              continue $sm;
            }

            break;
          case 5:
            if (!this.n1o_1.d()) {
              this.oc_1 = 8;
              continue $sm;
            }

            this.o1o_1 = this.n1o_1.e();
            if (!this.i1o_1.i1l_1.gc((new Long(1, 0)).k5(this.o1o_1)).equals(new Long(0, 0))) {
              this.oc_1 = 6;
              suspendResult = this.j1o_1.e3(this.o1o_1 + this.i1o_1.j1l_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oc_1 = 7;
              continue $sm;
            }

            break;
          case 6:
            this.oc_1 = 7;
            continue $sm;
          case 7:
            this.oc_1 = 5;
            continue $sm;
          case 8:
            this.oc_1 = 9;
            continue $sm;
          case 9:
            if (!this.i1o_1.h1l_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.p1o_1 = until(0, 64).c();
              this.oc_1 = 10;
              continue $sm;
            } else {
              this.oc_1 = 14;
              continue $sm;
            }

            break;
          case 10:
            if (!this.p1o_1.d()) {
              this.oc_1 = 13;
              continue $sm;
            }

            this.q1o_1 = this.p1o_1.e();
            if (!this.i1o_1.h1l_1.gc((new Long(1, 0)).k5(this.q1o_1)).equals(new Long(0, 0))) {
              this.oc_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.j1o_1.e3((this.q1o_1 + 64 | 0) + this.i1o_1.j1l_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oc_1 = 12;
              continue $sm;
            }

            break;
          case 11:
            this.oc_1 = 12;
            continue $sm;
          case 12:
            this.oc_1 = 10;
            continue $sm;
          case 13:
            this.oc_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.rc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.pc_1 === 15) {
          throw e;
        } else {
          this.oc_1 = this.pc_1;
          this.rc_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).s1o = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.i1o_1, completion);
    i.j1o_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.r1o($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_10();
    this.h1l_1 = upperSet;
    this.i1l_1 = lowerSet;
    this.j1l_1 = lowerBound;
    this.k1l_1 = belowBound;
  }
  protoOf(SnapshotIdSet).g = function (bit) {
    var offset = bit - this.j1l_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).k5(offset).gc(this.i1l_1).equals(new Long(0, 0));
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
        return !tmp_1.k5(offset - 64 | 0).gc(this.h1l_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.k1l_1;
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
  protoOf(SnapshotIdSet).w1l = function (bit) {
    var offset = bit - this.j1l_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).k5(offset);
      if (this.i1l_1.gc(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.h1l_1, this.i1l_1.hc(mask), this.j1l_1, this.k1l_1);
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
        var mask_0 = tmp_1.k5(offset - 64 | 0);
        if (this.h1l_1.gc(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.h1l_1.hc(mask_0), this.i1l_1, this.j1l_1, this.k1l_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.g(bit)) {
            var newUpperSet = this.h1l_1;
            var newLowerSet = this.i1l_1;
            var newLowerBound = this.j1l_1;
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
                  var tmp0_safe_receiver = this.k1l_1;
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
                    if (!newLowerSet.gc((new Long(1, 0)).k5(index)).equals(new Long(0, 0))) {
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
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.k1l_1 : tmp1_elvis_lhs)).w1l(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.k1l_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.h1l_1, this.i1l_1, this.j1l_1, tmp$ret$3);
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
            return new SnapshotIdSet(this.h1l_1, this.i1l_1, this.j1l_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).l1l = function (bit) {
    var offset = bit - this.j1l_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).k5(offset);
      if (!this.i1l_1.gc(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.h1l_1, this.i1l_1.gc(mask.fc()), this.j1l_1, this.k1l_1);
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
        var mask_0 = tmp_1.k5(offset - 64 | 0);
        if (!this.h1l_1.gc(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.h1l_1.gc(mask_0.fc()), this.i1l_1, this.j1l_1, this.k1l_1);
        }
      } else {
        if (offset < 0) {
          var array = this.k1l_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.h1l_1, this.i1l_1, this.j1l_1, null);
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
              return new SnapshotIdSet(this.h1l_1, this.i1l_1, this.j1l_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).b1m = function (bits) {
    if (bits === Companion_getInstance_10().t1l_1)
      return this;
    if (this === Companion_getInstance_10().t1l_1)
      return Companion_getInstance_10().t1l_1;
    var tmp;
    if (bits.j1l_1 === this.j1l_1 ? bits.k1l_1 === this.k1l_1 : false) {
      tmp = new SnapshotIdSet(this.h1l_1.gc(bits.h1l_1.fc()), this.i1l_1.gc(bits.i1l_1.fc()), this.j1l_1, this.k1l_1);
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
        tmp$ret$0 = tmp0__anonymous__q1qw7t.l1l(element);
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).d1m = function (bits) {
    if (bits === Companion_getInstance_10().t1l_1)
      return this;
    if (this === Companion_getInstance_10().t1l_1)
      return bits;
    var tmp;
    if (bits.j1l_1 === this.j1l_1 ? bits.k1l_1 === this.k1l_1 : false) {
      tmp = new SnapshotIdSet(this.h1l_1.hc(bits.h1l_1), this.i1l_1.hc(bits.i1l_1), this.j1l_1, this.k1l_1);
    } else {
      var tmp_0;
      if (this.k1l_1 == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp0__anonymous__q1qw7t = accumulator;
          tmp$ret$0 = tmp0__anonymous__q1qw7t.w1l(element);
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
          tmp$ret$2 = tmp1__anonymous__uwfjfc.w1l(element_0);
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
  protoOf(SnapshotIdSet).c1n = function (default_0) {
    var belowBound = this.k1l_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.i1l_1.equals(new Long(0, 0)))
      return this.j1l_1 + lowestBitOf(this.i1l_1) | 0;
    if (!this.h1l_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.j1l_1 + 64 | 0) + lowestBitOf(this.h1l_1) | 0;
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
    if (b.gc(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.h5(32);
    }
    if (b.gc(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.h5(16);
    }
    if (b.gc(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.h5(8);
    }
    if (b.gc(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.h5(4);
    }
    if (!b.gc(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.gc(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.gc(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.gc(new Long(8, 0)).equals(new Long(0, 0)))
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
    this.w1o_1 = list;
    this.x1o_1 = 0;
  }
  protoOf(StateListStateRecord).f1e = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp = this;
    tmp.w1o_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).w1o_1;
    this.x1o_1 = value.x1o_1;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(StateListStateRecord).g1e = function () {
    return new StateListStateRecord(this.w1o_1);
  };
  function SnapshotStateList() {
    this.y1o_1 = new StateListStateRecord(persistentListOf());
    this.z1o_1 = 0;
  }
  protoOf(SnapshotStateList).j1e = function () {
    return this.y1o_1;
  };
  protoOf(SnapshotStateList).k1e = function (value) {
    value.r1l_1 = this.y1o_1;
    var tmp = this;
    tmp.y1o_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).a1p = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.y1o_1;
    var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = tmp1__anonymous__uwfjfc.x1o_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(SnapshotStateList).b1p = function () {
    var tmp = this.y1o_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).f = function () {
    return this.b1p().w1o_1.f();
  };
  protoOf(SnapshotStateList).l2 = function (element) {
    return this.b1p().w1o_1.i(element);
  };
  protoOf(SnapshotStateList).i = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.l2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).m2 = function (elements) {
    return this.b1p().w1o_1.w(elements);
  };
  protoOf(SnapshotStateList).w = function (elements) {
    return this.m2(elements);
  };
  protoOf(SnapshotStateList).g = function (index) {
    return this.b1p().w1o_1.g(index);
  };
  protoOf(SnapshotStateList).c1p = function (element) {
    return this.b1p().w1o_1.j(element);
  };
  protoOf(SnapshotStateList).j = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.c1p((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).h = function () {
    return this.b1p().w1o_1.h();
  };
  protoOf(SnapshotStateList).c = function () {
    return this.f1f();
  };
  protoOf(SnapshotStateList).d1p = function (element) {
    return this.b1p().w1o_1.k1(element);
  };
  protoOf(SnapshotStateList).k1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.d1p((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).f1f = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).l1 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).f14 = function (element) {
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
      var tmp = this.y1o_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.x1o_1;
      oldList = current_0.w1o_1;
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
      var tmp_0 = this.y1o_1;
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
      snapshot = Companion_getInstance_9().jp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.x1o_1 === currentModification) {
        tmp3__anonymous__ufb84q.w1o_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.x1o_1;
        tmp0_this.x1o_1 = tmp1 + 1 | 0;
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
    return this.f14((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).e1p = function (index, element) {
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
      var tmp = this.y1o_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.x1o_1;
      oldList = current_0.w1o_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.g1f(index, element);
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
      var tmp_0 = this.y1o_1;
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
      snapshot = Companion_getInstance_9().jp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.x1o_1 === currentModification) {
        tmp3__anonymous__ufb84q.w1o_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.x1o_1;
        tmp0_this.x1o_1 = tmp1 + 1 | 0;
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
    return this.e1p(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).f1p = function (elements) {
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
      var tmp = this.y1o_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.x1o_1;
      oldList = current_0.w1o_1;
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
      var tmp_0 = this.y1o_1;
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
      snapshot = Companion_getInstance_9().jp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.x1o_1 === currentModification) {
        tmp3__anonymous__ufb84q.w1o_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.x1o_1;
        tmp0_this.x1o_1 = tmp1 + 1 | 0;
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
    return this.f1p(elements);
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
    var tmp = this.y1o_1;
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
    snapshot = Companion_getInstance_9().jp();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
    tmp3__anonymous__ufb84q.w1o_1 = persistentListOf();
    var tmp0_this = tmp3__anonymous__ufb84q;
    var tmp1 = tmp0_this.x1o_1;
    tmp0_this.x1o_1 = tmp1 + 1 | 0;
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
  protoOf(SnapshotStateList).v1e = function (element) {
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
      var tmp = this.y1o_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.x1o_1;
      oldList = current_0.w1o_1;
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
      var tmp_0 = this.y1o_1;
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
      snapshot = Companion_getInstance_9().jp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.x1o_1 === currentModification) {
        tmp3__anonymous__ufb84q.w1o_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.x1o_1;
        tmp0_this.x1o_1 = tmp1 + 1 | 0;
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
    return this.v1e((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).b3 = function (index) {
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
      var tmp = this.y1o_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.x1o_1;
      oldList = current_0.w1o_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.b3(index);
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
      var tmp_0 = this.y1o_1;
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
      snapshot = Companion_getInstance_9().jp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.x1o_1 === currentModification) {
        tmp3__anonymous__ufb84q.w1o_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.x1o_1;
        tmp0_this.x1o_1 = tmp1 + 1 | 0;
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
  protoOf(SnapshotStateList).g1p = function (index, element) {
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
      var tmp = this.y1o_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.x1o_1;
      oldList = current_0.w1o_1;
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
      var tmp_0 = this.y1o_1;
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
      snapshot = Companion_getInstance_9().jp();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.x1o_1 === currentModification) {
        tmp3__anonymous__ufb84q.w1o_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.x1o_1;
        tmp0_this.x1o_1 = tmp1 + 1 | 0;
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
    return this.g1p(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.h1p_1.a1p() === $this.j1p_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.h1p_1 = list;
    this.i1p_1 = offset - 1 | 0;
    this.j1p_1 = this.h1p_1.a1p();
  }
  protoOf(StateListIterator).d1 = function () {
    return this.i1p_1 >= 0;
  };
  protoOf(StateListIterator).e1 = function () {
    return this.i1p_1 + 1 | 0;
  };
  protoOf(StateListIterator).f1 = function () {
    validateModification(this);
    validateRange(this.i1p_1, this.h1p_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.h1p_1.g(this.i1p_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.i1p_1;
    tmp0_this.i1p_1 = tmp1 - 1 | 0;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(StateListIterator).d = function () {
    return this.i1p_1 < (this.h1p_1.f() - 1 | 0);
  };
  protoOf(StateListIterator).e = function () {
    validateModification(this);
    var newIndex = this.i1p_1 + 1 | 0;
    validateRange(newIndex, this.h1p_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.h1p_1.g(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.i1p_1 = newIndex;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(StateListIterator).c3 = function () {
    validateModification(this);
    this.h1p_1.b3(this.i1p_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.i1p_1;
    tmp0_this.i1p_1 = tmp1 - 1 | 0;
    this.j1p_1 = this.h1p_1.a1p();
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
    this.i14_1 = value;
    this.j14_1 = 8;
  }
  protoOf(AtomicReference).dj = function () {
    return this.i14_1;
  };
  protoOf(AtomicReference).e15 = function (value) {
    this.i14_1 = value;
  };
  protoOf(AtomicReference).k14 = function (value) {
    var oldValue = this.i14_1;
    this.i14_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).s15 = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.i14_1)) {
      this.i14_1 = newValue;
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
      $safe.j3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1p_1 = _this__u8e3s4;
    this.t1p_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).xc = function () {
    var suspendResult = this.qc_1;
    $sm: do
      try {
        var tmp = this.oc_1;
        switch (tmp) {
          case 0:
            this.pc_1 = 2;
            this.oc_1 = 1;
            var tmp0__anonymous__q1qw7t = this;
            var safe = SafeContinuation_init_$Create$(intercepted(tmp0__anonymous__q1qw7t));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.t1p_1, safe));
            ;
            suspendResult = returnIfSuspended(safe.n9(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).mq = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.qc_1 = Unit_getInstance();
    tmp.rc_1 = null;
    return tmp.xc();
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
  protoOf(Trace).b10 = function (name) {
    return null;
  };
  protoOf(Trace).n10 = function (token) {
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
    if ($this.m1k_1) {
      var scope = $this.o1k_1;
      if (!(scope == null)) {
        scope.f16();
        $this.o1k_1 = null;
      }
      var scopes = $this.p1k_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.f();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.g(index);
            item.f16();
          }
           while (inductionVariable < last);
        scopes.d6();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.m1k_1) {
      var scope = composer.l13();
      if (!(scope == null)) {
        composer.o13(scope);
        var lastScope = $this.o1k_1;
        if (replacableWith(lastScope, scope)) {
          $this.o1k_1 = scope;
        } else {
          var lastScopes = $this.p1k_1;
          if (lastScopes == null) {
            var tmp$ret$0;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$0 = ArrayList_init_$Create$();
            var newScopes = tmp$ret$0;
            $this.p1k_1 = newScopes;
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
    receiver.o11(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.u1p($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.l1k_1 = key;
    this.m1k_1 = tracked;
    this.n1k_1 = null;
    this.o1k_1 = null;
    this.p1k_1 = null;
  }
  protoOf(ComposableLambdaImpl).q1k = function (block) {
    if (!equals(this.n1k_1, block)) {
      var oldBlockNull = this.n1k_1 == null;
      this.n1k_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).o11 = function (c, changed) {
    var c_0 = c.z12(this.l1k_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.iv(this) ? differentBits(0) : sameBits(0));
    var tmp = this.n1k_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.a13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z16(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).u1p = function (p1, c, changed) {
    var c_0 = c.z12(this.l1k_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.iv(this) ? differentBits(1) : sameBits(1));
    var tmp = this.n1k_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.a13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z16(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function IntMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.bw_1 = tmp$ret$0;
  }
  protoOf(IntMap).g = function (key) {
    return this.bw_1.b2(key);
  };
  protoOf(IntMap).az = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.bw_1;
    tmp0_set.x2(key, value);
  };
  protoOf(IntMap).d6 = function () {
    this.bw_1.d6();
  };
  //region block: post-declaration
  protoOf(OffsetApplier).kp = onBeginChanges;
  protoOf(OffsetApplier).lp = onEndChanges;
  protoOf(AbstractApplier).kp = onBeginChanges;
  protoOf(AbstractApplier).lp = onEndChanges;
  protoOf(BroadcastFrameClock).n1 = get_key;
  protoOf(BroadcastFrameClock).u3 = get;
  protoOf(BroadcastFrameClock).a4 = fold;
  protoOf(BroadcastFrameClock).z3 = minusKey;
  protoOf(BroadcastFrameClock).b4 = plus;
  protoOf(StructuralEqualityPolicy).z1d = merge;
  protoOf(SnapshotStateList).l1e = mergeRecords;
  protoOf(MonotonicClockImpl).n1 = get_key;
  protoOf(MonotonicClockImpl).u3 = get;
  protoOf(MonotonicClockImpl).a4 = fold;
  protoOf(MonotonicClockImpl).z3 = minusKey;
  protoOf(MonotonicClockImpl).b4 = plus;
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
  _.$_$.n = ProduceStateScope;
  _.$_$.o = Recomposer;
  _.$_$.p = compositionLocalOf;
  _.$_$.q = invalidApplier;
  _.$_$.r = isTraceInProgress;
  _.$_$.s = mutableStateListOf;
  _.$_$.t = mutableStateOf;
  _.$_$.u = produceState$composable;
  _.$_$.v = sourceInformationMarkerEnd;
  _.$_$.w = sourceInformationMarkerStart;
  _.$_$.x = sourceInformation;
  _.$_$.y = staticCompositionLocalOf;
  _.$_$.z = traceEventEnd;
  _.$_$.a1 = traceEventStart;
  _.$_$.b1 = updateChangedFlags;
  _.$_$.c1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.d1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.e1 = _Updater___init__impl__rbfxm8;
  _.$_$.f1 = Updater__set_impl_v7kwss;
  _.$_$.g1 = Companion_getInstance_9;
  _.$_$.h1 = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime.js.map
