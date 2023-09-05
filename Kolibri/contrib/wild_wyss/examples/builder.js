import * as _ from "../src/sequence/sequence.js"
import {SequenceBuilder, show} from "../src/sequence/sequence.js";

let seq = [1];
const limit = 4000000;
const builder = SequenceBuilder();
for (let i = 0; i < limit; i++){
  builder.append(1);
}
console.log(show(builder.build(), 2*limit));