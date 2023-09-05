import { Range, show } from "../src/sequence/sequence.js"
import { from }     from "../src/jinq/jinq.js";

const range = Range(1,10);

const result =
  from(range)
    .pairWith(range)
    .pairWith(range)
    .where ( ([ [a,b], c ]) => a * a + b * b === c * c)
    .select( ([ [a,b], c ]) => `[${a}, ${b}, ${c}]`)
    .result();

console.log(show(/** @type SequenceType */ result));
// => Logs '[[3, 4, 5],[4, 3, 5],[6, 8, 10],[8, 6, 10]]
