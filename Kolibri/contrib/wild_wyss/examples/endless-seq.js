import * as _ from "../src/sequence/sequence.js"

const seq      = _.Sequence(0, _ => true, x => x + 1);
const part     = _.take(5)(seq);
const reversed = _.reverse$(part);

console.log(...reversed);
// => Logs '0, 1, 2, 3, 4'

const mySequence = _.take(5)(
  _.retainAll(x => x > 50)(
    _.map(x => 2 * x)(
      _.rejectAll(x => x % 2 === 1)(seq)
    )
  )
);
console.log(...mySequence);
// => Logs '52, 56, 60, 64, 68'

const mySequence2 = _.pipe(
  _.rejectAll(x => x % 2 === 1),
  _.map(x => 2 * x),
  _.retainAll(x => x > 50),
  _.take(5)
)(seq);

console.log(...mySequence2);
// => Logs '52, 56, 60, 64, 68'

const mySequence3 = seq.pipe(
  _.rejectAll(x => x % 2 === 1),
  _.map(x => 2 * x),
  _.retainAll(x => x > 50),
  _.take(5)
);
console.log(...mySequence3);
// => Logs '52, 56, 60, 64, 68'
