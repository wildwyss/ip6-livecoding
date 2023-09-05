import { from } from "../Kolibri/contrib/wild_wyss/src/jinq/jinq.js";
import { Just, Nothing } from "../Kolibri/contrib/wild_wyss/src/stdlib/maybe.js";
import { logMaybe } from "../utils/evalMaybe.js";
import { Range } from "../Kolibri/contrib/wild_wyss/src/sequence/sequence.js";

const even = Just(2);
const odd  = Just(3);
logMaybe(even);
logMaybe(odd);