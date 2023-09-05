import { nil, Sequence, take } from "../src/sequence/sequence.js";
import { from } from "../src/jinq/jinq.js";

const MaybePrototype = () => undefined;

MaybePrototype.and = function (bindFn) {
  let returnVal;
  this
  (_ => returnVal = Nothing)
  (x => returnVal = bindFn(x));
  return returnVal;
};

MaybePrototype.fmap = function (mapper) {
  return this.and(x => Just(mapper(x)));
};

MaybePrototype.pure = val => Just(val);
MaybePrototype.empty = () => Nothing;

const Just = x => {
  const just = _f => g => g(x);
  Object.setPrototypeOf(just, MaybePrototype);
  return just;
};
const Nothing = f => _g => f(undefined);
Object.setPrototypeOf(Nothing, MaybePrototype);

const seq   = Sequence(0, i => i < 5, i => i + 1);
const maybe = Just(1);

/**
 * @param { MonadType<Number> } monad
 * @returns MonadType<Number>
 */
const keepEven = monad => monad
  .and(x => {
    if (x % 2 === 0) {
      return monad.pure(x);
    } else {
      return monad.empty();
    }
  });


console.log(...keepEven(seq));

/** Prints the value of a Maybe if it exists */
const evalMaybe = maybe =>
  maybe
  (_ => console.log("There was no value!"))
  (x => console.log(x));

const maybe1 = Just(1);
const maybe2 = Just(2);
const maybe3 = Nothing;

evalMaybe(keepEven(maybe1));
evalMaybe(keepEven(maybe2));
evalMaybe(keepEven(maybe3));



const just    = Just(5);
const nothing = Nothing;

// fmap
const justMapped    = just   .fmap(x => 2*x); // results in 10
const nothingMapped = nothing.fmap(x => 2*x); // Mapping Nothing - nothing happens!
evalMaybe(justMapped);      // => Logs '10'
evalMaybe(nothingMapped);   // => Logs 'There was no value!'

// and
const justAnd    = just   .and(x => nothing); // Turns this value into Nothing
const nothingAnd = nothing.and(x => just);    // Can't change Nothing
evalMaybe(justAnd);         // => Logs 'There was no value!'
evalMaybe(nothingAnd);      // => Logs 'There was no value!'

// pure
evalMaybe(just.pure(2));    // => Logs '2', Same as Just(2)
evalMaybe(nothing.pure(2)); // => Logs '2', Same as Just(2)

// empty
evalMaybe(just.empty());    // => Logs 'There was no value!', Same as Nothing
evalMaybe(nothing.empty()); // => Logs 'There was no value!', Same as Nothing
