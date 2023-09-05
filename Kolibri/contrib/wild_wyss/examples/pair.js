import { Pair } from "../src/stdlib/pair.js";
import { map }  from "../src/sequence/sequence.js";

const pair = Pair(1)(2);
console.log(...map(x => 2*x)(pair));
console.log(...pair);
