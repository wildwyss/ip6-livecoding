import { Just } from "../src/stdlib/maybe.js";

const safeHead = list => {
  const head = list[0];
  return head ? Just(head) : Nothing;
};

const xs        = [1, 2, 3]; // array with x values
const ys        = [4, 5, 6]; // array with y values
const maybeX    = safeHead(xs); // getting the head of xs
const maybeY    = safeHead(ys); // getting the head of ys

const plus      = x => y => x + y;
const maybePlus = Just(plus);
const maybeSumX = maybePlus.and(p => maybeX.fmap(p)); // plus(x)
const maybeSum  = maybeSumX.and(pX => maybeY.fmap(pX)); // plus(x)(y)

const evalMaybe = maybe =>
  maybe
  (_ => console.log("There was no value!"))
  (x => console.log(x));

evalMaybe(maybeSum);

