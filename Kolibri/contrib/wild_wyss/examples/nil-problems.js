import { map }   from "../src/sequence/operators/map/map.js"
import { Range } from "../src/sequence/constructors/range/Range.js"
import { retainAll } from "../src/sequence/operators/retainAll/retainAll.js";
import {take} from "../src/sequence/operators/take/take.js";
import {Sequence} from "../src/sequence/constructors/sequence/Sequence.js";
import {cycle} from "../src/sequence/operators/cycle/cycle.js";
import {zipWith} from "../src/sequence/operators/zipWith/zipWith.js";
const as     = [1,2,3,4,5];
const bs     = [];
const mapped = map(x => {
  bs.push(x);
  return 2*x;
})(as);
console.log(...take(4)(mapped));
// => Logs '2, 4, 6, 8'
console.log(...bs);
// => Logs '2, 4, 6, 8'
let i = 0;
const mapped2 = map(x => {
  i++;
  return 2 * x;
})([1,2,3,4]);
console.log(i);
// => Logs '0' i has not been incremented
console.log(...take(2)(mapped2));
// => Logs '2, 4'
console.log(i);
// => Logs '2' i has only been incremented two times

const limit = 15;
const range = Range(1, limit);
const fizzez = cycle(["", "", "fizz"]);
const buzzez = cycle(["", "", "", "", "buzz"]);

const pattern = zipWith((fizz, buzz) => fizz + buzz)(fizzez)(buzzez);
const fizzbuzz = zipWith((num, str) => str === "" ? num: str)(range)(pattern);
console.log(...take(limit)(fizzbuzz));