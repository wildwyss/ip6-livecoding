import { from } from "../Kolibri/contrib/wild_wyss/src/jinq/jinq.js";
import { Just } from "../Kolibri/contrib/wild_wyss/src/stdlib/maybe.js";
import { logMaybe } from "../utils/evalMaybe.js";
import { Range } from "../Kolibri/contrib/wild_wyss/src/sequence/sequence.js";

const even = Just(2);
const odd  = Just(3);
logMaybe(even);
logMaybe(odd);

/**
 * @template _T_
 * @param { MonadType<_T_> } monad
 * @returns { MonadType<_T_>}
 */
const keepEven = monad =>
  from(monad)
    .where(x => x % 2 === 0)
    .result();

logMaybe(keepEven(even));
logMaybe(keepEven(odd));

const sequence = Range(0, 10);
console.log(...sequence);
console.log(...keepEven(sequence));

