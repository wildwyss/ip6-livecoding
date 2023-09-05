import {Just, Nothing} from "../src/stdlib/maybe.js";
import {Sequence, show} from "../src/sequence/sequence.js";
import {from} from "../src/jinq/jinq.js";
import {Range} from "../src/range/range.js";
import {toMonadicIterable} from "../src/sequence/util/sequenceUtil/iteratorOf.js";

const seq = Sequence(0, i => i < 5, i => i + 1);

const maybe1 = Just(1);
const maybe2 = Just(2);
const maybe3 = Nothing;
const evalMaybe = maybe =>
  maybe
  (_ => console.log("There was no value!"))
  (x => console.log("JINQ", x));

const keepEvenJINQ = monad =>
  from(monad)
    .where(x => x % 2 === 0)
    .result();

console.log("JINQ", ...keepEvenJINQ(seq));

evalMaybe(keepEvenJINQ(maybe1));
evalMaybe(keepEvenJINQ(maybe2));
evalMaybe(keepEvenJINQ(maybe3));

const pairs =
  from(Range(1,10))
    .pairWith(Range(1, 4))
    .where(([i, j]) => i - j === 1)
    .result();
// tuple = [(i, j) | i <- [1..10], j <- [1..4],  i - j == 1]
console.log(pairs.fmap(show).toString());