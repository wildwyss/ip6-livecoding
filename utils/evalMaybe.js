export { logMaybe }

/**
 * Logs a value of a maybe if it is present.
 * @template _T_
 * @type { MaybeType<_T_> }
 * @returns void
 */
const logMaybe = maybe =>
  maybe
    (()  => console.log('No value is present.'))
    (val => console.log(`The value is ${val}.`));
