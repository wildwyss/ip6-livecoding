import {Sequence} from "../src/sequence/sequence.js";

export {endlessSeq}

const incrFn = i => i + 1;
const untilFn = _ => true;
const endlessSeq = Sequence(0, untilFn, incrFn);

import * as _ from "../src/sequence/sequence.js"

const seq = _.Sequence(0, i => i < 5, i => i + 1);
console.log(_.show(seq));


export { Service }

const getAll  = () => { };
const getById = id => { };

const Service = {
  getAll,
  getById
};